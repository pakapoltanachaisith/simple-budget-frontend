import { useAuth } from "@/api/AuthContenxt";
import { Loader2 } from "lucide-react";
import { Outlet, useNavigate } from "react-router";

export default function AuthLayout() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-screen overflow-y-auto overflow-x-hidden flex items-center justify-center bg-stone-50-50">
        <div className="text-center">
          <Loader2 className="size-18 text-primary-500 animate-spin mx-auto" />
          <div className="mt-6 text-sm text-gray-500 font-lora font-semibold">
            Loading
          </div>
        </div>
      </div>
    );
  }

  if (!loading && user) {
    return navigate("/");
  }

  return (
    <div className="h-screen w-screen overflow-y-auto overflow-x-hidden flex items-center justify-center bg-stone-50-50">
      <main className="min-w-100 max-w-160">
        <Outlet />
      </main>
    </div>
  );
}
