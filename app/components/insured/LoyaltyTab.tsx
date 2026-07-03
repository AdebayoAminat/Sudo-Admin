"use client";

import React from "react";

export default function LoyaltyTab() {
  return (
    <div className="p-12 border-2 border-dashed border-gray-100 rounded-3xl text-center">
      <p className="text-[14px] font-bold text-[#1D2939]">Loyalty Program Management</p>
      <p className="text-[12px] text-gray-400 mt-2">Manage customer rewards and points here.</p>
      <button className="mt-6 px-6 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] font-bold text-[#1D2939] hover:bg-gray-100 transition-all">
        Create Loyalty Card
      </button>
    </div>
  );
}