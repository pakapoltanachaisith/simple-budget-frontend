import { useState, type ComponentProps } from "react";
import { Eye, EyeClosed } from "lucide-react";

import { cn } from "@/lib/utils";

interface PasswordInputProps extends ComponentProps<"input"> {}

export default function PasswordInput({
  className,
  ...rest
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center w-full rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary-600">
      <input
        {...rest}
        type={showPassword ? "text" : "password"}
        className={cn(
          "block flex-1 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400  sm:text-sm/6 focus:outline-none",
          className,
        )}
      />
      <button
        type="button"
        className="text-gray-400 px-3 self-stretch hover:text-primary-500"
        onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? (
          <EyeClosed className="size-4" />
        ) : (
          <Eye className="size-4" />
        )}
      </button>
    </div>
  );
}
