// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// interface DirectorVerificationProps {
//   businessId: string;
// }

// export default function DirectorVerification({ businessId }: DirectorVerificationProps) {
//   // Setup local states for dropdowns and fields
//   const [country, setCountry] = useState("Nigeria");
//   const [identityDocument, setIdentityDocument] = useState("BVN");
//   const [bvnNumber, setBvnNumber] = useState("");
//   const [dob, setDob] = useState("");

//   return (
//     <div className="space-y-6 animate-in fade-in duration-300 max-w-[600px]">
      
//       {/* SECTION HEADER */}
//       <div>
//         <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
//           Director Identity Verification
//         </h2>
//       </div>

//       {/* FORM INTERFACES */}
//       <div className="space-y-5">
        
//         {/* COUNTRY SELECT DROPDOWN */}
//         <div className="space-y-2">
//           <label className="text-[12px] font-medium text-gray-400 block">
//             Country
//           </label>
//           <div className="relative">
//             <select
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               className="w-full border border-gray-100 rounded-xl py-3.5 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 outline-none appearance-none cursor-pointer font-medium"
//             >
//               <option value="Nigeria">Nigeria</option>
//               <option value="Ghana">Ghana</option>
//               <option value="Kenya">Kenya</option>
//             </select>
//             {/* Custom local arrow image icon */}
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

//         {/* IDENTITY DOCUMENT SELECT DROPDOWN */}
//         <div className="space-y-2">
//           <label className="text-[12px] font-medium text-gray-400 block">
//             Identity Document
//           </label>
//           <div className="relative">
//             <select
//               value={identityDocument}
//               onChange={(e) => setIdentityDocument(e.target.value)}
//               className="w-full border border-gray-100 rounded-xl py-3.5 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 outline-none appearance-none cursor-pointer font-medium"
//             >
//               <option value="BVN">BVN</option>
//               <option value="NIN">NIN</option>
//               <option value="Passport">International Passport</option>
//             </select>
//             {/* Custom local arrow image icon */}
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

//         {/* DYNAMIC FIELD LABEL BASED ON DOCUMENT SELECTION */}
//         <div className="space-y-2">
//           <label className="text-[12px] font-medium text-gray-400 block">
//             {identityDocument === "BVN" && "Bank Verification Number (BVN)"}
//             {identityDocument === "NIN" && "National Identification Number (NIN)"}
//             {identityDocument === "Passport" && "Passport Number"}
//           </label>
//           <input
//             type="text"
//             value={bvnNumber}
//             onChange={(e) => setBvnNumber(e.target.value)}
//             placeholder={`Enter ${identityDocument}`}
//             className="w-full border border-gray-100 rounded-xl py-3.5 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 placeholder-gray-300 outline-none focus:border-gray-200 transition-colors font-medium"
//           />
//         </div>

//         {/* DATE OF BIRTH INPUT */}
//         <div className="space-y-2">
//           <label className="text-[12px] font-medium text-gray-400 block">
//             Date of Birth
//           </label>
//           <input
//             type="text"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//             placeholder="dd/mm/yyyy"
//             className="w-full border border-gray-100 rounded-xl py-3.5 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 placeholder-gray-300 outline-none focus:border-gray-200 transition-colors font-medium"
//           />
//         </div>

//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BusinessService from "@/app/service/businesses.service";
import countriesData from "@/assets/countries.json";

interface DirectorVerificationProps {
  businessId: string;
}

const businessService = new BusinessService();

export default function DirectorVerification({ businessId }: DirectorVerificationProps) {
  const [country, setCountry] = useState("Nigeria");
  const [identityDocument, setIdentityDocument] = useState("BVN");
  const [bvnNumber, setBvnNumber] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(true);

  // Extract country names from the JSON, ensure Nigeria is first
  const countryNames: string[] = Array.from(
    new Set([
      "Nigeria",
      ...countriesData.map((c: any) => c.name?.common).filter(Boolean),
    ])
  );

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
              const identification = data?.identificationDetails;

              setCountry(identification?.country);
              setIdentityDocument(identification?.type );
              setBvnNumber(identification?.number);
              setDob(
                data?.dateOfBirth
                  ? new Date(data.dateOfBirth).toLocaleDateString("en-GB")
                  : ""
              );
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch director verification:", err);
      } finally {
        setLoading(false);
      }
    };

    if (businessId) fetchData();
  }, [businessId]);

  if (loading) {
    return (
      <div className="space-y-5 animate-pulse max-w-[600px]">
        <div className="h-6 bg-gray-100 rounded w-48" />
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-100 rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-[600px]">

      {/* SECTION HEADER */}
      <div>
        <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
          Director Identity Verification
        </h2>
      </div>

      {/* FORM INTERFACES */}
      <div className="space-y-5">

        {/* COUNTRY SELECT DROPDOWN */}
        <div className="space-y-2">
          <label className="text-[12px] font-medium text-gray-400 block">
            Country
          </label>
          <div className="relative">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-gray-100 rounded-xl py-3.5 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 outline-none appearance-none cursor-pointer font-medium"
            >
              {countryNames.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
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

        {/* IDENTITY DOCUMENT SELECT DROPDOWN */}
        <div className="space-y-2">
          <label className="text-[12px] font-medium text-gray-400 block">
            Identity Document
          </label>
          <div className="relative">
            <select
              value={identityDocument}
              onChange={(e) => setIdentityDocument(e.target.value)}
              className="w-full border border-gray-100 rounded-xl py-3.5 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 outline-none appearance-none cursor-pointer font-medium"
            >
              <option value="BVN">BVN</option>
              <option value="NIN">NIN</option>
              <option value="Passport">International Passport</option>
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

        {/* DYNAMIC FIELD LABEL BASED ON DOCUMENT SELECTION */}
        <div className="space-y-2">
          <label className="text-[12px] font-medium text-gray-400 block">
            {identityDocument === "BVN" && "Bank Verification Number (BVN)"}
            {identityDocument === "NIN" && "National Identification Number (NIN)"}
            {identityDocument === "Passport" && "Passport Number"}
          </label>
          <input
            type="text"
            value={bvnNumber}
            onChange={(e) => setBvnNumber(e.target.value)}
            placeholder={`Enter ${identityDocument}`}
            className="w-full border border-gray-100 rounded-xl py-3.5 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 placeholder-gray-300 outline-none focus:border-gray-200 transition-colors font-medium"
          />
        </div>

        {/* DATE OF BIRTH INPUT */}
        <div className="space-y-2">
          <label className="text-[12px] font-medium text-gray-400 block">
            Date of Birth
          </label>
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="dd/mm/yyyy"
            className="w-full border border-gray-100 rounded-xl py-3.5 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 placeholder-gray-300 outline-none focus:border-gray-200 transition-colors font-medium"
          />
        </div>

      </div>
    </div>
  );
}