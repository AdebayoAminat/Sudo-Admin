

// import React from "react";
// import Image from "next/image";

// interface CardProps {
//   card: {
//     last4: string;
//     expiry: string;
//     holder: string;
//     brand: string; // e.g. 'verve'
//     type: string;
//     status: string;
//   };
// }

// export const BusinessCard = ({ card }: CardProps) => {
//   return (
//     <div className="bg-white border border-gray-300 rounded-xl p-6  relative h-[220px] flex flex-col justify-between group  transition-shadow">
//       {/* Top row */}
//       <div className="flex justify-between items-start">
//         <span className="text-[10px] font-bold text-gray-400  tracking-widest">
//           {card.type}
//         </span>
//         <span className="text-[10px] font-bold text-[#10B981]  px-2 py-0.5 rounded tracking-widest">
//           {card.status}
//         </span>
//       </div>

//       {/* Chip image and spacing */}
//       <div className="relative mb-3 pt-8">
//         <Image
//           src="/images/chip.svg"
//           alt="EMV Chip"
//           width={40}
//           height={32}
//           className="opacity-70 "
//         />
//       </div>

//       {/* Middle Section: Card Number and Expiry */}
//       <div className="flex-1 flex flex-col items-center justify-center space-y-1">
//         {/* Card Number */}
//         <p className="text-[17px] font-medium text-[#1D2939] card-number-font w-full">
//           5063 21** **** {card.last4}
//         </p>

//         {/* REPOSITIONED: Expiry under the number in the middle */}
//         <div className="w-full text-center">
//           <p className="text-[12px] font-bold text-[#1D2939] tracking-wider">
//             {card.expiry}
//           </p>
//         </div>
//       </div>

//       {/* Bottom row: Holder Name and Brand Logo */}
//       <div className="flex justify-between items-center mt-auto">
//         <div className="truncate max-w-[160px]">
//           <p className="text-[12px] font-bold text-[#1D2939] truncate">
//             {card.holder}
//           </p>
//         </div>

//         {/* Using your Verve image from public/images */}
//         <div className="relative w-14 h-9">
//           <Image
//             src="/images/verve.svg"
//             alt="Verve Logo"
//             layout="fill"
//             objectFit="contain"
//             className="opacity-90"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import Image from "next/image";

// interface CardProps {
//   card: {
//     last4: string;
//     expiry: string;
//     holder: string;
//     brand: string; // e.g. 'verve'
//     type: string;
//     status: string;
//     logoAsset?: string;
//   };
// }

// export const BusinessCard = ({ card }: CardProps) => {
//   // Utility maps the dynamic brand string straight to your required white SVG names
//   const getBrandLogoAsset = (brandString?: string) => {
//     const brand = brandString?.toLowerCase() || "";
//     if (brand.includes("mastercard")) return "/images/card-designs/sudo-white-mastercard.svg";
//     if (brand.includes("verve")) return "/images/card-designs/sudo-white-verve.svg";
//     if (brand.includes("visa")) return "/images/card-designs/sudo-white-visa.svg";
//   };

//   const currentLogo = card.logoAsset || getBrandLogoAsset(card.brand);

//   return (
//     <div className="bg-white border border-gray-300 rounded-xl p-6 relative h-[220px] flex flex-col justify-between group transition-shadow">
//       {/* Top row */}
//       <div className="flex justify-between items-start">
//         <span className="text-[10px] font-bold text-gray-400 tracking-widest">
//           {card.type}
//         </span>
//         <span className="text-[10px] font-bold text-[#10B981] px-2 py-0.5 rounded tracking-widest">
//           {card.status}
//         </span>
//       </div>

//       {/* Middle Section: Card Number and Expiry */}
//       <div className="flex-1 flex flex-col items-center justify-center space-y-1 pt-4">
//         {/* Card Number */}
//         <p className="text-[17px] font-medium text-[#1D2939] card-number-font w-full">
//           5063 21** **** {card.last4}
//         </p>

//         {/* Repositioned Expiry under the number in the middle */}
//         <div className="w-full text-center">
//           <p className="text-[12px] font-bold text-[#1D2939] tracking-wider">
//             {card.expiry}
//           </p>
//         </div>
//       </div>

//       {/* Bottom row: Holder Name and Brand Logo */}
//       <div className="flex justify-between items-center mt-auto">
//         <div className="truncate max-w-[160px]">
//           <p className="text-[12px] font-bold text-[#1D2939] truncate">
//             {card.holder}
//           </p>
//         </div>

//         {/* Dynamic clean loading of your specific white asset SVGs */}
//         <div className="relative w-14 h-9">
//           <Image
//             src={currentLogo}
//             alt={`${card.brand} Logo`}
//             layout="fill"
//             objectFit="contain"
//             className="opacity-90"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };



import React from "react";
import Image from "next/image";

interface CardProps {
  card: {
    brand: string;      
    type: string;       
    status: string;     
    maskedPan: string;  
    expiryMonth: string;
    expiryYear: string;
    customer?: {
      name: string;
    };
    holder?: string;
  };
}

export const BusinessCard = ({ card }: CardProps) => {
  const getBrandCardAsset = (brandString?: string) => {
    const brand = brandString?.toLowerCase() || "";
    if (brand.includes("mastercard")) return "/images/card-designs/sudo-white-mastercard.svg";
    if (brand.includes("verve")) return "/images/card-designs/sudo-white-verve.svg";
    if (brand.includes("visa")) return "/images/card-designs/sudo-white-visa.svg";
    return "/images/card-designs/sudo-white-verve.svg";
  };

  const currentCardAsset = getBrandCardAsset(card.brand);

  const cardHolderName = card.customer?.name || card.holder || "Card Holder";
  const expiryDate = card.expiryMonth && card.expiryYear
    ? `${card.expiryMonth}/${card.expiryYear.slice(-2)}`
    : "MM/YY";

  return (
    <div className="relative w-full aspect-[1.58/1] max-w-[360px] select-none rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      {/* Background Card SVG Image */}
      <Image
        src={currentCardAsset}
        alt={`${card.brand} card background`}
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* Top Metadata Badge Deck */}
      <div className="absolute top-4 left-5 right-5 z-10 flex justify-between items-center">
        <span className="text-[11px] font-medium text-gray-400 capitalize tracking-wider">
          {card.type}
        </span>
        <span className="text-[10px] font-bold text-[#10B981] bg-[#E6F4EA] px-2.5 py-0.5 rounded-full capitalize">
          {card.status}
        </span>
      </div>

      {/* Masked PAN — Placed perfectly clear of the chip layout */}
      <div className="absolute top-[60%] left-5 right-5 z-10">
        <p className="text-[17px] font-normal tracking-widest text-[#475467] font-mono">
          {card.maskedPan}
        </p>
      </div>

      {/* Expiry Date — Separated on its own line, dead center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <p className="text-[10px] font-medium font-mono tracking-wider text-gray-400">
          {expiryDate}
        </p>
      </div>

      {/* Card Holder Name — Moved down to its own line at the bottom-left */}
      <div className="absolute bottom-4 left-5 z-10 max-w-[180px]">
        <p className="text-[12px] font-semibold text-[#344054] tracking-wide truncate">
          {cardHolderName}
        </p>
      </div>
      
      {/* Empty layout spacer tracking for native logo graphics on the right */}
      <div className="absolute bottom-4 right-5 w-14 h-8 z-10" />
    </div>
  );
};