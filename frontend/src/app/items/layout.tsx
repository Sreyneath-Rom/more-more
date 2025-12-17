// app/items/layout.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingBag, Package } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ItemsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const tabs = [
    { label: 'Dashboard', href: '/items/dashboard', icon: LayoutDashboard },
    { label: 'Items',      href: '/items',          icon: ShoppingBag },
    { label: 'Inventory',  href: '/items/inventory', icon: Package },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sub Navigation */}
      <div className="flex items-end justify-between border-b border-gray-200/60 w-full px-2 bg-white sticky top-0 z-30">
        <div className="flex items-end gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.href;

            return (
              <Link
                key={tab.label}
                href={tab.href}
                className="block" // Ensures full area is clickable
              >
                <div
                  className={cn(
                    "px-6 py-3.5 text-[13px] font-extrabold rounded-t-[14px] transition-all flex items-center gap-2",
                    isActive
                      ? "bg-white text-[#F97316] border-x border-t border-gray-200 -mb-px z-10 shadow-[0_-4px_12px_-6px_rgba(0,0,0,0.08)]"
                      : "bg-gray-200/40 text-gray-500 hover:bg-gray-200/70 hover:text-gray-700"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive && "text-[#F97316]")} />
                  <span>{tab.label}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => alert('POS opened!')} // Replace with actual POS logic/route
          className="mb-2 bg-[#F97316] text-white px-7 py-2.5 rounded-full text-[13px] font-extrabold shadow-lg shadow-orange-100 flex items-center gap-2 hover:bg-[#f85800] transition mr-4"
        >
          POS <span className="text-[10px]">↗</span>
        </button>
      </div>

      {/* Page Content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}