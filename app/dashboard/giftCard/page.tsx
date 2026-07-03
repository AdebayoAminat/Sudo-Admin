// "use client";

// import React, { useState } from "react";
// import UsersTab from "@/app/components/giftCards/UsersTab";
    
// import GiftCardRequestsTab from "@/app/components/giftCards/GiftCardRequestsTab";


// type GiftCardTab = "Users" | "Gift Card Requests";

// export default function GiftCardsPage() {
//   const [activeTab, setActiveTab] = useState<GiftCardTab>("Users");

//   const tabs: GiftCardTab[] = ["Users", "Gift Card Requests"];

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "Users": return <UsersTab />;
//       case "Gift Card Requests": return <GiftCardRequestsTab />;
//       default: return <UsersTab />;
//     }
//   };

//   return (
//     <div className="p-3 space-y-7 animate-in fade-in duration-500">
      

//       {/* TAB NAVIGATION */}
//       <div className="flex items-center gap-8 border-b border-gray-100">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-[14px] font-medium transition-all ${
//               activeTab === tab
//                 ? "text-[#1D2939] border-b-2 border-[#1D2939] font-bold"
//                 : "text-gray-400 hover:text-gray-600"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* DYNAMIC CONTENT */}
//       <div className="mt-8">
//         {renderTabContent()}
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import UsersTab from "@/app/components/giftCards/UsersTab";
// import GiftCardRequestsTab from "@/app/components/giftCards/GiftCardRequestsTab";

// type GiftCardTab = "users" | "gift cardrequest";

// function GiftCardsContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // Read ?tab= from URL. Default to "users" if missing or invalid
//   const rawTab = searchParams.get("tab")?.toLowerCase();
//   const activeTab: GiftCardTab = rawTab === "gift card request" ? "gift card request" : "users";

//   const tabs: { label: string; value: GiftCardTab }[] = [
//     { label: "Users", value: "users" },
//     { label: "Gift Card Requests", value: "gift card request" },
//   ];

//   const handleTabChange = (tabValue: GiftCardTab) => {
//     router.push(`/dashboard/giftCard?tab=${encodeURIComponent(tabValue)}`);
//   };

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "users":
//         return <UsersTab />;
//       case "gift card request":
//         return <GiftCardRequestsTab />;
//       default:
//         return <UsersTab />;
//     }
//   };

//   return (
//     <div className="p-3 space-y-7 animate-in fade-in duration-500">
//       {/* TAB NAVIGATION */}
//       <div className="flex items-center gap-8 border-b border-gray-100">
//         {tabs.map((tab) => (
//           <button
//             key={tab.value}
//             onClick={() => handleTabChange(tab.value)}
//             className={`pb-4 text-[14px] font-medium transition-all ${
//               activeTab === tab.value
//                 ? "text-[#1D2939] border-b-2 border-[#1D2939] font-bold"
//                 : "text-gray-400 hover:text-gray-600"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* DYNAMIC CONTENT */}
//       <div className="mt-8">
//         {renderTabContent()}
//       </div>
//     </div>
//   );
// }

// // Next.js requires components using useSearchParams to be wrapped in a Suspense boundary during builds
// export default function GiftCardsPage() {
//   return (
//     <Suspense fallback={<div className="p-6 text-sm text-gray-500">Loading...</div>}>
//       <GiftCardsContent />
//     </Suspense>
//   );
// }

"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import UsersTab from "@/app/components/giftCards/UsersTab";
import GiftCardRequestsTab from "@/app/components/giftCards/GiftCardRequestsTab";

// 1. Update the type definition to use camelCase
type GiftCardTab = "users" | "giftCardRequest";

function GiftCardsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Parse out the base parameter before any slashes (e.g. "giftCardRequest/123" -> "giftCardRequest")
  const rawTab = searchParams.get("tab") || "users";
  const baseTab = rawTab.split("/")[0]; 

  // Now validate against the base string cleanly
  const activeTab: GiftCardTab = baseTab === "giftCardRequest" ? "giftCardRequest" : "users";

  const tabs: { label: string; value: GiftCardTab }[] = [
    { label: "Users", value: "users" },
    { label: "Gift Card Requests", value: "giftCardRequest" },
  ];

  const handleTabChange = (tabValue: GiftCardTab) => {
    // 4. No more encodeURIComponent needed since there are no spaces or special characters!
    router.push(`/dashboard/giftCard?tab=${tabValue}`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "users":
        return <UsersTab />;
      case "giftCardRequest":
        return <GiftCardRequestsTab />;
      default:
        return <UsersTab />;
    }
  };

  return (
    <div className="p-3 space-y-7 animate-in fade-in duration-500">
      {/* TAB NAVIGATION */}
      <div className="flex items-center gap-8 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
            className={`pb-4 text-[14px] font-medium transition-all ${
              activeTab === tab.value
                ? "text-[#1D2939] border-b-2 border-[#1D2939] font-bold"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* DYNAMIC CONTENT */}
      <div className="mt-8">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default function GiftCardsPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-gray-500">Loading...</div>}>
      <GiftCardsContent />
    </Suspense>
  );
}