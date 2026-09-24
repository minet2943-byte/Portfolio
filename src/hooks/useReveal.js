import { useEffect, useRef, useState } from "react";

function useReveal() {
  const elementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [elementRef, isRevealed];
}

export default useReveal;
