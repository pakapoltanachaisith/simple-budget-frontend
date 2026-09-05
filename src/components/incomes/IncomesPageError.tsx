import { AlertTriangleIcon } from "lucide-react";

interface IncomesPageErrorProps {
  message?: string;
}

export default function IncomesPageError({ message }: IncomesPageErrorProps) {
  return (
    <div className="mx-auto lg:w-3/4">
      <h1 className="font-lora text-2xl lg:text-3xl font-bold mb-8 lg:mb-10">
        My Incomes
      </h1>

      <div className="bg-red-100 border border-red-200 p-6 lg:p-8 rounded-2xl text-center">
        <AlertTriangleIcon className="size-10 mx-auto text-red-500" />
        <p className="text-lg text-red-900 mt-4">
          {message ?? "Something went wrong."}
        </p>
      </div>
    </div>
  );
}
