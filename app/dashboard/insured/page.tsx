// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import OrganizationsTab from "../../components/insured/OrganizationsTab";
// import AgentsTab from "../../components/insured/AgentsTab";
// import TransactionsTab from "../../components/insured/TransactionsTab";
// import TerminalsTab from "../../components/insured/TerminalsTab";
// import LoyaltyTab from "../../components/insured/LoyaltyTab";
// import CardOrdersTab from "../../components/insured/CardOrdersTab";


// type InsuredTab = "Organizations" | "Agents" | "Transactions" | "All Terminals" | "Loyalty Cards" | "Card Orders";

// export default function InsuredPage() {
//   const [activeTab, setActiveTab] = useState<InsuredTab>("Organizations");

//   const tabs: InsuredTab[] = [
//     "Organizations",
//     "Agents",
//     "Transactions",
//     "All Terminals",
//     "Loyalty Cards",
//     "Card Orders",
//   ];

//   // Map tabs to their components
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "Organizations": return <OrganizationsTab />;
//       case "Agents": return <AgentsTab />;
//       case "Transactions": return <TransactionsTab />;
//       case "All Terminals": return <TerminalsTab />;
//       case "Loyalty Cards": return <LoyaltyTab />;
//       case "Card Orders": return <CardOrdersTab />;
//       default: return <OrganizationsTab />;
//     }
//   };

//   return (
//     <div className="p-8 space-y-7 animate-in fade-in duration-500">
//       {/* TAB NAVIGATION */}
//       <div className="flex items-center gap-8 border-b border-gray-100">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-[13px] font-medium transition-all ${
//               activeTab === tab
//                 ? "text-[#1D2939] border-b-2 border-[#1D2939] font-bold"
//                 : "text-gray-400 hover:text-gray-600"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* DYNAMIC CONTENT FROM COMPONENTS */}
//       {renderTabContent()}
//     </div>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import OrganizationsTab from "../../components/insured/OrganizationsTab";
// import AgentsTab from "../../components/insured/AgentsTab";
// import TransactionsTab from "../../components/insured/TransactionsTab";
// import TerminalsTab from "../../components/insured/TerminalsTab";
// import LoyaltyTab from "../../components/insured/LoyaltyTab";
// import CardOrdersTab from "../../components/insured/CardOrdersTab";

// type InsuredTab = "Organizations" | "Agents" | "Transactions" | "All Terminals" | "Loyalty Cards" | "Card Orders";

// export default function InsuredPage() {
//   const [activeTab, setActiveTab] = useState<InsuredTab>("Organizations");

//   const tabs: InsuredTab[] = [
//     "Organizations",
//     "Agents",
//     "Transactions",
//     "All Terminals",
//     "Loyalty Cards",
//     "Card Orders",
//   ];

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "Organizations": return <OrganizationsTab />;
//       case "Agents": return <AgentsTab />;
//       case "Transactions": return <TransactionsTab />;
//       case "All Terminals": return <TerminalsTab />;
//       case "Loyalty Cards": return <LoyaltyTab />;
//       case "Card Orders": return <CardOrdersTab />;
//       default: return <OrganizationsTab />;
//     }
//   };

//   return (
//     <div className="p-3 space-y-7 animate-in fade-in duration-500">
//       <div className="flex items-center gap-8 border-b border-gray-100">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-[13px] font-medium transition-all ${
//               activeTab === tab
//                 ? "text-[#1D2939] border-b-2 border-[#1D2939] font-bold"
//                 : "text-gray-400 hover:text-gray-600"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <div className="w-full">
//         {renderTabContent()}
//       </div>
//     </div>
//   );
// }


"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import OrganizationsTab from "../../components/insured/OrganizationsTab";
import AgentsTab from "../../components/insured/AgentsTab";
import TransactionsTab from "../../components/insured/TransactionsTab";
import TerminalsTab from "../../components/insured/TerminalsTab";
import LoyaltyTab from "../../components/insured/LoyaltyTab";
import CardOrdersTab from "../../components/insured/CardOrdersTab";

type InsuredTab = "Organizations" | "Agents" | "Transactions" | "All Terminals" | "Loyalty Cards" | "Card Orders";

export default function InsuredPage() {
  const router = useRouter();
  const searchParams = useSearchParams();


  const currentTabParam = searchParams.get("tab") || "organizations";

  // Determine active tab by looking at the base string before any forward slashes
  let activeTab: "Organizations" | "Agents" | "Transactions" | "All Terminals" | "Loyalty Cards" | "Card Orders" = "Organizations";

if (currentTabParam.startsWith("organizations")) {
  activeTab = "Organizations";
} else if (currentTabParam.startsWith("agents")) {
  activeTab = "Agents"; // This ensures 'agents/id' stays locked on the Agents tab component!
} else if (currentTabParam === "transactions") {
  activeTab = "Transactions";
} else if (currentTabParam === "terminals") {
  activeTab = "All Terminals";
} else if (currentTabParam === "loyalty") {
  activeTab = "Loyalty Cards";
} else if (currentTabParam === "orders") {
  activeTab = "Card Orders";
}

  const tabs: { label: InsuredTab; value: string }[] = [
    { label: "Organizations", value: "organizations" },
    { label: "Agents", value: "agents" },
    { label: "Transactions", value: "transactions" },
    { label: "All Terminals", value: "terminals" },
    { label: "Loyalty Cards", value: "loyalty" },
    { label: "Card Orders", value: "orders" },
  ];

  const handleTabChange = (tabValue: string) => {
    router.push(`/dashboard/insured?tab=${tabValue}`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Organizations": return <OrganizationsTab />;
      case "Agents": return <AgentsTab />;
      case "Transactions": return <TransactionsTab />;
      case "All Terminals": return <TerminalsTab />;
      case "Loyalty Cards": return <LoyaltyTab />;
      case "Card Orders": return <CardOrdersTab />;
      default: return <OrganizationsTab />;
    }
  };

  return (
    <div className="p-3 space-y-7 animate-in fade-in duration-500">
      <div className="flex items-center gap-8 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleTabChange(tab.value)}
            className={`pb-4 text-[13px] font-medium transition-all ${
              activeTab === tab.label
                ? "text-[#1D2939] border-b-2 border-[#1D2939] font-bold"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full">
        {renderTabContent()}
      </div>
    </div>
  );
}