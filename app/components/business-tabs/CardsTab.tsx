

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { BusinessCard } from "../cards/BusinessCards";

// export default function CardsTab() {
//   const [cards, setCards] = useState<any[]>([]);
//   const [filteredCards, setFilteredCards] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showFilters, setShowFilters] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [tempBrand, setTempBrand] = useState("All");
//   const [activeFiltersCount, setActiveFiltersCount] = useState(0);

//   // Ref to track the filter container
//   const filterRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchCards = async () => {
//       setLoading(true);
//       try {
//         // Mock data logic
//         const mockCards = [
//           {
//             last4: "1792",
//             expiry: "08/2028",
//             holder: "Dapo Abiodun",
//             brand: "verve",
//             type: "Virtual",
//             status: "Active",
//           },
//           {
//             last4: "5635",
//             expiry: "05/25",
//             holder: "Demo Test",
//             brand: "mastercard",
//             type: "Virtual",
//             status: "Active",
//           },
//           {
//             last4: "5635",
//             expiry: "05/25",
//             holder: "John Ogunmosu",
//             brand: "mastercard",
//             type: "Virtual",
//             status: "Active",
//           },
//           {
//             last4: "6228",
//             expiry: "07/2028",
//             holder: "Uyohoini Blankson",
//             brand: "verve",
//             type: "Virtual",
//             status: "Active",
//           },
//         ];
//         setCards(mockCards);
//         setFilteredCards(mockCards);
//       } catch (error) {
//         console.error("Error fetching cards:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCards();
//   }, []);

//   // Close filter when clicking anywhere outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         filterRef.current &&
//         !filterRef.current.contains(event.target as Node)
//       ) {
//         setShowFilters(false);
//       }
//     };

//     if (showFilters) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showFilters]);

//   const applyFilters = () => {
//     let result = cards;
//     if (tempBrand !== "All") {
//       result = cards.filter(
//         (card) => card.brand.toLowerCase() === tempBrand.toLowerCase(),
//       );
//       setActiveFiltersCount(1);
//     } else {
//       setActiveFiltersCount(0);
//     }
//     setFilteredCards(result);
//     setShowFilters(false);
//   };

//   const clearFilters = () => {
//     setTempBrand("All");
//     setFilteredCards(cards);
//     setActiveFiltersCount(0);
//     setShowFilters(false);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div className="text-[13px] text-gray-500">
//           {loading ? (
//             <div className="h-4 w-32 bg-gray-100 animate-pulse rounded" />
//           ) : (
//             <p>
//               Showing{" "}
//               <span className="font-bold text-[#1D2939]">
//                 1 - {filteredCards.length}
//               </span>{" "}
//               of <span className="font-bold text-[#1D2939]">59</span> Cards
//             </p>
//           )}
//         </div>

//         <div className="flex items-center gap-3 relative" ref={filterRef}>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="name, number"
//               className="pl-4 pr-10 py-2.5 border border-gray-100 rounded-xl text-[13px] outline-none focus:border-[#034EA2] w-64"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
//               <Image
//                 src="/images/search.svg"
//                 alt="search"
//                 width={14}
//                 height={14}
//               />
//             </div>
//           </div>

//           {/* Removed border and background from this button */}
//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="flex items-center gap-2 px-2 py-2.5 text-[13px] font-bold text-[#1D2939] hover:opacity-70 transition-opacity"
//           >
//             <div className="relative">
//               <Image
//                 src="/images/filter.svg"
//                 alt="filter"
//                 width={16}
//                 height={16}
//                 className="opacity-60"
//               />
//               <span className="absolute -top-1.5 -right-1.5 bg-[#032345] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-black">
//                 {activeFiltersCount}
//               </span>
//             </div>
//             Filter(s)
//           </button>

//           {showFilters && (
//             <div className="absolute right-0 top-12 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-50 z-50 p-6 space-y-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold text-[#1D2939] text-sm">Filters</h3>
//                 <button
//                   onClick={clearFilters}
//                   className="text-[12px] text-gray-400 hover:text-black underline"
//                 >
//                   Clear All
//                 </button>
//               </div>

//               <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
//                 <div className="bg-[#F5F3FF] px-2 py-0.5 rounded">
//                   <span className="text-[10px] font-bold text-[#7C3AED]">
//                     {activeFiltersCount} filter(s) applied
//                   </span>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[11px] font-bold text-gray-400 uppercase">
//                   Card Brand
//                 </label>
//                 <select
//                   value={tempBrand}
//                   onChange={(e) => setTempBrand(e.target.value)}
//                   className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-[13px] outline-none"
//                 >
//                   <option value="All">All</option>
//                   <option value="verve">Verve</option>
//                   <option value="mastercard">MasterCard</option>
//                 </select>
//               </div>

//               <button
//                 onClick={applyFilters}
//                 className="w-full py-3 bg-[#032345] text-white rounded-xl font-bold text-[13px] hover:bg-black transition-colors"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {!loading &&
//           filteredCards.map((card, index) => (
//             <BusinessCard key={index} card={card} />
//           ))}
//       </div>
//     </div>
//   );
// }


// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import CardsService from "@/app/service/cards.service";
// import { BusinessCard } from "../cards/BusinessCards";

// export default function CardsTab() {
//   const params = useParams();
//   const businessId = typeof params?.id === "string" ? params.id : "";

//   const [cards, setCards] = useState<any[]>([]);
//   const [filteredCards, setFilteredCards] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showFilters, setShowFilters] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [tempBrand, setTempBrand] = useState("All");
//   const [activeFiltersCount, setActiveFiltersCount] = useState(0);

//   const filterRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchCards = async () => {
//       setLoading(true);
//       try {
//         const cardsService = new CardsService();
//         const targetedId = businessId || "6a2cae8a9c0aafcbaa8ee848";
//         const res = await cardsService.getCardsForABusiness(targetedId);

//         if (res?.data) {
//           const liveData = res.data.data || res.data || [];
//           const normalizedCards = Array.isArray(liveData) ? liveData : [];
//           setCards(normalizedCards);
//           setFilteredCards(normalizedCards);
//         }
//       } catch (error) {
//         console.error("Error loading network card payload:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCards();
//   }, [businessId]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
//         setShowFilters(false);
//       }
//     };
//     if (showFilters) document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showFilters]);

//   const applyFilters = () => {
//     let result = cards;
//     if (tempBrand !== "All") {
//       result = cards.filter((card) => card.brand?.toLowerCase() === tempBrand.toLowerCase());
//       setActiveFiltersCount(1);
//     } else {
//       setActiveFiltersCount(0);
//     }

//     if (searchTerm.trim() !== "") {
//       const searchLower = searchTerm.toLowerCase();
//       result = result.filter((card) => {
//         const holderName = card.customer?.name || "";
//         const pan = card.maskedPan || "";
//         return holderName.toLowerCase().includes(searchLower) || pan.includes(searchLower);
//       });
//     }
//     setFilteredCards(result);
//     setShowFilters(false);
//   };

//   const clearFilters = () => {
//     setTempBrand("All");
//     setFilteredCards(cards);
//     setActiveFiltersCount(0);
//     setShowFilters(false);
//   };

//   return (
//     <div className="space-y-6">
//       {/* Search and filter action deck row */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div className="text-[13px] text-gray-500">
//           {loading ? (
//             <div className="h-4 w-32 bg-gray-100 animate-pulse rounded" />
//           ) : (
//             <p>
//               Showing{" "}
//               <span className="font-bold text-[#1D2939]">1 - {filteredCards.length}</span>{" "}
//               of <span className="font-bold text-[#1D2939]">{cards.length}</span> Cards
//             </p>
//           )}
//         </div>

//         <div className="flex items-center gap-3 relative" ref={filterRef}>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="name, number"
//               className="pl-4 pr-10 py-2.5 border border-gray-100 rounded-xl text-[13px] outline-none focus:border-[#034EA2] w-64"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && applyFilters()}
//             />
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
//               <Image src="/images/search.svg" alt="search" width={14} height={14} />
//             </div>
//           </div>

//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="flex items-center gap-2 px-2 py-2.5 text-[13px] font-bold text-[#1D2939] hover:opacity-70 transition-opacity"
//           >
//             <div className="relative">
//               <Image src="/images/filter.svg" alt="filter" width={16} height={16} className="opacity-60" />
//               <span className="absolute -top-1.5 -right-1.5 bg-[#032345] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-black">
//                 {activeFiltersCount}
//               </span>
//             </div>
//             Filter(s)
//           </button>

//           {showFilters && (
//             <div className="absolute right-0 top-12 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-50 z-50 p-6 space-y-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold text-[#1D2939] text-sm">Filters</h3>
//                 <button onClick={clearFilters} className="text-[12px] text-gray-400 hover:text-black underline">
//                   Clear All
//                 </button>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-[11px] font-bold text-gray-400 uppercase">Card Brand</label>
//                 <select
//                   value={tempBrand}
//                   onChange={(e) => setTempBrand(e.target.value)}
//                   className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-[13px] outline-none"
//                 >
//                   <option value="All">All</option>
//                   <option value="verve">Verve</option>
//                   <option value="mastercard">MasterCard</option>
//                   <option value="visa">Visa</option>
//                 </select>
//               </div>
//               <button
//                 onClick={applyFilters}
//                 className="w-full py-3 bg-[#032345] text-white rounded-xl font-bold text-[13px] hover:bg-black transition-colors"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Grid wrapper display mapping */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {loading ? (
//           [...Array(2)].map((_, idx) => (
//             <div key={idx} className="h-[200px] bg-gray-50 animate-pulse rounded-2xl border border-gray-100" />
//           ))
//         ) : (
//           filteredCards.map((card, index) => {
//             const pan = card.maskedPan || "";
//             const formattedCard = {
//               last4: pan.slice(-4) || card.last4 || "0000",
//               expiry: card.expiryMonth && card.expiryYear 
//                 ? `${card.expiryMonth}/${card.expiryYear.slice(-2)}` 
//                 : card.expiry ,
//               holder: card.customer?.name || card.holder || "Card Holder",
//               brand: card.brand || "verve",
//               type: card.type || "Virtual",
//               status: card.status || "Active",
//               maskedPan: card.maskedPan
//             };
//             return <BusinessCard key={card._id || index} card={formattedCard} />;
//           })
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import CardsService from "@/app/service/cards.service";
// import { BusinessCard } from "../cards/BusinessCards";

// export default function CardsTab() {
//   const params = useParams();
//   const businessId = typeof params?.id === "string" ? params.id : "";

//   const [cards, setCards] = useState<any[]>([]);
//   const [filteredCards, setFilteredCards] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showFilters, setShowFilters] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [tempBrand, setTempBrand] = useState("All");
//   const [activeFiltersCount, setActiveFiltersCount] = useState(0);

//   const filterRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchCards = async () => {
//       setLoading(true);
//       try {
//         const cardsService = new CardsService();
//         const targetedId = businessId;
//         const res = await cardsService.getCardsForABusiness(targetedId);

//         if (res?.data) {
//           const liveData = res.data.data || res.data || [];
//           const normalizedCards = Array.isArray(liveData) ? liveData : [];
//           setCards(normalizedCards);
//           setFilteredCards(normalizedCards);
//         }
//       } catch (error) {
//         console.error("Error loading network card payload:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCards();
//   }, [businessId]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
//         setShowFilters(false);
//       }
//     };
//     if (showFilters) document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showFilters]);

//   const applyFilters = () => {
//     let result = cards;
//     if (tempBrand !== "All") {
//       result = cards.filter((card) => card.brand?.toLowerCase() === tempBrand.toLowerCase());
//       setActiveFiltersCount(1);
//     } else {
//       setActiveFiltersCount(0);
//     }

//     if (searchTerm.trim() !== "") {
//       const searchLower = searchTerm.toLowerCase();
//       result = result.filter((card) => {
//         const holderName = card.customer?.name || "";
//         const pan = card.maskedPan || "";
//         return holderName.toLowerCase().includes(searchLower) || pan.includes(searchLower);
//       });
//     }
//     setFilteredCards(result);
//     setShowFilters(false);
//   };

//   const clearFilters = () => {
//     setTempBrand("All");
//     setFilteredCards(cards);
//     setActiveFiltersCount(0);
//     setShowFilters(false);
//   };

//   return (
//     <div className="space-y-6">
//       {/* Search and filter action deck row */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div className="text-[13px] text-gray-500">
//           {loading ? (
//             <div className="h-4 w-32 bg-gray-100 animate-pulse rounded" />
//           ) : (
//             <p>
//               Showing{" "}
//               <span className="font-bold text-[#1D2939]">1 - {filteredCards.length}</span>{" "}
//               of <span className="font-bold text-[#1D2939]">{cards.length}</span> Cards
//             </p>
//           )}
//         </div>

//         <div className="flex items-center gap-3 relative" ref={filterRef}>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="name, number"
//               className="pl-4 pr-10 py-2.5 border border-gray-100 rounded-xl text-[13px] outline-none focus:border-[#034EA2] w-64"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && applyFilters()}
//             />
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
//               <Image src="/images/search.svg" alt="search" width={14} height={14} />
//             </div>
//           </div>

//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="flex items-center gap-2 px-2 py-2.5 text-[13px] font-bold text-[#1D2939] hover:opacity-70 transition-opacity"
//           >
//             <div className="relative">
//               <Image src="/images/filter.svg" alt="filter" width={16} height={16} className="opacity-60" />
//               <span className="absolute -top-1.5 -right-1.5 bg-[#032345] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-black">
//                 {activeFiltersCount}
//               </span>
//             </div>
//             Filter(s)
//           </button>

//           {showFilters && (
//             <div className="absolute right-0 top-12 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-50 z-50 p-6 space-y-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold text-[#1D2939] text-sm">Filters</h3>
//                 <button onClick={clearFilters} className="text-[12px] text-gray-400 hover:text-black underline">
//                   Clear All
//                 </button>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-[11px] font-bold text-gray-400 uppercase">Card Brand</label>
//                 <select
//                   value={tempBrand}
//                   onChange={(e) => setTempBrand(e.target.value)}
//                   className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-[13px] outline-none"
//                 >
//                   <option value="All">All</option>
//                   <option value="verve">Verve</option>
//                   <option value="mastercard">MasterCard</option>
//                   <option value="visa">Visa</option>
//                 </select>
//               </div>
//               <button
//                 onClick={applyFilters}
//                 className="w-full py-3 bg-[#032345] text-white rounded-xl font-bold text-[13px] hover:bg-black transition-colors"
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Grid wrapper display mapping */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {loading ? (
//           [...Array(2)].map((_, idx) => (
//             <div key={idx} className="h-[200px] bg-gray-50 animate-pulse rounded-2xl border border-gray-100" />
//           ))
//         ) : (
//           filteredCards.map((card, index) => (
//             <BusinessCard key={card._id || index} card={card} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation"; // Added useRouter for programmatic navigation
import CardsService from "@/app/service/cards.service";
import { BusinessCard } from "../cards/BusinessCards";

export default function CardsTab() {
  const params = useParams();
  const router = useRouter(); // Initialize Next.js router
  const businessId = typeof params?.id === "string" ? params.id : "";

  const [cards, setCards] = useState<any[]>([]);
  const [filteredCards, setFilteredCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [tempBrand, setTempBrand] = useState("All");
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const cardsService = new CardsService();
        const targetedId = businessId;
        const res = await cardsService.getCardsForABusiness(targetedId);

        if (res?.data) {
          const liveData = res.data.data || res.data || [];
          const normalizedCards = Array.isArray(liveData) ? liveData : [];
          setCards(normalizedCards);
          setFilteredCards(normalizedCards);
        }
      } catch (error) {
        console.error("Error loading network card payload:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, [businessId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
    };
    if (showFilters) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFilters]);

  const applyFilters = () => {
    let result = cards;
    if (tempBrand !== "All") {
      result = cards.filter((card) => card.brand?.toLowerCase() === tempBrand.toLowerCase());
      setActiveFiltersCount(1);
    } else {
      setActiveFiltersCount(0);
    }

    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter((card) => {
        const holderName = card.customer?.name || "";
        const pan = card.maskedPan || "";
        return holderName.toLowerCase().includes(searchLower) || pan.includes(searchLower);
      });
    }
    setFilteredCards(result);
    setShowFilters(false);
  };

  const clearFilters = () => {
    setTempBrand("All");
    setFilteredCards(cards);
    setActiveFiltersCount(0);
    setShowFilters(false);
  };

  return (
    <div className="space-y-6">
      {/* Search and filter action deck row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-[13px] text-gray-500">
          {loading ? (
            <div className="h-4 w-32 bg-gray-100 animate-pulse rounded" />
          ) : (
            <p>
              Showing{" "}
              <span className="font-bold text-[#1D2939]">1 - {filteredCards.length}</span>{" "}
              of <span className="font-bold text-[#1D2939]">{cards.length}</span> Cards
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 relative" ref={filterRef}>
          <div className="relative">
            <input
              type="text"
              placeholder="name, number"
              className="pl-4 pr-10 py-2.5 border border-gray-100 rounded-xl text-[13px] outline-none focus:border-[#034EA2] w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applyFilters()}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
              <Image src="/images/search.svg" alt="search" width={14} height={14} />
            </div>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-2 py-2.5 text-[13px] font-bold text-[#1D2939] hover:opacity-70 transition-opacity"
          >
            <div className="relative">
              <Image src="/images/filter.svg" alt="filter" width={16} height={16} className="opacity-60" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#032345] text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-black">
                {activeFiltersCount}
              </span>
            </div>
            Filter(s)
          </button>

          {showFilters && (
            <div className="absolute right-0 top-12 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-50 z-50 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[#1D2939] text-sm">Filters</h3>
                <button onClick={clearFilters} className="text-[12px] text-gray-400 hover:text-black underline">
                  Clear All
                </button>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-400 uppercase">Card Brand</label>
                <select
                  value={tempBrand}
                  onChange={(e) => setTempBrand(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-[13px] outline-none"
                >
                  <option value="All">All</option>
                  <option value="verve">Verve</option>
                  <option value="mastercard">MasterCard</option>
                  <option value="visa">Visa</option>
                </select>
              </div>
              <button
                onClick={applyFilters}
                className="w-full py-3 bg-[#032345] text-white rounded-xl font-bold text-[13px] hover:bg-black transition-colors"
              >
                Apply
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grid wrapper display mapping */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          [...Array(2)].map((_, idx) => (
            <div key={idx} className="h-[200px] bg-gray-50 animate-pulse rounded-2xl border border-gray-100" />
          ))
        ) : (
          filteredCards.map((card, index) => (
            <div
              key={card._id || index}
              onClick={() => router.push(`/dashboard/cards/${card._id}`)}
              className="cursor-pointer transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99]"
            >
              <BusinessCard card={card} />
            </div>
          ))
        )}
      </div>
      {!loading && filteredCards.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 space-y-4">
                <div className="bg-gray-50 p-4 rounded-full">
                  <Image src="/images/file-text.svg" alt="No transaction" width={40} height={40} className="opacity-20" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#1D2939] text-[15px]">No cards found</p>
                  <p className="text-[13px] text-gray-400">You currently don't have any physical cards.</p>
                </div>
              </div>
            )}
    </div>
  );
}