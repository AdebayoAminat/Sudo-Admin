

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// interface UserDefinitionProps {
//   businessId: string;
// }

// export default function UserDefinition({ businessId }: UserDefinitionProps) {
//   const [selectedType, setSelectedType] = useState<"individual" | "corporate">("corporate");

//   return (
//     <div className="space-y-6 animate-in fade-in duration-300">

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px]">
        
//         {/* INDIVIDUAL SELECTION CARD */}
//         <div
//           onClick={() => setSelectedType("individual")}
//           className={`border rounded-2xl p-6 flex flex-col items-start gap-4 cursor-pointer relative select-none transition-all duration-200 min-h-[160px] ${
//             selectedType === "individual"
//               ? "border-[#034EA2] shadow-sm bg-white"
//               : "border-gray-200 bg-white hover:border-gray-300"
//           }`}
//         >
//           {/* CUSTOM RADIO SWITCH */}
//           <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200 ${
//             selectedType === "individual" ? "border-[#034EA2]" : "border-gray-300"
//           }`}>
//             {selectedType === "individual" && (
//               <div className="w-2.5 h-2.5 rounded-full bg-[#034EA2]" />
//             )}
//           </div>

//           {/* INNER ICON & TEXT WRAPPER */}
//           <div className="space-y-2 mt-auto">
//             <div className="relative w-6 h-6">
//               <Image
//                 src={
//                   selectedType === "individual"
//                     ? "/images/single-user-active.svg"
//                     : "/images/single-user.svg"
//                 }
//                 alt="Individual Icon"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//             <p className="text-[14px] font-bold text-[#1D2939]">
//               Individual
//             </p>
//           </div>
//         </div>

//         {/* CORPORATE SELECTION CARD */}
//         <div
//           onClick={() => setSelectedType("corporate")}
//           className={`border rounded-2xl p-6 flex flex-col items-start gap-4 cursor-pointer relative select-none transition-all duration-200 min-h-[160px] ${
//             selectedType === "corporate"
//               ? "border-[#034EA2] shadow-sm bg-white"
//               : "border-gray-200 bg-white hover:border-gray-300"
//           }`}
//         >
//           {/* CUSTOM RADIO SWITCH */}
//           <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200 ${
//             selectedType === "corporate" ? "border-[#034EA2]" : "border-gray-300"
//           }`}>
//             {selectedType === "corporate" && (
//               <div className="w-2.5 h-2.5 rounded-full bg-[#034EA2]" />
//             )}
//           </div>

//           {/* INNER ICON & TEXT WRAPPER */}
//           <div className="space-y-2 mt-auto">
//             <div className="relative w-8 h-8">
//               <Image
//                 src={
//                   selectedType === "corporate"
//                     ? "/images/business-active.svg"
//                     : "/images/business.svg"
//                 }
//                 alt="Corporate Icon"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//             <p className="text-[14px] font-bold text-[#1D2939]">
//               Corporate
//             </p>
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

interface UserDefinitionProps {
  businessId: string;
}

const businessService = new BusinessService();

export default function UserDefinition({ businessId }: UserDefinitionProps) {
  const [selectedType, setSelectedType] = useState<"individual" | "corporate" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchType = async () => {
      try {
        const businessRes = await businessService.getBusinessById(businessId);
        if (!("error" in businessRes) && businessRes.data) {
          const reference = businessRes.data?.data?.activationReference;
          if (reference) {
            const complianceRes = await businessService.getBusinessCompliance(reference);
            if (!("error" in complianceRes) && complianceRes.data) {
              const type = complianceRes.data?.data?.type;
              setSelectedType(type?.toLowerCase() === "corporate" ? "corporate" : "individual");
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch compliance type:", err);
      } finally {
        setLoading(false);
      }
    };

    if (businessId) fetchType();
  }, [businessId]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] animate-pulse">
        <div className="h-40 bg-gray-100 rounded-2xl" />
        <div className="h-40 bg-gray-100 rounded-2xl" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px]">

        {/* INDIVIDUAL SELECTION CARD */}
        <div
          onClick={() => setSelectedType("individual")}
          className={`border rounded-2xl p-6 flex flex-col items-start gap-4 cursor-pointer relative select-none transition-all duration-200 min-h-[160px] ${
            selectedType === "individual"
              ? "border-[#034EA2] shadow-sm bg-white"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200 ${
            selectedType === "individual" ? "border-[#034EA2]" : "border-gray-300"
          }`}>
            {selectedType === "individual" && (
              <div className="w-2.5 h-2.5 rounded-full bg-[#034EA2]" />
            )}
          </div>
          <div className="space-y-2 mt-auto">
            <div className="relative w-6 h-6">
              <Image
                src={selectedType === "individual" ? "/images/single-user-active.svg" : "/images/single-user.svg"}
                alt="Individual Icon"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[14px] font-bold text-[#1D2939]">Individual</p>
          </div>
        </div>

        {/* CORPORATE SELECTION CARD */}
        <div
          onClick={() => setSelectedType("corporate")}
          className={`border rounded-2xl p-6 flex flex-col items-start gap-4 cursor-pointer relative select-none transition-all duration-200 min-h-[160px] ${
            selectedType === "corporate"
              ? "border-[#034EA2] shadow-sm bg-white"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200 ${
            selectedType === "corporate" ? "border-[#034EA2]" : "border-gray-300"
          }`}>
            {selectedType === "corporate" && (
              <div className="w-2.5 h-2.5 rounded-full bg-[#034EA2]" />
            )}
          </div>
          <div className="space-y-2 mt-auto">
            <div className="relative w-8 h-8">
              <Image
                src={selectedType === "corporate" ? "/images/business-active.svg" : "/images/business.svg"}
                alt="Corporate Icon"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[14px] font-bold text-[#1D2939]">Corporate</p>
          </div>
        </div>

      </div>
    </div>
  );
}