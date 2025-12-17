export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-6 my-4 bg-white rounded-3xl shadow-sm overflow-hidden">
      <div className="p-8">{children}</div>
    </div>
  );
}
