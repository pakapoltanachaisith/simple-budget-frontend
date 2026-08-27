import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@components/Button";
import Input from "@components/Input";
import InputError from "@components/InputError";
import Label from "@components/Label";
import { loginFormSchema, type LoginFormData } from "@/lib/validation";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    alert("submit!");
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="simple-budget-logo.svg"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-extrabold tracking-tight text-gray-900 font-lora">
            Log in to Simple Budget
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Inputs */}
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="johndoe@example.com"
                  disabled={isLoading}
                />
                <InputError message={errors.email?.message} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  id="password"
                  required
                  type="password"
                  disabled={isLoading}
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

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account?
            <Link
              to="/register"
              className="font-semibold text-primary-600 hover:text-primary-500 ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
