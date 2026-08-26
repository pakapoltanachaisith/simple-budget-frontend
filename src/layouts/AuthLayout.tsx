import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50-50">
      <main className="min-w-100">
        <Outlet />
      </main>
    </div>
  );
}
