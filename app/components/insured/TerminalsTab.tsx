// "use client";

// import React from "react";
// import Image from "next/image";

// const MOCK_TERMINALS = [
//   {
//     deviceName: "o1q - android",
//     userId: "6a33db82b32a21716d95ccaf",
//     serialNo: "SP1A.210812.016",
//     createdDate: "Created on Jun 18, 2026, 1:02:11 PM"
//   },
//   {
//     deviceName: "o1q - android",
//     userId: "6a33c2eb32a21716d95b419",
//     serialNo: "SP1A.210812.016",
//     createdDate: "Created on Jun 18, 2026, 11:26:36 AM"
//   },
//   {
//     deviceName: "o1q - android",
//     userId: "6a331bf5b32a21716d959b91",
//     serialNo: "AP3A.240905.015.A2",
//     createdDate: "Created on Jun 17, 2026, 11:52:41 PM"
//   },
//   {
//     deviceName: "OP5745L1 - CPH2565",
//     userId: "696b60c53ba0ebe8362463d2",
//     serialNo: "871095923574234",
//     createdDate: "Created on Jun 16, 2026, 3:19:47 PM"
//   },
//   {
//     deviceName: "sweet - android",
//     userId: "651317f6e78e5ea586285cf4",
//     serialNo: "TKQ1.221013.002",
//     createdDate: "Created on May 12, 2026, 10:21:56 AM"
//   },
//   {
//     deviceName: "caiman - android",
//     userId: "6513df08d784ab628becc622",
//     serialNo: "BP4A.260105.004.E1",
//     createdDate: "Created on Feb 11, 2026, 1:55:29 PM"
//   },
//   {
//     deviceName: "Infinix-X6835B - android",
//     userId: "6512fbf20f9aa6f1319924e7",
//     serialNo: "TP1A.220624.014",
//     createdDate: "Created on Sep 3, 2025, 4:56:45 PM"
//   },
//   {
//     deviceName: "Infinix-X6835B - android",
//     userId: "6512f8460f9aa6f1319920c1",
//     serialNo: "TP1A.220624.014",
//     createdDate: "Created on Sep 1, 2025, 1:15:03 PM"
//   },
//   {
//     deviceName: "S60 - Android",
//     userId: "686ff4afb3e3ac0fe19d8cb6",
//     serialNo: "82240114690017",
//     createdDate: "Created on Jul 10, 2025, 6:16:34 PM"
//   }
// ];

// export default function TerminalsTab() {
//   return (
//     <div className="space-y-6 animate-in fade-in duration-300">
      
//       {/* HEADER UTILITY BLOCK */}
//       <div className="flex justify-between items-center">
//         <p className="text-[13px] text-[#848D9A] font-medium">
//           Showing <span className="text-[#1D2939] font-bold">{MOCK_TERMINALS.length}</span> Terminals
//         </p>
//       </div>

//       {/* TERMINAL CARD GRID LAYOUT */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {MOCK_TERMINALS.map((terminal, idx) => (
//           <div 
//             key={idx} 
//             className="bg-white border border-[#F2F4F7] rounded-xl p-5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
//           >
//             <div>
//               {/* Device Title Header */}
//               <h3 className="text-[13.5px] font-bold text-[#1D2939] tracking-tight mb-3">
//                 Device Name: <span className="font-medium text-[#344054]">{terminal.deviceName}</span>
//               </h3>

//               {/* Subdued Inline Gray Context Wrapper */}
//               <div className="bg-[#F8F9FA] rounded-lg p-3.5 space-y-1 text-[11.5px] text-[#475467] font-medium font-mono border border-gray-50">
//                 <p className="truncate">
//                   <span className="font-sans font-normal text-[#667085]">User - </span>
//                   {terminal.userId}
//                 </p>
//                 <p className="truncate">
//                   <span className="font-sans font-normal text-[#667085]">SN - </span>
//                   {terminal.serialNo}
//                 </p>
//               </div>
//             </div>

//             {/* Bottom Timeline Timestamp Segment */}
//             <div className="flex items-center gap-1.5 mt-4 text-[#848D9A]">
//               {/* Clock SVG Icon Matrix */}
//               <svg 
//                 className="w-3.5 h-3.5 opacity-70" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               >
//                 <circle cx="12" cy="12" r="10" />
//                 <polyline points="12 6 12 12 16 14" />
//               </svg>
//               <span className="text-[11px] font-medium tracking-tight">
//                 {terminal.createdDate}
//               </span>
//             </div>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import InsuredService from "@/app/service/insured.service";

// const insuredService = new InsuredService();

// export default function TerminalsTab() {
//   const [terminals, setTerminals] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage] = useState(0);
//   const pageSize = 25;

//   useEffect(() => {
//     const fetchTerminals = async () => {
//       setLoading(true);
//       try {
//         const res = await insuredService.getAllTerminals(currentPage, pageSize, "");
//         if ((res as any)?.data) {
//           const data = (res as any).data?.data?.data;
//           setTerminals(Array.isArray(data) ? data : []);
//         }
//       } catch (err) {
//         console.error("Failed to fetch terminals:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTerminals();
//   }, [currentPage]);

//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {[...Array(6)].map((_, i) => (
//           <div key={i} className="h-36 bg-gray-100 animate-pulse rounded-xl" />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6 animate-in fade-in duration-300">

//       {/* HEADER */}
//       <div className="flex justify-between items-center">
//         <p className="text-[13px] text-[#848D9A] font-medium">
//           Showing <span className="text-[#1D2939] font-bold">{terminals.length}</span> Terminals
//         </p>
//       </div>

//       {/* TERMINAL CARD GRID */}
//       {terminals.length === 0 ? (
//         <div className="text-center py-12 text-sm text-gray-400">No terminals found</div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {terminals.map((terminal) => (
//             <div
//               key={terminal._id}
//               className="bg-white border border-[#F2F4F7] rounded-xl p-5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
//             >
//               <div>
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="text-[13.5px] font-bold text-[#1D2939] tracking-tight">
//                     Device Name:{" "}
//                     <span className="font-medium text-[#344054]">
//                       {terminal.device_name} - {terminal.user_device}
//                     </span>
//                   </h3>
//                   <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
//                     terminal.active === "Active"
//                       ? "bg-[#ECFDF5] text-[#065F46]"
//                       : "bg-[#FEF9C3] text-[#854D0E]"
//                   }`}>
//                     {terminal.active}
//                   </span>
//                 </div>

//                 <div className="bg-[#F8F9FA] rounded-lg p-3.5 space-y-1 text-[11.5px] text-[#475467] font-medium font-mono border border-gray-50">
//                   <p className="truncate">
//                     <span className="font-sans font-normal text-[#667085]">User - </span>
//                     {terminal.user}
//                   </p>
//                   <p className="truncate">
//                     <span className="font-sans font-normal text-[#667085]">SN - </span>
//                     {terminal.device_serial}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-1.5 mt-4 text-[#848D9A]">
//                 <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <circle cx="12" cy="12" r="10" />
//                   <polyline points="12 6 12 12 16 14" />
//                 </svg>
//                 <span className="text-[11px] font-medium tracking-tight">
//                   Created on{" "}
//                   {new Date(terminal.createdAt).toLocaleString("en-US", {
//                     month: "short", day: "numeric", year: "numeric",
//                     hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true,
//                   })}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InsuredService from "@/app/service/insured.service";

const insuredService = new InsuredService();

export default function TerminalsTab() {
  const [terminals, setTerminals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 25;

  useEffect(() => {
    const fetchTerminals = async () => {
      setLoading(true);
      try {
        const res = await insuredService.getAllTerminals(currentPage, pageSize, "") as any;
        if (res?.data) {
          const data = res.data?.data?.data;
          setTerminals(Array.isArray(data) ? data : []);
          setTotalPages(res.data?.data?.numOfPages || res.data?.numOfPages || 0);
          setTotalCount(res.data?.data?.totalNum || res.data?.totalNum || 0);
        }
      } catch (err) {
        console.error("Failed to fetch terminals:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTerminals();
  }, [currentPage]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true,
    });
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-36 bg-gray-100 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <p className="text-[13px] text-[#848D9A] font-medium">
          Showing{" "}
          <span className="text-[#1D2939] font-bold">
            {totalCount === 0 ? 0 : currentPage * pageSize + 1} -{" "}
            {Math.min((currentPage + 1) * pageSize, totalCount)}
          </span>{" "}
          of{" "}
          <span className="text-[#1D2939] font-bold">{totalCount}</span>{" "}
          Terminals
        </p>
      </div>

      {/* TERMINAL CARD GRID */}
      {terminals.length === 0 ? (
        <div className="text-center py-12 text-sm text-gray-400">No terminals found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {terminals.map((terminal) => (
            <div
              key={terminal._id}
              className="bg-white border border-[#F2F4F7] rounded-xl p-5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[13.5px] font-bold text-[#1D2939] tracking-tight">
                    Device Name:{" "}
                    <span className="font-medium text-[#344054]">
                      {terminal.device_name} - {terminal.user_device}
                    </span>
                  </h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    terminal.active === "Active"
                      ? "bg-[#ECFDF5] text-[#065F46]"
                      : "bg-[#FEF9C3] text-[#854D0E]"
                  }`}>
                    {terminal.active}
                  </span>
                </div>

                <div className="bg-[#F8F9FA] rounded-lg p-3.5 space-y-1 text-[11.5px] text-[#475467] font-medium font-mono border border-gray-50/50">
                  <p className="truncate">
                    <span className="font-sans font-normal text-[#667085]">User - </span>
                    {terminal.user}
                  </p>
                  <p className="truncate">
                    <span className="font-sans font-normal text-[#667085]">SN - </span>
                    {terminal.device_serial}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mt-4 text-[#848D9A]">
                <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-[11px] font-medium tracking-tight">
                  Created on {formatDate(terminal.createdAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-3 mt-6 py-4">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="p-2 text-gray-400 hover:text-[#034EA2] disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-2">
            {(() => {
              const rangeSize = 5;
              let start = Math.max(0, currentPage - 2);
              let end = Math.min(totalPages - 1, start + rangeSize - 1);
              if (end - start + 1 < rangeSize) start = Math.max(0, end - rangeSize + 1);
              const pages = [];
              for (let i = start; i <= end; i++) pages.push(i);
              return pages.map((pageIdx) => {
                const isSelected = currentPage === pageIdx;
                return (
                  <button
                    key={pageIdx}
                    onClick={() => setCurrentPage(pageIdx)}
                    className={`w-9 h-9 text-[13px] font-bold rounded-full transition-all duration-200 ${
                      isSelected
                        ? "bg-[#0A1120] text-white shadow-sm scale-105"
                        : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {pageIdx + 1}
                  </button>
                );
              });
            })()}
          </div>

          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 text-[#4F46E5] hover:text-[#034EA2] disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      )}
    </div>
  );
}