
// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// /* --- UPDATED MOCK DATA --- */
// const DISPUTE_DETAIL_MOCK = {
//   amount: "-₦4,510.00",
//   timestamp: "Nov 24, 2025, 11:23:31 AM",
//   status: "Submitted",
//   card: {
//     pan: "5063 21** **** 2917",
//     holder: "SUDO / VICTOR AJIBERO",
//     expiry: "10/2028",
//   },
//   disputeInfo: [
//     { label: "Transaction", value: "69159bf2b9b5dc5cefb69f0a", isLink: true },
//     { label: "Reason", value: "Duplicate" },
//     { label: "Explanation", value: "test duplicate dispute on the same transaction" },
//     { label: "Amount", value: "-₦4,510.00" },
//     { label: "Status", value: "Submitted" },
//     { label: "Date", value: "Nov 24, 2025, 11:23:31 AM" },
//     { label: "Date Updated", value: "Nov 13, 2025, 9:50:58 AM" }
//   ],
//   transactionDetails: [
//     { label: "Type", value: "Payment" },
//     { label: "Amount", value: "-₦4,505.00" },
//     { label: "Fee", value: "-₦5.00" },
//     { label: "VAT", value: "₦0.00" },
//     { label: "Channel", value: "WEB" },
//     { label: "Reference", value: "1135612833117111660504" },
//     { label: "Date", value: "Nov 13, 2025, 9:50:58 AM" },
//     { label: "Date Updated", value: "Nov 13, 2025, 9:50:58 AM" },
//   ],
//   terminalDetails: [
//     { label: "Terminal Id", value: "3SUDOSIM" },
//     { label: "Type", value: "ECOMMERCE" },
//     { label: "RRN", value: "117111660504" },
//     { label: "Stan", value: "121799" },
//     { label: "Card Present", value: "Yes" },
//     { label: "Card Holder Present", value: "Yes" },
//     { label: "Pin Entry Mode", value: "KEYED_IN" },
//   ],
// };

// export default function DisputeDetails({ id }: { id: string }) {
//   const router = useRouter();
//   const [data, setData] = useState<typeof DISPUTE_DETAIL_MOCK | null>(null);

//   useEffect(() => {
//     setData(DISPUTE_DETAIL_MOCK);
//   }, [id]);

//   if (!data) return <div className="p-8 text-[12px] text-gray-400">Loading...</div>;

//   return (
//     <div className="flex flex-col h-full animate-in fade-in duration-500 space-y-10 p-8 bg-white">
      
//       <div className="flex flex-col lg:flex-row lg:justify-between items-start w-full gap-x-20">
//         {/* LEFT COLUMN */}
//         <div className="w-full max-w-[580px] space-y-10">
          
//           {/* HEADER SECTION */}
//           <div className="space-y-1">
//             <h2 className="text-[32px] font-bold text-[#1D2939]">{data.amount}</h2>
//             <div className="flex items-center gap-3">
//                <p className="text-[13px] text-gray-400 font-medium">Submitted: {data.timestamp}</p>
//                <span className="px-2 py-0.5 bg-[#F0F9FF] text-[#026AA2] text-[10px] font-bold rounded-full border border-[#B9E6FE]">
//                  {data.status}
//                </span>
//             </div>
//           </div>

//           {/* DISPUTE DETAILS (BEFORE METADATA) */}
//           <section className="space-y-6 pt-4">
//             <h3 className="text-[14px] font-bold text-[#1D2939]">Dispute Details</h3>
//             <div className="space-y-5">
//               {data.disputeInfo.map((row, i) => (
//                 <DetailRow key={i} label={row.label} value={row.value} isLink={row.isLink} />
//               ))}
//             </div>
//           </section>

//           {/* METADATA TOGGLE */}
//           <div className="pt-2 border-t border-gray-50">
//             <button className="flex items-center gap-2 text-[13px] font-bold text-[#5925DC] mt-4 mb-2">
//               <span className="text-[10px]">▼</span> Metadata
//             </button>
//           </div>

//           {/* TRANSACTION DETAILS */}
//           <section className="space-y-6">
//             <h3 className="text-[14px] font-bold text-[#1D2939]">Transaction Details</h3>
//             <div className="space-y-5 border-t border-gray-50 pt-6">
//               {data.transactionDetails.map((row, i) => (
//                 <DetailRow key={i} label={row.label} value={row.value} />
//               ))}
//             </div>
//           </section>

//           {/* TERMINAL DETAILS */}
//           <section className="space-y-6 pt-4">
//             <h3 className="text-[14px] font-bold text-[#1D2939]">Terminal Details</h3>
//             <div className="space-y-5 border-t border-gray-50 pt-6">
//               {data.terminalDetails.map((row, i) => (
//                 <DetailRow key={i} label={row.label} value={row.value} />
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* RIGHT COLUMN: BLACK CARD */}
//         <div className="w-full lg:max-w-[400px] lg:ml-auto">
//           <div className="w-full aspect-[1.58/1] relative shadow-2xl rounded-2xl overflow-hidden bg-[#0A0A0A]">
//             <Image src="/images/card-designs/sudo-black-verve.svg" alt="Card" fill className="object-contain" />
//             <div className="absolute bottom-[28%] left-[7.5%] font-mono text-white/90 text-[14px] tracking-[0.2em]">
//               {data.card.pan}
//             </div>
//             <div className="absolute bottom-[20%] left-[55%] font-mono text-white/80 text-[10px]">
//               {data.card.expiry}
//             </div>
//             <div className="absolute bottom-[12%] left-[7.5%] font-mono text-white/80 text-[9px] uppercase tracking-wider">
//               {data.card.holder}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DetailRow({ label, value, isLink }: { label: string; value: string; isLink?: boolean }) {
//   return (
//     <div className="flex justify-between items-start text-[13px] py-1">
//       <span className="text-[#667085] font-medium">{label}</span>
//       <span className={`font-bold text-right ${isLink ? "text-[#034EA2] cursor-pointer hover:underline" : "text-[#1D2939]"}`}>
//         {value} {isLink && "→"}
//       </span>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CardsService from "@/app/service/cards.service";

export default function DisputeDetails({ id }: { id: string }) {
  const router = useRouter();
  const cardsService = useMemo(() => new CardsService(), []);

  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Dynamic endpoint call using service class layer architecture
        const response = await cardsService.getDisputesDetails(id);
        
        if (!isMounted) return;

        const responseBody = response?.data;
        // Handle response wrapper layouts cleanly
        const disputePayload = responseBody?.data || responseBody;

        if (disputePayload) {
          setData(disputePayload);
        } else {
          setError("Dispute records could not be found.");
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || "Failed to load dispute details.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (id) {
      fetchDetails();
    }
    
    return () => {
      isMounted = false;
    };
  }, [id, cardsService]);

  if (loading) return <div className="p-8 text-[12px] text-gray-400">Loading...</div>;
  if (error) return <div className="p-8 text-[12px] text-red-500">{error}</div>;
  if (!data) return <div className="p-8 text-[12px] text-gray-400">No data found.</div>;

  // Compute variables dynamically matching backend object schemas safely
  const currencySign = data.currency === "USD" ? "$" : "₦";
  const formattedDisputeAmount = `${Number(data.amount || 0) < 0 ? "-" : ""}${currencySign}${Math.abs(Number(data.amount || 0)).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  
  const txAmountNum = data.transaction?.amount || 0;
  const formattedTxAmount = `${txAmountNum < 0 ? "-" : ""}${data.transaction?.currency === "USD" ? "$" : "₦"}${Math.abs(Number(txAmountNum)).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  const txFeeNum = data.transaction?.fee || 0;
  const formattedTxFee = `${txFeeNum < 0 ? "-" : ""}${data.transaction?.currency === "USD" ? "$" : "₦"}${Math.abs(Number(txFeeNum)).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  const formattedVat = `${data.transaction?.vat === "USD" ? "$" : "₦"}${Number(data.transaction?.vat || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  const displayTimestamp = data.createdAt 
    ? new Date(data.createdAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "medium" })
    : "N/A";

  const displayTxDate = data.transaction?.createdAt
    ? new Date(data.transaction.createdAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "medium" })
    : "N/A";

  const displayTxUpdated = data.transaction?.updatedAt
    ? new Date(data.transaction.updatedAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "medium" })
    : "N/A";

  const displayDisputeUpdated = data.updatedAt
    ? new Date(data.updatedAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "medium" })
    : "N/A";

  // Safe fallback mappings for nested structural layers
  const maskedPan = data.transaction?.card?.maskedPan || "5063 21** **** 0000";
  const cardHolderName = data.transaction?.customer?.name || "SUDO / CUSTOMER";
  const cardExpiry = data.transaction?.card?.expiryMonth && data.transaction?.card?.expiryYear
    ? `${data.transaction.card.expiryMonth}/${data.transaction.card.expiryYear}`
    : "12/2029";

  // Data Array Maps preserving your layout mapping architecture
  const disputeInfo = [
    { label: "Transaction", value: data.transaction?._id },
    { label: "Reason", value: data.reason  },
    { label: "Explanation", value: data.explanation },
    { label: "Amount", value: formattedDisputeAmount },
    { label: "Status", value: data.status },
    { label: "Date", value: displayTimestamp },
    { label: "Date Updated", value: displayDisputeUpdated }
  ];

  const transactionDetails = [
    { label: "Type", value: data.transaction?.transactionMetadata.type},
    { label: "Amount", value: formattedTxAmount },
    { label: "Fee", value: formattedTxFee },
    { label: "VAT", value: formattedVat },
    { label: "Channel", value: data.transaction?.transactionMetadata?.channel },
    { label: "Reference", value: data.transaction?.transactionMetadata?.reference},
    { label: "Date", value: displayTxDate },
    { label: "Date Updated", value: displayTxUpdated },
  ];

  const terminalDetails = [
    { label: "Terminal Id", value: data.transaction?.terminal?.terminalId },
    { label: "Type", value: data.transaction?.terminal?.terminalType },
    { label: "RRN", value: data.transaction?.terminal?.rrn  },
    { label: "Stan", value: data.transaction?.terminal?.stan  },
    { label: "Card Present", value: data.transaction?.terminal?.cardPresence ? "Yes" : "No" },
    { label: "Card Holder Present", value: data.transaction?.terminal?.cardHolderPresence ? "Yes" : "No" },
    { label: "Pin Entry Mode", value: data.transaction?.terminal?.pinEntryMode },
  ];

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500 space-y-10 p-8 bg-white">
      
      <div className="flex flex-col lg:flex-row lg:justify-between items-start w-full gap-x-20">
        {/* LEFT COLUMN */}
        <div className="w-full max-w-[580px] space-y-10">
          
          {/* HEADER SECTION */}
          <div className="space-y-1">
            <h2 className="text-[32px] font-bold text-[#1D2939]">{formattedDisputeAmount}</h2>
            <div className="flex items-center gap-3">
               <p className="text-[13px] text-gray-400 font-medium">Date: {displayTimestamp}</p>
               <span className="px-2 py-0.5 bg-[#F0F9FF] text-[#026AA2] text-[10px] font-bold rounded-full border border-[#B9E6FE] capitalize">
                 {data.status || "Submitted"}
               </span>
            </div>
          </div>

          {/* DISPUTE DETAILS (WITH TOP AND BOTTOM BORDERS) */}
          <section className="space-y-6 pt-4 border-t border-b border-gray-100 pb-6">
            <h3 className="text-[14px] font-bold text-[#1D2939]">Dispute Details</h3>
            <div className="space-y-5">
              {disputeInfo.map((row, i) => (
                <DetailRow key={i} label={row.label} value={row.value} isLink={row.isLink} />
              ))}
            </div>
          </section>

          {/* METADATA TOGGLE (WITH TOP AND BOTTOM BORDERS) */}
          <div className="py-2 border-t border-b border-gray-100">
            <button className="flex items-center gap-2 text-[13px] font-bold text-[#5925DC] my-2">
              <span className="text-[10px]">▼</span> Metadata
            </button>
          </div>

          {/* TRANSACTION DETAILS (WITH TOP AND BOTTOM BORDERS) */}
          <section className="space-y-6 pt-4 border-t border-b border-gray-100 pb-6">
            <h3 className="text-[14px] font-bold text-[#1D2939]">Transaction Details</h3>
            <div className="space-y-5">
              {transactionDetails.map((row, i) => (
                <DetailRow key={i} label={row.label} value={row.value} />
              ))}
            </div>
          </section>

          {/* TERMINAL DETAILS (WITH TOP AND BOTTOM BORDERS) */}
          <section className="space-y-6 pt-4 border-t border-b border-gray-100 pb-6">
            <h3 className="text-[14px] font-bold text-[#1D2939]">Terminal Details</h3>
            <div className="space-y-5">
              {terminalDetails.map((row, i) => (
                <DetailRow key={i} label={row.label} value={row.value} />
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: BLACK CARD */}
        <div className="w-full lg:max-w-[400px] lg:ml-auto">
          <div className="w-full aspect-[1.58/1] relative shadow-2xl rounded-2xl overflow-hidden bg-[#0A0A0A]">
            <Image src="/images/card-designs/sudo-black-verve.svg" alt="Card" fill className="object-contain" />
            <div className="absolute bottom-[28%] left-[7.5%] font-mono text-white/90 text-[14px] tracking-[0.2em]">
              {maskedPan}
            </div>
            <div className="absolute bottom-[20%] left-[55%] font-mono text-white/80 text-[10px]">
              {cardExpiry}
            </div>
            <div className="absolute bottom-[12%] left-[7.5%] font-mono text-white/80 text-[9px] uppercase tracking-wider">
              {cardHolderName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value, isLink }: { label: string; value: string; isLink?: boolean }) {
  return (
    <div className="flex justify-between items-start text-[13px] py-1">
      <span className="text-[#667085] font-medium">{label}</span>
      <span className={`font-bold text-right break-all max-w-[70%] ${isLink ? "text-[#034EA2] cursor-pointer hover:underline" : "text-[#1D2939]"}`}>
        {value} {isLink && "→"}
      </span>
    </div>
  );
}