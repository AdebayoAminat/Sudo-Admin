// "use client";
// import React from "react";

// interface DirectorInvite {
//   id: string;
//   name: string;
//   email: string;
//   status: string;
// }

// interface OtherDirectorsProps {
//   businessId: string;
//   invitedDirectors?: DirectorInvite[];
// }

// export default function OtherDirectors({
//   businessId,
//   invitedDirectors = [], // Defaulting to empty array matching the screenshot state
// }: OtherDirectorsProps) {
  
//   const totalInvited = invitedDirectors.length;

//   return (
//     <div className="space-y-6 animate-in fade-in duration-300 max-w-[900px]">
      
//       {/* SECTION HEADER */}
//       <div>
//         <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
//           Other Directors
//         </h2>
//       </div>

//       {/* HORIZONTAL THIN RULE */}
//       <hr className="border-gray-100 max-w-[700px]" />

//       {/* DYNAMIC LIST COUNT / LIST STATE */}
//       <div className="pt-2">
//         {totalInvited === 0 ? (
//           <p className="text-[14px] font-medium text-gray-500">
//             <span className="font-semibold text-[#1D2939]">0</span> Director Invited
//           </p>
//         ) : (
//           <div className="space-y-3 max-w-[700px]">
//             <p className="text-[14px] font-medium text-gray-500 mb-4">
//               <span className="font-semibold text-[#1D2939]">{totalInvited}</span> Director{totalInvited > 1 ? "s" : ""} Invited
//             </p>
//             {/* Ready map frame for whenever you hook it up to backend data arrays */}
//             <div className="border border-gray-100 rounded-xl divide-y divide-gray-100 overflow-hidden bg-white">
//               {invitedDirectors.map((director) => (
//                 <div key={director.id} className="p-4 flex items-center justify-between text-[13px]">
//                   <div>
//                     <p className="font-bold text-[#1D2939]">{director.name}</p>
//                     <p className="text-gray-400 text-[12px]">{director.email}</p>
//                   </div>
//                   <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-50 text-gray-500 border border-gray-100">
//                     {director.status}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import BusinessService from "@/app/service/businesses.service";

interface DirectorInvite {
  id: string;
  name: string;
  email: string;
  status: string;
}

interface OtherDirectorsProps {
  businessId: string;
}

const businessService = new BusinessService();

export default function OtherDirectors({ businessId }: OtherDirectorsProps) {
  const [invitedDirectors, setInvitedDirectors] = useState<DirectorInvite[]>([]);
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
              const otherDirectors = complianceRes.data?.data?.otherDirectors || [];
              setInvitedDirectors(
                otherDirectors.map((d: any) => ({
                  id: d._id || d.id,
                  name: d.name || `${d.firstName || ""} ${d.lastName || ""}`.trim(),
                  email: d.email || d.emailAddress || "",
                  status: d.status || "Invited",
                }))
              );
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch other directors:", err);
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
        <div className="h-px bg-gray-100 max-w-[700px]" />
        <div className="h-16 bg-gray-100 rounded-xl max-w-[700px]" />
      </div>
    );
  }

  const totalInvited = invitedDirectors.length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-[900px]">

      {/* SECTION HEADER */}
      <div>
        <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
          Other Directors
        </h2>
      </div>

      <hr className="border-gray-100 max-w-[700px]" />

      <div className="pt-2">
        {totalInvited === 0 ? (
          <p className="text-[14px] font-medium text-gray-500">
            <span className="font-semibold text-[#1D2939]">0</span> Director Invited
          </p>
        ) : (
          <div className="space-y-3 max-w-[700px]">
            <p className="text-[14px] font-medium text-gray-500 mb-4">
              <span className="font-semibold text-[#1D2939]">{totalInvited}</span> Director{totalInvited > 1 ? "s" : ""} Invited
            </p>
            <div className="border border-gray-100 rounded-xl divide-y divide-gray-100 overflow-hidden bg-white">
              {invitedDirectors.map((director) => (
                <div key={director.id} className="p-4 flex items-center justify-between text-[13px]">
                  <div>
                    <p className="font-bold text-[#1D2939]">{director.name}</p>
                    <p className="text-gray-400 text-[12px]">{director.email}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-50 text-gray-500 border border-gray-100">
                    {director.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}