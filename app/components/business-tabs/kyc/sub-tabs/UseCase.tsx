// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// interface UseCaseProps {
//   businessId: string;
//   backendData?: {
//     useCaseType: string;
//     useCaseDefinition: string;
//   };
// }

// export default function UseCase({
//   businessId,
//   backendData = {
//     useCaseType: "Technology",
//     useCaseDefinition: "Middey onboard users and business to enable them handle automatted payroll processings for their beneficiaries or employees."
//   }
// }: UseCaseProps) {
//   const [useCaseType, setUseCaseType] = useState(backendData.useCaseType);

//   return (
//     <div className="space-y-6 animate-in fade-in duration-300 max-w-[600px]">
      
//       {/* SECTION HEADER */}
//       <div>
//         <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
//           Use Case Definition
//         </h2>
//       </div>

//       {/* FORM SECTOR */}
//       <div className="space-y-5">
        
//         {/* USE CASE TYPE SELECTION DROPDOWN */}
//         <div className="space-y-2">
//           <label className="text-[12px] font-medium text-gray-400 block">
//             Use Case Type
//           </label>
//           <div className="relative">
//             <select
//               value={useCaseType}
//               onChange={(e) => setUseCaseType(e.target.value)}
//               className="w-full border border-gray-100 rounded-xl py-3.5 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 outline-none appearance-none cursor-pointer font-medium"
//             >
//               <option value="Technology">Technology</option>
//               <option value="Logistics">Logistics</option>
//               <option value="E-Commerce">E-Commerce</option>
//               <option value="Finance">Finance / Fintech</option>
//             </select>
//             {/* Custom local asset arrow down icon */}
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-3 h-3">
//               <Image 
//                 src="/images/caret-down.svg" 
//                 alt="Select Dropdown" 
//                 width={12} 
//                 height={12} 
//                 className="opacity-40"
//               />
//             </div>
//           </div>
//         </div>

//         {/* USE CASE DESCRIPTION PREVIEW PANEL */}
//         <div className="space-y-2">
//           <label className="text-[12px] font-medium text-gray-400 block">
//             Use Case Definition
//           </label>
//           <div className="w-full border border-gray-100 rounded-xl py-4 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 cursor-not-allowed font-medium leading-relaxed">
//             {backendData.useCaseDefinition}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BusinessService from "@/app/service/businesses.service";

interface UseCaseProps {
  businessId: string;
}

const businessService = new BusinessService();

export default function UseCase({ businessId }: UseCaseProps) {
  const [useCaseType, setUseCaseType] = useState("");
  const [useCaseDefinition, setUseCaseDefinition] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const businessRes = await businessService.getBusinessById(businessId);
        if (!("error" in businessRes) && businessRes.data) {
          const reference = businessRes.data?.data?.activationReference;
          if (reference) {
            const complianceRes = await businessService.getBusinessCompliance(reference);
            if (!("error" in complianceRes) && complianceRes.data) {
              const data = complianceRes.data?.data;
              setUseCaseType(data?.category);
              setUseCaseDefinition(data?.description );
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch use case:", err);
      } finally {
        setLoading(false);
      }
    };

    if (businessId) fetchData();
  }, [businessId]);

  if (loading) {
    return (
      <div className="space-y-5 animate-pulse max-w-[600px]">
        <div className="h-6 bg-gray-100 rounded w-40" />
        <div className="h-12 bg-gray-100 rounded-xl" />
        <div className="h-24 bg-gray-100 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-[600px]">

      {/* SECTION HEADER */}
      <div>
        <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
          Use Case Definition
        </h2>
      </div>

      {/* FORM SECTOR */}
      <div className="space-y-5">

        {/* USE CASE TYPE DROPDOWN */}
        <div className="space-y-2">
          <label className="text-[12px] font-medium text-gray-400 block">
            Use Case Type
          </label>
          <div className="relative">
            <select
              value={useCaseType}
              onChange={(e) => setUseCaseType(e.target.value)}
              className="w-full border border-gray-100 rounded-xl py-3.5 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 outline-none appearance-none cursor-pointer font-medium"
            >
              <option value="Technology">Technology</option>
              <option value="Logistics">Logistics</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Finance">Finance / Fintech</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-3 h-3">
              <Image
                src="/images/caret-down.svg"
                alt="Select Dropdown"
                width={12}
                height={12}
                className="opacity-40"
              />
            </div>
          </div>
        </div>

        {/* USE CASE DEFINITION */}
        <div className="space-y-2">
          <label className="text-[12px] font-medium text-gray-400 block">
            Use Case Definition
          </label>
          <div className="w-full border border-gray-100 rounded-xl py-4 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 cursor-not-allowed font-medium leading-relaxed min-h-[80px]">
            {useCaseDefinition}
          </div>
        </div>

      </div>
    </div>
  );
}