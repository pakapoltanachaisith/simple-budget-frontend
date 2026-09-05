import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatCurrency = (amount: number) => {
  return Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(amount / 100);
};
