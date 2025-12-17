// src/app/customers/page.tsx
"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Plus, Upload, Download } from 'lucide-react';

export default function CustomersPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[var(--background)] min-h-screen">
        <Header />

        <div className="mx-4 sm:mx-6 my-6 soft-card overflow-hidden">
          {/* Breadcrumb + POS Badge */}
          <div className="flex justify-between items-center px-8 py-5 bg-white/70 backdrop-blur-md border-b border-gray-200/50">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <button className="flex items-center gap-2 hover:text-gray-900 transition">
                Dashboard <span className="text-gray-400">›</span>
              </button>
              <button className="flex items-center gap-2 hover:text-gray-900 transition">
                People <span className="text-gray-400">›</span>
              </button>
              <button className="text-gray-900 font-medium">Customers</button>
            </div>
            <div className="bg-orange-100/90 text-orange-600 px-6 py-2.5 rounded-full text-sm font-bold border border-orange-200/50 backdrop-blur">
              POS 71
            </div>
          </div>

          <div className="p-8">
            {/* Toolbar */}
            <div className="flex justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Customer List</h2>
                <p className="text-gray-600 mt-1">
                  Manage all your customers and their information
                </p>
              </div>

              <div className="flex gap-4">
                <button className="btn-primary flex items-center gap-3">
                  <Plus className="w-5 h-5" /> Add New Customer
                </button>
                <button className="btn-secondary flex items-center gap-3">
                  <Upload className="w-5 h-5" /> Import
                </button>
                <button className="btn-secondary flex items-center gap-3">
                  <Download className="w-5 h-5" /> Export
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="soft-card overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50/70 backdrop-blur border-b border-gray-200">
                  <tr>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-700">Customer ID</th>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-700">Phone</th>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-700">Total Spent</th>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-700">Joined Date</th>
                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50 transition">
                      <td className="px-8 py-6 font-medium">CUS-00{i}</td>
                      <td className="px-8 py-6">Sok Piseth</td>
                      <td className="px-8 py-6">+855 96 123 456{i}</td>
                      <td className="px-8 py-6">piseth{i}@example.com</td>
                      <td className="px-8 py-6 font-medium">${(i * 125.5).toFixed(2)}</td>
                      <td className="px-8 py-6">2025-12-1{i}</td>
                      <td className="px-8 py-6">
                        <span className={`px-4 py-2 rounded-full text-xs font-medium ${
                          i % 3 === 0 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {i % 3 === 0 ? 'VIP' : 'Active'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-10">
              <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">First</button>
              <button className="w-12 h-12 bg-black text-white rounded-full font-medium">1</button>
              <button className="w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-50">2</button>
              <button className="w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-50">3</button>
              <span className="text-gray-500">...</span>
              <button className="w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-50">25</button>
              <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">Last</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}