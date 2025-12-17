// src/components/layout/Sidebar.tsx
'use client';

import { useState } from 'react';
import {
  ShoppingBag, Package, MapPin, DollarSign, Tag,
  Users, Building2, Truck, UserSquare2, UserCheck,
  Wallet, CreditCard, TrendingUp, TrendingDown,
  FileText, Receipt, BarChart3,
  ChevronDown, MessageCircle, Monitor, Headphones, Clock, WalletCards
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'PRODUCT & SERVICE',
    // 'PEOPLE', 'MONEY', 'REPORTS' — uncomment if you want them expanded by default
  ]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const sections = [
    {
      title: "PRODUCT & SERVICE",
      items: [
        { icon: ShoppingBag, label: "Items", active: true },
        { icon: Package, label: "Inventories", badge: true },
        { icon: MapPin, label: "Locations" },
        { icon: DollarSign, label: "Price Setting" },
        { icon: Tag, label: "Promotions/Discounts" },
      ],
    },
    {
      title: "PEOPLE",
      items: [
        { icon: Users, label: "Customers" },
        { icon: Building2, label: "Shop Partners" },
        { icon: Truck, label: "Suppliers" },
        { icon: UserSquare2, label: "Staff" },
        { icon: UserCheck, label: "Shareholders" },
      ],
    },
    {
      title: "MONEY",
      items: [
        { icon: Wallet, label: "Assets" },
        { icon: CreditCard, label: "Liabilities" },
        { icon: TrendingUp, label: "Incomes", badge: true },
        { icon: TrendingDown, label: "Expenses" },
      ],
    },
    {
      title: "REPORTS",
      items: [
        { icon: FileText, label: "End Of Day" },
        { icon: Receipt, label: "Sale" },
        { icon: BarChart3, label: "Finance" },
      ],
    },
  ];

  return (
    <aside className="hidden lg:flex w-72 flex-col bg-white border-r border-gray-200 h-screen sticky top-0 z-40">
      {/* Top Decorative Shapes */}
      <div className="p-8 pb-6">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <div className="w-14 h-14 bg-green-500 backdrop-blur rounded-t-full rounded-bl-full shadow-inner" />
          <div className="w-14 h-14 bg-blue-400 backdrop-blur rounded-br-full rounded-tl-full shadow-inner" />
          <div className="w-14 h-14 bg-yellow-500 backdrop-blur rounded-full shadow-inner" />
          <div className="w-14 h-14 bg-red-500 backdrop-blur rounded-full shadow-inner" />
          <div className="w-14 h-14 bg-orange-500 backdrop-blur rounded-full shadow-inner" />
          <div className="w-14 h-14 bg-red-700 backdrop-blur rounded-t-3xl shadow-inner" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 overflow-y-auto scrollbar-thin">
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex w-full items-center justify-between text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 px-3 hover:text-gray-600 transition"
            >
              {section.title}
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  expandedSections.includes(section.title) && "rotate-180"
                )}
              />
            </button>

            {expandedSections.includes(section.title) && (
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <button
                      className={cn(
                        'flex w-full items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                        item.active
                          ? 'bg-gray-900 text-white shadow-lg shadow-gray-200'
                          : 'text-gray-600 hover:bg-gray-50'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon
                          className={cn(
                            "w-4 h-4",
                            item.active ? "text-gray-300" : "text-gray-400"
                          )}
                        />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom Action Bar */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center justify-between gap-2">
          {/* Chat Button */}
          <button className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition relative">
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Center Pill */}
          <div className="flex-1 h-12 bg-gray-100 rounded-full flex items-center justify-evenly px-2">
            <button className="p-2 text-gray-500 hover:text-black transition">
              <Monitor className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-gray-300"></div>
            <button className="p-2 text-gray-500 hover:text-black transition">
              <Headphones className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-gray-300"></div>
            <button className="p-2 text-gray-500 hover:text-black transition">
              <Clock className="w-4 h-4" />
            </button>
          </div>

          {/* Wallet Button */}
          <button className="w-12 h-12 flex items-center justify-center bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition shadow-lg shadow-emerald-200">
            <WalletCards className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}