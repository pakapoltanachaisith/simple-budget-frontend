import { Loader2 } from "lucide-react";
import { Navigate, Outlet } from "react-router";

import { useAuth } from "@/api/AuthContenxt";
import Navbar from "@/components/mainLayout/Navbar";
import Sidebar from "@/components/mainLayout/Sidebar";

export default function MainLayout() {
  const { user } = useAuth();

  if (user === undefined) {
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

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-screen w-screen overflow-hidden grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Navbar />
      <Sidebar />
      <main className="overflow-auto bg-neutral-100 p-8 col-span-2 lg:col-span-1">
        <Outlet />
        <div className="h-1000"></div>
      </main>
    </div>
  );
}
