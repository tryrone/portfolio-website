import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  links,
  projects,
  otherProjects,
  experience,
} from "../src/portfolio.js";
import { createEmailUrl } from "../src/utils/contact.js";

test("email draft encodes special characters, whitespace, line breaks and unicode", () => {
  const draft = {
    name: "  Alex & Sam  ",
    senderEmail: "alex+work@example.com",
    message: "  Hello Tega!\nReact Native & Expo? #1 = yes ✓  ",
  };
  const result = createEmailUrl(links.email, draft);
  const query = new URLSearchParams(result.split("?")[1]);
  assert.equal(result.split("?")[0], `mailto:${links.email}`);
  assert.equal(query.get("subject"), "Portfolio enquiry from Alex & Sam");
  assert.equal(
    query.get("body"),
    "Name: Alex & Sam\nEmail: alex+work@example.com\n\nHello Tega!\nReact Native & Expo? #1 = yes ✓",
  );
  assert.equal([...query.keys()].length, 2);
});

test("project identifiers are unique, safe anchors with clear ownership", () => {
  assert.equal(new Set(projects.map((project) => project.id)).size, 3);
  for (const project of projects) {
    assert.match(project.id, /^[a-z0-9-]+$/);
    for (const field of [
      "name",
      "role",
      "contribution",
      "focus",
      "status",
      "url",
    ])
      assert.ok(project[field]);
  }
  assert.match(projects[0].type, /Independent/);
  assert.match(projects[0].status, /Early.stage|early.stage/);
  assert.match(projects[0].status, /planned, not a released/);
  assert.match(projects[1].type, /Professional contribution/);
  assert.match(projects[2].type, /Professional contribution/);
});

test("all sixteen original project destinations are retained as HTTPS links", () => {
  const urls = [
    ...projects.map((project) => project.url),
    ...otherProjects.map((project) => project[2]),
  ];
  assert.equal(urls.length, 16);
  assert.equal(new Set(urls).size, 16);
  urls.forEach((url) => assert.equal(new URL(url).protocol, "https:"));
  assert.ok(
    urls.includes(
      "https://play.google.com/store/apps/details?id=com.chowdeck.vendor",
    ),
  );
  assert.ok(
    urls.includes(
      "https://apps.apple.com/us/app/chowdeck-food-delivery/id1530676376",
    ),
  );
});

test("original CV and contact destinations are preserved", () => {
  assert.equal(links.email, "tegararuvwe@gmail.com");
  assert.equal(links.github, "https://github.com/tryrone");
  assert.match(links.cv, /1tOkBQUws5CSp4fhJ6WRrNI1fjkVLgWp1/);
  assert.equal(experience.length, 8);
});

test("active portfolio has no unsupported traction or commercial counters", () => {
  const copy =
    JSON.stringify(projects) +
    readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  assert.doesNotMatch(
    copy,
    /50,000|120\+|12\+ companies|95%|\$7M|winning sports betting/,
  );
});

test("all main navigation targets exist and form labels are associated", () => {
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  for (const target of [
    "top",
    "main-content",
    "projects",
    "about",
    "experience",
    "contact",
  ])
    assert.ok(app.includes(`id="${target}"`));
  for (const field of ["contact-name", "contact-email", "contact-message"]) {
    assert.ok(app.includes(`htmlFor="${field}"`));
    assert.ok(app.includes(`id="${field}"`));
  }
  assert.match(app, /aria-expanded=\{open\}/);
  assert.match(app, /aria-controls="primary-navigation"/);
  assert.match(app, /event.key === ["']Escape["']/);
  assert.match(app, /Opens a draft in your email app/);
});
