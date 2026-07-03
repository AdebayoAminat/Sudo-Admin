// "use client";

// import Image from "next/image";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import TransactionDetails from "../../components/transactions/TransactionDetails";

// /* --- FULL MOCK DATA --- */
// const transactionsData = [
//   {
//     id: "69e3d10d88008d62a22c505f",
//     merchant: "SUDO SIMULATOR",
//     date: "4/18/26, 7:44 PM",
//     channel: "WEB",
//     amount: "-₦8.38",
//     customer: "Victor Ajibero",
//     cardName: "SUDO / VICTOR AJIBERO",
//     last4: "2562",
//     type: "Virtual",
//   },
//   {
//     id: "69e3c97e88008d62a22c505e",
//     merchant: "SUDO SIMULATOR",
//     date: "4/18/26, 7:29 PM",
//     channel: "WEB",
//     amount: "-₦26.38",
//     customer: "Victor Ajibero",
//     cardName: "SUDO / VICTOR AJIBERO",
//     last4: "2562",
//     type: "Virtual",
//   },
//   {
//     id: "69e3b4a288008d62a22c505d",
//     merchant: "SUDO SIMULATOR",
//     date: "4/18/26, 7:10 PM",
//     channel: "WEB",
//     amount: "-₦18.38",
//     customer: "Victor Ajibero",
//     cardName: "SUDO / VICTOR AJIBERO",
//     last4: "2562",
//     type: "Virtual",
//   },
// ];

// export default function TransactionsPage() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const view = searchParams.get("view");
//   const selectedId = searchParams.get("id");

//   const handleRowClick = (tx: (typeof transactionsData)[0]) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("view", "detail");
//     params.set("id", tx.id);
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   if (view === "detail" && selectedId) {
//     return <TransactionDetails id={selectedId} />;
//   }

//   return (
//     <div className="p-3 space-y-7 animate-in fade-in duration-500">
//       {/* 1. Corrected Header & Utility Bar */}
//       <div className="flex justify-end items-center gap-3">
//           <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] font-medium text-[#1D2939]">
//             <span className="text-gray-400">Wed Apr 01 2026 - Thu Apr 30 2026</span>
//             <div className="w-4 h-4 relative opacity-40">
//               <Image src="/images/calendar.svg" alt="" fill />
//             </div>
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               placeholder="name, email, type"
//               className="pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] w-64 outline-none"
//             />
//             <div className="absolute right-3.5 top-2.5 w-5 h-5 opacity-40">
//               <Image src="/images/search.svg" alt="Search" fill className="object-contain" />
//             </div>
//           </div>
        
//       </div>

//       {/* 2. The Table Container */}
//       <div className="w-full border border-gray-50 rounded-2xl overflow-hidden bg-white shadow-sm">
//         <table className="w-full text-left">
//           <thead className="bg-white border-b border-gray-50">
//             <tr>
//               {["MERCHANT", "CHANNEL", "AMOUNT", "CUSTOMER", "CARD"].map((header) => (
//                 <th key={header} className="px-6 py-5 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {transactionsData.map((tx) => (
//               <tr
//                 key={tx.id}
//                 onClick={() => handleRowClick(tx)}
//                 className="group hover:bg-gray-50/50 cursor-pointer transition-colors"
//               >
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[12px] shrink-0">
//                       SS
//                     </div>
//                     <div>
//                       <p className="text-[12px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">
//                         {tx.merchant}
//                       </p>
//                       <p className="text-[10px] text-gray-400 mt-0.5">{tx.date}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="px-2.5 py-1 bg-[#EFF6FF] text-[#034EA2] text-[10px] font-bold rounded tracking-wider uppercase">
//                     {tx.channel}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">{tx.amount}</td>
//                 <td className="px-6 py-4 text-[12px] font-medium text-[#667085]">{tx.customer}</td>
//                 <td className="px-6 py-4">
//                   <p className="text-[12px] text-[#667085] font-medium">
//                     {tx.type} • 506321********{tx.last4}
//                   </p>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import CardsService from "@/app/service/cards.service";
import TransactionDetails from "../../components/transactions/TransactionDetails";

export default function TransactionsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const cardsService = useMemo(() => new CardsService(), []);

  // View States from URL Parameters
  const view = searchParams.get("view");
  const selectedId = searchParams.get("id");

  // Core API Data Tracker States
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Filter, Search, and Pagination States
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // 1. Fetch Transactions from CardsService API
  useEffect(() => {
    let isMounted = true;

    async function loadTransactions() {
      try {
        setLoading(true);
        setError(null);
        const response = await cardsService.getAllCardsTransactions();

        if (!isMounted) return;

        // Extracts your specific payload array block based on Postman response keying
        const payload = response?.data?.data || response?.data || [];
        if (Array.isArray(payload)) {
          setTransactions(payload);
        } else {
          setTransactions([]);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || "Failed to sync transaction metrics.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadTransactions();
    return () => {
      isMounted = false;
    };
  }, [cardsService]);

  // 2. Safely Perform Filtering & Searching Local Processes (Using nested backend properties)
  const filteredData = useMemo(() => {
    if (!Array.isArray(transactions)) return [];

    return transactions.filter((item) => {
      // Safe string resolution path looking up your exact customer object schema
      const customerName = String(
        item?.customer?.name || 
        (typeof item?.customer === "string" ? item.customer : "") ||
        item?.card?.holderName || 
        ""
      ).toLowerCase();

      const merchantName = String(
        item?.merchant?.name || 
        (typeof item?.merchant === "string" ? item.merchant : "") ||
        ""
      ).toLowerCase();

      const query = searchQuery.toLowerCase();
      const matchesSearch = customerName.includes(query) || merchantName.includes(query);

      // Extract transaction dynamic datestamps
      const itemDate = new Date(item.createdAt || item.date);
      const matchesDate =
        (!startDate || itemDate >= new Date(startDate)) &&
        (!endDate || itemDate <= new Date(endDate));

      return matchesSearch && matchesDate;
    });
  }, [transactions, searchQuery, startDate, endDate]);

  // 3. Compute Client-Side Multi-Page Breakdowns
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;

  const handleRowClick = (tx: any) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", "detail");
    params.set("id", tx._id || tx.id);
    router.push(`${pathname}?${params.toString()}`);
  };

  if (view === "detail" && selectedId) {
    return <TransactionDetails id={selectedId} />;
  }

  return (
    <div className="p-3 space-y-7 animate-in fade-in duration-500">
      
      {/* 1. Header & Dynamic Utility Controls Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-[13px] text-gray-400 font-medium">
          Showing <span className="font-semibold text-gray-700">{filteredData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {Math.min(currentPage * itemsPerPage, filteredData.length)}</span> of <span className="font-semibold text-gray-700">{filteredData.length}</span> Transactions
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto justify-end">
          {/* Active Calendar Range Filter Selection */}
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 rounded-xl">
            <input
              type="date"
              value={startDate}
              onChange={(e) => { setStartDate(e.target.value); setCurrentPage(1); }}
              className="bg-transparent text-[12px] font-medium text-[#1D2939] outline-none cursor-pointer"
            />
            <span className="text-gray-300 text-xs font-bold">to</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => { setEndDate(e.target.value); setCurrentPage(1); }}
              className="bg-transparent text-[12px] font-medium text-[#1D2939] outline-none cursor-pointer"
            />
          </div>

          {/* Active Search Field Filter Integration */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="name, email, type"
              className="w-full pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] outline-none focus:bg-white focus:border-gray-200 transition"
            />
            <div className="absolute right-3.5 top-2.5 w-5 h-5 opacity-40">
              <Image src="/images/search.svg" alt="Search" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. The Table Container (No Outer Wrapper Border) */}
      <div className="w-full bg-white shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white border-b border-gray-50">
              {["MERCHANT", "CHANNEL", "AMOUNT", "CUSTOMER", "CARD"].map((header) => (
                <th key={header} className="px-6 py-5 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              <tr>
                <td colSpan={5} className="py-20 text-center">
                  <div className="w-8 h-8 border-[3px] border-[#034EA2] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-[12px] text-gray-400 font-medium">Retrieving operations transactions...</p>
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={5} className="py-16 text-center">
                  <p className="text-red-500 font-mono text-[12px]">{error}</p>
                </td>
              </tr>
            ) : paginatedData.length > 0 ? (
              paginatedData.map((tx, idx) => {
                // Resolves merchant values cleanly based on response schema variables
                const merchantLabel = tx.merchant?.name ;
                const initials = merchantLabel.slice(0, 2).toUpperCase();
                
                // Formats numbers with correct currency symbols matching your layout profile
                const currencySign = tx.currency === "USD" ? "$" : "₦";
                const isNegative = Number(tx.amount || 0) < 0;
                const formattedAmt = `${isNegative ? "-" : ""}${currencySign}${Number(Math.abs(tx.amount || 0)).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
                
                const channelLabel = tx.transactionMetadata?.channel || tx.channel;
                const cardHolder = tx.customer?.name || tx.card?.holderName ;

                return (
                  <tr
                    key={tx._id || tx.id || idx}
                    onClick={() => handleRowClick(tx)}
                    className="group hover:bg-gray-50/50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#9333EA] flex items-center justify-center text-white font-bold text-[12px] shrink-0">
                          {initials}
                        </div>
                        <div>
                          <p className="text-[12px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">
                            {merchantLabel}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5">
                            {tx.createdAt ? new Date(tx.createdAt).toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" }) : "N/A"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-[#EFF6FF] text-[#034EA2] text-[10px] font-bold rounded tracking-wider uppercase">
                        {channelLabel}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">
                      {formattedAmt}
                    </td>
                    <td className="px-6 py-4 text-[12px] font-medium text-[#667085]">
                      {cardHolder}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-[12px] font-bold text-[#1D2939] max-w-[200px] truncate">
                        {tx.account.accountName}
                      </p>
                      <p className="text-[10px] text-gray-400 font-medium mt-0.5 font-mono">
                        {tx.card?.type} • {tx.card?.maskedPan}
                      </p>
                    </td>

                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className="py-20 text-center text-gray-400 font-medium text-[12px] italic">
                  No operational ledger matches found for current entry constraints.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 3. Bottom Pagination Section Component Blocks */}
      {filteredData.length > itemsPerPage && (
        <div className="flex justify-end items-center gap-2 pt-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-100 bg-white hover:bg-gray-50 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Image src="/images/arrow-left.svg" alt="Previous" width={14} height={14} />
          </button>
          
          {Array.from({ length: totalPages }, (_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 rounded-full text-[11px] font-bold transition ${
                  currentPage === pageNum 
                    ? "bg-black text-white" 
                    : "border border-gray-100 bg-white hover:bg-gray-50 text-gray-600"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-100 bg-white hover:bg-gray-50 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Image src="/images/arrow-right.svg" alt="Next" width={14} height={14} />
          </button>
        </div>
      )}
    </div>
  );
}