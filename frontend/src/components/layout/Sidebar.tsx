// src/components/layout/Sidebar.tsx
'use client';

import { useState } from 'react';
import {
  ShoppingBag, Package, MapPin, DollarSign, Tag,
  Users, Building2, Truck, UserSquare2, UserCheck,
  Wallet, CreditCard, TrendingUp, TrendingDown,
  FileText, Receipt, BarChart3,
  ChevronDown, Globe, Monitor, Headphones, History, Lock,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'PRODUCT & SERVICE',
    'PEOPLE',
    'MONEY',
    'REPORTS',
  ]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const sections = [
    {
      title: 'PRODUCT & SERVICE',
      items: [
        { icon: ShoppingBag, label: 'Items', active: true },
        { icon: Package, label: 'Inventories', badge: true },
        { icon: MapPin, label: 'Locations' },
        { icon: DollarSign, label: 'Price Setting' },
        { icon: Tag, label: 'Promotions/Discounts' },
      ],
    },
    {
      title: 'PEOPLE',
      items: [
        { icon: Users, label: 'Customers' },
        { icon: Building2, label: 'Shop Partners' },
        { icon: Truck, label: 'Suppliers' },
        { icon: UserSquare2, label: 'Staff' },
        { icon: UserCheck, label: 'Shareholders' },
      ],
    },
    {
      title: 'MONEY',
      items: [
        { icon: Wallet, label: 'Assets' },
        { icon: CreditCard, label: 'Liabilities' },
        { icon: TrendingUp, label: 'Incomes', badge: true },
        { icon: TrendingDown, label: 'Expenses' },
      ],
    },
  ];

  const reports = [
    { icon: FileText, label: 'End Of Day' },
    { icon: Receipt, label: 'Sale' },
    { icon: BarChart3, label: 'Finance' },
  ];

  return (
    <aside className="hidden lg:flex w-80 flex-col bg-white/80 backdrop-blur-2xl border-r border-gray-200/30 h-screen sticky top-0 z-50">
      {/* Top Decorative Area */}
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
      <nav className="flex-1 px-6 pb-6 space-y-10 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 px-2"
            >
              {section.title}
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform duration-300',
                  expandedSections.includes(section.title) && 'rotate-180'
                )}
              />
            </button>

            {expandedSections.includes(section.title) && (
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <button
                      className={cn(
                        'flex w-full items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-medium transition-all',
                        item.active
                          ? 'bg-black text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100/70 hover:shadow-md'
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Reports */}
        <div>
          <button
            onClick={() => toggleSection('REPORTS')}
            className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 px-2"
          >
            REPORTS
            <ChevronDown
              className={cn(
                'w-4 h-4 transition-transform duration-300',
                expandedSections.includes('REPORTS') && 'rotate-180'
              )}
            />
          </button>

          {expandedSections.includes('REPORTS') && (
            <ul className="space-y-3 pl-8">
              {reports.map((item) => (
                <li key={item.label} className="flex items-center gap-4 text-sm text-gray-600 hover:text-gray-900 transition">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Bottom Action Bar */}
      <div className="border-t border-gray-200/50 p-6 bg-white/70 backdrop-blur-xl">
        <div className="flex justify-center gap-5">
          <button className="relative p-4 bg-orange-100/80 text-orange-600 rounded-3xl hover:bg-orange-200/80 transition shadow-md">
            <Globe className="w-6 h-6" />
            <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full border-3 border-white" />
          </button>
          <button className="p-4 bg-gray-100/80 rounded-3xl hover:bg-gray-200/80 transition shadow-md">
            <Monitor className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-4 bg-gray-100/80 rounded-3xl hover:bg-gray-200/80 transition shadow-md">
            <Headphones className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-4 bg-gray-100/80 rounded-3xl hover:bg-gray-200/80 transition shadow-md">
            <History className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-4 bg-green-700 text-white rounded-3xl hover:bg-green-800 transition shadow-lg">
            <Lock className="w-6 h-6" />
          </button>
        </div>
      </div>
    </aside>
  );
}