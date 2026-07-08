// "use client";

// import React from "react";
// import Image from "next/image";

// /* --- DYNAMIC MOCK DATA --- */
// const AUTH_DETAIL_DATA = {
//   amount: "₦9,016.13",
//   status: "Closed",
//   timestamp: "Apr 6, 2026, 1:43:51 PM",
//   card: {
//     pan: "5063 21** **** 3357",
//     holder: "SUDO / JOHN DOE",
//     expiry: "03/2029",
//   },
//   details: [
//     { label: "Account", value: "SUDO / JOHN DOE", isLink: true },
//     { label: "Type", value: "Payment" },
//     { label: "Amount", value: "₦9,016.13" },
//     { label: "Fee", value: "₦5.00" },
//     { label: "VAT", value: "₦0.38" },
//     { label: "Channel", value: "POS" },
//     { label: "Reference", value: "5010620283111016018242" },
//     { label: "Method", value: "Chip" },
//     { label: "Status", value: "Closed" },
//     { label: "Reason for refusal", value: "Webhook_declined" },
//     { label: "Date", value: "Apr 6, 2026, 1:43:51 PM" },
//     { label: "Date Updated", value: "Apr 6, 2026, 1:43:51 PM" },
//   ],
//   terminal: [
//     { label: "Terminal Id", value: "2SUDOSIM" },
//     { label: "Type", value: "POS" },
//     { label: "RRN", value: "111016018242" },
//     { label: "Stan", value: "149322" },
//     { label: "Card Present", value: "Yes" },
//     { label: "Card Holder Present", value: "Yes" },
//     { label: "Pin Entry Mode", value: "MAGNETIC_STRIPE" },
//   ],
//   verification: [
//     { label: "Authentication", value: "PIN" },
//     { label: "CVV Match", value: "Yes" },
//     { label: "PIN Match", value: "Yes" },
//     { label: "Expiry date Match", value: "Yes" },
//   ],
//   merchant: {
//     name: "SUDO SIMULATOR",
//     category: "Veterinary Services",
//     city: "JAHI",
//     postalCode: "100001",
//     state: "AB",
//     country: "NG",
//   },
// };

// interface Props {
//   id: string;
// }

// export default function AuthorizationDetails({ id }: Props) {
//   return (
//     <div className="flex flex-col h-full animate-in fade-in duration-500 space-y-10 p-4 lg:p-8">
//       {/* --- Main Content Wrapper: Using items-start to align children at the top --- */}
//       <div className="flex flex-col lg:flex-row lg:justify-between items-start max-w-[1440px] w-full gap-x-12">
//         {/* LEFT COLUMN: Header and Data Details */}
//         <div className="w-full max-w-[580px] space-y-10">
//           {/* Amount Header Section */}
//           <div className="space-y-1">
//             <div className="flex items-center gap-3">
//               <h2 className="text-[32px] font-bold text-[#1D2939]">
//                 {AUTH_DETAIL_DATA.amount}
//               </h2>
//               <span className="bg-[#FEF2F2] text-[#EF4444] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-tight">
//                 {AUTH_DETAIL_DATA.status}
//               </span>
//             </div>
//             <p className="text-[13px] text-gray-400 font-medium">
//               Date: {AUTH_DETAIL_DATA.timestamp}
//             </p>
//           </div>

//           {/* Authorization Details Section */}
//           <section className="space-y-6 pt-4">
//             <h3 className="text-[14px] font-bold text-[#1D2939]">
//               Authorization Details
//             </h3>
//             <div className="space-y-4">
//               {AUTH_DETAIL_DATA.details.map((row, i) => (
//                 <DetailRow
//                   key={i}
//                   label={row.label}
//                   value={row.value}
//                   isLink={row.isLink}
//                 />
//               ))}
//             </div>
//           </section>

//           {/* Metadata Toggle */}
//           <section className="pt-2 border-t border-gray-100">
//             <button className="flex items-center gap-2 text-[13px] font-bold text-[#034EA2]">
//               <span className="text-[10px]">▼</span> Metadata
//             </button>
//           </section>

//           {/* Terminal Details Section */}
//           <section className="space-y-6">
//             <h3 className="text-[14px] font-bold text-[#1D2939]">
//               Terminal Details
//             </h3>
//             <div className="space-y-4">
//               {AUTH_DETAIL_DATA.terminal.map((row, i) => (
//                 <DetailRow key={i} label={row.label} value={row.value} />
//               ))}
//             </div>
//           </section>

//           {/* 5. Verification Details Section (NEW) */}
//           <section className="space-y-6">
//             <h3 className="text-[14px] font-bold text-[#1D2939]">
//               Verification Details
//             </h3>
//             <div className="space-y-4">
//               {AUTH_DETAIL_DATA.verification.map((row, i) => (
//                 <DetailRow key={i} label={row.label} value={row.value} />
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* RIGHT COLUMN: The Card & Merchant Info (Now moved up) */}
//         <div className="w-full lg:max-w-[400px] space-y-10 lg:ml-auto">
//           {/* --- THE CARD --- */}
//           <div className="w-full aspect-[1.58/1]">
//             <div className="relative w-full h-full shadow-xl rounded-2xl">
//               <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                 <Image
//                   src="/images/card-designs/sudo-black-verve.svg"
//                   alt="Verve Front"
//                   fill
//                   className="object-contain"
//                 />

//                 {/* 1. Dynamic PAN Overlay */}
//                 <div className="absolute bottom-[28%] left-[7%]">
//                   <p className="text-[14px] font-mono tracking-[0.25em] font-medium text-white/90">
//                     {AUTH_DETAIL_DATA.card.pan}
//                   </p>
//                 </div>

//                 {/* 2. Dynamic Expiry Overlay */}
//                 <div className="absolute bottom-[18%] left-[45%]">
//                   <p className="text-[9px] font-mono font-bold text-white/70">
//                     {AUTH_DETAIL_DATA.card.expiry}
//                   </p>
//                 </div>

//                 {/* 3. Dynamic Card Holder Name */}
//                 <div className="absolute bottom-[10%] left-[7%] max-w-[150px]">
//                   <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80 truncate">
//                     {AUTH_DETAIL_DATA.card.holder}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* --- MERCHANT DETAILS CARD --- */}
//           <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-100 space-y-6">
//             <h4 className="text-[10px] font-bold text-[#98A2B3] tracking-widest uppercase mb-5">
//               Merchant Details
//             </h4>

//             <div className="flex gap-4 items-center">
//               <div className="w-12 h-12 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[14px] shrink-0">
//                 SS
//               </div>
//               <div>
//                 <p className="text-[14px] font-bold text-[#1D2939]">
//                   {AUTH_DETAIL_DATA.merchant.name}
//                 </p>
//                 <p className="text-[12px] text-[#98A2B3] font-medium">
//                   {AUTH_DETAIL_DATA.merchant.category}
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-4 border-t border-gray-100 pt-6">
//               <SidebarRow label="City" value={AUTH_DETAIL_DATA.merchant.city} />
//               <SidebarRow
//                 label="Postal Code"
//                 value={AUTH_DETAIL_DATA.merchant.postalCode}
//               />
//               <SidebarRow
//                 label="State"
//                 value={AUTH_DETAIL_DATA.merchant.state}
//               />
//               <SidebarRow
//                 label="Country"
//                 value={AUTH_DETAIL_DATA.merchant.country}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* --- REUSABLE COMPONENTS --- */

// function DetailRow({
//   label,
//   value,
//   isLink,
// }: {
//   label: string;
//   value: string;
//   isLink?: boolean;
// }) {
//   return (
//     <div className="flex justify-between items-center text-[13px] border-b border-gray-50/50 pb-2 last:border-0">
//       <span className="text-[#667085] font-medium">{label}</span>
//       <span
//         className={`font-bold ${isLink ? "text-[#034EA2] cursor-pointer hover:underline" : "text-[#1D2939]"}`}
//       >
//         {value} {isLink && "→"}
//       </span>
//     </div>
//   );
// }

// function SidebarRow({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex justify-between items-center text-[12px]">
//       <span className="text-[#98A2B3] font-medium">{label}</span>
//       <span className="font-bold text-[#1D2939]">{value}</span>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import CardsService from "@/app/service/cards.service";

interface Props {
  id: string;
}

export default function AuthorizationDetails({ id }: Props) {
  const cardsService = useMemo(() => new CardsService(), []);

  const [authData, setAuthData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch live authorization/transaction data on mount
  useEffect(() => {
    let isMounted = true;
    async function fetchDetails() {
      try {
        setLoading(true);
        setError(null);
        
        // Using transaction endpoint tailored to parse authorization tokens
        const response = await cardsService.getAuthorizationDetails(id);
        
        if (!isMounted) return;

        const payload = response?.data?.data || response?.data;
        if (payload) {
          setAuthData(payload);
        } else {
          setError("No transaction details found for this asset entry.");
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || "Failed to load authorization token metrics.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    if (id) {
      fetchDetails();
    }
    return () => {
      isMounted = false;
    };
  }, [id, cardsService]);

  // Determine standard asset image based on structural card brand values
  const cardBrand = (authData?.card?.brand || authData?.card?.type || "verve").toLowerCase();
  let cardDesignAsset = "/images/card-designs/sudo-black-verve.svg";

  if (cardBrand.includes("visa")) {
    cardDesignAsset = "/images/card-designs/sudo-black-visa.svg";
  } else if (cardBrand.includes("master") || cardBrand.includes("mc")) {
    cardDesignAsset = "/images/card-designs/sudo-black-mastercard.svg";
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40 w-full text-center">
        <div className="w-9 h-9 border-[3px] border-[#034EA2] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-[13px] text-gray-400 font-medium">loading authorization records...</p>
      </div>
    );
  }

  if (error || !authData) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500 font-mono text-[13px]">{error || "Failed to parse records."}</p>
      </div>
    );
  }

  // Formatting and parsing real backend fields into your design framework template rows
  const displayAmount = `${authData.currency === "USD" ? "$" : "₦"}${Number(authData.amount || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  const isApproved = authData.status === "Approved" || authData.status === "Success";
  const formattedDate = authData.createdAt || authData.date || "N/A";

  const detailsRows: Array<{ label: string; value: string; isLink?: boolean }> = [
    { label: "Account", value: authData.account.accountName, isLink: true },
    { label: "Type", value: authData.transactionMetadata.type },
    { label: "Amount", value: displayAmount },
    { label: "Fee", value: authData.fee !== undefined ? `₦${authData.fee}` : "N/A" },
    { label: "VAT", value: authData.vat !== undefined ? `₦${authData.vat}` : "N/A" },
    { label: "Channel", value: authData.transactionMetadata.channel},
    { label: "Reference", value: authData.transactionMetadata.reference},
    { label: "Method", value: authData.authorizationMethod },
    { label: "Status", value: authData.status  },
    { label: "Reason for approval", value: authData.requestHistory[0].reason},
    { label: "Date", value: formattedDate },
    { label: "Date Updated", value: authData.updatedAt || formattedDate },
  ];

  const terminalRows = [
    { label: "Terminal Id", value: authData.terminal.terminalId  },
    { label: "Type",  value: authData.terminal.terminalType},
    { label: "RRN", value: authData.terminal.rrn},
    { label: "Stan", value: authData.terminal.stan},
    { label: "Card Present", value: authData.terminal.cardPresence ? "Yes" : "No" },
    { label: "Card Holder Present", value: authData.terminal.cardHolderPresence? "Yes" : "No" },
    { label: "Pin Entry Mode", value: authData.terminal.pinEntryMode },
  ];

  const verificationRows = [
    { label: "Authentication", value: authData.verification.authentication},
    { label: "CVV Match", value: authData.verification.cvv? "Yes" : "No" },
    { label: "PIN Match", value: authData.verification.pin ? "Yes" : "No" },
    { label: "Expiry date Match", value: authData.verification.expiry? "Yes" : "No" },
  ];

  const merchantLabel = authData.merchant?.name || authData.merchant || "UNKNOWN MERCHANT";
  const initials = merchantLabel.slice(0, 2).toUpperCase();

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500 space-y-10 p-4 lg:p-8">
      {/* --- Main Content Wrapper --- */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start max-w-[1440px] w-full gap-x-12 relative">
        
        {/* LEFT COLUMN: Header and Data Details (Scrollable) */}
        <div className="w-full max-w-[580px] space-y-10">
          {/* Amount Header Section */}
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h2 className="text-[32px] font-bold text-[#1D2939]">
                {displayAmount}
              </h2>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-tight ${
                isApproved ?  "bg-[#E8F5E9] text-[#2E7D32]"  :  "bg-[#FFEBEE] text-[#C62828]" 
              }`}>
                {authData.status}
              </span>
            </div>
            <p className="text-[13px] text-gray-400 font-medium">
              Date: {formattedDate}
            </p>
          </div>

          {/* Authorization Details Section */}
          <section className="space-y-6 pt-4">
            <h3 className="text-[14px] font-bold text-[#1D2939]">
              Authorization Details
            </h3>
            <div className="space-y-4">
              {detailsRows.map((row, i) => (
                <DetailRow
                  key={i}
                  label={row.label}
                  value={row.value}
                  isLink={row.isLink}
                />
              ))}
            </div>
          </section>

          {/* Metadata Toggle */}
          <section className="pt-2 border-t border-gray-100">
            <button className="flex items-center gap-2 text-[13px] font-bold text-[#034EA2]">
              <span className="text-[10px]">▼</span> Metadata
            </button>
          </section>

          {/* Terminal Details Section */}
          <section className="space-y-6">
            <h3 className="text-[14px] font-bold text-[#1D2939]">
              Terminal Details
            </h3>
            <div className="space-y-4">
              {terminalRows.map((row, i) => (
                <DetailRow key={i} label={row.label} value={row.value} />
              ))}
            </div>
          </section>

          {/* Verification Details Section */}
          <section className="space-y-6">
            <h3 className="text-[14px] font-bold text-[#1D2939]">
              Verification Details
            </h3>
            <div className="space-y-4">
              {verificationRows.map((row, i) => (
                <DetailRow key={i} label={row.label} value={row.value} />
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: The Card & Merchant Info (Stagnant / Sticky Viewport Hook) */}
        <div className="w-full lg:max-w-[400px] space-y-10 lg:ml-auto lg:sticky lg:top-6">
          {/* --- THE CARD --- */}
          <div className="w-full aspect-[1.58/1]">
            <div className="relative w-full h-full shadow-xl rounded-2xl">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src={cardDesignAsset}
                  alt="Card Branding Layout"
                  fill
                  className="object-contain"
                />

                {/* 1. Dynamic PAN Overlay */}
                <div className="absolute bottom-[28%] left-[7%]">
                  <p className="text-[14px] font-mono tracking-[0.25em] font-medium text-white/90">
                    {authData.card?.maskedPan}
                  </p>
                </div>

                {/* 2. Dynamic Expiry Overlay */}
                <div className="absolute bottom-[18%] left-[45%]">
                  <p className="text-[9px] font-mono font-bold text-white/70">
                    {authData.card?.expiryMonth}/{authData.card?.expiryYear}
                  </p>
                </div>

                {/* 3. Dynamic Card Holder Name */}
                <div className="absolute bottom-[10%] left-[7%] max-w-[150px]">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80 truncate">
                    {authData.account.accountName}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- MERCHANT DETAILS CARD --- */}
          <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-100 space-y-6">
            <h4 className="text-[10px] font-bold text-[#98A2B3] tracking-widest uppercase mb-5">
              Merchant Details
            </h4>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[14px] shrink-0">
                {initials}
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#1D2939]">
                  {merchantLabel}
                </p>
                <p className="text-[12px] text-[#98A2B3] font-medium">
                  {authData.merchant?.category}
                </p>
              </div>
            </div>

            <div className="space-y-4 border-t border-gray-100 pt-6">
              <SidebarRow label="City" value={authData.merchant?.city} />
              <SidebarRow
                label="Postal Code"
                value={authData.merchant?.postalCode}
              />
              <SidebarRow
                label="State"
                value={authData.merchant?.state}
              />
              <SidebarRow
                label="Country"
                value={authData.merchant?.country}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

function DetailRow({
  label,
  value,
  isLink,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) {
  return (
    <div className="flex justify-between items-center text-[13px] border-b border-gray-50/50 pb-2 last:border-0">
      <span className="text-[#667085] font-medium">{label}</span>
      <span
        className={`font-bold ${isLink ? "text-[#034EA2] cursor-pointer hover:underline" : "text-[#1D2939]"}`}
      >
        {value} {isLink && "→"}
      </span>
    </div>
  );
}

function SidebarRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center text-[12px]">
      <span className="text-[#98A2B3] font-medium">{label}</span>
      <span className="font-bold text-[#1D2939]">{value}</span>
    </div>
  );
}