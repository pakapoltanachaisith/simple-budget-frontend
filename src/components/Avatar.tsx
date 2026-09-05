import type { ReactNode } from "react";

interface AvatarProps {
  children: ReactNode;
}

export default function Avatar({ children }: AvatarProps) {
  return (
    <div className="avatar avatar-placeholder">
      <div className="bg-neutral text-neutral-content w-8 rounded-full">
        <span>{children}</span>
      </div>
    </div>
  );
}
