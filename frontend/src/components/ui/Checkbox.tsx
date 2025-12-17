"use client";

export default function Checkbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={`w-5 h-5 rounded-md border flex items-center justify-center
        ${checked ? "bg-black border-black" : "border-gray-300"}
      `}
    >
      {checked && (
        <span className="w-2.5 h-2.5 bg-white rounded-sm" />
      )}
    </button>
  );
}
