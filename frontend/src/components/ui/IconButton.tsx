// src/components/ui/IconButton.tsx
export default function IconButton({ icon: Icon }: any) {
  return (
    <button className="p-2 rounded-full hover:bg-gray-100">
      <Icon className="w-5 h-5" />
    </button>
  );
}
