

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";

// // --- MOCK DATA SETS ---
// const MOCK_ORGANIZATION_RECORDS = [
//   { id: "6a2f27d4f3162e8b31552f16", name: "K. O. B Enterprises", status: "Unverified", compliance: "No compliance", email: "ayanfeanutayo3@gmail.com", phone: "+2349075968924", createdAt: "Jun 14, 2026, 11:14:44 PM" },
//   { id: "org_2", name: "Fatsco Enterprise", status: "Unverified", compliance: "No compliance", email: "info@fatsco.net", phone: "+2348011223344", createdAt: "Jun 6, 2026, 8:31:14 AM" },
//   { id: "org_3", name: "Solution Logistique", status: "Unverified", compliance: "No compliance", email: "contact@solution.lg", phone: "+2349055566778", createdAt: "May 13, 2026, 8:37:25 AM" },
//   { id: "org_4", name: "Nigeria Buchymix Blender Venture", status: "Unverified", compliance: "No compliance", email: "buchymix@ng.com", phone: "+2347033445566", createdAt: "Jun 20, 2026, 4:12:11 PM" },
//   { id: "org_5", name: "Jehto Limited", status: "Unverified", compliance: "No compliance", email: "management@jehto.co", phone: "+2348122334455", createdAt: "Jun 11, 2026, 2:44:19 PM" },
//   { id: "org_6", name: "Timmy Electro Home Solutions", status: "Unverified", compliance: "No compliance", email: "timmy@electrohome.io", phone: "+2349088776655", createdAt: "May 28, 2026, 9:05:52 AM" },
// ];

// const MOCK_BUSINESSES_MAP: Record<string, any[]> = {
//   "6a2f27d4f3162e8b31552f16": [
//     { id: "biz_kob_1", name: "K. O. B Enterprises", initials: "KO", acctName: "SUDO / K. O. B ENTERPRISES", acctNum: "5014198772", createdAt: "Jun 14, 2026, 11:14:44 PM" }
//   ],
//   "org_2": [
//     { id: "biz_fat_1", name: "Fatsco Enterprise", initials: "FE", acctName: "SUDO / FATSCO ENTERPRISE", acctNum: "5014191234", createdAt: "Jun 6, 2026, 8:31:14 AM" }
//   ],
//   "org_3": [
//     { id: "biz_sol_1", name: "Solution Logistique", initials: "SL", acctName: "SUDO / SOLUTION LOGISTIQUE", acctNum: "5014197788", createdAt: "May 13, 2026, 8:37:25 AM" }
//   ]
// };

// export default function InsuredOrganizationsDashboard() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // Navigation Routing States
//   const [selectedOrgId, setSelectedOrgId] = useState<string | null>(null);
//   const [selectedBusinessId, setSelectedBusinessId] = useState<string | null>(null);
  
//   // Search & Operational UI states
//   const [orgSearch, setOrgSearch] = useState("");
//   const [bizSearch, setBizSearch] = useState("");
//   const [isOrgActive, setIsOrgActive] = useState(true);

//   // Sync state if a user uses the Header back button
//   useEffect(() => {
//     if (searchParams.get("view") !== "detail") {
//       setSelectedOrgId(null);
//       setSelectedBusinessId(null);
//       setBizSearch("");
//     }
//   }, [searchParams]);

//   // Computed Context Objects
//   const currentOrg = MOCK_ORGANIZATION_RECORDS.find(o => o.id === selectedOrgId);
//   const linkedBusinesses = selectedOrgId ? (MOCK_BUSINESSES_MAP[selectedOrgId] || []) : [];
  
//   const filteredOrgs = MOCK_ORGANIZATION_RECORDS.filter(o => 
//     o.name.toLowerCase().includes(orgSearch.toLowerCase())
//   );
//   const filteredBusinesses = linkedBusinesses.filter(b => 
//     b.name.toLowerCase().includes(bizSearch.toLowerCase())
//   );

//   const activeBusinessDetails = linkedBusinesses.find(b => b.id === selectedBusinessId);

//   // FIXED: Updated to push URL changes when an organization card is selected
//   const handleSelectOrg = (orgId: string) => {
//     setSelectedOrgId(orgId);
//     router.push("/dashboard/insured?tab=organizations&view=detail");
//   };

//   // Extract double letter initial block placeholders
//   const getInitials = (text: string) => {
//     return text?.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase() || "??";
//   };

//   /* ==========================================================================================
//      VIEW A: Main Dashboard Grid Directory (admin.sudoafrica.network/dashboard/insured?tab=organizations)
//      ========================================================================================== */
//   if (!selectedOrgId) {
//     return (
//       <div className="space-y-6 animate-in fade-in duration-200">
//         {/* Navigation Tab Header Actions Bar */}
//         <div className="flex justify-between items-center">
//           <p className="text-[13px] text-gray-400">
//             Showing <span className="text-[#1D2939] font-bold">1 - {filteredOrgs.length}</span> of{" "}
//             <span className="text-[#1D2939] font-bold">{MOCK_ORGANIZATION_RECORDS.length}</span> Organizations
//           </p>

//           <div className="flex items-center gap-4">
//             {/* Search input field text block */}
//             <div className="relative w-[320px]">
//               <input
//                 type="text"
//                 placeholder="search"
//                 value={orgSearch}
//                 onChange={(e) => setOrgSearch(e.target.value)}
//                 className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none text-[#1D2939] placeholder-gray-400"
//               />
//               <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30">
//                 <Image src="/images/search.svg" alt="" width={16} height={16} />
//               </div>
//             </div>

//             {/* Filter Toggle Action */}
//             <button className="flex items-center gap-2 outline-none">
//               <div className="relative">
//                 <Image src="/images/filter.svg" alt="" width={20} height={20} />
//                 <span className="absolute -top-1 -right-1 bg-[#034EA2] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
//                   0
//                 </span>
//               </div>
//               <span className="text-[13px] font-bold text-[#1D2939]">Filter(s)</span>
//             </button>
//           </div>
//         </div>

//         {/* Directory Card List Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredOrgs.map((org) => (
//             <div
//               key={org.id}
//               onClick={() => handleSelectOrg(org.id)}
//               className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
//             >
//               <div>
//                 {/* Initial Badge Row */}
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="w-12 h-12 bg-[#F8FAFC] rounded-lg flex items-center justify-center text-[#034EA2] font-bold text-base border border-gray-100">
//                     {getInitials(org.name)}
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#475467]"></span>
//                     <span className="text-[11px] font-semibold text-gray-400 tracking-wide uppercase">
//                       {org.status}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Company Title */}
//                 <h3 className="text-[15px] font-bold text-[#1D2939] mb-1 group-hover:text-[#034EA2] transition-colors line-clamp-1">
//                   {org.name}
//                 </h3>

//                 {/* Tracking Code Flag Label */}
//                 <div className="inline-block px-4 py-1.5 bg-[#EEF2F6] text-[#475467] text-[11px] font-bold rounded-md mb-6 uppercase tracking-wider">
//                   {org.compliance}
//                 </div>
//               </div>

//               {/* Timestamp Log row footer */}
//               <div className="flex items-center gap-2 text-gray-400 pt-2 border-t border-gray-50">
//                 <Image src="/images/clock.svg" alt="" width={14} height={14} className="opacity-30" />
//                 <p className="text-[11px]">
//                   Created on: <span className="text-gray-500 font-medium">{org.createdAt}</span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   /* ==========================================================================================
//      VIEW B: Organization Sub-Profile Container (admin.sudoafrica.network/dashboard/insured/[org_id])
//      ========================================================================================== */
//   return (
//     <div className="w-full space-y-6 animate-in fade-in duration-200">
      
//       {/* 1. Profile Core Details Card Panel Row */}
//       <div className="w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        
//         {/* Active Status Toggle Switcher - Aligned Right */}
//         <div className="flex justify-end items-center">
//           <div className="flex items-center gap-2.5">
//             <span className="text-xs text-gray-400 font-medium">
//               {isOrgActive ? "Active" : "Inactive"}
//             </span>
//             <button
//               onClick={() => setIsOrgActive(!isOrgActive)}
//               className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-all duration-200 ${
//                 isOrgActive ? "bg-[#E2E8F0] justify-end" : "bg-gray-200 justify-start"
//               }`}
//             >
//               <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
//             </button>
//           </div>
//         </div>

//         {/* Identity Grid Matrix Info Row */}
//         <div className="flex justify-between items-start">
//           {/* Left Block: Company Name and Contacts Layout */}
//           <div className="space-y-3">
//             <h1 className="text-xl font-bold text-[#1D2939] tracking-tight">{currentOrg?.name}</h1>
            
//             <div className="flex items-center gap-6 text-[13px] text-[#475467]">
//               <div className="flex items-center gap-2">
//                 <Image src="/images/mail.svg" alt="" width={15} height={15} className="opacity-40" />
//                 <span>{currentOrg?.email}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Image src="/images/phone.svg" alt="" width={14} height={14} className="opacity-40" />
//                 <span>{currentOrg?.phone}</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Block: Add Reference action stacked directly over CreatedOn Timestamp */}
//           <div className="flex flex-col items-end space-y-3">
//             <button className="border border-gray-300 text-[#1D2939] text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
//               Add Reference
//             </button>
//             <div className="flex items-center gap-2 text-gray-400 text-[12px]">
//               <Image src="/images/clock.svg" alt="" width={14} height={14} className="opacity-40" />
//               <p>Created on <span className="text-gray-500 font-medium">{currentOrg?.createdAt}</span></p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 2. Content Workspace Layout Partition - Full Screen Width Row Grid Splitter */}
//       <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
//         {/* Left Side Menu List Section Panel: Nested Sub-Businesses directory filter stack */}
//         <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm space-y-4">
//           <h3 className="text-[13px] font-bold text-gray-800">Businesses</h3>
          
//           {/* Inner Text-Filter Input */}
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="search"
//               value={bizSearch}
//               onChange={(e) => setBizSearch(e.target.value)}
//               className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none text-[#1D2939] placeholder-gray-400"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30">
//               <Image src="/images/search.svg" alt="" width={14} height={14} />
//             </div>
//           </div>

//           {/* Business Unit Item Node Row Count Indicators */}
//           <p className="text-[11px] text-gray-400">
//             Showing <span className="font-bold text-gray-600">{filteredBusinesses.length}</span> Businesses
//           </p>

//           {/* Business Row Nodes list iteration handler loops */}
//           <div className="space-y-1">
//             {filteredBusinesses.length === 0 ? (
//               <div className="text-center py-6 text-xs text-gray-400">No matching business entries.</div>
//             ) : (
//               filteredBusinesses.map((biz) => {
//                 const isSelected = selectedBusinessId === biz.id;
//                 return (
//                   <div
//                     key={biz.id}
//                     onClick={() => setSelectedBusinessId(biz.id)}
//                     className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
//                       isSelected
//                         ? "bg-[#F8FAFC] border-gray-200 shadow-sm"
//                         : "bg-white border-transparent hover:bg-gray-50/70"
//                     }`}
//                   >
//                     <div className="w-8 h-8 rounded-md bg-[#F1F5F9] text-[#034EA2] flex items-center justify-center font-bold text-[11px] border border-gray-100">
//                       {biz.initials}
//                     </div>
//                     <span className="text-[13px] font-bold text-[#1D2939]">{biz.name}</span>
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         </div>

//         {/* Right Side Column: Main Card Workspace Context Switcher Display Pane */}
//         <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm min-h-[400px] flex flex-col justify-center items-center p-6 w-full">
          
//           {activeBusinessDetails ? (
//             /* ACTIVE STATE: Target Selected Profile Box Card View */
//             <div className="w-full h-full animate-in fade-in duration-150 flex flex-col justify-between">
//               <div className="border border-gray-100 rounded-xl p-6 bg-white space-y-4 shadow-sm max-w-xl text-left">
//                 <h2 className="text-[15px] font-bold text-[#1D2939]">{activeBusinessDetails.name}</h2>
                
//                 {/* Embedded Account Specification block metrics window */}
//                 <div className="bg-[#F8FAFC] rounded-lg p-4 font-mono text-[12px] text-[#1D2939] space-y-2 border border-gray-50/50 leading-relaxed">
//                   <p><span className="text-gray-400 font-sans font-semibold mr-2">ACCT NAME:</span>{activeBusinessDetails.acctName}</p>
//                   <p><span className="text-gray-400 font-sans font-semibold mr-2">ACCT NUM:</span>{activeBusinessDetails.acctNum}</p>
//                 </div>

//                 {/* Sub Metadata Row Footer featuring navigation buttons pagination blocks */}
//                 <div className="flex justify-between items-center pt-2 text-gray-400 text-[11px] font-medium">
//                   <div className="flex items-center gap-1.5">
//                     <Image src="/images/clock.svg" alt="" width={13} height={13} className="opacity-40" />
//                     <span>Created on {activeBusinessDetails.createdAt}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             /* FALLBACK EMPTY STATE: Blank Selection View Placeholder Screen layout */
//             <div className="text-center flex flex-col items-center justify-center space-y-3">
//               <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-100">
//                 <Image
//                   src="/images/file-text.svg"
//                   alt=""
//                   width={24}
//                   height={24}
//                   className="opacity-40"
//                 />
//               </div>
//               <h4 className="text-sm font-bold text-[#1D2939]">Please select a business</h4>
//               <p className="text-xs text-gray-400 font-medium">No business is selected</p>
//             </div>
//           )}

//         </div>

//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";

// // --- MOCK DATA SETS ---
// const MOCK_ORGANIZATION_RECORDS = [
//   { id: "6a2f27d4f3162e8b31552f16", name: "K. O. B Enterprises", status: "Unverified", compliance: "No compliance", email: "ayanfeanutayo3@gmail.com", phone: "+2349075968924", createdAt: "Jun 14, 2026, 11:14:44 PM" },
//   { id: "org_2", name: "Fatsco Enterprise", status: "Unverified", compliance: "No compliance", email: "info@fatsco.net", phone: "+2348011223344", createdAt: "Jun 6, 2026, 8:31:14 AM" },
//   { id: "org_3", name: "Solution Logistique", status: "Unverified", compliance: "No compliance", email: "contact@solution.lg", phone: "+2349055566778", createdAt: "May 13, 2026, 8:37:25 AM" },
//   { id: "org_4", name: "Nigeria Buchymix Blender Venture", status: "Unverified", compliance: "No compliance", email: "buchymix@ng.com", phone: "+2347033445566", createdAt: "Jun 20, 2026, 4:12:11 PM" },
//   { id: "org_5", name: "Jehto Limited", status: "Unverified", compliance: "No compliance", email: "management@jehto.co", phone: "+2348122334455", createdAt: "Jun 11, 2026, 2:44:19 PM" },
//   { id: "org_6", name: "Timmy Electro Home Solutions", status: "Unverified", compliance: "No compliance", email: "timmy@electrohome.io", phone: "+2349088776655", createdAt: "May 28, 2026, 9:05:52 AM" },
// ];

// const MOCK_BUSINESSES_MAP: Record<string, any[]> = {
//   "6a2f27d4f3162e8b31552f16": [
//     { id: "biz_kob_1", name: "K. O. B Enterprises", initials: "KO", acctName: "SUDO / K. O. B ENTERPRISES", acctNum: "5014198772", createdAt: "Jun 14, 2026, 11:14:44 PM" }
//   ],
//   "org_2": [
//     { id: "biz_fat_1", name: "Fatsco Enterprise", initials: "FE", acctName: "SUDO / FATSCO ENTERPRISE", acctNum: "5014191234", createdAt: "Jun 6, 2026, 8:31:14 AM" }
//   ],
//   "org_3": [
//     { id: "biz_sol_1", name: "Solution Logistique", initials: "SL", acctName: "SUDO / SOLUTION LOGISTIQUE", acctNum: "5014197788", createdAt: "May 13, 2026, 8:37:25 AM" }
//   ]
// };

// export default function InsuredOrganizationsDashboard() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // Parse organization id from tab param query layout (e.g., tab=organizations/6a2f27d4f316...)
//   const tabParam = searchParams.get("tab") || "organizations";
//   const isDetailView = tabParam.startsWith("organizations/");
//   const selectedOrgId = isDetailView ? tabParam.split("/")[1] : null;

//   // Operational Sub UI Layout state structures
//   const [selectedBusinessId, setSelectedBusinessId] = useState<string | null>(null);
//   const [orgSearch, setOrgSearch] = useState("");
//   const [bizSearch, setBizSearch] = useState("");
//   const [isOrgActive, setIsOrgActive] = useState(true);

//   // Clear inner business selection variables when navigating back out to main lists
//   useEffect(() => {
//     if (!isDetailView) {
//       setSelectedBusinessId(null);
//       setBizSearch("");
//     }
//   }, [isDetailView]);

//   // Computed Context Objects
//   const currentOrg = MOCK_ORGANIZATION_RECORDS.find(o => o.id === selectedOrgId);
//   const linkedBusinesses = selectedOrgId ? (MOCK_BUSINESSES_MAP[selectedOrgId] || []) : [];
  
//   const filteredOrgs = MOCK_ORGANIZATION_RECORDS.filter(o => 
//     o.name.toLowerCase().includes(orgSearch.toLowerCase())
//   );
//   const filteredBusinesses = linkedBusinesses.filter(b => 
//     b.name.toLowerCase().includes(bizSearch.toLowerCase())
//   );

//   const activeBusinessDetails = linkedBusinesses.find(b => b.id === selectedBusinessId);

//   // Handles moving to detail view via dynamic tab updates
//   const handleSelectOrg = (orgId: string) => {
//     router.push(`/dashboard/insured?tab=organizations/${orgId}`);
//   };

//   // Extract double letter initial block placeholders
//   const getInitials = (text: string) => {
//     return text?.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase() || "??";
//   };

//   /* ==========================================================================================
//      VIEW A: Main Dashboard Grid Directory (?tab=organizations)
//      ========================================================================================== */
//   if (!selectedOrgId) {
//     return (
//       <div className="space-y-6 animate-in fade-in duration-200">
//         <div className="flex justify-between items-center">
//           <p className="text-[13px] text-gray-400">
//             Showing <span className="text-[#1D2939] font-bold">1 - {filteredOrgs.length}</span> of{" "}
//             <span className="text-[#1D2939] font-bold">{MOCK_ORGANIZATION_RECORDS.length}</span> Organizations
//           </p>

//           <div className="flex items-center gap-4">
//             <div className="relative w-[320px]">
//               <input
//                 type="text"
//                 placeholder="search"
//                 value={orgSearch}
//                 onChange={(e) => setOrgSearch(e.target.value)}
//                 className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none text-[#1D2939] placeholder-gray-400"
//               />
//               <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30">
//                 <Image src="/images/search.svg" alt="" width={16} height={16} />
//               </div>
//             </div>

//             <button className="flex items-center gap-2 outline-none">
//               <div className="relative">
//                 <Image src="/images/filter.svg" alt="" width={20} height={20} />
//                 <span className="absolute -top-1 -right-1 bg-[#034EA2] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
//                   0
//                 </span>
//               </div>
//               <span className="text-[13px] font-bold text-[#1D2939]">Filter(s)</span>
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredOrgs.map((org) => (
//             <div
//               key={org.id}
//               onClick={() => handleSelectOrg(org.id)}
//               className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
//             >
//               <div>
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="w-12 h-12 bg-[#F8FAFC] rounded-lg flex items-center justify-center text-[#034EA2] font-bold text-base border border-gray-100">
//                     {getInitials(org.name)}
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#475467]"></span>
//                     <span className="text-[11px] font-semibold text-gray-400 tracking-wide uppercase">
//                       {org.status}
//                     </span>
//                   </div>
//                 </div>

//                 <h3 className="text-[15px] font-bold text-[#1D2939] mb-1 group-hover:text-[#034EA2] transition-colors line-clamp-1">
//                   {org.name}
//                 </h3>

//                 <div className="inline-block px-4 py-1.5 bg-[#EEF2F6] text-[#475467] text-[11px] font-bold rounded-md mb-6 uppercase tracking-wider">
//                   {org.compliance}
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 text-gray-400 pt-2 border-t border-gray-50">
//                 <Image src="/images/clock.svg" alt="" width={14} height={14} className="opacity-30" />
//                 <p className="text-[11px]">
//                   Created on: <span className="text-gray-500 font-medium">{org.createdAt}</span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   /* ==========================================================================================
//      VIEW B: Organization Sub-Profile Container (?tab=organizations/[id])
//      ========================================================================================== */
//   return (
//     <div className="w-full space-y-6 animate-in fade-in duration-200">
//       <div className="w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
//         <div className="flex justify-end items-center">
//           <div className="flex items-center gap-2.5">
//             <span className="text-xs text-gray-400 font-medium">
//               {isOrgActive ? "Active" : "Inactive"}
//             </span>
//             <button
//               onClick={() => setIsOrgActive(!isOrgActive)}
//               className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-all duration-200 ${
//                 isOrgActive ? "bg-[#E2E8F0] justify-end" : "bg-gray-200 justify-start"
//               }`}
//             >
//               <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-between items-start">
//           <div className="space-y-3">
//             <h1 className="text-xl font-bold text-[#1D2939] tracking-tight">{currentOrg?.name}</h1>
//             <div className="flex items-center gap-6 text-[13px] text-[#475467]">
//               <div className="flex items-center gap-2">
//                 <Image src="/images/mail.svg" alt="" width={15} height={15} className="opacity-40" />
//                 <span>{currentOrg?.email}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Image src="/images/phone.svg" alt="" width={14} height={14} className="opacity-40" />
//                 <span>{currentOrg?.phone}</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-end space-y-3">
//             <button className="border border-gray-300 text-[#1D2939] text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
//               Add Reference
//             </button>
//             <div className="flex items-center gap-2 text-gray-400 text-[12px]">
//               <Image src="/images/clock.svg" alt="" width={14} height={14} className="opacity-40" />
//               <p>Created on <span className="text-gray-500 font-medium">{currentOrg?.createdAt}</span></p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
//         <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm space-y-4">
//           <h3 className="text-[13px] font-bold text-gray-800">Businesses</h3>
          
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="search"
//               value={bizSearch}
//               onChange={(e) => setBizSearch(e.target.value)}
//               className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none text-[#1D2939] placeholder-gray-400"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30">
//               <Image src="/images/search.svg" alt="" width={14} height={14} />
//             </div>
//           </div>

//           <p className="text-[11px] text-gray-400">
//             Showing <span className="font-bold text-gray-600">{filteredBusinesses.length}</span> Businesses
//           </p>

//           <div className="space-y-1">
//             {filteredBusinesses.length === 0 ? (
//               <div className="text-center py-6 text-xs text-gray-400">No matching business entries.</div>
//             ) : (
//               filteredBusinesses.map((biz) => {
//                 const isSelected = selectedBusinessId === biz.id;
//                 return (
//                   <div
//                     key={biz.id}
//                     onClick={() => setSelectedBusinessId(biz.id)}
//                     className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
//                       isSelected
//                         ? "bg-[#F8FAFC] border-gray-200 shadow-sm"
//                         : "bg-white border-transparent hover:bg-gray-50/70"
//                     }`}
//                   >
//                     <div className="w-8 h-8 rounded-md bg-[#F1F5F9] text-[#034EA2] flex items-center justify-center font-bold text-[11px] border border-gray-100">
//                       {biz.initials}
//                     </div>
//                     <span className="text-[13px] font-bold text-[#1D2939]">{biz.name}</span>
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         </div>

//         <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm min-h-[400px] flex flex-col justify-center items-center p-6 w-full">
//           {activeBusinessDetails ? (
//             <div className="w-full h-full animate-in fade-in duration-150 flex flex-col justify-between">
//               <div className="border border-gray-100 rounded-xl p-6 bg-white space-y-4 shadow-sm max-w-xl text-left">
//                 <h2 className="text-[15px] font-bold text-[#1D2939]">{activeBusinessDetails.name}</h2>
//                 <div className="bg-[#F8FAFC] rounded-lg p-4 font-mono text-[12px] text-[#1D2939] space-y-2 border border-gray-50/50 leading-relaxed">
//                   <p><span className="text-gray-400 font-sans font-semibold mr-2">ACCT NAME:</span>{activeBusinessDetails.acctName}</p>
//                   <p><span className="text-gray-400 font-sans font-semibold mr-2">ACCT NUM:</span>{activeBusinessDetails.acctNum}</p>
//                 </div>
//                 <div className="flex justify-between items-center pt-2 text-gray-400 text-[11px] font-medium">
//                   <div className="flex items-center gap-1.5">
//                     <Image src="/images/clock.svg" alt="" width={13} height={13} className="opacity-40" />
//                     <span>Created on {activeBusinessDetails.createdAt}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="text-center flex flex-col items-center justify-center space-y-3">
//               <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-100">
//                 <Image src="/images/file-text.svg" alt="" width={24} height={24} className="opacity-40" />
//               </div>
//               <h4 className="text-sm font-bold text-[#1D2939]">Please select a business</h4>
//               <p className="text-xs text-gray-400 font-medium">No business is selected</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import InsuredService from "@/app/service/insured.service";

const insuredService = new InsuredService();

export default function InsuredOrganizationsDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get("tab") || "organizations";
  const isDetailView = tabParam.startsWith("organizations/");
  const selectedOrgId = isDetailView ? tabParam.split("/")[1] : null;

  const [organizations, setOrganizations] = useState<any[]>([]);
  const [linkedBusinesses, setLinkedBusinesses] = useState<any[]>([]);
  const [selectedBusinessId, setSelectedBusinessId] = useState<string | null>(null);
  const [orgSearch, setOrgSearch] = useState("");
  const [bizSearch, setBizSearch] = useState("");
  const [isOrgActive, setIsOrgActive] = useState(true);
  const [loadingOrgs, setLoadingOrgs] = useState(true);
  const [loadingBiz, setLoadingBiz] = useState(false);
  const [currentPage] = useState(0);
  const pageSize = 25;

  // Fetch all organizations on mount
  useEffect(() => {
    const fetchOrgs = async () => {
      setLoadingOrgs(true);
      try {
        const res = await insuredService.getBusinessPOSorLocations(
          currentPage,
          pageSize,
          "Organization",
          ""
        );
        if ((res as any)?.data) {
          setOrganizations(Array.isArray((res as any).data?.data) ? (res as any).data.data : []);
        }
      } catch (err) {
        console.error("Failed to fetch organizations:", err);
      } finally {
        setLoadingOrgs(false);
      }
    };

    fetchOrgs();
  }, []);

  // Fetch businesses when an org is selected
  useEffect(() => {
    if (!selectedOrgId) {
      setLinkedBusinesses([]);
      setSelectedBusinessId(null);
      setBizSearch("");
      return;
    }

    const fetchBusinesses = async () => {
      setLoadingBiz(true);
      try {
        const res = await insuredService.getOrganizationBusinesses(selectedOrgId);
        if ((res as any)?.data) {
          setLinkedBusinesses(Array.isArray((res as any).data?.data) ? (res as any).data.data : []);
        }
      } catch (err) {
        console.error("Failed to fetch businesses:", err);
        setLinkedBusinesses([]);
      } finally {
        setLoadingBiz(false);
      }
    };

    fetchBusinesses();
  }, [selectedOrgId]);

  // Clear business selection when leaving detail view
  useEffect(() => {
    if (!isDetailView) {
      setSelectedBusinessId(null);
      setBizSearch("");
    }
  }, [isDetailView]);

  const currentOrg = organizations.find((o) => o._id === selectedOrgId);

  const filteredOrgs = organizations.filter((o) =>
    (`${o.first_name} ${o.last_name} ${o.company_name}`)
      .toLowerCase()
      .includes(orgSearch.toLowerCase())
  );

  const filteredBusinesses = linkedBusinesses.filter((b) =>
    (b.business?.name || "").toLowerCase().includes(bizSearch.toLowerCase())
  );

  const activeBusinessDetails = linkedBusinesses.find((b) => b._id === selectedBusinessId);

  const handleSelectOrg = (orgId: string) => {
    router.push(`/dashboard/insured?tab=organizations/${orgId}`);
  };

  const getInitials = (text: string) =>
    text?.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase() || "??";

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true,
    });
  };

  /* ==========================================================================================
     VIEW A: Main Org Grid
  ========================================================================================== */
  if (!selectedOrgId) {
    return (
      <div className="space-y-6 animate-in fade-in duration-200">
        <div className="flex justify-between items-center">
          <p className="text-[13px] text-gray-400">
            Showing{" "}
            <span className="text-[#1D2939] font-bold">1 - {filteredOrgs.length}</span> of{" "}
            <span className="text-[#1D2939] font-bold">{organizations.length}</span> Organizations
          </p>

          <div className="flex items-center gap-4">
            <div className="relative w-[320px]">
              <input
                type="text"
                placeholder="search"
                value={orgSearch}
                onChange={(e) => setOrgSearch(e.target.value)}
                className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none text-[#1D2939] placeholder-gray-400"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30">
                <Image src="/images/search.svg" alt="" width={16} height={16} />
              </div>
            </div>

            <button className="flex items-center gap-2 outline-none">
              <div className="relative">
                <Image src="/images/filter.svg" alt="" width={20} height={20} />
                <span className="absolute -top-1 -right-1 bg-[#034EA2] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </div>
              <span className="text-[13px] font-bold text-[#1D2939]">Filter(s)</span>
            </button>
          </div>
        </div>

        {loadingOrgs ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-50 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : filteredOrgs.length === 0 ? (
          <div className="text-center py-12 text-sm text-gray-400">No organizations found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOrgs.map((org) => (
              <div
                key={org._id}
                onClick={() => handleSelectOrg(org._id)}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-[#F8FAFC] rounded-lg flex items-center justify-center text-[#034EA2] font-bold text-base border border-gray-100">
                      {getInitials(org.company_name || org.first_name)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#475467]"></span>
                      <span className="text-[11px] font-semibold text-gray-400 tracking-wide uppercase">
                        {org.email_verified ? "Verified" : "Unverified"}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-[15px] font-bold text-[#1D2939] mb-1 group-hover:text-[#034EA2] transition-colors line-clamp-1">
                    {org.company_name || `${org.first_name} ${org.last_name}`}
                  </h3>

                  <div className="inline-block px-4 py-1.5 bg-[#EEF2F6] text-[#475467] text-[11px] font-bold rounded-md mb-6 uppercase tracking-wider">
                    {org.membership?.business?.activationReference || "No compliance"}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-400 pt-2 border-t border-gray-50">
                  <Image src="/images/clock.svg" alt="" width={14} height={14} className="opacity-30" />
                  <p className="text-[11px]">
                    Created on: <span className="text-gray-500 font-medium">{formatDate(org.createdAt)}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  /* ==========================================================================================
     VIEW B: Org Detail View
  ========================================================================================== */
  return (
    <div className="w-full space-y-6 animate-in fade-in duration-200">
      <div className="w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex justify-end items-center">
          <div className="flex items-center gap-2.5">
            <span className="text-xs text-gray-400 font-medium">
              {isOrgActive ? "Active" : "Inactive"}
            </span>
            <button
              onClick={() => setIsOrgActive(!isOrgActive)}
              className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-all duration-200 ${
                isOrgActive ? "bg-[#E2E8F0] justify-end" : "bg-gray-200 justify-start"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-start">
          <div className="space-y-3">
            <h1 className="text-xl font-bold text-[#1D2939] tracking-tight">
              {currentOrg?.company_name || `${currentOrg?.first_name} ${currentOrg?.last_name}`}
            </h1>
            <div className="flex items-center gap-6 text-[13px] text-[#475467]">
              <div className="flex items-center gap-2">
                <Image src="/images/mail.svg" alt="" width={15} height={15} className="opacity-40" />
                <span>{currentOrg?.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/images/phone.svg" alt="" width={14} height={14} className="opacity-40" />
                <span>{currentOrg?.phone_number}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-3">
            <button className="border border-gray-300 text-[#1D2939] text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
              Add Reference
            </button>
            <div className="flex items-center gap-2 text-gray-400 text-[12px]">
              <Image src="/images/clock.svg" alt="" width={14} height={14} className="opacity-40" />
              <p>
                Created on{" "}
                <span className="text-gray-500 font-medium">
                  {formatDate(currentOrg?.createdAt)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* BUSINESSES LIST */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm space-y-4">
          <h3 className="text-[13px] font-bold text-gray-800">Businesses</h3>

          <div className="relative w-full">
            <input
              type="text"
              placeholder="search"
              value={bizSearch}
              onChange={(e) => setBizSearch(e.target.value)}
              className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none text-[#1D2939] placeholder-gray-400"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30">
              <Image src="/images/search.svg" alt="" width={14} height={14} />
            </div>
          </div>

          <p className="text-[11px] text-gray-400">
            Showing <span className="font-bold text-gray-600">{filteredBusinesses.length}</span> Businesses
          </p>

          <div className="space-y-1">
            {loadingBiz ? (
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-100 rounded-xl animate-pulse" />
                ))}
              </div>
            ) : filteredBusinesses.length === 0 ? (
              <div className="text-center py-6 text-xs text-gray-400">No matching business entries.</div>
            ) : (
              filteredBusinesses.map((biz) => {
                const isSelected = selectedBusinessId === biz._id;
                return (
                  <div
                    key={biz._id}
                    onClick={() => setSelectedBusinessId(biz._id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#F8FAFC] border-gray-200 shadow-sm"
                        : "bg-white border-transparent hover:bg-gray-50/70"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-md bg-[#F1F5F9] text-[#034EA2] flex items-center justify-center font-bold text-[11px] border border-gray-100">
                      {getInitials(biz.business?.name || "")}
                    </div>
                    <span className="text-[13px] font-bold text-[#1D2939]">{biz.business?.name}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* BUSINESS DETAIL PANEL */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm min-h-[400px] flex flex-col justify-center items-center p-6 w-full">
          {activeBusinessDetails ? (
            <div className="w-full h-full animate-in fade-in duration-150 flex flex-col justify-between">
              <div className="border border-gray-100 rounded-xl p-6 bg-white space-y-4 shadow-sm max-w-xl text-left">
                <h2 className="text-[15px] font-bold text-[#1D2939]">
                  {activeBusinessDetails.business?.name}
                </h2>
                <div className="bg-[#F8FAFC] rounded-lg p-4 font-mono text-[12px] text-[#1D2939] space-y-2 border border-gray-50/50 leading-relaxed">
                  <p>
                    <span className="text-gray-400 font-sans font-semibold mr-2">EMAIL:</span>
                    {activeBusinessDetails.business?.emailAddress}
                  </p>
                  <p>
                    <span className="text-gray-400 font-sans font-semibold mr-2">STATUS:</span>
                    {activeBusinessDetails.business?.status}
                  </p>
                  {activeBusinessDetails.business?.activationReference && (
                    <p>
                      <span className="text-gray-400 font-sans font-semibold mr-2">COMPLIANCE:</span>
                      {activeBusinessDetails.business.activationReference}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-medium">
                  <Image src="/images/clock.svg" alt="" width={13} height={13} className="opacity-40" />
                  <span>Created on {formatDate(activeBusinessDetails.business?.createdAt)}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center flex flex-col items-center justify-center space-y-3">
              <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-100">
                <Image src="/images/file-text.svg" alt="" width={24} height={24} className="opacity-40" />
              </div>
              <h4 className="text-sm font-bold text-[#1D2939]">Please select a business</h4>
              <p className="text-xs text-gray-400 font-medium">No business is selected</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}