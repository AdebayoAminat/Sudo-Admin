// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import BusinessFilter from "../../components/businesses/BusinessFilter";

// const BusinessCard = ({ business }: any) => (
//   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
//     <div className="flex justify-between items-start mb-6">
//       <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#1D2939] font-bold text-lg border border-gray-100">
//         {business.initials}
//       </div>
//       <div className="flex items-center gap-1.5">
//         <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
//         <span className="text-[11px] font-medium text-[#10B981]">
//           Pending - Active
//         </span>
//       </div>
//     </div>

//     <h3 className="text-[15px] font-bold text-[#1D2939] mb-1">
//       {business.name}
//     </h3>
//     <span className="inline-block px-3 py-1 bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold rounded-md mb-4 uppercase">
//       {business.type}
//     </span>

//     <div className="flex items-center gap-2 text-gray-400">
//       <Image
//         src="/images/clock.svg"
//         alt=""
//         width={14}
//         height={14}
//         className="opacity-40"
//       />
//       <p className="text-[11px]">Created on: {business.date}</p>
//     </div>
//   </div>
// );

// export default function BusinessesPage() {
//   const [showFilters, setShowFilters] = useState(false);

//   const handleApplyFilters = (filters: any) => {
//     console.log("Filters applied:", filters);
//     setShowFilters(false);
//   };

//   const businesses = [
//     {
//       initials: "BS",
//       name: "Black Solutions",
//       type: "Developer",
//       date: "Mar 29, 2026, 9:37:17 AM",
//     },
//     {
//       initials: "VT",
//       name: "Versengtrade Technologies Hub Ltd",
//       type: "Developer",
//       date: "Mar 28, 2026, 11:13:27 PM",
//     },
//     {
//       initials: "GC",
//       name: "Greenery Cooperative",
//       type: "Developer",
//       date: "Mar 28, 2026, 6:23:34 PM",
//     },
//     {
//       initials: "S",
//       name: "Securedwallet",
//       type: "Developer",
//       date: "Mar 28, 2026, 5:47:18 PM",
//     },
//     {
//       initials: "A",
//       name: "Affman",
//       type: "Developer",
//       date: "Mar 28, 2026, 4:38:06 AM",
//     },
//     {
//       initials: "Ek",
//       name: "Emey Kuvala",
//       type: "Consumer",
//       date: "Mar 27, 2026, 8:16:19 PM",
//     },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Search and Filter Header */}
//       <div className="flex items-center justify-between">
//         <p className="text-[13px] text-gray-400">
//           Showing <span className="text-[#1D2939] font-bold">0 - 50</span> of{" "}
//           <span className="text-[#1D2939] font-bold">12,281</span> Businesses
//         </p>

//         <div className="flex items-center gap-4 relative">
//           <div className="relative w-[320px]">
//             <input
//               type="text"
//               placeholder="name, email, type"
//               className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] focus:ring-1 focus:ring-gray-200"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2">
//               <Image
//                 src="/images/search.svg"
//                 alt=""
//                 width={16}
//                 height={16}
//                 className="opacity-30"
//               />
//             </div>
//           </div>

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowFilters(!showFilters);
//             }}
//             className="flex items-center gap-2"
//           >
//             <div className="relative">
//               <Image src="/images/filter.svg" alt="" width={20} height={20} />
//               <span className="absolute -top-1 -right-1 bg-[#034EA2] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
//                 0
//               </span>
//             </div>
//             <span className="text-[13px] font-bold text-[#1D2939]">
//               Filter(s)
//             </span>
//           </button>

//           {showFilters && (
//             <BusinessFilter
//               onClose={() => setShowFilters(false)}
//               onApply={handleApplyFilters}
//             />
//           )}
//         </div>
//       </div>

//       {/* Grid of Businesses */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {businesses.map((b, i) => (
//           <BusinessCard key={i} business={b} />
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import BusinessFilter from "../../components/businesses/BusinessFilter";
// import BusinessService from "@/app/service/businesses.service";

// // 1. Business Card Component wrapped in a Link for navigation
// const BusinessCard = ({ business }: any) => {
//   const initials = business.name
//     ?.split(" ")
//     .map((n: string) => n[0])
//     .join("")
//     .substring(0, 2)
//     .toUpperCase() || "??";

//   return (
//   <Link href={`/dashboard/businesses/${business.id}`}>
//     <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
//       <div className="flex justify-between items-start mb-6">
//         <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#1D2939] font-bold text-lg border border-gray-100 group-hover:border-[#034EA2] transition-colors">
//           {initials}
//         </div>
//         <div className="flex items-center gap-1.5">
//           <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
//           <span className="text-[11px] font-medium text-[#10B981]">
//             Pending - Active
//           </span>
//         </div>
//       </div>

//       <h3 className="text-[15px] font-bold text-[#1D2939] mb-1 group-hover:text-[#034EA2]">
//         {business.name}
//       </h3>
//       <span className="inline-block px-3 py-1 bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold rounded-md mb-4 uppercase">
//         {business.type}
//       </span>

//       <div className="flex items-center gap-2 text-gray-400">
//         <Image
//           src="/images/clock.svg"
//           alt=""
//           width={14}
//           height={14}
//           className="opacity-40"
//         />
//         <p className="text-[11px]">Created on: {new Date(business.createdAt).toLocaleDateString()}</p>
//       </div>
//     </div>
//   </Link>
//   );
// };

// const businessService = new BusinessService();

// export default function BusinessesPage() {
//   const [showFilters, setShowFilters] = useState(false);
//   const [businesses, setBusinesses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [totalCount, setTotalCount] = useState(0);

//   // 2. State to track active filters and badge count
//   const [activeFilters, setActiveFilters] = useState({
//     startDate: "",
//     endDate: "",
//     businessType: "All",
//     count: 0,
//   });

//   const handleApplyFilters = (filters: any) => {
//     // Update local state with the counts from the Filter component
//     setActiveFilters({
//       startDate: filters.startDate,
//       endDate: filters.endDate,
//       businessType: filters.businessType,
//       count: filters.appliedCount, // This updates the blue badge
//     });
//     setShowFilters(false);
//   };

//   useEffect(() => {
//     const fetchBusinesses = async () => {
//       try {
//         const res = await businessService.getAllBusinesses();
//         setBusinesses(res.data);
//         setTotalCount(res.data.length);
//       } catch (error) {
//         console.error("Failed to fetch businesses:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBusinesses();
//   }, []);

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <p className="text-[13px] text-gray-400">
//           Showing <span className="text-[#1D2939] font-bold">0 - {businesses.length}</span> of{" "}
//           <span className="text-[#1D2939] font-bold">{totalCount}</span> Businesses
//         </p>

//         <div className="flex items-center gap-4 relative">
//           <div className="relative w-[320px]">
//             <input
//               type="text"
//               placeholder="name, email, type"
//               className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none focus:ring-1 focus:ring-gray-200"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2">
//               <Image
//                 src="/images/search.svg"
//                 alt=""
//                 width={16}
//                 height={16}
//                 className="opacity-30"
//               />
//             </div>
//           </div>

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowFilters(!showFilters);
//             }}
//             className="flex items-center gap-2"
//           >
//             <div className="relative">
//               <Image src="/images/filter.svg" alt="" width={20} height={20} />
//               {/* Dynamic badge count */}
//               <span className="absolute -top-1 -right-1 bg-[#034EA2] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
//                 {activeFilters.count}
//               </span>
//             </div>
//             <span className="text-[13px] font-bold text-[#1D2939]">
//               Filter(s)
//             </span>
//           </button>

//           {showFilters && (
//             <BusinessFilter
//               //   currentFilters={activeFilters} // Pass current state so they aren't lost on reopen
//               onClose={() => setShowFilters(false)}
//               onApply={handleApplyFilters}
//             />
//           )}
//         </div>
//       </div>

//       {loading ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="h-48 bg-gray-50 animate-pulse rounded-2xl" />
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {businesses.map((b) => (
//             <BusinessCard key={b.id || b._id} business={b} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import BusinessFilter from "../../components/businesses/BusinessFilter";
// import BusinessService from "@/app/service/businesses.service";

// // 1. Business Card Component with API call on click
// const BusinessCard = ({ business, onBusinessClick }: any) => {
//   const initials = business.name
//     ?.split(" ")
//     .map((n: string) => n[0])
//     .join("")
//     .substring(0, 2)
//     .toUpperCase() || "??";

//   return (
//   <div onClick={() => onBusinessClick(business._id)} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
//       <div className="flex justify-between items-start mb-6">
//         <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#1D2939] font-bold text-lg border border-gray-100 group-hover:border-[#034EA2] transition-colors">
//           {initials}
//         </div>
//         <div className="flex items-center gap-1.5">
//           <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
//           <span className="text-[11px] font-medium text-[#10B981] uppercase">
//            {business.status || "Pending - Active"}
//           </span>
//         </div>
//       </div>

//       <h3 className="text-[15px] font-bold text-[#1D2939] mb-1 group-hover:text-[#034EA2]">
//         {business.name}
//       </h3>
//       <span className="inline-block px-3 py-1 bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold rounded-md mb-4 uppercase">
//         {business.type}
//       </span>

//       <div className="flex items-center gap-2 text-gray-400">
//         <Image
//           src="/images/clock.svg"
//           alt=""
//           width={14}
//           height={14}
//           className="opacity-40"
//         />
//         <p className="text-[11px]">Created on: {new Date(business.createdAt).toLocaleDateString()}</p>
//       </div>
//     </div>
//   );
// };

// const businessService = new BusinessService();

// export default function BusinessesPage() {
//   const router = useRouter();
//   const [showFilters, setShowFilters] = useState(false);
//   const [businesses, setBusinesses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(50);
//   const [totalCount, setTotalCount] = useState(0);
//   const [loadingBusinessId, setLoadingBusinessId] = useState<string | null>(null);

//   // State to track active filters and badge count
//   const [activeFilters, setActiveFilters] = useState({
//     startDate: "",
//     endDate: "",
//     businessType: "All",
//     count: 0,
//   });

//   const handleBusinessClick = async (businessId: string) => {
//     setLoadingBusinessId(businessId);
//     try {
//       const response = await businessService.getBusinessById(businessId);
//       if (response.status === 200 || response.status === 202) {
//         router.push(`/dashboard/businesses/${businessId}`);
//       }
//     } catch (error) {
//       console.error("Error fetching business details:", error);
//       setLoadingBusinessId(null);
//     }
//   };

//   const handleApplyFilters = (filters: any) => {
//     setActiveFilters({
//       startDate: filters.startDate,
//       endDate: filters.endDate,
//       businessType: filters.businessType,
//       count: filters.appliedCount,
//     });
//     setCurrentPage(1);
//     setShowFilters(false);
//   };

//   // Filtered businesses based on search term
//   const filteredBusinesses = businesses.filter((b) =>
//     (b.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (b.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (b.type || "").toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredBusinesses.length / pageSize);
//   const startIdx = (currentPage - 1) * pageSize;
//   const endIdx = startIdx + pageSize;
//   const paginatedBusinesses = filteredBusinesses.slice(startIdx, endIdx);

//   console.log("🔍 Pagination Debug:", {
//     totalBusinesses: businesses.length,
//     filteredCount: filteredBusinesses.length,
//     pageSize,
//     totalPages,
//     currentPage,
//   });

//   useEffect(() => {
//     const fetchBusinesses = async () => {
//       setLoading(true);
//       try {
//         const res = await businessService.getAllBusinesses();
//         console.log("Businesses API Response:", res);
        
//         let data = [];
//         if (res.data?.data) {
//           data = res.data.data;
//         } else if (Array.isArray(res.data)) {
//           data = res.data;
//         } else if (res.data) {
//           data = res.data;
//         }
        
//         setBusinesses(Array.isArray(data) ? data : []);
//         setTotalCount(Array.isArray(data) ? data.length : 0);
//       } catch (error) {
//         console.error("Failed to fetch businesses:", error);
//         setBusinesses([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBusinesses();
//   }, []);

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <p className="text-[13px] text-gray-400">
//           Showing{" "}
//           <span className="text-[#1D2939] font-bold">
//             {filteredBusinesses.length === 0 ? 0 : startIdx + 1} - {Math.min(endIdx, filteredBusinesses.length)}
//           </span>{" "}
//           of{" "}
//           <span className="text-[#1D2939] font-bold">
//             {filteredBusinesses.length}
//           </span>{" "}
//           {searchTerm ? "Search Results" : "Businesses"}
//         </p>

//         <div className="flex items-center gap-4 relative">
//           <div className="relative w-[320px]">
//             <input
//               type="text"
//               placeholder="name, email, type"
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1);
//               }}
//               className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none focus:ring-1 focus:ring-gray-200"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2">
//               <Image
//                 src="/images/search.svg"
//                 alt=""
//                 width={16}
//                 height={16}
//                 className="opacity-30"
//               />
//             </div>
//           </div>

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowFilters(!showFilters);
//             }}
//             className="flex items-center gap-2"
//           >
//             <div className="relative">
//               <Image src="/images/filter.svg" alt="" width={20} height={20} />
//               {/* Dynamic badge count */}
//               <span className="absolute -top-1 -right-1 bg-[#034EA2] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
//                 {activeFilters.count}
//               </span>
//             </div>
//             <span className="text-[13px] font-bold text-[#1D2939]">
//               Filter(s)
//             </span>
//           </button>

//           {showFilters && (
//             <BusinessFilter
//               onClose={() => setShowFilters(false)}
//               onApply={handleApplyFilters}
//             />
//           )}
//         </div>
//       </div>

//       {loading ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="h-48 bg-gray-50 animate-pulse rounded-2xl" />
//           ))}
//         </div>
//       ) : paginatedBusinesses.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {paginatedBusinesses.map((b) => (
//             <BusinessCard key={b.id || b._id} business={b} onBusinessClick={handleBusinessClick} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12">
//           <p className="text-gray-400 text-sm">
//             {searchTerm ? "No businesses match your search" : "No businesses found"}
//           </p>
//         </div>
//       )}

//       {/* PAGINATION */}
//       {filteredBusinesses.length > 0 && totalPages > 1 && (
//         <div className="flex items-center justify-center gap-3 mt-12 py-8 border-t">
//           <button
//             onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//             disabled={currentPage === 1}
//             className="p-2 text-gray-600 hover:text-[#034EA2] hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-all"
//           >
//             ← Previous
//           </button>

//           <div className="flex items-center gap-1 mx-4">
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => setCurrentPage(page)}
//                 className={`w-9 h-9 rounded-full text-[12px] font-bold transition-all ${
//                   currentPage === page
//                     ? "bg-[#034EA2] text-white shadow-md"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//             disabled={currentPage === totalPages}
//             className="p-2 text-gray-600 hover:text-[#034EA2] hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-all"
//           >
//             Next →
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // Matching your premium asset design arrow marks
// import BusinessFilter from "../../components/businesses/BusinessFilter";
// import BusinessService from "@/app/service/businesses.service";

// const BusinessCard = ({ business, onBusinessClick }: any) => {
//   const initials = business.name
//     ?.split(" ")
//     .map((n: string) => n[0])
//     .join("")
//     .substring(0, 2)
//     .toUpperCase() || "??";

//   return (
//     <div onClick={() => onBusinessClick(business._id)} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
//       <div className="flex justify-between items-start mb-6">
//         <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#1D2939] font-bold text-lg border border-gray-100 group-hover:border-[#034EA2] transition-colors">
//           {initials}
//         </div>
//         <div className="flex items-center gap-1.5">
//           <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
//           <span className="text-[11px] font-medium text-[#10B981] uppercase">
//             {business.status || "Active"}
//           </span>
//         </div>
//       </div>

//       <h3 className="text-[15px] font-bold text-[#1D2939] mb-1 group-hover:text-[#034EA2] line-clamp-1">
//         {business.name}
//       </h3>
//       <span className="inline-block px-3 py-1 bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold rounded-md mb-4 uppercase">
//         {business.type || "N/A"}
//       </span>

//       <div className="flex items-center gap-2 text-gray-400">
//         <Image
//           src="/images/clock.svg"
//           alt=""
//           width={14}
//           height={14}
//           className="opacity-40"
//         />
//         <p className="text-[11px]">Created on: {business.createdAt ? new Date(business.createdAt).toLocaleDateString() : "N/A"}</p>
//       </div>
//     </div>
//   );
// };

// const businessService = new BusinessService();

// export default function BusinessesPage() {
//   const router = useRouter();
//   const [showFilters, setShowFilters] = useState(false);
//   const [businesses, setBusinesses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
  
//   // Adjusted to mirror backend structure (Backend tracks 0-indexed page variables)
//   const [currentPage, setCurrentPage] = useState(0); 
//   const [totalPages, setTotalPages] = useState(0);
//   const [totalCount, setTotalCount] = useState(0);
//   const pageSize = 25;

//   const [activeFilters, setActiveFilters] = useState({
//     startDate: "",
//     endDate: "",
//     businessType: "All",
//     count: 0,
//   });

//   const fetchBusinesses = async () => {
//     setLoading(true);
//     try {
//       // Direct API requests utilizing active page state boundaries
//       const res = await businessService.getAllBusinesses(currentPage, pageSize);
      
//       if (res && !("error" in res)) {
//         const payload = res.data;
        
//         // Target dynamic responses safely
//         const incomingData = payload?.data || payload;
//         setBusinesses(Array.isArray(incomingData) ? incomingData : []);

//         // Bind meta data parameters directly from response metadata
//         if (payload?.pagination) {
//           setTotalCount(payload.pagination.total || 0);
//           setTotalPages(payload.pagination.pages || 0);
//         } else {
//           setTotalCount(Array.isArray(incomingData) ? incomingData.length : 0);
//           setTotalPages(1);
//         }
//       }
//     } catch (error) {
//       console.error("Failed to fetch businesses:", error);
//       setBusinesses([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBusinesses();
//   }, [currentPage]); // Re-queries backend endpoints automatically when clicking pages

//   const handleBusinessClick = (businessId: string) => {
//     router.push(`/dashboard/businesses/${businessId}`);
//   };

//   const handleApplyFilters = (filters: any) => {
//     setActiveFilters({
//       startDate: filters.startDate,
//       endDate: filters.endDate,
//       businessType: filters.businessType,
//       count: filters.appliedCount,
//     });
//     setCurrentPage(0); // Reset to base 0 index layout
//     setShowFilters(false);
//   };

//   // Client-side search layer matches active window records cleanly
//   const filteredBusinesses = businesses.filter((b) =>
//     (b.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (b.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (b.type || "").toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Dynamic calculation for structural list ranges indicators
//   const displayStart = currentPage * pageSize + 1;
//   const displayEnd = Math.min((currentPage + 1) * pageSize, totalCount);

//   // Generate clean limited window clusters (e.g., [1, 2, 3, 4, 5]) around current active parameters
//   const renderPaginationRange = useMemo(() => {
//     const rangeSize = 5;
//     let start = Math.max(0, currentPage - 2);
//     let end = Math.min(totalPages - 1, start + rangeSize - 1);

//     if (end - start + 1 < rangeSize) {
//       start = Math.max(0, end - rangeSize + 1);
//     }

//     const pagesArray = [];
//     for (let i = start; i <= end; i++) {
//       pagesArray.push(i);
//     }
//     return pagesArray;
//   }, [currentPage, totalPages]);

//   return (
//     <div className="space-y-6">
      
//       {/* FILTER AND DATA CONTROL INTERFACE */}
//       <div className="flex items-center justify-between">
//         <p className="text-[13px] text-gray-400">
//           Showing{" "}
//           <span className="text-[#1D2939] font-bold">
//             {totalCount === 0 ? 0 : displayStart} - {displayEnd}
//           </span>{" "}
//           of{" "}
//           <span className="text-[#1D2939] font-bold">
//             {totalCount.toLocaleString()}
//           </span>{" "}
//           {searchTerm ? "Search Results" : "Businesses"}
//         </p>

//         <div className="flex items-center gap-4 relative">
//           <div className="relative w-[320px]">
//             <input
//               type="text"
//               placeholder="name, email, type"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none focus:ring-1 focus:ring-gray-200"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2">
//               <Image src="/images/search.svg" alt="" width={16} height={16} className="opacity-30" />
//             </div>
//           </div>

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowFilters(!showFilters);
//             }}
//             className="flex items-center gap-2"
//           >
//             <div className="relative">
//               <Image src="/images/filter.svg" alt="" width={20} height={20} />
//               <span className="absolute -top-1 -right-1 bg-[#034EA2] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
//                 {activeFilters.count}
//               </span>
//             </div>
//             <span className="text-[13px] font-bold text-[#1D2939]">Filter(s)</span>
//           </button>

//           {showFilters && (
//             <BusinessFilter onClose={() => setShowFilters(false)} onApply={handleApplyFilters} />
//           )}
//         </div>
//       </div>

//       {/* CORE CARDS GRID VIEW */}
//       {loading ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="h-48 bg-gray-50 animate-pulse rounded-2xl" />
//           ))}
//         </div>
//       ) : filteredBusinesses.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredBusinesses.map((b) => (
//             <BusinessCard key={b._id} business={b} onBusinessClick={handleBusinessClick} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12">
//           <p className="text-gray-400 text-sm">
//             {searchTerm ? "No businesses match your search" : "No businesses found"}
//           </p>
//         </div>
//       )}

//       {/* REPLICATED VISUAL PAGINATION HUB */}
//       {totalCount > 0 && totalPages > 1 && (
//         <div className="flex items-center justify-end gap-6 mt-12 py-8 border-t border-gray-100">
          
//           {/* PREVIOUS ACTION CONTROLLER */}
//           <button
//             onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
//             disabled={currentPage === 0}
//             className="p-2 transition-all disabled:opacity-20 text-gray-400 hover:text-[#034EA2] disabled:cursor-not-allowed"
//           >
//             <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
//           </button>

//           {/* PAGES SELECTION BLOCKS */}
//           <div className="flex items-center gap-3">
//             {renderPaginationRange.map((pageIdx) => {
//               const isSelected = currentPage === pageIdx;
//               return (
//                 <button
//                   key={pageIdx}
//                   onClick={() => setCurrentPage(pageIdx)}
//                   className={`w-8 h-8 text-[13px] font-bold rounded-full transition-all duration-200 ${
//                     isSelected
//                       ? "bg-[#0A1120] text-white shadow-sm scale-105"
//                       : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
//                   }`}
//                 >
//                   {pageIdx + 1}
//                 </button>
//               );
//             })}
//           </div>

//           {/* NEXT ACTION CONTROLLER */}
//           <button
//             onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
//             disabled={currentPage === totalPages - 1}
//             className="p-2 transition-all disabled:opacity-20 text-[#4F46E5] hover:text-[#034EA2] disabled:cursor-not-allowed"
//           >
//             <ChevronRight className="w-5 h-5 stroke-[2.5]" />
//           </button>
          
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import BusinessFilter from "../../components/businesses/BusinessFilter";
// import BusinessService from "@/app/service/businesses.service";

// const BusinessCard = ({ business, onBusinessClick }: any) => {
//   const initials = business.name
//     ?.split(" ")
//     .map((n: string) => n[0])
//     .join("")
//     .substring(0, 2)
//     .toUpperCase() || "??";

//   return (
//     <div onClick={() => onBusinessClick(business._id)} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
//       <div className="flex justify-between items-start mb-6">
//         <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#1D2939] font-bold text-lg border border-gray-100 group-hover:border-[#034EA2] transition-colors">
//           {initials}
//         </div>
//         <div className="flex items-center gap-1.5">
//           <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
//           <span className="text-[11px] font-medium text-[#10B981] uppercase">
//             {business.status || "Active"}
//           </span>
//         </div>
//       </div>

//       <h3 className="text-[15px] font-bold text-[#1D2939] mb-1 group-hover:text-[#034EA2] line-clamp-1">
//         {business.name}
//       </h3>
//       <span className="inline-block px-3 py-1 bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold rounded-md mb-4 uppercase">
//         {business.type || "N/A"}
//       </span>

//       <div className="flex items-center gap-2 text-gray-400">
//         <Image src="/images/clock.svg" alt="" width={14} height={14} className="opacity-40" />
//         <p className="text-[11px]">Created on: {business.createdAt ? new Date(business.createdAt).toLocaleDateString() : "N/A"}</p>
//       </div>
//     </div>
//   );
// };

// const businessService = new BusinessService();

// export default function BusinessesPage() {
//   const router = useRouter();
//   const [showFilters, setShowFilters] = useState(false);
//   const [businesses, setBusinesses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Search is now debounced before hitting the API
//   const [searchTerm, setSearchTerm] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState("");

//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
//   const [totalCount, setTotalCount] = useState(0);
//   const pageSize = 25;

//   const [activeFilters, setActiveFilters] = useState({
//     startDate: "",
//     endDate: "",
//     businessType: "All",
//     count: 0,
//   });

//   // Debounce search input — waits 400ms after user stops typing before firing API call
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearch(searchTerm);
//       setCurrentPage(0); // Reset to page 0 on new search
//     }, 400);
//     return () => clearTimeout(timer);
//   }, [searchTerm]);

//   const fetchBusinesses = async () => {
//     setLoading(true);
//     try {
//       const res = await businessService.getAllBusinesses(
//         currentPage,
//         pageSize,
//         debouncedSearch || undefined,                                                    // search query
//         activeFilters.startDate || undefined,                                           // date range start
//         activeFilters.endDate || undefined,                                             // date range end
//         activeFilters.businessType !== "All" ? activeFilters.businessType : undefined,  // type filter
//       );

//       if (res && !("error" in res)) {
//         const payload = res.data;
//         const incomingData = payload?.data || payload;
//         setBusinesses(Array.isArray(incomingData) ? incomingData : []);

//         if (payload?.pagination) {
//           setTotalCount(payload.pagination.total || 0);
//           setTotalPages(payload.pagination.pages || 0);
//         } else {
//           setTotalCount(Array.isArray(incomingData) ? incomingData.length : 0);
//           setTotalPages(1);
//         }
//       }
//     } catch (error) {
//       console.error("Failed to fetch businesses:", error);
//       setBusinesses([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Re-fetch whenever page, search, or filters change
//   useEffect(() => {
//     fetchBusinesses();
//   }, [currentPage, debouncedSearch, activeFilters]);

//   const handleBusinessClick = (businessId: string) => {
//     router.push(`/dashboard/businesses/${businessId}`);
//   };

//   const handleApplyFilters = (filters: any) => {
//     setActiveFilters({
//       startDate: filters.startDate,
//       endDate: filters.endDate,
//       businessType: filters.businessType,
//       count: filters.appliedCount,
//     });
//     setCurrentPage(0);
//     setShowFilters(false);
//   };

//   // No more client-side filtering — results from API are already filtered
//   const displayStart = currentPage * pageSize + 1;
//   const displayEnd = Math.min((currentPage + 1) * pageSize, totalCount);

//   const renderPaginationRange = useMemo(() => {
//     const rangeSize = 5;
//     let start = Math.max(0, currentPage - 2);
//     let end = Math.min(totalPages - 1, start + rangeSize - 1);
//     if (end - start + 1 < rangeSize) start = Math.max(0, end - rangeSize + 1);
//     const pagesArray = [];
//     for (let i = start; i <= end; i++) pagesArray.push(i);
//     return pagesArray;
//   }, [currentPage, totalPages]);

//   return (
//     <div className="space-y-6">

//       <div className="flex items-center justify-between">
//         <p className="text-[13px] text-gray-400">
//           Showing{" "}
//           <span className="text-[#1D2939] font-bold">
//             {totalCount === 0 ? 0 : displayStart} - {displayEnd}
//           </span>{" "}
//           of{" "}
//           <span className="text-[#1D2939] font-bold">
//             {totalCount.toLocaleString()}
//           </span>{" "}
//           {debouncedSearch ? "Search Results" : "Businesses"}
//         </p>

//         <div className="flex items-center gap-4 relative">
//           <div className="relative w-[320px]">
//             <input
//               type="text"
//               placeholder="name, email, type"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none focus:ring-1 focus:ring-gray-200"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2">
//               <Image src="/images/search.svg" alt="" width={16} height={16} className="opacity-30" />
//             </div>
//           </div>

//           <button
//             onClick={(e) => { e.stopPropagation(); setShowFilters(!showFilters); }}
//             className="flex items-center gap-2"
//           >
//             <div className="relative">
//               <Image src="/images/filter.svg" alt="" width={20} height={20} />
//               <span className="absolute -top-1 -right-1 bg-[#034EA2] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
//                 {activeFilters.count}
//               </span>
//             </div>
//             <span className="text-[13px] font-bold text-[#1D2939]">Filter(s)</span>
//           </button>

//           {showFilters && (
//             <BusinessFilter onClose={() => setShowFilters(false)} onApply={handleApplyFilters} />
//           )}
//         </div>
//       </div>

//       {loading ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="h-48 bg-gray-50 animate-pulse rounded-2xl" />
//           ))}
//         </div>
//       ) : businesses.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {businesses.map((b) => (
//             <BusinessCard key={b._id} business={b} onBusinessClick={handleBusinessClick} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12">
//           <p className="text-gray-400 text-sm">
//             {searchTerm ? "No businesses match your search" : "No businesses found"}
//           </p>
//         </div>
//       )}

//       {totalCount > 0 && totalPages > 1 && (
//         <div className="flex items-center justify-end gap-6 mt-12 py-8 border-t border-gray-100">
//           <button
//             onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
//             disabled={currentPage === 0}
//             className="p-2 transition-all disabled:opacity-20 text-gray-400 hover:text-[#034EA2] disabled:cursor-not-allowed"
//           >
//             <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
//           </button>

//           <div className="flex items-center gap-3">
//             {renderPaginationRange.map((pageIdx) => {
//               const isSelected = currentPage === pageIdx;
//               return (
//                 <button
//                   key={pageIdx}
//                   onClick={() => setCurrentPage(pageIdx)}
//                   className={`w-8 h-8 text-[13px] font-bold rounded-full transition-all duration-200 ${
//                     isSelected
//                       ? "bg-[#0A1120] text-white shadow-sm scale-105"
//                       : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
//                   }`}
//                 >
//                   {pageIdx + 1}
//                 </button>
//               );
//             })}
//           </div>

//           <button
//             onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
//             disabled={currentPage === totalPages - 1}
//             className="p-2 transition-all disabled:opacity-20 text-[#4F46E5] hover:text-[#034EA2] disabled:cursor-not-allowed"
//           >
//             <ChevronRight className="w-5 h-5 stroke-[2.5]" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BusinessFilter from "../../components/businesses/BusinessFilter";
import BusinessService from "@/app/service/businesses.service";

const BusinessCard = ({ business, onBusinessClick }: any) => {
  const initials = business.name
    ?.split(" ")
    .map((n: string) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase() || "??";

  const isBusiness = business.type?.toLowerCase() === "business";

  return (
    <div onClick={() => onBusinessClick(business._id)} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#1D2939] font-bold text-lg border border-gray-100 group-hover:border-[#034EA2] transition-colors">
          {initials}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
          <span className="text-[11px] font-medium text-[#10B981] uppercase">
            {business.status || "Active"}
          </span>
        </div>
      </div>

      <h3 className="text-[15px] font-bold text-[#1D2939] mb-1 group-hover:text-[#034EA2] line-clamp-1">
        {business.name}
      </h3>
      <span className="inline-block px-3 py-1 bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold rounded-md mb-4 uppercase">
        {business.type}
      </span>

      {/* Compliance badge — only for Business type */}
      {isBusiness && business.activationReference && (
        <div className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg mb-4 text-center">
          <span className="text-[11px] font-semibold text-gray-500 tracking-wide uppercase">
            {business.activationReference}
          </span>
        </div>
      )}

      <div className="flex items-center gap-2 text-gray-400">
        <Image src="/images/clock.svg" alt="" width={14} height={14} className="opacity-40" />
        <p className="text-[11px]">Created on: {business.createdAt ? new Date(business.createdAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true }) : "N/A"}</p>
      </div>
    </div>
  );
};

const businessService = new BusinessService();

export default function BusinessesPage() {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 25;

  const [activeFilters, setActiveFilters] = useState({
    startDate: "",
    endDate: "",
    businessType: "All",
    count: 0,
  });

  // Debounce search input — waits 400ms after user stops typing before firing API call
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(0);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchBusinesses = async () => {
    setLoading(true);
    try {
      const res = await businessService.getAllBusinesses(
        currentPage,
        pageSize,
        debouncedSearch || undefined,
        activeFilters.startDate || undefined,
        activeFilters.endDate || undefined,
        activeFilters.businessType !== "All" ? activeFilters.businessType : undefined,
      );

      if (res && !("error" in res)) {
        const payload = res.data;
        const incomingData = payload?.data || payload;
        setBusinesses(Array.isArray(incomingData) ? incomingData : []);

        if (payload?.pagination) {
          setTotalCount(payload.pagination.total || 0);
          setTotalPages(payload.pagination.pages || 0);
        } else {
          setTotalCount(Array.isArray(incomingData) ? incomingData.length : 0);
          setTotalPages(1);
        }
      }
    } catch (error) {
      console.error("Failed to fetch businesses:", error);
      setBusinesses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, [currentPage, debouncedSearch, activeFilters]);

  const handleBusinessClick = (businessId: string) => {
    router.push(`/dashboard/businesses/${businessId}`);
  };

  const handleApplyFilters = (filters: any) => {
    setActiveFilters({
      startDate: filters.startDate,
      endDate: filters.endDate,
      businessType: filters.businessType,
      count: filters.appliedCount,
    });
    setCurrentPage(0);
    setShowFilters(false);
  };

  const displayStart = currentPage * pageSize + 1;
  const displayEnd = Math.min((currentPage + 1) * pageSize, totalCount);

  const renderPaginationRange = useMemo(() => {
    const rangeSize = 5;
    let start = Math.max(0, currentPage - 2);
    let end = Math.min(totalPages - 1, start + rangeSize - 1);
    if (end - start + 1 < rangeSize) start = Math.max(0, end - rangeSize + 1);
    const pagesArray = [];
    for (let i = start; i <= end; i++) pagesArray.push(i);
    return pagesArray;
  }, [currentPage, totalPages]);

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">
        <p className="text-[13px] text-gray-400">
          Showing{" "}
          <span className="text-[#1D2939] font-bold">
            {totalCount === 0 ? 0 : displayStart} - {displayEnd}
          </span>{" "}
          of{" "}
          <span className="text-[#1D2939] font-bold">
            {totalCount.toLocaleString()}
          </span>{" "}
          {debouncedSearch ? "Search Results" : "Businesses"}
        </p>

        <div className="flex items-center gap-4 relative">
          <div className="relative w-[320px]">
            <input
              type="text"
              placeholder="name, email, type"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none focus:ring-1 focus:ring-gray-200"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image src="/images/search.svg" alt="" width={16} height={16} className="opacity-30" />
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setShowFilters(!showFilters); }}
            className="flex items-center gap-2"
          >
            <div className="relative">
              <Image src="/images/filter.svg" alt="" width={20} height={20} />
              <span className="absolute -top-1 -right-1 bg-[#034EA2] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {activeFilters.count}
              </span>
            </div>
            <span className="text-[13px] font-bold text-[#1D2939]">Filter(s)</span>
          </button>

          {showFilters && (
            <BusinessFilter onClose={() => setShowFilters(false)} onApply={handleApplyFilters} />
          )}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-50 animate-pulse rounded-2xl" />
          ))}
        </div>
      ) : businesses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((b) => (
            <BusinessCard key={b._id} business={b} onBusinessClick={handleBusinessClick} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400 text-sm">
            {searchTerm ? "No businesses match your search" : "No businesses found"}
          </p>
        </div>
      )}

      {totalCount > 0 && totalPages > 1 && (
        <div className="flex items-center justify-end gap-6 mt-12 py-8 border-t border-gray-100">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="p-2 transition-all disabled:opacity-20 text-gray-400 hover:text-[#034EA2] disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-3">
            {renderPaginationRange.map((pageIdx) => {
              const isSelected = currentPage === pageIdx;
              return (
                <button
                  key={pageIdx}
                  onClick={() => setCurrentPage(pageIdx)}
                  className={`w-8 h-8 text-[13px] font-bold rounded-full transition-all duration-200 ${
                    isSelected
                      ? "bg-[#0A1120] text-white shadow-sm scale-105"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {pageIdx + 1}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 transition-all disabled:opacity-20 text-[#4F46E5] hover:text-[#034EA2] disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      )}
    </div>
  );
}