import { useEffect, useState } from "react";

export function useNavbarScrolled(
  selector = "#nav-sentinel"
) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = document.querySelector(selector);
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => setScrolled(!e.isIntersecting)
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [selector]);

  return scrolled;
}
