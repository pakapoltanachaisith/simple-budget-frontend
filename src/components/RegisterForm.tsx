import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AlertTriangle } from "lucide-react";

import Button from "@components/Button";
import Input from "@components/Input";
import InputError from "@components/InputError";
import Label from "@components/Label";
import { registerFormSchema, type RegisterFormData } from "@/lib/validation";
import PasswordInput from "@components/PasswordInput";
import { useAuth } from "@/api/AuthContenxt";

export default function RegisterForm() {
  const { register: registerUser, errorMessage } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    await registerUser(
      data.name,
      data.email,
      data.password,
      data.password_confirmation,
    );
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
        <div className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="John Doe"
              required
              disabled={isLoading}
            />
            <InputError message={errors?.name?.message} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="johndoe@example.com"
              {...register("email")}
              required
              disabled={isLoading}
            />
            <InputError message={errors?.email?.message} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              id="password"
              type="password"
              {...register("password")}
              required
              disabled={isLoading}
            />
            <InputError message={errors?.password?.message} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password_confirmation">Confirm Password</Label>
            <PasswordInput
              id="password_confirmation"
              type="password"
              {...register("password_confirmation")}
              required
              disabled={isLoading}
            />
            <InputError message={errors?.password_confirmation?.message} />
          </div>
        </div>

        <div className="mt-10">
          <Button type="submit" fullWidth disabled={isLoading}>
            Create Account
          </Button>
        </div>
      </form>
    </>
  );
}
