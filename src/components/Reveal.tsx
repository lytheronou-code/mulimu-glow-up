import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

const revealCallbacks = new WeakMap<Element, () => void>();
let sharedObserver: IntersectionObserver | undefined;

function getRevealObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          revealCallbacks.get(entry.target)?.();
          revealCallbacks.delete(entry.target);
          sharedObserver?.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
  }
  return sharedObserver;
}

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = getRevealObserver();
    revealCallbacks.set(el, () => setVisible(true));
    observer.observe(el);
    return () => {
      revealCallbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
