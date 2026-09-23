import { useEffect, useRef, useCallback } from "react";

/**
 * useScrollAnimation — Attaches an IntersectionObserver to a ref.
 * Adds the "scroll-visible" class when the element enters the viewport.
 *
 * @param {Object}  options
 * @param {number}  options.threshold   - 0-1, how much of the element must be visible (default 0.15)
 * @param {string}  options.rootMargin  - CSS margin string for the observer root (default "0px 0px -60px 0px")
 * @param {boolean} options.once        - If true, only triggers once (default true)
 */
export default function useScrollAnimation({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  once = true,
} = {}) {
  const ref = useRef(null);

  const handleIntersect = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-visible");
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          entry.target.classList.remove("scroll-visible");
        }
      });
    },
    [once]
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin,
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [handleIntersect, threshold, rootMargin]);

  return ref;
}

/**
 * useScrollAnimationAll — Observes ALL matching children inside a container.
 * Useful for staggered card grids: wrap the container, and every child
 * with class `scroll-item` gets animated individually.
 *
 * @param {Object}  options
 * @param {string}  options.selector    - CSS selector for children to observe (default ".scroll-item")
 * @param {number}  options.threshold
 * @param {string}  options.rootMargin
 * @param {boolean} options.once
 */
export function useScrollAnimationAll({
  selector = ".scroll-item",
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("scroll-visible");
          }
        });
      },
      { threshold, rootMargin }
    );

    const items = container.querySelectorAll(selector);
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold, rootMargin, once]);

  return ref;
}
