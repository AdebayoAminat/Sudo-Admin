// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// export default function TransactionsTab() {
//   const [transactions, setTransactions] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showFilters, setShowFilters] = useState(false);
//   const [searchNumber, setSearchNumber] = useState("");
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
//     const fetchTransactions = async () => {
//       setLoading(true);
//       try {
//         // You will fetch your actual transaction data here
//         // For now, we initialize as empty to match your screenshot
//         setTransactions([]);
//       } catch (error) {
//         console.error("Error fetching transactions:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTransactions();
//   }, []);

//   return (
//     <div className="space-y-6">
//       {/* Search and Filter Row */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div className="text-[13px] text-gray-500">
//           <p>
//             Showing{" "}
//             <span className="font-bold text-[#1D2939]">
//               {transactions.length}
//             </span>{" "}
//             Transaction
//           </p>
//         </div>

//         <div className="flex items-center gap-3 relative" ref={filterRef}>
//           {/* Search by Number */}
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

//           {/* Filter Button (No Border) */}
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
//                 <button className="text-[12px] text-gray-400 hover:text-black underline">
//                   Clear All
//                 </button>
//               </div>

//               <div className="space-y-2 text-left">
//                 <label className="text-[11px] font-bold text-gray-400 uppercase">
//                   Status
//                 </label>
//                 <select className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-[13px] outline-none">
//                   <option>All</option>
//                   <option>Successful</option>
//                   <option>Pending</option>
//                   <option>Failed</option>
//                 </select>
//               </div>

//               <button className="w-full py-3 bg-[#032345] text-white rounded-xl font-bold text-[13px] hover:bg-black transition-colors">
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Transactions Table/Empty State Area */}
//       <div className="w-full overflow-x-auto">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
//               <th className="pb-4 font-bold">Merchant</th>
//               <th className="pb-4 font-bold">Channel</th>
//               <th className="pb-4 font-bold">Amount</th>
//               <th className="pb-4 font-bold">Customer</th>
//               <th className="pb-4 font-bold text-right">Card</th>
//             </tr>
//           </thead>
//         </table>

//         {/* Empty State matching your screenshot */}
//         {transactions.length === 0 && !loading && (
//           <div className="flex flex-col items-center justify-center py-24 space-y-4">
//             <div className="bg-gray-50 p-4 rounded-full">
//               <Image
//                 src="/images/file-text.svg"
//                 alt="No transaction"
//                 width={40}
//                 height={40}
//                 className="opacity-20"
//               />
//             </div>
//             <div className="text-center">
//               <p className="font-bold text-[#1D2939] text-[15px]">
//                 No Transaction found
//               </p>
//               <p className="text-[13px] text-gray-400">
//                 You currently don't have any transactions.
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// export default function TransactionsTab() {
//   // Original transactions from "backend"
//   const [allTransactions, setAllTransactions] = useState<any[]>([]);
//   // Transactions currently visible (after search/filter)
//   const [displayTransactions, setDisplayTransactions] = useState<any[]>([]);
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
//     const fetchTransactions = async () => {
//       setLoading(true);
//       try {
//         // Dummy data for Sudo-Admin
//         const dummyData = [
//           {
//             id: 1,
//             merchant: "Amazon Web Services",
//             channel: "Web",
//             amount: "₦45,000.00",
//             customer: "Amina Tech",
//             card: "**** 1792",
//             status: "Successful",
//           },
//           {
//             id: 2,
//             merchant: "Apple Store",
//             channel: "Mobile",
//             amount: "₦120,000.00",
//             customer: "Umar Yusuf",
//             card: "**** 5635",
//             status: "Pending",
//           },
//           {
//             id: 3,
//             merchant: "Google Cloud",
//             channel: "Web",
//             amount: "₦12,500.00",
//             customer: "Dataapp Digital",
//             card: "**** 6228",
//             status: "Successful",
//           },
//           {
//             id: 4,
//             merchant: "Netflix",
//             channel: "Subscription",
//             amount: "₦4,400.00",
//             customer: "John Ogunmosu",
//             card: "**** 5635",
//             status: "Failed",
//           },
//         ];
//         setAllTransactions(dummyData);
//         setDisplayTransactions(dummyData);
//       } catch (error) {
//         console.error("Error fetching transactions:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTransactions();
//   }, []);

//   // Filter Logic
//   const applyFilters = () => {
//     let result = allTransactions;

//     if (tempStatus !== "All") {
//       result = allTransactions.filter((t) => t.status === tempStatus);
//       setActiveFiltersCount(1);
//     } else {
//       setActiveFiltersCount(0);
//     }

//     setDisplayTransactions(result);
//     setShowFilters(false);
//   };

//   // Clear All Logic
//   const handleClearAll = () => {
//     setTempStatus("All");
//     setActiveFiltersCount(0);
//     setDisplayTransactions(allTransactions);
//     setShowFilters(false);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div className="text-[13px] text-gray-500">
//           <p>
//             Showing{" "}
//             <span className="font-bold text-[#1D2939]">
//               {displayTransactions.length}
//             </span>{" "}
//             Transaction(s)
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

//           {showFilters && (
//             <div className="absolute right-0 top-12 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-50 z-50 p-6 space-y-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold text-[#1D2939] text-sm">Filters</h3>
//                 {/* Clear All Functionality */}
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
//                   <option value="Successful">Successful</option>
//                   <option value="Pending">Pending</option>
//                   <option value="Failed">Failed</option>
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

//       {/* Transactions Table Area */}
//       <div className="w-full overflow-x-auto">
//         {/* Added table-fixed and w-full to ensure controlled spacing */}
//         <table className="w-full text-left table-fixed min-w-[800px]">
//           <thead>
//             <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
//               {/* Defined column widths so they have equal/fair breathing room */}
//               <th className="pb-4 font-bold w-[25%]">Merchant</th>
//               <th className="pb-4 font-bold w-[15%]">Channel</th>
//               <th className="pb-4 font-bold w-[20%]">Amount</th>
//               <th className="pb-4 font-bold w-[25%]">Customer</th>
//               {/* Removed text-right so it stays closer to the other columns */}
//               <th className="pb-4 font-bold w-[15%]">Card</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {!loading &&
//               displayTransactions.map((t) => (
//                 <tr
//                   key={t.id}
//                   className="text-[13px] text-[#1D2939] hover:bg-gray-50/50 transition-colors"
//                 >
//                   <td className="py-4 font-medium truncate pr-4">
//                     {t.merchant}
//                   </td>
//                   <td className="py-4 text-gray-500">{t.channel}</td>
//                   <td className="py-4 font-bold">{t.amount}</td>
//                   <td className="py-4 text-gray-500 truncate pr-4">
//                     {t.customer}
//                   </td>
//                   {/* Changed from text-right to normal alignment to avoid the "pushed" look */}
//                   <td className="py-4 font-mono text-gray-400">{t.card}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>

//         {/* Empty State remains the same */}
//         {displayTransactions.length === 0 && !loading && (
//           <div className="flex flex-col items-center justify-center py-24 space-y-4">
//             <div className="bg-gray-50 p-4 rounded-full">
//               <Image
//                 src="/images/file-text.svg"
//                 alt="No transaction"
//                 width={40}
//                 height={40}
//                 className="opacity-20"
//               />
//             </div>
//             <div className="text-center">
//               <p className="font-bold text-[#1D2939] text-[15px]">
//                 No Transaction found
//               </p>
//               <p className="text-[13px] text-gray-400">
//                 You currently don't have any transactions.
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

interface TransactionsTabProps {
  businessId?: string;
}

export default function TransactionsTab({ businessId: propsBusinessId }: TransactionsTabProps) {
  const cardsService = useMemo(() => new CardsService(), []);
  const params = useParams();
  const searchParams = useSearchParams();

  // Core Data & Loading States
  const [allTransactions, setAllTransactions] = useState<any[]>([]);
  const [displayTransactions, setDisplayTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter & Search UI States
  const [showFilters, setShowFilters] = useState(false);
  const [searchNumber, setSearchNumber] = useState("");
  const [tempStatus, setTempStatus] = useState("All");
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  const filterRef = useRef<HTMLDivElement>(null);

  // Resolve Business ID dynamically from props, route paths, or query context fallbacks
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

  // Fetch data layer records on mount or business pivot
  useEffect(() => {
    if (!businessId) {
      setError("Missing targeted administrative Business Identifier.");
      setLoading(false);
      return;
    }

    let isMounted = true;
    const fetchTransactions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await cardsService.getCardTransactionsForABusiness(businessId);
        if (!isMounted) return;

        if (response.error || !response.data) {
          setError(response.error?.message || "Failed to sync operations log ledger.");
          return;
        }

        const payload = response.data?.data || response.data || [];
        setAllTransactions(payload);
        setDisplayTransactions(payload);
      } catch (err: any) {
        if (isMounted) setError(err.message || "Failed to connect to live network instances.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchTransactions();
    return () => { isMounted = false; };
  }, [businessId, cardsService]);

  // Unified Filtering & Searching Engine
  useEffect(() => {
    let result = allTransactions;

    if (searchNumber.trim() !== "") {
      const normalizedQuery = searchNumber.toLowerCase();
      result = result.filter((t) => {
        const cardString = t.cardDetails?.last4 || t.card || "";
        const merchantString = t.merchant?.name || t.merchant || "";
        const referenceString = t.rrn || t.reference || "";
        
        return (
          cardString.toLowerCase().includes(normalizedQuery) ||
          merchantString.toLowerCase().includes(normalizedQuery) ||
          referenceString.toLowerCase().includes(normalizedQuery)
        );
      });
    }

    if (tempStatus !== "All") {
      result = result.filter((t) => (t.status || "").toLowerCase() === tempStatus.toLowerCase());
    }

    setDisplayTransactions(result);
  }, [searchNumber, tempStatus, allTransactions]);

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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-[13px] text-gray-500">
          <p>
            Showing{" "}
            <span className="font-bold text-[#1D2939]">
              {displayTransactions.length}
            </span>{" "}
            Transaction(s)
          </p>
        </div>

        <div className="flex items-center gap-3 relative" ref={filterRef}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search number, merchant..."
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
                  <option value="Successful">Successful</option>
                  <option value="Pending">Pending</option>
                  <option value="Failed">Failed</option>
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

      {loading ? (
        <div className="w-full py-24 flex flex-col items-center justify-center space-y-4">
          <div className="w-8 h-8 border-[2.5px] border-[#034EA2] border-t-transparent rounded-full animate-spin" />
          <p className="text-[13px] text-gray-400 font-medium">Syncing live card transactions...</p>
        </div>
      ) : error ? (
        <div className="w-full p-12 text-center bg-white border border-gray-100 rounded-2xl">
          <p className="text-red-500 text-[12px] font-mono">{error}</p>
        </div>
      ) : (
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left table-fixed min-w-[800px]">
            <thead>
              <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
                <th className="pb-4 font-bold w-[25%]">Merchant</th>
                <th className="pb-4 font-bold w-[15%]">Channel</th>
                <th className="pb-4 font-bold w-[20%]">Amount</th>
                <th className="pb-4 font-bold w-[25%]">Customer</th>
                <th className="pb-4 font-bold w-[15%]">Card</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {displayTransactions.map((t, idx) => (
                <tr key={t.id || t._id || idx} className="text-[13px] text-[#1D2939] hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 font-medium truncate pr-4">
                    {t.merchant?.name || t.merchant || "N/A"}
                  </td>
                  <td className="py-4 text-gray-500 uppercase text-[12px] font-semibold">{t.channel || "Web"}</td>
                  <td className="py-4 font-bold">
                    {t.currency === "USD" ? "$" : "₦"}
                    {Number(t.amount || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-4 text-gray-500 truncate pr-4">
                    {t.customerName || t.customer || "Corporate Holder"}
                  </td>
                  <td className="py-4 font-mono text-gray-400">
                    {t.cardDetails?.last4 ? `**** ${t.cardDetails.last4}` : (t.card || "N/A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {displayTransactions.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 space-y-4">
              <div className="bg-gray-50 p-4 rounded-full">
                <Image src="/images/file-text.svg" alt="No transaction" width={40} height={40} className="opacity-20" />
              </div>
              <div className="text-center">
                <p className="font-bold text-[#1D2939] text-[15px]">No Transaction found</p>
                <p className="text-[13px] text-gray-400">You currently don't have any transactions.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}