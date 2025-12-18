"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ItemSubNavProduct from "@/components/items/ItemSubNavProduct";
import ItemToolbar from "@/components/items/ItemToolbar";
import ItemSubNav from "@/components/items/ItemSubNav";
import ProductGrid from "@/components/items/ProductGrid";
import ItemFilters from "@/components/items/ItemFilters";
import ItemTabs from "@/components/items/ItemTabs";
import ItemStats from "@/components/items/ItemStats";
import Pagination from "@/components/ui/Pagination";

type ViewType = "list" | "categories" | "tags" | "uom" | "attributes" | "library";
type TabType = "All" | "Purchased Item" | "Manufacture" | "Combo";

export default function ItemListPage() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [view, setView] = useState<ViewType>("list");
  const [activeTab, setActiveTab] = useState<TabType>("All");
  const [selectedCount, setSelectedCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalItems = 120;
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
    <div className="flex h-screen overflow-hidden bg-gray-200">
      {/* Sidebar */}
      <Sidebar mobileOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <Header onMenuToggle={() => setMobileMenuOpen(true)} />

        {/* Top SubNav */}
        <div className="px-4 sm:px-6 lg:px-10 mt-4">
          <ItemSubNavProduct />
        </div>

        {/* Content Card */}
        <div className="flex-1 mx-4 sm:mx-6 mb-4 sm:mb-6 bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden flex flex-col">
          {/* Toolbar, SubNav, Filters */}
          <div className="px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 pb-0">
            <ItemToolbar />
            <ItemSubNav activeView={view} setView={setView} />
            <ItemFilters />
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8 pt-2 bg-gray-50 mx-2 sm:mx-4 lg:mx-6 rounded-2xl custom-scrollbar">
            {view === "list" ? (
              <div className="flex flex-col gap-6 lg:gap-8">
                {/* Tabs */}
                <ItemTabs
                  activeTab={activeTab}
                  onTabChange={handleTabChange}
                  selectedCount={selectedCount}
                />

                {/* Showing X–Y of Z + Stats */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-sm text-gray-600 gap-4 mb-6">
                  <div>
                    Showing <strong>{startItem}–{endItem}</strong> of <strong>{totalItems}</strong> items
                  </div>
                  <ItemStats />
                </div>

                {/* Product Grid */}
                <ProductGrid
                  activeTab={activeTab}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  onSelectedChange={setSelectedCount}
                />

                {/* Pagination */}
                <Pagination
                  page={currentPage}
                  totalPages={totalPages}
                  onChange={handlePageChange}
                />
              </div>
            ) : (
              /* Placeholder for other views */
              <div className="flex flex-col items-center justify-center h-96 text-gray-400">
                <div className="text-6xl mb-6">📂</div>
                <p className="text-2xl font-semibold text-gray-600">{getViewLabel(view)} View</p>
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
