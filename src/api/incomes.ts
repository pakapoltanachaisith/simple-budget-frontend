import { apiFetch } from "./client";
import type { Income, PaginatedResponse } from "./types";

export const fetchIncomes = async (): Promise<PaginatedResponse<Income>> => {
  const response = await apiFetch("/v1/incomes");

  if (!response.ok) {
    if (response.status.toString().startsWith("5")) {
      throw new Error("There are issue on the server. Please try again later.");
    }

    throw new Error("Failed to fetch incomes");
  }

  return await response.json();
};
