

"use client";

import React, { useState } from "react";
import RequestLogs from "@/app/components/logs/RequestLogs";
import AuditLogs from "@/app/components/logs/AuditLogs";

export default function LogsPage() {
  const [activeTab, setActiveTab] = useState<"request" | "audit">("request");

  return (
    <div className="w-full bg-white animate-in fade-in duration-500">
      {/* Header Section: Tightened spacing */}
      <div className="px-6 pt-6">
        
        
        {/* Tab Switcher - No extra top margin, just a small gap from title */}
        <div className="flex gap-8 mt-4 border-b border-gray-100">
          <button
            onClick={() => setActiveTab("request")}
            className={`pb-4 text-[13px] font-bold transition-all ${
              activeTab === "request"
                ? "border-b-2 border-[#0A1629] text-[#0A1629]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Request Logs
          </button>
          <button
            onClick={() => setActiveTab("audit")}
            className={`pb-4 text-[13px] font-bold transition-all ${
              activeTab === "audit"
                ? "border-b-2 border-[#0A1629] text-[#0A1629]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Audit Logs
          </button>
        </div>
      </div>

      {/* Content Section: Removed space-y-6 to keep table flush with tabs */}
      <div className="w-full">
        {activeTab === "request" ? <RequestLogs /> : <AuditLogs />}
      </div>
    </div>
  );
}

