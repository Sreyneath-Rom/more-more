export default function Button({ children, className = '' }: any) {
  return (
    <button
      className={`rounded-full px-4 py-2 text-sm font-medium ${className}`}
    >
      {children}
    </button>
  );
}
