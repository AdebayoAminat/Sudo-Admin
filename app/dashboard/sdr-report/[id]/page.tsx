

// "use client";

// import React, { useState, useMemo } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { ArrowLeft, Search, ChevronLeft, ChevronRight, Clock } from "lucide-react";

// // Mock Data for Customers
// const MOCK_CUSTOMERS = [
//   {
//     id: "63874358ceb2d053f29bf7cd",
//     name: "Umar Yusuf",
//     email: "umar@sudo.africa",
//     phone: "+2347012345678",
//     initials: "UY",
//     status: "Approved - Active",
//     type: "Consumer",
//     createdAt: "Nov 30, 2022, 12:49:44 PM",
//   },
// ];

// const MemberDetailPage = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const activeTab = searchParams.get("tab") || "details";

//   const member = {
//     name: "Ayodeji Adewemi",
//     initials: "AA",
//     addedBy: "Umar Yusuf, umar@sudo.africa",
//     createdAt: "Sep 19, 2024, 11:28:51 AM",
//   };

//   const tabs = [
//     { name: "User Details", value: "details" },
//     { name: "Customers", value: "customers" },
//   ];

//   return (
//     <div className="p-6 space-y-8 animate-in fade-in duration-500">

//       {/* HEADER SECTION */}
//       <div className="flex items-center gap-5">
//         <div className="w-16 h-16 rounded-full bg-[#F2F4F7] flex items-center justify-center text-[#475467] font-bold text-[18px]">
//           {member.initials}
//         </div>
//         <div className="space-y-1">
//           <div className="flex items-center gap-3">
//             <h1 className="text-[20px] font-bold text-[#1D2939]">{member.name}</h1>
//             <span className="bg-[#EFF8FF] text-[#175CD3] text-[10px] font-bold px-2 py-0.5 rounded uppercase">SDR Member</span>
//           </div>
//           <p className="text-[12px] text-gray-400">
//             Added By: <span className="text-gray-500 font-medium">{member.addedBy}</span>
//           </p>
//           <p className="text-[12px] text-gray-400">
//             Created At: <span className="text-gray-500 font-medium">{member.createdAt}</span>
//           </p>
//         </div>
//       </div>

//       {/* TABS NAVIGATION */}
//       <div className="flex gap-8 border-b border-gray-100">
//         {tabs.map((tab) => (
//           <button
//             key={tab.value}
//             onClick={() => router.push(`?tab=${tab.value}`)}
//             className={`pb-3 text-[13px] font-bold transition-all ${
//               activeTab === tab.value 
//                 ? "border-b-2 border-[#1D2939] text-[#1D2939]" 
//                 : "text-gray-400 hover:text-[#1D2939]"
//             }`}
//           >
//             {tab.name}
//           </button>
//         ))}
//       </div>

//       <div className="mt-10">
//         {activeTab === "details" ? <UserDetailsContent /> : <CustomersContent />}
//       </div>
//     </div>
//   );
// };

// const UserDetailsContent = () => {
//   const details = [
//     { label: "First Name", value: "Ayodeji" },
//     { label: "Last Name", value: "Adewemi" },
//     { label: "Phone Number", value: "+2347035038763" },
//     { label: "Gender", value: "Male" },
//     { label: "Email Address", value: "ayodeji@sudo.africa" },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 max-w-[1000px]">
//       {details.map((item, i) => (
//         <div key={i} className="space-y-2">
//           <label className="text-[12px] font-medium text-[#344054]">{item.label}</label>
//           <div className="h-[48px] w-full bg-[#F9FAFB] border border-gray-100 rounded-lg flex items-center px-4 text-[13px] text-[#1D2939] font-medium">
//             {item.value}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const CustomersContent = () => {
//   const router = useRouter();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredCustomers = useMemo(() => {
//     return MOCK_CUSTOMERS.filter((customer) => {
//       const search = searchTerm.toLowerCase();
//       return (
//         customer.name.toLowerCase().includes(search) ||
//         customer.email.toLowerCase().includes(search) ||
//         customer.phone.toLowerCase().includes(search)
//       );
//     });
//   }, [searchTerm]);

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <p className="text-[13px] text-gray-400 font-medium">
//           Showing {filteredCustomers.length > 0 ? `0 - ${filteredCustomers.length}` : "0"} of {filteredCustomers.length} Customer{filteredCustomers.length !== 1 ? "s" : ""}
//         </p>
//         <div className="relative">
//           <input 
//             type="text" 
//             placeholder="name, email, phone" 
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-[280px] h-[40px] pl-4 pr-10 bg-[#F9FAFB] border border-gray-50 rounded-lg text-[12px] outline-none"
//           />
//           <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCustomers.length > 0 ? (
//           filteredCustomers.map((customer) => (
//             <div 
//               key={customer.id} 
//               onClick={() => router.push(`/dashboard/businesses/${customer.id}?tab=overview`)}
//               className="w-full max-w-[380px] border border-gray-100 rounded-xl p-6 space-y-5 bg-white shadow-sm hover:shadow-md transition-all cursor-pointer group"
//             >
//               <div className="flex justify-between items-start">
//                 <div className="w-12 h-12 rounded-lg bg-[#F2F4F7] flex items-center justify-center text-[#475467] font-bold text-[14px]">
//                   {customer.initials}
//                 </div>
//                 <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#039855]">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#039855]" />
//                   {customer.status}
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 <h3 className="text-[14px] font-bold text-[#1D2939] group-hover:text-blue-600 transition-colors">{customer.name}</h3>
//                 <span className="inline-block bg-[#EEF2FF] text-[#4F46E5] text-[10px] font-bold px-2 py-1 rounded">
//                   {customer.type}
//                 </span>
                
//                 <div className="flex items-center gap-2 text-[11px] text-gray-400 pt-2">
//                   <Clock className="w-3.5 h-3.5" />
//                   Created on: <span className="text-gray-500 font-medium">{customer.createdAt}</span>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full py-10 text-center text-gray-400 text-[13px]">
//             No customers found matching your search.
//           </div>
//         )}
//       </div>

//       {filteredCustomers.length > 0 && (
//         <div className="flex justify-end items-center gap-4 pt-10">
//           <button className="p-2 border border-gray-100 rounded-md text-gray-300 hover:bg-gray-50">
//             <ChevronLeft className="w-4 h-4" />
//           </button>
//           <button className="w-8 h-8 rounded-full bg-[#1D2939] text-white text-[12px] font-bold">
//             1
//           </button>
//           <button className="p-2 border border-gray-100 rounded-md text-gray-400 hover:bg-gray-50">
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MemberDetailPage;

// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import { useRouter, useSearchParams, useParams } from "next/navigation";
// import { Search, ChevronLeft, ChevronRight, Clock } from "lucide-react";
// import sdrReportService from "@/app/service/sdr-report.service";


// interface MemberData {
//   firstName: string;
//   lastName: string;
//   gender: string;
//   emailAddress: string;
//   phoneNumber: string;
//   initials: string;
//   addedBy: string;
//   createdAt: string;
// }

// interface CustomerData {
//   _id: string;
//   name: string;
//   emailAddress: string;
//   phoneNumber: string;
//   initials: string;
//   status: string;
//   type: string;
//   createdAt: string;
// }

// export default function MemberDetailPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const params = useParams();

//   // Extract the true routing identifier token safely from URL parameter states
//   const memberId = (params?.id || searchParams.get("id")) as string;
//   const activeTab = searchParams.get("tab") || "details";

//   const [member, setMember] = useState<MemberData | null>(null);
//   const [customers, setCustomers] = useState<CustomerData[]>([]);
//   const [loading, setLoading] = useState(true);

//   const tabs = [
//     { name: "User Details", value: "details" },
//     { name: "Customers", value: "customers" },
//   ];

//   useEffect(() => {
//     const fetchPageContextData = async () => {
//       if (!memberId) return;
//       setLoading(true);
//       const service = new sdrReportService();

//       // 1. Fetch Member Details
//       const memberResponse = await service.getSdrMemberById(memberId);
//       if (memberResponse && !("error" in memberResponse)) {
//         const rootData = memberResponse.data?.data || memberResponse.data;
//         const innerMember = rootData?.member;
//         const createdByBlock = rootData?.createdBy;

//         if (innerMember) {
//           const fName = innerMember.firstName || "";
//           const lName = innerMember.lastName || "";
//           const initials = `${fName[0] || ""}${lName[0] || ""}`.toUpperCase();
          
//           const creatorFName = createdByBlock?.firstName || "";
//           const creatorLName = createdByBlock?.lastName || "";
//           const creatorEmail = createdByBlock?.emailAddress ? `, ${createdByBlock.emailAddress}` : "";
//           const combinedCreator = `${creatorFName} ${creatorLName}${creatorEmail}`.trim();

//           let displayDate = "";
//           if (rootData.createdAt) {
//             const dateObj = new Date(rootData.createdAt);
//             if (!isNaN(dateObj.getTime())) {
//               displayDate = dateObj.toLocaleDateString("en-US", {
//                 month: "short",
//                 day: "numeric",
//                 year: "numeric",
//                 hour: "2-digit",
//                 minute: "2-digit",
//                 hour12: true,
//               });
//             }
//           }

//           setMember({
//             firstName: fName,
//             lastName: lName,
//             gender: innerMember.gender || "",
//             emailAddress: innerMember.emailAddress || "",
//             phoneNumber: innerMember.phoneNumber || "",
//             initials,
//             addedBy: combinedCreator,
//             createdAt: displayDate,
//           });
//         }
//       }

//       // 2. Fetch Linked Customers/Businesses Dataset
//       const usersResponse = await service.getAllSdrUsers();
//       if (usersResponse && !("error" in usersResponse)) {
//         const payloadList = usersResponse.data?.data || usersResponse.data;
        
//         if (Array.isArray(payloadList)) {
//           // Explicitly map properties using your exact platform customer payload keys
//           const parsedCustomers: CustomerData[] = payloadList.map((biz: any) => {
//             const customerName = biz.name || "";
//             const initialTokens = customerName.split(" ").map((n: string) => n[0]).join("").toUpperCase();

//             let displayCreated = "";
//             if (biz.createdAt) {
//               const dateObj = new Date(biz.createdAt);
//               if (!isNaN(dateObj.getTime())) {
//                 displayCreated = dateObj.toLocaleDateString("en-US", {
//                   month: "short",
//                   day: "numeric",
//                   year: "numeric",
//                   hour: "numeric",
//                   minute: "2-digit",
//                   hour12: true,
//                 });
//               }
//             }

//             // Determine status text presentation match dynamically
//             const statusString = biz.isApproved && biz.status === "active" 
//               ? "Approved - Active" 
//               : biz.status || "";

//             return {
//               _id: biz._id,
//               name: customerName,
//               emailAddress: biz.emailAddress || "",
//               phoneNumber: biz.phoneNumber || "",
//               initials: initialTokens.slice(0, 2),
//               status: statusString,
//               type: biz.type || "",
//               createdAt: displayCreated,
//             };
//           });

//           setCustomers(parsedCustomers);
//         }
//       }
//       setLoading(false);
//     };

//     fetchPageContextData();
//   }, [memberId]);

//   if (loading) {
//     return <div className="p-8 text-[12px] text-gray-400">Loading profile context fields...</div>;
//   }

//   if (!member) return null;

//   return (
//     <div className="p-6 space-y-8 animate-in fade-in duration-500">
//       {/* HEADER SECTION */}
//       <div className="flex items-center gap-5">
//         <div className="w-16 h-16 rounded-full bg-[#F2F4F7] flex items-center justify-center text-[#475467] font-bold text-[18px]">
//           {member.initials}
//         </div>
//         <div className="space-y-1">
//           <div className="flex items-center gap-3">
//             <h1 className="text-[20px] font-bold text-[#1D2939]">
//               {member.firstName} {member.lastName}
//             </h1>
//             <span className="bg-[#EFF8FF] text-[#175CD3] text-[10px] font-bold px-2 py-0.5 rounded uppercase">
//               SDR Member
//             </span>
//           </div>
//           {member.addedBy && (
//             <p className="text-[12px] text-gray-400">
//               Added By: <span className="text-gray-500 font-medium">{member.addedBy}</span>
//             </p>
//           )}
//           {member.createdAt && (
//             <p className="text-[12px] text-gray-400">
//               Created At: <span className="text-gray-500 font-medium">{member.createdAt}</span>
//             </p>
//           )}
//         </div>
//       </div>

//       {/* TABS NAVIGATION */}
//       <div className="flex gap-8 border-b border-gray-100">
//         {tabs.map((tab) => (
//           <button
//             key={tab.value}
//             onClick={() => router.push(`?tab=${tab.value}`)}
//             className={`pb-3 text-[13px] font-bold transition-all ${
//               activeTab === tab.value
//                 ? "border-b-2 border-[#1D2939] text-[#1D2939]"
//                 : "text-gray-400 hover:text-[#1D2939]"
//             }`}
//           >
//             {tab.name}
//           </button>
//         ))}
//       </div>

//       <div className="mt-10">
//         {activeTab === "details" ? (
//           <UserDetailsContent member={member} />
//         ) : (
//           <CustomersContent customers={customers} />
//         )}
//       </div>
//     </div>
//   );
// }

// const UserDetailsContent = ({ member }: { member: MemberData }) => {
//   const details = [
//     { label: "First Name", value: member.firstName },
//     { label: "Last Name", value: member.lastName },
//     { label: "Phone Number", value: member.phoneNumber },
//     { label: "Gender", value: member.gender },
//     { label: "Email Address", value: member.emailAddress },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 max-w-[1000px]">
//       {details.map((item, i) => (
//         <div key={i} className="space-y-2">
//           <label className="text-[12px] font-medium text-[#344054]">{item.label}</label>
//           <div className="h-[48px] w-full bg-[#F9FAFB] border border-gray-100 rounded-lg flex items-center px-4 text-[13px] text-[#1D2939] font-medium">
//             {item.value}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const CustomersContent = ({ customers }: { customers: CustomerData[] }) => {
//   const router = useRouter();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredCustomers = useMemo(() => {
//     return customers.filter((customer) => {
//       const search = searchTerm.toLowerCase();
//       return (
//         customer.name.toLowerCase().includes(search) ||
//         customer.emailAddress.toLowerCase().includes(search) ||
//         customer.phoneNumber.toLowerCase().includes(search)
//       );
//     });
//   }, [searchTerm, customers]);

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <p className="text-[13px] text-gray-400 font-medium">
//           Showing {filteredCustomers.length > 0 ? `1 - ${filteredCustomers.length}` : "0"} of {filteredCustomers.length} Customer{filteredCustomers.length !== 1 ? "s" : ""}
//         </p>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search name, email, phone..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-[280px] h-[40px] pl-4 pr-10 bg-[#F9FAFB] border border-gray-100 rounded-lg text-[12px] outline-none text-[#1D2939]"
//           />
//           <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCustomers.length > 0 ? (
//           filteredCustomers.map((customer) => (
//             <div
//               key={customer._id}
//               onClick={() => router.push(`/dashboard/businesses/${customer._id}?tab=overview`)}
//               className="w-full max-w-[380px] border border-gray-100 rounded-xl p-6 space-y-5 bg-white shadow-sm hover:shadow-md transition-all cursor-pointer group"
//             >
//               <div className="flex justify-between items-start">
//                 <div className="w-12 h-12 rounded-lg bg-[#F2F4F7] flex items-center justify-center text-[#475467] font-bold text-[14px]">
//                   {customer.initials}
//                 </div>
//                 {customer.status && (
//                   <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#039855]">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#039855]" />
//                     {customer.status}
//                   </div>
//                 )}
//               </div>

//               <div className="space-y-3">
//                 <h3 className="text-[14px] font-bold text-[#1D2939] group-hover:text-blue-600 transition-colors">
//                   {customer.name}
//                 </h3>
//                 {customer.type && (
//                   <span className="inline-block bg-[#EEF2FF] text-[#4F46E5] text-[10px] font-bold px-2 py-1 rounded">
//                     {customer.type}
//                   </span>
//                 )}

//                 {customer.createdAt && (
//                   <div className="flex items-center gap-2 text-[11px] text-gray-400 pt-2">
//                     <Clock className="w-3.5 h-3.5" />
//                     Created on: <span className="text-gray-500 font-medium">{customer.createdAt}</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full py-20 text-center text-gray-400 text-[13px] italic">
//             No customers found matching your search.
//           </div>
//         )}
//       </div>

//       {filteredCustomers.length > 0 && (
//         <div className="flex justify-end items-center gap-4 pt-10">
//           <button className="p-2 border border-gray-100 rounded-md text-gray-300 hover:bg-gray-50">
//             <ChevronLeft className="w-4 h-4" />
//           </button>
//           <button className="w-8 h-8 rounded-full bg-[#1D2939] text-white text-[12px] font-bold">
//             1
//           </button>
//           <button className="p-2 border border-gray-100 rounded-md text-gray-400 hover:bg-gray-50">
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { Search, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import sdrReportService from "@/app/service/sdr-report.service"; 
import BusinessService from "@/app/service/businesses.service";

interface MemberData {
  firstName: string;
  lastName: string;
  gender: string;
  emailAddress: string;
  phoneNumber: string;
  initials: string;
  addedBy: string;
  createdAt: string;
}

interface CustomerData {
  _id: string;
  name: string;
  emailAddress: string;
  phoneNumber: string;
  initials: string;
  status: string;
  type: string;
  createdAt: string;
}

export default function MemberDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();

  const memberId = (params?.id || searchParams.get("id")) as string;
  const activeTab = searchParams.get("tab") || "details";

  const [member, setMember] = useState<MemberData | null>(null);
  const [customers, setCustomers] = useState<CustomerData[]>([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    { name: "User Details", value: "details" },
    { name: "Customers", value: "customers" },
  ];

  useEffect(() => {
    const fetchPageContextData = async () => {
      if (!memberId) return;
      setLoading(true);
      
      const sdrService = new sdrReportService();
      const bizService = new BusinessService(); 

      // 1. Fetch Member Details
      const memberResponse = await sdrService.getSdrMemberById(memberId);
      if (memberResponse && !("error" in memberResponse)) {
        const rootData = memberResponse.data?.data || memberResponse.data;
        const innerMember = rootData?.member;
        const createdByBlock = rootData?.createdBy;

        if (innerMember) {
          const fName = innerMember.firstName || "";
          const lName = innerMember.lastName || "";
          const initials = `${fName[0] || ""}${lName[0] || ""}`.toUpperCase();
          
          const creatorFName = createdByBlock?.firstName || "";
          const creatorLName = createdByBlock?.lastName || "";
          const creatorEmail = createdByBlock?.emailAddress ? `, ${createdByBlock.emailAddress}` : "";
          const combinedCreator = `${creatorFName} ${creatorLName}${creatorEmail}`.trim();

          let displayDate = "";
          if (rootData.createdAt) {
            const dateObj = new Date(rootData.createdAt);
            if (!isNaN(dateObj.getTime())) {
              displayDate = dateObj.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              });
            }
          }

          setMember({
            firstName: fName,
            lastName: lName,
            gender: innerMember.gender || "",
            emailAddress: innerMember.emailAddress || "",
            phoneNumber: innerMember.phoneNumber || "",
            initials,
            addedBy: combinedCreator,
            createdAt: displayDate,
          });
        }
      }

      // 2. INTEGRATED: Fetch Linked Customers using getStaffBusinesses
      const usersResponse = await bizService.getStaffBusinesses(memberId);
      if (usersResponse && !("error" in usersResponse)) {
        const payloadList = usersResponse.data?.data || usersResponse.data;
        
        if (Array.isArray(payloadList)) {
          const parsedCustomers: CustomerData[] = payloadList.map((biz: any) => {
            const customerName = biz.name || "";
            const initialTokens = customerName.split(" ").map((n: string) => n[0]).join("").toUpperCase();

            let displayCreated = "";
            if (biz.createdAt) {
              const dateObj = new Date(biz.createdAt);
              if (!isNaN(dateObj.getTime())) {
                displayCreated = dateObj.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                });
              }
            }

            const statusString = biz.isApproved && biz.status === "active" 
              ? "Approved - Active" 
              : biz.status || "";

            return {
              _id: biz._id,
              name: customerName,
              emailAddress: biz.emailAddress || "",
              phoneNumber: biz.phoneNumber || "",
              initials: initialTokens.slice(0, 2),
              status: statusString,
              type: biz.type || "",
              createdAt: displayCreated,
            };
          });

          setCustomers(parsedCustomers);
        }
      }
      setLoading(false);
    };

    fetchPageContextData();
  }, [memberId]);

  if (loading) {
    return <div className="p-8 text-[12px] text-gray-400">Loading profile context fields...</div>;
  }

  if (!member) return null;

  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-500">
      {/* HEADER SECTION */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-[#F2F4F7] flex items-center justify-center text-[#475467] font-bold text-[18px]">
          {member.initials}
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-[20px] font-bold text-[#1D2939]">
              {member.firstName} {member.lastName}
            </h1>
            <span className="bg-[#EFF8FF] text-[#175CD3] text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              SDR Member
            </span>
          </div>
          {member.addedBy && (
            <p className="text-[12px] text-gray-400">
              Added By: <span className="text-gray-500 font-medium">{member.addedBy}</span>
            </p>
          )}
          {member.createdAt && (
            <p className="text-[12px] text-gray-400">
              Created At: <span className="text-gray-500 font-medium">{member.createdAt}</span>
            </p>
          )}
        </div>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex gap-8 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => router.push(`?id=${memberId}&tab=${tab.value}`)}
            className={`pb-3 text-[13px] font-bold transition-all ${
              activeTab === tab.value
                ? "border-b-2 border-[#1D2939] text-[#1D2939]"
                : "text-gray-400 hover:text-[#1D2939]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {activeTab === "details" ? (
          <UserDetailsContent member={member} />
        ) : (
          <CustomersContent customers={customers} />
        )}
      </div>
    </div>
  );
}

const UserDetailsContent = ({ member }: { member: MemberData }) => {
  const details = [
    { label: "First Name", value: member.firstName },
    { label: "Last Name", value: member.lastName },
    { label: "Phone Number", value: member.phoneNumber },
    { label: "Gender", value: member.gender },
    { label: "Email Address", value: member.emailAddress },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 max-w-[1000px]">
      {details.map((item, i) => (
        <div key={i} className="space-y-2">
          <label className="text-[12px] font-medium text-[#344054]">{item.label}</label>
          <div className="h-[48px] w-full bg-[#F9FAFB] border border-gray-100 rounded-lg flex items-center px-4 text-[13px] text-[#1D2939] font-medium">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

const CustomersContent = ({ customers }: { customers: CustomerData[] }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const search = searchTerm.toLowerCase();
      return (
        customer.name.toLowerCase().includes(search) ||
        customer.emailAddress.toLowerCase().includes(search) ||
        customer.phoneNumber.toLowerCase().includes(search)
      );
    });
  }, [searchTerm, customers]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-[13px] text-gray-400 font-medium">
          Showing {filteredCustomers.length > 0 ? `1 - ${filteredCustomers.length}` : "0"} of {filteredCustomers.length} Customer{filteredCustomers.length !== 1 ? "s" : ""}
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search name, email, phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[280px] h-[40px] pl-4 pr-10 bg-[#F9FAFB] border border-gray-100 rounded-lg text-[12px] outline-none text-[#1D2939]"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map((customer) => (
            <div
              key={customer._id}
              onClick={() => router.push(`/dashboard/businesses/${customer._id}?tab=overview`)}
              className="w-full max-w-[380px] border border-gray-100 rounded-xl p-6 space-y-5 bg-white shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-[#F2F4F7] flex items-center justify-center text-[#475467] font-bold text-[14px]">
                  {customer.initials}
                </div>
                {customer.status && (
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#039855]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#039855]" />
                    {customer.status}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-[14px] font-bold text-[#1D2939] group-hover:text-blue-600 transition-colors">
                  {customer.name}
                </h3>
                {customer.type && (
                  <span className="inline-block bg-[#EEF2FF] text-[#4F46E5] text-[10px] font-bold px-2 py-1 rounded">
                    {customer.type}
                  </span>
                )}

                {customer.createdAt && (
                  <div className="flex items-center gap-2 text-[11px] text-gray-400 pt-2">
                    <Clock className="w-3.5 h-3.5" />
                    Created on: <span className="text-gray-500 font-medium">{customer.createdAt}</span>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-400 text-[13px] italic">
            No customers found matching your search.
          </div>
        )}
      </div>

      {filteredCustomers.length > 0 && (
        <div className="flex justify-end items-center gap-4 pt-10">
          <button className="p-2 border border-gray-100 rounded-md text-gray-300 hover:bg-gray-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#1D2939] text-white text-[12px] font-bold">
            1
          </button>
          <button className="p-2 border border-gray-100 rounded-md text-gray-400 hover:bg-gray-50">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};