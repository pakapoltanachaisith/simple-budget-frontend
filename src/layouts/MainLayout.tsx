import { Loader2 } from "lucide-react";
import { Navigate, Outlet } from "react-router";
import { useState } from "react";

import { useAuth } from "@/api/AuthContenxt";
import Navbar from "@/components/mainLayout/Navbar";
import Sidebar from "@/components/mainLayout/Sidebar";
import Drawer from "@/components/mainLayout/Drawer";

export default function MainLayout() {
  const { user } = useAuth();
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer((state) => !state);
  };

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
      <Navbar onOpenDrawer={toggleDrawer} />
      <Sidebar />
      <Drawer show={showDrawer} onClose={toggleDrawer} />
      <main className="overflow-auto bg-neutral-100 p-8 lg:p-10 col-span-2 lg:col-span-1">
        <Outlet />
      </main>
    </div>
  );
}
