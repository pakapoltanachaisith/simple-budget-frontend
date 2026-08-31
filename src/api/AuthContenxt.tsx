import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { User } from "./types";
import {
  login as apiLogin,
  getCurrentUser as apiGetCurrentUser,
  logout as apiLogout,
  register as apiRegister,
} from "./auth";

interface AuthContextValue {
  user: User | null | undefined;
  loading: boolean;
  errorMessage: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
  ) => Promise<void>;
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
      const authUser = await apiLogin(email, password);
      setUser(authUser);
    } catch (error: any) {
      setErrorMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
  ) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const authUser = await apiRegister(
        name,
        email,
        password,
        passwordConfirmation,
      );
      setUser(authUser);
    } catch (error: any) {
      setErrorMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    if (!user) return;

    setLoading(true);
    try {
      await apiLogout();
      setUser(null);
    } catch (error: any) {
      alert("Failed to logout");
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setErrorMessage(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        errorMessage,
        login,
        register,
        logout,
        clearError,
      }}>
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
