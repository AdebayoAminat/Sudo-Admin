// "use client";

// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// /* --- DYNAMIC MOCK DATA FOR TRANSACTIONS --- */
// const TRANSACTION_DETAIL_DATA = {
//   amount: "-₦8.38",
//   timestamp: "Apr 18, 2026, 7:44:29 PM",
//   card: {
//     pan: "5063 21** **** 2562",
//     holder: "SUDO / VICTOR AJIBERO",
//     expiry: "04/2029",
//   },
//   details: [
//     { label: "Authorization", value: "69e3d10d88008d62a22c505f", isLink: true },
//     { label: "Account", value: "SUDO / VICTOR AJIBERO", isLink: true },
//     { label: "Customer", value: "Victor Ajibero", isLink: true },
//     { label: "Type", value: "Purchase" },
//     { label: "Amount", value: "-₦8.38" },
//     { label: "Fee", value: "-₦5.00" },
//     { label: "VAT", value: "-₦0.38" },
//     { label: "Channel", value: "WEB" },
//     { label: "Reference", value: "5010124653149921766248" },
//     { label: "Date", value: "Apr 18, 2026, 7:44:29 PM" },
//     { label: "Date Updated", value: "Apr 18, 2026, 7:44:29 PM" },
//   ],
//   terminal: [
//     { label: "Terminal Id", value: "3SUDOSIM" },
//     { label: "Type", value: "ECOMMERCE" },
//     { label: "RRN", value: "149921766248" },
//     { label: "Stan", value: "109782" },
//     { label: "Card Present", value: "Yes" },
//     { label: "Card Holder Present", value: "Yes" },
//     { label: "Pin Entry Mode", value: "KEYED_IN" },
//   ],
//   merchant: {
//     name: "SUDO SIMULATOR",
//     category: "AMERICAN AIRLINES",
//     city: "JAHI",
//     postalCode: "100001",
//     state: "AB",
//     country: "NG",
//   },
// };

// export default function TransactionDetails({ id }: { id: string }) {
//   const router = useRouter();

//   return (
//     <div className="flex flex-col h-full animate-in fade-in duration-500 space-y-10 p-4 lg:p-8">

//       <div className="flex flex-col lg:flex-row lg:justify-between items-start max-w-[1440px] w-full gap-x-12">
//         {/* LEFT COLUMN */}
//         <div className="w-full max-w-[580px] space-y-10">
//           <div className="space-y-1">
//             <h2 className="text-[32px] font-bold text-[#1D2939]">
//               {TRANSACTION_DETAIL_DATA.amount}
//             </h2>
//             <p className="text-[13px] text-gray-400 font-medium">
//               Date: {TRANSACTION_DETAIL_DATA.timestamp}
//             </p>
//           </div>

//           <section className="space-y-6 pt-4">
//             <h3 className="text-[14px] font-bold text-[#1D2939]">Transaction Details</h3>
//             <div className="space-y-4">
//               {TRANSACTION_DETAIL_DATA.details.map((row, i) => (
//                 <DetailRow key={i} label={row.label} value={row.value} isLink={row.isLink} />
//               ))}
//             </div>
//           </section>

//           <section className="pt-2 border-t border-gray-100">
//             <button className="flex items-center gap-2 text-[13px] font-bold text-[#034EA2]">
//               <span className="text-[10px]">▼</span> Metadata
//             </button>
//           </section>

//           <section className="space-y-6">
//             <h3 className="text-[14px] font-bold text-[#1D2939]">Terminal Details</h3>
//             <div className="space-y-4">
//               {TRANSACTION_DETAIL_DATA.terminal.map((row, i) => (
//                 <DetailRow key={i} label={row.label} value={row.value} />
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="w-full lg:max-w-[400px] space-y-10 lg:ml-auto">
//           {/* THE CARD */}
//           <div className="w-full aspect-[1.58/1]">
//             <div className="relative w-full h-full shadow-xl rounded-2xl overflow-hidden">
//               <Image
//                 src="/images/card-designs/sudo-black-verve.svg"
//                 alt="Verve Front"
//                 fill
//                 className="object-contain"
//               />
//               <div className="absolute bottom-[28%] left-[7.5%]">
//                 <p className="text-[14px] font-mono tracking-[0.25em] font-medium text-white/90">
//                   {TRANSACTION_DETAIL_DATA.card.pan}
//                 </p>
//               </div>
//               <div className="absolute bottom-[18%] left-[45%]">
//                 <p className="text-[9px] font-mono font-bold text-white/70">
//                   {TRANSACTION_DETAIL_DATA.card.expiry}
//                 </p>
//               </div>
//               <div className="absolute bottom-[10%] left-[7.5%] max-w-[200px]">
//                 <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80 truncate">
//                   {TRANSACTION_DETAIL_DATA.card.holder}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* MERCHANT DETAILS */}
//           <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-100 space-y-6">
//             <h4 className="text-[10px] font-bold text-[#98A2B3] tracking-widest uppercase">Merchant Details</h4>
//             <div className="flex gap-4 items-center">
//               <div className="w-12 h-12 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[14px]">SS</div>
//               <div>
//                 <p className="text-[14px] font-bold text-[#1D2939]">{TRANSACTION_DETAIL_DATA.merchant.name}</p>
//                 <p className="text-[12px] text-[#98A2B3] font-medium uppercase">{TRANSACTION_DETAIL_DATA.merchant.category}</p>
//               </div>
//             </div>
//             <div className="space-y-4 border-t border-gray-100 pt-6">
//               <SidebarRow label="City" value={TRANSACTION_DETAIL_DATA.merchant.city} />
//               <SidebarRow label="Postal Code" value={TRANSACTION_DETAIL_DATA.merchant.postalCode} />
//               <SidebarRow label="State" value={TRANSACTION_DETAIL_DATA.merchant.state} />
//               <SidebarRow label="Country" value={TRANSACTION_DETAIL_DATA.merchant.country} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DetailRow({ label, value, isLink }: { label: string; value: string; isLink?: boolean }) {
//   return (
//     <div className="flex justify-between items-center text-[13px] border-b border-gray-50/50 pb-2 last:border-0">
//       <span className="text-[#667085] font-medium">{label}</span>
//       <span className={`font-bold ${isLink ? "text-[#034EA2] cursor-pointer hover:underline" : "text-[#1D2939]"}`}>
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

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// /* --- MOCK DATA ON TOP --- */
// const TRANSACTION_DETAIL_DATA = {
//   amount: "-₦8.38",
//   timestamp: "Apr 18, 2026, 7:44:29 PM",
//   card: {
//     pan: "5063 21** **** 2562",
//     holder: "SUDO / VICTOR AJIBERO",
//     expiry: "04/2029",
//   },
  
//   details: [
//     { label: "Authorization", value: "69e3d10d88008d62a22c505f", isLink: true },
//     { label: "Account", value: "SUDO / VICTOR AJIBERO", isLink: true },
//     { label: "Customer", value: "Victor Ajibero", isLink: true },
//     { label: "Type", value: "Purchase" },
//     { label: "Amount", value: "-₦8.38" },
//     { label: "Fee", value: "-₦5.00" },
//     { label: "VAT", value: "-₦0.38" },
//     { label: "Channel", value: "WEB" },
//     { label: "Reference", value: "5010124653149921766248" },
//     { label: "Date", value: "Apr 18, 2026, 7:44:29 PM" },
//     { label: "Date Updated", value: "Apr 18, 2026, 7:44:29 PM" },
//   ],
//   terminal: [
//     { label: "Terminal Id", value: "3SUDOSIM" },
//     { label: "Type", value: "ECOMMERCE" },
//     { label: "RRN", value: "149921766248" },
//     { label: "Stan", value: "109782" },
//     { label: "Card Present", value: "Yes" },
//     { label: "Card Holder Present", value: "Yes" },
//     { label: "Pin Entry Mode", value: "KEYED_IN" },
//   ],
//   merchant: {
//     name: "SUDO SIMULATOR",
//     category: "AMERICAN AIRLINES",
//     city: "JAHI",
//     postalCode: "100001",
//     state: "AB",
//     country: "NG",
//   },
// };

// interface Props {
//   id: string;
// }

// export default function TransactionDetails({ id }: Props) {
//   const router = useRouter();
//   const [data, setData] = useState<typeof TRANSACTION_DETAIL_DATA | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTransaction = async () => {
//       try {
//         setLoading(true);
//         // Replace with your real endpoint: fetch(`/api/transactions/${id}`)
//         // For now, we simulate the fetch using the mock data above
//         const response = await new Promise((resolve) => 
//           setTimeout(() => resolve(TRANSACTION_DETAIL_DATA), 500)
//         );
//         setData(response as typeof TRANSACTION_DETAIL_DATA);
//       } catch (error) {
//         console.error("Failed to fetch transaction", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchTransaction();
//   }, [id]);

//   if (loading) return <div className="p-8 text-[12px] text-gray-400">Loading...</div>;
//   if (!data) return <div className="p-8 text-[12px] text-red-500">Transaction not found.</div>;

//   return (
//     <div className="flex flex-col h-full animate-in fade-in duration-500 space-y-10 p-4 lg:p-8">
     

//       <div className="flex flex-col lg:flex-row lg:justify-between items-start max-w-[1440px] w-full gap-x-12">
//         {/* LEFT COLUMN */}
//         <div className="w-full max-w-[580px] space-y-10">
//           <div className="space-y-1">
//             <h2 className="text-[32px] font-bold text-[#1D2939]">
//               {data.amount}
//             </h2>
//             <p className="text-[13px] text-gray-400 font-medium">
//               Date: {data.timestamp}
//             </p>
//           </div>

//           {/* Transaction Details */}
//           <section className="space-y-6 pt-4">
//             <h3 className="text-[14px] font-bold text-[#1D2939]">Transaction Details</h3>
//             <div className="space-y-4">
//               {data.details.map((row, i) => (
//                 <DetailRow key={i} label={row.label} value={row.value} isLink={row.isLink} />
//               ))}
//             </div>
//           </section>

//           <section className="pt-2 border-t border-gray-100">
//             <button className="flex items-center gap-2 text-[13px] font-bold text-[#034EA2]">
//               <span className="text-[10px]">▼</span> Metadata
//             </button>
//           </section>

//           {/* Terminal Details */}
//           <section className="space-y-6">
//             <h3 className="text-[14px] font-bold text-[#1D2939]">Terminal Details</h3>
//             <div className="space-y-4">
//               {data.terminal.map((row, i) => (
//                 <DetailRow key={i} label={row.label} value={row.value} />
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="w-full lg:max-w-[400px] space-y-10 lg:ml-auto">
//           {/* THE CARD */}
//           <div className="w-full aspect-[1.58/1]">
//             <div className="relative w-full h-full shadow-xl rounded-2xl overflow-hidden">
//               <Image
//                 src="/images/card-designs/sudo-black-verve.svg"
//                 alt="Card Front"
//                 fill
//                 className="object-contain"
//               />
//               <div className="absolute bottom-[28%] left-[7.5%]">
//                 <p className="text-[14px] font-mono tracking-[0.25em] font-medium text-white/90">
//                   {data.card.pan}
//                 </p>
//               </div>
//               <div className="absolute bottom-[18%] left-[45%]">
//                 <p className="text-[9px] font-mono font-bold text-white/70">
//                   {data.card.expiry}
//                 </p>
//               </div>
//               <div className="absolute bottom-[10%] left-[7.5%] max-w-[200px]">
//                 <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80 truncate">
//                   {data.card.holder}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* MERCHANT DETAILS */}
//           <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-100 space-y-6">
//             <h4 className="text-[10px] font-bold text-[#98A2B3] tracking-widest uppercase">Merchant Details</h4>
//             <div className="flex gap-4 items-center">
//               <div className="w-12 h-12 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[14px]">SS</div>
//               <div>
//                 <p className="text-[14px] font-bold text-[#1D2939]">{data.merchant.name}</p>
//                 <p className="text-[12px] text-[#98A2B3] font-medium uppercase">{data.merchant.category}</p>
//               </div>
//             </div>
//             <div className="space-y-4 border-t border-gray-100 pt-6">
//               <SidebarRow label="City" value={data.merchant.city} />
//               <SidebarRow label="Postal Code" value={data.merchant.postalCode} />
//               <SidebarRow label="State" value={data.merchant.state} />
//               <SidebarRow label="Country" value={data.merchant.country} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* --- REUSABLE COMPONENTS --- */
// function DetailRow({ label, value, isLink }: { label: string; value: string; isLink?: boolean }) {
//   return (
//     <div className="flex justify-between items-center text-[13px] border-b border-gray-50/50 pb-2 last:border-0">
//       <span className="text-[#667085] font-medium">{label}</span>
//       <span className={`font-bold ${isLink ? "text-[#034EA2] cursor-pointer hover:underline" : "text-[#1D2939]"}`}>
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
import { useRouter } from "next/navigation";
import CardsService from "@/app/service/cards.service";

interface Props {
  id: string;
}

export default function TransactionDetails({ id }: Props) {
  const router = useRouter();
  const cardsService = useMemo(() => new CardsService(), []);

  const [transaction, setTransaction] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchTransaction = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await cardsService.getTransactionDetails(id);
        
        if (!isMounted) return;

        const payload = response?.data?.data || response?.data;
        if (payload) {
          setTransaction(payload);
        } else {
          setError("Transaction details not found.");
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || "Failed to fetch transaction details.");
        }
      } reportError: {
        if (isMounted) setLoading(false);
      }
    };

    if (id) fetchTransaction();
    return () => {
      isMounted = false;
    };
  }, [id, cardsService]);

  if (loading) return <div className="p-8 text-[12px] text-gray-400">Loading...</div>;
  if (error || !transaction) return <div className="p-8 text-[12px] text-red-500">{error || "Transaction not found."}</div>;

  // --- API PAYLOAD STRUCTURAL PARSING ---
  const currencySign = transaction.currency === "USD" ? "$" : "₦";
  const isNegative = Number(transaction.amount || 0) < 0;
  const displayAmount = `${isNegative ? "-" : ""}${currencySign}${Number(Math.abs(transaction.amount || 0)).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  
  const formattedDate = transaction.createdAt 
    ? new Date(transaction.createdAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "medium" }) 
    : "N/A";

  const detailsRows: { label: string; value: string; isLink?: boolean }[] = [
    { label: "Authorization", value: transaction.authorization?._id || transaction.authorization || id, isLink: true },
    { label: "Account", value: transaction.account?.accountName || "N/A", isLink: true },
    { label: "Customer", value: transaction.customer?.name || "N/A", isLink: true },
    { label: "Type", value: transaction.transactionMetadata.type},
    { label: "Amount", value: displayAmount },
    { label: "Fee", value: transaction.fee  !== undefined ? `₦${transaction.fee }` : "N/A" },
    { label: "VAT", value: transaction.vat !== undefined ? `₦${transaction.vat}` : "N/A" },
    
    // { label: "Fee", value: `₦${transaction.fee }`},
    // { label: "VAT", value: transaction.vat },
    { label: "Channel", value: transaction.transactionMetadata?.channel || transaction.channel },
    { label: "Reference", value: transaction.transactionMetadata?.reference || transaction._id},
    { label: "Date", value: formattedDate },
    { label: "Date Updated", value: transaction.updatedAt ? new Date(transaction.updatedAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "medium" }) : formattedDate },
  ];

  const terminalRows = [
    { label: "Terminal Id", value: transaction.terminal?.terminalId},
    { label: "Type", value: transaction.terminal?.terminalType },
    { label: "RRN", value: transaction.terminal?.rrn},
    { label: "Stan", value: transaction.terminal?.stan},
    { label: "Card Present", value: transaction.terminal?.cardPresence ? "Yes" : "No" },
    { label: "Card Holder Present", value: transaction.terminal?.cardHolderPresence ? "Yes" : "No" },
    { label: "Pin Entry Mode", value: transaction.terminal?.pinEntryMode},
  ];

  const merchantLabel = transaction.merchant?.name || "UNKNOWN MERCHANT";
  const initials = merchantLabel.slice(0, 2).toUpperCase();

  // Determine dynamic asset styling based on backend card brand signature
  const cardBrand = (transaction.card?.brand || "verve").toLowerCase();
  let cardDesignAsset = "/images/card-designs/sudo-black-verve.svg";
  if (cardBrand.includes("visa")) {
    cardDesignAsset = "/images/card-designs/sudo-black-visa.svg";
  } else if (cardBrand.includes("master") || cardBrand.includes("mc")) {
    cardDesignAsset = "/images/card-designs/sudo-black-mastercard.svg";
  }

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500 space-y-10 p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start max-w-[1440px] w-full gap-x-12 relative">
        
        {/* LEFT COLUMN */}
        <div className="w-full max-w-[580px] space-y-10">
          <div className="space-y-1">
            <h2 className="text-[32px] font-bold text-[#1D2939]">
              {displayAmount}
            </h2>
            <p className="text-[13px] text-gray-400 font-medium">
              Date: {formattedDate}
            </p>
          </div>

          {/* Transaction Details (Added Border Line On Top) */}
          <section className="space-y-6 pt-6 border-t border-gray-100">
            <h3 className="text-[14px] font-bold text-[#1D2939]">Transaction Details</h3>
            <div className="space-y-4">
              {detailsRows.map((row, i) => (
                <DetailRow key={i} label={row.label} value={row.value} isLink={row.isLink} />
              ))}
            </div>
          </section>

          <section className="pt-2 border-t border-gray-100">
            <button className="flex items-center gap-2 text-[13px] font-bold text-[#034EA2]">
              <span className="text-[10px]">▼</span> Metadata
            </button>
          </section>

          {/* Terminal Details (Added Border Line Above And Below) */}
          <section className="space-y-6 py-6 border-t border-b border-gray-100">
            <h3 className="text-[14px] font-bold text-[#1D2939]">Terminal Details</h3>
            <div className="space-y-4">
              {terminalRows.map((row, i) => (
                <DetailRow key={i} label={row.label} value={row.value} />
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Stationary Stagnant Sticky Placement */}
        <div className="w-full lg:max-w-[400px] space-y-10 lg:ml-auto lg:sticky lg:top-6">
          {/* THE CARD */}
          <div className="w-full aspect-[1.58/1]">
            <div className="relative w-full h-full shadow-xl rounded-2xl overflow-hidden">
              <Image
                src={cardDesignAsset}
                alt="Card Front"
                fill
                className="object-contain"
              />
              <div className="absolute bottom-[28%] left-[7.5%]">
                <p className="text-[14px] font-mono tracking-[0.25em] font-medium text-white/90">
                  {transaction.card?.maskedPan}
                </p>
              </div>
              <div className="absolute bottom-[18%] left-[45%]">
                <p className="text-[9px] font-mono font-bold text-white/70">
                  {transaction.card?.expiryMonth}/{transaction.card?.expiryYear }
                </p>
              </div>
              <div className="absolute bottom-[10%] left-[7.5%] max-w-[200px]">
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80 truncate">
                  SUDO / {(transaction.account?.accountName).replace("SUDO /", "").trim().toUpperCase()}
                </p>
              </div>
            </div>
          </div>

          {/* MERCHANT DETAILS */}
          <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-100 space-y-6">
            <h4 className="text-[10px] font-bold text-[#98A2B3] tracking-widest uppercase">Merchant Details</h4>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[14px]">
                {initials}
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#1D2939]">{merchantLabel}</p>
                <p className="text-[12px] text-[#98A2B3] font-medium uppercase">{transaction.merchant?.category}</p>
              </div>
            </div>
            <div className="space-y-4 border-t border-gray-100 pt-6">
              <SidebarRow label="City" value={transaction.merchant?.city} />
              <SidebarRow label="Postal Code" value={transaction.merchant?.postalCode} />
              <SidebarRow label="State" value={transaction.merchant?.state} />
              <SidebarRow label="Country" value={transaction.merchant?.country} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */
function DetailRow({ label, value, isLink }: { label: string; value: string; isLink?: boolean }) {
  return (
    <div className="flex justify-between items-center text-[13px] border-b border-gray-50/50 pb-2 last:border-0">
      <span className="text-[#667085] font-medium">{label}</span>
      <span className={`font-bold ${isLink ? "text-[#034EA2] cursor-pointer hover:underline" : "text-[#1D2939]"}`}>
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