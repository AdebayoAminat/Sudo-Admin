// "use client";
// import React from "react";
// import CardItem from "./CardItem";

// interface ListProps {
//   onSelect: (id: string) => void;
// }

// export default function VirtualCardsList({ onSelect }: ListProps) {
//   // Mock data - replace with your actual data fetching
//   const cards = [
//     {
//       id: "1",
//       name: "Platnova Technologies Limited",
//       last4: "2661",
//       brand: "verve",
//       status: "Active",
//     },
//     {
//       id: "2",
//       name: "SAW TECHNOLOGIES LIMITED",
//       last4: "6177",
//       brand: "verve",
//       status: "Active",
//     },
//     {
//       id: "3",
//       name: "Yousend",
//       last4: "3986",
//       brand: "verve",
//       status: "Active",
//     },
//   ];

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <span className="text-[12px] text-gray-400">
//           Showing 0 - {cards.length} of 1,760 Physical Cards
//         </span>
//         <div className="flex gap-4">
//           <input
//             type="text"
//             placeholder="name, email, type"
//             className="px-4 py-2 border border-gray-100 rounded-lg text-[13px]"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cards.map((card) => (
//           <CardItem
//             key={card.id}
//             card={card}
//             onClick={() => onSelect(card.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import CardItem from "./CardItem";

// interface ListProps {
//   onSelect: (id: string) => void;
// }

// export default function VirtualCardsList({ onSelect }: ListProps) {
//   // Example data mapped to your new BusinessCard style
//   const cards = [
//     {
//       id: "1",
//       holder: "Technologies Limited",
//       last4: "2661",
//       brand: "verve",
//       type: "Physical",
//       status: "Active",
//       expiry: "12/28",
//       balance: "$0.00",
//       businessId: "62f4e8811350c0249dbb823d",
//       currency: "USD",
//       cvv: "***",
//       defaultPin: "****",
//       twoFactor: "Yes",
//       providerStatus: "Active",
//       createdAt: "Apr 7, 2026, 8:10:13 AM",
//       updatedAt: "Apr 7, 2026, 8:10:13 AM",
//     },
//     {
//       id: "2",
//       holder: "Arms Solutions",
//       last4: "6177",
//       brand: "verve",
//       type: "Physical",
//       status: "Active",
//       expiry: "09/27",
//       balance: "$0.00",
//       businessId: "62f4e8811350c0249dbb823d",
//       currency: "USD",
//       cvv: "***",
//       defaultPin: "****",
//       twoFactor: "Yes",
//       providerStatus: "Active",
//       createdAt: "Apr 7, 2026, 8:10:13 AM",
//       updatedAt: "Apr 7, 2026, 8:10:13 AM",
//     },
//     {
//       id: "3",
//       holder: "Finance Inc",
//       last4: "3986",
//       brand: "verve",
//       type: "Physical",
//       status: "Active",
//       expiry: "05/26",
//       balance: "$0.00",
//       businessId: "62f4e8811350c0249dbb823d",
//       currency: "USD",
//       cvv: "***",
//       defaultPin: "****",
//       twoFactor: "Yes",
//       providerStatus: "Active",
//       createdAt: "Apr 7, 2026, 8:10:13 AM",
//       updatedAt: "Apr 7, 2026, 8:10:13 AM",
//     },
//   ];

// "use client";
// import React from "react";
// import CardItem from "./CardItem";

// // CRITICAL: Add 'export' here too
// export const virtualCardsMock = [
//   {
//     id: "4",
//     holder: "Technologies Limited",
//     last4: "2661",
//     brand: "verve",
//     type: "Physical",
//     status: "Active",
//     expiry: "12/28",
//     balance: "$10,000.00",
//     businessId: "62f4e8811350c0249dbb823d",
//     currency: "USD",
//     cvv: "***",
//     defaultPin: "****",
//     twoFactor: "Yes",
//     providerStatus: "Active",
//     createdAt: "Apr 7, 2026, 8:10:13 AM",
//     updatedAt: "Apr 7, 2026, 8:10:13 AM",
//   },
//   {
//     id: "5",
//     holder: "Arms Solutions",
//     last4: "6177",
//     brand: "verve",
//     type: "Physical",
//     status: "Active",
//     expiry: "09/27",
//     balance: "$250,000.00",
//     businessId: "62f4e8811350c0249dbb823d",
//     currency: "USD",
//     cvv: "***",
//     defaultPin: "****",
//     twoFactor: "Yes",
//     providerStatus: "Active",
//     createdAt: "Apr 7, 2026, 8:10:13 AM",
//     updatedAt: "Apr 7, 2026, 8:10:13 AM",
//   },
//   {
//     id: "6",
//     holder: "Finance Inc",
//     last4: "3986",
//     brand: "verve",
//     type: "Physical",
//     status: "Active",
//     expiry: "05/26",
//     balance: "$100.00",
//     businessId: "62f4e8811350c0249dbb823d",
//     currency: "USD",
//     cvv: "***",
//     defaultPin: "****",
//     twoFactor: "Yes",
//     providerStatus: "Active",
//     createdAt: "Apr 7, 2026, 8:10:13 AM",
//     updatedAt: "Apr 7, 2026, 8:10:13 AM",
//   },
// ];

// interface ListProps {
//   onSelect: (id: string) => void;
// }

// export default function VirtualCardsList({ onSelect }: ListProps) {
//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <span className="text-[12px] text-gray-400 font-medium">
//           Showing 0 - {virtualCardsMock.length} of 1,760 Virtual Cards
//         </span>

//         <div className="flex gap-3">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="name, email, type"
//               className="pl-4 pr-10 py-2 border border-gray-100 rounded-lg text-[13px] bg-gray-50/50 w-[240px] focus:outline-none focus:ring-1 focus:ring-blue-100"
//             />
//             <div className="absolute right-3 top-2.5 opacity-30">
//               <svg
//                 width="14"
//                 height="14"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="3"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <path d="m21 21-4.3-4.3" />
//               </svg>
//             </div>
//           </div>
//           <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-gray-50">
//             <span className="w-4 h-4 rounded-full bg-blue-900 text-white text-[10px] flex items-center justify-center">
//               0
//             </span>
//             Filter(s)
//           </button>
//         </div>
//       </div>

//       {/* 3-Column Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {virtualCardsMock.map((card) => (
//           <CardItem
//             key={card.id}
//             card={card}
//             onClick={() => onSelect(card.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useEffect, useState, useMemo } from "react";
// import CardItem from "./CardItem";
// import CardsService from "@/app/service/cards.service";

// interface ListProps {
//   onSelect: (id: string) => void;
// }

// export default function VirtualCardsList({ onSelect }: ListProps) {
//   const cardsService = useMemo(() => new CardsService(), []);

//   // State Management
//   const [cards, setCards] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState<string>("");

//   // Pagination Tracking States
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const [totalPages, setTotalPages] = useState<number>(1);
//   const [totalRecords, setTotalRecords] = useState<number>(0);
//   const itemsPerPage = 25;

//   useEffect(() => {
//     let isMounted = true;

//     async function fetchVirtualCards() {
//       setLoading(true);
//       setError(null);
      
//       const response = await cardsService.getAllCards(currentPage, itemsPerPage, "virtual");

//       if (!isMounted) return;

//       const responseEnvelope = response?.data;
//       const cardsArray = responseEnvelope?.data;
//       const paginationMeta = responseEnvelope?.pagination;

//       if (response && response.status >= 200 && response.status < 300 && Array.isArray(cardsArray)) {
//         setCards(cardsArray);

//         if (paginationMeta) {
//           setTotalPages(Number(paginationMeta.pages) || 1);
//           setTotalRecords(Number(paginationMeta.total) || 0);
//         }
//       } else {
//         const errorMsg = response?.error?.message || response?.error || "Failed to load virtual cards.";
//         setError(errorMsg);
//       }
//       setLoading(false);
//     }

//     fetchVirtualCards();

//     return () => {
//       isMounted = false;
//     };
//   }, [cardsService, currentPage]);

//   // Dynamic Item Range Calculations
//   const itemRangeText = useMemo(() => {
//     if (totalRecords === 0) return "Showing 0 - 0";
//     const start = currentPage * itemsPerPage + 1;
//     const end = Math.min((currentPage + 1) * itemsPerPage, totalRecords);
//     return `Showing ${start} - ${end}`;
//   }, [currentPage, totalRecords]);

//   // Client side filtration within the active page collection
//   const filteredCards = useMemo(() => {
//     if (!searchTerm.trim()) return cards;
//     const term = searchTerm.toLowerCase();
//     return cards.filter((card) => {
//       const accountName = card.account?.accountName?.toLowerCase() || "";
//       const maskedPan = card.maskedPan || "";
//       const status = card.status?.toLowerCase() || "";
//       const brand = card.brand?.toLowerCase() || "";

//       return (
//         accountName.includes(term) ||
//         maskedPan.includes(term) ||
//         status.includes(term) ||
//         brand.includes(term)
//       );
//     });
//   }, [searchTerm, cards]);

//   // Numbered pagination layout window generator
//   const paginationRange = useMemo(() => {
//     const range: number[] = [];
//     let start = Math.max(0, currentPage - 2);
//     let end = Math.min(totalPages - 1, start + 4);
    
//     if (end - start < 4) {
//       start = Math.max(0, end - 4);
//     }
    
//     for (let i = start; i <= end; i++) {
//       range.push(i);
//     }
//     return range;
//   }, [currentPage, totalPages]);

//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
//         {[1, 2, 3].map((n) => (
//           <div key={n} className="border border-gray-100 rounded-xl p-6 space-y-4 animate-pulse bg-gray-50/50 h-[200px]" />
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-8 border border-red-100 rounded-xl bg-red-50/30 text-center space-y-3">
//         <p className="text-[13px] text-red-600 font-medium">Error: {error}</p>
//         <button 
//           onClick={() => setCurrentPage(currentPage)}
//           className="text-[12px] bg-white border border-red-200 px-3 py-1.5 rounded-lg text-red-700 hover:bg-red-50 font-semibold"
//         >
//           Retry Request
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header Controller Row */}
//       <div className="flex justify-between items-center">
//         <span className="text-[14px] text-gray-400 font-medium">
//           {itemRangeText} of {totalRecords.toLocaleString()} Virtual Cards
//         </span>

//         <div className="flex gap-3">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search current page entries..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-4 pr-10 py-2 border border-gray-100 rounded-lg text-[13px] bg-gray-50/50 w-[240px] focus:outline-none focus:ring-1 focus:ring-blue-100 text-gray-700"
//             />
//             <div className="absolute right-3 top-2.5 opacity-30">
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//                 <circle cx="11" cy="11" r="8" />
//                 <path d="m21 21-4.3-4.3" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Grid Content Layout */}
//       {filteredCards.length === 0 ? (
//         <div className="p-12 text-center border border-dashed border-gray-200 rounded-xl bg-gray-50/30">
//           <p className="text-[13px] text-gray-400">No virtual cards located on this page view sheet.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredCards.map((card) => {
//             const cardId = card.id || card._id;
//             const rawBalance = card.account?.availableBalance ?? card.account?.currentBalance ?? 0;
//             const currencyCode = card.currency || card.account?.currency || 'NGN';
//             const expiryDate = card.expiryMonth && card.expiryYear ? `${card.expiryMonth}/${card.expiryYear}` : "MM/YY";

//             return (
//               <CardItem
//                 key={cardId}
//                 card={{
//                   ...card,
//                   id: cardId,
//                   holder: card.account?.accountName || "Unknown Holder",
//                   last4: card.maskedPan ? card.maskedPan.slice(-4) : "****",
//                   expiry: expiryDate,
//                   balance: new Intl.NumberFormat('en-NG', { style: 'currency', currency: currencyCode }).format(rawBalance)
//                 }}
//                 onClick={() => onSelect(cardId)}
//               />
//             );
//           })}
//         </div>
//       )}

//       {/* Footer Navigation Elements */}
//       <div className="flex justify-center items-center gap-2 pt-6 border-t border-gray-50">
//         <button
//           disabled={currentPage === 0}
//           onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
//           className="p-2 border border-gray-100 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition"
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//             <path d="m15 18-6-6 6-6"/>
//           </svg>
//         </button>

//         <div className="flex gap-1">
//           {paginationRange.map((pageIndex) => (
//             <button
//               key={pageIndex}
//               onClick={() => setCurrentPage(pageIndex)}
//               className={`w-8 h-8 rounded-lg text-[13px] font-bold transition-all ${
//                 currentPage === pageIndex
//                   ? "bg-black text-white"
//                   : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
//               }`}
//             >
//               {pageIndex + 1}
//             </button>
//           ))}
//         </div>

//         <button
//           disabled={currentPage >= totalPages - 1}
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//           className="p-2 border border-gray-100 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition"
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//             <path d="m9 18 6-6-6-6"/>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useEffect, useState, useMemo } from "react";
import CardItem from "./CardItem";
import CardsService from "@/app/service/cards.service";

interface ListProps {
  onSelect: (id: string) => void;
}

export default function VirtualCardsList({ onSelect }: ListProps) {
  const cardsService = useMemo(() => new CardsService(), []);

  // State Management
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Pagination Tracking States
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const itemsPerPage = 25;

  useEffect(() => {
    let isMounted = true;

    async function fetchVirtualCards() {
      setLoading(true);
      setError(null);
      
      const response = await cardsService.getAllCards(currentPage, itemsPerPage, "virtual");

      if (!isMounted) return;

      const responseEnvelope = response?.data;
      const cardsArray = responseEnvelope?.data;
      const paginationMeta = responseEnvelope?.pagination;

      if (response && response.status >= 200 && response.status < 300 && Array.isArray(cardsArray)) {
        setCards(cardsArray);

        if (paginationMeta) {
          setTotalPages(Number(paginationMeta.pages) || 1);
          setTotalRecords(Number(paginationMeta.total) || 0);
        }
      } else {
        const errorMsg = response?.error?.message || response?.error || "Failed to load virtual cards.";
        setError(errorMsg);
      }
      setLoading(false);
    }

    fetchVirtualCards();

    return () => {
      isMounted = false;
    };
  }, [cardsService, currentPage]);

  // Dynamic Item Range Calculations
  const itemRangeText = useMemo(() => {
    if (totalRecords === 0) return "Showing 0 - 0";
    const start = currentPage * itemsPerPage + 1;
    const end = Math.min((currentPage + 1) * itemsPerPage, totalRecords);
    return `Showing ${start} - ${end}`;
  }, [currentPage, totalRecords]);

  // Client side filtration within the active page collection
  const filteredCards = useMemo(() => {
    if (!searchTerm.trim()) return cards;
    const term = searchTerm.toLowerCase();
    return cards.filter((card) => {
      const accountName = card.account?.accountName?.toLowerCase() || "";
      const maskedPan = card.maskedPan || "";
      const status = card.status?.toLowerCase() || "";
      const brand = card.brand?.toLowerCase() || "";

      return (
        accountName.includes(term) ||
        maskedPan.includes(term) ||
        status.includes(term) ||
        brand.includes(term)
      );
    });
  }, [searchTerm, cards]);

  // Numbered pagination layout window generator
  const paginationRange = useMemo(() => {
    const range: number[] = [];
    let start = Math.max(0, currentPage - 2);
    let end = Math.min(totalPages - 1, start + 4);
    
    if (end - start < 4) {
      start = Math.max(0, end - 4);
    }
    
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }, [currentPage, totalPages]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {[1, 2, 3].map((n) => (
          <div key={n} className="border border-gray-100 rounded-xl p-6 space-y-4 animate-pulse bg-gray-50/50 h-[200px]" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 border border-red-100 rounded-xl bg-red-50/30 text-center space-y-3">
        <p className="text-[13px] text-red-600 font-medium">Error: {error}</p>
        <button 
          onClick={() => setCurrentPage(currentPage)}
          className="text-[12px] bg-white border border-red-200 px-3 py-1.5 rounded-lg text-red-700 hover:bg-red-50 font-semibold"
        >
          Retry Request
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Controller Row */}
      <div className="flex justify-between items-center">
        <span className="text-[14px] text-gray-400 font-medium">
          {itemRangeText} of {totalRecords.toLocaleString()} Virtual Cards
        </span>

        <div className="flex gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search current page entries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4 pr-10 py-2 border border-gray-100 rounded-lg text-[13px] bg-gray-50/50 w-[240px] focus:outline-none focus:ring-1 focus:ring-blue-100 text-gray-700"
            />
            <div className="absolute right-3 top-2.5 opacity-30">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Content Layout */}
      {filteredCards.length === 0 ? (
        <div className="p-12 text-center border border-dashed border-gray-200 rounded-xl bg-gray-50/30">
          <p className="text-[13px] text-gray-400">No virtual cards located on this page view sheet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => {
            const cardId = card.id || card._id;
            const rawBalance = card.account?.availableBalance ?? card.account?.currentBalance ?? 0;
            const currencyCode = card.currency || card.account?.currency || 'NGN';
            const expiryDate = card.expiryMonth && card.expiryYear ? `${card.expiryMonth}/${card.expiryYear}` : "MM/YY";

            // Capitalize first letters safely for UI display
            const displayType = card.type 
              ? card.type.charAt(0).toUpperCase() + card.type.slice(1).toLowerCase() 
              : "Virtual";
              
            const displayStatus = card.status 
              ? card.status.charAt(0).toUpperCase() + card.status.slice(1).toLowerCase() 
              : "Active";

            return (
              <CardItem
                key={cardId}
                card={{
                  ...card,
                  id: cardId,
                  type: displayType,     // Passes "Virtual" instead of "virtual"
                  status: displayStatus, // Passes "Active" instead of "active"
                  holder: card.account?.accountName || "Unknown Holder",
                  last4: card.maskedPan ? card.maskedPan.slice(-4) : "****",
                  expiry: expiryDate,
                  balance: new Intl.NumberFormat('en-NG', { style: 'currency', currency: currencyCode }).format(rawBalance)
                }}
                onClick={() => onSelect(cardId)}
              />
            );
          })}
        </div>
      )}

      {/* Footer Navigation Elements */}
      <div className="flex justify-center items-center gap-2 pt-6 border-t border-gray-50">
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          className="p-2 border border-gray-100 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>

        <div className="flex gap-1">
          {paginationRange.map((pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex)}
              className={`w-8 h-8 rounded-lg text-[13px] font-bold transition-all ${
                currentPage === pageIndex
                  ? "bg-black text-white"
                  : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
              }`}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>

        <button
          disabled={currentPage >= totalPages - 1}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="p-2 border border-gray-100 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
}