// "use client";
// import React from "react";

// interface RefereeData {
//   id: string;
//   name: string;
//   email: string;
//   status: string;
// }

// interface RefereesProps {
//   businessId: string;
//   invitedReferees?: RefereeData[];
// }

// export default function Referees({
//   businessId,
//   invitedReferees = [], // Defaulting to empty array matching the screenshot state
// }: RefereesProps) {
  
//   const totalReferees = invitedReferees.length;

//   return (
//     <div className="space-y-6 animate-in fade-in duration-300 max-w-[900px]">
      
//       {/* SECTION HEADER */}
//       <div>
//         <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
//           Referee(s)
//         </h2>
//       </div>

//       {/* HORIZONTAL RULE */}
//       <hr className="border-gray-100 max-w-[700px]" />

//       {/* DYNAMIC LIST STATUS PANEL */}
//       <div className="pt-2">
//         {totalReferees === 0 ? (
//           <p className="text-[14px] font-medium text-gray-500">
//             <span className="font-semibold text-[#1D2939]">0</span> Referee Invited
//           </p>
//         ) : (
//           <div className="space-y-3 max-w-[700px]">
//             <p className="text-[14px] font-medium text-gray-500 mb-4">
//               <span className="font-semibold text-[#1D2939]">{totalReferees}</span> Referee{totalReferees > 1 ? "s" : ""} Invited
//             </p>
            
//             {/* Structured data table frame ready for mapping your backend integrations */}
//             <div className="border border-gray-100 rounded-xl divide-y divide-gray-100 overflow-hidden bg-white">
//               {invitedReferees.map((referee) => (
//                 <div key={referee.id} className="p-4 flex items-center justify-between text-[13px]">
//                   <div>
//                     <p className="font-bold text-[#1D2939]">{referee.name}</p>
//                     <p className="text-gray-400 text-[12px]">{referee.email}</p>
//                   </div>
//                   <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-50 text-gray-500 border border-gray-100">
//                     {referee.status}
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

interface RefereeData {
  id: string;
  name: string;
  email: string;
  status: string;
}

interface RefereesProps {
  businessId: string;
}

const businessService = new BusinessService();

export default function Referees({ businessId }: RefereesProps) {
  const [invitedReferees, setInvitedReferees] = useState<RefereeData[]>([]);
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
              const referees = complianceRes.data?.data?.referees || [];
              setInvitedReferees(
                referees.map((r: any) => ({
                  id: r._id || r.id,
                  name: r.name || `${r.firstName || ""} ${r.lastName || ""}`.trim(),
                  email: r.email || r.emailAddress || "",
                  status: r.status || "Invited",
                }))
              );
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch referees:", err);
      } finally {
        setLoading(false);
      }
    };

    if (businessId) fetchData();
  }, [businessId]);

  if (loading) {
    return (
      <div className="space-y-5 animate-pulse max-w-[900px]">
        <div className="h-6 bg-gray-100 rounded w-32" />
        <div className="h-px bg-gray-100 max-w-[700px]" />
        <div className="h-16 bg-gray-100 rounded-xl max-w-[700px]" />
      </div>
    );
  }

  const totalReferees = invitedReferees.length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 max-w-[900px]">

      {/* SECTION HEADER */}
      <div>
        <h2 className="text-[20px] font-bold text-[#1D2939] tracking-tight">
          Referee(s)
        </h2>
      </div>

      <hr className="border-gray-100 max-w-[700px]" />

      <div className="pt-2">
        <p className="text-[14px] font-medium text-gray-500 mb-4">
          <span className="font-semibold text-[#1D2939]">{totalReferees}</span> Referee{totalReferees !== 1 ? "s" : ""} Invited
        </p>

        {totalReferees > 0 && (
          <div className="border border-gray-100 rounded-xl divide-y divide-gray-100 overflow-hidden bg-white max-w-[700px]">
            {invitedReferees.map((referee) => (
              <div key={referee.id} className="p-4 flex items-center justify-between text-[13px]">
                <div>
                  <p className="font-bold text-[#1D2939]">{referee.name}</p>
                  <p className="text-gray-400 text-[12px]">{referee.email}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-50 text-gray-500 border border-gray-100">
                  {referee.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}