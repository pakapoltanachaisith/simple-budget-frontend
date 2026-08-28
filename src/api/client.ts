import { getToken } from "./token";

const API_URL = import.meta.env.VITE_API_URL;

export const apiFetch = (path: string, options: RequestInit = {}) => {
  const headers = new Headers(options.headers);
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");

  const token = getToken();
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });
};
