import { HomeIcon, PiggyBankIcon } from "lucide-react";
import { useLocation } from "react-router";

import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  const { pathname } = useLocation();

  const links = [
    {
      label: "Home",
      icon: HomeIcon,
      path: "/",
      active: pathname === "/",
    },
    {
      label: "Icomes",
      icon: PiggyBankIcon,
      path: "/incomes",
      active: pathname.startsWith("/incomes"),
    },
  ];

  return (
    <aside className="w-50 bg-neutral-50 border-r border-r-neutral-200">
      <nav className="m-2 space-y-1">
        {links.map((link) => (
          <SidebarLink key={link.label} {...link} />
        ))}
      </nav>
    </aside>
  );
}
