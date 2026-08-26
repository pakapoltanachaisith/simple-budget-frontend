import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="h-screen w-screen overflow-y-auto overflow-x-hidden flex items-center justify-center bg-stone-50-50">
      <main className="min-w-100 max-w-160">
        <Outlet />
      </main>
    </div>
  );
}
