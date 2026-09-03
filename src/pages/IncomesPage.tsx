import { fetchIncomes } from "@/api/incomes";
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
    <div>
      <h1>Incomes</h1>
      <ul>
        {data.data.map((income) => (
          <li key={income.id}>
            {income.note} - ${income.amount / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}
