import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { User } from "./types";
import { login as apiLogin, getCurrentUser as apiGetCurrentUser } from "./auth";
import { revokeToken } from "./token";

interface AuthContextValue {
  user: User | null | undefined;
  loading: boolean;
  errorMessage: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    apiGetCurrentUser()
      .then((user) => setUser(user))
      .finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const result = await apiLogin(email, password);
      setUser(result.user);
    } catch (error: any) {
      setErrorMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    revokeToken();
    setUser(null);
  };

  const clearError = () => {
    setErrorMessage(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, errorMessage, login, logout, clearError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be use within AuthProvider.");
  }

  return context;
}
