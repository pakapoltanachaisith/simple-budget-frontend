import { ChevronDown, LogOut } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { useAuth } from "@/api/AuthContenxt";
import Avatar from "@components/Avatar";
import { useId } from "react";

export default function NavabarDropdown() {
  const { user, logout } = useAuth();
  const popoverId = useId();
  const anchorName = useId();

  return (
    <>
      <button
        type="button"
        popoverTarget={popoverId}
        className="btn btn-ghost p-1.5"
        style={{ anchorName: `--${anchorName}` }}>
        <Avatar>{user?.name?.at(0)}</Avatar>
        <span className="ml-1.5 text-sm hidden lg:inline">{user?.name}</span>
        <ChevronDown className="size-4 ml-2 hidden lg:inline" />
      </button>

      <div
        popover="auto"
        id={popoverId}
        style={{ positionAnchor: `--${anchorName}` }}
        className="dropdown dropdown-end menu w-52 rounded-box bg-base-100 shadow mt-3 border border-neutral-200">
        <button
          type="button"
          className="btn btn-error btn-soft btn-block"
          onClick={logout}>
          Sign out
          <LogOut className="size-4" />
        </button>
      </div>
    </>
  );
}
