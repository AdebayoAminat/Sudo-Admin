


// "use client";

// import React, { useEffect, useMemo } from "react";
// import { useRouter } from "next/navigation";

// const teamMembers = [
//   { id: "6644a993c84652243c71bb92", name: "Ayodeji Adewemi", email: "ayodeji@sudo.africa", initials: "AA" },
//   { id: "6644a993c84652243c71bb93", name: "Lyeis John", email: "lyeis@sudo.africa", initials: "LJ" },
//   { id: "6644a993c84652243c71bb94", name: "Kabir Adebayo Shittu", email: "kabir@sudo.africa", initials: "KA" },
//   { id: "6644a993c84652243c71bb95", name: "Umar Yusuf", email: "umar4real@outlook.com", initials: "UY" },
// ];

// export const TeamTab = ({ searchTerm, onCountChange }: any) => {
//   const router = useRouter();

//   const filtered = useMemo(() => {
//     return teamMembers.filter(m => 
//       m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       m.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [searchTerm]);

//   useEffect(() => {
//     onCountChange(filtered.length);
//   }, [filtered.length, onCountChange]);

//   const handleMemberClick = (id: string) => {
//     // Navigate to the dynamic staff route
//     router.push(`/dashboard/sdr-report/${id}?tab=details`);
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//       {filtered.map((member) => (
//         <div 
//           key={member.id} 
//           onClick={() => handleMemberClick(member.id)}
//           className="bg-white border border-gray-100 rounded-2xl relative flex flex-col items-center justify-center aspect-[1/0.9] p-8 text-center cursor-pointer hover:shadow-md hover:border-blue-100 transition-all duration-200 group"
//         >
//           {/* TOP STATUS BAR */}
//           <div className="absolute top-5 left-6 right-6 flex justify-between items-center">
//             <span className="text-[10px] font-bold text-[#1D2939] uppercase tracking-wider">Sdr Member</span>
//             <div className="w-2 h-2 rounded-full bg-[#12B76A]" />
//           </div>

//           {/* AVATAR */}
//           <div className="w-24 h-24 rounded-full border border-gray-100 flex items-center justify-center text-[24px] font-bold text-[#475467] bg-[#F9FAFB] mb-6 group-hover:bg-blue-50 transition-colors">
//             {member.initials}
//           </div>

//           {/* TEXT CONTENT */}
//           <h4 className="text-[15px] font-bold text-[#1D2939] mb-1">{member.name}</h4>
//           <p className="text-[12px] text-gray-400 font-medium">{member.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// };



"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import sdrReportService from "@/app/service/sdr-report.service";

interface SdrMember {
  id: string;
  name: string;
  email: string;
  initials: string;
}

interface TeamTabProps {
  searchTerm: string;
  onCountChange: (count: number) => void;
}

export const TeamTab = ({ searchTerm, onCountChange }: TeamTabProps) => {
  const router = useRouter();
  const [members, setMembers] = useState<SdrMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSdrMembers = async () => {
      setLoading(true);
      const service = new sdrReportService();
      const response = await service.getAllSdrMembers();

      if (response && !("error" in response)) {
        // Accessing response.data based on server payload wrapper keys
        const serverPayload = response.data?.data || response.data;
        
        if (Array.isArray(serverPayload)) {
          const parsedMembers: SdrMember[] = serverPayload
            .filter((item: any) => item && item.member) // Ensure record has a member block
            .map((item: any) => {
              const m = item.member;
              const firstName = m.firstName || "";
              const lastName = m.lastName || "";
              const fullName = `${firstName} ${lastName}`.trim();
              
              // Extract initials strictly from returned data fields
              const initials = (firstName && lastName)
                ? `${firstName[0]}${lastName[0]}`.toUpperCase()
                : fullName.slice(0, 2).toUpperCase();

              return {
                id: m._id, // Extracts inner dynamic routing target id string
                name: fullName,
                email: m.emailAddress,
                initials: initials
              };
            });

          setMembers(parsedMembers);
        }
      }
      setLoading(false);
    };

    fetchSdrMembers();
  }, []);

  const filtered = useMemo(() => {
    return members.filter(m => 
      m.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, members]);

  useEffect(() => {
    if (!loading) {
      onCountChange(filtered.length);
    }
  }, [filtered.length, loading, onCountChange]);

  const handleMemberClick = (id: string) => {
    router.push(`/dashboard/sdr-report/${id}?tab=details`);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="bg-white border border-gray-50 rounded-2xl aspect-[1/0.9] p-8 flex flex-col items-center justify-center animate-pulse">
            <div className="w-24 h-24 rounded-full bg-gray-100 mb-6" />
            <div className="h-4 bg-gray-100 w-32 rounded mb-2" />
            <div className="h-3 bg-gray-50 w-24 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="py-16 text-center text-gray-400 text-[12px] font-medium bg-white border border-gray-50 rounded-2xl shadow-sm">
        No SDR team members found matching "{searchTerm}"
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {filtered.map((member) => (
        <div 
          key={member.id} 
          onClick={() => handleMemberClick(member.id)}
          className="bg-white border border-gray-100 rounded-2xl relative flex flex-col items-center justify-center aspect-[1/0.9] p-8 text-center cursor-pointer hover:shadow-md hover:border-blue-100 transition-all duration-200 group"
        >
          {/* TOP STATUS BAR */}
          <div className="absolute top-5 left-6 right-6 flex justify-between items-center">
            <span className="text-[10px] font-bold text-[#1D2939] uppercase tracking-wider">Sdr Member</span>
            <div className="w-2 h-2 rounded-full bg-[#12B76A]" />
          </div>

          {/* AVATAR */}
          <div className="w-24 h-24 rounded-full border border-gray-100 flex items-center justify-center text-[24px] font-bold text-[#475467] bg-[#F9FAFB] mb-6 group-hover:bg-blue-50 transition-colors">
            {member.initials}
          </div>

          {/* TEXT CONTENT */}
          <h4 className="text-[15px] font-bold text-[#1D2939] mb-1">{member.name}</h4>
          <p className="text-[12px] text-gray-400 font-medium">{member.email}</p>
        </div>
      ))}
    </div>
  );
};