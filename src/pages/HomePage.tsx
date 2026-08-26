import { Link } from "react-router";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl text-blue-500">Home Page</h1>
      <Link to="/login">Go to Login Page</Link>
      <Link to="/register">Go to Register Page</Link>
    </div>
  );
}
