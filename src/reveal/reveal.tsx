import { createElement, type ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  className?: string;
  as?: string;
}

const DIRECTION_CLASSES: Record<string, string> = {
  up: "translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
  scale: "scale-95",
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as = "div",
}: RevealProps) {
  const { ref, isInView } = useInView<HTMLElement>();

  return createElement(
    as,
    {
      ref: ref as React.Ref<HTMLElement>,
      style: { transitionDelay: `${delay}ms` },
      className: `transition-all duration-700 ease-out ${
        isInView
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${DIRECTION_CLASSES[direction] ?? DIRECTION_CLASSES.up}`
      } ${className}`,
    },
    children,
  );
}