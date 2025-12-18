// src/components/layout/Sidebar.tsx
"use client";

import { useState } from "react";
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
  Receipt,
  BarChart3,
  ChevronDown,
  MessageCircle,
  Monitor,
  Headphones,
  Clock,
  WalletCards,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "PRODUCT & SERVICE",
  ]);

  const [activeItem, setActiveItem] = useState<string>("Items");

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const sections = [
    {
      title: "PRODUCT & SERVICE",
      items: [
        { icon: ShoppingBag, label: "Items" },
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
        { icon: TrendingUp, label: "Income" },
        { icon: TrendingDown, label: "Expenses" },
        { icon: FileText, label: "Taxes" },
      ],
    },
    {
      title: "REPORTS",
      items: [
        { icon: Receipt, label: "Sales Reports" },
        { icon: BarChart3, label: "Analytics" },
        { icon: FileText, label: "Audit Logs" },
      ],
    },
  ];

  const isSectionExpanded = (title: string) => expandedSections.includes(title);

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    // Ready for future routing:
    // const router = useRouter();
    // router.push(`/dashboard/${label.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <aside className="hidden lg:flex w-72 flex-col bg-gray-100h-screen sticky top-0 z-40">
      {/* Top Decorative Shapes */}
      <div className="p-8 pb-6 bg-gray-100 h-40 flex flex-col items-center justify-center mt-4">
        <div className="flex flex-wrap gap-3 justify-center mb-8 shadow-inner shadow-gray-200 p-4 rounded-2xl bg-white">
          <div className="w-14 h-14 bg-green-500 backdrop-blur rounded-t-full rounded-bl-full shadow-inner" />
          <div className="w-14 h-14 bg-blue-400 backdrop-blur rounded-br-full rounded-tl-full shadow-inner" />
          <div className="w-14 h-14 bg-yellow-500 backdrop-blur rounded-full shadow-inner" />
          <div className="w-14 h-14 bg-red-500 backdrop-blur rounded-full shadow-inner" />
          <div className="w-14 h-14 bg-orange-500 backdrop-blur rounded-full shadow-inner" />
          <div className="w-14 h-14 bg-red-700 backdrop-blur rounded-t-3xl shadow-inner" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 flex flex-col">
        {sections.map((section) => (
          <div key={section.title} className="mb-2">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full px-6 py-3 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider hover:text-gray-700 transition"
            >
              <span>{section.title}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isSectionExpanded(section.title) && "rotate-180"
                )}
              />
            </button>

            {isSectionExpanded(section.title) && (
              <ul>
                {section.items.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleItemClick(item.label)}
                      className={cn(
                        "w-full px-6 py-3 flex items-center gap-3 text-sm font-medium transition-all relative",
                        activeItem === item.label
                          ? "text-[#F97316] bg-orange-50 border-r-4 border-[#F97316]"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="absolute right-6 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
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
          <button className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition relative">
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>

          <div className="flex-1 h-12 bg-gray-100 rounded-full flex items-center justify-evenly px-2">
            <button className="p-2 text-gray-500 hover:text-black transition">
              <Monitor className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-gray-300" />
            <button className="p-2 text-gray-500 hover:text-black transition">
              <Headphones className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-gray-300" />
            <button className="p-2 text-gray-500 hover:text-black transition">
              <Clock className="w-4 h-4" />
            </button>
          </div>

          <button className="w-12 h-12 flex items-center justify-center bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition shadow-lg shadow-emerald-200">
            <WalletCards className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
