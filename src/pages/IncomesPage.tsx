import { useQuery } from "@tanstack/react-query";

import { fetchIncomes } from "@/api/incomes";
import IncomeList from "@/components/incomes/IncomeList";
import IncomesPageSkeleton from "@/components/incomes/IncomesPageSkeleton";
import IncomesPageError from "@/components/incomes/IncomesPageError";

export default function IncomesPage() {
  const { data, status, error } = useQuery({
    queryKey: ["incomes"],
    queryFn: fetchIncomes,
  });

  if (status === "pending") {
    return <IncomesPageSkeleton />;
  }

  if (status === "error") {
    return <IncomesPageError message={error?.message} />;
  }

  return (
    <div className="mx-auto lg:w-3/4">
      <div className="mb-8 lg:mb-10">
        <h1 className="font-lora text-2xl lg:text-3xl font-bold">My Incomes</h1>
        <div className="divider"></div>
      </div>
      <div>
        <IncomeList incomes={data.data} />
      </div>
    </div>
  );
}
