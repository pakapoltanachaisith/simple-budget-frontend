import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  label: string;
  icon: LucideIcon;
  path: string;
  active?: boolean;
}

export default function SidebarLink({
  icon: Icon,
  label,
  path,
  active = false,
}: SidebarLinkProps) {
  return (
    <Link
      to={path}
      className={cn(
        "flex items-center gap-4 p-2 rounded-md group hover:bg-primary-100",
        active && "bg-primary-100",
      )}>
      <Icon
        className={cn(
          "size-5 text-neutral-500 group-hover:text-primary-600",
          active && "text-primary-600",
        )}
      />
      <span
        className={cn(
          "font-medium text-neutral-500 group-hover:text-primary-600",
          active && "text-primary-600",
        )}>
        {label}
      </span>
    </Link>
  );
}
