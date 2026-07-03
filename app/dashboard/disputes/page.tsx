

// "use client";

// import React, { Suspense } from "react";
// import Image from "next/image";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import DisputeDetails from "../../components/disputes/DisputeDetails";

// /* --- DISPUTES LIST MOCK DATA --- */
// const disputesData = [
//   {
//     id: "disp_782341",
//     merchant: "SUDO SIMULATOR",
//     date: "11/24/25, 11:23 AM",
//     amount: "-₦4,510.00",
//     cardLast4: "2917",
//     cardType: "Physical",
//     reason: "Duplicate",
//     status: "Submitted",
//   },
//   {
//     id: "disp_782342",
//     merchant: "SUDO SIMULATOR",
//     date: "11/24/25, 5:13 AM",
//     amount: "-₦4,510.00",
//     cardLast4: "2917",
//     cardType: "Physical",
//     reason: "Not_received",
//     status: "Submitted",
//   },
//   {
//     id: "disp_782343",
//     merchant: "SUDO SIMULATOR",
//     date: "9/19/23, 1:49 PM",
//     amount: "-₦17.00",
//     cardLast4: "3531",
//     cardType: "Virtual",
//     reason: "Product_not_as_described",
//     status: "Submitted",
//   },
// ];

// export default function DisputesPage() {
//   return (
//     <Suspense fallback={<div className="p-8 text-[12px] text-gray-400">Loading...</div>}>
//       <DisputesTableContent />
//     </Suspense>
//   );
// }

// function DisputesTableContent() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const view = searchParams.get("view");
//   const selectedId = searchParams.get("id");

//   const handleRowClick = (id: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("view", "detail");
//     params.set("id", id);
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   // Switch to Detail View if a dispute is selected
//   if (view === "detail" && selectedId) {
//     return <DisputeDetails id={selectedId} />;
//   }

//   return (
//     <div className="p-6 space-y-7 animate-in fade-in duration-500">
//       {/* HEADER UTILITY ROW */}
//       <div className="flex justify-between items-center">
        
//         {/* DISPUTE COUNT (Left Aligned) */}
//         <p className="text-[12px] text-gray-400 font-medium">
//           Showing <span className="text-[#1D2939]">0 - 20</span> of <span className="text-[#1D2939]">28</span> Disputes
//         </p>

//         {/* UTILITY TOOLS (Right Aligned) */}
//         <div className="flex items-center gap-3">
//           {/* CALENDAR */}
//           <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] font-medium text-[#1D2939]">
//             <span className="text-gray-400">Wed Apr 01 2026 - Thu Apr 30 2026</span>
//             <Image src="/images/calendar.svg" alt="Calendar" width={16} height={16} className="opacity-40" />
//           </div>

//           {/* SEARCH */}
//           <div className="relative">
//             <input 
//               type="text" 
//               placeholder="number" 
//               className="pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] w-64 outline-none" 
//             />
//             <Image 
//               src="/images/search.svg" 
//               alt="Search" 
//               width={20} 
//               height={20} 
//               className="absolute right-3.5 top-2.5 opacity-40" 
//             />
//           </div>
//         </div>
//       </div>

//       {/* TABLE SECTION */}
//       <div className="w-full border border-gray-50 rounded-2xl overflow-hidden bg-white shadow-sm">
//         <table className="w-full text-left">
//           <thead className="bg-white border-b border-gray-50">
//             <tr>
//               {["MERCHANT", "AMOUNT", "CARD", "REASON", "STATUS"].map((h) => (
//                 <th key={h} className="px-6 py-5 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {disputesData.map((dispute) => (
//               <tr 
//                 key={dispute.id} 
//                 onClick={() => handleRowClick(dispute.id)} 
//                 className="group hover:bg-gray-50/50 cursor-pointer transition-colors"
//               >
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[12px] shrink-0">
//                       SS
//                     </div>
//                     <div>
//                       <p className="text-[12px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">
//                         {dispute.merchant}
//                       </p>
//                       <p className="text-[10px] text-gray-400 mt-0.5">{dispute.date}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">{dispute.amount}</td>
//                 <td className="px-6 py-4">
//                   <p className="text-[12px] text-[#1D2939] font-medium">506321********{dispute.cardLast4}</p>
//                   <p className="text-[10px] text-gray-400">{dispute.cardType}</p>
//                 </td>
//                 <td className="px-6 py-4 text-[12px] text-[#667085] font-medium">
//                   {dispute.reason}
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="px-3 py-1 bg-[#F0F9FF] text-[#026AA2] text-[10px] font-bold rounded-full border border-[#B9E6FE]">
//                     {dispute.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { Suspense, useEffect, useState, useMemo } from "react";
// import Image from "next/image";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import DisputeDetails from "../../components/disputes/DisputeDetails";
// import CardsService from "@/app/service/cards.service";

// export default function DisputesPage() {
//   return (
//     <Suspense fallback={<div className="p-8 text-[12px] text-gray-400">Loading...</div>}>
//       <DisputesTableContent />
//     </Suspense>
//   );
// }

// function DisputesTableContent() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const cardsService = useMemo(() => new CardsService(), []);

//   const view = searchParams.get("view");
//   const selectedId = searchParams.get("id");

//   // Read URL params (1-indexed for UI)
//   const currentPage = Number(searchParams.get("page")) || 1;
//   const searchQuery = searchParams.get("search") || "";
//   const limit = 20; 

//   const [disputes, setDisputes] = useState<any[]>([]);
//   const [totalCount, setTotalCount] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
  
//   const [searchInput, setSearchInput] = useState<string>(searchQuery);

//   useEffect(() => {
//     let isMounted = true;
//     const fetchDisputes = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         // Backend is 0-indexed: Page 1 -> page=0, Page 2 -> page=1
//         const targetPage = currentPage - 1;

//         const response = await cardsService.getAllCardDisputes({
//           limit,
//           page: targetPage,
//           ...(searchQuery.trim() && { search: searchQuery.trim() })
//         } as any);

//         if (!isMounted) return;

//         // Extract backend payload fields safely matching Axios resolution wrappers
//         const responseBody = response?.data; 
//         const responseData = responseBody?.data || responseBody?.disputes || responseBody;

//         // Extract absolute grand totals directly from the backend metadata keys
//         const backendTotal = responseBody?.meta?.total ?? responseBody?.total ?? responseBody?.meta?.totalRows;

//         if (Array.isArray(responseData)) {
//           setDisputes(responseData);
//         } else {
//           setDisputes([]);
//         }

//         // STRICT BACKEND TOTAL ASSIGNMENT: No local array length fallbacks allowed here anymore
//         if (typeof backendTotal === "number") {
//           setTotalCount(backendTotal);
//         } else if (responseBody?.data && typeof responseBody.data.total === "number") {
//           setTotalCount(responseBody.data.total);
//         } else {
//           // If your backend completely omits the meta count fields, calculate safe presentation indexes
//           setTotalCount(Array.isArray(responseData) ? responseData.length : 0);
//         }

//       } catch (err: any) {
//         if (isMounted) {
//           setError(err?.message || "Failed to fetch card disputes.");
//         }
//       } finally {
//         if (isMounted) setLoading(false);
//       }
//     };

//     fetchDisputes();
//     return () => {
//       isMounted = false;
//     };
//   }, [currentPage, searchQuery, cardsService]);

//   useEffect(() => {
//     setSearchInput(searchQuery);
//   }, [searchQuery]);

//   // Compute runtime dynamic calendar window ranges from current page entries
//   const dynamicDateRange = useMemo(() => {
//     if (!disputes || disputes.length === 0) return "No records found";
    
//     const timestamps = disputes
//       .map(d => d.createdAt ? new Date(d.createdAt).getTime() : null)
//       .filter((t): t is number => t !== null);
      
//     if (timestamps.length === 0) return "All time records";

//     const minDate = new Date(Math.min(...timestamps));
//     const maxDate = new Date(Math.max(...timestamps));

//     const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
//     return `${minDate.toLocaleDateString(undefined, options)} - ${maxDate.toLocaleDateString(undefined, options)}`;
//   }, [disputes]);

//   const handleRowClick = (id: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("view", "detail");
//     params.set("id", id);
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   const handlePageChange = (newPage: number) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", String(newPage));
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const params = new URLSearchParams(searchParams.toString());
//     if (searchInput.trim()) {
//       params.set("search", searchInput.trim());
//     } else {
//       params.delete("search");
//     }
//     params.set("page", "1"); 
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   if (view === "detail" && selectedId) {
//     return <DisputeDetails id={selectedId} />;
//   }

//   // Calculate presentation dynamic ranges cleanly based on standard 1-indexing ranges
//   const startRange = disputes.length === 0 ? 0 : (currentPage - 1) * limit + 1;
//   const endRange = (currentPage - 1) * limit + disputes.length;
//   const totalPages = Math.ceil(totalCount / limit) || 1;

//   return (
//     <div className="p-6 space-y-7 animate-in fade-in duration-500">
//       {/* HEADER UTILITY BAR */}
//       <div className="flex justify-between items-center">
        
//         {/* COMPLETELY DYNAMIC COUNTERS DIRECT FROM BACKEND DATA */}
//         <p className="text-[12px] text-gray-400 font-medium">
//           Showing <span className="text-[#1D2939]">{startRange} - {endRange}</span> of <span className="text-[#1D2939]">{totalCount}</span> Disputes
//         </p>

//         {/* INPUT INTERFACE TOOLSETS */}
//         <div className="flex items-center gap-3">
//           {/* RUNTIME DATE RANGE FIELD */}
//           <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] font-medium text-[#1D2939]">
//             <span className="text-gray-400">{dynamicDateRange}</span>
//             <Image src="/images/calendar.svg" alt="Calendar" width={16} height={16} className="opacity-40" />
//           </div>

//           {/* ACTIVE SEARCH CONTROLLER FORM */}
//           <form onSubmit={handleSearchSubmit} className="relative">
//             <input 
//               type="text" 
//               placeholder="Search by ID or Number..." 
//               value={searchInput}
//               onChange={(e) => setSearchInput(e.target.value)}
//               className="pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] w-64 outline-none transition-all focus:border-gray-300 focus:bg-white" 
//             />
//             <button type="submit" className="absolute right-3.5 top-2.5 opacity-40 hover:opacity-80 transition-opacity">
//               <Image 
//                 src="/images/search.svg" 
//                 alt="Search" 
//                 width={20} 
//                 height={20} 
//               />
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* RENDER TABLE VIEWPORT */}
//       <div className="w-full overflow-hidden bg-white">
//         {loading ? (
//           <div className="p-8 text-[12px] text-gray-400">Loading disputes data...</div>
//         ) : error ? (
//           <div className="p-8 text-[12px] text-red-500">{error}</div>
//         ) : disputes.length === 0 ? (
//           <div className="p-8 text-[12px] text-gray-400">No disputes found matching this query index.</div>
//         ) : (
//           <>
//             <table className="w-full text-left">
//               <thead className="bg-white border-b border-gray-50">
//                 <tr>
//                   {["MERCHANT", "AMOUNT", "CARD", "REASON", "STATUS"].map((h) => (
//                     <th key={h} className="px-6 py-5 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50">
//                 {disputes.map((dispute) => {
//                   const disputeId = dispute._id || dispute.id;
//                   const currencySign = dispute.currency === "USD" ? "$" : "₦";
//                   const isNegative = Number(dispute.amount || 0) < 0;
//                   const formattedAmount = `${isNegative ? "-" : ""}${currencySign}${Number(Math.abs(dispute.amount || 0)).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

//                   const displayDate = dispute.createdAt 
//                     ? new Date(dispute.createdAt).toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" })
//                     : dispute.date || "N/A";

//                   const merchantName = dispute.merchant?.name || dispute.merchant || "UNKNOWN MERCHANT";
//                   const merchantInitials = merchantName.slice(0, 2).toUpperCase();

//                   return (
//                     <tr 
//                       key={disputeId} 
//                       onClick={() => handleRowClick(disputeId)} 
//                       className="group hover:bg-gray-50/50 cursor-pointer transition-colors"
//                     >
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-4">
//                           <div className="w-10 h-10 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[12px] shrink-0">
//                             {merchantInitials}
//                           </div>
//                           <div>
//                             <p className="text-[12px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">
//                               {merchantName}
//                             </p>
//                             <p className="text-[10px] text-gray-400 mt-0.5">{displayDate}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">
//                         {formattedAmount}
//                       </td>
//                       <td className="px-6 py-4">
//                         <p className="text-[12px] text-[#1D2939] font-medium">
//                           {dispute.card?.maskedPan || `506321********${dispute.cardLast4 || "0000"}`}
//                         </p>
//                         <p className="text-[10px] text-gray-400 capitalize">
//                           {dispute.card?.type || dispute.cardType || "Physical"}
//                         </p>
//                       </td>
//                       <td className="px-6 py-4 text-[12px] text-[#667085] font-medium">
//                         {dispute.reason || "Unspecified"}
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className="px-3 py-1 bg-[#F0F9FF] text-[#026AA2] text-[10px] font-bold rounded-full border border-[#B9E6FE] capitalize">
//                           {dispute.status || "Submitted"}
//                         </span>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>

//             {/* LOWER PAGINATION SHELF */}
//             {totalPages > 1 && (
//               <div className="flex justify-end items-center gap-4 pt-8 pr-2">
//                 <button 
//                   disabled={currentPage === 1}
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   className="flex items-center justify-center transition-opacity disabled:opacity-25 disabled:cursor-not-allowed"
//                 >
//                   <Image src="/images/arrow-left.svg" alt="Previous Page" width={20} height={20} />
//                 </button>

//                 <div className="flex items-center gap-1.5">
//                   {Array.from({ length: totalPages }, (_, idx) => {
//                     const pageNum = idx + 1;
//                     const isSelected = pageNum === currentPage;
//                     return (
//                       <button
//                         key={pageNum}
//                         onClick={() => handlePageChange(pageNum)}
//                         className={`w-8 h-8 rounded-full text-[12px] font-bold transition-all ${
//                           isSelected ? "bg-[#1D2939] text-white" : "text-gray-500 hover:bg-gray-100"
//                         }`}
//                       >
//                         {pageNum}
//                       </button>
//                     );
//                   })}
//                 </div>

//                 <button 
//                   disabled={currentPage >= totalPages}
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   className="flex items-center justify-center transition-opacity disabled:opacity-25 disabled:cursor-not-allowed"
//                 >
//                   <Image src="/images/arrow-right.svg" alt="Next Page" width={20} height={20} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { Suspense, useEffect, useState, useMemo } from "react";
// import Image from "next/image";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import DisputeDetails from "../../components/disputes/DisputeDetails";
// import CardsService from "@/app/service/cards.service";

// export default function DisputesPage() {
//   return (
//     <Suspense fallback={<div className="p-8 text-[12px] text-gray-400">Loading...</div>}>
//       <DisputesTableContent />
//     </Suspense>
//   );
// }

// function DisputesTableContent() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const cardsService = useMemo(() => new CardsService(), []);

//   const view = searchParams.get("view");
//   const selectedId = searchParams.get("id");

//   // Read params directly from Next.js URL state
//   const currentPage = Number(searchParams.get("page")) || 1;
//   const searchQuery = searchParams.get("search") || "";
//   const limit = 20; 

//   const [disputes, setDisputes] = useState<any[]>([]);
//   const [totalCount, setTotalCount] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
  
//   // Controlled input value for the search bar text field
//   const [searchInput, setSearchInput] = useState<string>(searchQuery);

//   useEffect(() => {
//     let isMounted = true;
//     const fetchDisputes = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         // Zero-indexed backend alignment: Page 1 -> page=0
//         const targetPage = currentPage - 1;

//         const response = await cardsService.getAllCardDisputes({
//           limit,
//           page: targetPage,
//           // Forward search text to your backend endpoint when present
//           ...(searchQuery.trim() && { search: searchQuery.trim() })
//         } as any);

//         if (!isMounted) return;

//         const responseBody = response?.data; 
//         const responseData = responseBody?.data;

//         if (Array.isArray(responseData)) {
//           setDisputes(responseData);
//         } else {
//           setDisputes([]);
//         }

//         // Map perfectly to the 'pagination.total' key shown in your dev-tools preview
//         const backendTotal = responseBody?.pagination?.total;

//         if (typeof backendTotal === "number") {
//           setTotalCount(backendTotal);
//         } else if (backendTotal !== undefined) {
//           setTotalCount(Number(backendTotal));
//         } else {
//           setTotalCount(Array.isArray(responseData) ? responseData.length : 0);
//         }

//       } catch (err: any) {
//         if (isMounted) {
//           setError(err?.message || "Failed to fetch card disputes.");
//         }
//       } finally {
//         if (isMounted) setLoading(false);
//       }
//     };

//     fetchDisputes();
//     return () => {
//       isMounted = false;
//     };
//   }, [currentPage, searchQuery, cardsService]);

//   // Sync internal input text box state if URL parameters are removed or altered externally
//   useEffect(() => {
//     setSearchInput(searchQuery);
//   }, [searchQuery]);

//   // Fully dynamic runtime calendar string derived directly from current record sets
//   const dynamicDateRange = useMemo(() => {
//     if (!disputes || disputes.length === 0) return "No records found";
    
//     // Extract available date strings from the dataset
//     const timestamps = disputes
//       .map(d => d.createdAt ? new Date(d.createdAt).getTime() : null)
//       .filter((t): t is number => t !== null);
      
//     if (timestamps.length === 0) return "All time records";

//     const minDate = new Date(Math.min(...timestamps));
//     const maxDate = new Date(Math.max(...timestamps));

//     const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
//     return `${minDate.toLocaleDateString(undefined, options)} - ${maxDate.toLocaleDateString(undefined, options)}`;
//   }, [disputes]);

//   const handleRowClick = (id: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("view", "detail");
//     params.set("id", id);
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   const handlePageChange = (newPage: number) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", String(newPage));
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   // Submit search context directly to Next.js URL context layers
//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const params = new URLSearchParams(searchParams.toString());
    
//     if (searchInput.trim()) {
//       params.set("search", searchInput.trim());
//     } else {
//       params.delete("search"); // Clear empty entries out of tracking scopes
//     }
//     params.set("page", "1"); // Reset window matrices to page 1 on every new lookup request
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   if (view === "detail" && selectedId) {
//     return <DisputeDetails id={selectedId} />;
//   }

//   // Generate responsive boundaries for 1-indexed tables (e.g. 1 - 20)
//   const startRange = disputes.length === 0 ? 0 : (currentPage - 1) * limit + 1;
//   const endRange = (currentPage - 1) * limit + disputes.length;
//   const totalPages = Math.ceil(totalCount / limit) || 1;

//   return (
//     <div className="p-6 space-y-7 animate-in fade-in duration-500">
//       {/* CONTROL ACTIONS & DATA SUMMARY LAYER */}
//       <div className="flex justify-between items-center">
        
//         {/* CORRECT PAGINATION LABELS */}
//         <p className="text-[12px] text-gray-400 font-medium">
//           Showing <span className="text-[#1D2939]">{startRange} - {endRange}</span> of <span className="text-[#1D2939]">{totalCount}</span> Disputes
//         </p>

//         {/* CONTROLS UTILITY TRAY */}
//         <div className="flex items-center gap-3">
//           {/* COMPUTE DYNAMIC RUNTIME CALENDAR CALCULATION READING */}
//           <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] font-medium text-[#1D2939]">
//             <span className="text-gray-400">{dynamicDateRange}</span>
//             <Image src="/images/calendar.svg" alt="Calendar" width={16} height={16} className="opacity-40" />
//           </div>

//           {/* DYNAMIC SEARCH CONSOLE */}
//           <form onSubmit={handleSearchSubmit} className="relative">
//             <input 
//               type="text" 
//               placeholder="Search by ID or Number..." 
//               value={searchInput}
//               onChange={(e) => setSearchInput(e.target.value)}
//               className="pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] w-64 outline-none transition-all focus:border-gray-300 focus:bg-white" 
//             />
//             <button type="submit" className="absolute right-3.5 top-2.5 opacity-40 hover:opacity-80 transition-opacity">
//               <Image 
//                 src="/images/search.svg" 
//                 alt="Search" 
//                 width={20} 
//                 height={20} 
//               />
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* DISPUTES INTERACTIVE GRID SYSTEM */}
//       <div className="w-full overflow-hidden bg-white">
//         {loading ? (
//           <div className="p-8 text-[12px] text-gray-400">Loading disputes data...</div>
//         ) : error ? (
//           <div className="p-8 text-[12px] text-red-500">{error}</div>
//         ) : disputes.length === 0 ? (
//           <div className="p-8 text-[12px] text-gray-400">No disputes found matching this query index.</div>
//         ) : (
//           <>
//             <table className="w-full text-left">
//               <thead className="bg-white border-b border-gray-50">
//                 <tr>
//                   {["MERCHANT", "AMOUNT", "CARD", "REASON", "STATUS"].map((h) => (
//                     <th key={h} className="px-6 py-5 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50">
//                 {disputes.map((dispute) => {
//                   const disputeId = dispute._id || dispute.id;
//                   const currencySign = dispute.currency === "USD" ? "$" : "₦";
//                   const isNegative = Number(dispute.amount || 0) < 0;
//                   const formattedAmount = `${isNegative ? "-" : ""}${currencySign}${Number(Math.abs(dispute.amount || 0)).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

//                   const displayDate = dispute.createdAt 
//                     ? new Date(dispute.createdAt).toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" })
//                     : dispute.date || "N/A";

//                   const merchantName = dispute.merchant?.name || dispute.merchant || "UNKNOWN MERCHANT";
//                   const merchantInitials = merchantName.slice(0, 2).toUpperCase();

//                   return (
//                     <tr 
//                       key={disputeId} 
//                       onClick={() => handleRowClick(disputeId)} 
//                       className="group hover:bg-gray-50/50 cursor-pointer transition-colors"
//                     >
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-4">
//                           <div className="w-10 h-10 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[12px] shrink-0">
//                             {merchantInitials}
//                           </div>
//                           <div>
//                             <p className="text-[12px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">
//                               {merchantName}
//                             </p>
//                             <p className="text-[10px] text-gray-400 mt-0.5">{displayDate}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">
//                         {formattedAmount}
//                       </td>
//                       <td className="px-6 py-4">
//                         <p className="text-[12px] text-[#1D2939] font-medium">
//                           {dispute.card?.maskedPan || `506321********${dispute.cardLast4 || "0000"}`}
//                         </p>
//                         <p className="text-[10px] text-gray-400 capitalize">
//                           {dispute.card?.type || dispute.cardType || "Physical"}
//                         </p>
//                       </td>
//                       <td className="px-6 py-4 text-[12px] text-[#667085] font-medium">
//                         {dispute.reason || "Unspecified"}
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className="px-3 py-1 bg-[#F0F9FF] text-[#026AA2] text-[10px] font-bold rounded-full border border-[#B9E6FE] capitalize">
//                           {dispute.status || "Submitted"}
//                         </span>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>

//             {/* LOWER INTERACTIVE PAGINATION CONTROLLER BAR */}
//             {totalPages > 1 && (
//               <div className="flex justify-end items-center gap-4 pt-8 pr-2">
//                 <button 
//                   disabled={currentPage === 1}
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   className="flex items-center justify-center transition-opacity disabled:opacity-25 disabled:cursor-not-allowed"
//                 >
//                   <Image src="/images/arrow-left.svg" alt="Previous Page" width={20} height={20} />
//                 </button>

//                 <div className="flex items-center gap-1.5">
//                   {Array.from({ length: totalPages }, (_, idx) => {
//                     const pageNum = idx + 1;
//                     const isSelected = pageNum === currentPage;
//                     return (
//                       <button
//                         key={pageNum}
//                         onClick={() => handlePageChange(pageNum)}
//                         className={`w-8 h-8 rounded-full text-[12px] font-bold transition-all ${
//                           isSelected ? "bg-[#1D2939] text-white" : "text-gray-500 hover:bg-gray-100"
//                         }`}
//                       >
//                         {pageNum}
//                       </button>
//                     );
//                   })}
//                 </div>

//                 <button 
//                   disabled={currentPage >= totalPages}
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   className="flex items-center justify-center transition-opacity disabled:opacity-25 disabled:cursor-not-allowed"
//                 >
//                   <Image src="/images/arrow-right.svg" alt="Next Page" width={20} height={20} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import React, { Suspense, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import DisputeDetails from "../../components/disputes/DisputeDetails";
import CardsService from "@/app/service/cards.service";

export default function DisputesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-[12px] text-gray-400">Loading...</div>}>
      <DisputesTableContent />
    </Suspense>
  );
}

function DisputesTableContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const cardsService = useMemo(() => new CardsService(), []);

  const view = searchParams.get("view");
  const selectedId = searchParams.get("id");

  // Read params directly from Next.js URL state
  const currentPage = Number(searchParams.get("page")) || 1;
  const searchQuery = searchParams.get("search") || "";
  const limit = 20; 

  const [disputes, setDisputes] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Controlled input value for the search bar text field
  const [searchInput, setSearchInput] = useState<string>(searchQuery);

  // States for the transaction-style calendar
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    let isMounted = true;
    const fetchDisputes = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Zero-indexed backend alignment: Page 1 -> page=0
        const targetPage = currentPage - 1;

        const response = await cardsService.getAllCardDisputes({
          limit,
          page: targetPage,
          // Forward search text to your backend endpoint when present
          ...(searchQuery.trim() && { search: searchQuery.trim() })
        } as any);

        if (!isMounted) return;

        const responseBody = response?.data; 
        const responseData = responseBody?.data;

        if (Array.isArray(responseData)) {
          setDisputes(responseData);
        } else {
          setDisputes([]);
        }

        // Map perfectly to the 'pagination.total' key shown in your dev-tools preview
        const backendTotal = responseBody?.pagination?.total;

        if (typeof backendTotal === "number") {
          setTotalCount(backendTotal);
        } else if (backendTotal !== undefined) {
          setTotalCount(Number(backendTotal));
        } else {
          setTotalCount(Array.isArray(responseData) ? responseData.length : 0);
        }

      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || "Failed to fetch card disputes.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchDisputes();
    return () => {
      isMounted = false;
    };
  }, [currentPage, searchQuery, cardsService]);

  // Sync internal input text box state if URL parameters are removed or altered externally
  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  const handleRowClick = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", "detail");
    params.set("id", id);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    router.push(`${pathname}?${params.toString()}`);
  };

  // Submit search context directly to Next.js URL context layers
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    
    if (searchInput.trim()) {
      params.set("search", searchInput.trim());
    } else {
      params.delete("search"); // Clear empty entries out of tracking scopes
    }
    params.set("page", "1"); // Reset window matrices to page 1 on every new lookup request
    router.push(`${pathname}?${params.toString()}`);
  };

  if (view === "detail" && selectedId) {
    return <DisputeDetails id={selectedId} />;
  }

  // Generate responsive boundaries for 1-indexed tables (e.g. 1 - 20)
  const startRange = disputes.length === 0 ? 0 : (currentPage - 1) * limit + 1;
  const endRange = (currentPage - 1) * limit + disputes.length;
  const totalPages = Math.ceil(totalCount / limit) || 1;

  return (
    <div className="p-6 space-y-7 animate-in fade-in duration-500">
      {/* CONTROL ACTIONS & DATA SUMMARY LAYER */}
      <div className="flex justify-between items-center">
        
        {/* CORRECT PAGINATION LABELS */}
        <p className="text-[12px] text-gray-400 font-medium">
          Showing <span className="text-[#1D2939]">{startRange} - {endRange}</span> of <span className="text-[#1D2939]">{totalCount}</span> Disputes
        </p>

        {/* CONTROLS UTILITY TRAY */}
        <div className="flex items-center gap-3">
          
          {/* REPLACED: CALENDAR COMPONENT FROM TRANSACTIONS PAGE */}
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 rounded-xl">
            <input
              type="date"
              value={startDate}
              onChange={(e) => { setStartDate(e.target.value); }}
              className="bg-transparent text-[12px] font-medium text-[#1D2939] outline-none cursor-pointer"
            />
            <span className="text-gray-300 text-xs font-bold">to</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => { setEndDate(e.target.value); }}
              className="bg-transparent text-[12px] font-medium text-[#1D2939] outline-none cursor-pointer"
            />
          </div>

          {/* DYNAMIC SEARCH CONSOLE */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input 
              type="text" 
              placeholder="Search by ID or Number..." 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] w-64 outline-none transition-all focus:border-gray-300 focus:bg-white" 
            />
            <button type="submit" className="absolute right-3.5 top-2.5 opacity-40 hover:opacity-80 transition-opacity">
              <Image 
                src="/images/search.svg" 
                alt="Search" 
                width={20} 
                height={20} 
              />
            </button>
          </form>
        </div>
      </div>

      {/* DISPUTES INTERACTIVE GRID SYSTEM */}
      <div className="w-full overflow-hidden bg-white">
        {loading ? (
          <div className="p-8 text-[12px] text-gray-400">Loading disputes data...</div>
        ) : error ? (
          <div className="p-8 text-[12px] text-red-500">{error}</div>
        ) : disputes.length === 0 ? (
          <div className="p-8 text-[12px] text-gray-400">No disputes found matching this query index.</div>
        ) : (
          <>
            <table className="w-full text-left">
              <thead className="bg-white border-b border-gray-50">
                <tr>
                  {["MERCHANT", "AMOUNT", "CARD", "REASON", "STATUS"].map((h) => (
                    <th key={h} className="px-6 py-5 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {disputes.map((dispute) => {
                  const disputeId = dispute._id || dispute.id;
                  const currencySign = dispute.currency === "USD" ? "$" : "₦";
                  const isNegative = Number(dispute.amount || 0) < 0;
                  const formattedAmount = `${isNegative ? "-" : ""}${currencySign}${Number(Math.abs(dispute.amount || 0)).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

                  const displayDate = dispute.createdAt 
                    ? new Date(dispute.createdAt).toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" })
                    : dispute.date || "N/A";

                

                  const merchantName = dispute.transaction.merchant?.name ;
                const merchantInitials = merchantName.slice(0, 2).toUpperCase();

                  return (
                    <tr 
                      key={disputeId} 
                      onClick={() => handleRowClick(disputeId)} 
                      className="group hover:bg-gray-50/50 cursor-pointer transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[12px] shrink-0">
                            {merchantInitials}
                          </div>
                          <div>
                            <p className="text-[12px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">
                              {merchantName}
                            </p>
                            <p className="text-[10px] text-gray-400 mt-0.5">{displayDate}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">
                        {formattedAmount}
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-[12px] text-[#1D2939] font-medium">
                          {dispute.transaction?.card?.maskedPan }
                        </p>
                        <p className="text-[10px] text-gray-400 capitalize">
                          {dispute.transaction?.card?.type }
                        </p>
                      </td>
                      <td className="px-6 py-4 text-[12px] text-[#667085] font-medium">
                        {dispute.reason }
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-[#F0F9FF] text-[#026AA2] text-[10px] font-bold rounded-full border border-[#B9E6FE] capitalize">
                          {dispute.status }
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* LOWER INTERACTIVE PAGINATION CONTROLLER BAR */}
            {totalPages > 1 && (
              <div className="flex justify-end items-center gap-4 pt-8 pr-2">
                <button 
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="flex items-center justify-center transition-opacity disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <Image src="/images/arrow-left1.svg" alt="Previous Page" width={14} height={14} />
                </button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, idx) => {
                    const pageNum = idx + 1;
                    const isSelected = pageNum === currentPage;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-8 h-8 rounded-full text-[12px] font-bold transition-all ${
                          isSelected ? "bg-[#1D2939] text-white" : "text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button 
                  disabled={currentPage >= totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="flex items-center justify-center transition-opacity disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <Image src="/images/arrow-right.svg" alt="Next Page" width={20} height={20} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}