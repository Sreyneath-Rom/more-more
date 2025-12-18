"use client";

import { useEffect, useState } from "react";
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
  MessageCircle,
  Monitor,
  Headphones,
  Clock,
  WalletCards,
  ChevronDown,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  mobileOpen = false,
  onClose,
}: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const sections = [
    {
      title: "PRODUCT & SERVICE",
      items: [
        { icon: ShoppingBag, label: "Items", href: "/items" },
        { icon: Package, label: "Inventories", href: "/inventories", badge: true },
        { icon: MapPin, label: "Locations", href: "/locations" },
        { icon: DollarSign, label: "Price Setting", href: "/price-setting" },
        { icon: Tag, label: "Promotions", href: "/promotions" },
      ],
    },
    {
      title: "PEOPLE",
      items: [
        { icon: Users, label: "Customers", href: "/customers" },
        { icon: Building2, label: "Shop Partners", href: "/partners" },
        { icon: Truck, label: "Suppliers", href: "/suppliers" },
        { icon: UserSquare2, label: "Staff", href: "/staff" },
        { icon: UserCheck, label: "Shareholders", href: "/shareholders" },
      ],
    },
    {
      title: "MONEY",
      items: [
        { icon: Wallet, label: "Assets", href: "/assets" },
        { icon: CreditCard, label: "Liabilities", href: "/liabilities" },
        { icon: TrendingUp, label: "Income", href: "/income" },
        { icon: TrendingDown, label: "Expenses", href: "/expenses" },
        { icon: FileText, label: "Taxes", href: "/taxes" },
      ],
    },
    {
      title: "REPORTS",
      items: [
        { icon: Receipt, label: "Sales Reports", href: "/reports/sales" },
        { icon: BarChart3, label: "Analytics", href: "/reports/analytics" },
        { icon: FileText, label: "Audit Logs", href: "/reports/audit-logs" },
      ],
    },
  ];

  /** Auto-expand section based on current route */
  useEffect(() => {
    sections.forEach((section) => {
      if (section.items.some((item) => pathname.startsWith(item.href))) {
        setExpandedSections((prev) =>
          prev.includes(section.title) ? prev : [...prev, section.title]
        );
      }
    });
  }, [pathname]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title)
        ? prev.filter((s) => s !== title)
        : [...prev, title]
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-gray-100 shadow-lg",
          "transform transition-transform duration-300",
          "lg:static lg:translate-x-0 lg:shadow-none",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Decorative Header (Desktop) */}
          <div className="hidden lg:block p-6 bg-gray-50">
            <div className="rounded-3xl bg-white p-6 shadow-inner">
              <div className="grid grid-cols-3 gap-3">
                <div className="w-14 h-14 bg-green-500 rounded-t-full rounded-bl-full" />
                <div className="w-14 h-14 bg-blue-400 rounded-br-full rounded-tl-full" />
                <div className="w-14 h-14 bg-yellow-500 rounded-full" />
                <div className="w-14 h-14 bg-red-500 rounded-full" />
                <div className="w-14 h-14 bg-orange-500 rounded-full" />
                <div className="w-14 h-14 bg-red-700 rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            {sections.map((section) => (
              <div key={section.title} className="mb-6">
                <button
                  aria-expanded={expandedSections.includes(section.title)}
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-gray-600"
                >
                  {section.title}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      expandedSections.includes(section.title) && "rotate-180"
                    )}
                  />
                </button>

                {expandedSections.includes(section.title) && (
                  <ul className="mt-2 space-y-1">
                    {section.items.map((item) => {
                      const active = pathname === item.href;

                      return (
                        <li key={item.href}>
                          <button
                            onClick={() => {
                              router.push(item.href);
                              onClose?.();
                            }}
                            className={cn(
                              "group flex w-full items-center gap-3 rounded-lg px-6 py-3 text-sm font-medium transition",
                              active
                                ? "bg-orange-50 text-orange-500 border-r-4 border-orange-500"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                          >
                            <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                            {item.label}
                            {item.badge && (
                              <span className="ml-auto h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom Bar */}
          <div className="border-t bg-white px-4 py-3">
            <div className="flex items-center gap-3">
              {/* Chat */}
              <button
                aria-label="Messages"
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition hover:bg-orange-200 active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white animate-pulse" />
              </button>

              {/* Quick Actions */}
              <div className="flex-1 flex items-center justify-center gap-2 rounded-full bg-gray-100 px-4 h-12">
                {[Monitor, Headphones, Clock].map((Icon, i) => (
                  <button
                    key={i}
                    className="p-2 text-gray-500 hover:text-gray-900 active:scale-95"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>

              {/* Wallet */}
              <button
                aria-label="Wallet"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white transition hover:bg-emerald-800 active:scale-95"
              >
                <WalletCards className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
