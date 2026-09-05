import { apiFetch } from "./client";
import type { Income, PaginatedResponse } from "./types";

interface Options {
  page?: number;
}

export const fetchIncomes = async ({
  page = 1,
}: Options): Promise<PaginatedResponse<Income>> => {
  const url = `/v1/incomes?page=${page}`;
  const response = await apiFetch(url);

  if (!response.ok) {
    if (response.status.toString().startsWith("5")) {
      throw new Error("There are issue on the server. Please try again later.");
    }

    throw new Error("Failed to fetch incomes");
  }

  return await response.json();
};
