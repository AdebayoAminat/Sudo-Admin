// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// export default function AuthorizationsTab() {
//   const [allAuthorizations, setAllAuthorizations] = useState<any[]>([]);
//   const [displayAuthorizations, setDisplayAuthorizations] = useState<any[]>([]);
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
//     const fetchAuthorizations = async () => {
//       setLoading(true);
//       try {
//         // Dummy data for Sudo-Admin Authorizations
//         const dummyData = [
//           {
//             id: 1,
//             merchant: "Uber Nigeria",
//             channel: "Mobile",
//             amount: "₦3,500.00",
//             card: "**** 1792",
//             status: "Approved",
//           },
//           {
//             id: 2,
//             merchant: "Netflix",
//             channel: "Web",
//             amount: "₦4,400.00",
//             card: "**** 5635",
//             status: "Pending",
//           },
//           {
//             id: 3,
//             merchant: "Jumia",
//             channel: "Web",
//             amount: "₦15,000.00",
//             card: "**** 6228",
//             status: "Approved",
//           },
//           {
//             id: 4,
//             merchant: "Spotify",
//             channel: "Mobile",
//             amount: "₦900.00",
//             card: "**** 5635",
//             status: "Declined",
//           },
//         ];
//         setAllAuthorizations(dummyData);
//         setDisplayAuthorizations(dummyData);
//       } catch (error) {
//         console.error("Error fetching authorizations:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAuthorizations();
//   }, []);

//   const applyFilters = () => {
//     let result = allAuthorizations;
//     if (tempStatus !== "All") {
//       result = allAuthorizations.filter((auth) => auth.status === tempStatus);
//       setActiveFiltersCount(1);
//     } else {
//       setActiveFiltersCount(0);
//     }
//     setDisplayAuthorizations(result);
//     setShowFilters(false);
//   };

//   const handleClearAll = () => {
//     setTempStatus("All");
//     setActiveFiltersCount(0);
//     setDisplayAuthorizations(allAuthorizations);
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
//               {displayAuthorizations.length}
//             </span>{" "}
//             Authorization(s)
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
//                   <option value="Approved">Approved</option>
//                   <option value="Pending">Pending</option>
//                   <option value="Declined">Declined</option>
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

//       {/* Authorizations Table Area */}
//       <div className="w-full overflow-x-auto">
//         <table className="w-full text-left table-fixed min-w-[800px]">
//           <thead>
//             <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
//               <th className="pb-4 font-bold w-[30%]">Merchant</th>
//               <th className="pb-4 font-bold w-[15%]">Channel</th>
//               <th className="pb-4 font-bold w-[20%]">Amount</th>
//               <th className="pb-4 font-bold w-[20%]">Card</th>
//               <th className="pb-4 font-bold w-[15%]">Status</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {!loading &&
//               displayAuthorizations.map((auth) => (
//                 <tr
//                   key={auth.id}
//                   className="text-[13px] text-[#1D2939] hover:bg-gray-50/50 transition-colors"
//                 >
//                   <td className="py-4 font-medium truncate pr-4">
//                     {auth.merchant}
//                   </td>
//                   <td className="py-4 text-gray-500">{auth.channel}</td>
//                   <td className="py-4 font-bold">{auth.amount}</td>
//                   <td className="py-4 font-mono text-gray-400">{auth.card}</td>
//                   <td
//                     className={`py-4 font-bold ${
//                       auth.status === "Approved"
//                         ? "text-green-600"
//                         : auth.status === "Declined"
//                           ? "text-red-600"
//                           : "text-orange-500"
//                     }`}
//                   >
//                     {auth.status}
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>

//         {displayAuthorizations.length === 0 && !loading && (
//           <div className="flex flex-col items-center justify-center py-24 space-y-4">
//             <div className="bg-gray-50 p-4 rounded-full opacity-20">
//               <Image
//                 src="/images/file-text.svg"
//                 alt="No Auth"
//                 width={40}
//                 height={40}
//               />
//             </div>
//             <div className="text-center">
//               <p className="font-bold text-[#1D2939] text-[15px]">
//                 No Authorizations found
//               </p>
//               <p className="text-[13px] text-gray-400">
//                 You currently don't have any authorizations.
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

interface AuthorizationsTabProps {
  businessId?: string;
}

export default function AuthorizationsTab({ businessId: propsBusinessId }: AuthorizationsTabProps) {
  const cardsService = useMemo(() => new CardsService(), []);
  const params = useParams();
  const searchParams = useSearchParams();

  // Core Data & Loading States
  const [allAuthorizations, setAllAuthorizations] = useState<any[]>([]);
  const [displayAuthorizations, setDisplayAuthorizations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter & Search UI States
  const [showFilters, setShowFilters] = useState(false);
  const [searchNumber, setSearchNumber] = useState("");
  const [tempStatus, setTempStatus] = useState("All");
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  const filterRef = useRef<HTMLDivElement>(null);

  // Resolve Business ID dynamically from props, path params, or query context fallbacks
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

  // Fetch authorization logs from backend service layer
  useEffect(() => {
    if (!businessId) {
      setError("Missing targeted administrative Business Identifier.");
      setLoading(false);
      return;
    }

    let isMounted = true;
    const fetchAuthorizations = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await cardsService.getAuthorizationsForABusiness(businessId);
        if (!isMounted) return;

        if (response.error || !response.data) {
          setError(response.error?.message || "Failed to sync operations authorization ledger.");
          return;
        }

        const payload = response.data?.data || response.data || [];
        setAllAuthorizations(payload);
        setDisplayAuthorizations(payload);
      } catch (err: any) {
        if (isMounted) setError(err.message || "Failed to connect to live network instances.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAuthorizations();
    return () => { isMounted = false; };
  }, [businessId, cardsService]);

  // Combined Search & Filter Logic Engine
  useEffect(() => {
    let result = allAuthorizations;

    if (searchNumber.trim() !== "") {
      const normalizedQuery = searchNumber.toLowerCase();
      result = result.filter((auth) => {
        const cardString = auth.cardDetails?.last4 || auth.card || "";
        const merchantString = auth.merchant?.name || auth.merchant || "";
        const referenceString = auth.id || auth._id || "";
        
        return (
          cardString.toLowerCase().includes(normalizedQuery) ||
          merchantString.toLowerCase().includes(normalizedQuery) ||
          String(referenceString).toLowerCase().includes(normalizedQuery)
        );
      });
    }

    if (tempStatus !== "All") {
      result = result.filter((auth) => (auth.status || "").toLowerCase() === tempStatus.toLowerCase());
    }

    setDisplayAuthorizations(result);
  }, [searchNumber, tempStatus, allAuthorizations]);

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
      {/* Top Controls Layout */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-[13px] text-gray-500">
          <p>
            Showing{" "}
            <span className="font-bold text-[#1D2939]">
              {displayAuthorizations.length}
            </span>{" "}
            Authorization(s)
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
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Declined">Declined</option>
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
          <p className="text-[13px] text-gray-400 font-medium">Syncing authorization flows...</p>
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
                <th className="pb-4 font-bold w-[30%]">Merchant</th>
                <th className="pb-4 font-bold w-[15%]">Channel</th>
                <th className="pb-4 font-bold w-[20%]">Amount</th>
                <th className="pb-4 font-bold w-[20%]">Card</th>
                <th className="pb-4 font-bold w-[15%]">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {displayAuthorizations.map((auth, idx) => (
                <tr key={auth.id || auth._id || idx} className="text-[13px] text-[#1D2939] hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 font-medium truncate pr-4">
                    {auth.merchant?.name || auth.merchant || "N/A"}
                  </td>
                  <td className="py-4 text-gray-500 uppercase text-[12px] font-semibold">{auth.channel || "Web"}</td>
                  <td className="py-4 font-bold">
                    {auth.currency === "USD" ? "$" : "₦"}
                    {Number(auth.amount || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-4 font-mono text-gray-400">
                    {auth.cardDetails?.last4 ? `**** ${auth.cardDetails.last4}` : (auth.card || "N/A")}
                  </td>
                  <td
                    className={`py-4 font-bold text-[12px] ${
                      (auth.status || "").toLowerCase() === "approved"
                        ? "text-green-600"
                        : (auth.status || "").toLowerCase() === "declined"
                          ? "text-red-600"
                          : "text-orange-500"
                    }`}
                  >
                    {auth.status || "Unknown"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {displayAuthorizations.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 space-y-4">
              <div className="p-4 rounded-full bg-gray-50/50">
                <Image src="/images/file-text.svg" alt="No Auth" width={40} height={40} className="opacity-20" />
              </div>
              <div className="text-center">
                <p className="font-bold text-[#1D2939] text-[15px]">No Authorizations found</p>
                <p className="text-[13px] text-gray-400">You currently don't have any authorizations.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
