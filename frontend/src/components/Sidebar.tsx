'use client';

import { Package, Warehouse, MapPin, DollarSign, Percent, Users, Store, UserCheck, Users2, Building2, Wallet, CreditCard, ArrowUpDown, PiggyBank, FileText, ShoppingCart, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuGroups = [
  {
    title: "Product & Service",
    items: [
      { Icon: Package, label: "Items", href: "/items", hasDot: false },
      { Icon: Warehouse, label: "Inventories", href: "/inventories", hasDot: true },
      { Icon: MapPin, label: "Locations", href: "/locations", hasDot: false },
      { Icon: DollarSign, label: "Price Setting", href: "/price-setting", hasDot: false },
      { Icon: Percent, label: "Promotions/Discounts", href: "/promotions", hasDot: false },
    ],
  },
  {
    title: "People",
    items: [
      { Icon: Users, label: "Customers", href: "/customers", hasDot: false },
      { Icon: Store, label: "Shop Partners", href: "/shop-partners", hasDot: false },
      { Icon: UserCheck, label: "Suppliers", href: "/suppliers", hasDot: false },
      { Icon: Users2, label: "Staff", href: "/staff", hasDot: false },
      { Icon: Building2, label: "Shareholders", href: "/shareholders", hasDot: false },
    ],
  },
  {
    title: "Money",
    items: [
      { Icon: Wallet, label: "Assets", href: "/assets", hasDot: false },
      { Icon: CreditCard, label: "Liabilities", href: "/liabilities", hasDot: false },
      { Icon: ArrowUpDown, label: "Incomes", href: "/incomes", hasDot: true },
      { Icon: PiggyBank, label: "Expenses", href: "/expenses", hasDot: false },
    ],
  },
  {
    title: "Reports",
    items: [
      { Icon: FileText, label: "End Of Day", href: "/reports/eod", hasDot: false },
      { Icon: ShoppingCart, label: "Sale", href: "/reports/sale", hasDot: false },
      { Icon: BarChart3, label: "Finance", href: "/reports/finance", hasDot: false },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-64 bg-white border-r border-gray-200 h-[calc(100vh-64px)] overflow-y-auto">
      <nav className="p-4 space-y-6">
        {menuGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.items.map(({ Icon, label, href, hasDot }) => {
                const isActive = pathname.startsWith(href);
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition",
                        isActive && "bg-gray-100 text-blue-600 font-medium"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        <span className="text-sm">{label}</span>
                      </div>
                      {hasDot && <span className="w-2 h-2 bg-red-500 rounded-full" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}