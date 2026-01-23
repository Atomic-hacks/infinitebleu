"use client";

import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
  arrowPosition?: "left" | "right";
}

function Button({
  children,
  className = "",
  onClick,
  showArrow = false,
  arrowPosition = "right",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center px-6 py-3 backdrop-blur-sm border border-neutral-500/20 rounded-tr-3xl rounded-bl-3xl shadow-xs text-white transition-all duration-300 ${className}`}     >
      {showArrow && arrowPosition === "left" && (
        <ArrowRight className="w-0 h-4 rotate-180 opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
      )}

      {children}

      {showArrow && arrowPosition === "right" && (
        <ArrowRight className="w-0 h-4 opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:ml-2 transition-all duration-300" />
      )}
    </button>
  );
}
export default Button;
