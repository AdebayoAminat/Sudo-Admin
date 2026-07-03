// "use client";
// import React from "react";
// import Image from "next/image";

// interface BusinessDetailsSubTabProps {
//   businessId: string;
//   backendData?: {
//     businessName: string;
//     dba?: string;
//     registrationNumber: string;
//     registrationType: string;
//     registrationCountry: string;
//     supportEmail: string;
//     businessPhoneNumber: string;
//     websiteUrl: string;
//     supportPhoneNumber: string;
//   };
// }

// // Uniform Read-Only Info Field
// const InfoField = ({ label, value, placeholder }: { label: string; value: string; placeholder?: string }) => (
//   <div className="flex-1 min-w-[260px]">
//     <label className="text-[12px] font-medium text-gray-400 mb-2 block">
//       {label}
//     </label>
//     <div className={`w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] font-medium transition-colors bg-gray-50/50 cursor-not-allowed ${
//       value ? "text-[#1D2939]" : "text-gray-300"
//     }`}>
//       {value || placeholder || "—"}
//     </div>
//   </div>
// );

// export default function BusinessDetailsSubTab({
//   businessId,
//   backendData = {
//     businessName: "Middey Technologies Ltd",
//     dba: "",
//     registrationNumber: "RC1951015",
//     registrationType: "Limited Liability",
//     registrationCountry: "Nigeria",
//     supportEmail: "hello@middey.com",
//     businessPhoneNumber: "+243 8082677451", // Keeping typo match from screenshot (+243 vs +234) if desired, or +234
//     websiteUrl: "https://middey.com",
//     supportPhoneNumber: "+234 8082677451"
//   }
// }: BusinessDetailsSubTabProps) {
  
//   return (
//     <div className="space-y-8 animate-in fade-in duration-300 max-w-[900px]">
      
//       {/* HEADER TITLE */}
//       <div>
//         <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
//           Business Details
//         </h2>
//       </div>

//       {/* TEXT FIELD GRID MATRIX */}
//       <div className="space-y-5">
        
//         {/* ROW 1: FULL WIDTH BUSINESS NAME */}
//         <div className="w-full">
//           <InfoField label="Business Name" value={backendData.businessName} />
//         </div>

//         {/* ROW 2: FULL WIDTH DBA */}
//         <div className="w-full">
//           <InfoField 
//             label="Doing Business As (Optional)" 
//             value={backendData.dba || ""} 
//             placeholder="Business name on SUDO or safehaven"
//           />
//         </div>

//         {/* ROW 3: TWO COLUMN REGISTRATION INFO */}
//         <div className="flex flex-wrap gap-5">
//           <InfoField label="Registration Number" value={backendData.registrationNumber} />
//           <InfoField label="Registration Type" value={backendData.registrationType} />
//         </div>

//         {/* ROW 4: TWO COLUMN COUNTRY & EMAIL */}
//         <div className="flex flex-wrap gap-5">
//           {/* Custom element for the dropdown styling look */}
//           <div className="flex-1 min-w-[260px]">
//             <label className="text-[12px] font-medium text-gray-400 mb-2 block">
//               Registration Country
//             </label>
//             <div className="relative w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] font-medium bg-gray-50/50 cursor-not-allowed flex items-center justify-between">
//               <span>{backendData.registrationCountry}</span>
//               <div className="w-3 h-3 relative opacity-30">
//                 <Image 
//                   src="/images/caret-down.svg" 
//                   alt="Dropdown Arrow" 
//                   fill 
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>
          
//           <InfoField label="Support Email" value={backendData.supportEmail} />
//         </div>

//         {/* ROW 5: TWO COLUMN PHONE & WEBSITE */}
//         <div className="flex flex-wrap gap-5">
//           <InfoField label="Bussiness Phone Number" value={backendData.businessPhoneNumber} />
//           <InfoField label="Website URL" value={backendData.websiteUrl} />
//         </div>

//         {/* ROW 6: SUPPORT PHONE NUMBER */}
//         <div className="flex flex-wrap gap-5">
//           <div className="max-w-[440px] w-full">
//             <InfoField label="Support Phone Number" value={backendData.supportPhoneNumber} />
//           </div>
//           {/* Flex spacer element to keep the single column aligned tightly left */}
//           <div className="flex-1 min-w-[260px] hidden sm:block"></div>
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BusinessService from "@/app/service/businesses.service";

interface BusinessDetailsSubTabProps {
  businessId: string;
}

const InfoField = ({ label, value, placeholder }: { label: string; value: string; placeholder?: string }) => (
  <div className="flex-1 min-w-[260px]">
    <label className="text-[12px] font-medium text-gray-400 mb-2 block">
      {label}
    </label>
    <div className={`w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] font-medium transition-colors bg-gray-50/50 cursor-not-allowed ${
      value ? "text-[#1D2939]" : "text-gray-300"
    }`}>
      {value || placeholder || ""}
    </div>
  </div>
);

const businessService = new BusinessService();

export default function BusinessDetailsSubTab({ businessId }: BusinessDetailsSubTabProps) {
  const [data, setData] = useState<any>(null);
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
              setData(complianceRes.data?.data || null);
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch business details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (businessId) fetchData();
  }, [businessId]);

  if (loading) {
    return (
      <div className="space-y-5 animate-pulse max-w-[900px]">
        <div className="h-6 bg-gray-100 rounded w-40" />
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-5">
            <div className="flex-1 h-12 bg-gray-100 rounded-xl" />
            <div className="flex-1 h-12 bg-gray-100 rounded-xl" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[900px]">

      {/* HEADER TITLE */}
      <div>
        <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
          Business Details
        </h2>
      </div>

      {/* TEXT FIELD GRID MATRIX */}
      <div className="space-y-5">

        {/* ROW 1: BUSINESS NAME */}
        <div className="w-full">
          <InfoField label="Business Name" value={data?.buisnessName} />
        </div>

        {/* ROW 2: DBA */}
        <div className="w-full">
          <InfoField
            label="Doing Business As (Optional)"
            value=""
            placeholder="Business name on SUDO or safehaven"
          />
        </div>

        {/* ROW 3: REGISTRATION INFO */}
        <div className="flex flex-wrap gap-5">
          <InfoField label="Registration Number" value={data?.registrationNumber} />
          <InfoField label="Registration Type" value={data?.registrationType} />
        </div>

        {/* ROW 4: COUNTRY & SUPPORT EMAIL */}
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 min-w-[260px]">
            <label className="text-[12px] font-medium text-gray-400 mb-2 block">
              Registration Country
            </label>
            <div className="relative w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] font-medium bg-gray-50/50 cursor-not-allowed flex items-center justify-between">
              <span>{data?.registrationCountry}</span>
              <div className="w-3 h-3 relative opacity-30">
                <Image
                  src="/images/caret-down.svg"
                  alt="Dropdown Arrow"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <InfoField label="Support Email" value={data?.supportEmailAddress} />
        </div>

        {/* ROW 5: PHONE & WEBSITE */}
        <div className="flex flex-wrap gap-5">
          <InfoField label="Business Phone Number" value={data?.companyPhoneNumber} />
          <InfoField label="Website URL" value={data?.websiteUrl} />
        </div>

        {/* ROW 6: SUPPORT PHONE */}
        <div className="flex flex-wrap gap-5">
          <div className="max-w-[440px] w-full">
            <InfoField label="Support Phone Number" value={data?.companySupportPhoneNumber} />
          </div>
          <div className="flex-1 min-w-[260px] hidden sm:block"></div>
        </div>

      </div>
    </div>
  );
}