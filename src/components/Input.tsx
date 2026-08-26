import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

interface InputProps extends ComponentProps<"input"> {}

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={cn(
        "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6",
        className,
      )}
    />
  );
}
