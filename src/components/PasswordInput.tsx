import { useState, type ComponentProps } from "react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

interface PasswordInputProps extends ComponentProps<"input"> {}

export default function PasswordInput({ ...rest }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggle = () => {
    setShowPassword((state) => !state);
  };
  return (
    <div className="join">
      <div className="grow">
        <div className="input  join-item">
          <input type={showPassword ? "text" : "password"} {...rest} />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-square join-item"
        onClick={toggle}>
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
        {showPassword ? (
          <EyeClosedIcon className="size-4" />
        ) : (
          <EyeIcon className="size-4" />
        )}{" "}
      </button>
    </div>
  );
}
