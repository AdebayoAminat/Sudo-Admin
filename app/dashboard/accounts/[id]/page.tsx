

// "use client";

// import React, { useState, useEffect, useMemo, use } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import AccountsService, { TransactionResponseItem } from "@/app/service/accounts.service";

// interface PageProps {
//   params: Promise<{ id: string }>;
// }

// export default function AccountDetailsPage({ params }: PageProps) {
//   const router = useRouter();
//   const { id: accountId } = use(params);
//   const accountsService = useMemo(() => new AccountsService(), []);

//   const [activeTab, setActiveTab] = useState<"transactions" | "bank-details">("transactions");
  
//   // Your original state hook data structure holds the profile context 
//   const [data, setData] = useState<any>(null);
//   const [loadingAccount, setLoadingAccount] = useState(true);
  
//   const [transactions, setTransactions] = useState<TransactionResponseItem[]>([]);
//   const [loadingTx, setLoadingTx] = useState(false);
//   const [exporting, setExporting] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalItems, setTotalItems] = useState(0);
//   const pageSize = 25;

//   // Single hook handles fetching transactions AND extracting the nested account details node
//   useEffect(() => {
//     if (!accountId) return;

//     const fetchTransactionsAndProfile = async () => {
//       setLoadingTx(true);
//       // Turn off component-wide loader if we already managed to grab account details earlier
//       if (!data) setLoadingAccount(true);

//       try {
//         const res = await accountsService.getAccountTransactions(accountId, currentPage, pageSize);
//         const txData = res.data?.data || [];
//         const pagination = res.data?.pagination;

//         setTransactions(Array.isArray(txData) ? txData : []);
        
//         if (pagination) {
//           setTotalPages(pagination.pages || 1);
//           setTotalItems(pagination.total || 0);
//         }

//         // Pull out data using the nested account metadata block inside the response body
//         if (Array.isArray(txData) && txData.length > 0 && txData[0].account) {
//           setData(txData[0].account);
//         } else if (res.data?.account) {
//           // Fallback reference check variant
//           setData(res.data.account);
//         }
//       } catch (error) {
//         console.error("Failed to load transactions or account data mapping", error);
//       } finally {
//         setLoadingTx(false);
//         setLoadingAccount(false);
//       }
//     };

//     fetchTransactionsAndProfile();
//   }, [activeTab, accountId, accountsService, currentPage]);

//   // Your exact un-modified parameters block
//   const resolvedTitle = data?.accountName || data?.title;
//   const resolvedType = data?.accountType || data?.type ;
//   const resolvedBalance = data?.accountBalance || data?.currentBalance || data?.balance;

//   const handleExport = async () => {
//     if (!accountId) return;
//     setExporting(true);
//     try {
//       const res = await accountsService.exportAccountTransactions(accountId);
//       if (res.data) {
//         if (typeof res.data === "object" && res.data.fileUrl) {
//           window.open(res.data.fileUrl, "_blank");
//           return;
//         }
//         if (typeof res.data === "string" && res.data.startsWith("http")) {
//           window.open(res.data, "_blank");
//           return;
//         }
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

//   // Gracefully render the animation loader skeleton until the array stream delivers account details
//   if (loadingAccount && !data) {
//     return (
//       <div className="p-8 space-y-6 max-w-7xl mx-auto animate-pulse">
//         <div className="h-6 bg-gray-50 rounded-lg w-20" />
//         <div className="flex justify-between items-start">
//           <div className="space-y-3 w-1/3">
//             <div className="h-6 bg-gray-50 rounded-xl" />
//             <div className="h-4 bg-gray-50 rounded-md w-1/2" />
//           </div>
//           <div className="space-y-2 w-1/4 text-right">
//             <div className="h-4 bg-gray-50 rounded-md ml-auto w-1/2" />
//             <div className="h-8 bg-gray-50 rounded-xl" />
//           </div>
//         </div>
//         <div className="h-[300px] bg-gray-50 rounded-2xl w-full" />
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 space-y-8 max-w-7xl mx-auto animate-in fade-in duration-300">


//       <div className="flex justify-between items-start">
//         <div>
//           <h2 className="text-[18px] font-bold text-[#1D2939]">{resolvedTitle}</h2>
//           <span className="bg-blue-50 text-[#034EA2] text-[10px] px-2 py-0.5 rounded mt-2 inline-block font-bold">
//             {resolvedType }
//           </span>
//         </div>

//         <div className="text-right">
//           <p className="text-[11px] text-gray-400 font-medium">Available balance</p>
//           <h2 className="text-[24px] font-bold text-[#1D2939]">
//             {data?.currency === "NGN" ? "₦" : "$"}
//             {Number(resolvedBalance).toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
//                 {Math.min((currentPage + 1) * pageSize, totalItems)} of {totalItems} Transaction(s)
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
//                         {tx.providerChannel} | {tx.narration} | {tx.paymentReference}
//                       </h4>
//                       <p className="text-[11px] text-gray-400 mt-1">
//                         {tx.createdAt ? new Date(tx.createdAt).toLocaleString() : "Recent"}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-[14px] font-bold text-[#1D2939]">
//                       {tx.currency === "NGN" ? "₦" : "$"}
//                       {tx.amount?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
//                 <span className="text-[13px] font-medium">{data?.accountNumber || "N/A"}</span>
//                 <button onClick={() => handleCopy(data?.accountNumber)} className="opacity-30 hover:opacity-100">
//                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label className="text-[12px] text-gray-400 block mb-2">Bank Code / Provider</label>
//               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
//                 <span className="text-[13px] font-medium">{data?.bankCode || data?.provider || "System Generated"}</span>
//                 <button onClick={() => handleCopy(data?.bankCode || data?.provider)} className="opacity-30 hover:opacity-100">
//                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label className="text-[12px] text-gray-400 block mb-2">Currency</label>
//               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
//                 <span className="text-[13px] font-medium">{data?.currency}</span>
//                 <button onClick={() => handleCopy(data?.currency)} className="opacity-30 hover:opacity-100">
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



// "use client";

// import React, { useState, useEffect, useMemo, use } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import AccountsService, { TransactionResponseItem } from "@/app/service/accounts.service";

// interface PageProps {
//   params: Promise<{ id: string }>;
// }

// export default function AccountDetailsPage({ params }: PageProps) {
//   const router = useRouter();
//   const { id: accountId } = use(params);
//   const accountsService = useMemo(() => new AccountsService(), []);

//   const [activeTab, setActiveTab] = useState<"transactions" | "bank-details">("transactions");
  
//   // Holds the profile context extracted from the transactions payload
//   const [data, setData] = useState<any>(null);
//   const [loadingAccount, setLoadingAccount] = useState(true);
  
//   const [transactions, setTransactions] = useState<TransactionResponseItem[]>([]);
//   const [loadingTx, setLoadingTx] = useState(false);
//   const [exporting, setExporting] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalItems, setTotalItems] = useState(0);
//   const pageSize = 25;

//   // Single dynamic hook that extracts both transaction lines and the embedded profile metadata
//   useEffect(() => {
//     if (!accountId) return;

//     const fetchTransactionsAndProfile = async () => {
//       setLoadingTx(true);
//       if (!data) setLoadingAccount(true);

//       try {
//         const res = await accountsService.getAccountTransactions(accountId, currentPage, pageSize);
//         const txData = res.data?.data || [];
//         const pagination = res.data?.pagination;

//         setTransactions(Array.isArray(txData) ? txData : []);
        
//         if (pagination) {
//           setTotalPages(pagination.pages || 1);
//           setTotalItems(pagination.total || 0);
//         }

//         // Pull out and save account context using the backend's nested format
//         if (Array.isArray(txData) && txData.length > 0 && txData[0].account) {
//           setData(txData[0].account);
//         } else if (res.data?.account) {
//           setData(res.data.account);
//         }
//       } catch (error) {
//         console.error("Failed to load transactions or account data mapping", error);
//       } finally {
//         setLoadingTx(false);
//         setLoadingAccount(false);
//       }
//     };

//     fetchTransactionsAndProfile();
//   }, [activeTab, accountId, accountsService, currentPage]);

//   // Original parameters block preserved
//   const resolvedTitle = data?.accountName || data?.title;
//   const resolvedType = data?.accountType || data?.type ;
//   const resolvedBalance = data?.accountBalance || data?.currentBalance || data?.balance;

//   const handleExport = async () => {
//     if (!accountId) return;
//     setExporting(true);
//     try {
//       const res = await accountsService.exportAccountTransactions(accountId);
//       if (res.data) {
//         if (typeof res.data === "object" && res.data.fileUrl) {
//           window.open(res.data.fileUrl, "_blank");
//           return;
//         }
//         if (typeof res.data === "string" && res.data.startsWith("http")) {
//           window.open(res.data, "_blank");
//           return;
//         }
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

//   // Skeleton screen while data initially resolves
//   if (loadingAccount && !data) {
//     return (
//       <div className="p-8 space-y-6 max-w-7xl mx-auto animate-pulse">
//         <div className="h-6 bg-gray-50 rounded-lg w-20" />
//         <div className="flex justify-between items-start">
//           <div className="space-y-3 w-1/3">
//             <div className="h-6 bg-gray-50 rounded-xl" />
//             <div className="h-4 bg-gray-50 rounded-md w-1/2" />
//           </div>
//           <div className="space-y-2 w-1/4 text-right">
//             <div className="h-4 bg-gray-50 rounded-md ml-auto w-1/2" />
//             <div className="h-8 bg-gray-50 rounded-xl" />
//           </div>
//         </div>
//         <div className="h-[300px] bg-gray-50 rounded-2xl w-full" />
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 space-y-8 max-w-7xl mx-auto animate-in fade-in duration-300">

//       <div className="flex justify-between items-start">
//         <div>
//           <h2 className="text-[18px] font-bold text-[#1D2939]">{resolvedTitle || "Sudo Settlement Account"}</h2>
//           <span className="bg-blue-50 text-[#034EA2] text-[10px] px-2 py-0.5 rounded mt-2 inline-block font-bold">
//             {resolvedType || "Current"}
//           </span>
//         </div>

//         <div className="text-right">
//           <p className="text-[11px] text-gray-400 font-medium">Available balance</p>
//           <h2 className="text-[24px] font-bold text-[#1D2939]">
//             {data?.currency === "NGN" ? "₦" : "$"}
//             {resolvedBalance !== undefined ? Number(resolvedBalance).toLocaleString(undefined, { minimumFractionDigits: 2 }) : "0.00"}
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
//                 {Math.min((currentPage + 1) * pageSize, totalItems)} of {totalItems} Transaction(s)
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
//                         {tx.providerChannel} | {tx.narration} | {tx.paymentReference}
//                       </h4>
//                       <p className="text-[11px] text-gray-400 mt-1">
//                         {tx.createdAt ? new Date(tx.createdAt).toLocaleString() : "Recent"}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-[14px] font-bold text-[#1D2939]">
//                       {/* Uses the verified account level currency token mapping symbol */}
//                       {data?.currency === "NGN" ? "₦" : "$"}
//                       {tx.amount?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
//                 <span className="text-[13px] font-medium">{data?.accountNumber}</span>
//                 <button onClick={() => handleCopy(data?.accountNumber)} className="opacity-30 hover:opacity-100">
//                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label className="text-[12px] text-gray-400 block mb-2">Bank Code / Provider</label>
//               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
//                 <span className="text-[13px] font-medium">{data?.bankCode || data?.provider }</span>
//                 <button onClick={() => handleCopy(data?.bankCode || data?.provider)} className="opacity-30 hover:opacity-100">
//                   <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label className="text-[12px] text-gray-400 block mb-2">Currency</label>
//               <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
//                 <span className="text-[13px] font-medium">{data?.currency}</span>
//                 <button onClick={() => handleCopy(data?.currency)} className="opacity-30 hover:opacity-100">
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


"use client";

import React, { useState, useEffect, useMemo, use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AccountsService, { TransactionResponseItem } from "@/app/service/accounts.service";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function AccountDetailsPage({ params }: PageProps) {
  const router = useRouter();
  const { id: accountId } = use(params);
  const accountsService = useMemo(() => new AccountsService(), []);

  const [activeTab, setActiveTab] = useState<"transactions" | "bank-details">("transactions");
  
  // Independent data tracking states
  const [data, setData] = useState<any>(null);
  const [loadingAccount, setLoadingAccount] = useState(true);
  
  const [transactions, setTransactions] = useState<TransactionResponseItem[]>([]);
  const [loadingTx, setLoadingTx] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 25;

  // Hook 1: Fetches standalone profile/bank metadata information completely on its own
  useEffect(() => {
    if (!accountId) return;

    const fetchAccountProfile = async () => {
      setLoadingAccount(true);
      try {
        // Calls the single source of truth endpoint for account information mapping
        const res = await accountsService.getAccountById(accountId);
        
        // Handles standard backend wrapping variants matching your payload signature
        if (res?.data) {
          const profileData = res.data.data || res.data;
          setData(Array.isArray(profileData) ? profileData[0] : profileData);
        }
      } catch (error) {
        console.error("Failed to load individual standalone account profile block:", error);
      } finally {
        setLoadingAccount(false);
      }
    };

    fetchAccountProfile();
  }, [accountId, accountsService]);

  // Hook 2: Handles separate pagination lists for transactions history stream array independently
  useEffect(() => {
    if (!accountId) return;

    const fetchTransactionsHistory = async () => {
      setLoadingTx(true);
      try {
        const res = await accountsService.getAccountTransactions(accountId, currentPage, pageSize);
        const txData = res.data?.data || [];
        const pagination = res.data?.pagination;

        setTransactions(Array.isArray(txData) ? txData : []);
        
        if (pagination) {
          setTotalPages(pagination.pages || 1);
          setTotalItems(pagination.total || 0);
        }
      } catch (error) {
        console.error("Failed to load transactions list history stream array:", error);
      } finally {
        setLoadingTx(false);
      }
    };

    fetchTransactionsHistory();
  }, [accountId, accountsService, currentPage]);

  // Direct precise parameter block values pulled securely from separate data node state
  const resolvedTitle = data?.accountName || data?.title;
  const resolvedType = data?.accountType || data?.type ;
  const resolvedBalance = data?.currentBalance ?? data?.availableBalance ?? data?.balance;

  const handleExport = async () => {
    if (!accountId) return;
    setExporting(true);
    try {
      const res = await accountsService.exportAccountTransactions(accountId);
      if (res.data) {
        if (typeof res.data === "object" && res.data.fileUrl) {
          window.open(res.data.fileUrl, "_blank");
          return;
        }
        if (typeof res.data === "string" && res.data.startsWith("http")) {
          window.open(res.data, "_blank");
          return;
        }
        const blobData = typeof res.data === "string" ? res.data : JSON.stringify(res.data);
        const blob = new Blob([blobData], { type: "text/csv;charset=utf-8;" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Statement_${resolvedTitle?.replace(/\s+/g, "_")}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert("Unable to process document stream. No download data returned.");
      }
    } catch (error) {
      console.error("Failed to export statements", error);
      alert("An error occurred while generating your file statement download.");
    } finally {
      setExporting(false);
    }
  };

  const handleCopy = (text?: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
  };

  // Pulse loader displays cleanly only while original single-account details fetch resolves
  if (loadingAccount && !data) {
    return (
      <div className="p-8 space-y-6 max-w-7xl mx-auto animate-pulse">
        <div className="h-6 bg-gray-50 rounded-lg w-20" />
        <div className="flex justify-between items-start">
          <div className="space-y-3 w-1/3">
            <div className="h-6 bg-gray-50 rounded-xl" />
            <div className="h-4 bg-gray-50 rounded-md w-1/2" />
          </div>
          <div className="space-y-2 w-1/4 text-right">
            <div className="h-4 bg-gray-50 rounded-md ml-auto w-1/2" />
            <div className="h-8 bg-gray-50 rounded-xl" />
          </div>
        </div>
        <div className="h-[300px] bg-gray-50 rounded-2xl w-full" />
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto animate-in fade-in duration-300">
      
      {/* Dynamic Header Block Card Container */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[18px] font-bold text-[#1D2939]">{resolvedTitle || "Sudo Settlement Account"}</h2>
          <span className="bg-blue-50 text-[#034EA2] text-[10px] px-2 py-0.5 rounded mt-2 inline-block font-bold">
            {resolvedType || "Current"}
          </span>
        </div>

        <div className="text-right">
          <p className="text-[11px] text-gray-400 font-medium">Available balance</p>
          <h2 className="text-[24px] font-bold text-[#1D2939]">
            {data?.currency === "NGN" ? "₦" : "$"}
            {resolvedBalance !== undefined ? Number(resolvedBalance).toLocaleString(undefined, { minimumFractionDigits: 2 }) : "0.00"}
          </h2>
        </div>
      </div>

      <div className="flex gap-8 border-b border-gray-100">
        <button
          onClick={() => setActiveTab("transactions")}
          className={`pb-4 text-[13px] font-bold transition-all ${activeTab === "transactions" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400"}`}
        >
          Transactions
        </button>
        <button
          onClick={() => setActiveTab("bank-details")}
          className={`pb-4 text-[13px] font-bold transition-all ${activeTab === "bank-details" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400"}`}
        >
          Bank Details
        </button>
      </div>

      <div className="mt-6">
        {activeTab === "transactions" ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="text-[12px] text-gray-400">
                Showing {totalItems === 0 ? 0 : currentPage * pageSize + 1} -{" "}
                {Math.min((currentPage + 1) * pageSize, totalItems)} of {totalItems} Transaction(s)
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-gray-50">
                  <Image src="/images/filter.svg" alt="" width={16} height={16} />
                  Filter(s)
                </button>
                <button 
                  onClick={handleExport}
                  disabled={exporting}
                  className="px-6 py-2 bg-[#034EA2] text-white rounded-lg text-[13px] font-bold hover:bg-blue-800 transition-colors disabled:opacity-50"
                >
                  {exporting ? "Downloading..." : "Download Statement"}
                </button>
              </div>
            </div>

            {loadingTx ? (
              <div className="space-y-3">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-50/50 animate-pulse rounded-xl border border-gray-100" />
                ))}
              </div>
            ) : transactions.length > 0 ? (
              transactions.map((tx, idx) => (
                <div key={tx._id || idx} className="flex justify-between items-center p-4 border border-gray-50 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#034EA2]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#1D2939]">
                        {tx.providerChannel} | {tx.narration} | {tx.paymentReference}
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1">
                        {tx.createdAt ? new Date(tx.createdAt).toLocaleString() : "Recent"}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[14px] font-bold text-[#1D2939]">
                      {data?.currency === "NGN" ? "₦" : "$"}
                      {tx.amount?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </p>
                    <p className="text-[11px] text-[#034EA2] font-bold mt-1 group-hover:underline">
                      View Details →
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-400 text-sm">
                No history references found for this account instance.
              </div>
            )}

            {!loadingTx && totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-50">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                  disabled={currentPage === 0}
                  className="flex items-center gap-2 px-3 py-1.5 border border-gray-100 rounded-lg text-[12px] font-bold disabled:opacity-30 hover:bg-gray-50"
                >
                  <Image src="/images/arrow-left1.svg" alt="" width={14} height={14} />
                  Previous
                </button>
                <span className="text-[12px] font-bold text-gray-500">
                  Page {currentPage + 1} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={currentPage === totalPages - 1}
                  className="flex items-center gap-2 px-3 py-1.5 border border-gray-100 rounded-lg text-[12px] font-bold disabled:opacity-30 hover:bg-gray-50"
                >
                  Next
                  <Image src="/images/arrow-left1.svg" alt="" width={14} height={14} className="rotate-180" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Standalone Grid: Completely decoupled layout viewboards */
          <div className="grid grid-cols-2 gap-8 max-w-3xl animate-in fade-in duration-200">
            <div className="col-span-2">
              <label className="text-[12px] text-gray-400 block mb-2">Account Name</label>
              <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
                <span className="text-[13px] font-medium">{resolvedTitle}</span>
                <button onClick={() => handleCopy(resolvedTitle)} className="opacity-30 hover:opacity-100">
                  <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
                </button>
              </div>
            </div>

            <div>
              <label className="text-[12px] text-gray-400 block mb-2">Currency</label>
              <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
                <span className="text-[13px] font-medium">{data?.currency }</span>
                <button onClick={() => handleCopy(data?.currency)} className="opacity-30 hover:opacity-100">
                  <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
                </button>
              </div>
            </div>

<div>
              <label className="text-[12px] text-gray-400 block mb-2">Account Type</label>
              <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
                <span className="text-[13px] font-medium">{resolvedType || "N/A"}</span>
                <button onClick={() => handleCopy(resolvedType)} className="opacity-30 hover:opacity-100">
                  <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
                </button>
              </div>
            </div>

            <div>
              <label className="text-[12px] text-gray-400 block mb-2">Bank Name</label>
              <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
                <span className="text-[13px] font-medium">{data?.bankName}</span>
                <button onClick={() => handleCopy(data?.bankName)} className="opacity-30 hover:opacity-100">
                  <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
                </button>
              </div>
            </div>

            <div>
              <label className="text-[12px] text-gray-400 block mb-2">Account Number</label>
              <div className="flex justify-between items-center p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
                <span className="text-[13px] font-medium">{data?.accountNumber }</span>
                <button onClick={() => handleCopy(data?.accountNumber)} className="opacity-30 hover:opacity-100">
                  <Image src="/images/copy.svg" alt="copy" width={16} height={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}