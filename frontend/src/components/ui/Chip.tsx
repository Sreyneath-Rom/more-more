// src/components/ui/Chip.tsx
export default function Chip({ label }: { label: string }) {
  return (
    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
      {label}
    </span>
  );
}
