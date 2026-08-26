import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

interface LabelProps extends ComponentProps<"label"> {}

export default function Label({ children, ...rest }: LabelProps) {
  return (
    <label
      {...rest}
      className={cn("block text-sm/6 font-medium text-gray-900")}>
      {children}
    </label>
  );
}
