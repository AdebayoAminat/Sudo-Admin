
// // "use client";
// // import React, { useState, useEffect, useMemo } from "react";
// // import Image from "next/image";
// // import AccountsService, { TransactionResponseItem } from "@/app/service/accounts.service";

// // interface AccountDetailsProps {
// //   data: {
// //     _id: string;
// //     accountName?: string;
// //     title?: string;
// //     currency: "USD" | "NGN";
// //     currentBalance?: number;
// //     balance?: string;
// //     accountType?: string;
// //     type?: string;
// //     accountNumber?: string;
// //     bankCode?: string;
// //   };
// // }

// // export default function AccountDetails({ data }: AccountDetailsProps) {
// //   const [activeTab, setActiveTab] = useState<"transactions" | "bank-details">(
// //     "transactions",
// //   );
// //   const [transactions, setTransactions] = useState<TransactionResponseItem[]>([]);
// //   const [loadingTx, setLoadingTx] = useState(false);
// //   const [currentPage, setCurrentPage] = useState(0);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [totalItems, setTotalItems] = useState(0);
// //   const pageSize = 25;

// //   const accountsService = useMemo(() => new AccountsService(), []);

// //   const accountId = data._id;
// //   const resolvedTitle = data.accountName || data.title || "Unknown Account";
// //   const resolvedType = data.accountType || data.type || "Standard";
// //   const resolvedBalance = data.currentBalance !== undefined ? data.currentBalance.toString() : (data.balance || "0");

// //   useEffect(() => {
// //     if (activeTab === "transactions" && accountId) {
// //       const fetchTransactions = async () => {
// //         setLoadingTx(true);
// //         try {
// //           const res = await accountsService.getAccountTransactions(accountId, currentPage, pageSize);
// //           const txData = res.data?.data || [];
// //           const pagination = res.data?.pagination;

// //           setTransactions(Array.isArray(txData) ? txData : []);
// //           if (pagination) {
// //             setTotalPages(pagination.pages || 1);
// //             setTotalItems(pagination.total || 0);
// //           }
// //         } catch (error) {
// //           console.error("Failed to load transactions", error);
// //         } finally {
// //           setLoadingTx(false);
// //         }
// //       };
// //       fetchTransactions();
// //     }
// //   }, [activeTab, accountId, accountsService, currentPage]);

// //   const handleExport = async () => {
// //     if (!accountId) return;
// //     try {
// //       const res = await accountsService.exportAccountTransactions(accountId);
// //       if (res.data) {
// //         // Assume file downlaod token or raw stream configuration
// //         alert("Statement download initiated successfully.");
// //       }
// //     } catch (error) {
// //       console.error("Failed to export statements", error);
// //     }
// //   };

// //   const handleCopy = (text?: string) => {
// //     if (!text) return;
// //     navigator.clipboard.writeText(text);
// //   };

// //   return (
// //     <div className="space-y-8 animate-in fade-in duration-300">
// //       <div className="flex justify-between items-start">
// //         <div>
// //           <h2 className="text-[18px] font-bold text-[#1D2939]">{resolvedTitle}</h2>
// //           <span className="bg-blue-50 text-[#034EA2] text-[10px] px-2 py-0.5 rounded mt-2 inline-block font-bold">
// //             {resolvedType}
// //           </span>
// //         </div>

// //         <div className="text-right">
// //           <p className="text-[11px] text-gray-400 font-medium">
// //             Available balance
// //           </p>
// //           <h2 className="text-[24px] font-bold text-[#1D2939]">
// //             {data.currency === "NGN" ? "₦" : "$"}
// //             {resolvedBalance}
// //           </h2>
// //         </div>
// //       </div>

// //       <div className="flex gap-8 border-b border-gray-100">
// //         <button
// //           onClick={() => setActiveTab("transactions")}
// //           className={`pb-4 text-[13px] font-bold transition-all ${activeTab === "transactions" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400"}`}
// //         >
// //           Transactions
// //         </button>
// //         <button
// //           onClick={() => setActiveTab("bank-details")}
// //           className={`pb-4 text-[13px] font-bold transition-all ${activeTab === "bank-details" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400"}`}
// //         >
// //           Bank Details
// //         </button>
// //       </div>

// //       <div className="mt-6">
// //         {activeTab === "transactions" ? (
// //           <div className="space-y-6">
// //             <div className="flex justify-between items-center">
// //               <div className="text-[12px] text-gray-400">
// //                 Showing {totalItems === 0 ? 0 : currentPage * pageSize + 1} -{" "}
// //                 {Math.min((currentPage + 1) * pageSize, totalItems)} of{" "}
// //                 {totalItems} Transaction(s)
// //               </div>
// //               <div className="flex gap-3">
// //                 <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-gray-50">
// //                   <Image src="/images/filter.svg" alt="" width={16} height={16} />
// //                   Filter(s)
// //                 </button>
// //                 <button 
// //                   onClick={handleExport}
// //                   className="px-6 py-2 bg-[#034EA2] text-white rounded-lg text-[13px] font-bold hover:bg-blue-800 transition-colors"
// //                 >
// //                   Download Statement
// //                 </button>
// //               </div>
// //             </div>

// //             {loadingTx ? (
// //               <div className="space-y-3">
// //                 {[...Array(2)].map((_, i) => (
// //                   <div key={i} className="h-16 bg-gray-50/50 animate-pulse rounded-xl border border-gray-100" />
// //                 ))}
// //               </div>
// //             ) : transactions.length > 0 ? (
// //               transactions.map((tx, idx) => (
// //                 <div key={tx._id || idx} className="flex justify-between items-center p-4 border border-gray-50 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
// //                   <div className="flex items-center gap-4">
// //                     <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#034EA2]">
// //                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
// //                         <path d="M12 5v14M19 12l-7 7-7-7" />
// //                       </svg>
// //                     </div>
// //                     <div>
// //                       <h4 className="text-[13px] font-bold text-[#1D2939]">
// //                         {tx.type.toUpperCase()} | {tx.narration || "Account Transaction Reference"} | {tx.reference}
// //                       </h4>
// //                       <p className="text-[11px] text-gray-400 mt-1">
// //                         {new Date(tx.createdAt).toLocaleString()}
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <div className="text-right">
// //                     <p className="text-[14px] font-bold text-[#1D2939]">
// //                       {tx.currency === "NGN" ? "₦" : "$"}
// //                       {tx.amount}
// //                     </p>
// //                     <p className="text-[11px] text-[#034EA2] font-bold mt-1 group-hover:underline">
// //                       View Details →
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))
// //             ) : (
// //               <div className="text-center py-12 text-gray-400 text-sm">
// //                 No history references found for this account instance.
// //               </div>
// //             )}

// //             {!loadingTx && totalPages > 1 && (
// //               <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-50">
// //                 <button
// //                   onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
// //                   disabled={currentPage === 0}
// //                   className="flex items-center gap-2 px-3 py-1.5 border border-gray-100 rounded-lg text-[12px] font-bold disabled:opacity-30 hover:bg-gray-50"
// //                 >
// //                   <Image src="/images/chevron-left.svg" alt="" width={14} height={14} />
// //                   Previous
// //                 </button>
// //                 <span className="text-[12px] font-bold text-gray-500">
// //                   Page {currentPage + 1} of {totalPages}
// //                 </span>
// //                 <button
// //                   onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
// //                   disabled={currentPage === totalPages - 1}
// //                   className="flex items-center gap-2 px-3 py-1.5 border border-gray-100 rounded-lg text-[12px] font-bold disabled:opacity-30 hover:bg-gray-50"
// //                 >
// //                   Next
// //                   <Image src="/images/chevron-left.svg" alt="" width={14} height={14} className="rotate-180" />
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-2 gap-8 max-w-3xl">
// //             <div className="col-span-2">
// //               <label className="text-[12px] text-gray-400 block mb-2">Account Name</label>
// //               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
// //                 <span className="text-[13px] font-medium">{resolvedTitle}</span>
// //                 <button onClick={() => handleCopy(resolvedTitle)} className="opacity-30 hover:opacity-100">
// //                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
// //                 </button>
// //               </div>
// //             </div>
// //             <div>
// //               <label className="text-[12px] text-gray-400 block mb-2">Account Number</label>
// //               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
// //                 <span className="text-[13px] font-medium">{data.accountNumber || "N/A"}</span>
// //                 <button onClick={() => handleCopy(data.accountNumber)} className="opacity-30 hover:opacity-100">
// //                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
// //                 </button>
// //               </div>
// //             </div>
// //             <div>
// //               <label className="text-[12px] text-gray-400 block mb-2">Bank Code / Provider</label>
// //               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
// //                 <span className="text-[13px] font-medium">{data.bankCode || "System Generated"}</span>
// //                 <button onClick={() => handleCopy(data.bankCode)} className="opacity-30 hover:opacity-100">
// //                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
// //                 </button>
// //               </div>
// //             </div>
// //             <div>
// //               <label className="text-[12px] text-gray-400 block mb-2">Currency</label>
// //               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
// //                 <span className="text-[13px] font-medium">{data.currency}</span>
// //                 <button onClick={() => handleCopy(data.currency)} className="opacity-30 hover:opacity-100">
// //                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
// //                 </button>
// //               </div>
// //             </div>
// //             <div>
// //               <label className="text-[12px] text-gray-400 block mb-2">Account Type</label>
// //               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
// //                 <span className="text-[13px] font-medium">{resolvedType}</span>
// //                 <button onClick={() => handleCopy(resolvedType)} className="opacity-30 hover:opacity-100">
// //                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// "use client";
// import React, { useState, useEffect, useMemo } from "react";
// import Image from "next/image";
// import AccountsService, { TransactionResponseItem } from "@/app/service/accounts.service";

// interface AccountDetailsProps {
//   data: {
//     _id: string;
//     accountName?: string;
//     title?: string;
//     currency: "USD" | "NGN";
//     currentBalance?: number;
//     balance?: string;
//     accountType?: string;
//     type?: string;
//     accountNumber?: string;
//     bankCode?: string;
//   };
// }

// export default function AccountDetails({ data }: AccountDetailsProps) {
//   const [activeTab, setActiveTab] = useState<"transactions" | "bank-details">(
//     "transactions",
//   );
//   const [transactions, setTransactions] = useState<TransactionResponseItem[]>([]);
//   const [loadingTx, setLoadingTx] = useState(false);
//   const [exporting, setExporting] = useState(false); 
//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalItems, setTotalItems] = useState(0);
//   const pageSize = 25;

//   const accountsService = useMemo(() => new AccountsService(), []);

//   const accountId = data._id;
//   const resolvedTitle = data.accountName || data.title;
//   const resolvedType = data.accountType || data.type ;
//   const resolvedBalance = data.currentBalance !== undefined ? data.currentBalance.toString() : (data.balance || "0");

//   useEffect(() => {
//     if (activeTab === "transactions" && accountId) {
//       const fetchTransactions = async () => {
//         setLoadingTx(true);
//         try {
//           const res = await accountsService.getAccountTransactions(accountId, currentPage, pageSize);
//           const txData = res.data?.data || [];
//           const pagination = res.data?.pagination;

//           setTransactions(Array.isArray(txData) ? txData : []);
//           if (pagination) {
//             setTotalPages(pagination.pages || 1);
//             setTotalItems(pagination.total || 0);
//           }
//         } catch (error) {
//           console.error("Failed to load transactions", error);
//         } finally {
//           setLoadingTx(false);
//         }
//       };
//       fetchTransactions();
//     }
//   }, [activeTab, accountId, accountsService, currentPage]);

//   const handleExport = async () => {
//     if (!accountId) return;
//     setExporting(true);
//     try {
//       const res = await accountsService.exportAccountTransactions(accountId);
      
//       if (res.data) {
//         // SCENARIO 1: If backend returns an object with a file url link
//         if (typeof res.data === "object" && res.data.fileUrl) {
//           window.open(res.data.fileUrl, "_blank");
//           return;
//         }

//         // SCENARIO 2: If backend returns a direct URL link string
//         if (typeof res.data === "string" && res.data.startsWith("http")) {
//           window.open(res.data, "_blank");
//           return;
//         }

//         // SCENARIO 3: Handshake fallback if backend sends a raw string buffer stream
//         const blobData = typeof res.data === "string" ? res.data : JSON.stringify(res.data);
//         const blob = new Blob([blobData], { type: "text/csv;charset=utf-8;" });
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.setAttribute("download", `Statement_${resolvedTitle?.replace(/\s+/g, "_")}.csv`);
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       } else {
//         alert("Unable to process document stream. No download data returned.");
//       }
//     } catch (error) {
//       console.error("Failed to export statements", error);
//       alert("An error occurred while generating your file statement download.");
//     } finally {
//       setExporting(false);
//     }
//   };

//   const handleCopy = (text?: string) => {
//     if (!text) return;
//     navigator.clipboard.writeText(text);
//   };

//   return (
//     <div className="space-y-8 animate-in fade-in duration-300">
//       <div className="flex justify-between items-start">
//         <div>
//           <h2 className="text-[18px] font-bold text-[#1D2939]">{resolvedTitle}</h2>
//           <span className="bg-blue-50 text-[#034EA2] text-[10px] px-2 py-0.5 rounded mt-2 inline-block font-bold">
//             {resolvedType}
//           </span>
//         </div>

//         <div className="text-right">
//           <p className="text-[11px] text-gray-400 font-medium">
//             Available balance
//           </p>
//           <h2 className="text-[24px] font-bold text-[#1D2939]">
//             {data.currency === "NGN" ? "₦" : "$"}
//             {resolvedBalance}
//           </h2>
//         </div>
//       </div>

//       <div className="flex gap-8 border-b border-gray-100">
//         <button
//           onClick={() => setActiveTab("transactions")}
//           className={`pb-4 text-[13px] font-bold transition-all ${activeTab === "transactions" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400"}`}
//         >
//           Transactions
//         </button>
//         <button
//           onClick={() => setActiveTab("bank-details")}
//           className={`pb-4 text-[13px] font-bold transition-all ${activeTab === "bank-details" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400"}`}
//         >
//           Bank Details
//         </button>
//       </div>

//       <div className="mt-6">
//         {activeTab === "transactions" ? (
//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <div className="text-[12px] text-gray-400">
//                 Showing {totalItems === 0 ? 0 : currentPage * pageSize + 1} -{" "}
//                 {Math.min((currentPage + 1) * pageSize, totalItems)} of{" "}
//                 {totalItems} Transaction(s)
//               </div>
//               <div className="flex gap-3">
//                 <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-gray-50">
//                   <Image src="/images/filter.svg" alt="" width={16} height={16} />
//                   Filter(s)
//                 </button>
//                 <button 
//                   onClick={handleExport}
//                   disabled={exporting}
//                   className="px-6 py-2 bg-[#034EA2] text-white rounded-lg text-[13px] font-bold hover:bg-blue-800 transition-colors disabled:opacity-50"
//                 >
//                   {exporting ? "Downloading..." : "Download Statement"}
//                 </button>
//               </div>
//             </div>

//             {loadingTx ? (
//               <div className="space-y-3">
//                 {[...Array(2)].map((_, i) => (
//                   <div key={i} className="h-16 bg-gray-50/50 animate-pulse rounded-xl border border-gray-100" />
//                 ))}
//               </div>
//             ) : transactions.length > 0 ? (
//               transactions.map((tx, idx) => (
//                 <div key={tx._id || idx} className="flex justify-between items-center p-4 border border-gray-50 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#034EA2]">
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//                         <path d="M12 5v14M19 12l-7 7-7-7" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="text-[13px] font-bold text-[#1D2939]">
//                         {tx.type.toUpperCase()} | {tx.narration || "Account Transaction Reference"} | {tx.reference}
//                       </h4>
//                       <p className="text-[11px] text-gray-400 mt-1">
//                         {new Date(tx.createdAt).toLocaleString()}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-[14px] font-bold text-[#1D2939]">
//                       {tx.currency === "NGN" ? "₦" : "$"}
//                       {tx.amount}
//                     </p>
//                     <p className="text-[11px] text-[#034EA2] font-bold mt-1 group-hover:underline">
//                       View Details →
//                     </p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="text-center py-12 text-gray-400 text-sm">
//                 No history references found for this account instance.
//               </div>
//             )}

//             {!loadingTx && totalPages > 1 && (
//               <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-50">
//                 <button
//                   onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
//                   disabled={currentPage === 0}
//                   className="flex items-center gap-2 px-3 py-1.5 border border-gray-100 rounded-lg text-[12px] font-bold disabled:opacity-30 hover:bg-gray-50"
//                 >
//                   <Image src="/images/arrow-left1.svg" alt="" width={14} height={14} />
//                   Previous
//                 </button>
//                 <span className="text-[12px] font-bold text-gray-500">
//                   Page {currentPage + 1} of {totalPages}
//                 </span>
//                 <button
//                   onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
//                   disabled={currentPage === totalPages - 1}
//                   className="flex items-center gap-2 px-3 py-1.5 border border-gray-100 rounded-lg text-[12px] font-bold disabled:opacity-30 hover:bg-gray-50"
//                 >
//                   Next
//                   <Image src="/images/arrow-left1.svg" alt="" width={14} height={14} className="rotate-180" />
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 gap-8 max-w-3xl">
//             <div className="col-span-2">
//               <label className="text-[12px] text-gray-400 block mb-2">Account Name</label>
//               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
//                 <span className="text-[13px] font-medium">{resolvedTitle}</span>
//                 <button onClick={() => handleCopy(resolvedTitle)} className="opacity-30 hover:opacity-100">
//                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label className="text-[12px] text-gray-400 block mb-2">Account Number</label>
//               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
//                 <span className="text-[13px] font-medium">{data.accountNumber || "N/A"}</span>
//                 <button onClick={() => handleCopy(data.accountNumber)} className="opacity-30 hover:opacity-100">
//                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label className="text-[12px] text-gray-400 block mb-2">Bank Code / Provider</label>
//               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
//                 <span className="text-[13px] font-medium">{data.bankCode || "System Generated"}</span>
//                 <button onClick={() => handleCopy(data.bankCode)} className="opacity-30 hover:opacity-100">
//                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label className="text-[12px] text-gray-400 block mb-2">Currency</label>
//               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
//                 <span className="text-[13px] font-medium">{data.currency}</span>
//                 <button onClick={() => handleCopy(data.currency)} className="opacity-30 hover:opacity-100">
//                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label className="text-[12px] text-gray-400 block mb-2">Account Type</label>
//               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
//                 <span className="text-[13px] font-medium">{resolvedType}</span>
//                 <button onClick={() => handleCopy(resolvedType)} className="opacity-30 hover:opacity-100">
//                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }