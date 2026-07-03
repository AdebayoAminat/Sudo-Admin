// "use client";
// import React from "react";

// interface DirectorDetailsProps {
//   businessId: string;
//   directorData?: {
//     firstName: string;
//     lastName: string;
//     otherName?: string;
//     country: string;
//     state: string;
//     city: string;
//     address: string;
//   };
// }

// const DetailField = ({ label, value }: { label: string; value: string }) => (
//   <div className="flex-1 min-w-[280px]">
//     <label className="text-[12px] font-medium text-gray-400 mb-2 block">
//       {label}
//     </label>
//     <div className="w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 cursor-not-allowed font-medium">
//       {value || "—"}
//     </div>
//   </div>
// );

// export default function DirectorDetails({
//   businessId,
//   directorData = {
//     firstName: "John",
//     lastName: "John",
//     otherName: "",
//     country: "Nigeria",
//     state: "Lagos",
//     city: "Lekki Eti-Osa",
//     address: "10 FESTUS BIKE ROAD FIDISO ESTATE Abijoh",
//   },
// }: DirectorDetailsProps) {
  
//   const handleViewDocument = (docType: string) => {
//     alert(`Opening full-screen view for: ${docType}`);
//   };

//   return (
//     <div className="space-y-8 animate-in fade-in duration-300 max-w-[900px]">
      
//       {/* HEADER SECTION */}
//       <div>
//         <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
//           Director Details
//         </h2>
//       </div>

//       {/* INPUT FORM GRID LAYER */}
//       <div className="space-y-5">
//         <div className="flex flex-wrap gap-5">
//           <DetailField label="First Name" value={directorData.firstName} />
//           <DetailField label="Last Name" value={directorData.lastName} />
//         </div>

//         <div className="flex flex-wrap gap-5">
//           <DetailField label="Other Name (Optional)" value={directorData.otherName || "Enter other name"} />
//           <DetailField label="Country" value={directorData.country} />
//         </div>

//         <div className="flex flex-wrap gap-5">
//           <DetailField label="State" value={directorData.state} />
//           <DetailField label="City" value={directorData.city} />
//         </div>

//         <div className="w-full">
//           <label className="text-[12px] font-medium text-gray-400 mb-2 block">
//             Address
//           </label>
//           <div className="w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 cursor-not-allowed font-medium">
//             {directorData.address}
//           </div>
//         </div>
//       </div>

//       {/* ULTRA COMPACT DOCUMENT PREVIEW SECTOR */}
//       <div className="space-y-3 pt-2">
//         <h3 className="text-[12px] font-bold text-[#1D2939] uppercase tracking-wider">
//           Document Upload
//         </h3>

//         {/* 2x2 ULTRA COMPACT GRID MATRIX */}
//         <div className="grid grid-cols-2 gap-x-4 gap-y-4 max-w-[440px]">
          
//           {/* 1. PASSPORT PHOTOGRAPH */}
//           <div className="space-y-1">
//             <p className="text-[11px] font-medium text-gray-400">
//               Passport Photograph
//             </p>
//             <div className="relative border border-gray-100 rounded-xl overflow-hidden bg-gray-50 h-[110px] w-full max-w-[200px]">
//               <div className="absolute inset-0 bg-[#E11D48]/5 flex items-center justify-center">
//                 <span className="text-[9px] text-[#E11D48]/60 font-semibold uppercase tracking-wider">
//                   Passport
//                 </span>
//               </div>
//             </div>
//             <button
//               onClick={() => handleViewDocument("Passport Photograph")}
//               className="text-[11px] font-bold text-gray-500 hover:text-gray-900 underline block transition-all"
//             >
//               View document
//             </button>
//           </div>

//           {/* 2. GOVERNMENT ISSUED ID CARD */}
//           <div className="space-y-1">
//             <p className="text-[11px] font-medium text-gray-400">
//               ID Card (Govt. Issued)
//             </p>
//             <div className="relative border border-gray-100 rounded-xl overflow-hidden bg-gray-50 h-[110px] w-full max-w-[200px]">
//               <div className="absolute inset-0 bg-[#10B981]/5 flex items-center justify-center">
//                 <span className="text-[9px] text-[#10B981]/70 font-semibold uppercase tracking-wider">
//                   ID Card
//                 </span>
//               </div>
//             </div>
//             <button
//               onClick={() => handleViewDocument("ID Card")}
//               className="text-[11px] font-bold text-gray-500 hover:text-gray-900 underline block transition-all"
//             >
//               View document
//             </button>
//           </div>

//           {/* 3. SIGNATURE */}
//           <div className="space-y-1">
//             <p className="text-[11px] font-medium text-gray-400">
//               Signature
//             </p>
//             <div className="relative border border-gray-100 rounded-xl overflow-hidden bg-white h-[110px] w-full max-w-[200px] flex items-center justify-center p-2">
//               <div className="absolute inset-0 bg-gray-50/40 flex items-center justify-center">
//                 <span className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">
//                   Signature
//                 </span>
//               </div>
//             </div>
//             <button
//               onClick={() => handleViewDocument("Signature")}
//               className="text-[11px] font-bold text-gray-500 hover:text-gray-900 underline block transition-all"
//             >
//               View document
//             </button>
//           </div>

//           {/* 4. UTILITY BILL */}
//           <div className="space-y-1">
//             <p className="text-[11px] font-medium text-gray-400">
//               Utility Bill
//             </p>
//             <div className="relative border border-gray-100 rounded-xl overflow-hidden bg-white h-[110px] w-full max-w-[200px] flex items-center justify-center">
//               <div className="absolute inset-0 bg-gray-50/40 flex items-center justify-center">
//                 <span className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">
//                   Utility Bill
//                 </span>
//               </div>
//             </div>
//             <button
//               onClick={() => handleViewDocument("Utility Bill")}
//               className="text-[11px] font-bold text-gray-500 hover:text-gray-900 underline block transition-all"
//             >
//               View document
//             </button>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import BusinessService from "@/app/service/businesses.service";

interface DirectorDetailsProps {
  businessId: string;
}

const DetailField = ({ label, value }: { label: string; value: string }) => (
  <div className="flex-1 min-w-[280px]">
    <label className="text-[12px] font-medium text-gray-400 mb-2 block">
      {label}
    </label>
    <div className="w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 cursor-not-allowed font-medium min-h-[44px]">
      {value}
    </div>
  </div>
);
const businessService = new BusinessService();

export default function DirectorDetails({ businessId }: DirectorDetailsProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
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
        console.error("Failed to fetch director details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (businessId) fetch();
  }, [businessId]);

  const handleViewDocument = (url: string, docType: string) => {
    if (!url) return alert(`No document available for: ${docType}`);
    window.open(url, "_blank");
  };

  if (loading) {
    return (
      <div className="space-y-5 animate-pulse max-w-[900px]">
        <div className="h-6 bg-gray-100 rounded w-40" />
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-5">
            <div className="flex-1 h-12 bg-gray-100 rounded-xl" />
            <div className="flex-1 h-12 bg-gray-100 rounded-xl" />
          </div>
        ))}
      </div>
    );
  }

  const documents = data?.directorDocuments;
  const address = data?.contactAddress;

  const docItems = [
    {
      label: "Passport Photograph",
      url: documents?.passportUrl,
      accent: "bg-[#E11D48]/5",
      textColor: "text-[#E11D48]/60",
      tag: "Passport",
    },
    {
      label: "ID Card (Govt. Issued)",
      url: documents?.idCardUrl,
      accent: "bg-[#10B981]/5",
      textColor: "text-[#10B981]/70",
      tag: "ID Card",
    },
    {
      label: "Signature",
      url: documents?.signatureUrl,
      accent: "bg-gray-50/40",
      textColor: "text-gray-400",
      tag: "Signature",
    },
    {
      label: "Utility Bill",
      url: documents?.utilityBillUrl,
      accent: "bg-gray-50/40",
      textColor: "text-gray-400",
      tag: "Utility Bill",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-[900px]">

      {/* HEADER */}
      <div>
        <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
          Director Details
        </h2>
      </div>

      {/* FIELDS */}
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5">
          <DetailField label="First Name" value={data?.firstName} />
          <DetailField label="Last Name" value={data?.lastName} />
        </div>

        <div className="flex flex-wrap gap-5">
          <DetailField label="Other Name (Optional)" value={data?.otherNames} />
          <DetailField label="Country" value={address?.country} />
        </div>

        <div className="flex flex-wrap gap-5">
          <DetailField label="State" value={address?.state} />
          <DetailField label="City" value={address?.city} />
        </div>

        <div className="w-full">
          <label className="text-[12px] font-medium text-gray-400 mb-2 block">
            Address
          </label>
          <div className="w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] bg-gray-50/50 cursor-not-allowed font-medium">
            {address?.street || "—"}
          </div>
        </div>
      </div>

      {/* DOCUMENTS */}
      <div className="space-y-3 pt-2">
        <h3 className="text-[12px] font-bold text-[#1D2939] uppercase tracking-wider">
          Document Upload
        </h3>

        <div className="grid grid-cols-2 gap-x-4 gap-y-4 max-w-[440px]">
          {docItems.map((doc) => (
            <div key={doc.label} className="space-y-1">
              <p className="text-[11px] font-medium text-gray-400">{doc.label}</p>
              <div className={`relative border border-gray-100 rounded-xl overflow-hidden ${doc.accent} h-[110px] w-full max-w-[200px]`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  {doc.url ? (
                    doc.url.endsWith(".pdf") ? (
                      <span className={`text-[9px] font-semibold uppercase tracking-wider ${doc.textColor}`}>
                        PDF
                      </span>
                    ) : (
                      <img
                        src={doc.url}
                        alt={doc.label}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <span className={`text-[9px] font-semibold uppercase tracking-wider ${doc.textColor}`}>
                      {doc.tag}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleViewDocument(doc.url, doc.label)}
                className="text-[11px] font-bold text-gray-500 hover:text-gray-900 underline block transition-all"
              >
                View document
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}