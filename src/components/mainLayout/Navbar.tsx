import { Link } from "react-router";

import type { User } from "@/api/types";
import Avatar from "@components/Avatar";

interface NavbarProps {
  user: User;
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <header className="col-span-12 self-start px-6 py-4 flex justify-between items-center border-b border-b-neutral-200 bg-white">
      <div className="flex items-center">
        <img
          src="/simple-budget-logo.svg"
          alt="Simple Budget logo"
          className="size-10"
        />
        <Link to="/" className="ml-2 text-xl font-bold font-lora">
          Simple Budget
        </Link>
      </div>

      <div className="flex items-center">
        <Avatar>{user.name.at(0)}</Avatar>
        <span className="ml-2 text-sm">{user.name}</span>
      </div>
    </header>
  );
}
