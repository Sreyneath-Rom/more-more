// src/app/page.tsx
"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ItemSubNavProduct from "@/components/items/ItemSubNavProduct";
import ItemToolbar from "@/components/items/ItemToolbar";
import ItemSubNav from "@/components/items/ItemSubNav";
import ProductGrid from "@/components/items/ProductGrid";
import ItemFilters from "@/components/items/ItemFilters";
import ItemTabs from "@/components/items/ItemTabs";
import Pagination from "@/components/ui/Pagination";

// Define the full view type to match ItemSubNav
type ViewType = "list" | "categories" | "tags" | "uom" | "attributes" | "library";

const TABS = ["All", "Purchased Item", "Manufacture", "Combo"] as const;
type TabType = (typeof TABS)[number];

export default function ItemListPage() {
  // Now supports all views from ItemSubNav
  const [view, setView] = useState<ViewType>("list");
  const [activeTab, setActiveTab] = useState<TabType>("All");
  const [selectedCount, setSelectedCount] = useState(0);

  // Centralized pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalItems = 157; // Replace with real data later
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSelectedCount(0);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedCount(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getViewLabel = (v: ViewType): string => {
    const labels: Record<ViewType, string> = {
      list: "Item List",
      categories: "Categories",
      tags: "Tags",
      uom: "Unit of Measure",
      attributes: "Custom Attributes",
      library: "Image Library",
    };
    return labels[v];
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F3F4F6]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        <div className="px-10 mt-4">
          <ItemSubNavProduct />
        </div>

        <div className="flex-1 mx-6 mb-6 bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden flex flex-col">
          <div className="px-8 pt-8 pb-0">
            <ItemToolbar />
            <ItemSubNav activeView={view} setView={setView} />
            <ItemFilters />
          </div>

          <div className="flex-1 overflow-y-auto px-8 pb-8 pt-2 custom-scrollbar bg-gray-100 ml-5 mr-5 rounded-2xl">
            {view === "list" ? (
              <div className="flex flex-col gap-8 animate-in fade-in duration-300">
                <ItemTabs
                  activeTab={activeTab}
                  onTabChange={handleTabChange}
                  selectedCount={selectedCount}
                />

                {/* Stats Row */}
                <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 gap-4">
                  <div>
                    Showing <strong>{startItem}–{endItem}</strong> of{" "}
                    <strong>{totalItems}</strong> items
                  </div>
                  <div className="flex items-center gap-6 text-[13px]">
                    <span>For Sale: <strong className="text-gray-900">25</strong></span>
                    <span>Manufacture: <strong className="text-gray-900">25</strong></span>
                    <span>Combo: <strong className="text-gray-900">10</strong></span>
                    <span>Component: <strong className="text-gray-900">10</strong></span>
                  </div>
                </div>

                <ProductGrid
                  activeTab={activeTab}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  onSelectedChange={setSelectedCount}
                />

                <Pagination
                  page={currentPage}
                  totalPages={totalPages}
                  onChange={handlePageChange}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-96 text-gray-400">
                <div className="text-6xl mb-6">📂</div>
                <p className="text-2xl font-semibold text-gray-600">
                  {getViewLabel(view)} View
                </p>
                <p className="text-sm mt-3">This section is under development.</p>
                <p className="text-sm">Coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}