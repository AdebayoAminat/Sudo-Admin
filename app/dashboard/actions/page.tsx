
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { ChevronDown } from "lucide-react";

// export interface ActionItem {
//   id: string;
//   initiator: string;
//   business: string;
//   action: string;
//   time: string;
//   status: "APPROVED" | "SUBMITTED" | "REJECTED";
// }

// export const actionsData: ActionItem[] = [
//   {
//     id: "6835dd99ad1fbcc92d0e5b2e",
//     initiator: "Umar Yusuf",
//     business: "malik masud",
//     action: "approve_credit_card",
//     time: "May 27, 2025, 4:43:21 PM",
//     status: "APPROVED",
//   },
//   {
//     id: "2",
//     initiator: "Super Admin",
//     business: "malik masud",
//     action: "approve_credit_card",
//     time: "Oct 21, 2024, 2:48:17 PM",
//     status: "SUBMITTED",
//   },
// ];

// const ActionsPage = () => {
//   const router = useRouter();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");

//   const filteredActions = actionsData.filter((item) => {
//     const matchesSearch =
//       item.initiator.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.status.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesStatus = statusFilter === "All" || item.status === statusFilter.toUpperCase();
//     return matchesSearch && matchesStatus;
//   });

//   return (
//     <div className="space-y-6 animate-in fade-in duration-500">
//       {/* Header Filters Section */}
//       <div className="flex justify-between items-center">
//         <p className="text-[12px] text-gray-400 font-medium">
//           Showing <span className="text-[#1D2939] font-bold">{filteredActions.length} Actions</span>
//         </p>

//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2 text-[12px]">
//             <span className="text-gray-400">Filter:</span>
//             <div className="relative">
//               <select 
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//                 className="appearance-none bg-white border border-gray-100 rounded-lg px-4 py-2 pr-10 text-[12px] font-bold text-[#1D2939] outline-none cursor-pointer"
//               >
//                 <option>All</option>
//                 <option>Submitted</option>
//                 <option>Approved</option>
//                 <option>Rejected</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
//             </div>
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Admin Name, Status"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-[280px] h-[40px] pl-4 pr-10 bg-[#F9FAFB] border border-gray-100 rounded-lg text-[12px] outline-none"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2">
//               <Image src="/images/search.svg" alt="Search" width={14} height={14} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Table Section - Borders and Shadows removed to match image */}
//       <div className="w-full overflow-hidden">
//         <table className="w-full text-left table-fixed">
//           <thead className="bg-[#F9FAFB]">
//             <tr className="text-[10px] font-bold text-[#667085] tracking-wider uppercase">
//               <th className="px-6 py-4 w-[25%]">INITIATOR</th>
//               <th className="px-6 py-4 w-[20%]">BUSINESS</th>
//               <th className="px-6 py-4 w-[20%]">ACTION</th>
//               <th className="px-6 py-4 w-[20%] text-center">TIME</th>
//               <th className="px-6 py-4 w-[15%] text-right">STATUS</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {filteredActions.map((item) => (
//               <tr 
//                 key={item.id} 
//                 onClick={() => router.push(`/dashboard/actions/${item.id}`)}
//                 className="text-[11px] transition-colors cursor-pointer group bg-white"
//               >
//                 <td className="px-6 py-5 font-medium text-[#1D2939]">
//                   {item.initiator}
//                 </td>
//                 <td className="px-6 py-5 text-[#667085]">
//                   {item.business}
//                 </td>
//                 <td className="px-6 py-5 text-[#344054]">
//                   {item.action}
//                 </td>
//                 <td className="px-6 py-5 text-[#667085] text-center">
//                   {item.time}
//                 </td>
//                 <td className="px-6 py-5 text-right">
//                    <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-tight ${
//                     item.status === 'APPROVED' 
//                       ? 'text-[#027A48] border border-[#ECFDF3]' 
//                       : 'text-[#B54708] border border-[#FFFAEB]'
//                   }`}>
//                     {item.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ActionsPage;



// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { ChevronDown } from "lucide-react";
// import UserActionsService from "@/app/service/userActions.service";

// export interface ActionItem {
//   _id: string;
//   initiatorName?: string; // Matching backend field name
//   initiator?: string;     // Fallback field
//   business: {             // Fixed interface to support the nested object structure
//     id: string;
//     name: string;
//   };
//   type?: string;          // Matching backend field name
//   action?: string;        // Fallback field
//   createdAt: string;      // Matching backend timestamp key
//   time?: string;          // Fallback timestamp
//   status: "APPROVED" | "SUBMITTED" | "REJECTED";
// }

// const ActionsPage = () => {
//   const router = useRouter();
//   const [actionsData, setActionsData] = useState<ActionItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");

//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);
//   const ITEMS_PER_PAGE = 25;

//   useEffect(() => {
//     const fetchActions = async () => {
//       setLoading(true);
//       const actionsService = new UserActionsService();
//       const response = await actionsService.getAllUserActions(currentPage, ITEMS_PER_PAGE);
      
//       if (response && !("error" in response)) {
//         const payload = response.data?.data || response.data;
//         if (Array.isArray(payload)) {
//           setActionsData(payload);
//           const totalCount = response.data?.total || payload.length;
//           setTotalPages(Math.max(1, Math.ceil(totalCount / ITEMS_PER_PAGE)));
//         } else if (payload?.actions && Array.isArray(payload.actions)) {
//           setActionsData(payload.actions);
//           setTotalPages(Math.max(1, Math.ceil((payload.total || payload.actions.length) / ITEMS_PER_PAGE)));
//         }
//       }
//       setLoading(false);
//     };

//     fetchActions();
//   }, [currentPage]);

//   const filteredActions = actionsData.filter((item) => {
//     const displayInitiator = item.initiatorName || item.initiator || "";
//     const displayBusiness = item.business?.name || "";

//     const matchesSearch =
//       displayInitiator.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       displayBusiness.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.status.toLowerCase().includes(searchQuery.toLowerCase());
      
//     const matchesStatus = statusFilter === "All" || item.status === statusFilter.toUpperCase();
//     return matchesSearch && matchesStatus;
//   });

//   if (loading) {
//     return <div className="p-8 text-[12px] text-gray-400">Loading action history records...</div>;
//   }

//   return (
//     <div className="space-y-6 animate-in fade-in duration-500">
//       {/* Header Filters Section */}
//       <div className="flex justify-between items-center">
//         <p className="text-[12px] text-gray-400 font-medium">
//           Showing <span className="text-[#1D2939] font-bold">{filteredActions.length} Actions</span>
//         </p>

//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2 text-[12px]">
//             <span className="text-gray-400">Filter:</span>
//             <div className="relative">
//               <select 
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//                 className="appearance-none bg-white border border-gray-100 rounded-lg px-4 py-2 pr-10 text-[12px] font-bold text-[#1D2939] outline-none cursor-pointer"
//               >
//                 <option>All</option>
//                 <option>Submitted</option>
//                 <option>Approved</option>
//                 <option>Rejected</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
//             </div>
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Admin Name, Status"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-[280px] h-[40px] pl-4 pr-10 bg-[#F9FAFB] border border-gray-100 rounded-lg text-[12px] outline-none"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2">
//               <Image src="/images/search.svg" alt="Search" width={14} height={14} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="w-full overflow-hidden">
//         <table className="w-full text-left table-fixed">
//           <thead className="bg-[#F9FAFB]">
//             <tr className="text-[10px] font-bold text-[#667085] tracking-wider uppercase">
//               <th className="px-6 py-4 w-[25%]">INITIATOR</th>
//               <th className="px-6 py-4 w-[20%]">BUSINESS</th>
//               <th className="px-6 py-4 w-[20%]">ACTION</th>
//               <th className="px-6 py-4 w-[20%] text-center">TIME</th>
//               <th className="px-6 py-4 w-[15%] text-right">STATUS</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {filteredActions.map((item) => {
//               // Extract fields dynamically supporting both old data and new backend response structures
//               const displayInitiator = item.initiatorName || item.initiator || "";
//               const displayBusiness = item.business?.name || "";
//               const displayAction = item.type || item.action || "";
//               const timestamp = item.createdAt || item.time || "";

//               const displayTime = timestamp ? new Date(timestamp).toLocaleString('en-US', {
//                 month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true
//               }) : "";

//               return (
//                 <tr 
//                   key={item._id} 
//                   onClick={() => router.push(`/dashboard/actions/${item._id}`)}
//                   className="text-[11px] transition-colors cursor-pointer group bg-white"
//                 >
//                   <td className="px-6 py-5 font-medium text-[#1D2939]">
//                     {displayInitiator}
//                   </td>
//                   <td className="px-6 py-5 text-[#667085] capitalize">
//                     {displayBusiness}
//                   </td>
//                   <td className="px-6 py-5 text-[#344054]">
//                     {displayAction}
//                   </td>
//                   <td className="px-6 py-5 text-[#667085] text-center">
//                     {displayTime}
//                   </td>
//                   <td className="px-6 py-5 text-right">
//                      <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-tight ${
//                       item.status === 'APPROVED' 
//                         ? 'text-[#027A48] border border-[#ECFDF3] bg-[#F6FEF9]' 
//                         : item.status === 'SUBMITTED'
//                         ? 'text-[#B54708] border border-[#FFFAEB] bg-[#FFFAEB]'
//                         : 'text-[#B42318] border border-[#FEF3F2] bg-[#FEF3F2]'
//                     }`}>
//                       {item.status}
//                     </span>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Footer Controls */}
//       {totalPages > 1 && (
//         <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-[12px]">
//           <button
//             onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
//             disabled={currentPage === 0}
//             className="px-3 py-1.5 border border-gray-200 rounded-lg font-medium text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
//           >
//             Previous
//           </button>
//           <span className="text-gray-500 font-medium">
//             Page <span className="text-[#1D2939] font-bold">{currentPage + 1}</span> of {totalPages}
//           </span>
//           <button
//             onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
//             disabled={currentPage === totalPages - 1}
//             className="px-3 py-1.5 border border-gray-200 rounded-lg font-medium text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ActionsPage;


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import UserActionsService from "@/app/service/userActions.service";

export interface ActionItem {
  _id: string;
  initiatorName?: string;
  initiator?: string;
  business: {
    id: string;
    name: string;
  };
  type?: string;
  action?: string;
  createdAt: string;
  time?: string;
  status: string;
}

const ActionsPage = () => {
  const router = useRouter();
  const [actionsData, setActionsData] = useState<ActionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Pagination and dynamic tracking states
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0); // Tracking total entries count
  const ITEMS_PER_PAGE = 25;

  useEffect(() => {
    const fetchActions = async () => {
      setLoading(true);
      const actionsService = new UserActionsService();
      const response = await actionsService.getAllUserActions(currentPage, ITEMS_PER_PAGE);
      
      if (response && !("error" in response)) {
        const payload = response.data?.data || response.data;
        if (Array.isArray(payload)) {
          setActionsData(payload);
        }

        if (response.data?.pagination) {
          const totalPagesFromBackend = Number(response.data.pagination.pages);
          const totalItemsFromBackend = Number(response.data.pagination.total);
          
          setTotalPages(totalPagesFromBackend || 1);
          setTotalItems(totalItemsFromBackend || payload.length || 0);
        }
      }
      setLoading(false);
    };

    fetchActions();
  }, [currentPage]);

  const filteredActions = actionsData.filter((item) => {
    const displayInitiator = item.initiatorName || item.initiator || "";
    const displayBusiness = item.business?.name || "";

    const matchesSearch =
      displayInitiator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      displayBusiness.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesStatus = statusFilter === "All" || item.status === statusFilter.toUpperCase();
    return matchesSearch && matchesStatus;
  });

  // Calculate dynamic list ranges for the UI text tracker
  const fromCount = totalItems === 0 ? 0 : currentPage * ITEMS_PER_PAGE + 1;
  const toCount = Math.min((currentPage + 1) * ITEMS_PER_PAGE, totalItems);

  if (loading) {
    return <div className="p-8 text-[12px] text-gray-400">Loading action history records...</div>;
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header Filters Section */}
      <div className="flex justify-between items-center">
        <p className="text-[12px] text-gray-400 font-medium">
          Showing <span className="text-[#1D2939] font-bold">{fromCount} - {toCount} of {totalItems} Actions</span>
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[12px]">
            <span className="text-gray-400">Filter:</span>
            <div className="relative">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-100 rounded-lg px-4 py-2 pr-10 text-[12px] font-bold text-[#1D2939] outline-none cursor-pointer"
              >
                <option>All</option>
                <option>Submitted</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Admin Name, Status"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[280px] h-[40px] pl-4 pr-10 bg-[#F9FAFB] border border-gray-100 rounded-lg text-[12px] outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image src="/images/search.svg" alt="Search" width={14} height={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full overflow-hidden">
        <table className="w-full text-left table-fixed">
          <thead className="bg-[#F9FAFB]">
            <tr className="text-[10px] font-bold text-[#667085] tracking-wider uppercase">
              <th className="px-6 py-4 w-[25%]">INITIATOR</th>
              <th className="px-6 py-4 w-[20%]">BUSINESS</th>
              <th className="px-6 py-4 w-[20%]">ACTION</th>
              <th className="px-6 py-4 w-[20%] text-center">TIME</th>
              <th className="px-6 py-4 w-[15%] text-right">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredActions.map((item) => {
              const displayInitiator = item.initiatorName || item.initiator || "";
              const displayBusiness = item.business?.name || "";
              const displayAction = item.type || item.action || "";
              const timestamp = item.createdAt || item.time || "";

              const displayTime = timestamp ? new Date(timestamp).toLocaleString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true
              }) : "";

              return (
                <tr 
                  key={item._id} 
                  onClick={() => router.push(`/dashboard/actions/${item._id}`)}
                  className="text-[11px] transition-colors cursor-pointer group bg-white"
                >
                  <td className="px-6 py-5 font-medium text-[#1D2939]">
                    {displayInitiator}
                  </td>
                  <td className="px-6 py-5 text-[#667085] capitalize">
                    {displayBusiness}
                  </td>
                  <td className="px-6 py-5 text-[#344054]">
                    {displayAction}
                  </td>
                  <td className="px-6 py-5 text-[#667085] text-center">
                    {displayTime}
                  </td>
                  <td className="px-6 py-5 text-right">
                     <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-tight ${
                      item.status === 'APPROVED' 
                        ? 'text-[#027A48] border border-[#ECFDF3] bg-[#F6FEF9]' 
                        : item.status === 'SUBMITTED'
                        ? 'text-[#B54708] border border-[#FFFAEB] bg-[#FFFAEB]'
                        : 'text-[#B42318] border border-[#FEF3F2] bg-[#FEF3F2]'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 pt-6 select-none">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className={`transition-all p-1 ${
              currentPage === 0 ? "opacity-25 cursor-not-allowed" : "cursor-pointer hover:scale-105"
            }`}
          >
            <Image 
              src="/images/chevron-left1.svg" 
              alt="Previous Page" 
              width={18} 
              height={18} 
              className="text-[#667085]"
            />
          </button>

          <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-8 h-8 flex items-center justify-center text-[13px] font-medium transition-all rounded-full ${
                  currentPage === idx
                    ? "bg-[#141B25] text-white font-semibold shadow-sm"
                    : "text-gray-500 hover:bg-gray-50 hover:text-[#141B25]"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className={`transition-all p-1 ${
              currentPage === totalPages - 1 ? "opacity-25 cursor-not-allowed" : "cursor-pointer hover:scale-105"
            }`}
          >
            <Image 
              src="/images/chevron-right.svg" 
              alt="Next Page" 
              width={18} 
              height={18} 
              className="text-[#4F46E5]" 
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionsPage;