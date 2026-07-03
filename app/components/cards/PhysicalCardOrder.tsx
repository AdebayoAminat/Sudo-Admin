// "use client";
// import React from "react";

// export default function PhysicalCardOrder() {
//   const orders = [
//     {
//       id: "ORD-123",
//       business: "Black Solutions",
//       type: "Verve",
//       quantity: 50,
//       status: "Processing",
//       date: "Apr 12, 2026",
//     },
//     {
//       id: "ORD-124",
//       business: "Africa Limited",
//       type: "Visa",
//       quantity: 10,
//       status: "Shipped",
//       date: "Apr 10, 2026",
//     },
//   ];

//   return (
//     <div className="bg-white border border-gray-50 rounded-xl overflow-hidden">
//       <table className="w-full text-left border-collapse">
//         <thead>
//           <tr className="bg-gray-50/50 border-b border-gray-50">
//             <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase">
//               Order ID
//             </th>
//             <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase">
//               Business
//             </th>
//             <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase">
//               Card Type
//             </th>
//             <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase">
//               Quantity
//             </th>
//             <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase">
//               Status
//             </th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-50">
//           {orders.map((order) => (
//             <tr
//               key={order.id}
//               className="hover:bg-gray-50/50 transition-colors cursor-pointer"
//             >
//               <td className="px-6 py-4 text-[13px] font-medium text-[#1D2939]">
//                 {order.id}
//               </td>
//               <td className="px-6 py-4 text-[13px] text-gray-600">
//                 {order.business}
//               </td>
//               <td className="px-6 py-4 text-[13px] text-gray-600">
//                 {order.type}
//               </td>
//               <td className="px-6 py-4 text-[13px] text-gray-600">
//                 {order.quantity}
//               </td>
//               <td className="px-6 py-4">
//                 <span
//                   className={`text-[10px] font-bold px-2 py-0.5 rounded ${
//                     order.status === "Shipped"
//                       ? "bg-green-50 text-green-600"
//                       : "bg-blue-50 text-blue-600"
//                   }`}
//                 >
//                   {order.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// "use client";
// import React, { useEffect, useState, useMemo, useRef } from "react";
// import CardsService from "@/app/service/cards.service";

// export default function PhysicalCardOrder() {
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

//   // Filter States
//   const [showFilterDropdown, setShowFilterDropdown] = useState<boolean>(false);
//   const [selectedStatus, setSelectedStatus] = useState<string>(""); 
//   const [activeAppliedStatus, setActiveAppliedStatus] = useState<string>(""); 
//   const dropdownRef = useRef<HTMLDivElement>(null);

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

//     async function fetchOrders() {
//       setLoading(true);
//       setError(null);

//       const response = await cardsService.getCardOrders(currentPage, itemsPerPage, activeAppliedStatus);

//       if (!isMounted) return;

//       const responseEnvelope = response?.data;
//       const ordersArray = responseEnvelope?.data;
//       const paginationMeta = responseEnvelope?.pagination;

//       if (response && response.status >= 200 && response.status < 300 && Array.isArray(ordersArray)) {
//         setOrders(ordersArray);

//         if (paginationMeta) {
//           setTotalPages(Number(paginationMeta.pages) || 1);
//           setTotalRecords(Number(paginationMeta.total) || 0);
//         } else {
//           setTotalRecords(ordersArray.length);
//           setTotalPages(1);
//         }
//       } else {
//         const errorMsg = response?.error?.message || response?.error || "Failed to load physical card orders.";
//         setError(errorMsg);
//       }
//       setLoading(false);
//     }

//     fetchOrders();

//     return () => {
//       isMounted = false;
//     };
//   }, [cardsService, currentPage, activeAppliedStatus]);

//   // Handle Apply Filter Button Click
//   const handleApplyFilter = () => {
//     setActiveAppliedStatus(selectedStatus);
//     setCurrentPage(0); 
//     setShowFilterDropdown(false);
//   };

//   // Handle Reset/Clear Filter
//   const handleClearFilters = () => {
//     setSelectedStatus("");
//     setActiveAppliedStatus("");
//     setCurrentPage(0);
//     setShowFilterDropdown(false);
//   };

//   // Dynamic Pagination Text Formatting
//   const itemRangeText = useMemo(() => {
//     if (totalRecords === 0) return "Showing 0 - 0";
//     const start = currentPage * itemsPerPage + 1;
//     const end = Math.min((currentPage + 1) * itemsPerPage, totalRecords);
//     return `Showing ${start} - ${end}`;
//   }, [currentPage, totalRecords]);

//   // Numeric navigation window array mapper
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

//   // Date Formatting Helper
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

//   // Safe Customer Text Resolver
//   const getCustomerDisplayName = (order: any) => {
//     if (!order) return "N/A";
//     if (order.customer) {
//       if (typeof order.customer === "object") {
//         return order.customer.name || order.customer.businessName || order.customer.emailAddress || "Unknown Customer";
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

//   return (
//     <div className="space-y-6">
      
//       {/* Top Controls Row */}
//       <div className="flex justify-between items-center relative">
//         <span className="text-[14px] text-gray-400 font-medium">
//           {itemRangeText} of {totalRecords.toLocaleString()} Cards
//         </span>

//         {/* Filter */}
//         <div className="relative" ref={dropdownRef}>
//           <button 
//             onClick={() => setShowFilterDropdown(!showFilterDropdown)}
//             className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition bg-white"
//           >
//             <span className="w-4 h-4 rounded-full bg-[#101928] text-white text-[10px] flex items-center justify-center">
//               {activeAppliedStatus ? "1" : "0"}
//             </span>
//             Filter(s)
//           </button>

//           {/* Filter Popover Dropdown Panel */}
//           {showFilterDropdown && (
//             <div className="absolute right-0 mt-2 w-[280px] bg-white border border-gray-100 rounded-xl shadow-lg z-50 p-4 space-y-4">
//               <div className="flex justify-between items-center border-b border-gray-50 pb-2">
//                 <span className="text-[14px] font-bold text-gray-800">Filters</span>
//                 <button 
//                   onClick={handleClearFilters}
//                   className="text-[12px] text-gray-400 hover:text-gray-600 underline"
//                 >
//                   Clear All
//                 </button>
//               </div>

//               {/* Status Select Group */}
//               <div className="space-y-1.5">
//                 <label className="text-[12px] font-medium text-gray-500">Order Status</label>
//                 <select
//                   value={selectedStatus}
//                   onChange={(e) => setSelectedStatus(e.target.value)}
//                   className="w-full border border-gray-100 rounded-lg p-2 text-[13px] focus:outline-none bg-gray-50/50 text-gray-700 font-medium"
//                 >
//                   <option value="">All Statuses</option>
//                   <option value="Pending">Pending</option>
//                   <option value="Processing">Processing</option>
//                   <option value="Shipped">Shipped</option>
//                   <option value="Delivered">Delivered</option>
//                 </select>
//               </div>

//               {/* Action Apply */}
//               <button
//                 onClick={handleApplyFilter}
//                 className="w-full bg-[#101928] text-white text-[13px] font-bold py-2 rounded-lg hover:bg-black transition text-center block"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Main Table Structure (CRITICAL: Border and shadow wrappers removed here) */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse min-w-[1000px]">
//           <thead>
//             <tr className="bg-gray-50/50 border-b border-gray-100 border-t">
//               <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Customer</th>
//               <th className="px-6 py-4 text-[11px] font-bold text-black  uppercase tracking-wider">Name on Card</th>
//               <th className="px-6 py-4 text-[11px] font-bold text-black  uppercase tracking-wider">Brand</th>
//               <th className="px-6 py-4 text-[11px] font-bold text-black  uppercase tracking-wider">Card Type</th>
//               <th className="px-6 py-4 text-[11px] font-bold text-black  uppercase tracking-wider">Currency</th>
//               <th className="px-6 py-4 text-[11px] font-bold text-black  uppercase tracking-wider">Design</th>
//               <th className="px-6 py-4 text-[11px] font-bold text-black  uppercase tracking-wider">Status</th>
//               <th className="px-6 py-4 text-[11px] font-bold text-black  uppercase tracking-wider">Address</th>
//               <th className="px-6 py-4 text-[11px] font-bold text-black  uppercase tracking-wider">Created At</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {loading ? (
//               [1, 2, 3, 4].map((n) => (
//                 <tr key={n} className="animate-pulse bg-white">
//                   {Array(9).fill(0).map((_, idx) => (
//                     <td key={idx} className="px-6 py-5"><div className="h-4 bg-gray-100 rounded w-full" /></td>
//                   ))}
//                 </tr>
//               ))
//             ) : error ? (
//               <tr>
//                 <td colSpan={9} className="px-6 py-12 text-center text-red-500 font-medium text-[13px]">
//                   Error: {error}
//                 </td>
//               </tr>
//             ) : orders.length === 0 ? (
//               <tr>
//                 <td colSpan={9} className="px-6 py-12 text-center text-gray-400 text-[13px]">
//                   No physical card order rows located matching current dashboard selection parameters.
//                 </td>
//               </tr>
//             ) : (
//               orders.map((order) => {
//                 const statusStr = order.status || "Pending";
//                 const displayStatus = statusStr.charAt(0).toUpperCase() + statusStr.slice(1).toLowerCase();

//                 let statusStyles = "bg-amber-50 text-amber-600 border border-amber-100";
//                 if (displayStatus === "Shipped" || displayStatus === "Delivered") {
//                   statusStyles = "bg-green-50 text-green-600 border border-green-100";
//                 } else if (displayStatus === "Processing") {
//                   statusStyles = "bg-blue-50 text-blue-600 border border-blue-100";
//                 }

//                 return (
//                   <tr key={order.id || order._id} className="hover:bg-gray-50/40 transition-colors">
//                     <td className="px-6 py-4 text-[13px] font-semibold text-gray-700 whitespace-nowrap">
//                       {getCustomerDisplayName(order)}
//                     </td>
//                     <td className="px-6 py-4 text-[13px] text-gray-600 whitespace-nowrap">
//                       {order.nameOnCard || order.cardName || "N/A"}
//                     </td>
//                     <td className="px-6 py-4 text-[13px] text-gray-600 whitespace-nowrap">
//                       {order.brand || "Verve"}
//                     </td>
//                     <td className="px-6 py-4 text-[13px] text-gray-600 whitespace-nowrap">
//                       {order.cardType || order.type || "Physical"}
//                     </td>
//                     <td className="px-6 py-4 text-[13px] text-gray-600 font-medium">
//                       {order.currency || "NGN"}
//                     </td>
//                     <td className="px-6 py-4 text-[13px] text-gray-600 whitespace-nowrap">
//                       {order.design || "SudoBlack"}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${statusStyles}`}>
//                         {displayStatus}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-[13px] text-gray-400 max-w-[220px] truncate" title={order.address}>
//                       {order.address || "N/A"}
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

//       {/* Pagination Footer Elements */}
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

export default function PhysicalCardOrder() {
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

  // Filter States
  const [showFilterDropdown, setShowFilterDropdown] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string>(""); 
  const [activeAppliedStatus, setActiveAppliedStatus] = useState<string>(""); 
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close filter panel if clicking anywhere outside
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

    async function fetchOrders() {
      setLoading(true);
      setError(null);

      const response = await cardsService.getCardOrders(currentPage, itemsPerPage, activeAppliedStatus);

      if (!isMounted) return;

      const responseEnvelope = response?.data;
      const ordersArray = responseEnvelope?.data;
      const paginationMeta = responseEnvelope?.pagination;

      if (response && response.status >= 200 && response.status < 300 && Array.isArray(ordersArray)) {
        setOrders(ordersArray);

        if (paginationMeta) {
          setTotalPages(Number(paginationMeta.pages) || 1);
          setTotalRecords(Number(paginationMeta.total) || 0);
        } else {
          setTotalRecords(ordersArray.length);
          setTotalPages(1);
        }
      } else {
        const errorMsg = response?.error?.message || response?.error || "Failed to load physical card orders.";
        setError(errorMsg);
      }
      setLoading(false);
    }

    fetchOrders();

    return () => {
      isMounted = false;
    };
  }, [cardsService, currentPage, activeAppliedStatus]);

  // Handle Apply Filter Button Click
  const handleApplyFilter = () => {
    setActiveAppliedStatus(selectedStatus);
    setCurrentPage(0); 
    setShowFilterDropdown(false);
  };

  // Handle Reset/Clear Filter
  const handleClearFilters = () => {
    setSelectedStatus("");
    setActiveAppliedStatus("");
    setCurrentPage(0);
    setShowFilterDropdown(false);
  };

  // Dynamic Pagination Text Formatting
  const itemRangeText = useMemo(() => {
    if (totalRecords === 0) return "Showing 0 - 0";
    const start = currentPage * itemsPerPage + 1;
    const end = Math.min((currentPage + 1) * itemsPerPage, totalRecords);
    return `Showing ${start} - ${end}`;
  }, [currentPage, totalRecords]);

  // Numeric navigation window array mapper
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

  // Date Formatting Helper
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

  // Safe Customer Text Resolver
  const getCustomerDisplayName = (order: any) => {
    if (!order) return "N/A";
    if (order.customer) {
      if (typeof order.customer === "object") {
        return order.customer.name || order.customer.businessName || order.customer.emailAddress || "Unknown Customer";
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

  // Safe Nested Shipping Address Formatter
  const getShippingAddressDisplay = (order: any) => {
    if (!order || !order.shippingAddress) return "N/A";
    
    const { line1, city, state } = order.shippingAddress;
    const addressParts = [line1, city, state].filter(Boolean);
    
    return addressParts.length > 0 ? addressParts.join(", ") : "N/A";
  };

  return (
    <div className="space-y-6">
      
      {/* Top Controls Row */}
      <div className="flex justify-between items-center relative">
        <span className="text-[14px] text-gray-400 font-medium">
          {itemRangeText} of {totalRecords.toLocaleString()} Cards
        </span>

        {/* Filter */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition bg-white"
          >
            <span className="w-4 h-4 rounded-full bg-[#101928] text-white text-[10px] flex items-center justify-center">
              {activeAppliedStatus ? "1" : "0"}
            </span>
            Filter(s)
          </button>

          {/* Filter Popover Dropdown Panel */}
          {showFilterDropdown && (
            <div className="absolute right-0 mt-2 w-[280px] bg-white border border-gray-100 rounded-xl shadow-lg z-50 p-4 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                <span className="text-[14px] font-bold text-gray-800">Filters</span>
                <button 
                  onClick={handleClearFilters}
                  className="text-[12px] text-gray-400 hover:text-gray-600 underline"
                >
                  Clear All
                </button>
              </div>

              {/* Status Select Group */}
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-gray-500">Order Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full border border-gray-100 rounded-lg p-2 text-[13px] focus:outline-none bg-gray-50/50 text-gray-700 font-medium"
                >
                  <option value="">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>

              {/* Action Apply */}
              <button
                onClick={handleApplyFilter}
                className="w-full bg-[#101928] text-white text-[13px] font-bold py-2 rounded-lg hover:bg-black transition text-center block"
              >
                Apply
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Table Structure (Outer border/shadow wrapper completely removed) */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100 border-t">
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Customer</th>
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Name on Card</th>
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Brand</th>
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Card Type</th>
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Currency</th>
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Design</th>
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Address</th>
              <th className="px-6 py-4 text-[11px] font-bold text-black uppercase tracking-wider">Created At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              [1, 2, 3, 4].map((n) => (
                <tr key={n} className="animate-pulse bg-white">
                  {Array(9).fill(0).map((_, idx) => (
                    <td key={idx} className="px-6 py-5"><div className="h-4 bg-gray-100 rounded w-full" /></td>
                  ))}
                </tr>
              ))
            ) : error ? (
              <tr>
                <td colSpan={9} className="px-6 py-12 text-center text-red-500 font-medium text-[13px]">
                  Error: {error}
                </td>
              </tr>
            ) : orders.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-6 py-12 text-center text-gray-400 text-[13px]">
                  No physical card order rows located matching current dashboard selection parameters.
                </td>
              </tr>
            ) : (
              orders.map((order) => {
                const statusStr = order.status || "Pending";
                const displayStatus = statusStr.charAt(0).toUpperCase() + statusStr.slice(1).toLowerCase();

                let statusStyles = "bg-amber-50 text-amber-600 border border-amber-100";
                if (displayStatus === "Shipped" || displayStatus === "Delivered") {
                  statusStyles = "bg-green-50 text-green-600 border border-green-100";
                } else if (displayStatus === "Processing") {
                  statusStyles = "bg-blue-50 text-blue-600 border border-blue-100";
                }

                return (
                  <tr key={order.id || order._id} className="hover:bg-gray-50/40 transition-colors">
                    <td className="px-6 py-4 text-[13px] font-semibold text-gray-700 whitespace-nowrap">
                      {getCustomerDisplayName(order)}
                    </td>
                    <td className="px-6 py-4 text-[13px] text-gray-700 font-medium">
  {Array.isArray(order.nameOnCards) && order.nameOnCards.length > 0
    ? order.nameOnCards.join(", ")
    : "N/A"}
</td>
                    <td className="px-6 py-4 text-[13px] text-gray-600 whitespace-nowrap">
                      {order.brand}
                    </td>
                    <td className="px-6 py-4 text-[13px] text-gray-600 whitespace-nowrap">
                      {order.cardType || order.brand }
                    </td>
                    <td className="px-6 py-4 text-[13px] text-gray-600 font-medium">
                      {order.currency }
                    </td>
                    <td className="px-6 py-4 text-[13px] text-gray-600 whitespace-nowrap">
                      {order.design}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${statusStyles}`}>
                        {displayStatus}
                      </span>
                    </td>
                    <td 
                      className="px-6 py-4 text-[13px] text-gray-400 max-w-[220px] truncate" 
                      title={getShippingAddressDisplay(order)}
                    >
                      {getShippingAddressDisplay(order)}
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

      {/* Pagination Footer Elements */}
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