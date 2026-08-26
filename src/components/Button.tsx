import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends ComponentProps<"button"> {
  fullWidth?: boolean;
}

export default function Button({
  children,
  className,
  fullWidth,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={cn(
        "flex justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}>
      {children}
    </button>
  );
}
