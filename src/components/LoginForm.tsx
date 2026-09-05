import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AlertTriangle } from "lucide-react";

import { loginFormSchema, type LoginFormData } from "@/lib/validation";
import PasswordInput from "@/components/PasswordInput";
import { useAuth } from "@/api/AuthContenxt";

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
          <div className="fieldset">
            <label htmlFor="email" className="fieldset-legend">
              Email Address
            </label>
            <input
              {...register("email")}
              className="input w-full"
              id="email"
              type="email"
              autoComplete="email"
              placeholder="johndoe@example.com"
              disabled={isLoading}
              required
              autoFocus
            />
            {errors?.email?.message && (
              <p className="label text-error">{errors.email.message}</p>
            )}
          </div>

          <div className="fieldset">
            <label htmlFor="password">Password</label>
            <PasswordInput
              {...register("password")}
              id="password"
              disabled={isLoading}
              required
            />
            {errors?.password?.message && (
              <p className="label text-error">afsgdhfjk</p>
            )}
          </div>
        </div>

        <div className="mt-10">
          <button type="submit" className="btn btn-block btn-primary">
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
