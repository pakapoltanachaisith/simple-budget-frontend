import { Link } from "react-router";

import LoginForm from "@/components/LoginForm";

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
          <LoginForm />
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
