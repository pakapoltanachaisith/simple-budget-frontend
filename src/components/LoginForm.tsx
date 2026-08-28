import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Button from "@components/Button";
import Input from "@components/Input";
import InputError from "@components/InputError";
import Label from "@components/Label";
import { loginFormSchema, type LoginFormData } from "@/lib/validation";
import PasswordInput from "@/components/PasswordInput";
import { useAuth } from "@/api/AuthContenxt";
import { AlertTriangle } from "lucide-react";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const { login, errorMessage } = useAuth();

  const onSubmit = async (data: LoginFormData) => {
    await login(data.email, data.password);
  };

  return (
    <>
      {errorMessage && (
        <div
          className="flex p-2.5 rounded-md items-start bg-red-100 mb-3"
          role="alert">
          <AlertTriangle className="size-4 mr-4 text-red-500" />
          <div className="flex-1 text-sm text-red-900">{errorMessage}</div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Inputs */}
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              autoComplete="email"
              placeholder="johndoe@example.com"
              disabled={isLoading}
              required
            />
            <InputError message={errors.email?.message} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              {...register("password")}
              id="password"
              type="password"
              disabled={isLoading}
              required
            />
            <InputError message={errors.password?.message} />
          </div>
        </div>

        <div className="mt-10">
          <Button type="submit" fullWidth disabled={isLoading}>
            Continue
          </Button>
        </div>
      </form>
    </>
  );
}
