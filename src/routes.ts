import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import IncomesPage from "./pages/IncomesPage";

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "/incomes", Component: IncomesPage },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
    ],
  },
]);
