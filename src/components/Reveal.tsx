import { type ElementType, type ReactNode } from "react";

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
  return (
    <Tag style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
