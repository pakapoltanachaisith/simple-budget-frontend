import Button from "../components/Button";
import Input from "../components/Input";
import InputError from "../components/InputError";
import Label from "../components/Label";
import { Link } from "react-router";

export default function LoginPage() {
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
          <form action="#" method="POST" className="space-y-6">
            {/* Inputs */}
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
                <InputError message="Email invalid" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" required type="password" />
              </div>
            </div>

            <div className="mt-10">
              <Button type="submit" fullWidth>
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
