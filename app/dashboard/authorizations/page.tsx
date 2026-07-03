
// "use client";

// import Image from "next/image";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import AuthorizationDetails from "../../components/authorizations/AuthorizationDetails";

// /* --- MOCK DATA --- */
// const authorizationsData = [
//   {
//     id: "1",
//     merchant: "SUDO SIMULATOR",
//     date: "4/6/26, 1:43 PM",
//     channel: "POS",
//     amount: "₦9,016.13",
//     cardName: "SUDO / JOHN DOE",
//     last4: "3357",
//     type: "Virtual",
//     status: "Closed",
//   },
//   {
//     id: "2",
//     merchant: "SUDO SIMULATOR",
//     date: "4/6/26, 1:38 PM",
//     channel: "WEB",
//     amount: "₦9,016.13",
//     cardName: "SUDO / JOHN DOE",
//     last4: "3357",
//     type: "Virtual",
//     status: "Closed",
//   },
//   {
//     id: "3",
//     merchant: "SUDO SIMULATOR",
//     date: "4/6/26, 1:33 PM",
//     channel: "WEB",
//     amount: "₦1,005.38",
//     cardName: "SUDO / JOHN DOE",
//     last4: "3357",
//     type: "Virtual",
//     status: "Closed",
//   },
//   {
//     id: "4",
//     merchant: "SUDO SIMULATOR",
//     date: "4/5/26, 6:03 AM",
//     channel: "WEB",
//     amount: "₦9,016.13",
//     cardName: "SUDO / JOHN DOE",
//     last4: "3357",
//     type: "Virtual",
//     status: "Closed",
//   },
//   {
//     id: "5",
//     merchant: "SUDO SIMULATOR",
//     date: "4/3/26, 12:36 PM",
//     channel: "POS",
//     amount: "₦10,005.38",
//     cardName: "SUDO / FIYIN ADEWALE",
//     last4: "7347",
//     type: "Virtual",
//     status: "Approved",
//   },
//   {
//     id: "6",
//     merchant: "SUDO SIMULATOR",
//     date: "4/3/26, 12:25 PM",
//     channel: "WEB",
//     amount: "₦5,005.38",
//     cardName: "SUDO / FIYIN ADEWALE",
//     last4: "7347",
//     type: "Virtual",
//     status: "Approved",
//   },
// ];

// export default function AuthorizationsPage() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   // Logic to determine view state from URL
//   const view = searchParams.get("view");
//   const selectedId = searchParams.get("id");

//   const handleRowClick = (auth: (typeof authorizationsData)[0]) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("view", "detail");
//     params.set("id", auth.id);
//     // Optional: pass amount/status if your header needs them immediately
//     params.set("amount", auth.amount);
//     params.set("status", auth.status);

//     router.push(`${pathname}?${params.toString()}`);
//   };

//   // If in Detail View, render the details component
//   if (view === "detail" && selectedId) {
//     return <AuthorizationDetails id={selectedId} />;
//   }

//   return (
//     <div className="p-6 space-y-7 animate-in fade-in duration-500">
//       {/* Utility Bar: Date, Filter, Search */}
//       <div className="flex justify-end items-center gap-3">
//         <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] font-medium text-[#1D2939]">
//           <span className="text-gray-400">
//             Wed Apr 01 2026 - Thu Apr 30 2026
//           </span>
//           <div className="w-4 h-4 relative opacity-40">
//             <Image src="/images/calendar.svg" alt="" fill />
//           </div>
//         </div>

//         <div className="relative">
//           <select className="appearance-none pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] font-medium text-[#1D2939] outline-none">
//             <option>All</option>
//           </select>
//           <div className="absolute right-3 top-3.5 pointer-events-none opacity-40">
//             <span className="text-[10px]">▼</span>
//           </div>
//         </div>

//         <div className="relative">
//           <input
//             type="text"
//             placeholder="name, ..."
//             className="pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] w-64 outline-none"
//           />
//           <div className="absolute right-3.5 top-2.5 w-5 h-5 opacity-40">
//             <Image
//               src="/images/search.svg"
//               alt="Search"
//               fill
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Data Table */}
//       <div className="w-full border border-gray-50 rounded-2xl overflow-hidden bg-white shadow-sm">
//         <table className="w-full text-left">
//           <thead className="bg-white border-b border-gray-50">
//             <tr>
//               {["MERCHANT", "CHANNEL", "AMOUNT", "CARD", "STATUS"].map(
//                 (header) => (
//                   <th
//                     key={header}
//                     className="px-6 py-5 text-[10px] font-bold text-gray-400 tracking-widest"
//                   >
//                     {header}
//                   </th>
//                 ),
//               )}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {authorizationsData.map((auth) => (
//               <tr
//                 key={auth.id}
//                 onClick={() => handleRowClick(auth)}
//                 className="group hover:bg-gray-50/50 cursor-pointer transition-colors"
//               >
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[12px] shrink-0">
//                       SS
//                     </div>
//                     <div>
//                       <p className="text-[12px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">
//                         {auth.merchant}
//                       </p>
//                       <p className="text-[10px] text-gray-400 mt-0.5">
//                         {auth.date}
//                       </p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="px-2.5 py-1 bg-[#EFF6FF] text-[#3B82F6] text-[10px] font-bold rounded tracking-wider uppercase">
//                     {auth.channel}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">
//                   {auth.amount}
//                 </td>
//                 <td className="px-6 py-4">
//                   <p className="text-[12px] font-bold text-[#1D2939]">
//                     {auth.cardName}
//                   </p>
//                   <p className="text-[10px] text-gray-400 mt-0.5">
//                     {auth.type} • 506321********{auth.last4}
//                   </p>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-tight ${
//                       auth.status === "Approved"
//                         ? "bg-[#F0FDF4] text-[#22C55E]"
//                         : "bg-[#FEF2F2] text-[#EF4444]"
//                     }`}
//                   >
//                     {auth.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="pt-2">
//         <p className="text-[11px] text-gray-400 font-medium">
//           Showing 0 - 10 of 10 Authorizations
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import CardsService from "@/app/service/cards.service";
import AuthorizationDetails from "../../components/authorizations/AuthorizationDetails";

export default function AuthorizationsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const cardsService = useMemo(() => new CardsService(), []);

  // View States from URL Parameters
  const view = searchParams.get("view");
  const selectedId = searchParams.get("id");

  // Core API Data Tracker States
  const [authorizations, setAuthorizations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Filter, Search, and Pagination States
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // 1. Fetch Authorizations from CardsService API
  useEffect(() => {
    let isMounted = true;

    async function loadAuthorizations() {
      try {
        setLoading(true);
        setError(null);
        const response = await cardsService.getAllAuthorizations();

        if (!isMounted) return;

        const payload = response?.data?.data || response?.data || [];
        if (Array.isArray(payload)) {
          setAuthorizations(payload);
        } else {
          setAuthorizations([]);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || "Failed to sync authorization transaction entries.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadAuthorizations();
    return () => {
      isMounted = false;
    };
  }, [cardsService]);

  // 2. Perform Filtering & Searching Local Processes
  const filteredData = useMemo(() => {
    if (!Array.isArray(authorizations)) return [];

    return authorizations.filter((item) => {
      const cardHolder = (item?.card?.holderName || item?.cardName || "").toLowerCase();
      const merchantName = (item?.merchant?.name || item?.merchant || "").toLowerCase();
      const query = searchQuery.toLowerCase();
      const matchesSearch = cardHolder.includes(query) || merchantName.includes(query);

      const currentStatus = item?.status || "Closed";
      const matchesStatus =
        statusFilter === "All" || currentStatus.toLowerCase() === statusFilter.toLowerCase();

      const itemDate = new Date(item.createdAt || item.date);
      const matchesDate =
        (!startDate || itemDate >= new Date(startDate)) &&
        (!endDate || itemDate <= new Date(endDate));

      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [authorizations, searchQuery, statusFilter, startDate, endDate]);

  // 3. Compute Client-Side Multi-Page Breakdowns
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;

  const handleRowClick = (auth: any) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", "detail");
    params.set("id", auth._id || auth.id);
    params.set("amount", String(auth.amount || 0));
    params.set("status", auth.status || "Closed");

    router.push(`${pathname}?${params.toString()}`);
  };

  if (view === "detail" && selectedId) {
    return <AuthorizationDetails id={selectedId} />;
  }

  return (
    <div className="p-6 space-y-6 text-[#1D2939] animate-in fade-in duration-300">
      
      {/* Top Controls Bar with Counter on Left */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-[12px] text-gray-400 font-semibold tracking-wide">
          Showing {filteredData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} -{" "}
          {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} Authorizations
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto justify-end">
          {/* Native Date Input Group representing actual calendar functions */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="date"
              value={startDate}
              onChange={(e) => { setStartDate(e.target.value); setCurrentPage(1); }}
              className="px-3 py-2 bg-gray-50 border border-gray-200/60 rounded-xl text-[12px] font-semibold text-[#344054] outline-none focus:bg-white focus:border-[#034EA2] transition w-full sm:w-auto"
            />
            <span className="text-gray-400 text-xs font-bold">to</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => { setEndDate(e.target.value); setCurrentPage(1); }}
              className="px-3 py-2 bg-gray-50 border border-gray-200/60 rounded-xl text-[12px] font-semibold text-[#344054] outline-none focus:bg-white focus:border-[#034EA2] transition w-full sm:w-auto"
            />
          </div>

          {/* Status Processing Control Dropdown Selector */}
          <div className="relative w-full sm:w-auto">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200/60 rounded-xl text-[12px] font-bold text-[#344054] outline-none cursor-pointer focus:bg-white focus:border-[#034EA2] transition"
            >
              <option value="All">All</option>
              <option value="Approved">Approved</option>
              <option value="Closed">Closed</option>
              <option value="Declined">Declined</option>
            </select>
            <div className="absolute right-3 top-3.5 pointer-events-none text-gray-400 text-[9px]">
              ▼
            </div>
          </div>

          {/* Live Search Input Wrapper */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search name"
              className="w-full pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-200/60 rounded-xl text-[12px] font-medium outline-none focus:bg-white focus:border-[#034EA2] transition"
            />
            <div className="absolute right-3.5 top-2.5 w-5 h-5 opacity-40">
              <Image
                src="/images/search.svg"
                alt="Search"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Layer (No Outer Wrapper Border) */}
      <div className="w-full bg-white shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white border-b border-gray-50 text-[10px] font-bold text-gray-400 tracking-wider uppercase tracking-widest">
              {["MERCHANT", "CHANNEL", "AMOUNT", "CARD", "STATUS"].map((header) => (
                <th key={header} className="px-6 py-4.5 font-bold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              <tr>
                <td colSpan={5} className="py-20 text-center">
                  <div className="w-8 h-8 border-[3px] border-[#034EA2] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-[12px] text-gray-400 font-medium">Retrieving operations history...</p>
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={5} className="py-16 text-center">
                  <p className="text-red-500 font-mono text-[12px]">{error}</p>
                </td>
              </tr>
            ) : paginatedData.length > 0 ? (
              paginatedData.map((auth, idx) => {
                const currentStatus = (auth.status || "Closed").toLowerCase();
                const isApproved = currentStatus === "approved" || currentStatus === "success";
                const isClosedOrDeclined = currentStatus === "closed" || currentStatus === "declined" || currentStatus === "failed";
                
                const merchantLabel = auth.merchant?.name || auth.merchant || "UNKNOWN";
                const initials = merchantLabel.slice(0, 2).toUpperCase();
                const transactionAmount = Number(auth.amount || 0).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                });

                return (
                  <tr
                    key={auth._id || auth.id || idx}
                    onClick={() => handleRowClick(auth)}
                    className="group hover:bg-gray-50/40 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-black text-[11px] shrink-0 uppercase tracking-wider">
                          {initials}
                        </div>
                        <div>
                          <p className="text-[12px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors max-w-[180px] truncate">
                            {merchantLabel}
                          </p>
                          <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                            {auth.createdAt || auth.date }
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-2.5 py-0.5 bg-[#EFF6FF] text-[#3B82F6] text-[10px] font-bold rounded uppercase tracking-wider">
                        {auth.transactionMetadata.channel }
                      </span>
                    </td>

                    <td className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">
                      {auth.currency === "USD" ? "$" : "₦"}{transactionAmount}
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-[12px] font-bold text-[#1D2939] max-w-[200px] truncate">
                        {auth.account.accountName}
                      </p>
                      <p className="text-[10px] text-gray-400 font-medium mt-0.5 font-mono">
                        {auth.card?.type} • {auth.card?.maskedPan}
                      </p>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold capitalize ${
                          isApproved
                            ? "bg-[#E8F5E9] text-[#2E7D32]" 
                            : isClosedOrDeclined
                            ? "bg-[#FFEBEE] text-[#C62828]" 
                            : "bg-[#F5F5F5] text-[#616161]" 
                        }`}
                      >
                        {auth.status || "Closed"}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className="py-20 text-center text-gray-400 font-medium text-[13px] italic">
                  No authorization records matched your current query criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Pagination Block */}
      {filteredData.length > itemsPerPage && (
        <div className="flex justify-end items-center gap-2 pt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Image src="/images/arrow-left1.svg" alt="Previous" width={14} height={14} />
          </button>
          
          {Array.from({ length: totalPages }, (_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 rounded-full text-[11px] font-bold transition ${
                  currentPage === pageNum 
                    ? "bg-black text-white" 
                    : "border border-gray-200 bg-white hover:bg-gray-50 text-gray-600"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Image src="/images/arrow-right.svg" alt="Next" width={14} height={14} />
          </button>
        </div>
      )}
    </div>
  );
}
