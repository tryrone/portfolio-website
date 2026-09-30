import test from "node:test";
import assert from "node:assert/strict";
import { initializeReveals } from "../src/utils/reveal.js";

function fixture({ reduced = false, support = true, hash = "" } = {}) {
  const listeners = new Map();
  const makeNode = (top) => {
    const classes = new Set();
    return {
      classList: {
        add: (value) => classes.add(value),
        remove: (value) => classes.delete(value),
        contains: (value) => classes.has(value),
      },
      classes,
      getBoundingClientRect: () => ({ top }),
      contains: () => false,
    };
  };
  const visible = makeNode(100);
  const below = makeNode(1000);
  const nodes = [visible, below];
  const preference = {
    matches: reduced,
    addEventListener: (_, fn) => listeners.set("change", fn),
    removeEventListener: () => listeners.delete("change"),
  };
  let callback;
  const observed = new Set();
  class Observer {
    constructor(fn) {
      callback = fn;
    }
    observe(node) {
      observed.add(node);
    }
    unobserve(node) {
      observed.delete(node);
    }
    disconnect() {
      observed.clear();
    }
  }
  const root = {
    querySelectorAll: () => nodes,
    activeElement: null,
    getElementById: (id) =>
      id === "projects" ? { contains: (node) => node === below } : null,
    addEventListener: (key, fn) => listeners.set(key, fn),
    removeEventListener: (key) => listeners.delete(key),
  };
  const environment = {
    matchMedia: () => preference,
    IntersectionObserver: support ? Observer : undefined,
    innerHeight: 800,
    location: { hash },
    addEventListener: (key, fn) => listeners.set(key, fn),
    removeEventListener: (key) => listeners.delete(key),
  };
  return {
    root,
    environment,
    visible,
    below,
    preference,
    listeners,
    observed,
    enter: () => callback([{ target: below, isIntersecting: true }]),
  };
}

test("reveal enhancement never hides initially visible content and reveals once on intersection", () => {
  const f = fixture();
  const cleanup = initializeReveals(f.root, f.environment);
  assert.equal(f.visible.classes.has("reveal-pending"), false);
  assert.equal(f.below.classes.has("reveal-pending"), true);
  f.enter();
  assert.equal(f.below.classes.has("reveal-pending"), false);
  assert.equal(f.below.classes.has("is-revealed"), true);
  assert.equal(f.observed.size, 0);
  cleanup();
  assert.equal(f.listeners.size, 0);
});

test("reduced motion and unsupported observers keep all content visible", () => {
  for (const options of [{ reduced: true }, { support: false }]) {
    const f = fixture(options);
    const cleanup = initializeReveals(f.root, f.environment);
    assert.equal(f.below.classes.has("reveal-pending"), false);
    assert.equal(f.observed.size, 0);
    cleanup();
  }
});

test("live reduced-motion preference reveals pending content", () => {
  const f = fixture();
  const cleanup = initializeReveals(f.root, f.environment);
  f.preference.matches = true;
  f.listeners.get("change")();
  assert.equal(f.below.classes.has("reveal-pending"), false);
  assert.equal(f.observed.size, 0);
  cleanup();
});

test("keyboard focus and hash navigation reveal their targets", () => {
  const f = fixture();
  const cleanup = initializeReveals(f.root, f.environment);
  f.listeners.get("focusin")({ target: { closest: () => f.below } });
  assert.equal(f.below.classes.has("reveal-pending"), false);
  cleanup();
  const anchored = fixture({ hash: "#projects" });
  const stop = initializeReveals(anchored.root, anchored.environment);
  assert.equal(anchored.below.classes.has("reveal-pending"), false);
  stop();
});

test("cleanup restores pending elements and removes observers/listeners", () => {
  const f = fixture();
  const cleanup = initializeReveals(f.root, f.environment);
  cleanup();
  assert.equal(f.below.classes.has("reveal-pending"), false);
  assert.equal(f.listeners.size, 0);
  assert.equal(f.observed.size, 0);
});
