// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// export default function DisputesTab() {
//   const [allDisputes, setAllDisputes] = useState<any[]>([]);
//   const [displayDisputes, setDisplayDisputes] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showFilters, setShowFilters] = useState(false);
//   const [searchNumber, setSearchNumber] = useState("");

//   // Filter States
//   const [tempStatus, setTempStatus] = useState("All");
//   const [activeFiltersCount, setActiveFiltersCount] = useState(0);

//   const filterRef = useRef<HTMLDivElement>(null);

//   // Close filter when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         filterRef.current &&
//         !filterRef.current.contains(event.target as Node)
//       ) {
//         setShowFilters(false);
//       }
//     };
//     if (showFilters) document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showFilters]);

//   useEffect(() => {
//     const fetchDisputes = async () => {
//       setLoading(true);
//       try {
//         // Dummy data for Sudo-Admin Disputes
//         const dummyData = [
//           {
//             id: 1,
//             merchant: "Bolt Nigeria",
//             amount: "₦2,500.00",
//             card: "**** 1792",
//             reason: "Duplicate Charge",
//             status: "Open",
//           },
//           {
//             id: 2,
//             merchant: "Amazon",
//             amount: "₦54,000.00",
//             card: "**** 5635",
//             reason: "Product not received",
//             status: "Resolved",
//           },
//           {
//             id: 3,
//             merchant: "Uber",
//             amount: "₦1,200.00",
//             card: "**** 6228",
//             reason: "Fraudulent Activity",
//             status: "Under Review",
//           },
//         ];
//         setAllDisputes(dummyData);
//         setDisplayDisputes(dummyData);
//       } catch (error) {
//         console.error("Error fetching disputes:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDisputes();
//   }, []);

//   const applyFilters = () => {
//     let result = allDisputes;
//     if (tempStatus !== "All") {
//       result = allDisputes.filter((d) => d.status === tempStatus);
//       setActiveFiltersCount(1);
//     } else {
//       setActiveFiltersCount(0);
//     }
//     setDisplayDisputes(result);
//     setShowFilters(false);
//   };

//   const handleClearAll = () => {
//     setTempStatus("All");
//     setActiveFiltersCount(0);
//     setDisplayDisputes(allDisputes);
//     setShowFilters(false);
//   };

//   return (
//     <div className="space-y-6">
//       {/* Top Bar: Count, Search, and Filter */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div className="text-[13px] text-gray-500">
//           <p>
//             Showing{" "}
//             <span className="font-bold text-[#1D2939]">
//               {displayDisputes.length}
//             </span>{" "}
//             Dispute(s)
//           </p>
//         </div>

//         <div className="flex items-center gap-3 relative" ref={filterRef}>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="number"
//               className="pl-4 pr-10 py-2.5 border border-gray-100 rounded-xl text-[13px] outline-none focus:border-[#034EA2] w-64 bg-gray-50/30"
//               value={searchNumber}
//               onChange={(e) => setSearchNumber(e.target.value)}
//             />
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
//               <Image
//                 src="/images/search.svg"
//                 alt="search"
//                 width={14}
//                 height={14}
//               />
//             </div>
//           </div>

//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="flex items-center gap-2 px-2 py-2.5 text-[13px] font-bold text-[#1D2939] hover:opacity-70 transition-opacity"
//           >
//             <div className="relative">
//               <Image
//                 src="/images/filter.svg"
//                 alt="filter"
//                 width={16}
//                 height={16}
//                 className="opacity-60"
//               />
//               <span className="absolute -top-1.5 -right-1.5 bg-[#032345] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-black">
//                 {activeFiltersCount}
//               </span>
//             </div>
//             Filter(s)
//           </button>

//           {/* Filter Popover */}
//           {showFilters && (
//             <div className="absolute right-0 top-12 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-50 z-50 p-6 space-y-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold text-[#1D2939] text-sm">Filters</h3>
//                 <button
//                   onClick={handleClearAll}
//                   className="text-[12px] text-gray-400 hover:text-black underline"
//                 >
//                   Clear All
//                 </button>
//               </div>

//               <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
//                 <div className="bg-[#F5F3FF] px-2 py-0.5 rounded">
//                   <span className="text-[10px] font-bold text-[#7C3AED]">
//                     {activeFiltersCount} filter(s) applied
//                   </span>
//                 </div>
//               </div>

//               <div className="space-y-2 text-left">
//                 <label className="text-[11px] font-bold text-gray-400 uppercase">
//                   Status
//                 </label>
//                 <select
//                   value={tempStatus}
//                   onChange={(e) => setTempStatus(e.target.value)}
//                   className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-[13px] outline-none"
//                 >
//                   <option value="All">All</option>
//                   <option value="Open">Open</option>
//                   <option value="Resolved">Resolved</option>
//                   <option value="Under Review">Under Review</option>
//                 </select>
//               </div>

//               <button
//                 onClick={applyFilters}
//                 className="w-full py-3 bg-[#032345] text-white rounded-xl font-bold text-[13px] hover:bg-black transition-colors"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Disputes Table Area */}
//       <div className="w-full overflow-x-auto">
//         <table className="w-full text-left table-fixed min-w-[800px]">
//           <thead>
//             <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
//               <th className="pb-4 font-bold w-[25%]">Merchant</th>
//               <th className="pb-4 font-bold w-[15%]">Amount</th>
//               <th className="pb-4 font-bold w-[20%]">Card</th>
//               <th className="pb-4 font-bold w-[25%]">Reason</th>
//               <th className="pb-4 font-bold w-[15%]">Status</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {!loading &&
//               displayDisputes.map((dispute) => (
//                 <tr
//                   key={dispute.id}
//                   className="text-[13px] text-[#1D2939] hover:bg-gray-50/50 transition-colors"
//                 >
//                   <td className="py-4 font-medium truncate pr-4">
//                     {dispute.merchant}
//                   </td>
//                   <td className="py-4 font-bold">{dispute.amount}</td>
//                   <td className="py-4 font-mono text-gray-400">
//                     {dispute.card}
//                   </td>
//                   <td className="py-4 text-gray-500 truncate pr-4">
//                     {dispute.reason}
//                   </td>
//                   <td
//                     className={`py-4 font-bold ${
//                       dispute.status === "Resolved"
//                         ? "text-green-600"
//                         : dispute.status === "Open"
//                           ? "text-blue-600"
//                           : "text-orange-500"
//                     }`}
//                   >
//                     {dispute.status}
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>

//         {displayDisputes.length === 0 && !loading && (
//           <div className="flex flex-col items-center justify-center py-24 space-y-4">
//             <div className="bg-gray-50 p-4 rounded-full opacity-20">
//               <Image
//                 src="/images/file-text.svg"
//                 alt="No Disputes"
//                 width={40}
//                 height={40}
//               />
//             </div>
//             <div className="text-center">
//               <p className="font-bold text-[#1D2939] text-[15px]">
//                 No Disputes found
//               </p>
//               <p className="text-[13px] text-gray-400">
//                 You currently don't have any disputes.
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { useSearchParams, useParams } from "next/navigation";
import CardsService from "@/app/service/cards.service";

interface DisputesTabProps {
  businessId?: string;
}

export default function DisputesTab({ businessId: propsBusinessId }: DisputesTabProps) {
  const cardsService = useMemo(() => new CardsService(), []);
  const params = useParams();
  const searchParams = useSearchParams();

  // Core Data & Loading States
  const [allDisputes, setAllDisputes] = useState<any[]>([]);
  const [displayDisputes, setDisplayDisputes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter & Search UI States
  const [showFilters, setShowFilters] = useState(false);
  const [searchNumber, setSearchNumber] = useState("");
  const [tempStatus, setTempStatus] = useState("All");
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  const filterRef = useRef<HTMLDivElement>(null);

  // Resolve Business ID dynamically from props, path routing, or fallback context search strings
  const businessId = useMemo(() => {
    if (propsBusinessId) return propsBusinessId;
    
    const routeId = params?.id || params?.businessId;
    if (routeId) return routeId as string;

    return searchParams.get("businessId") || "";
  }, [propsBusinessId, params, searchParams]);

  // Close filter panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
    };
    if (showFilters) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFilters]);

  // Fetch live card dispute logs
  useEffect(() => {
    if (!businessId) {
      setError("Missing targeted administrative Business Identifier.");
      setLoading(false);
      return;
    }

    let isMounted = true;
    const fetchDisputes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await cardsService.getAllCardDisputesForABusiness(businessId);
        if (!isMounted) return;

        if (response.error || !response.data) {
          setError(response.error?.message || "Failed to sync operations dispute logs.");
          return;
        }

        const payload = response.data?.data || response.data || [];
        setAllDisputes(payload);
        setDisplayDisputes(payload);
      } catch (err: any) {
        if (isMounted) setError(err.message || "Failed to connect to live network instances.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchDisputes();
    return () => { isMounted = false; };
  }, [businessId, cardsService]);

  // Filter Engine
  useEffect(() => {
    let result = allDisputes;

    if (searchNumber.trim() !== "") {
      const normalizedQuery = searchNumber.toLowerCase();
      result = result.filter((d) => {
        const cardString = d.cardDetails?.last4 || d.card || "";
        const merchantString = d.merchant?.name || d.merchant || "";
        const reasonString = d.reason || "";
        
        return (
          cardString.toLowerCase().includes(normalizedQuery) ||
          merchantString.toLowerCase().includes(normalizedQuery) ||
          reasonString.toLowerCase().includes(normalizedQuery)
        );
      });
    }

    if (tempStatus !== "All") {
      result = result.filter((d) => (d.status || "").toLowerCase() === tempStatus.toLowerCase());
    }

    setDisplayDisputes(result);
  }, [searchNumber, tempStatus, allDisputes]);

  const applyFilters = () => {
    setActiveFiltersCount(tempStatus !== "All" ? 1 : 0);
    setShowFilters(false);
  };

  const handleClearAll = () => {
    setTempStatus("All");
    setSearchNumber("");
    setActiveFiltersCount(0);
    setShowFilters(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Bar Controls Layout */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-[13px] text-gray-500">
          <p>
            Showing{" "}
            <span className="font-bold text-[#1D2939]">
              {displayDisputes.length}
            </span>{" "}
            Dispute(s)
          </p>
        </div>

        <div className="flex items-center gap-3 relative" ref={filterRef}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search card, merchant..."
              className="pl-4 pr-10 py-2.5 border border-gray-100 rounded-xl text-[13px] outline-none focus:border-[#034EA2] w-64 bg-gray-50/30 text-[#1D2939]"
              value={searchNumber}
              onChange={(e) => setSearchNumber(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
              <Image src="/images/search.svg" alt="search" width={14} height={14} />
            </div>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-2 py-2.5 text-[13px] font-bold text-[#1D2939] hover:opacity-70 transition-opacity"
          >
            <div className="relative">
              <Image src="/images/filter.svg" alt="filter" width={16} height={16} className="opacity-60" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#032345] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-black">
                {activeFiltersCount}
              </span>
            </div>
            Filter(s)
          </button>

          {/* Filter Dropdown Popover */}
          {showFilters && (
            <div className="absolute right-0 top-12 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-50 z-50 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[#1D2939] text-sm">Filters</h3>
                <button onClick={handleClearAll} className="text-[12px] text-gray-400 hover:text-black underline">
                  Clear All
                </button>
              </div>

              <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
                <div className="bg-[#F5F3FF] px-2 py-0.5 rounded">
                  <span className="text-[10px] font-bold text-[#7C3AED]">
                    {activeFiltersCount} filter(s) applied
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[11px] font-bold text-gray-400 uppercase">Status</label>
                <select
                  value={tempStatus}
                  onChange={(e) => setTempStatus(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-[13px] outline-none text-[#1D2939]"
                >
                  <option value="All">All</option>
                  <option value="Open">Open</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Under Review">Under Review</option>
                </select>
              </div>

              <button
                onClick={applyFilters}
                className="w-full py-3 bg-[#032345] text-white rounded-xl font-bold text-[13px] hover:bg-black transition-colors"
              >
                Apply
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Network States Render Frame */}
      {loading ? (
        <div className="w-full py-24 flex flex-col items-center justify-center space-y-4">
          <div className="w-8 h-8 border-[2.5px] border-[#034EA2] border-t-transparent rounded-full animate-spin" />
          <p className="text-[13px] text-gray-400 font-medium">Syncing live card disputes...</p>
        </div>
      ) : error ? (
        <div className="w-full p-12 text-center">
          <p className="text-red-500 text-[12px] font-mono">{error}</p>
        </div>
      ) : (
        /* Native, Completely Borderless Data Presentation Layer */
        <div className="w-full overflow-x-auto bg-white">
          <table className="w-full text-left table-fixed min-w-[800px]">
            <thead>
              <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <th className="pb-4 font-bold w-[25%]">Merchant</th>
                <th className="pb-4 font-bold w-[15%]">Amount</th>
                <th className="pb-4 font-bold w-[20%]">Card</th>
                <th className="pb-4 font-bold w-[25%]">Reason</th>
                <th className="pb-4 font-bold w-[15%]">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {displayDisputes.map((dispute, idx) => (
                <tr key={dispute.id || dispute._id || idx} className="text-[13px] text-[#1D2939] hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 font-medium truncate pr-4">
                    {dispute.merchant?.name || dispute.merchant || "N/A"}
                  </td>
                  <td className="py-4 font-bold">
                    {dispute.currency === "USD" ? "$" : "₦"}
                    {Number(dispute.amount || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-4 font-mono text-gray-400">
                    {dispute.cardDetails?.last4 ? `**** ${dispute.cardDetails.last4}` : (dispute.card || "N/A")}
                  </td>
                  <td className="py-4 text-gray-500 truncate pr-4">{dispute.reason || "Unspecified Reason"}</td>
                  <td
                    className={`py-4 font-bold text-[12px] ${
                      (dispute.status || "").toLowerCase() === "resolved"
                        ? "text-green-600"
                        : (dispute.status || "").toLowerCase() === "open"
                          ? "text-blue-600"
                          : "text-orange-500"
                    }`}
                  >
                    {dispute.status || "Unknown"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {displayDisputes.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 space-y-4">
              <div className="p-4 rounded-full bg-gray-50/50">
                <Image src="/images/file-text.svg" alt="No Disputes" width={40} height={40} className="opacity-20" />
              </div>
              <div className="text-center">
                <p className="font-bold text-[#1D2939] text-[15px]">No Disputes found</p>
                <p className="text-[13px] text-gray-400">You currently don't have any disputes.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
