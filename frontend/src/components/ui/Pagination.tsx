"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  return (
    <div className="flex justify-between items-center w-full">
      <button
        onClick={() => onChange(1)}
        disabled={page === 1}
        className="px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent"
      >
        First
      </button>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onChange(page - 1)}
          disabled={page === 1}
          className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, i) => {
          const p = i + 1;
          // Simple logic to show current, first, last, and near neighbors
          if (p !== 1 && p !== totalPages && (p < page - 1 || p > page + 1)) {
            if (p === page - 2 || p === page + 2) return <span key={p} className="text-gray-300 text-xs px-1">...</span>;
            return null;
          }

          return (
            <button
              key={p}
              onClick={() => onChange(p)}
              className={`
                w-8 h-8 rounded-full text-xs font-medium transition-colors
                ${page === p 
                  ? "bg-black text-white shadow-sm" 
                  : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {p}
            </button>
          );
        })}

        <button
          onClick={() => onChange(page + 1)}
          disabled={page === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <button
        onClick={() => onChange(totalPages)}
        disabled={page === totalPages}
        className="px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent"
      >
        Last
      </button>
    </div>
  );
}