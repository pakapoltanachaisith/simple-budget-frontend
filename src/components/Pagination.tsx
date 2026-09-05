import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router";

interface PaginationProps {
  pageCount: number;
}

export default function Pagination({ pageCount }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") ?? "1");

  if (pageCount === 1) {
    return null;
  }

  return (
    <div className="join">
      <button
        type="button"
        className="join-item btn"
        disabled={currentPage === 1}
        onClick={() => setSearchParams({ page: `${currentPage - 1}` })}>
        <span className="sr-only">Previous page</span>
        <ChevronLeft />
      </button>
      {Array(pageCount)
        .fill(null)
        .map((_, index) => (
          <button
            type="button"
            key={index}
            className={cn("join-item btn", {
              "btn-active": index + 1 === currentPage,
            })}
            onClick={() => setSearchParams({ page: `${index + 1}` })}>
            {index + 1}
          </button>
        ))}
      <button
        type="button"
        className="join-item btn"
        disabled={currentPage === pageCount}
        onClick={() => setSearchParams({ page: `${currentPage + 1}` })}>
        <span className="sr-only">Next page</span>
        <ChevronRight />
      </button>
    </div>
  );
}
