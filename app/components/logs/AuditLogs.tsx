
// import React from "react";

// const mockAudit = [
//   { 
//     id: "1", 
//     username: "Aminat Adebayo",
//     emailAddress: "aminat@sudo.africa",
//     method: "POST",
//     source: "SUDO-ADMIN-API",
//     type: "UPDATE_PERMISSIONS",
//     environment: "development",
//     datetime: "May 28, 2024, 04:12 PM"
//   }
// ];

// export default function AuditLogs() {
//   return (
//     <div className="bg-white overflow-hidden">
//       <table className="w-full text-left border-collapse">
//         <thead className="bg-[#F9FAFB] border-b border-gray-100">
//           <tr>
//             {[
//               "USERNAME", 
//               "EMAIL ADDRESS", 
//               "METHOD", 
//               "SOURCE", 
//               "TYPE", 
//               "ENVIRONMENT", 
//               "DATETIME"
//             ].map((h) => (
//               <th key={h} className="px-6 py-4 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider">
//                 {h}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-50">
//           {mockAudit.map((item) => (
//             <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
//               <td className="px-6 py-5 text-[13px] font-medium text-[#1D2939]">{item.username}</td>
//               <td className="px-6 py-5 text-[13px] text-gray-500">{item.emailAddress}</td>
//               <td className="px-6 py-5 text-[12px] font-bold text-blue-600">{item.method}</td>
//               <td className="px-6 py-5 text-[12px] text-gray-400 font-medium uppercase">{item.source}</td>
//               <td className="px-6 py-5">
//                 <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-bold uppercase">
//                   {item.type}
//                 </span>
//               </td>
//               <td className="px-6 py-5">
//                 <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
//                   {item.environment}
//                 </span>
//               </td>
//               <td className="px-6 py-5 text-[12px] text-gray-400 whitespace-nowrap">{item.datetime}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { Copy, X, ChevronLeft, ChevronRight } from "lucide-react";
import EventsService from "@/app/service/events.service";

export default function AuditLogs() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const limitPerPage = 25;

  // Modal state
  const [selectedLogPayload, setSelectedLogPayload] = useState<any>(null);

  // Fetch audit logs based on pagination page selection
  const fetchLogsList = async (pageToFetch: number) => {
    setLoading(true);
    const service = new EventsService();
    
    // Wire up page and limit criteria directly downstream
    const response = await service.getAllAuditLogs(pageToFetch, limitPerPage);
    
    if (response && !("error" in response)) {
      const serverPayload = response.data?.data || response.data;
      setLogs(Array.isArray(serverPayload) ? serverPayload : []);
      
      const meta = response.data?.meta || response.data?.pagination;
      if (meta) {
        setCurrentPage(Number(meta.page) || 0);
        setTotalPages(Number(meta.pages) || 1);
        setTotalRecords(Number(meta.total) || 0);
      } else {
        setCurrentPage(pageToFetch);
        setTotalPages(9); 
        setTotalRecords(225);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLogsList(currentPage);
  }, [currentPage]);

  // Recursively unpacks stringified JSON fields (like headers, action contexts) into clean objects
  const deepCleanPayload = (data: any): any => {
    if (typeof data === "string") {
      try {
        const parsed = JSON.parse(data);
        return deepCleanPayload(parsed);
      } catch {
        return data;
      }
    }
    
    if (Array.isArray(data)) {
      return data.map(item => deepCleanPayload(item));
    }
    
    if (data !== null && typeof data === "object") {
      const cleanedObj: any = {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          cleanedObj[key] = deepCleanPayload(data[key]);
        }
      }
      return cleanedObj;
    }
    
    return data;
  };

  const handleRowClick = (logItem: any) => {
    const logDataDetails = logItem.fullLog || logItem;
    const formattedPayload = deepCleanPayload(logDataDetails);
    setSelectedLogPayload(formattedPayload);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Log data copied to clipboard!");
  };

  // Math slider calculation to render exactly 5 numbers relative to currentPage
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    let startPage = Math.max(0, currentPage - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;

    if (endPage >= totalPages) {
      endPage = totalPages - 1;
      startPage = Math.max(0, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-9 h-9 flex items-center justify-center rounded-full text-[14px] font-medium transition-all ${
            currentPage === i
              ? "bg-[#101828] text-white font-bold shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          {i + 1}
        </button>
      );
    }
    return pages;
  };

  if (loading) {
    return <div className="p-8 text-[12px] text-gray-400">Loading audit logs...</div>;
  }

  return (
    <div className="space-y-4">
      {/* Table Section */}
      <div className="overflow-hidden bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#F9FAFB] border-b border-gray-100">
            <tr>
              {[
                "USERNAME", 
                "EMAIL ADDRESS", 
                "METHOD", 
                "SOURCE", 
                "TYPE", 
                "ENVIRONMENT", 
                "DATETIME"
              ].map((h) => (
                <th key={h} className="px-6 py-4 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {logs.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-10 text-center text-[13px] text-gray-400">
                  No audit logs available.
                </td>
              </tr>
            ) : (
              logs.map((log) => {
                const logId = log._id || log.id || "";
                
                const username = log.username || log.request?.sourceUserName || "System Process";
                const email = log.emailAddress || log.email || log.request?.sourceUser || "N/A";
                const method = log.method || log.request?.method || "POST";
                const source = log.source || log.request?.source || "UNKNOWN";
                const actionType = log.type || "ACTION";
                const environment = log.environment || "production";
                
                const timestamp = log.createdAt || log.datetime || log.time || "";
                const displayTime = timestamp ? new Date(timestamp).toLocaleString('en-US', {
                  month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true
                }) : "N/A";

                return (
                  <tr 
                    key={logId} 
                    onClick={() => handleRowClick(log)}
                    className="hover:bg-gray-50/50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-5 text-[13px] font-medium text-[#1D2939]">{username}</td>
                    <td className="px-6 py-5 text-[13px] text-gray-500">{email}</td>
                    <td className="px-6 py-5 text-[12px] font-bold text-[#F3A000]">{method}</td>
                    <td className="px-6 py-5 text-[12px] text-gray-400 font-medium uppercase">{source}</td>
                    <td className="px-6 py-5">
                      <span className="text-[13px] text-[#1D2939] font-medium uppercase">
                        {actionType}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-[13px] text-gray-500 font-medium lowercase">
                      {environment}
                    </td>
                    <td className="px-6 py-5 text-[12px] text-gray-400 whitespace-nowrap">{displayTime}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* COMPACT SLIDING WINDOW PAGINATION */}
      {logs.length > 0 && (
        <div className="flex items-center justify-end bg-white px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="text-gray-400 hover:text-gray-700 disabled:opacity-20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {renderPageNumbers()}
            </div>
            
            <button
              onClick={() => currentPage < totalPages - 1 && setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className="text-blue-600 hover:text-blue-800 disabled:opacity-20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5px]" />
            </button>
          </div>
        </div>
      )}

      {/* LOG DATA MODAL */}
      {selectedLogPayload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div 
            className="fixed inset-0 bg-[#0A1629]/40 backdrop-blur-[1px]" 
            onClick={() => setSelectedLogPayload(null)} 
          />
          
          <div className="bg-white rounded-2xl w-full max-w-[750px] shadow-2xl z-10 relative animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col max-h-[85vh]">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-white">
              <h2 className="text-[16px] font-bold text-[#1D2939]">Log Data</h2>
              <button onClick={() => setSelectedLogPayload(null)}>
                <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="bg-[#0A1629] overflow-y-auto flex-grow">
              <pre className="text-[13px] text-green-400 font-mono leading-relaxed p-8 whitespace-pre-wrap">
                {JSON.stringify(selectedLogPayload, null, 2)}
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-white border-t border-gray-50 flex justify-end">
              <button 
                onClick={() => copyToClipboard(JSON.stringify(selectedLogPayload, null, 2))}
                className="flex items-center gap-2 px-6 h-[44px] bg-[#0A1629] text-white text-[13px] font-bold rounded-lg hover:bg-[#1D2939] transition-colors shadow-sm"
              >
                <Copy className="w-4 h-4" /> Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}