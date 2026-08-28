import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Button from "@components/Button";
import Input from "@components/Input";
import InputError from "@components/InputError";
import Label from "@components/Label";
import { loginFormSchema, type LoginFormData } from "@/lib/validation";
import PasswordInput from "@/components/PasswordInput";
import { login } from "@/api/auth";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const result = await login(data.email, data.password);
    console.log(result);
  };

  return (
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
  );
}
