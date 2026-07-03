// "use client";
// import React from "react";

// interface BusinessDocumentProps {
//   businessId: string;
//   serviceName?: string;
// }

// export default function BusinessDocument({
//   businessId,
//   serviceName = "SUDO",
// }: BusinessDocumentProps) {
  
//   const handleViewDocument = (docType: string) => {
//     alert(`Opening full-screen file for: ${docType}`);
//   };

//   // Reusable Array to map documents quickly
//   const corporateDocuments = [
//     { label: "Incorporation Certificate" },
//     { label: "CAC02 and 07 (Status Report)" },
//     { label: "Memat Certificate" },
//     { label: "Proof of Address" },
//   ];

//   return (
//     <div className="space-y-6 animate-in fade-in duration-300 max-w-[900px]">
      
//       {/* HEADER TITLE */}
//       <div>
//         <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
//           Business Document Upload
//         </h2>
//       </div>

//       {/* SERVICE IDENTIFIER */}
//       <div className="space-y-1">
//         <p className="text-[12px] font-medium text-gray-400">
//           Service(s) submitting for
//         </p>
//         <p className="text-[14px] font-bold text-[#1D2939]">
//           {serviceName}
//         </p>
//       </div>

//       {/* HORIZONTAL RULE */}
//       <hr className="border-gray-100 max-w-[700px]" />

//       {/* COMPACT MATRIX GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5 max-w-[700px] pt-2">
//         {corporateDocuments.map((doc) => (
//           <div key={doc.label} className="space-y-1">
//             <p className="text-[11px] font-medium text-gray-400 truncate max-w-[200px]" title={doc.label}>
//               {doc.label}
//             </p>
            
//             {/* COMPACT PDF BOX THUMBNAIL */}
//             <div className="relative border border-gray-100 rounded-xl overflow-hidden bg-white h-[110px] w-full max-w-[200px] flex items-center justify-center">
//               <div className="absolute inset-0 bg-gray-50/40 flex items-center justify-center">
//                 <span className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">
//                   PDF Preview
//                 </span>
//               </div>
//             </div>

//             {/* ACTION TEXT */}
//             <button
//               onClick={() => handleViewDocument(doc.label)}
//               className="text-[11px] font-bold text-gray-500 hover:text-gray-900 underline block transition-all"
//             >
//               View Document
//             </button>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }



"use client";
import React, { useState, useEffect } from "react";
import BusinessService from "@/app/service/businesses.service";

interface BusinessDocumentProps {
  businessId: string;
}

const businessService = new BusinessService();

export default function BusinessDocument({ businessId }: BusinessDocumentProps) {
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
        console.error("Failed to fetch business documents:", err);
      } finally {
        setLoading(false);
      }
    };

    if (businessId) fetchData();
  }, [businessId]);

  const handleViewDocument = (url: string, docType: string) => {
    if (!url) return alert(`No document available for: ${docType}`);
    window.open(url, "_blank");
  };

  if (loading) {
    return (
      <div className="space-y-5 animate-pulse max-w-[900px]">
        <div className="h-6 bg-gray-100 rounded w-48" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5 max-w-[700px]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-1">
              <div className="h-3 bg-gray-100 rounded w-24" />
              <div className="h-[110px] bg-gray-100 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const docs = data?.documents;
  const submittedFor = data?.submittedFor || [];

  const corporateDocuments = [
    {
      label: "Incorporation Certificate",
      url: docs?.certificateUrl,
    },
    {
      label: "CAC02 and 07 (Status Report)",
      url: docs?.statusReportUrl,
    },
    {
      label: "Memat Certificate",
      url: docs?.mematUrl,
    },
    {
      label: "Proof of Address",
      url: docs?.utilityBillUrl,
    },
    {
      label: "Board Resolution",
      url: docs?.boardResolutionUrl,
    },
    {
      label: "AML Policy",
      url: docs?.amlPolicyUrl,
    },
    {
      label: "Operating License",
      url: docs?.operatingLicenseUrl,
    },
  ].filter((doc) => doc.url); // Only show docs that have a URL

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-[900px]">

      {/* HEADER TITLE */}
      <div>
        <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
          Business Document Upload
        </h2>
      </div>

      {/* SERVICE IDENTIFIER */}
      <div className="space-y-1">
        <p className="text-[12px] font-medium text-gray-400">
          Service(s) submitting for
        </p>
        <p className="text-[14px] font-bold text-[#1D2939]">
          {submittedFor.join(", ") || "—"}
        </p>
      </div>

      {/* HORIZONTAL RULE */}
      <hr className="border-gray-100 max-w-[700px]" />

      {/* DOCUMENT GRID */}
      {corporateDocuments.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5 max-w-[700px] pt-2">
          {corporateDocuments.map((doc) => (
            <div key={doc.label} className="space-y-1">
              <p className="text-[11px] font-medium text-gray-400 truncate max-w-[200px]" title={doc.label}>
                {doc.label}
              </p>

              {/* PDF THUMBNAIL */}
              <div className="relative border border-gray-100 rounded-xl overflow-hidden bg-white h-[110px] w-full max-w-[200px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gray-50/40 flex items-center justify-center">
                  <span className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">
                    PDF Preview
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleViewDocument(doc.url, doc.label)}
                className="text-[11px] font-bold text-gray-500 hover:text-gray-900 underline block transition-all"
              >
                View Document
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400 text-sm">No documents uploaded</p>
        </div>
      )}

    </div>
  );
}