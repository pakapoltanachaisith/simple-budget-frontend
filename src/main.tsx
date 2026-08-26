import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes.ts";

const root = document.getElementById("root")!;
createRoot(root).render(<RouterProvider router={router} />);
