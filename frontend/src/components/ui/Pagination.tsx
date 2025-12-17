"use client";

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
    <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
      <button
        onClick={() => onChange(1)}
        disabled={page === 1}
        className="px-4 py-2 border rounded-full text-sm disabled:opacity-40"
      >
        First
      </button>

      {[...Array(totalPages)].map((_, i) => {
        const p = i + 1;
        if (p > page + 2 || p < page - 2) return null;

        return (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`w-10 h-10 rounded-full text-sm
              ${page === p ? "bg-black text-white" : "border"}
            `}
          >
            {p}
          </button>
        );
      })}

      <button
        onClick={() => onChange(totalPages)}
        disabled={page === totalPages}
        className="px-4 py-2 border rounded-full text-sm disabled:opacity-40"
      >
        Last
      </button>
    </div>
  );
}
