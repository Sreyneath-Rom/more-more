'use client';

import { useState } from 'react';
import {
  ShoppingBag,
  Package,
  MapPin,
  DollarSign,
  Tag,
  Users,
  Building2,
  Truck,
  UserSquare2,
  UserCheck,
  Wallet,
  CreditCard,
  TrendingUp,
  TrendingDown,
  FileText,
  BarChart3,
  Receipt,
  ChevronDown,
  Globe,
  Monitor,
  Headphones,
  History,
  Lock,
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
    <aside className="hidden lg:flex w-64 flex-col bg-white border-r border-gray-200 h-screen">
      {/* Decorative Top Shapes */}
      <div className="p-6 pb-4 flex flex-wrap gap-4 justify-center">
        <div className="w-12 h-12 bg-green-500/80 rounded-t-full rounded-bl-full" />
        <div className="w-12 h-12 bg-blue-400/80 rounded-br-full rounded-tl-full" />
        <div className="w-12 h-12 bg-yellow-500/80 rounded-full" />

        <div className="w-12 h-12 bg-red-500/80 rounded-full" />
        <div className="w-12 h-12 bg-orange-500/80 rounded-full" />
        <div className="w-12 h-12 bg-red-700/80 rounded-t-2xl" />
      </div>

      <nav className="flex-1 px-4 pb-4 space-y-6 overflow-y-auto">
        {/* Main Sections */}
        {sections.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2"
            >
              {section.title}
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform',
                  expandedSections.includes(section.title) && 'rotate-180'
                )}
              />
            </button>

            {expandedSections.includes(section.title) && (
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <button
                      className={cn(
                        'flex w-full items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors',
                        item.active
                          ? 'bg-gray-100 text-orange-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && <span className="w-2 h-2 bg-red-500 rounded-full" />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Reports Section */}
        <div>
          <button
            onClick={() => toggleSection('REPORTS')}
            className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2"
          >
            REPORTS
            <ChevronDown
              className={cn(
                'w-4 h-4 transition-transform',
                expandedSections.includes('REPORTS') && 'rotate-180'
              )}
            />
          </button>

          {expandedSections.includes('REPORTS') && (
            <ul className="space-y-1 pl-6">
              {reports.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-sm text-gray-700 py-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Bottom Icons */}
      <div className="border-t border-gray-200 p-4 flex justify-center gap-4 bg-white">
        <button className="relative p-3 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition">
          <Globe className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>
        <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <Monitor className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <Headphones className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <History className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
          <Lock className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
}