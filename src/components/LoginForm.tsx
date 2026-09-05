import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{errorMessage}</span>
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
