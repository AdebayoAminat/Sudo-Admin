

// "use client";
// import React, { Suspense, useEffect, useState, useMemo } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import CardsService from "@/app/service/cards.service";
// import PhysicalCardsList from "@/app/components/cards/PhysicalCardsList";
// import VirtualCardsList from "@/app/components/cards/VirtualCardsList";
// import CardDetails from "@/app/components/cards/CardDetails";
// import CreditCardRequest from "@/app/components/cards/CreditCardRequest";
// import PhysicalCardOrder from "@/app/components/cards/PhysicalCardOrder";


// function CardsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const activeTab = searchParams.get("tab") || "physical-cards";
//   const selectedCardId = searchParams.get("id");
//   const isDetailView = searchParams.get("view") === "detail";

//   const cardsService = useMemo(() => new CardsService(), []);
//   const [selectedCard, setSelectedCard] = useState<any>(null);
//   const [loadingCard, setLoadingCard] = useState(false);

//   const tabs = [
//     { id: "physical-cards", label: "Physical Cards" },
//     { id: "virtual-cards", label: "Virtual Cards" },
//     { id: "physical-order", label: "Physical Card Order" },
//     { id: "credit-requests", label: "Credit Card Requests" },
//   ];

//   // Fetch specific card profile details when id parameter exists in view
//   useEffect(() => {
//     if (isDetailView && selectedCardId) {
//       const fetchCardDetails = async () => {
//         setLoadingCard(true);
//         const res = await cardsService.getCardByID(selectedCardId);
//         if (res?.data) {
//           setSelectedCard(res.data);
//         } else {
//           console.error("Failed to recover target card info.");
//         }
//         setLoadingCard(false);
//       };
//       fetchCardDetails();
//     } else {
//       setSelectedCard(null);
//     }
//   }, [isDetailView, selectedCardId, cardsService]);

//   const handleCardSelect = (id: string) => {
//     router.push(`/dashboard/cards?tab=${activeTab}&view=detail&id=${id}`);
//   };

//   if (isDetailView) {
//     if (loadingCard) {
//       return <div className="p-8 text-gray-400 text-[13px] animate-pulse">Loading Card Record Details...</div>;
//     }
//     if (selectedCard) {
//       return <CardDetails card={selectedCard} />;
//     }
//   }

//   return (
//     <div className="space-y-6 min-h-screen">
//       {/* Navigation Tabs */}
//       <div className="flex gap-8 border-b border-gray-50">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => router.push(`/dashboard/cards?tab=${tab.id}`)}
//             className={`pb-4 text-[13px] font-bold transition-all ${
//               activeTab === tab.id
//                 ? "text-[#034EA2] border-b-2 border-[#034EA2]"
//                 : "text-gray-400 hover:text-gray-600"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="pt-2">
//         {activeTab === "physical-cards" && (
//           <PhysicalCardsList onSelect={handleCardSelect} type="physical" />
//         )}
//         {activeTab === "virtual-cards" && (
//           <VirtualCardsList onSelect={handleCardSelect} type="virtual" />
//         )}
//         {activeTab === "physical-order" && <PhysicalCardOrder />}
//         {activeTab === "credit-requests" && <CreditCardRequest />}
//       </div>
//     </div>
//   );
// }

// export default function CardsPage() {
//   return (
//     <Suspense fallback={<div className="p-8 text-gray-400 text-[13px]">Loading Cards...</div>}>
//       <CardsPageContent />
//     </Suspense>
//   );
// }

"use client";
import React, { Suspense, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CardsService from "@/app/service/cards.service";
import PhysicalCardsList from "@/app/components/cards/PhysicalCardsList";
import VirtualCardsList from "@/app/components/cards/VirtualCardsList";
import CreditCardRequest from "@/app/components/cards/CreditCardRequest";
import PhysicalCardOrder from "@/app/components/cards/PhysicalCardOrder";

function CardsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("tab") || "physical-cards";
  const selectedCardId = searchParams.get("id");
  const isDetailView = searchParams.get("view") === "detail";

  const tabs = [
    { id: "physical-cards", label: "Physical Cards" },
    { id: "virtual-cards", label: "Virtual Cards" },
    { id: "physical-order", label: "Physical Card Order" },
    { id: "credit-requests", label: "Credit Card Requests" },
  ];

  // Redirect to the dedicated structural dynamic id subroute if a detail view is requested
  useEffect(() => {
    if (isDetailView && selectedCardId) {
      router.replace(`/dashboard/cards/${selectedCardId}`);
    }
  }, [isDetailView, selectedCardId, router]);

  const handleCardSelect = (id: string) => {
    router.push(`/dashboard/cards/${id}`);
  };

  // Prevent flash rendering the rest of the dashboard layout while redirecting
  if (isDetailView) {
    return <div className="p-8 text-gray-400 text-[13px] animate-pulse">Loading Card Record Details...</div>;
  }

  return (
    <div className="space-y-6 min-h-screen">
      {/* Navigation Tabs */}
      <div className="flex gap-8 border-b border-gray-50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => router.push(`/dashboard/cards?tab=${tab.id}`)}
            className={`pb-4 text-[13px] font-bold transition-all ${
              activeTab === tab.id
                ? "text-[#034EA2] border-b-2 border-[#034EA2]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-2">
        {activeTab === "physical-cards" && (
          <PhysicalCardsList onSelect={handleCardSelect} type="physical" />
        )}
        {activeTab === "virtual-cards" && (
          <VirtualCardsList onSelect={handleCardSelect} type="virtual" />
        )}
        {activeTab === "physical-order" && <PhysicalCardOrder />}
        {activeTab === "credit-requests" && <CreditCardRequest />}
      </div>
    </div>
  );
}

export default function CardsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-gray-400 text-[13px]">Loading Cards...</div>}>
      <CardsPageContent />
    </Suspense>
  );
}