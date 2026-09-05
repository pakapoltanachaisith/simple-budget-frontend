import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AlertTriangle } from "lucide-react";

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
          <div className="fieldset">
            <label htmlFor="name" className="fieldset-legend">
              Name
            </label>
            <input
              id="name"
              className="input w-full"
              {...register("name")}
              placeholder="John Doe"
              required
              disabled={isLoading}
              autoFocus
            />
            {errors?.name?.message && (
              <p className="label text-error">{errors.name.message}</p>
            )}
          </div>
          <div className="fieldset">
            <label htmlFor="email" className="fieldset-legend">
              Email address
            </label>
            <input
              className="input w-full"
              id="email"
              type="email"
              autoComplete="email"
              placeholder="johndoe@example.com"
              {...register("email")}
              required
              disabled={isLoading}
            />
            {errors?.email?.message && (
              <p className="label text-error">{errors.email.message}</p>
            )}
          </div>
          <div className="fieldset">
            <label htmlFor="password" className="fieldset-legend">
              Password
            </label>
            <PasswordInput
              className="w-full"
              id="password"
              {...register("password")}
              required
              disabled={isLoading}
            />
            {errors?.password?.message && (
              <p className="label text-error">{errors.password.message}</p>
            )}
          </div>
          <div className="fieldset">
            <label htmlFor="password_confirmation" className="fieldset-legend">
              Confirm Password
            </label>
            <PasswordInput
              className="w-full"
              id="password_confirmation"
              {...register("password_confirmation")}
              required
              disabled={isLoading}
            />
            {errors?.password_confirmation?.message && (
              <p className="label text-error">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10">
          <button type="submit" className="btn btn-primary btn-block">
            Create Account
          </button>
        </div>
      </form>
    </>
  );
}
