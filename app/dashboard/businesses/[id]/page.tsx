// // "use client";
// // import React, { useState, use, useEffect } from "react";
// // import Link from "next/link";
// // import Image from "next/image";

// // // 1. Reusable Input Component
// // const FormInput = ({ label, value, type = "text", readonly = false }: any) => (
// //   <div className="flex-1">
// //     <label className="text-[12px] font-medium text-gray-400 mb-2 block">
// //       {label}
// //     </label>
// //     <div className="relative">
// //       <input
// //         type={type}
// //         defaultValue={value}
// //         readOnly={readonly}
// //         className={`w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] outline-none focus:border-[#034EA2] transition-colors ${
// //           readonly ? "bg-gray-50/50 cursor-not-allowed" : "bg-white"
// //         }`}
// //       />
// //       {label === "Registration Country" && (
// //         <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
// //           <Image
// //             src="/images/chevron-down1.svg"
// //             alt=""
// //             width={12}
// //             height={12}
// //           />
// //         </div>
// //       )}
// //     </div>
// //   </div>
// // );

// // export default function BusinessDetailsPage({
// //   params,
// // }: {
// //   params: Promise<{ id: string }>;
// // }) {
// //   const resolvedParams = use(params);
// //   const id = resolvedParams.id;

// //   // 2. State Management
// //   const [business, setBusiness] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [activePrimaryTab, setActivePrimaryTab] = useState("Business Details");
// //   const [activeSecondaryTab, setActiveSecondaryTab] =
// //     useState("Business Details");

// //   // 3. Complete Tab List Restored
// //   const primaryTabs = [
// //     "Business Details",
// //     "Customers",
// //     "Accounts",
// //     "Cards",
// //     "Transactions",
// //     "Authorizations",
// //     "Disputes",
// //     "KYC",
// //     "Webhook Notifications",
// //     "API Logs",
// //     "Actions",
// //     "Notifications",
// //   ];

// //   useEffect(() => {
// //     const fetchBusiness = async () => {
// //       setLoading(true);
// //       try {
// //         const mockDatabase: Record<string, any> = {
// //           "69c85287905100a0834a091a": {
// //             initials: "BS",
// //             name: "black solutions",
// //             type: "Developer",
// //             date: "Mar 29, 2026",
// //             email: "info@blacksolutions.com",
// //             country: "Nigeria",
// //           },
// //           "vt-tech-2": {
// //             initials: "VT",
// //             name: "versengtrade technologies hub ltd",
// //             type: "Developer",
// //             date: "Mar 28, 2026",
// //             email: "verse@versetechnologies.org",
// //             country: "Nigeria",
// //           },
// //         };

// //         await new Promise((resolve) => setTimeout(resolve, 300));
// //         setBusiness(
// //           mockDatabase[id] || mockDatabase["69c85287905100a0834a091a"],
// //         );
// //       } catch (err) {
// //         console.error("Fetch error:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchBusiness();
// //   }, [id]);

// //   if (loading)
// //     return (
// //       <div className="p-20 text-center flex flex-col items-center gap-4">
// //         <div className="w-8 h-8 border-4 border-[#034EA2] border-t-transparent rounded-full animate-spin"></div>
// //         <p className="text-gray-400 text-sm">Fetching business details...</p>
// //       </div>
// //     );

// //   if (!business)
// //     return <div className="p-20 text-center">Business record not found.</div>;

// //   return (
// //     // REMOVED p-8 and added pt-4 to pull content up
// //     <div className=" animate-in fade-in duration-500 max-w-[1600px] mx-auto">
// //       {/* SECTION 1: BUSINESS PROFILE HEADER */}
// //       <div className="flex items-start justify-between mb-8">
// //         <div className="flex items-center gap-5">
// //           <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-[#1D2939] font-bold text-2xl bg-white shadow-sm uppercase">
// //             {business.initials}
// //           </div>
// //           <div>
// //             <div className="flex items-center gap-3">
// //               <h1 className="text-xl font-bold text-[#1D2939] lowercase">
// //                 {business.name}
// //               </h1>
// //               <span className="px-2 py-0.5 bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold rounded uppercase">
// //                 {business.type}
// //               </span>
// //             </div>
// //             <p className="text-[12px] text-gray-400 mt-0.5">
// //               Created {business.date}
// //             </p>
// //           </div>
// //         </div>

// //         {/* SECTION 2: STACKED ACTIONS (Update above Active) */}
// //         <div className="flex flex-col items-end gap-3">
// //           <button className="px-6 py-2 border border-gray-200 rounded-xl text-[#1D2939] font-bold text-[12px] hover:bg-gray-50 shadow-sm transition-all">
// //             Update Business
// //           </button>
// //           <div className="flex items-center gap-3">
// //             <div className="flex items-center gap-2">
// //               <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
// //               <span className="text-[12px] font-bold text-[#1D2939]">
// //                 Active
// //               </span>
// //             </div>
// //             <div className="w-9 h-4.5 rounded-full bg-[#032345] relative cursor-pointer">
// //               <div className="w-3 h-3 rounded-full bg-white absolute right-1 top-[3px] shadow-sm"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* SECTION 3: PRIMARY TABS (Horizontal Scroll enabled) */}
// //       <div className="border-b border-gray-100 mb-8">
// //         <div className="flex items-center gap-8 min-w-max">
// //           {primaryTabs.map((tab) => (
// //             <button
// //               key={tab}
// //               onClick={() => setActivePrimaryTab(tab)}
// //               className={`pb-4 text-[13px] font-bold border-b-2 transition-all whitespace-nowrap ${
// //                 activePrimaryTab === tab
// //                   ? "text-[#034EA2] border-[#034EA2]"
// //                   : "text-gray-400 border-transparent hover:text-gray-600"
// //               }`}
// //             >
// //               {tab}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* SECTION 4: MAIN CONTENT CARD */}
// //       <div className="bg-white rounded-2xl border border-gray-50 shadow-sm p-10 min-h-[400px]">
// //         {activePrimaryTab === "Business Details" ? (
// //           <div className="space-y-8">
// //             <div className="flex items-center gap-8 border-b border-gray-50">
// //               {["Business Details", "Business Name Update"].map((sub) => (
// //                 <button
// //                   key={sub}
// //                   onClick={() => setActiveSecondaryTab(sub)}
// //                   className={`pb-4 text-[13px] font-bold border-b-2 transition-all ${
// //                     activeSecondaryTab === sub
// //                       ? "text-[#1D2939] border-[#1D2939]"
// //                       : "text-gray-400 border-transparent"
// //                   }`}
// //                 >
// //                   {sub}
// //                 </button>
// //               ))}
// //             </div>

// //             {activeSecondaryTab === "Business Details" ? (
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl pt-4">
// //                 <FormInput
// //                   label="Registration Country"
// //                   value={business.country}
// //                 />
// //                 <FormInput
// //                   label="Email Address"
// //                   value={business.email}
// //                   readonly={true}
// //                 />
// //               </div>
// //             ) : (
// //               <div className="pt-4 space-y-6 max-w-lg">
// //                 <FormInput label="Business Name" value={business.name} />
// //                 <button className="px-8 py-3.5 bg-[#032345] text-white rounded-xl font-bold text-[13px] hover:bg-black transition-colors">
// //                   Update Name
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="p-20 text-center text-gray-400">
// //             Records for{" "}
// //             <span className="font-bold text-gray-600">{activePrimaryTab}</span>{" "}
// //             will be fetched from the backend.
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";
// // import React, { useState, use, useEffect } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import BusinessInfoTab from "@/app/components/business-tabs/BusinessInfoTab";
// // import CustomersTab from "@/app/components/business-tabs/CustomersTab";
// // import AccountsTab from "@/app/components/business-tabs/AccountTab";

// // export default function BusinessDetailsPage({
// //   params,
// // }: {
// //   params: Promise<{ id: string }>;
// // }) {
// //   const resolvedParams = use(params);
// //   const id = resolvedParams.id;

// //   const [business, setBusiness] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [activeTab, setActiveTab] = useState("Business Details");

// //   const primaryTabs = [
// //     "Business Details",
// //     "Customers",
// //     "Accounts",
// //     "Cards",
// //     "Transactions",
// //     "Authorizations",
// //     "Disputes",
// //     "KYC",
// //     "Webhook Notifications",
// //     "API Logs",
// //     "Actions",
// //     "Notifications",
// //   ];

// //   useEffect(() => {
// //     // This replicates the data from your screenshots
// //     const fetchBusiness = async () => {
// //       setLoading(true);
// //       const mockData = {
// //         initials: "VT",
// //         name: "versengtrade technologies hub ltd",
// //         type: "Business", // Restored "Business" badge type
// //         category: "Developer",
// //         date: "Apr 26, 2025, 1:31:17 AM",
// //       };
// //       setBusiness(mockData);
// //       setLoading(false);
// //     };
// //     fetchBusiness();
// //   }, [id]);

// //   if (loading) return <div className="p-20 text-center">Loading...</div>;

// //   return (
// //     <div className=" animate-in fade-in duration-500 max-w-[1600px] mx-auto">
// //       {/* 2. PROFILE HEADER */}
// //       <div className="flex items-start justify-between mb-8">
// //         <div className="flex items-center gap-5">
// //           <div className="w-20 h-20 rounded-full border border-gray-100 flex items-center justify-center text-[#1D2939] font-bold text-2xl bg-white shadow-sm uppercase">
// //             {business.initials}
// //           </div>
// //           <div>
// //             <div className="flex items-center gap-3">
// //               <h1 className="text-xl font-bold text-[#1D2939]">
// //                 {business.name}
// //               </h1>
// //               {/* RESTORED BUSINESS BADGE */}
// //               <span className="px-2 py-0.5 bg-[#EBF5FF] text-[#034EA2] text-[10px] font-bold rounded uppercase">
// //                 {business.type}
// //               </span>
// //             </div>
// //             <p className="text-[12px] text-gray-400 mt-1">
// //               Created {business.date}
// //             </p>
// //           </div>
// //         </div>

// //         <div className="flex flex-col items-end gap-3">
// //           <button className="px-6 py-2 border border-gray-200 rounded-xl text-[#1D2939] font-bold text-[12px] hover:bg-gray-50 shadow-sm transition-all">
// //             Update Business
// //           </button>
// //           <div className="flex items-center gap-3">
// //             <div className="w-9 h-4.5 rounded-full bg-[#032345] relative cursor-pointer shadow-inner">
// //               <div className="w-3 h-3 rounded-full bg-white absolute right-1 top-[3px]"></div>
// //             </div>
// //             <span className="text-[12px] font-bold text-[#1D2939]">Active</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* 3. TABS NAVIGATION */}
// //       <div className="border-b border-gray-100 overflow-x-auto no-scrollbar mb-8">
// //         <div className="flex items-center gap-8 min-w-max">
// //           {primaryTabs.map((tab) => (
// //             <button
// //               key={tab}
// //               onClick={() => setActiveTab(tab)}
// //               className={`pb-4 text-[13px] font-bold border-b-2 transition-all whitespace-nowrap ${
// //                 activeTab === tab
// //                   ? "text-[#034EA2] border-[#034EA2]"
// //                   : "text-gray-400 border-transparent hover:text-gray-600"
// //               }`}
// //             >
// //               {tab}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* 4. DYNAMIC CONTENT FROM COMPONENTS folder */}
// //       <div>
// //         {activeTab === "Business Details" && (
// //           <div className="bg-white rounded-2xl border border-gray-50 shadow-sm p-10">
// //             <BusinessInfoTab />
// //           </div>
// //         )}
// //         {activeTab === "Customers" && <CustomersTab />}
// //         {activeTab === "Accounts" && <AccountsTab />}

// //         {!["Business Details", "Customers", "Accounts"].includes(activeTab) && (
// //           <div className="p-20 text-center text-gray-400 bg-white rounded-2xl border border-gray-50">
// //             Content for{" "}
// //             <span className="font-bold text-gray-600">{activeTab}</span> will be
// //             fetched from the backend.
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";
// // import React, { useState, use, useEffect } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import BusinessInfoTab from "@/app/components/business-tabs/BusinessInfoTab";
// // import CustomersTab from "@/app/components/business-tabs/CustomersTab";
// // import AccountsTab from "@/app/components/business-tabs/AccountTab";
// // import CardsTab from "@/app/components/business-tabs/CardsTab";
// // import TransactionsTab from "@/app/components/business-tabs/TransactionsTab";
// // import AuthorizationsTab from "@/app/components/business-tabs/AuthorizationsTab";
// // import DisputesTab from "@/app/components/business-tabs/DisputesTab";

// // // Reusable Input Component
// // const FormInput = ({
// //   label,
// //   value,
// //   type = "text",
// //   readonly = false,
// //   onChange,
// // }: any) => (
// //   <div className="flex-1">
// //     <label className="text-[12px] font-medium text-gray-400 mb-2 block">
// //       {label}
// //     </label>
// //     <div className="relative">
// //       <input
// //         type={type}
// //         value={value || ""}
// //         readOnly={readonly || !onChange}
// //         onChange={onChange}
// //         className={`w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] outline-none focus:border-[#034EA2] transition-colors ${
// //           readonly ? "bg-gray-50/50 cursor-not-allowed" : "bg-white"
// //         }`}
// //       />
// //     </div>
// //   </div>
// // );

// // export default function BusinessDetailsPage({
// //   params,
// // }: {
// //   params: Promise<{ id: string }>;
// // }) {
// //   const resolvedParams = use(params);
// //   const id = resolvedParams.id.toLowerCase();

// //   const [business, setBusiness] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);

// //   // Tabs State
// //   const [activePrimaryTab, setActivePrimaryTab] = useState("Business Details");
// //   const [activeSecondaryTab, setActiveSecondaryTab] =
// //     useState("Business Details");

// //   // The 12 Primary Tabs from your UI
// //   const primaryTabs = [
// //     "Business Details",
// //     "Customers",
// //     "Accounts",
// //     "Cards",
// //     "Transactions",
// //     "Authorizations",
// //     "Disputes",
// //     "KYC",
// //     "Webhook Notifications",
// //     "API Logs",
// //     "Actions",
// //     "Notifications",
// //   ];

// //   useEffect(() => {
// //     const fetchBusiness = async () => {
// //       setLoading(true);

// //       const mockDatabase = [
// //         {
// //           idMatch: "69c85287",
// //           initials: "BS",
// //           name: "black solutions",
// //           type: "DEVELOPER",
// //           date: "Mar 29, 2026, 9:37:17 AM",
// //           email: "info@blacksolutions.com",
// //           country: "Nigeria",
// //         },
// //         {
// //           idMatch: "vt-tech", //
// //           initials: "VT",
// //           name: "versengtrade technologies hub ltd",
// //           type: "DEVELOPER",
// //           date: "Mar 28, 2026, 11:13:27 PM",
// //           email: "verse@versetechnologies.org",
// //           country: "Nigeria",
// //         },
// //         {
// //           idMatch: "greenery",
// //           initials: "GC",
// //           name: "Greenery Cooperative",
// //           type: "DEVELOPER",
// //           date: "Mar 28, 2026, 6:23:34 PM",
// //           email: "contact@greenery.coop",
// //           country: "Nigeria",
// //         },
// //         {
// //           idMatch: "secured",
// //           initials: "S",
// //           name: "Securedwallet",
// //           type: "DEVELOPER",
// //           date: "Mar 28, 2026, 5:47:18 PM",
// //           email: "support@securedwallet.io",
// //           country: "Nigeria",
// //         },
// //         {
// //           idMatch: "affman",
// //           initials: "A",
// //           name: "Affman",
// //           type: "DEVELOPER",
// //           date: "Mar 28, 2026, 4:38:06 AM",
// //           email: "admin@affman.com",
// //           country: "Nigeria",
// //         },

// //         {
// //           idMatch: "emey",
// //           initials: "EK",
// //           name: "Emey Kuvala",
// //           type: "CONSUMER",
// //           date: "Mar 27, 2026, 8:16:19 PM",
// //           email: "contact@emeykuvala.com",
// //           country: "Nigeria",
// //         },
// //       ];

// //       // Logic to find the business based on the URL ID
// //       const found = mockDatabase.find((item) => id.includes(item.idMatch));
// //       setBusiness(
// //         found || {
// //           initials: "??",
// //           name: `ID: ${id.substring(0, 8)}`,
// //           type: "DEVELOPER",
// //           date: "New Entry",
// //           email: "pending@sudo.africa",
// //           country: "Nigeria",
// //         },
// //       );

// //       setLoading(false);
// //     };

// //     fetchBusiness();
// //   }, [id]);

// //   if (loading)
// //     return (
// //       <div className="p-20 text-center animate-pulse">Loading Details...</div>
// //     );

// //   return (
// //     <div className="animate-in fade-in duration-500 max-w-[1600px] mx-auto">
// //       {/* PROFILE HEADER */}
// //       <div className="flex items-start justify-between mb-8">
// //         <div className="flex items-center gap-5">
// //           <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-[#1D2939] font-bold text-2xl bg-white shadow-sm uppercase">
// //             {business.initials}
// //           </div>
// //           <div>
// //             <div className="flex items-center gap-3">
// //               <h1 className="text-xl font-bold text-[#1D2939]">
// //                 {business.name}
// //               </h1>
// //               <span className="px-2 py-0.5 bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold rounded uppercase">
// //                 {business.type}
// //               </span>
// //             </div>
// //             <p className="text-[12px] text-gray-400 mt-0.5">
// //               Created {business.date}
// //             </p>
// //           </div>
// //         </div>

// //         {/* ACTIONS & TOGGLE */}
// //         <div className="flex flex-col items-end gap-3">
// //           <button className="px-6 py-2 border border-gray-200 rounded-xl text-[#1D2939] font-bold text-[12px] hover:bg-gray-50 shadow-sm transition-all">
// //             Update Business
// //           </button>
// //           <div className="flex items-center gap-3">
// //             <div className="flex items-center gap-2">
// //               <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
// //               <span className="text-[12px] font-bold text-[#1D2939]">
// //                 Active
// //               </span>
// //             </div>
// //             <div className="w-9 h-4.5 rounded-full bg-[#032345] relative cursor-pointer shadow-inner">
// //               <div className="w-3 h-3 rounded-full bg-white absolute right-1 top-[3px]"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* PRIMARY TABS */}
// //       <div className="border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
// //         <div className="flex items-center gap-8 min-w-max">
// //           {primaryTabs.map((tab) => (
// //             <button
// //               key={tab}
// //               onClick={() => setActivePrimaryTab(tab)}
// //               className={`pb-4 text-[13px] font-bold border-b-2 transition-all whitespace-nowrap ${
// //                 activePrimaryTab === tab
// //                   ? "text-[#034EA2] border-[#034EA2]"
// //                   : "text-gray-400 border-transparent hover:text-gray-600"
// //               }`}
// //             >
// //               {tab}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* CONTENT CARD */}
// //       <div className="bg-white rounded-2xl border border-gray-50 shadow-sm p-10 min-h-[400px]">
// //         {activePrimaryTab === "Business Details" ? (
// //           /* All Business logic is now hidden inside this one component */
// //           <BusinessInfoTab business={business} setBusiness={setBusiness} />
// //         ) : activePrimaryTab === "Customers" ? (
// //           <CustomersTab />
// //         ) : activePrimaryTab === "Accounts" ? (
// //           <AccountsTab />
// //         ) : activePrimaryTab === "Cards" ? (
// //           <CardsTab />
// //         ) : activePrimaryTab === "Transactions" ? (
// //           <TransactionsTab />
// //         ) : activePrimaryTab === "Authorizations" ? (
// //           <AuthorizationsTab />
// //         ) : activePrimaryTab === "Disputes" ? (
// //           <DisputesTab />
// //         ) : (
// //           <div className="p-20 text-center text-gray-400">
// //             Records for{" "}
// //             <span className="font-bold text-gray-600">{activePrimaryTab}</span>{" "}
// //             will be fetched from the backend.
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }



// "use client";
// import React, { useState, use, useEffect } from "react";
// import { useRouter } from "next/navigation"; // Added for back button
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react"; 
// import Image from "next/image";
// import BusinessInfoTab from "@/app/components/business-tabs/BusinessInfoTab";
// import CustomersTab from "@/app/components/business-tabs/CustomersTab";
// import AccountsTab from "@/app/components/business-tabs/AccountTab";
// import CardsTab from "@/app/components/business-tabs/CardsTab";
// import TransactionsTab from "@/app/components/business-tabs/TransactionsTab";
// import AuthorizationsTab from "@/app/components/business-tabs/AuthorizationsTab";
// import DisputesTab from "@/app/components/business-tabs/DisputesTab";
// import  BusinessService  from "@/app/service/businesses.service";

// // Reusable Input Component
// const FormInput = ({
//   label,
//   value,
//   type = "text",
//   readonly = false,
//   onChange,
// }: any) => (
//   <div className="flex-1">
//     <label className="text-[12px] font-medium text-gray-400 mb-2 block">
//       {label}
//     </label>
//     <div className="relative">
//       <input
//         type={type}
//         value={value || ""}
//         readOnly={readonly || !onChange}
//         onChange={onChange}
//         className={`w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] outline-none focus:border-[#034EA2] transition-colors ${
//           readonly ? "bg-gray-50/50 cursor-not-allowed" : "bg-white"
//         }`}
//       />
//     </div>
//   </div>
// );

// export default function BusinessDetailsPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const resolvedParams = use(params);
//   const id = resolvedParams.id.toLowerCase();
//   const router = useRouter(); 

//   const [business, setBusiness] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   // Tabs State
//   const [activePrimaryTab, setActivePrimaryTab] = useState("Business Details");
//   const [activeSecondaryTab, setActiveSecondaryTab] =
//     useState("Business Details");

//   // The 12 Primary Tabs from your UI
//   const primaryTabs = [
//     "Business Details",
//     "Customers",
//     "Accounts",
//     "Cards",
//     "Transactions",
//     "Authorizations",
//     "Disputes",
//     "KYC",
//     "Webhook Notifications",
//     "API Logs",
//     "Actions",
//     "Notifications",
//   ];

//   const businessService = React.useMemo(() => new BusinessService(), []);

//   useEffect(() => {
//     const fetchBusiness = async () => {
//       setLoading(true);
//       try {
//         const res = await businessService.getBusinessById(id);
//         const data = res.data?.data || res.data;
        
//         // Ensure all required fields exist with proper defaults
//         if (data) {
//           // Extract initials from name or company
//           const nameToUse = data.name || data.businessName || data.companyName || "Unknown";
//           if (!data.initials) {
//             data.initials = nameToUse
//               .split(" ")
//               .map((n: string) => n[0])
//               .join("")
//               .substring(0, 2)
//               .toUpperCase() || "??";
//           }
          
//           // Format date properly
//           if (data.createdAt) {
//             try {
//               const date = new Date(data.createdAt);
//               if (!isNaN(date.getTime())) {
//                 data.formattedDate = date.toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "short",
//                   day: "numeric",
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 });
//               } else {
//                 data.formattedDate = data.createdAt;
//               }
//             } catch {
//               data.formattedDate = data.createdAt;
//             }
//           } else {
//             data.formattedDate = "Date not available";
//           }
          
//           setBusiness(data);
//         }
//       } catch (err) {
//         console.error("Fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBusiness();
//   }, [id]);

//   if (loading)
//     return (
//       <div className="p-20 text-center animate-pulse">Loading Details...</div>
//     );

//   if (!business) return <div className="p-20 text-center">Business not found.</div>;

//   return (
//     <div className="animate-in fade-in duration-500 max-w-[1600px] mx-auto p-6">
    
//       {/* PROFILE HEADER */}
//       <div className="flex items-start justify-between mb-8">
//         <div className="flex items-center gap-5">
//           <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-[#1D2939] font-bold text-2xl bg-white shadow-sm uppercase">
//             {business?.initials || "??"}
//           </div>
//           <div>
//             <div className="flex items-center gap-3">
//               <h1 className="text-xl font-bold text-[#1D2939]">
//                 {business?.name || business?.businessName || "Business Name"}
//               </h1>
//               <span className="px-2 py-0.5 bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold rounded uppercase">
//                 {business?.type || "Developer"}
//               </span>
//             </div>
//             <p className="text-[12px] text-gray-400 mt-0.5">
//               Created {business?.formattedDate || "Date not available"}
//             </p>
//           </div>
//         </div>

//         {/* ACTIONS & TOGGLE */}
//         <div className="flex flex-col items-end gap-3">
//           <button className="px-6 py-2 border border-gray-200 rounded-xl text-[#1D2939] font-bold text-[12px] hover:bg-gray-50 shadow-sm transition-all">
//             Update Business
//           </button>
//           <div className="flex items-center gap-3">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
//               <span className="text-[12px] font-bold text-[#1D2939]">
//                 Active
//               </span>
//             </div>
//             <div className="w-9 h-4.5 rounded-full bg-[#032345] relative cursor-pointer shadow-inner">
//               <div className="w-3 h-3 rounded-full bg-white absolute right-1 top-[3px]"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* PRIMARY TABS */}
//       <div className="border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
//         <div className="flex items-center gap-8 min-w-max">
//           {primaryTabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActivePrimaryTab(tab)}
//               className={`pb-4 text-[13px] font-bold border-b-2 transition-all whitespace-nowrap ${
//                 activePrimaryTab === tab
//                   ? "text-[#1D2939] border-[#1D2939]"
//                   : "text-gray-400 border-transparent hover:text-gray-600"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* CONTENT CARD */}
//       <div className="bg-white rounded-2xl border border-gray-50 shadow-sm p-10 min-h-[400px]">
//         {activePrimaryTab === "Business Details" ? (
//           <BusinessInfoTab business={business} setBusiness={setBusiness} />
//         ) : activePrimaryTab === "Customers" ? (
//           <CustomersTab businessId={id} />
//         ) : activePrimaryTab === "Accounts" ? (
//           <AccountsTab businessId={id} />
//         ) : activePrimaryTab === "Cards" ? (
//           <CardsTab />
//         ) : activePrimaryTab === "Transactions" ? (
//           <TransactionsTab />
//         ) : activePrimaryTab === "Authorizations" ? (
//           <AuthorizationsTab />
//         ) : activePrimaryTab === "Disputes" ? (
//           <DisputesTab />
//         ) : (
//           <div className="p-20 text-center text-gray-400">
//             Records for{" "}
//             <span className="font-bold text-gray-600">{activePrimaryTab}</span>{" "}
//             will be fetched from the backend.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState, use, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation"; 
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; 
import Image from "next/image";
import BusinessInfoTab from "@/app/components/business-tabs/BusinessInfoTab";
import CustomersTab from "@/app/components/business-tabs/CustomersTab";
import AccountsTab from "@/app/components/business-tabs/AccountTab";
import CardsTab from "@/app/components/business-tabs/CardsTab";
import TransactionsTab from "@/app/components/business-tabs/TransactionsTab";
import AuthorizationsTab from "@/app/components/business-tabs/AuthorizationsTab";
import DisputesTab from "@/app/components/business-tabs/DisputesTab";
import BusinessService from "@/app/service/businesses.service";
import KycTabWrapper from "@/app/components/business-tabs/kyc/KycTabWrapper";
import WebhookNotifications from "@/app/components/business-tabs/WebhookNotificationsTab";
import NotificationSettingsTabs from "@/app/components/business-tabs/NotificationsSettingsTab";
import ActionsTab from "@/app/components/business-tabs/ActionsTab";

// Reusable Input Component
const FormInput = ({
  label,
  value,
  type = "text",
  readonly = false,
  onChange,
}: any) => (
  <div className="flex-1">
    <label className="text-[12px] font-medium text-gray-400 mb-2 block">
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        value={value || ""}
        readOnly={readonly || !onChange}
        onChange={onChange}
        className={`w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] outline-none focus:border-[#034EA2] transition-colors ${
          readonly ? "bg-gray-50/50 cursor-not-allowed" : "bg-white"
        }`}
      />
    </div>
  </div>
);

export default function BusinessDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const id = resolvedParams.id.toLowerCase();
  
  // Next.js Navigation Hooks for persistent URLs
  const router = useRouter(); 
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [business, setBusiness] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Sync state directly from URL search parameter '?tab='
  const rawTabParam = searchParams.get("tab");
  
  // The 12 Primary Tabs from your UI
  const primaryTabs = [
    "Business Details",
    "Customers",
    "Accounts",
    "Cards",
    "Transactions",
    "Authorizations",
    "Disputes",
    "KYC",
    "Webhook Notifications",
    "API Logs",
    "Actions",
    "Notifications settings",
  ];

  // Derive active tab instantly from URL parameter (fallback to index 0)
  const activePrimaryTab = primaryTabs.find(
    (t) => t.toLowerCase().replace(/\s+/g, "-") === rawTabParam
  ) || "Business Details";

  const [activeSecondaryTab, setActiveSecondaryTab] =
    useState("Business Details");

  const businessService = React.useMemo(() => new BusinessService(), []);

  // Safe handler to update URL parameters when tab rows are selected
  const handleTabChange = (tabName: string) => {
    const URLSafeSlug = tabName.toLowerCase().replace(/\s+/g, "-");
    router.replace(`${pathname}?tab=${URLSafeSlug}`, { scroll: false });
  };

  useEffect(() => {
    const fetchBusiness = async () => {
      setLoading(true);
      try {
        const res = await businessService.getBusinessById(id);
        const data = res.data?.data || res.data;
        
        if (data) {
          const nameToUse = data.name || data.businessName || data.companyName || "Unknown";
          if (!data.initials) {
            data.initials = nameToUse
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .substring(0, 2)
              .toUpperCase() || "??";
          }
          
          if (data.createdAt) {
            try {
              const date = new Date(data.createdAt);
              if (!isNaN(date.getTime())) {
                data.formattedDate = date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                });
              } else {
                data.formattedDate = data.createdAt;
              }
            } catch {
              data.formattedDate = data.createdAt;
            }
          } else {
            data.formattedDate = "Date not available";
          }
          
          setBusiness(data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [id]);

  if (loading)
    return (
      <div className="p-20 text-center animate-pulse">Loading Details...</div>
    );

  if (!business) return <div className="p-20 text-center">Business not found.</div>;

  return (
    <div className="animate-in fade-in duration-500 max-w-[1600px] mx-auto p-6">
    
      {/* PROFILE HEADER */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-[#1D2939] font-bold text-2xl bg-white shadow-sm uppercase">
            {business?.initials || "??"}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-[#1D2939]">
                {business?.name || business?.businessName || "Business Name"}
              </h1>
              <span className="px-2 py-0.5 bg-[#F5F3FF] text-[#7C3AED] text-[10px] font-bold rounded uppercase">
                {business?.type || "Developer"}
              </span>
            </div>
            <p className="text-[12px] text-gray-400 mt-0.5">
              Created {business?.formattedDate || "Date not available"}
            </p>
          </div>
        </div>

        {/* ACTIONS & TOGGLE */}
        <div className="flex flex-col items-end gap-3">
          <button className="px-6 py-2 border border-gray-200 rounded-xl text-[#1D2939] font-bold text-[12px] hover:bg-gray-50 shadow-sm transition-all">
            Update Business
          </button>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              <span className="text-[12px] font-bold text-[#1D2939]">
                Active
              </span>
            </div>
            <div className="w-9 h-4.5 rounded-full bg-[#032345] relative cursor-pointer shadow-inner">
              <div className="w-3 h-3 rounded-full bg-white absolute right-1 top-[3px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* PRIMARY TABS */}
      <div className="border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-8 min-w-max">
          {primaryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`pb-4 text-[13px] font-bold border-b-2 transition-all whitespace-nowrap ${
                activePrimaryTab === tab
                  ? "text-[#1D2939] border-[#1D2939]"
                  : "text-gray-400 border-transparent hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT CARD */}
      <div className="bg-white rounded-2xl border border-gray-50 shadow-sm p-10 min-h-[400px]">
        {activePrimaryTab === "Business Details" ? (
          <BusinessInfoTab business={business} setBusiness={setBusiness} />
        ) : activePrimaryTab === "Customers" ? (
          <CustomersTab businessId={id} />
        ) : activePrimaryTab === "Accounts" ? (
          <AccountsTab businessId={id} />
        ) : activePrimaryTab === "Cards" ? (
          <CardsTab />
        ) : activePrimaryTab === "Transactions" ? (
          <TransactionsTab />
        ) : activePrimaryTab === "Authorizations" ? (
          <AuthorizationsTab />
        ) : activePrimaryTab === "Disputes" ? (
          <DisputesTab />
        ) : activePrimaryTab === "KYC" ? (
          <KycTabWrapper businessId={id} />
        ) : activePrimaryTab === "Webhook Notifications" ? (
          <WebhookNotifications businessId={id} />
        ) : activePrimaryTab === "Notifications settings" ? (
          <NotificationSettingsTabs/>
        ) : activePrimaryTab === "Actions" ? (
          <ActionsTab/>
        ) : (
          
          <div className="p-20 text-center text-gray-400">
            Records for{" "}
            <span className="font-bold text-gray-600">{activePrimaryTab}</span>{" "}
            can not be found.
          </div>
        )}
      </div>
    </div>
  );
}