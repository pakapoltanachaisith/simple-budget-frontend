import { useSearchParams } from "react-router";

import IncomeList from "@/components/incomes/IncomeList";
import IncomesPageSkeleton from "@/components/incomes/IncomesPageSkeleton";
import IncomesPageError from "@/components/incomes/IncomesPageError";
import useIncomes from "@/hooks/useIncomes";
import Pagination from "@/components/Pagination";

export default function IncomesPage() {
  const [searchParams] = useSearchParams();
  const { data, status, error } = useIncomes({
    page: parseInt(searchParams.get("page") ?? "1"),
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

      <div className="text-center mt-8">
        <Pagination pageCount={data.meta.last_page} />
      </div>
    </div>
  );
}
