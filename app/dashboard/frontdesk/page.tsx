// "use client";

// import React, { useState } from "react";
// import EmployeesAttendance from "@/app/components/frontdesk/EmployeesAttendance";
// import VisitorsAttendance from "@/app/components/frontdesk/VisitorsAttendance";
// import IDCardsTab from "@/app/components/frontdesk/IDCardsTab"; 
// import AttendanceHeader from "@/app/components/frontdesk/AttendanceHeader";

// const FrontdeskPage = () => {
//   const [activeTab, setActiveTab] = useState("Employees Attendance");
//   const tabs = ["Employees Attendance", "Visitors Attendance", "ID Cards"];

//   return (
//     <div className="p-2 space-y-2 animate-in fade-in duration-500">

//       {/* Tab Navigation */}
//       <div className="flex items-center gap-8 border-b border-gray-100">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-[14px] font-medium transition-all relative ${
//               activeTab === tab ? "text-[#1D2939]" : "text-gray-400"
//             }`}
//           >
//             {tab}
//             {activeTab === tab && (
//               <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1D2939]" />
//             )}
//           </button>
//         ))}
//       </div>

//       <div className="mt-8">
//         {activeTab === "Employees Attendance" && <EmployeesAttendance />}
//         {activeTab === "Visitors Attendance" && <VisitorsAttendance />}
//         {activeTab === "ID Cards" && <IDCardsTab />}
//       </div>
//     </div>
//   );
// };

// export default FrontdeskPage;



"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EmployeesAttendance from "@/app/components/frontdesk/EmployeesAttendance";
import VisitorsAttendance from "@/app/components/frontdesk/VisitorsAttendance";
import IDCardsTab from "@/app/components/frontdesk/IDCardsTab"; 

// Define a safe type mapping for your camelCase tab states
type FrontdeskTab = "employeesAttendance" | "visitorsAttendance" | "idCards";

function FrontdeskContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Tab configurations matching display text to underlying URL parameters
  const tabs: { label: string; value: FrontdeskTab }[] = [
    { label: "Employees Attendance", value: "employeesAttendance" },
    { label: "Visitors Attendance", value: "visitorsAttendance" },
    { label: "ID Cards", value: "idCards" },
  ];

  // 1. Read ?tab= from URL. Default to "employeesAttendance" if empty or unrecognized
  const rawTab = searchParams.get("tab") as FrontdeskTab;
  const activeTab: FrontdeskTab = ["employeesAttendance", "visitorsAttendance", "idCards"].includes(rawTab)
    ? rawTab
    : "employeesAttendance";

  // 2. Route seamlessly with clean camelCase queries (no encoding rules or %20 required!)
  const handleTabChange = (tabValue: FrontdeskTab) => {
    router.push(`/dashboard/frontdesk?tab=${tabValue}`);
  };

  return (
    <div className="p-2 space-y-2 animate-in fade-in duration-500">
      {/* Tab Navigation */}
      <div className="flex items-center gap-8 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
            className={`pb-4 text-[14px] font-medium transition-all relative ${
              activeTab === tab.value ? "text-[#1D2939]" : "text-gray-400"
            }`}
          >
            {tab.label}
            {activeTab === tab.value && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1D2939]" />
            )}
          </button>
        ))}
      </div>

      {/* Dynamic Tab Render */}
      <div className="mt-8">
        {activeTab === "employeesAttendance" && <EmployeesAttendance />}
        {activeTab === "visitorsAttendance" && <VisitorsAttendance />}
        {activeTab === "idCards" && <IDCardsTab />}
      </div>
    </div>
  );
}

export default function FrontdeskPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-gray-500">Loading frontdesk...</div>}>
      <FrontdeskContent />
    </Suspense>
  );
}