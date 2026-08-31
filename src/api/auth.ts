import { apiFetch } from "@/api/client";
import { revokeToken, setToken } from "@/api/token";
import type { User } from "@/api/types";

export const getCurrentUser = async (): Promise<User | null> => {
  const response = await apiFetch("/me");

  if (!response.ok) return null;

  const data = await response.json();
  return data.user;
};

export const login = async (email: string, password: string): Promise<User> => {
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

export const register = async (
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
): Promise<User> => {
  const response = await apiFetch("/register", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }),
  });

  if (!response.ok) {
    if (response.status.toString().startsWith("5")) {
      throw new Error("The server is currently down. Please try again later.");
    }

    throw new Error("Something went wrong.");
  }

  const data = await response.json();
  setToken(data.token);

  return data.user;
};

export const logout = async () => {
  const response = await apiFetch("/logout", { method: "POST" });

  if (!response.ok) {
    throw new Error("Someting went wrong");
  }

  revokeToken();
};
