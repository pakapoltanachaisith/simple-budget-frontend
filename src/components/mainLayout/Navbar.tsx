import { Link } from "react-router";
import { PanelLeft } from "lucide-react";

import NavabarDropdown from "./NavabarDropdown";

interface NavbarProps {
  onOpenDrawer: () => void;
}

export default function Navbar({ onOpenDrawer }: NavbarProps) {
  return (
    <header className="col-span-12 self-start px-6 py-4 flex justify-between items-center border-b border-b-neutral-200 bg-white">
      <div className="flex items-center">
        <button
          onClick={onOpenDrawer}
          type="button"
          className="lg:hidden mr-4 p-1.5 hover:opacity-50 transition-opacity">
          <span className="sr-only">open side drawer</span>
          <PanelLeft className="text-neutral-400" />
        </button>

        <div className="flex items-center">
          <img
            src="/simple-budget-logo.svg"
            alt="Simple Budget logo"
            className="size-8 lg:size-10"
          />
          <Link to="/" className="ml-2 lg:text-xl font-bold font-lora">
            Simple Budget
          </Link>
        </div>
      </div>

      <NavabarDropdown />
    </header>
  );
}
