// "use client";

// import React from "react";
// import Image from "next/image";

// const MOCK_TRANSACTIONS = [
//   {
//     company: "SUDO SIMULATOR",
//     trxId: "TRX-992831002",
//     channel: "Card",
//     amount: "-₦4,510.00",
//     type: "Payment",
//     status: "Successful",
//     queueStatus: "Processed",
//     date: "11/24/25, 11:23 AM"
//   },
//   {
//     company: "SUDO SIMULATOR",
//     trxId: "TRX-882104551",
//     channel: "Card",
//     amount: "-₦12,000.00",
//     type: "Withdrawal",
//     status: "Successful",
//     queueStatus: "Processed",
//     date: "11/24/25, 05:13 AM"
//   },
//   {
//     company: "TECH-VEND",
//     trxId: "TRX-112099342",
//     channel: "Wallet",
//     amount: "-₦250.00",
//     type: "Data Top-up",
//     status: "Pending",
//     queueStatus: "In-Queue",
//     date: "11/23/25, 02:45 PM"
//   },
//   {
//     company: "SUDO SIMULATOR",
//     trxId: "TRX-445091223",
//     channel: "Wallet",
//     amount: "-₦30.00",
//     type: "Payment",
//     status: "Failed",
//     queueStatus: "Rejected",
//     date: "09/19/23, 01:47 PM"
//   }
// ];

// export default function TransactionsTab() {
//   const headers = ["COMPANY", "TRX ID", "CHANNEL", "AMOUNT", "TYPE", "STATUS", "QUEUE STATUS"];

//   return (
//     <div className="space-y-7 animate-in fade-in duration-500">
//       {/* UTILITY BAR */}
//       <div className="flex justify-between items-center">
//         <p className="text-[12px] text-gray-400 font-medium">
//           Showing <span className="text-[#1D2939]">0 - {MOCK_TRANSACTIONS.length}</span> of <span className="text-[#1D2939]">{MOCK_TRANSACTIONS.length}</span> Transaction
//         </p>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <input type="text" placeholder="search" className="pl-4 pr-11 py-2 bg-white border border-gray-100 rounded-lg text-[12px] w-64 outline-none" />
//             <Image src="/images/search.svg" alt="Search" width={16} height={16} className="absolute right-3.5 top-2.5 opacity-30" />
//           </div>
//           <button className="flex items-center gap-2 px-3 py-2 border border-gray-100 rounded-lg text-[12px] font-medium text-[#1D2939]">
//             <Image src="/images/filter.svg" alt="Filter" width={14} height={14} />
//             <span className="bg-[#1D2939] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">1</span>
//             Filter(s)
//           </button>
//         </div>
//       </div>

//       {/* DATA TABLE */}
//       <div className="w-full bg-white border border-gray-50 rounded-xl overflow-hidden">
//         <table className="w-full text-left">
//           <thead className="bg-gray-50 border-b border-gray-100">
//             <tr>
//               {headers.map((header) => (
//                 <th key={header} className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {MOCK_TRANSACTIONS.map((trx, i) => (
//               <tr key={i} className="hover:bg-gray-50/50 transition-colors cursor-pointer group">
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-[10px] text-white font-bold">SS</div>
//                     <div>
//                       <p className="text-[12px] font-bold text-[#1D2939]">{trx.company}</p>
//                       <p className="text-[10px] text-gray-400">{trx.date}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 text-[11px] font-medium text-[#1D2939]">{trx.trxId}</td>
//                 <td className="px-6 py-4 text-[11px] text-gray-400">{trx.channel}</td>
//                 <td className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">{trx.amount}</td>
//                 <td className="px-6 py-4 text-[11px] text-gray-400">{trx.type}</td>
//                 <td className="px-6 py-4">
//                   <span className={`px-2 py-1 rounded-md text-[10px] font-bold border ${
//                     trx.status === 'Successful' ? 'bg-green-50 text-green-600 border-green-100' : 
//                     trx.status === 'Failed' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-gray-50 text-gray-400 border-gray-100'
//                   }`}>
//                     {trx.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 text-[11px] font-medium text-[#034EA2]">{trx.queueStatus}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useState, useRef } from "react";
// import Image from "next/image";

// const MOCK_TRANSACTIONS = [
//   {
//     company: "Seth Merit Supper Store Nig Ltd",
//     address: "BUSA PLAZA BY MADAM CALABAR MASHAFA ROAD MPAPE ABUJA",
//     trxId: "090286260622160401747224639963",
//     tableDate: "6/22/26, 5:04 PM",
//     channel: "CARD",
//     amount: "₦10,000.00",
//     type: "CARD PURCHASE",
//     status: "Failed",
//     queueStatus: "Pending",
//     date: "Jun 22, 2026, 5:04:01 PM",
//     terminal: "2ISWY139",
//     cardType: "Debit Mastercard",
//     cardExp: "5/29",
//     client: "CARD/SUDO",
//     pan: "519911******4785",
//     aid: "A0000000041010",
//     trxRef: "090286260622160401747224639963",
//     responseCode: "51",
//     message: "Not sufficient funds",
//     stan: "936295",
//     rrn: "524311936295"
//   },
//   {
//     company: "Zeek Tech Enterprise",
//     address: "BLOCK B2 CENTRAL AREA, GARKI AMAC ABUJA",
//     trxId: "09028626062209184833993102",
//     tableDate: "6/22/26, 10:18 AM",
//     channel: "CARD",
//     amount: "₦100.00",
//     type: "CARD PURCHASE",
//     status: "Success",
//     queueStatus: "Success",
//     date: "Jun 22, 2026, 10:18:00 AM",
//     terminal: "2ISWY139",
//     cardType: "Debit Mastercard",
//     cardExp: "5/29",
//     client: "CARD/SUDO",
//     pan: "519911******4785",
//     aid: "A0000000041010",
//     trxRef: "090286260622160401747224639963",
//     responseCode: "00",
//     message: "Approved",
//     stan: "936295",
//     rrn: "524311936295"
//   },
//   {
//     company: "Seth Merit Supper Store Nig Ltd",
//     address: "BUSA PLAZA BY MADAM CALABAR MASHAFA ROAD MPAPE ABUJA",
//     trxId: "090286260619185939576184926738",
//     tableDate: "6/19/26, 7:59 PM",
//     channel: "WALLET",
//     amount: "₦99,500.00",
//     type: "WALLET WITHDRAWAL",
//     status: "Success",
//     queueStatus: "Success",
//     date: "Jun 19, 2026, 7:59:39 PM",
//     bank: "090645",
//     accountNo: "8924645741",
//     narration: "Withdrawal from Account",
//     trxRef: "090286260619185939576184926738"
//   }
// ];

// export default function TransactionsTab() {
//   const [selectedTrx, setSelectedTrx] = useState<typeof MOCK_TRANSACTIONS[0] | null>(null);
//   const printRef = useRef<HTMLDivElement>(null);

//   const headers = ["COMPANY", "TRX ID", "CHANNEL", "AMOUNT", "TYPE", "STATUS", "QUEUE STATUS"];

//   const handlePrint = () => {
//     if (!printRef.current) return;
    
//     const printContent = printRef.current.innerHTML;
//     const originalContent = document.body.innerHTML;

//     document.body.innerHTML = `
//       <html>
//         <head>
//           <title>Receipt_${selectedTrx?.trxId}</title>
//           <style>
//             body { 
//               font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; 
//               display: flex; 
//               justify-content: center; 
//               padding: 20px 10px; 
//               background: white;
//               color: #000;
//             }
//             .print-box { width: 100%; max-width: 310px; text-align: center; }
//             .sh-box { background: #000; color: #fff; padding: 2px 5px; font-weight: 900; font-size: 13px; border-radius: 2px; display: inline-block; letter-spacing: -1px; }
//             .font-mono-custom { font-family: monospace; font-size: 10.5px; }
//             .space-y { margin-top: 5px; margin-bottom: 5px; display: flex; justify-content: space-between; }
//             .divider-dashed { border-top: 1px dashed #000; margin: 12px 0; }
//             .amount-text { font-size: 21px; font-weight: 800; margin: 12px 0; }
//           </style>
//         </head>
//         <body>
//           <div class="print-box">${printContent}</div>
//         </body>
//       </html>
//     `;

//     window.print();
//     document.body.innerHTML = originalContent;
//     window.location.reload();
//   };

//   return (
//     <div className="space-y-6 animate-in fade-in duration-300">
      
//       {/* UTILITY BAR (Search Input Removed) */}
//       <div className="flex justify-between items-center">
//         <p className="text-[13px] text-[#848D9A] font-medium">
//           Showing <span className="text-[#1D2939] font-bold">0 - {MOCK_TRANSACTIONS.length}</span> of <span className="text-[#1D2939] font-bold">{MOCK_TRANSACTIONS.length}</span> Transactions
//         </p>
//         <div className="flex items-center gap-4">
//           <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-lg text-[13px] font-bold text-[#1D2939]">
//             <div className="relative flex items-center justify-center">
//               <Image src="/images/filter.svg" alt="Filter" width={18} height={18} className="opacity-70" />
//               <span className="absolute -top-1.5 -right-1.5 bg-[#034EA2] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">1</span>
//             </div>
//             <span className="ml-1">Filter(s)</span>
//           </button>
//         </div>
//       </div>

//       {/* DATA TABLE */}
//       <div className="w-full bg-white border border-gray-100/70 rounded-xl overflow-hidden shadow-xs">
//         <table className="w-full text-left border-collapse">
//           <thead className="bg-[#FCFCFD] border-b border-gray-100">
//             <tr>
//               {headers.map((header) => (
//                 <th key={header} className="px-6 py-4 text-[11px] font-bold text-[#475467] tracking-wider">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {MOCK_TRANSACTIONS.map((trx, i) => {
//               const initials = trx.company.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
//               return (
//                 <tr 
//                   key={i} 
//                   onClick={() => setSelectedTrx(trx)}
//                   className="hover:bg-[#F9FAFB]/60 transition-colors cursor-pointer group"
//                 >
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-9 h-9 rounded-full bg-[#A855F7] flex items-center justify-center text-[11px] text-white font-bold shrink-0">
//                         {initials}
//                       </div>
//                       <div>
//                         <p className="text-[13px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors max-w-[180px] truncate">{trx.company}</p>
//                       </div>
//                     </div>
//                   </td>
//                   {/* Stacked TRX ID along with Date & Time row underneath matching image_e7c6be.jpg */}
//                   <td className="px-6 py-4">
//                     <p className="text-[12px] font-medium text-[#475467] max-w-[140px] truncate">{trx.trxId}</p>
//                     <p className="text-[11px] text-[#98A2B3] mt-0.5 font-medium">{trx.tableDate}</p>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide ${
//                       trx.channel === 'CARD' ? 'bg-[#EFF6FF] text-[#1E40AF]' : 'bg-[#F0FDF4] text-[#166534]'
//                     }`}>
//                       {trx.channel}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-[13px] font-bold text-[#1D2939]">{trx.amount}</td>
//                   <td className="px-6 py-4 text-[12px] text-[#475467] font-medium">{trx.channel === 'CARD' ? 'Funding' : 'Withdraw'}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${
//                       trx.status === 'Success' ? 'bg-[#ECFDF5] text-[#065F46]' : 'bg-[#FEF2F2] text-[#991B1B]'
//                     }`}>
//                       {trx.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-[12px] font-semibold text-[#344054]">{trx.queueStatus}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* DETAILED COMPACT RECEIPT MODAL */}
//       {selectedTrx && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
//           <div className="bg-white rounded-xl shadow-2xl max-w-[340px] w-full overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
            
//             <div className="px-6 pt-6 pb-4 overflow-y-auto flex-1 bg-white" ref={printRef}>
              
//               <div className="flex justify-start mb-1 print:hidden">
//                 <button 
//                   onClick={() => setSelectedTrx(null)}
//                   className="text-black font-normal text-lg hover:opacity-50 transition-opacity outline-none"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <div className="text-center text-black font-sans selection:bg-transparent">
//                 <p className="text-[8.5px] font-black tracking-[0.2em] text-black mb-3">**** RECEIPT REPRINT ****</p>
                
//                 <div className="flex items-center justify-center gap-1 mb-0.5">
//                   <div className="bg-black text-white px-[4.5px] py-[1px] rounded-[2.5px] text-[11.5px] font-black tracking-tighter">SH</div>
//                   <span className="font-black text-[14.5px] tracking-tight text-black">Safehaven</span>
//                 </div>
//                 <p className="text-[7.5px] text-black font-bold uppercase tracking-[0.18em] pl-6 mb-3">microfinance bank</p>

//                 <h3 className="text-[10.5px] font-black uppercase leading-tight max-w-[260px] mx-auto tracking-wide">{selectedTrx.company}</h3>
//                 <p className="text-[8.5px] text-black font-medium max-w-[240px] mx-auto mt-1 leading-normal tracking-tight uppercase">{selectedTrx.address}</p>

//                 <h4 className="text-[11.5px] font-black tracking-wide mt-5 mb-0.5 uppercase">{selectedTrx.type}</h4>
//                 <p className="text-[8.5px] text-black font-medium tracking-tight">RECEIPT NO:&nbsp;&nbsp;{selectedTrx.trxId.substring(0, 26)}</p>

//                 <p className="text-black text-[11px] font-bold tracking-[0.35em] mt-2">******** ******</p>

//                 {selectedTrx.channel === "CARD" ? (
//                   <div className="mt-3 space-y-1 text-left border-t border-b border-dashed border-black/80 py-3 font-mono text-[10px] font-bold text-black">
//                     <div className="flex justify-between"><span>TERMINAL:</span><span>{selectedTrx.terminal}</span></div>
//                     <div className="flex justify-between"><span>DATE & TIME:</span><span>{selectedTrx.date}</span></div>
//                     <div className="flex justify-between"><span>CARD:</span><span>{selectedTrx.cardType}</span></div>
//                     <div className="flex justify-between"><span>CARD EXP:</span><span>{selectedTrx.cardExp}</span></div>
//                     <div className="flex justify-between"><span>CLIENT:</span><span>{selectedTrx.client}</span></div>
//                     <div className="flex justify-between"><span>PAN:</span><span className="tracking-wide">{selectedTrx.pan}</span></div>
//                     <div className="flex justify-between"><span>AID:</span><span>{selectedTrx.aid}</span></div>
//                     <div className="flex justify-between items-start gap-4">
//                       <span className="shrink-0">TRX REF:</span>
//                       <span className="break-all text-right leading-tight max-w-[160px]">{selectedTrx.trxRef}</span>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="mt-3 space-y-1 text-left border-t border-b border-dashed border-black/80 py-3 font-mono text-[10px] font-bold text-black">
//                     <div className="flex justify-between"><span>DATE & TIME:</span><span>{selectedTrx.date}</span></div>
//                     <div className="flex justify-between"><span>BANK:</span><span>{selectedTrx.bank}</span></div>
//                     <div className="flex justify-between"><span>ACCOUNT NO:</span><span className="tracking-wide">{selectedTrx.accountNo}</span></div>
//                     <div className="flex justify-between"><span>NARRATION:</span><span>{selectedTrx.narration}</span></div>
//                     <div className="flex justify-between items-start gap-4">
//                       <span className="shrink-0">TRX REF:</span>
//                       <span className="break-all text-right leading-tight max-w-[160px]">{selectedTrx.trxRef}</span>
//                     </div>
//                   </div>
//                 )}

//                 <h2 className="text-[22px] font-black text-black mt-4 tracking-tight">{selectedTrx.amount}</h2>
//                 <p className="text-black text-[11px] font-bold tracking-widest -mt-2.5 mb-2">........................</p>

//                 <h1 className="text-[11.5px] font-black tracking-widest text-black uppercase mb-1">
//                   {selectedTrx.status === "Success" ? "SUCCESS" : "FAILED"}
//                 </h1>

//                 {selectedTrx.status === "Failed" && (
//                   <div className="mt-3 text-left font-mono text-[10px] font-bold space-y-1 text-black border-t border-dashed border-black/80 pt-3">
//                     <div className="flex justify-between"><span>RESPONSE CODE:</span><span>{selectedTrx.responseCode}</span></div>
//                     <div className="flex justify-between"><span>MESSAGE:</span><span className="uppercase">{selectedTrx.message}</span></div>
//                     <div className="flex justify-between"><span>STAN:</span><span>{selectedTrx.stan}</span></div>
//                     <div className="flex justify-between"><span>RRN:</span><span>{selectedTrx.rrn}</span></div>
//                   </div>
//                 )}
                
//                 <p className="text-black text-[11px] font-bold tracking-[0.35em] mt-2.5">******** ******</p>
//               </div>
//             </div>

//             <div className="pb-5 px-5 bg-white flex items-center justify-center print:hidden">
//               <button 
//                 onClick={handlePrint}
//                 className="flex items-center justify-center gap-2 text-gray-800 text-[12.5px] font-bold hover:opacity-60 transition-all outline-none bg-transparent border-none cursor-pointer"
//               >
//                 <Image src="/images/file-text.svg" alt="Receipt" width={15} height={15} className="opacity-70" />
//                 <span>Print Receipt</span>
//               </button>
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import InsuredService from "@/app/service/insured.service";

const insuredService = new InsuredService();

export default function TransactionsTab() {
const [currentPage] = useState(0);
const pageSize = 25;
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTrx, setSelectedTrx] = useState<any | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

 

useEffect(() => {
  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const res = await insuredService.getInsuredTransactions(
        currentPage,
        pageSize,
        '',   // fromDate
        '',   // toDate
        '',   // type
        '',   // status
        '',   // membershipId
      );
      if ((res as any)?.data) {
        setTransactions(Array.isArray((res as any).data?.data) ? (res as any).data.data : []);
      }
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchTransactions();
}, []);

  const headers = ["COMPANY", "TRX ID", "CHANNEL", "AMOUNT", "TYPE", "STATUS", "QUEUE STATUS"];

  // Map raw transaction to receipt shape
  const mapToReceipt = (trx: any) => {
    const invoice = trx.transaction_invoice?.[0];
    const cardDetail = invoice?.card_detail;
    const isCard = trx.paid_channel === "Card";

    return {
      company: trx.user?.company_name || `${trx.user?.first_name || ""} ${trx.user?.last_name || ""}`.trim(),
      address: trx.user?.address?.toUpperCase() || "",
      trxId: trx.transaction_id,
      tableDate: new Date(trx.createdAt).toLocaleString("en-US", {
        month: "numeric", day: "numeric", year: "2-digit",
        hour: "numeric", minute: "2-digit", hour12: true,
      }),
      channel: trx.paid_channel?.toUpperCase(),
      amount: `₦${parseFloat(trx.amount).toLocaleString("en-NG", { minimumFractionDigits: 2 })}`,
      type: isCard ? "CARD PURCHASE" : trx.transaction_type?.toUpperCase(),
      status: trx.status,
      queueStatus: trx.queue_status,
      date: new Date(trx.createdAt).toLocaleString("en-US", {
        month: "short", day: "numeric", year: "numeric",
        hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true,
      }),
      // Card specific
      terminal: cardDetail?.terminalId || "",
      cardType: cardDetail?.schema_name || "",
      cardExp: cardDetail ? `${cardDetail.expiryMonth}/${cardDetail.expiryYear}` : "",
      client: "CARD/SUDO",
      pan: cardDetail?.masked_card || "",
      aid: cardDetail?.aid || "",
      trxRef: trx.transaction_id,
      responseCode: invoice?.provider_status_code || "",
      message: invoice?.provider_response || "",
      stan: invoice?.stan || "",
      rrn: invoice?.rrn || "",
      // Wallet specific
      bank: invoice?.bank_code || "",
      accountNo: invoice?.account_number || "",
      narration: trx.narration || "",
    };
  };

  const handlePrint = () => {
    if (!printRef.current) return;
    const printContent = printRef.current.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = `
      <html>
        <head>
          <title>Receipt_${selectedTrx?.trxId}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; justify-content: center; padding: 20px 10px; background: white; color: #000; }
            .print-box { width: 100%; max-width: 310px; text-align: center; }
            .sh-box { background: #000; color: #fff; padding: 2px 5px; font-weight: 900; font-size: 13px; border-radius: 2px; display: inline-block; letter-spacing: -1px; }
            .font-mono-custom { font-family: monospace; font-size: 10.5px; }
            .space-y { margin-top: 5px; margin-bottom: 5px; display: flex; justify-content: space-between; }
            .divider-dashed { border-top: 1px dashed #000; margin: 12px 0; }
            .amount-text { font-size: 21px; font-weight: 800; margin: 12px 0; }
          </style>
        </head>
        <body><div class="print-box">${printContent}</div></body>
      </html>
    `;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* UTILITY BAR */}
      <div className="flex justify-between items-center">
        <p className="text-[13px] text-[#848D9A] font-medium">
          Showing{" "}
          <span className="text-[#1D2939] font-bold">
            0 - {transactions.length}
          </span>{" "}
          of{" "}
          <span className="text-[#1D2939] font-bold">{transactions.length}</span>{" "}
          Transactions
        </p>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-lg text-[13px] font-bold text-[#1D2939]">
            <div className="relative flex items-center justify-center">
              <Image src="/images/filter.svg" alt="Filter" width={18} height={18} className="opacity-70" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#034EA2] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">1</span>
            </div>
            <span className="ml-1">Filter(s)</span>
          </button>
        </div>
      </div>

      {/* DATA TABLE */}
      {loading ? (
        <div className="w-full bg-white border border-gray-100 rounded-xl overflow-hidden">
          <div className="animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-4 px-6 py-4 border-b border-gray-50">
                <div className="w-9 h-9 rounded-full bg-gray-100 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-gray-100 rounded w-40" />
                  <div className="h-3 bg-gray-100 rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full bg-white border border-gray-100/70 rounded-xl overflow-hidden shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#FCFCFD] border-b border-gray-100">
              <tr>
                {headers.map((header) => (
                  <th key={header} className="px-6 py-4 text-[11px] font-bold text-[#475467] tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">
                    No transactions found
                  </td>
                </tr>
              ) : (
                transactions.map((trx, i) => {
                  const mapped = mapToReceipt(trx);
                  const initials = mapped.company.split(" ").map((w: string) => w[0]).join("").substring(0, 2).toUpperCase();
                  return (
                    <tr
                      key={trx._id || i}
                      onClick={() => setSelectedTrx(mapped)}
                      className="hover:bg-[#F9FAFB]/60 transition-colors cursor-pointer group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#A855F7] flex items-center justify-center text-[11px] text-white font-bold shrink-0">
                            {initials}
                          </div>
                          <p className="text-[13px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors max-w-[180px] truncate">
                            {mapped.company}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-[12px] font-medium text-[#475467] max-w-[140px] truncate">{mapped.trxId}</p>
                        <p className="text-[11px] text-[#98A2B3] mt-0.5 font-medium">{mapped.tableDate}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide ${
                          mapped.channel === "CARD" ? "bg-[#EFF6FF] text-[#1E40AF]" : "bg-[#F0FDF4] text-[#166534]"
                        }`}>
                          {mapped.channel}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[13px] font-bold text-[#1D2939]">{mapped.amount}</td>
                      <td className="px-6 py-4 text-[12px] text-[#475467] font-medium">{trx.transaction_type}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                          mapped.status === "Success" ? "bg-[#ECFDF5] text-[#065F46]" : "bg-[#FEF2F2] text-[#991B1B]"
                        }`}>
                          {mapped.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[12px] font-semibold text-[#344054]">{mapped.queueStatus}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* RECEIPT MODAL */}
      {selectedTrx && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-xl shadow-2xl max-w-[340px] w-full overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">

            <div className="px-6 pt-6 pb-4 overflow-y-auto flex-1 bg-white" ref={printRef}>
              <div className="flex justify-start mb-1 print:hidden">
                <button onClick={() => setSelectedTrx(null)} className="text-black font-normal text-lg hover:opacity-50 transition-opacity outline-none">✕</button>
              </div>

              <div className="text-center text-black font-sans selection:bg-transparent">
                <p className="text-[8.5px] font-black tracking-[0.2em] text-black mb-3">**** RECEIPT REPRINT ****</p>

                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <div className="bg-black text-white px-[4.5px] py-[1px] rounded-[2.5px] text-[11.5px] font-black tracking-tighter">SH</div>
                  <span className="font-black text-[14.5px] tracking-tight text-black">Safehaven</span>
                </div>
                <p className="text-[7.5px] text-black font-bold uppercase tracking-[0.18em] pl-6 mb-3">microfinance bank</p>

                <h3 className="text-[10.5px] font-black uppercase leading-tight max-w-[260px] mx-auto tracking-wide">{selectedTrx.company}</h3>
                <p className="text-[8.5px] text-black font-medium max-w-[240px] mx-auto mt-1 leading-normal tracking-tight uppercase">{selectedTrx.address}</p>

                <h4 className="text-[11.5px] font-black tracking-wide mt-5 mb-0.5 uppercase">{selectedTrx.type}</h4>
                <p className="text-[8.5px] text-black font-medium tracking-tight">RECEIPT NO:&nbsp;&nbsp;{selectedTrx.trxId.substring(0, 26)}</p>
                <p className="text-black text-[11px] font-bold tracking-[0.35em] mt-2">******** ******</p>

                {selectedTrx.channel === "CARD" ? (
                  <div className="mt-3 space-y-1 text-left border-t border-b border-dashed border-black/80 py-3 font-mono text-[10px] font-bold text-black">
                    <div className="flex justify-between"><span>TERMINAL:</span><span>{selectedTrx.terminal}</span></div>
                    <div className="flex justify-between"><span>DATE & TIME:</span><span>{selectedTrx.date}</span></div>
                    <div className="flex justify-between"><span>CARD:</span><span>{selectedTrx.cardType}</span></div>
                    <div className="flex justify-between"><span>CARD EXP:</span><span>{selectedTrx.cardExp}</span></div>
                    <div className="flex justify-between"><span>CLIENT:</span><span>{selectedTrx.client}</span></div>
                    <div className="flex justify-between"><span>PAN:</span><span className="tracking-wide">{selectedTrx.pan}</span></div>
                    <div className="flex justify-between"><span>AID:</span><span>{selectedTrx.aid}</span></div>
                    <div className="flex justify-between items-start gap-4">
                      <span className="shrink-0">TRX REF:</span>
                      <span className="break-all text-right leading-tight max-w-[160px]">{selectedTrx.trxRef}</span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 space-y-1 text-left border-t border-b border-dashed border-black/80 py-3 font-mono text-[10px] font-bold text-black">
                    <div className="flex justify-between"><span>DATE & TIME:</span><span>{selectedTrx.date}</span></div>
                    <div className="flex justify-between"><span>BANK:</span><span>{selectedTrx.bank}</span></div>
                    <div className="flex justify-between"><span>ACCOUNT NO:</span><span className="tracking-wide">{selectedTrx.accountNo}</span></div>
                    <div className="flex justify-between"><span>NARRATION:</span><span>{selectedTrx.narration}</span></div>
                    <div className="flex justify-between items-start gap-4">
                      <span className="shrink-0">TRX REF:</span>
                      <span className="break-all text-right leading-tight max-w-[160px]">{selectedTrx.trxRef}</span>
                    </div>
                  </div>
                )}

                <h2 className="text-[22px] font-black text-black mt-4 tracking-tight">{selectedTrx.amount}</h2>
                <p className="text-black text-[11px] font-bold tracking-widest -mt-2.5 mb-2">........................</p>

                <h1 className="text-[11.5px] font-black tracking-widest text-black uppercase mb-1">
                  {selectedTrx.status === "Success" ? "SUCCESS" : "FAILED"}
                </h1>

                {selectedTrx.status === "Failed" && (
                  <div className="mt-3 text-left font-mono text-[10px] font-bold space-y-1 text-black border-t border-dashed border-black/80 pt-3">
                    <div className="flex justify-between"><span>RESPONSE CODE:</span><span>{selectedTrx.responseCode}</span></div>
                    <div className="flex justify-between"><span>MESSAGE:</span><span className="uppercase">{selectedTrx.message}</span></div>
                    <div className="flex justify-between"><span>STAN:</span><span>{selectedTrx.stan}</span></div>
                    <div className="flex justify-between"><span>RRN:</span><span>{selectedTrx.rrn}</span></div>
                  </div>
                )}

                <p className="text-black text-[11px] font-bold tracking-[0.35em] mt-2.5">******** ******</p>
              </div>
            </div>

            <div className="pb-5 px-5 bg-white flex items-center justify-center print:hidden">
              <button
                onClick={handlePrint}
                className="flex items-center justify-center gap-2 text-gray-800 text-[12.5px] font-bold hover:opacity-60 transition-all outline-none bg-transparent border-none cursor-pointer"
              >
                <Image src="/images/file-text.svg" alt="Receipt" width={15} height={15} className="opacity-70" />
                <span>Print Receipt</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}