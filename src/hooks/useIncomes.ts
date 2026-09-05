import { useQuery } from "@tanstack/react-query";

import { fetchIncomes } from "@/api/incomes";

interface UseIncomesOptions {
  page?: number;
}

export default function useIncomes({ page = 1 }: UseIncomesOptions) {
  return useQuery({
    queryKey: ["incomes", { page }],
    queryFn: () => fetchIncomes({ page }),
  });
}
