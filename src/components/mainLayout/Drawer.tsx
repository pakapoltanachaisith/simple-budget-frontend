import { useLocation } from "react-router";
import { HomeIcon, LogOutIcon, PiggyBankIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Avatar from "@components/Avatar";
import { useAuth } from "@/api/AuthContenxt";

import SidebarLink from "./SidebarLink";

interface DrawerProps {
  show: boolean;
  onClose: () => void;
}

export default function Drawer({ show, onClose }: DrawerProps) {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

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
    <>
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-y-0 bg-black/70 w-screen transform -left-full opacity-0 transition-all duration-100 lg:hidden",
          show && "left-0 opacity-100",
        )}
      />
      <aside
        className={cn(
          "fixed bg-white w-3/4 min-w-50 h-screen transition-all transform duration-300 ease-in-out -left-full lg:hidden",
          show && "left-0",
        )}>
        <div className="flex flex-col h-full">
          <div className="px-6 py-4 flex items-center border-b border-b-neutral-200 shrink-0">
            <div className="flex items-center flex-1">
              <img
                src="/simple-budget-logo.svg"
                alt="Simple Budget logo"
                className="size-10"
              />
              <span className="font-bold text-lg ml-3 font-lora">
                Simple Budget
              </span>
            </div>
            <button type="button" onClick={onClose}>
              <XIcon className="size-6 text-neutral-600 hover:text-neutral-900" />
              <span className="sr-only">Close drawer</span>
            </button>
          </div>

          <nav className="p-6 grow overflow-y-scroll">
            {links.map((link) => (
              <SidebarLink key={link.path} {...link} />
            ))}
          </nav>

          <div className="flex items-center shrink-0 px-6 py-4 border-t border-t-neutral-200 justify-between">
            <div className="flex items-center">
              <Avatar>{user?.name?.at(0)}</Avatar>
              <span className="font-medium ml-4">{user?.name}</span>
            </div>

            <button
              onClick={logout}
              type="button"
              className="border border-neutral-300 p-1.5 rounded-lg">
              <LogOutIcon className="size-5 text-neutral-500" />
              <span className="sr-only">Sign out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
