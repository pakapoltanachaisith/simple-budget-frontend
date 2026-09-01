import { ChevronDown, LogOut } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { useAuth } from "@/api/AuthContenxt";
import Avatar from "@components/Avatar";

export default function NavabarDropdown() {
  const { user, logout } = useAuth();

  return (
    <Menu>
      <MenuButton className="flex items-center p-1.5 hover:bg-neutral-100 rounded-md transition-colors cursor-pointer">
        <Avatar>{user?.name?.at(0)}</Avatar>
        <span className="ml-2 text-sm hidden lg:inline">{user?.name}</span>
        <ChevronDown className="size-4 ml-3 hidden lg:inline" />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="min-w-60 bg-white outline outline-neutral-300 shadow rounded-md p-2">
        <MenuItem
          as="button"
          type="button"
          onClick={logout}
          className="w-full flex items-center justify-center outline outline-red-600 p-2 rounded-md transition-colors group hover:bg-red-500">
          <span className="text-sm font-semibold text-red-600 group-hover:text-white">
            Sign out
          </span>
          <LogOut className="size-4 ml-3 text-red-600 group-hover:text-white" />
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
