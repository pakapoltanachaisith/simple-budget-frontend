import Button from "../components/Button";
import Input from "../components/Input";
import InputError from "../components/InputError";
import Label from "../components/Label";
import { Link } from "react-router";

export default function RegisterPage() {
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
          <form action="#" method="POST" className="space-y-6">
            {/* Inputs */}
            <div className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required autoComplete="email" />
                <InputError message="Name is required." />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" required type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <Input
                  id="password_confirmation"
                  name="password"
                  required
                  type="password"
                />
              </div>
            </div>

            <div className="mt-10">
              <Button type="submit" fullWidth>
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
