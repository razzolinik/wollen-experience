import { type ReactNode, type CSSProperties } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
  };
  return (
    <div
      ref={ref}
      style={style}
      className={[
        "transition-all duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
