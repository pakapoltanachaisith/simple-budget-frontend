import { Link } from "react-router";

import NavabarDropdown from "./NavabarDropdown";

export default function Navbar() {
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

      <NavabarDropdown />
    </header>
  );
}
