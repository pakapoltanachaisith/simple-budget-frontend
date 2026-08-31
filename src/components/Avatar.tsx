import type { ReactNode } from "react";

interface AvatarProps {
  children: ReactNode;
}

export default function Avatar({ children }: AvatarProps) {
  return (
    <div className="relative inline-flex items-center justify-center size-8 overflow-hidden bg-neutral-tertiary rounded-full bg-primary-200">
      <span className="font-medium text-primary-600">{children}</span>
    </div>
  );
}
