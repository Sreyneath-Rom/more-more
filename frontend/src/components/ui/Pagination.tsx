// src/components/ui/Pagination.tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 mt-8">
      <div className="text-sm text-gray-600">
        Page <span className="font-semibold">{page}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onChange(1)}
          disabled={page === 1}
          className="px-4 py-2 text-xs font-semibold text-gray-600 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          First
        </button>

        <button
          onClick={() => onChange(page - 1)}
          disabled={page === 1}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        {/* Simple page numbers: show up to 5 centered around current */}
        {(() => {
          const pages = [];
          const range = 2;
          let start = Math.max(1, page - range);
          let end = Math.min(totalPages, page + range);

          if (start > 1) pages.push(1, "...");
          for (let i = start; i <= end; i++) pages.push(i);
          if (end < totalPages) pages.push("...", totalPages);

          return pages.map((p, i) =>
            p === "..." ? (
              <span key={i} className="px-2 text-gray-400">...</span>
            ) : (
              <button
                key={p}
                onClick={() => onChange(p as number)}
                className={`w-9 h-9 rounded-full text-sm font-semibold transition-all ${
                  page === p
                    ? "bg-[#F97316] text-white shadow-md shadow-orange-200"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {p}
              </button>
            )
          );
        })()}

        <button
          onClick={() => onChange(page + 1)}
          disabled={page === totalPages}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>

        <button
          onClick={() => onChange(totalPages)}
          disabled={page === totalPages}
          className="px-4 py-2 text-xs font-semibold text-gray-600 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          Last
        </button>
      </div>
    </div>
  );
}