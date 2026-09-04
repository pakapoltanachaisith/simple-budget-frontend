import { fetchIncomes } from "@/api/incomes";
import IncomeList from "@/components/IncomeList";
import { useQuery } from "@tanstack/react-query";

export default function IncomesPage() {
  const { data, status, error } = useQuery({
    queryKey: ["incomes"],
    queryFn: fetchIncomes,
  });

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p className="text-red-500">{error.message}</p>;
  }

  return (
    <div className="mx-auto lg:w-3/4">
      <h1 className="font-lora text-2xl lg:text-3xl font-bold mb-8 lg:mb-10">
        My Incomes
      </h1>

      <div>
        <IncomeList incomes={data.data} />
      </div>
    </div>
  );
}
