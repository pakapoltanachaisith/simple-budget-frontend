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
    throw new Error("Failed to Log in");
  }

  const data = await response.json();
  setToken(data.token);

  return data;
};
