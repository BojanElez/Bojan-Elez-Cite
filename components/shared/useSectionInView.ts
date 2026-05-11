"use client";

import { useEffect, useRef, useState } from "react";

export function useSectionInView<T extends HTMLElement>() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<T>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);

  return { isVisible, sectionRef };
}
