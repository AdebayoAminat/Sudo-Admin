// "use client";
// import { imageOptimizer } from "next/dist/server/image-optimizer";
// import React, { useState } from "react";
// import UserDefinition from "./sub-tabs/UserDefinition";
// import DirectorDetails from "./sub-tabs/DirectorDetails";
// import DirectorVerification from "./sub-tabs/DirectorVerification";
// import BusinessDetailsSubTab from "./sub-tabs/BusinessDetailsSubTab";
// import BusinessDocument from "./sub-tabs/BusinessDocument";
// import UseCase from "./sub-tabs/UseCase";
// import OtherDirectors from "./sub-tabs/OtherDirectors";
// import Referees from "./sub-tabs/Referees";


// interface KycTabWrapperProps {
//   businessId: string;
//   complianceReference?: string;
// }

// export default function KycTabWrapper({
//   businessId,
//   complianceReference = "COMPLIANCE-KYCBCE33658F9",
// }: KycTabWrapperProps) {
//   // Sub-tabs list corresponding exactly to your UI layout
//   const subTabs = [
//     "User Definition",
//     "Director Details",
//     "Director Verification",
//     "Business Details",
//     "Business Document",
//     "Use Case",
//     "Other Directors",
//     "Referees",
//   ];

//   const [activeSubTab, setActiveSubTab] = useState("User Definition");

//   const handleUpdateReference = () => {
//     alert("Triggering Compliance Reference Update Workflow...");
//   };

//   return (
//     <div className="space-y-6">
//       {/* COMPLIANCE ID HEADER BANNER */}
//       <div className="flex items-center justify-between border-b border-gray-100 pb-6">
//         <span className="text-[14px] font-mono font-bold tracking-wide text-gray-700">
//           {complianceReference}
//         </span>
//         <button
//           onClick={handleUpdateReference}
//           className="px-5 py-2.5 border border-gray-900 rounded-xl text-gray-900 font-bold text-[13px] hover:bg-gray-50 transition shadow-sm"
//         >
//           Update Compliance Reference
//         </button>
//       </div>

//       {/* SUB TABS NAVIGATION BAR */}
//       <div className="overflow-x-auto no-scrollbar border-b border-gray-100/60 pb-2">
//         <div className="flex items-center gap-6 min-w-max">
//           {subTabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveSubTab(tab)}
//               className={`pb-2 text-[13px] font-medium border-b-2 transition-all whitespace-nowrap ${
//                 activeSubTab === tab
//                   ? "text-gray-900 border-gray-900 font-bold"
//                   : "text-gray-400 border-transparent hover:text-gray-600"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* DYNAMIC SUB-TAB ELEMENT VIEWS */}
//       <div className="pt-4 min-h-[300px]">
//         {activeSubTab === "User Definition" && (
//           <UserDefinition businessId={businessId} />
//         )}
//         {activeSubTab === "Director Details" && (
//           <DirectorDetails businessId={businessId} />
//         )}
//         {activeSubTab === "Director Verification" && (
//           <DirectorVerification businessId={businessId} />
//         )}
//         {activeSubTab === "Business Details" && (
//           <BusinessDetailsSubTab businessId={businessId} />
//         )}
//         {activeSubTab === "Business Document" && (
//           <BusinessDocument businessId={businessId} />
//         )}
//         {activeSubTab === "Use Case" && (
//           <UseCase businessId={businessId} />
//         )}
//         {activeSubTab === "Other Directors" && (
//           <OtherDirectors businessId={businessId} />
//         )}
//         {activeSubTab === "Referees" && (
//           <Referees businessId={businessId} />
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import UserDefinition from "./sub-tabs/UserDefinition";
import DirectorDetails from "./sub-tabs/DirectorDetails";
import DirectorVerification from "./sub-tabs/DirectorVerification";
import BusinessDetailsSubTab from "./sub-tabs/BusinessDetailsSubTab";
import BusinessDocument from "./sub-tabs/BusinessDocument";
import UseCase from "./sub-tabs/UseCase";
import OtherDirectors from "./sub-tabs/OtherDirectors";
import Referees from "./sub-tabs/Referees";
import BusinessService from "@/app/service/businesses.service";

interface KycTabWrapperProps {
  businessId: string;
}

const businessService = new BusinessService();

export default function KycTabWrapper({ businessId }: KycTabWrapperProps) {
  const subTabs = [
    "User Definition",
    "Director Details",
    "Director Verification",
    "Business Details",
    "Business Document",
    "Use Case",
    "Other Directors",
    "Referees",
  ];

  const [activeSubTab, setActiveSubTab] = useState("User Definition");
  const [complianceReference, setComplianceReference] = useState<string | null>(null);

  useEffect(() => {
    const fetchReference = async () => {
      const businessRes = await businessService.getBusinessById(businessId);
      if (!("error" in businessRes) && businessRes.data) {
        setComplianceReference(businessRes.data?.data?.activationReference || null);
      }
    };

    if (businessId) fetchReference();
  }, [businessId]);

  const handleUpdateReference = () => {
    alert("Triggering Compliance Reference Update Workflow...");
  };

  return (
    <div className="space-y-6">
      {/* COMPLIANCE ID HEADER BANNER */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-6">
        <span className="text-[14px] font-mono font-bold tracking-wide text-gray-700">
          {complianceReference ?? "—"}
        </span>
        <button
          onClick={handleUpdateReference}
          className="px-5 py-2.5 border border-gray-900 rounded-xl text-gray-900 font-bold text-[13px] hover:bg-gray-50 transition shadow-sm"
        >
          Update Compliance Reference
        </button>
      </div>

      {/* SUB TABS NAVIGATION BAR */}
      <div className="overflow-x-auto no-scrollbar border-b border-gray-100/60 pb-2">
        <div className="flex items-center gap-6 min-w-max">
          {subTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`pb-2 text-[13px] font-medium border-b-2 transition-all whitespace-nowrap ${
                activeSubTab === tab
                  ? "text-gray-900 border-gray-900 font-bold"
                  : "text-gray-400 border-transparent hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* DYNAMIC SUB-TAB ELEMENT VIEWS */}
      <div className="pt-4 min-h-[300px]">
        {activeSubTab === "User Definition" && (
          <UserDefinition businessId={businessId} />
        )}
        {activeSubTab === "Director Details" && (
          <DirectorDetails businessId={businessId} />
        )}
        {activeSubTab === "Director Verification" && (
          <DirectorVerification businessId={businessId} />
        )}
        {activeSubTab === "Business Details" && (
          <BusinessDetailsSubTab businessId={businessId} />
        )}
        {activeSubTab === "Business Document" && (
          <BusinessDocument businessId={businessId} />
        )}
        {activeSubTab === "Use Case" && (
          <UseCase businessId={businessId} />
        )}
        {activeSubTab === "Other Directors" && (
          <OtherDirectors businessId={businessId} />
        )}
        {activeSubTab === "Referees" && (
          <Referees businessId={businessId} />
        )}
      </div>
    </div>
  );
}


// "use client";
// import React, { useState, useEffect } from "react";
// import UserDefinition from "./sub-tabs/UserDefinition";
// import DirectorDetails from "./sub-tabs/DirectorDetails";
// import DirectorVerification from "./sub-tabs/DirectorVerification";
// import BusinessDetailsSubTab from "./sub-tabs/BusinessDetailsSubTab";
// import BusinessDocument from "./sub-tabs/BusinessDocument";
// import UseCase from "./sub-tabs/UseCase";
// import OtherDirectors from "./sub-tabs/OtherDirectors";
// import Referees from "./sub-tabs/Referees";
// import BusinessService from "@/app/service/businesses.service";
// import Image from "next/image";

// interface KycTabWrapperProps {
//   businessId: string;
// }

// const businessService = new BusinessService();

// export default function KycTabWrapper({ businessId }: KycTabWrapperProps) {
//   const subTabs = [
//     "User Definition",
//     "Director Details",
//     "Director Verification",
//     "Business Details",
//     "Business Document",
//     "Use Case",
//     "Other Directors",
//     "Referees",
//   ];

//   const [activeSubTab, setActiveSubTab] = useState("User Definition");
//   const [complianceReference, setComplianceReference] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [hasCompliance, setHasCompliance] = useState(false);

//   useEffect(() => {
//     const fetchReference = async () => {
//       setLoading(true);
//       try {
//         const businessRes = await businessService.getBusinessById(businessId);
//         if (!("error" in businessRes) && businessRes.data) {
//           const reference = businessRes.data?.data?.activationReference;
//           if (reference) {
//             setComplianceReference(reference);
//             setHasCompliance(true);
//           } else {
//             setHasCompliance(false);
//           }
//         }
//       } catch (err) {
//         setHasCompliance(false);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (businessId) fetchReference();
//   }, [businessId]);

//   const handleUpdateReference = () => {
//     alert("Triggering Compliance Reference Update Workflow...");
//   };

//   if (loading) {
//     return (
//       <div className="space-y-4 animate-pulse">
//         <div className="h-10 bg-gray-100 rounded-xl w-full" />
//         <div className="h-8 bg-gray-100 rounded-xl w-2/3" />
//         <div className="h-64 bg-gray-50 rounded-2xl w-full" />
//       </div>
//     );
//   }

//   // NO COMPLIANCE STATE
//   if (!hasCompliance) {
//     return (
//       <div className="space-y-6">
//         <div className="flex justify-end">
//           <button
//             onClick={handleUpdateReference}
//             className="px-5 py-2.5 border border-gray-900 rounded-xl text-gray-900 font-bold text-[13px] hover:bg-gray-50 transition shadow-sm"
//           >
//             Add Compliance Reference
//           </button>
//         </div>

//         <div className="flex flex-col items-center justify-center py-24 gap-3">
//           <div className="relative w-10 h-10 opacity-30">
//             <Image src="/images/documents.svg" alt="" fill className="object-contain" />
//           </div>
//           <p className="text-[15px] font-bold text-gray-700">No compliance found</p>
//           <p className="text-[13px] text-gray-400">No compliance is attached to this account.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* COMPLIANCE ID HEADER BANNER */}
//       <div className="flex items-center justify-between border-b border-gray-100 pb-6">
//         <span className="text-[14px] font-mono font-bold tracking-wide text-gray-700">
//           {complianceReference}
//         </span>
//         <button
//           onClick={handleUpdateReference}
//           className="px-5 py-2.5 border border-gray-900 rounded-xl text-gray-900 font-bold text-[13px] hover:bg-gray-50 transition shadow-sm"
//         >
//           Update Compliance Reference
//         </button>
//       </div>

//       {/* SUB TABS NAVIGATION BAR */}
//       <div className="overflow-x-auto no-scrollbar border-b border-gray-100/60 pb-2">
//         <div className="flex items-center gap-6 min-w-max">
//           {subTabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveSubTab(tab)}
//               className={`pb-2 text-[13px] font-medium border-b-2 transition-all whitespace-nowrap ${
//                 activeSubTab === tab
//                   ? "text-gray-900 border-gray-900 font-bold"
//                   : "text-gray-400 border-transparent hover:text-gray-600"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* DYNAMIC SUB-TAB ELEMENT VIEWS */}
//       <div className="pt-4 min-h-[300px]">
//         {activeSubTab === "User Definition" && (
//           <UserDefinition businessId={businessId} />
//         )}
//         {activeSubTab === "Director Details" && (
//           <DirectorDetails businessId={businessId} />
//         )}
//         {activeSubTab === "Director Verification" && (
//           <DirectorVerification businessId={businessId} />
//         )}
//         {activeSubTab === "Business Details" && (
//           <BusinessDetailsSubTab businessId={businessId} />
//         )}
//         {activeSubTab === "Business Document" && (
//           <BusinessDocument businessId={businessId} />
//         )}
//         {activeSubTab === "Use Case" && (
//           <UseCase businessId={businessId} />
//         )}
//         {activeSubTab === "Other Directors" && (
//           <OtherDirectors businessId={businessId} />
//         )}
//         {activeSubTab === "Referees" && (
//           <Referees businessId={businessId} />
//         )}
//       </div>
//     </div>
//   );
// }