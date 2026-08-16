"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef } from "react";

type RevealProps = ComponentPropsWithoutRef<"section">;

export function Reveal({ className = "", ...props }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px 15% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      {...props}
    />
  );
}
