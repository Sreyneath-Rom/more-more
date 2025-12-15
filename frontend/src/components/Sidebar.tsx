// src/components/Sidebar.tsx
'use client';

import { Package, Warehouse, MapPin, DollarSign, Percent, Users, Store, UserCheck, Users2, Building2, Wallet, CreditCard, ArrowUpDown, PiggyBank, FileText, ShoppingCart, BarChart3, LayoutDashboard, Settings, Clock, Zap, Maximize, Lock, Monitor, Headphones, History, Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Placeholder for cn utility (assuming it's available from '@/lib/utils')
const cn = (...inputs: any[]) => inputs.join(' '); 

// Reports items are simple list items, not navigatable pages in the UI image.
const reportItems = [
    { label: "End Of Day", href: "/reports/eod", Icon: FileText },
    { label: "Sale", href: "/reports/sale", Icon: ShoppingCart },
    { label: "Finance", href: "/reports/finance", Icon: BarChart3 },
];

const menuGroups = [
  {
    title: "Product & Service",
    items: [
      // The 'Items' link is highlighted in the image, even for sub-pages
      { Icon: Package, label: "Items", href: "/items", hasDot: false, specialActive: true },
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
      { Icon: ArrowUpDown, label: "Incomes", href: "/incomes", hasDot: true }, // Red dot
      { Icon: PiggyBank, label: "Expenses", href: "/expenses", hasDot: false },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  // Simplified logic: Check if the pathname is within the Items group
  const isItemsGroupActive = pathname.startsWith('/items');

  return (
    // Fixed height and sticky position to keep the sidebar next to the main content
    <aside className="hidden lg:block w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto pt-4 pb-16">
      
      {/* Top Graphics area from UI image */}
      <div className='p-4 pt-0 mb-6 flex flex-wrap gap-x-6 gap-y-4 justify-center bg-gray-50/20'>
          {/* Shapes styled to approximate the UI image's colors and forms */}
          <div className='w-12 h-12 rounded-t-full rounded-bl-full bg-green-500/80 flex items-center justify-center' />
          <div className='w-12 h-12 rounded-br-full rounded-tl-full bg-blue-400/80 flex items-center justify-center' />
          <div className='w-12 h-12 rounded-full bg-yellow-500/80 flex items-center justify-center' />

          <div className='w-12 h-12 rounded-full bg-red-500/80 flex items-center justify-center' />
          <div className='w-12 h-12 rounded-full bg-orange-500/80 flex items-center justify-center' />
          <div className='w-12 h-12 rounded-t-lg bg-red-700/80 flex items-center justify-center' />
      </div>

      <nav className="px-4 space-y-6">
        {/* Menu Groups */}
        {menuGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
              {group.title} <ChevronDown className='w-3 h-3 text-gray-400'/>
            </h3>
            <ul className="space-y-1">
              {group.items.map(({ Icon, label, href, hasDot, specialActive }) => {
                const isActive = pathname.startsWith(href);
                const isCurrentLinkActive = specialActive ? isItemsGroupActive : isActive;
                
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition",
                        // Active style: light gray background, orange text
                        isCurrentLinkActive && "bg-gray-100 text-orange-600 font-medium"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5" />
                        <span className="text-sm">{label}</span>
                      </div>
                      {/* Red dot for new notifications/data */}
                      {hasDot && <span className="w-2 h-2 bg-red-500 rounded-full shrink-0" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        
        {/* Reports Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
            REPORTS <ChevronDown className='w-3 h-3 text-gray-400'/>
          </h3>
          <ul className="space-y-1 pl-3">
            {reportItems.map((item) => (
                <li key={item.label} className="flex items-center text-sm text-gray-700 py-1">
                    {/* Visual bullet point to match the UI image */}
                    <span className='w-1 h-1 bg-gray-500 rounded-full mr-2' /> 
                    {item.label}
                </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Bottom Footer Icons */}
      <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 flex justify-center gap-4 text-gray-500 bg-white'>
        <button className='p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition relative shadow-sm'>
            <Globe className='w-5 h-5' />
            <span className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1 block border border-white" />
        </button>
        <button className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition shadow-sm'><Monitor className='w-5 h-5' /></button>
        <button className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition shadow-sm'><Headphones className='w-5 h-5' /></button>
        <button className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition shadow-sm'><History className='w-5 h-5' /></button>
        <button className='p-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition shadow-sm'><Lock className='w-5 h-5' /></button>
      </div>
    </aside>
  );
}