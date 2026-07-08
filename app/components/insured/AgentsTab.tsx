// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";

// // --- MOCK AGENTS DATA SET ---
// const MOCK_AGENTS = [
//   { 
//     id: "6a2f303df3162e8b31552f4c", 
//     name: "Kob Enterprise Limited", 
//     agentName: "Ayanfe Anutayo", 
//     email: "kingofboys1kob@gmail.com", 
//     phone: "+2349044314319", 
//     status: "Unverified", 
//     compliance: "No compliance", 
//     createdAt: "Jun 14, 2026, 11:50:37 PM", 
//     initials: "KE" 
//   },
//   { 
//     id: "agent_2", 
//     name: "Fatsco Enterprise", 
//     agentName: "Fatai Abdulmumeen", 
//     email: "fatai@fatsco.com", 
//     phone: "+2348011223344", 
//     status: "Unverified", 
//     compliance: "No compliance", 
//     createdAt: "Jun 6, 2026, 12:51:34 AM", 
//     initials: "FE" 
//   },
//   { 
//     id: "agent_3", 
//     name: "Alhaji Saidu", 
//     agentName: "Alhaji Abubakar", 
//     email: "saidu@saidu.com", 
//     phone: "+2349011223344", 
//     status: "Unverified", 
//     compliance: "No compliance", 
//     createdAt: "Jun 5, 2026, 10:13:30 AM", 
//     initials: "As" 
//   },
// ];

// export default function AgentsTab() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // 1. URL STATE PARSING
//   const tabParam = searchParams.get("tab") || "agents";
//   const isDetailView = tabParam.startsWith("agents/");
//   const selectedAgentId = isDetailView ? tabParam.split("/")[1] : null;
  
//   // Parse subTab parameter from URL (defaulting to locations inside detail view)
//   const activeSubTab = searchParams.get("subTab") || "locations";

//   // Operational Sub UI states
//   const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
//   const [agentSearch, setAgentSearch] = useState("");
//   const [locationSearch, setLocationSearch] = useState("");
//   const [isAgentActive, setIsAgentActive] = useState(false);

//   // Sync state or clear if moving away from detail view
//   useEffect(() => {
//     if (!isDetailView) {
//       setSelectedLocationId(null);
//       setLocationSearch("");
//     }
//   }, [isDetailView]);

//   // Find targeted entity profile
//   const currentAgent = MOCK_AGENTS.find(a => a.id === selectedAgentId);

//   // Filtered List computations
//   const filteredAgents = MOCK_AGENTS.filter(a => 
//     a.name.toLowerCase().includes(agentSearch.toLowerCase()) ||
//     a.agentName.toLowerCase().includes(agentSearch.toLowerCase())
//   );

//   // 2. ROUTING ROUTINES
//   const handleSelectAgent = (agentId: string) => {
//     // When opening an agent, default to showing the locations subTab cleanly
//     router.push(`/dashboard/insured?tab=agents/${agentId}&subTab=locations`);
//   };

//   const handleSubTabChange = (subTabValue: string) => {
//     if (selectedAgentId) {
//       router.push(`/dashboard/insured?tab=agents/${selectedAgentId}&subTab=${subTabValue}`);
//     }
//   };

//   /* ==========================================================================================
//      VIEW A: Main Dashboard Agents Grid Directory (?tab=agents)
//      ========================================================================================== */
//   if (!selectedAgentId) {
//     return (
//       <div className="space-y-6 animate-in fade-in duration-200">
//         <div className="flex justify-between items-center">
//           <p className="text-[13px] text-gray-400">
//             Showing <span className="text-[#1D2939] font-bold">1 - {filteredAgents.length}</span> of{" "}
//             <span className="text-[#1D2939] font-bold">{MOCK_AGENTS.length}</span> Agents
//           </p>

//           <div className="flex items-center gap-4">
//             <div className="relative w-[320px]">
//               <input
//                 type="text"
//                 placeholder="search"
//                 value={agentSearch}
//                 onChange={(e) => setAgentSearch(e.target.value)}
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
//           {filteredAgents.map((agent) => (
//             <div
//               key={agent.id}
//               onClick={() => handleSelectAgent(agent.id)}
//               className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
//             >
//               <div>
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="w-12 h-12 bg-[#F8FAFC] rounded-lg flex items-center justify-center text-[#034EA2] font-bold text-base border border-gray-100">
//                     {agent.initials}
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#475467]"></span>
//                     <span className="text-[11px] font-semibold text-gray-400 tracking-wide uppercase">
//                       {agent.status}
//                     </span>
//                   </div>
//                 </div>

//                 <h3 className="text-[15px] font-bold text-[#1D2939] mb-0.5 group-hover:text-[#034EA2] transition-colors line-clamp-1">
//                   {agent.name}
//                 </h3>
                
//                 <p className="text-[13px] text-gray-500 mb-4 font-medium">{agent.agentName}</p>

//                 <div className="inline-block px-4 py-1.5 bg-[#EEF2F6] text-[#475467] text-[11px] font-bold rounded-md mb-6 uppercase tracking-wider">
//                   {agent.compliance}
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 text-gray-400 pt-2 border-t border-gray-50">
//                 <Image src="/images/clock.svg" alt="" width={14} height={14} className="opacity-30" />
//                 <p className="text-[11px]">
//                   Created on: <span className="text-gray-500 font-medium">{agent.createdAt}</span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   /* ==========================================================================================
//      VIEW B: Agent Sub-Profile Container (?tab=agents/[id]&subTab=[locations|transactions|kyc])
//      ========================================================================================== */
//   return (
//     <div className="w-full space-y-6 animate-in fade-in duration-200">
      
//       {/* Profile Core Header Panel Summary */}
//       <div className="w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
//         <div className="flex justify-end items-center">
//           <div className="flex items-center gap-2.5">
//             <span className="text-xs text-gray-400 font-medium">
//               {isAgentActive ? "Active" : "Inactive"}
//             </span>
//             <button
//               onClick={() => setIsAgentActive(!isAgentActive)}
//               className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-all duration-200 ${
//                 isAgentActive ? "bg-[#E2E8F0] justify-end" : "bg-gray-200 justify-start"
//               }`}
//             >
//               <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-between items-start">
//           <div className="flex items-start gap-4">
//             <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center font-bold text-lg text-[#1D2939]">
//               {currentAgent?.initials}
//             </div>
//             <div className="space-y-1.5">
//               <div className="flex items-center gap-3">
//                 <h1 className="text-lg font-bold text-[#1D2939] tracking-tight">{currentAgent?.name}</h1>
//                 <span className="px-2.5 py-0.5 bg-[#E0F2FE] text-[#0369A1] rounded-full text-[10px] font-bold uppercase tracking-wider">
//                   Agent
//                 </span>
//               </div>
//               <p className="text-[14px] font-medium text-[#475467]">{currentAgent?.agentName}</p>
              
//               <div className="flex items-center gap-6 text-[12px] text-gray-400 font-medium pt-1">
//                 <span>Email: <span className="text-gray-600">{currentAgent?.email}</span></span>
//                 <span>Created <span className="text-gray-600">{currentAgent?.createdAt}</span></span>
//                 <span>Phone: <span className="text-gray-600">{currentAgent?.phone}</span></span>
//               </div>
//             </div>
//           </div>

//           <button className="border border-gray-300 text-[#1D2939] text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
//             Add Reference
//           </button>
//         </div>
//       </div>

//       {/* SUB-TABS LINKS ROW MATRIX */}
//       <div className="flex items-center gap-8 border-b border-gray-100/80 px-2">
//         {["locations", "transactions", "kyc"].map((subTab) => (
//           <button
//             key={subTab}
//             onClick={() => handleSubTabChange(subTab)}
//             className={`pb-3 text-[13px] font-medium uppercase tracking-wider transition-all cursor-pointer bg-transparent border-none ${
//               activeSubTab === subTab
//                 ? "text-[#034EA2] border-b-2 border-[#034EA2] font-bold"
//                 : "text-gray-400 hover:text-gray-600"
//             }`}
//           >
//             {subTab}
//           </button>
//         ))}
//       </div>

//       {/* SUB-TAB CONTENTS RENDERING ENGINE */}
//       <div className="w-full">
//         {activeSubTab === "locations" && (
//           <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
//             {/* Left Locations Node Panel */}
//             <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm space-y-4">
//               <h3 className="text-[13px] font-bold text-gray-800">Locations</h3>
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="search"
//                   value={locationSearch}
//                   onChange={(e) => setLocationSearch(e.target.value)}
//                   className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none text-[#1D2939]"
//                 />
//                 <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30">
//                   <Image src="/images/search.svg" alt="" width={14} height={14} />
//                 </div>
//               </div>
//               <p className="text-[11px] text-gray-400">Showing <span className="font-bold text-gray-600">1</span> locations</p>
              
//               <div className="space-y-1">
//                 <div 
//                   onClick={() => setSelectedLocationId("loc_1")}
//                   className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
//                     selectedLocationId === "loc_1" ? "bg-[#F8FAFC] border-gray-200" : "bg-white border-transparent"
//                   }`}
//                 >
//                   <div className="w-8 h-8 rounded bg-[#F1F5F9] text-[#034EA2] flex items-center justify-center font-bold text-[11px] shrink-0">
//                     KE
//                   </div>
//                   <div>
//                     <span className="text-[13px] font-bold text-[#1D2939] block">{currentAgent?.name}</span>
//                     <span className="text-[10px] text-gray-400 block mt-0.5">Moganna Ibadan oyo state</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Location Dynamic Workspace Screen */}
//             <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm min-h-[300px] flex flex-col justify-center items-center p-6 w-full">
//               {selectedLocationId ? (
//                 <div className="w-full text-left p-4 border border-gray-100 rounded-xl space-y-3 max-w-xl">
//                   <h4 className="text-sm font-bold text-[#1D2939]">{currentAgent?.name}</h4>
//                   <div className="bg-[#F8FAFC] rounded-lg p-4 font-mono text-[12px] space-y-1.5 border border-gray-50 text-gray-700">
//                     <p><span className="text-gray-400 font-sans font-semibold mr-2">LOCATION:</span>Moganna Ibadan oyo state</p>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center flex flex-col items-center justify-center space-y-2">
//                   <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-100">
//                     <Image src="/images/file-text.svg" alt="" width={24} height={24} className="opacity-40" />
//                   </div>
//                   <h4 className="text-sm font-bold text-[#1D2939]">Please select a location</h4>
//                   <p className="text-xs text-gray-400">No location is selected</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {activeSubTab === "transactions" && (
//           <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 min-h-[350px] flex flex-col justify-center items-center">
//             <div className="text-center space-y-2 max-w-sm">
//               <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-100 inline-block">
//                 <Image src="/images/file-text.svg" alt="" width={24} height={24} className="opacity-40" />
//               </div>
//               <h4 className="text-sm font-bold text-[#1D2939]">No Transaction found</h4>
//               <p className="text-xs text-gray-400">You currently don't have any transactions.</p>
//             </div>
//           </div>
//         )}

//         {activeSubTab === "kyc" && (
//           <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 min-h-[350px] flex flex-col justify-center items-center">
//             <div className="text-center space-y-1">
//               <h4 className="text-sm font-bold text-[#1D2939]">KYC Verification Logs</h4>
//               <p className="text-xs text-gray-400">Compliance documentation records for {currentAgent?.name}.</p>
//             </div>
//           </div>
//         )}
//       </div>

//     </div>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";

// // --- MOCK DATA SET ---
// const MOCK_AGENTS = [
//   { 
//     id: "6a2f303df3162e8b31552f4c", 
//     name: "Kob Enterprise Limited", 
//     agentName: "Ayanfe Anutayo", 
//     code: "AGT-001",
//     email: "kingofboys1kob@gmail.com", 
//     phone: "+2349044314319", 
//     status: "Unverified", 
//     compliance: "No compliance", 
//     createdAt: "Jun 14, 2026, 11:50:37 PM", 
//     initials: "KE",
//     // Mock Locations attached to this specific Agent
//     locations: [
//       { id: "loc_1", name: "Kob Enterprise Limited", address: "Moganna Ibadan oyo state" },
//       { id: "loc_2", name: "KOB Branch 2", address: "Bodija Market, Ibadan" }
//     ]
//   },
//   { 
//     id: "agent_2", 
//     name: "Fatsco Enterprise", 
//     agentName: "Fatai Abdulmumeen", 
//     code: "AGT-042",
//     email: "fatai@fatsco.com", 
//     phone: "+2348011223344", 
//     status: "Unverified", 
//     compliance: "No compliance", 
//     createdAt: "Jun 6, 2026, 12:51:34 AM", 
//     initials: "FE",
//     locations: [
//       { id: "loc_3", name: "Fatsco Main Hub", address: "Lekki Phase 1, Lagos" }
//     ]
//   },
//   { 
//     id: "agent_3", 
//     name: "Alhaji Saidu", 
//     agentName: "Alhaji Abubakar", 
//     code: "AGT-099",
//     email: "saidu@saidu.com", 
//     phone: "+2349011223344", 
//     status: "Unverified", 
//     compliance: "No compliance", 
//     createdAt: "Jun 5, 2026, 10:13:30 AM", 
//     initials: "As",
//     locations: [
//       { id: "loc_4", name: "Saidu Ventures", address: "Wuse II, Abuja" }
//     ]
//   },
// ];

// export default function AgentsTab() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // 1. URL STATE PARSING
//   const tabParam = searchParams.get("tab") || "agents";
//   const isDetailView = tabParam.startsWith("agents/");
//   const selectedAgentId = isDetailView ? tabParam.split("/")[1] : null;
//   const activeSubTab = searchParams.get("subTab") || "locations";

//   // Operational Sub UI states
//   const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
//   const [agentSearch, setAgentSearch] = useState("");
//   const [locationSearch, setLocationSearch] = useState("");
//   const [isAgentActive, setIsAgentActive] = useState(false);

//   // Clear inner detail variables when navigating back out to main lists
//   useEffect(() => {
//     if (!isDetailView) {
//       setSelectedLocationId(null);
//       setLocationSearch("");
//     }
//   }, [isDetailView]);

//   // Find targeted agent profile
//   const currentAgent = MOCK_AGENTS.find(a => a.id === selectedAgentId);

//   // ==========================================
//   // WORKING AGENT MAIN SEARCH
//   // ==========================================
//   const filteredAgents = MOCK_AGENTS.filter(a => {
//     const query = agentSearch.toLowerCase().trim();
//     if (!query) return true;
//     return (
//       a.name.toLowerCase().includes(query) ||
//       a.agentName.toLowerCase().includes(query) ||
//       a.code.toLowerCase().includes(query)
//     );
//   });

//   // ==========================================
//   // WORKING SUB-TAB LOCATION SEARCH FILTER
//   // ==========================================
//   const agentLocations = currentAgent?.locations || [];
//   const filteredLocations = agentLocations.filter(loc => {
//     const query = locationSearch.toLowerCase().trim();
//     if (!query) return true;
//     return (
//       loc.name.toLowerCase().includes(query) ||
//       loc.address.toLowerCase().includes(query)
//     );
//   });

//   // Handle active details location data selection matching current click state
//   const currentSelectedLocation = agentLocations.find(l => l.id === selectedLocationId);

//   // 2. ROUTING ROUTINES
//   const handleSelectAgent = (agentId: string) => {
//     router.push(`/dashboard/insured?tab=agents/${agentId}&subTab=locations`);
//   };

//   const handleSubTabChange = (subTabValue: string) => {
//     if (selectedAgentId) {
//       router.push(`/dashboard/insured?tab=agents/${selectedAgentId}&subTab=${subTabValue}`);
//     }
//   };

//   /* ==========================================================================================
//      VIEW A: Main Dashboard Agents Grid Directory (?tab=agents)
//      ========================================================================================== */
//   if (!selectedAgentId) {
//     return (
//       <div className="space-y-6 animate-in fade-in duration-200">
//         <div className="flex justify-between items-center">
//           <p className="text-[13px] text-gray-400">
//             Showing <span className="text-[#1D2939] font-bold">{filteredAgents.length > 0 ? 1 : 0} - {filteredAgents.length}</span> of{" "}
//             <span className="text-[#1D2939] font-bold">{MOCK_AGENTS.length}</span> Agents
//           </p>

//           <div className="flex items-center gap-4">
//             <div className="relative w-[320px]">
//               <input
//                 type="text"
//                 placeholder="search agent name or code"
//                 value={agentSearch}
//                 onChange={(e) => setAgentSearch(e.target.value)}
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

//         {filteredAgents.length === 0 ? (
//           <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 text-gray-400 text-sm">
//             No agents match your search criteria.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredAgents.map((agent) => (
//               <div
//                 key={agent.id}
//                 onClick={() => handleSelectAgent(agent.id)}
//                 className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
//               >
//                 <div>
//                   <div className="flex justify-between items-start mb-4">
//                     <div className="w-12 h-12 bg-[#F8FAFC] rounded-lg flex items-center justify-center text-[#034EA2] font-bold text-base border border-gray-100">
//                       {agent.initials}
//                     </div>
//                     <div className="flex items-center gap-1.5">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#475467]"></span>
//                       <span className="text-[11px] font-semibold text-gray-400 tracking-wide uppercase">
//                         {agent.status}
//                       </span>
//                     </div>
//                   </div>

//                   <h3 className="text-[15px] font-bold text-[#1D2939] mb-0.5 group-hover:text-[#034EA2] transition-colors line-clamp-1">
//                     {agent.name}
//                   </h3>
                  
//                   <p className="text-[13px] text-gray-500 mb-1 font-medium">{agent.agentName}</p>
//                   <p className="text-[11px] text-gray-400 mb-4 font-normal">Code: {agent.code}</p>

//                   <div className="inline-block px-4 py-1.5 bg-[#EEF2F6] text-[#475467] text-[11px] font-bold rounded-md mb-6 uppercase tracking-wider">
//                     {agent.compliance}
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2 text-gray-400 pt-2 border-t border-gray-50">
//                   <Image src="/images/clock.svg" alt="" width={14} height={14} className="opacity-30" />
//                   <p className="text-[11px]">
//                     Created on: <span className="text-gray-500 font-medium">{agent.createdAt}</span>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }

//   /* ==========================================================================================
//      VIEW B: Agent Sub-Profile Container (?tab=agents/[id]&subTab=[locations|transactions|kyc])
//      ========================================================================================== */
//   return (
//     <div className="w-full space-y-6 animate-in fade-in duration-200">
      
//       {/* Profile Core Header Panel Summary */}
//       <div className="w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
//         <div className="flex justify-end items-center">
//           <div className="flex items-center gap-2.5">
//             <span className="text-xs text-gray-400 font-medium">
//               {isAgentActive ? "Active" : "Inactive"}
//             </span>
//             <button
//               onClick={() => setIsAgentActive(!isAgentActive)}
//               className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-all duration-200 ${
//                 isAgentActive ? "bg-[#E2E8F0] justify-end" : "bg-gray-200 justify-start"
//               }`}
//             >
//               <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-between items-start">
//           <div className="flex items-start gap-4">
//             <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center font-bold text-lg text-[#1D2939]">
//               {currentAgent?.initials}
//             </div>
//             <div className="space-y-1.5">
//               <div className="flex items-center gap-3">
//                 <h1 className="text-lg font-bold text-[#1D2939] tracking-tight">{currentAgent?.name}</h1>
//                 <span className="px-2.5 py-0.5 bg-[#E0F2FE] text-[#0369A1] rounded-full text-[10px] font-bold uppercase tracking-wider">
//                   Agent
//                 </span>
//               </div>
//               <p className="text-[14px] font-medium text-[#475467]">{currentAgent?.agentName}</p>
              
//               <div className="flex items-center gap-6 text-[12px] text-gray-400 font-medium pt-1">
//                 <span>Email: <span className="text-gray-600">{currentAgent?.email}</span></span>
//                 <span>Created <span className="text-gray-600">{currentAgent?.createdAt}</span></span>
//                 <span>Phone: <span className="text-gray-600">{currentAgent?.phone}</span></span>
//               </div>
//             </div>
//           </div>

//           <button className="border border-gray-300 text-[#1D2939] text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
//             Add Reference
//           </button>
//         </div>
//       </div>

//       {/* SUB-TABS LINKS ROW MATRIX */}
//       <div className="flex items-center gap-8 border-b border-gray-100/80 px-2">
//         {["locations", "transactions", "kyc"].map((subTab) => (
//           <button
//             key={subTab}
//             onClick={() => handleSubTabChange(subTab)}
//             className={`pb-3 text-[13px] font-medium uppercase tracking-wider transition-all cursor-pointer bg-transparent border-none ${
//               activeSubTab === subTab
//                 ? "text-[#034EA2] border-b-2 border-[#034EA2] font-bold"
//                 : "text-gray-400 hover:text-gray-600"
//             }`}
//           >
//             {subTab}
//           </button>
//         ))}
//       </div>

//       {/* SUB-TAB CONTENTS RENDERING ENGINE */}
//       <div className="w-full">
//         {activeSubTab === "locations" && (
//           <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
//             {/* Left Locations Node Panel */}
//             <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm space-y-4">
//               <h3 className="text-[13px] font-bold text-gray-800">Locations</h3>
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="search location or address"
//                   value={locationSearch}
//                   onChange={(e) => setLocationSearch(e.target.value)}
//                   className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none text-[#1D2939] placeholder-gray-400"
//                 />
//                 <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30">
//                   <Image src="/images/search.svg" alt="" width={14} height={14} />
//                 </div>
//               </div>
              
//               <p className="text-[11px] text-gray-400">
//                 Showing <span className="font-bold text-gray-600">{filteredLocations.length}</span> locations
//               </p>
              
//               <div className="space-y-1 max-h-[350px] overflow-y-auto">
//                 {filteredLocations.length === 0 ? (
//                   <p className="text-xs text-gray-400 text-center py-4">No matching locations found.</p>
//                 ) : (
//                   filteredLocations.map((loc) => (
//                     <div 
//                       key={loc.id}
//                       onClick={() => setSelectedLocationId(loc.id)}
//                       className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
//                         selectedLocationId === loc.id ? "bg-[#F8FAFC] border-gray-200" : "bg-white border-transparent hover:bg-gray-50"
//                       }`}
//                     >
//                       <div className="w-8 h-8 rounded bg-[#F1F5F9] text-[#034EA2] flex items-center justify-center font-bold text-[11px] shrink-0">
//                         {currentAgent?.initials}
//                       </div>
//                       <div>
//                         <span className="text-[13px] font-bold text-[#1D2939] block line-clamp-1">{loc.name}</span>
//                         <span className="text-[10px] text-gray-400 block mt-0.5 line-clamp-1">{loc.address}</span>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>

//             {/* Right Location Dynamic Workspace Screen */}
//             <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm min-h-[300px] flex flex-col justify-center items-center p-6 w-full">
//               {currentSelectedLocation ? (
//                 <div className="w-full text-left p-6 border border-gray-100 rounded-xl space-y-4 max-w-xl animate-in fade-in duration-150">
//                   <h4 className="text-base font-bold text-[#1D2939]">{currentSelectedLocation.name}</h4>
//                   <div className="bg-[#F8FAFC] rounded-lg p-4 text-[13px] space-y-2 border border-gray-50 text-gray-700">
//                     <p><span className="text-gray-400 font-semibold mr-3 text-xs tracking-wider">ADDRESS:</span> {currentSelectedLocation.address}</p>
//                     <p><span className="text-gray-400 font-semibold mr-3 text-xs tracking-wider">LOCATION ID:</span> {currentSelectedLocation.id}</p>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center flex flex-col items-center justify-center space-y-2">
//                   <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-100">
//                     <Image src="/images/file-text.svg" alt="" width={24} height={24} className="opacity-40" />
//                   </div>
//                   <h4 className="text-sm font-bold text-[#1D2939]">Please select a location</h4>
//                   <p className="text-xs text-gray-400">No location is selected</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {activeSubTab === "transactions" && (
//           <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 min-h-[350px] flex flex-col justify-center items-center">
//             <div className="text-center space-y-2 max-w-sm">
//               <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-100 inline-block">
//                 <Image src="/images/file-text.svg" alt="" width={24} height={24} className="opacity-40" />
//               </div>
//               <h4 className="text-sm font-bold text-[#1D2939]">No Transaction found</h4>
//               <p className="text-xs text-gray-400">You currently don't have any transactions.</p>
//             </div>
//           </div>
//         )}

//         {activeSubTab === "kyc" && (
//           <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 min-h-[350px] flex flex-col justify-center items-center">
//             <div className="text-center space-y-1">
//               <h4 className="text-sm font-bold text-[#1D2939]">KYC Verification Logs</h4>
//               <p className="text-xs text-gray-400">Compliance documentation records for {currentAgent?.name}.</p>
//             </div>
//           </div>
//         )}
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

export default function AgentsTab() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get("tab") || "agents";
  const isDetailView = tabParam.startsWith("agents/");
  const selectedAgentId = isDetailView ? tabParam.split("/")[1] : null;
  const activeSubTab = searchParams.get("subTab") || "locations";

  const [agents, setAgents] = useState<any[]>([]);
  const [locations, setLocations] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [agentSearch, setAgentSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [isAgentActive, setIsAgentActive] = useState(false);
  const [loadingAgents, setLoadingAgents] = useState(true);
  const [loadingLocations, setLoadingLocations] = useState(false);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const [currentPage] = useState(0);
  const pageSize = 25;

  // Fetch all agents on mount
  useEffect(() => {
    const fetchAgents = async () => {
      setLoadingAgents(true);
      try {
        const res = await insuredService.getBusinessPOSorLocations(currentPage, pageSize, "Agent", "");
        if ((res as any)?.data) {
          setAgents(Array.isArray((res as any).data?.data) ? (res as any).data.data : []);
        }
      } catch (err) {
        console.error("Failed to fetch agents:", err);
      } finally {
        setLoadingAgents(false);
      }
    };

    fetchAgents();
  }, []);

  // Fetch locations when agent is selected and subTab is locations
  useEffect(() => {
    if (!selectedAgentId || activeSubTab !== "locations") return;

    const fetchLocations = async () => {
      setLoadingLocations(true);
      setLocations([]);
      setSelectedLocationId(null);
      try {
        const currentAgent = agents.find((a) => a._id === selectedAgentId);
        const membershipId = currentAgent?.membership?._id;
        if (!membershipId) return;

        const res = await insuredService.getLocations(membershipId, currentPage, pageSize);
        if ((res as any)?.data) {
          setLocations(Array.isArray((res as any).data?.data) ? (res as any).data.data : []);
        }
      } catch (err) {
        console.error("Failed to fetch locations:", err);
      } finally {
        setLoadingLocations(false);
      }
    };

    fetchLocations();
  }, [selectedAgentId, activeSubTab, agents]);

  // Fetch transactions when agent is selected and subTab is transactions
  useEffect(() => {
    if (!selectedAgentId || activeSubTab !== "transactions") return;

    const fetchTransactions = async () => {
      setLoadingTransactions(true);
      setTransactions([]);
      try {
        const currentAgent = agents.find((a) => a._id === selectedAgentId);
        const membershipId = currentAgent?.membership?._id;

        const res = await insuredService.getInsuredTransactions(
          currentPage, pageSize, "", "", "", "", membershipId || ""
        );
        if ((res as any)?.data) {
          setTransactions(Array.isArray((res as any).data?.data) ? (res as any).data.data : []);
        }
      } catch (err) {
        console.error("Failed to fetch transactions:", err);
      } finally {
        setLoadingTransactions(false);
      }
    };

    fetchTransactions();
  }, [selectedAgentId, activeSubTab, agents]);

  // Clear on back navigation
  useEffect(() => {
    if (!isDetailView) {
      setSelectedLocationId(null);
      setLocationSearch("");
      setLocations([]);
      setTransactions([]);
    }
  }, [isDetailView]);

  const currentAgent = agents.find((a) => a._id === selectedAgentId);

  const getInitials = (text: string) =>
    text?.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase() || "??";

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true,
    });
  };

  const filteredAgents = agents.filter((a) => {
    const query = agentSearch.toLowerCase().trim();
    if (!query) return true;
    return (
      (a.company_name || "").toLowerCase().includes(query) ||
      (`${a.first_name} ${a.last_name}`).toLowerCase().includes(query) ||
      (a.referral || "").toLowerCase().includes(query)
    );
  });

  const filteredLocations = locations.filter((loc) => {
    const query = locationSearch.toLowerCase().trim();
    if (!query) return true;
    return (
      (loc.name || "").toLowerCase().includes(query) ||
      (loc.address || "").toLowerCase().includes(query)
    );
  });

  const currentSelectedLocation = locations.find((l) => l._id === selectedLocationId);

  const handleSelectAgent = (agentId: string) => {
    router.push(`/dashboard/insured?tab=agents/${agentId}&subTab=locations`);
  };

  const handleSubTabChange = (subTabValue: string) => {
    if (selectedAgentId) {
      router.push(`/dashboard/insured?tab=agents/${selectedAgentId}&subTab=${subTabValue}`);
    }
  };

  /* ==========================================================================================
     VIEW A: Main Agents Grid
  ========================================================================================== */
  if (!selectedAgentId) {
    return (
      <div className="space-y-6 animate-in fade-in duration-200">
        <div className="flex justify-between items-center">
          <p className="text-[13px] text-gray-400">
            Showing{" "}
            <span className="text-[#1D2939] font-bold">
              {filteredAgents.length > 0 ? 1 : 0} - {filteredAgents.length}
            </span>{" "}
            of{" "}
            <span className="text-[#1D2939] font-bold">{agents.length}</span> Agents
          </p>

          <div className="flex items-center gap-4">
            <div className="relative w-[320px]">
              <input
                type="text"
                placeholder="search agent name or code"
                value={agentSearch}
                onChange={(e) => setAgentSearch(e.target.value)}
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

        {loadingAgents ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-50 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : filteredAgents.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 text-gray-400 text-sm">
            No agents found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent) => (
              <div
                key={agent._id}
                onClick={() => handleSelectAgent(agent._id)}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-[#F8FAFC] rounded-lg flex items-center justify-center text-[#034EA2] font-bold text-base border border-gray-100">
                      {getInitials(agent.company_name || agent.first_name)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#475467]"></span>
                      <span className="text-[11px] font-semibold text-gray-400 tracking-wide uppercase">
                        {agent.blocked ? "Blocked" : agent.email_verified ? "Verified" : "Unverified"}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-[15px] font-bold text-[#1D2939] mb-0.5 group-hover:text-[#034EA2] transition-colors line-clamp-1">
                    {agent.company_name || `${agent.first_name} ${agent.last_name}`}
                  </h3>

                  <p className="text-[13px] text-gray-500 mb-1 font-medium">
                    {`${agent.first_name} ${agent.last_name}`.trim()}
                  </p>
                  <p className="text-[11px] text-gray-400 mb-4 font-normal">
                    Ref: {agent.referral || "—"}
                  </p>

                  <div className="inline-block px-4 py-1.5 bg-[#EEF2F6] text-[#475467] text-[11px] font-bold rounded-md mb-6 uppercase tracking-wider">
                    {agent.membership?.business?.activationReference || "No compliance"}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-400 pt-2 border-t border-gray-50">
                  <Image src="/images/clock.svg" alt="" width={14} height={14} className="opacity-30" />
                  <p className="text-[11px]">
                    Created on: <span className="text-gray-500 font-medium">{formatDate(agent.createdAt)}</span>
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
     VIEW B: Agent Detail View
  ========================================================================================== */
  return (
    <div className="w-full space-y-6 animate-in fade-in duration-200">

      {/* Profile Header */}
      <div className="w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex justify-end items-center">
          <div className="flex items-center gap-2.5">
            <span className="text-xs text-gray-400 font-medium">
              {isAgentActive ? "Active" : "Inactive"}
            </span>
            <button
              onClick={() => setIsAgentActive(!isAgentActive)}
              className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-all duration-200 ${
                isAgentActive ? "bg-[#E2E8F0] justify-end" : "bg-gray-200 justify-start"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center font-bold text-lg text-[#1D2939]">
              {getInitials(currentAgent?.company_name || currentAgent?.first_name || "")}
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-bold text-[#1D2939] tracking-tight">
                  {currentAgent?.company_name || `${currentAgent?.first_name} ${currentAgent?.last_name}`}
                </h1>
                <span className="px-2.5 py-0.5 bg-[#E0F2FE] text-[#0369A1] rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Agent
                </span>
              </div>
              <p className="text-[14px] font-medium text-[#475467]">
                {`${currentAgent?.first_name} ${currentAgent?.last_name}`.trim()}
              </p>
              <div className="flex items-center gap-6 text-[12px] text-gray-400 font-medium pt-1">
                <span>Email: <span className="text-gray-600">{currentAgent?.email}</span></span>
                <span>Created <span className="text-gray-600">{formatDate(currentAgent?.createdAt)}</span></span>
                <span>Phone: <span className="text-gray-600">{currentAgent?.phone_number}</span></span>
              </div>
            </div>
          </div>

          <button className="border border-gray-300 text-[#1D2939] text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
            Add Reference
          </button>
        </div>
      </div>

      {/* Sub-tabs */}
      <div className="flex items-center gap-8 border-b border-gray-100/80 px-2">
        {["locations", "transactions", "kyc"].map((subTab) => (
          <button
            key={subTab}
            onClick={() => handleSubTabChange(subTab)}
            className={`pb-3 text-[13px] font-medium uppercase tracking-wider transition-all cursor-pointer bg-transparent border-none ${
              activeSubTab === subTab
                ? "text-[#034EA2] border-b-2 border-[#034EA2] font-bold"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {subTab}
          </button>
        ))}
      </div>

      {/* Sub-tab Content */}
      <div className="w-full">

        {/* LOCATIONS */}
        {activeSubTab === "locations" && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm space-y-4">
              <h3 className="text-[13px] font-bold text-gray-800">Locations</h3>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="search location or address"
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                  className="w-full bg-[#F2F4F7] border-none rounded-lg py-2.5 pl-4 pr-10 text-[13px] outline-none text-[#1D2939] placeholder-gray-400"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30">
                  <Image src="/images/search.svg" alt="" width={14} height={14} />
                </div>
              </div>

              <p className="text-[11px] text-gray-400">
                Showing <span className="font-bold text-gray-600">{filteredLocations.length}</span> locations
              </p>

              <div className="space-y-1 max-h-[350px] overflow-y-auto">
                {loadingLocations ? (
                  <div className="space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-12 bg-gray-100 rounded-xl animate-pulse" />
                    ))}
                  </div>
                ) : filteredLocations.length === 0 ? (
                  <p className="text-xs text-gray-400 text-center py-4">No matching locations found.</p>
                ) : (
                  filteredLocations.map((loc) => (
                    <div
                      key={loc._id}
                      onClick={() => setSelectedLocationId(loc._id)}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        selectedLocationId === loc._id ? "bg-[#F8FAFC] border-gray-200" : "bg-white border-transparent hover:bg-gray-50"
                      }`}
                    >
                      <div className="w-8 h-8 rounded bg-[#F1F5F9] text-[#034EA2] flex items-center justify-center font-bold text-[11px] shrink-0">
                        {getInitials(loc.name || "")}
                      </div>
                      <div>
                        <span className="text-[13px] font-bold text-[#1D2939] block line-clamp-1">{loc.name}</span>
                        <span className="text-[10px] text-gray-400 block mt-0.5 line-clamp-1">{loc.address}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm min-h-[300px] flex flex-col justify-center items-center p-6 w-full">
              {currentSelectedLocation ? (
                <div className="w-full text-left p-6 border border-gray-100 rounded-xl space-y-4 max-w-xl animate-in fade-in duration-150">
                  <h4 className="text-base font-bold text-[#1D2939]">{currentSelectedLocation.name}</h4>
                  <div className="bg-[#F8FAFC] rounded-lg p-4 text-[13px] space-y-2 border border-gray-50 text-gray-700">
                    <p><span className="text-gray-400 font-semibold mr-3 text-xs tracking-wider">ADDRESS:</span>{currentSelectedLocation.address}</p>
                    <p><span className="text-gray-400 font-semibold mr-3 text-xs tracking-wider">ACCT NAME:</span>{currentSelectedLocation.sales_point_account?.account_name}</p>
                    <p><span className="text-gray-400 font-semibold mr-3 text-xs tracking-wider">ACCT NUM:</span>{currentSelectedLocation.sales_point_account?.account_number}</p>
                    <p><span className="text-gray-400 font-semibold mr-3 text-xs tracking-wider">SETTLEMENT:</span>{currentSelectedLocation.settlement_type}</p>
                    <p><span className="text-gray-400 font-semibold mr-3 text-xs tracking-wider">LOCATION ID:</span>{currentSelectedLocation._id}</p>
                  </div>
                  <div className="text-[11px] text-gray-400">
                    Created on {formatDate(currentSelectedLocation.createdAt)}
                  </div>
                </div>
              ) : (
                <div className="text-center flex flex-col items-center justify-center space-y-2">
                  <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-100">
                    <Image src="/images/file-text.svg" alt="" width={24} height={24} className="opacity-40" />
                  </div>
                  <h4 className="text-sm font-bold text-[#1D2939]">Please select a location</h4>
                  <p className="text-xs text-gray-400">No location is selected</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TRANSACTIONS */}
        {activeSubTab === "transactions" && (
          <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {loadingTransactions ? (
              <div className="animate-pulse p-6 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-100 rounded-xl" />
                ))}
              </div>
            ) : transactions.length === 0 ? (
              <div className="p-8 min-h-[350px] flex flex-col justify-center items-center">
                <div className="text-center space-y-2 max-w-sm">
                  <div className="p-3 bg-[#F8FAFC] rounded-xl border border-gray-100 inline-block">
                    <Image src="/images/file-text.svg" alt="" width={24} height={24} className="opacity-40" />
                  </div>
                  <h4 className="text-sm font-bold text-[#1D2939]">No transactions found</h4>
                  <p className="text-xs text-gray-400">No transactions for this agent.</p>
                </div>
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#FCFCFD] border-b border-gray-100">
                  <tr>
                    {["COMPANY", "TRX ID", "CHANNEL", "AMOUNT", "TYPE", "STATUS", "DATE"].map((h) => (
                      <th key={h} className="px-6 py-4 text-[11px] font-bold text-[#475467] tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {transactions.map((trx) => (
                    <tr key={trx._id} className="hover:bg-[#F9FAFB]/60 transition-colors">
                      <td className="px-6 py-4 text-[13px] font-bold text-[#1D2939]">
                        {trx.user?.company_name || `${trx.user?.first_name} ${trx.user?.last_name}`}
                      </td>
                      <td className="px-6 py-4 text-[12px] text-[#475467] max-w-[140px] truncate">{trx.transaction_id}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                          trx.paid_channel === "Card" ? "bg-[#EFF6FF] text-[#1E40AF]" : "bg-[#F0FDF4] text-[#166534]"
                        }`}>
                          {trx.paid_channel?.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[13px] font-bold text-[#1D2939]">
                        ₦{parseFloat(trx.amount).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4 text-[12px] text-[#475467]">{trx.transaction_type}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                          trx.status === "Success" ? "bg-[#ECFDF5] text-[#065F46]" : "bg-[#FEF2F2] text-[#991B1B]"
                        }`}>
                          {trx.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[11px] text-[#98A2B3]">{formatDate(trx.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* KYC */}
        {activeSubTab === "kyc" && (
          <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 min-h-[350px] flex flex-col justify-center items-center">
            <div className="text-center space-y-1">
              <h4 className="text-sm font-bold text-[#1D2939]">KYC Verification Logs</h4>
              <p className="text-xs text-gray-400">
                Compliance documentation records for{" "}
                {currentAgent?.company_name || `${currentAgent?.first_name} ${currentAgent?.last_name}`}.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}