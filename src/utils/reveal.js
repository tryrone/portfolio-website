/** Progressive motion: unsupported APIs and reduced-motion keep content visible. */
export function initializeReveals(root = document, environment = window) {
  const nodes = [...root.querySelectorAll("[data-reveal]")];
  if (!environment.matchMedia || !environment.IntersectionObserver)
    return () => {};

  const preference = environment.matchMedia("(prefers-reduced-motion: reduce)");
  let observer;
  const reveal = (node) => {
    node.classList.remove("reveal-pending");
    node.classList.add("is-revealed");
    observer?.unobserve(node);
  };
  const update = () => {
    observer?.disconnect();
    if (preference.matches) {
      nodes.forEach(reveal);
      return;
    }
    observer = new environment.IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) reveal(target);
        });
      },
      { threshold: 0.05 },
    );
    nodes.forEach((node) => {
      // Never hide content already in the viewport or reached by keyboard.
      if (
        node.classList.contains("is-revealed") ||
        node.getBoundingClientRect().top < environment.innerHeight ||
        node.contains(root.activeElement)
      )
        return;
      node.classList.add("reveal-pending");
      observer.observe(node);
    });
  };
  const onFocus = (event) => {
    const node = event.target.closest?.("[data-reveal]");
    if (node) reveal(node);
  };
  const onHash = () => {
    let id;
    try {
      id = decodeURIComponent(environment.location.hash.slice(1));
    } catch {
      return;
    }
    const target = root.getElementById(id);
    if (!target) return;
    nodes
      .filter((node) => node === target || target.contains(node))
      .forEach(reveal);
  };
  update();
  onHash();
  preference.addEventListener("change", update);
  root.addEventListener("focusin", onFocus);
  environment.addEventListener("hashchange", onHash);
  return () => {
    observer?.disconnect();
    preference.removeEventListener("change", update);
    root.removeEventListener("focusin", onFocus);
    environment.removeEventListener("hashchange", onHash);
    nodes.forEach((node) => node.classList.remove("reveal-pending"));
  };
}
