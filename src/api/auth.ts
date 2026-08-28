import { apiFetch } from "@/api/client";
import { setToken } from "@/api/token";
import type { LoginResponse, User } from "@/api/types";

export const getCurrentUser = async (): Promise<User | null> => {
  const response = await apiFetch("/me");

  if (!response.ok) return null;

  const data = await response.json();
  return data.user;
};

export const login = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const response = await apiFetch("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    if (response.status === 422) {
      throw new Error("Invalid credentials.");
    }

    if (response.status.toString().startsWith("5")) {
      throw new Error("The server is currently down. Please try again later.");
    }

    throw new Error("Something went wrong.");
  }

  const data = await response.json();
  setToken(data.token);

  return data;
};
