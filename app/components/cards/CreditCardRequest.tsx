// "use client";
// import React from "react";

// export default function CreditCardRequest() {
//   const requests = [
//     {
//       id: "REQ-99",
//       user: "Umar Yusuf",
//       limit: "N500,000",
//       status: "Pending",
//       date: "Apr 14, 2026",
//     },
//   ];

//   return (
//     <div className="bg-white border border-gray-100 rounded-xl p-8 text-center">
//       {requests.length > 0 ? (
//         <div className="text-left">
//           {/* Table logic similar to OrderList goes here */}
//           <p className="text-[13px] text-gray-500">
//             You have {requests.length} pending credit requests.
//           </p>
//         </div>
//       ) : (
//         <div className="py-12">
//           <p className="text-gray-400 text-[13px]">
//             No credit card requests found.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";
// import React, { useEffect, useState, useMemo, useRef } from "react";
// import CardsService from "@/app/service/cards.service";

// export default function CreditCardRequest() {
//   const cardsService = useMemo(() => new CardsService(), []);

//   // API Data State
//   const [orders, setOrders] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Pagination Control States
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const [totalPages, setTotalPages] = useState<number>(1);
//   const [totalRecords, setTotalRecords] = useState<number>(0);
//   const itemsPerPage = 25;

//   // Search Input State
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   // Filter Dropdown Anchor States
//   const [showFilterDropdown, setShowFilterDropdown] = useState<boolean>(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Staged Filter States (Inside dropdown panel)
//   const [selectedStatus, setSelectedStatus] = useState<string>("");
//   const [selectedCurrency, setSelectedCurrency] = useState<string>("");
//   const [startDate, setStartDate] = useState<string>("");
//   const [endDate, setEndDate] = useState<string>("");

//   // Applied Filter States (Triggers API call re-fetch)
//   const [appliedStatus, setAppliedStatus] = useState<string>("");
//   const [appliedCurrency, setAppliedCurrency] = useState<string>("");
//   const [appliedStartDate, setAppliedStartDate] = useState<string>("");
//   const [appliedEndDate, setAppliedEndDate] = useState<string>("");

//   // Track exact number of active filters currently applied
//   const activeFilterCount = useMemo(() => {
//     let count = 0;
//     if (appliedStatus) count++;
//     if (appliedCurrency) count++;
//     if (appliedStartDate || appliedEndDate) count++;
//     return count;
//   }, [appliedStatus, appliedCurrency, appliedStartDate, appliedEndDate]);

//   // Close filter panel if clicking anywhere outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setShowFilterDropdown(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Fetch Data from Backend API
//   useEffect(() => {
//     let isMounted = true;

//     async function fetchCreditOrders() {
//       setLoading(true);
//       setError(null);

//       // Reusing getCardOrders with 'credit' explicitly passed to query only credit-based records
//       const response = await cardsService.getCardOrders(
//         currentPage, 
//         itemsPerPage, 
//         appliedStatus,
//         "credit"
//       );

//       if (!isMounted) return;

//       const responseEnvelope = response?.data;
//       const ordersArray = responseEnvelope?.data;
//       const paginationMeta = responseEnvelope?.pagination;

//       if (response && response.status >= 200 && response.status < 300 && Array.isArray(ordersArray)) {
//         let filteredData = [...ordersArray];

//         // Client-side filtration utilities for complex subqueries (search, currency, date limits)
//         if (searchQuery) {
//           const query = searchQuery.toLowerCase();
//           filteredData = filteredData.filter(item => 
//             getCustomerDisplayName(item).toLowerCase().includes(query) ||
//             (item.currency && item.currency.toLowerCase().includes(query))
//           );
//         }

//         if (appliedCurrency) {
//           filteredData = filteredData.filter(item => item.currency === appliedCurrency);
//         }

//         if (appliedStartDate) {
//           filteredData = filteredData.filter(item => new Date(item.createdAt || item.date) >= new Date(appliedStartDate));
//         }
//         if (appliedEndDate) {
//           filteredData = filteredData.filter(item => new Date(item.createdAt || item.date) <= new Date(appliedEndDate));
//         }

//         setOrders(filteredData);

//         if (paginationMeta) {
//           setTotalPages(Number(paginationMeta.pages) || 1);
//           setTotalRecords(Number(paginationMeta.total) || filteredData.length);
//         } else {
//           setTotalRecords(filteredData.length);
//           setTotalPages(1);
//         }
//       } else {
//         const errorMsg = response?.error?.message || response?.error || "Failed to load credit card requests.";
//         setError(errorMsg);
//       }
//       setLoading(false);
//     }

//     const delayDebounceFn = setTimeout(() => {
//       fetchCreditOrders();
//     }, searchQuery ? 400 : 0);

//     return () => {
//       isMounted = false;
//       clearTimeout(delayDebounceFn);
//     };
//   }, [cardsService, currentPage, searchQuery, appliedStatus, appliedCurrency, appliedStartDate, appliedEndDate]);

//   const handleApplyFilters = () => {
//     setAppliedStatus(selectedStatus);
//     setAppliedCurrency(selectedCurrency);
//     setAppliedStartDate(startDate);
//     setAppliedEndDate(endDate);
//     setCurrentPage(0);
//     setShowFilterDropdown(false);
//   };

//   const handleClearFilters = () => {
//     setSelectedStatus("");
//     setSelectedCurrency("");
//     setStartDate("");
//     setEndDate("");
    
//     setAppliedStatus("");
//     setAppliedCurrency("");
//     setAppliedStartDate("");
//     setAppliedEndDate("");
    
//     setCurrentPage(0);
//     setShowFilterDropdown(false);
//   };

//   const itemRangeText = useMemo(() => {
//     if (totalRecords === 0) return "Showing 0 - 0";
//     const start = currentPage * itemsPerPage + 1;
//     const end = Math.min((currentPage + 1) * itemsPerPage, totalRecords);
//     return `Showing ${start} - ${end}`;
//   }, [currentPage, totalRecords]);

//   const paginationRange = useMemo(() => {
//     const range: number[] = [];
//     let start = Math.max(0, currentPage - 2);
//     let end = Math.min(totalPages - 1, start + 4);

//     if (end - start < 4) {
//       start = Math.max(0, end - 4);
//     }

//     for (let i = start; i <= end; i++) {
//       range.push(i);
//     }
//     return range;
//   }, [currentPage, totalPages]);

//   const formatDate = (dateString?: string) => {
//     if (!dateString) return "N/A";
//     try {
//       return new Date(dateString).toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//         hour: "2-digit",
//         minute: "2-digit"
//       });
//     } catch {
//       return dateString;
//     }
//   };

//   const getCustomerDisplayName = (order: any) => {
//     if (!order) return "N/A";
//     if (order.customer) {
//       if (typeof order.customer === "object") {
//         return order.customer.name || `${order.customer.firstName || ""} ${order.customer.lastName || ""}`.trim() || order.customer.emailAddress || "Unknown Customer";
//       }
//       return String(order.customer);
//     }
//     if (order.business) {
//       if (typeof order.business === "object") {
//         return order.business.name || order.business.businessName || "Unknown Business";
//       }
//       return String(order.business);
//     }
//     return "N/A";
//   };

//   const formatAmountDisplay = (order: any) => {
//     const amount = order?.amountRequested || order?.debitAmount || order?.amount || 0;
//     const currencyStr = order?.currency || "NGN";
//     try {
//       return `${currencyStr} ${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
//     } catch {
//       return `${currencyStr} ${amount}`;
//     }
//   };

//   return (
//     <div className="space-y-6">
      
//       {/* Search and Filters Controls Header Row */}
//       <div className="flex justify-between items-center relative">
//         <span className="text-[14px] text-gray-400 font-medium">
//           {itemRangeText} of {totalRecords.toLocaleString()} Cards
//         </span>

//         <div className="flex items-center gap-3">
//           {/* Search Input Bar */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="name, email, type"
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 setCurrentPage(0);
//               }}
//               className="w-[220px] pl-3 pr-8 py-2 border border-gray-100 bg-gray-50/50 rounded-lg text-[13px] placeholder-gray-400 focus:outline-none focus:bg-white text-gray-700 font-medium transition"
//             />
//             <svg className="absolute right-2.5 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.601Z" />
//             </svg>
//           </div>

//           {/* Multi-Filter Dropdown Toggle */}
//           <div className="relative" ref={dropdownRef}>
//             <button 
//               onClick={() => setShowFilterDropdown(!showFilterDropdown)}
//               className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition bg-white"
//             >
//               <span className="w-4 h-4 rounded-full bg-[#101928] text-white text-[10px] flex items-center justify-center font-bold">
//                 {activeFilterCount}
//               </span>
//               Filter(s)
//             </button>

//             {/* Filter Dropdown Popover Panel */}
//             {showFilterDropdown && (
//               <div className="absolute right-0 mt-2 w-[300px] bg-white border border-gray-100 rounded-xl shadow-lg z-50 p-4 space-y-4">
//                 <div className="flex justify-between items-center border-b border-gray-50 pb-2">
//                   <span className="text-[14px] font-bold text-gray-800">Filters</span>
//                   <button 
//                     onClick={handleClearFilters}
//                     className="text-[12px] text-gray-400 hover:text-gray-600 underline"
//                   >
//                     Clear All
//                   </button>
//                 </div>

//                 {/* Date Range Selection */}
//                 <div className="space-y-1.5">
//                   <label className="text-[12px] font-medium text-gray-500">Date Range</label>
//                   <div className="grid grid-cols-2 gap-2">
//                     <input
//                       type="date"
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       className="border border-gray-100 rounded-lg p-1.5 text-[12px] focus:outline-none bg-gray-50/50 text-gray-700 font-medium"
//                     />
//                     <input
//                       type="date"
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       className="border border-gray-100 rounded-lg p-1.5 text-[12px] focus:outline-none bg-gray-50/50 text-gray-700 font-medium"
//                     />
//                   </div>
//                 </div>

//                 {/* Order Status Selection */}
//                 <div className="space-y-1.5">
//                   <label className="text-[12px] font-medium text-gray-500">Order Status</label>
//                   <select
//                     value={selectedStatus}
//                     onChange={(e) => setSelectedStatus(e.target.value)}
//                     className="w-full border border-gray-100 rounded-lg p-2 text-[13px] focus:outline-none bg-gray-50/50 text-gray-700 font-medium"
//                   >
//                     <option value="">All Statuses</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processing">Processing</option>
//                     <option value="Shipped">Shipped</option>
//                     <option value="Delivered">Delivered</option>
//                   </select>
//                 </div>

//                 {/* Currency Selection */}
//                 <div className="space-y-1.5">
//                   <label className="text-[12px] font-medium text-gray-500">Currency</label>
//                   <select
//                     value={selectedCurrency}
//                     onChange={(e) => setSelectedCurrency(e.target.value)}
//                     className="w-full border border-gray-100 rounded-lg p-2 text-[13px] focus:outline-none bg-gray-50/50 text-gray-700 font-medium"
//                   >
//                     <option value="">All Currencies</option>
//                     <option value="NGN">NGN</option>
//                     <option value="USD">USD</option>
//                     <option value="GBP">GBP</option>
//                   </select>
//                 </div>

//                 <button
//                   onClick={handleApplyFilters}
//                   className="w-full bg-[#101928] text-white text-[13px] font-bold py-2 rounded-lg hover:bg-black transition text-center block"
//                 >
//                   Apply
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Main Table Structure Layout */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse min-w-[800px]">
//           <thead>
//             <tr className="bg-gray-50/50 border-b border-gray-100 border-t">
//               <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Customer</th>
//               <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Amount Requested</th>
//               <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Status</th>
//               <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Created At</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {loading ? (
//               [1, 2, 3].map((n) => (
//                 <tr key={n} className="animate-pulse bg-white">
//                   {Array(4).fill(0).map((_, idx) => (
//                     <td key={idx} className="px-6 py-5"><div className="h-4 bg-gray-100 rounded w-full" /></td>
//                   ))}
//                 </tr>
//               ))
//             ) : error ? (
//               <tr>
//                 <td colSpan={4} className="px-6 py-12 text-center text-red-500 font-medium text-[13px]">
//                   Error: {error}
//                 </td>
//               </tr>
//             ) : orders.length === 0 ? (
//               <tr>
//                 <td colSpan={4} className="px-6 py-12 text-center text-gray-400 text-[13px] font-medium bg-white">
//                   <div className="flex flex-col items-center justify-center space-y-2 py-6">
//                     <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
//                     </svg>
//                     <p className="font-semibold text-gray-700">No request found</p>
//                     <p className="text-gray-400 text-[12px]">You have no credit card requests yet.</p>
//                   </div>
//                 </td>
//               </tr>
//             ) : (
//               orders.map((order) => {
//                 const statusStr = order.status || "Pending";
//                 const displayStatus = statusStr.charAt(0).toUpperCase() + statusStr.slice(1).toLowerCase();

//                 let statusStyles = "bg-amber-50 text-amber-600 border border-amber-100";
//                 if (displayStatus === "Shipped" || displayStatus === "Delivered" || displayStatus === "Approved") {
//                   statusStyles = "bg-green-50 text-green-600 border border-green-100";
//                 } else if (displayStatus === "Processing") {
//                   statusStyles = "bg-blue-50 text-blue-600 border border-blue-100";
//                 } else if (displayStatus === "Declined") {
//                   statusStyles = "bg-red-50 text-red-600 border border-red-100";
//                 }

//                 return (
//                   <tr key={order.id || order._id} className="hover:bg-gray-50/40 transition-colors bg-white">
//                     <td className="px-6 py-4 text-[13px] font-semibold text-gray-700 whitespace-nowrap">
//                       {getCustomerDisplayName(order)}
//                     </td>
//                     <td className="px-6 py-4 text-[13px] text-gray-900 font-bold whitespace-nowrap">
//                       {formatAmountDisplay(order)}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${statusStyles}`}>
//                         {displayStatus}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-[13px] text-gray-400 whitespace-nowrap">
//                       {formatDate(order.createdAt || order.date)}
//                     </td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Footer Navigation Row Controls */}
//       {!loading && !error && totalPages > 1 && (
//         <div className="flex justify-center items-center gap-2 pt-4">
//           <button
//             disabled={currentPage === 0}
//             onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
//             className="p-2 border border-gray-100 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition bg-white"
//           >
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <path d="m15 18-6-6 6-6"/>
//             </svg>
//           </button>

//           <div className="flex gap-1">
//             {paginationRange.map((pageIndex) => (
//               <button
//                 key={pageIndex}
//                 onClick={() => setCurrentPage(pageIndex)}
//                 className={`w-8 h-8 rounded-lg text-[13px] font-bold transition-all ${
//                   currentPage === pageIndex
//                     ? "bg-black text-white"
//                     : "text-gray-400 hover:bg-gray-50 hover:text-gray-600 bg-white border border-transparent"
//                 }`}
//               >
//                 {pageIndex + 1}
//               </button>
//             ))}
//           </div>

//           <button
//             disabled={currentPage >= totalPages - 1}
//             onClick={() => setCurrentPage((prev) => prev + 1)}
//             className="p-2 border border-gray-100 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition bg-white"
//           >
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <path d="m9 18 6-6-6-6"/>
//             </svg>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";
import React, { useEffect, useState, useMemo, useRef } from "react";
import CardsService from "@/app/service/cards.service";

export default function CreditCardRequest() {
  const cardsService = useMemo(() => new CardsService(), []);

  // API Data State
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination Control States
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const itemsPerPage = 25;

  // Search Input State
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter Dropdown Anchor States
  const [showFilterDropdown, setShowFilterDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Staged Filter States
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  // Applied Filter States
  const [appliedStatus, setAppliedStatus] = useState<string>("");
  const [appliedCurrency, setAppliedCurrency] = useState<string>("");
  const [appliedStartDate, setAppliedStartDate] = useState<string>("");
  const [appliedEndDate, setAppliedEndDate] = useState<string>("");

  // Track active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (appliedStatus) count++;
    if (appliedCurrency) count++;
    if (appliedStartDate || appliedEndDate) count++;
    return count;
  }, [appliedStatus, appliedCurrency, appliedStartDate, appliedEndDate]);

  // Close filter panel if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowFilterDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch Data from Backend API
  useEffect(() => {
    let isMounted = true;

    async function fetchCreditOrders() {
      setLoading(true);
      setError(null);

      const response = await cardsService.getCardOrders(
        currentPage, 
        itemsPerPage, 
        appliedStatus,
        "credit"
      );

      if (!isMounted) return;

      const responseEnvelope = response?.data;
      const ordersArray = responseEnvelope?.data;
      const paginationMeta = responseEnvelope?.pagination;

      if (response && response.status >= 200 && response.status < 300) {
        let rawData = Array.isArray(ordersArray) ? [...ordersArray] : [];

        // CLIENT-SIDE SAFETY FILTER
        // Since the backend doesn't filter by 'type=credit', we remove items
        // that match the physical debit layout configuration (e.g., contains 'design' or 'brand')
        let filteredData = rawData.filter(item => {
          // If the item has a physical design layout or brand, it belongs to the physical tab
          if (item.design === "SudoBlack" || item.brand === "Verve" || item.shippingMethod) {
            return false; 
          }
          return true;
        });

        // Application of text query lookups
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          filteredData = filteredData.filter(item => 
            getCustomerDisplayName(item).toLowerCase().includes(query) ||
            (item.currency && item.currency.toLowerCase().includes(query))
          );
        }

        if (appliedCurrency) {
          filteredData = filteredData.filter(item => item.currency === appliedCurrency);
        }

        if (appliedStartDate) {
          filteredData = filteredData.filter(item => new Date(item.createdAt || item.date) >= new Date(appliedStartDate));
        }
        if (appliedEndDate) {
          filteredData = filteredData.filter(item => new Date(item.createdAt || item.date) <= new Date(appliedEndDate));
        }

        setOrders(filteredData);

        // Calculate layout thresholds based on client validation length
        if (filteredData.length === 0) {
          setTotalRecords(0);
          setTotalPages(1);
        } else if (paginationMeta) {
          setTotalPages(Number(paginationMeta.pages) || 1);
          setTotalRecords(Number(paginationMeta.total) || filteredData.length);
        } else {
          setTotalRecords(filteredData.length);
          setTotalPages(1);
        }
      } else {
        const errorMsg = response?.error?.message || response?.error || "Failed to load credit card requests.";
        setError(errorMsg);
      }
      setLoading(false);
    }

    const delayDebounceFn = setTimeout(() => {
      fetchCreditOrders();
    }, searchQuery ? 400 : 0);

    return () => {
      isMounted = false;
      clearTimeout(delayDebounceFn);
    };
  }, [cardsService, currentPage, searchQuery, appliedStatus, appliedCurrency, appliedStartDate, appliedEndDate]);

  const handleApplyFilters = () => {
    setAppliedStatus(selectedStatus);
    setAppliedCurrency(selectedCurrency);
    setAppliedStartDate(startDate);
    setAppliedEndDate(endDate);
    setCurrentPage(0);
    setShowFilterDropdown(false);
  };

  const handleClearFilters = () => {
    setSelectedStatus("");
    setSelectedCurrency("");
    setStartDate("");
    setEndDate("");
    
    setAppliedStatus("");
    setAppliedCurrency("");
    setAppliedStartDate("");
    setAppliedEndDate("");
    
    setCurrentPage(0);
    setShowFilterDropdown(false);
  };

  const itemRangeText = useMemo(() => {
    if (totalRecords === 0) return "Showing 0 - 0";
    const start = currentPage * itemsPerPage + 1;
    const end = Math.min((currentPage + 1) * itemsPerPage, totalRecords);
    return `Showing ${start} - ${end}`;
  }, [currentPage, totalRecords]);

  const paginationRange = useMemo(() => {
    const range: number[] = [];
    let start = Math.max(0, currentPage - 2);
    let end = Math.min(totalPages - 1, start + 4);

    if (end - start < 4) {
      start = Math.max(0, end - 4);
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }, [currentPage, totalPages]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return dateString;
    }
  };

  const getCustomerDisplayName = (order: any) => {
    if (!order) return "N/A";
    if (order.customer) {
      if (typeof order.customer === "object") {
        return order.customer.name || `${order.customer.firstName || ""} ${order.customer.lastName || ""}`.trim() || order.customer.emailAddress || "Unknown Customer";
      }
      return String(order.customer);
    }
    if (order.business) {
      if (typeof order.business === "object") {
        return order.business.name || order.business.businessName || "Unknown Business";
      }
      return String(order.business);
    }
    return "N/A";
  };

  const formatAmountDisplay = (order: any) => {
    const amount = order?.amountRequested || order?.debitAmount || order?.amount || 0;
    const currencyStr = order?.currency || "NGN";
    try {
      return `${currencyStr} ${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
    } catch {
      return `${currencyStr} ${amount}`;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Search and Filters Controls Header Row */}
      <div className="flex justify-between items-center relative">
        <span className="text-[14px] text-gray-400 font-medium">
          {itemRangeText} of {totalRecords.toLocaleString()} Credit Cards
        </span>

        <div className="flex items-center gap-3">
          {/* Search Input Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="name, email, type"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(0);
              }}
              className="w-[220px] pl-3 pr-8 py-2 border border-gray-100 bg-gray-50/50 rounded-lg text-[13px] placeholder-gray-400 focus:outline-none focus:bg-white text-gray-700 font-medium transition"
            />
            <svg className="absolute right-2.5 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.601Z" />
            </svg>
          </div>

          {/* Multi-Filter Dropdown Toggle */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition bg-white"
            >
              <span className="w-4 h-4 rounded-full bg-[#101928] text-white text-[10px] flex items-center justify-center font-bold">
                {activeFilterCount}
              </span>
              Filter(s)
            </button>

            {/* Filter Dropdown Popover Panel */}
            {showFilterDropdown && (
              <div className="absolute right-0 mt-2 w-[300px] bg-white border border-gray-100 rounded-xl shadow-lg z-50 p-4 space-y-4">
                <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                  <span className="text-[14px] font-bold text-gray-800">Filters</span>
                  <button 
                    onClick={handleClearFilters}
                    className="text-[12px] text-gray-400 hover:text-gray-600 underline"
                  >
                    Clear All
                  </button>
                </div>

                {/* Date Range Selection */}
                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-gray-500">Date Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="border border-gray-100 rounded-lg p-1.5 text-[12px] focus:outline-none bg-gray-50/50 text-gray-700 font-medium"
                    />
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="border border-gray-100 rounded-lg p-1.5 text-[12px] focus:outline-none bg-gray-50/50 text-gray-700 font-medium"
                    />
                  </div>
                </div>

                {/* Order Status Selection */}
                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-gray-500">Order Status</label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full border border-gray-100 rounded-lg p-2 text-[13px] focus:outline-none bg-gray-50/50 text-gray-700 font-medium"
                  >
                    <option value="">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Declined">Declined</option>
                  </select>
                </div>

                {/* Currency Selection */}
                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-gray-500">Currency</label>
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="w-full border border-gray-100 rounded-lg p-2 text-[13px] focus:outline-none bg-gray-50/50 text-gray-700 font-medium"
                  >
                    <option value="">All Currencies</option>
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                  </select>
                </div>

                <button
                  onClick={handleApplyFilters}
                  className="w-full bg-[#101928] text-white text-[13px] font-bold py-2 rounded-lg hover:bg-black transition text-center block"
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Table Layout */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100 border-t">
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Customer</th>
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Amount Requested</th>
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Created At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              [1, 2, 3].map((n) => (
                <tr key={n} className="animate-pulse bg-white">
                  {Array(4).fill(0).map((_, idx) => (
                    <td key={idx} className="px-6 py-5"><div className="h-4 bg-gray-100 rounded w-full" /></td>
                  ))}
                </tr>
              ))
            ) : error ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-red-500 font-medium text-[13px]">
                  Error: {error}
                </td>
              </tr>
            ) : orders.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-400 text-[13px] font-medium bg-white">
                  <div className="flex flex-col items-center justify-center space-y-2 py-6">
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <p className="font-semibold text-gray-700">No request found</p>
                    <p className="text-gray-400 text-[12px]">You have no credit card requests yet.</p>
                  </div>
                </td>
              </tr>
            ) : (
              orders.map((order) => {
                const statusStr = order.status || "Pending";
                const displayStatus = statusStr.charAt(0).toUpperCase() + statusStr.slice(1).toLowerCase();

                let statusStyles = "bg-amber-50 text-amber-600 border border-amber-100";
                if (displayStatus === "Approved" || displayStatus === "Delivered") {
                  statusStyles = "bg-green-50 text-green-600 border border-green-100";
                } else if (displayStatus === "Processing") {
                  statusStyles = "bg-blue-50 text-blue-600 border border-blue-100";
                } else if (displayStatus === "Declined") {
                  statusStyles = "bg-red-50 text-red-600 border border-red-100";
                }

                return (
                  <tr key={order.id || order._id} className="hover:bg-gray-50/40 transition-colors bg-white">
                    <td className="px-6 py-4 text-[13px] font-semibold text-gray-700 whitespace-nowrap">
                      {getCustomerDisplayName(order)}
                    </td>
                    <td className="px-6 py-4 text-[13px] text-gray-900 font-bold whitespace-nowrap">
                      {formatAmountDisplay(order)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${statusStyles}`}>
                        {displayStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[13px] text-gray-400 whitespace-nowrap">
                      {formatDate(order.createdAt || order.date)}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer Controls */}
      {!loading && !error && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-4">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            className="p-2 border border-gray-100 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition bg-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <div className="flex gap-1">
            {paginationRange.map((pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => setCurrentPage(pageIndex)}
                className={`w-8 h-8 rounded-lg text-[13px] font-bold transition-all ${
                  currentPage === pageIndex
                    ? "bg-black text-white"
                    : "text-gray-400 hover:bg-gray-50 hover:text-gray-600 bg-white border border-transparent"
                }`}
              >
                {pageIndex + 1}
              </button>
            ))}
          </div>

          <button
            disabled={currentPage >= totalPages - 1}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="p-2 border border-gray-100 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition bg-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}