import "./index.css";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { router } from "@/routes.ts";
import { AuthProvider } from "@/api/AuthContenxt.tsx";

const root = document.getElementById("root")!;
createRoot(root).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);
