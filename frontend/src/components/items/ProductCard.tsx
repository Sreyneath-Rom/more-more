import Image from "next/image";
import Checkbox from "@/components/ui/Checkbox";

export default function ProductCard({ product, selected, onSelect }: any) {
  return (
    <div 
      onClick={onSelect}
      className={`
        group relative flex items-center p-3 gap-4 bg-white rounded-2xl border transition-all cursor-pointer
        ${selected ? "border-blue-500 ring-1 ring-blue-500 shadow-sm" : "border-gray-100 hover:border-gray-300 hover:shadow-md"}
      `}
    >
      <div className={`absolute top-2.5 right-2.5 z-10 transition-opacity ${selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <Checkbox checked={selected} onChange={(e: any) => { e.stopPropagation(); onSelect(); }} />
      </div>

      <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100">
        <Image src={product.image} alt={product.name} width={64} height={64} className="object-contain p-2" />
      </div>

      <div className="flex flex-col min-w-0">
        <h3 className="text-[13px] font-bold text-gray-900 truncate leading-tight">{product.name}</h3>
        <p className="text-[11px] font-bold text-orange-500 mt-0.5">{product.desc || "-"}</p>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-xs font-bold text-gray-900">{product.price}</span>
          <div className="bg-blue-50 p-0.5 rounded-full">
            <svg className="w-2.5 h-2.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}