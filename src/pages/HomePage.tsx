import { Link } from "react-router";

export default function HomePage() {
  return (
    <div>
      Home Page
      <Link to="/login">Go to Login Page</Link>
      <Link to="/register">Go to Register Page</Link>
    </div>
  );
}
