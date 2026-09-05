import dayjs from "dayjs";

import type { Income } from "@/api/types";
import WalletIcon from "@/assets/icons/wallet.svg";
import { formatCurrency } from "@/lib/utils";

interface IncomeListProps {
  incomes: Income[];
}

export default function IncomeList({ incomes }: IncomeListProps) {
  return (
    <ul className="space-y-4 lg:space-y-6">
      {incomes.map((income) => (
        <li
          key={income.id}
          className="bg-white rounded-xl p-4 lg:p-6 shadow border border-neutral-100 flex justify-between gap-6">
          {/* Left */}
          <div className="grow flex overflow-hidden">
            <img
              src={WalletIcon}
              alt=""
              className="size-10 lg:size-12 mr-4 lg:mr-6"
            />
            <div className="flex flex-col overflow-hidden">
              <span className="badge badge-success badge-soft">
                {formatCurrency(income.amount)}
              </span>
              {income?.note && (
                <span className="truncate text-neutral-500 mt-2">
                  {income.note}
                </span>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="shrink-0">
            <time dateTime={income.date} className="text-xs text-neutral-400">
              {dayjs(income.date).format("DD MMM YYYY")}
            </time>
          </div>
        </li>
      ))}
    </ul>
  );
}
