import Button from "../components/Button";
import Input from "../components/Input";
import InputError from "../components/InputError";
import Label from "../components/Label";
import { Link } from "react-router";
import { registerFormSchema, type RegisterFormData } from "../lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    alert("Submit Register form");
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
            Sign up to Simple Budget
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                <Input
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
                <Input
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

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?
            <Link
              to="/login"
              className="font-semibold text-primary-600 hover:text-primary-500 ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
