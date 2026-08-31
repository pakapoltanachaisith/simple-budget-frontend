import { Navigate } from "react-router";

import { useAuth } from "@/api/AuthContenxt";
import Button from "@/components/Button";

export default function HomePage() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && !user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1 className="text-4xl text-blue-500">Home Page</h1>
      <p>Hello, {user?.name}</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
