

// "use client";
// import { useMemo, useState, useEffect } from "react";
// import Image from "next/image";
// import { AccountCard } from "../cards/AccountCard";
// import AccountsService, { AccountResponseItem } from "@/app/service/accounts.service";

// export default function WalletsList({
//   currencyCode,
//   search,
//   onSearchChange,
//   onSelectWallet,
// }: {
//   currencyCode: string;
//   search: string;
//   onSearchChange: (search: string) => void;
//   onSelectWallet: (wallet: AccountResponseItem) => void;
// }) {
//   const [allWallets, setAllWallets] = useState<AccountResponseItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const accountsService = useMemo(() => new AccountsService(), []);

//   useEffect(() => {
//     const fetchWallets = async () => {
//       setLoading(true);
//       try {
//         const res = await accountsService.getAllAccounts();
//         const data = res.data?.data || res.data || [];
//         setAllWallets(Array.isArray(data) ? data : []);
//       } catch (error) {
//         console.error("Failed to fetch wallets from API:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchWallets();
//   }, [accountsService]);

//   const filteredWallets = useMemo(() => {
//     return allWallets.filter((wallet) => {
//       // 1. Explicitly filter out anything that isn't a wallet type item
//       if (wallet.type !== "wallet") return false;

//       // 2. Currency filter check
//       const matchesCurrency =
//         currencyCode === "All" || wallet.currency === currencyCode;

//       // 3. Search parameter matching text fields
//       const searchLower = search.toLowerCase();
//       const title = wallet.accountName || "";
//       const accountType = wallet.accountType || "";
      
//       const matchesSearch =
//         title.toLowerCase().includes(searchLower) ||
//         accountType.toLowerCase().includes(searchLower);

//       return matchesCurrency && matchesSearch;
//     });
//   }, [allWallets, currencyCode, search]);

//   return (
//     <div className="space-y-4">
//       {/* Header and Search Row */}
//       <div className="flex justify-between items-end mb-6">
//         <div>
//           <h2 className="font-bold text-[#1D2939] text-sm mb-2">Wallets</h2>
//           <span className="text-[12px] text-gray-400 block">
//             Showing {filteredWallets.length} of {filteredWallets.length} Wallets
//           </span>
//         </div>

//         {/* Right Side: Search Input */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="name, email, type"
//             className="pl-4 pr-10 py-2.5 bg-gray-50/50 border border-gray-100 rounded-xl text-[13px] outline-none focus:border-[#034EA2] w-72"
//             value={search}
//             onChange={(e) => {
//               onSearchChange(e.target.value);
//             }}
//           />
//           <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
//             <Image
//               src="/images/search.svg"
//               alt="search"
//               width={14}
//               height={14}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Grid Content */}
//       {loading ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className="h-32 bg-gray-50 animate-pulse rounded-2xl border border-gray-100"
//             />
//           ))}
//         </div>
//       ) : filteredWallets.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {filteredWallets.map((wallet, index) => (
//             <AccountCard
//               key={wallet._id || index}
//               title={wallet.accountName}
//               subTitle={wallet.currency}
//               balance={wallet.currentBalance.toString()}
//               currency={wallet.currency}
//               type={wallet.accountType}
//               onClick={() => onSelectWallet(wallet)}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-20 text-gray-400 text-sm">
//           No wallets found matching your filters.
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";
// import { useMemo, useState, useEffect } from "react";
// import Image from "next/image";
// import { AccountCard } from "../cards/AccountCard";
// import AccountsService, { AccountResponseItem } from "@/app/service/accounts.service";

// export default function WalletsList({
//   currencyCode,
//   search,
//   onSearchChange,
//   onSelectWallet,
// }: {
//   currencyCode: string;
//   search: string;
//   onSearchChange: (search: string) => void;
//   onSelectWallet: (wallet: AccountResponseItem) => void;
// }) {
//   const [allWallets, setAllWallets] = useState<AccountResponseItem[]>([]);
//   const [loading, setLoading] = useState(true);
  
//   const [currentPage, setCurrentPage] = useState(0); 
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalItems, setTotalItems] = useState(0);
  
//   const pageSize = 25;
//   const accountsService = useMemo(() => new AccountsService(), []);

//   useEffect(() => {
//     const fetchWallets = async () => {
//       setLoading(true);
//       try {
//         // Pass "wallet" type filter explicitly to backend query params
//         const res = await accountsService.getAllAccounts(currentPage, pageSize, "wallet");
//         const data = res.data?.data || [];
//         const paginationMeta = res.data?.pagination;

//         setAllWallets(Array.isArray(data) ? data : []);
        
//         if (paginationMeta) {
//           setTotalPages(paginationMeta.pages || 1);
//           setTotalItems(paginationMeta.total || 0);
//         }
//       } catch (error) {
//         console.error("Failed to fetch wallets from API:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchWallets();
//   }, [accountsService, currentPage]);

//   useEffect(() => {
//     setCurrentPage(0);
//   }, [search, currencyCode]);

//   const filteredWallets = useMemo(() => {
//     return allWallets.filter((wallet) => {
//       if (wallet.type !== "wallet") return false;

//       const matchesCurrency =
//         currencyCode === "All" || wallet.currency === currencyCode;

//       const searchLower = search.toLowerCase();
//       const title = wallet.accountName || "";
//       const accountType = wallet.accountType || "";
      
//       return (
//         matchesCurrency &&
//         (title.toLowerCase().includes(searchLower) ||
//           accountType.toLowerCase().includes(searchLower))
//       );
//     });
//   }, [allWallets, currencyCode, search]);

//   const startRange = totalItems === 0 ? 0 : currentPage * pageSize + 1;
//   const endRange = Math.min((currentPage + 1) * pageSize, totalItems);

//   return (
//     <div className="space-y-4">
//       <div className="flex justify-between items-end mb-6">
//         <div>
//           <h2 className="font-bold text-[#1D2939] text-sm mb-2">Wallets</h2>
//           <span className="text-[12px] text-gray-400 block">
//             Showing {startRange} - {endRange} of {totalItems} Wallets
//           </span>
//         </div>

//         <div className="relative">
//           <input
//             type="text"
//             placeholder="name, email, type"
//             className="pl-4 pr-10 py-2.5 bg-gray-50/50 border border-gray-100 rounded-xl text-[13px] outline-none focus:border-[#034EA2] w-72"
//             value={search}
//             onChange={(e) => onSearchChange(e.target.value)}
//           />
//           <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
//             <Image src="/images/search.svg" alt="search" width={14} height={14} />
//           </div>
//         </div>
//       </div>

//       {loading ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="h-32 bg-gray-50 animate-pulse rounded-2xl border border-gray-100" />
//           ))}
//         </div>
//       ) : filteredWallets.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {filteredWallets.map((wallet, index) => (
//             <AccountCard
//               key={wallet._id || index}
//               title={wallet.accountName}
//               subTitle={wallet.currency}
//               balance={wallet.currentBalance.toString()}
//               currency={wallet.currency}
//               type={wallet.accountType}
//               onClick={() => onSelectWallet(wallet)}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-20 text-gray-400 text-sm">
//           No wallets found matching your filters.
//         </div>
//       )}

//       {!loading && totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 mt-12 py-6 border-t border-gray-50">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
//             disabled={currentPage === 0}
//             className="p-2 rounded-xl border border-gray-100 disabled:opacity-30 hover:bg-gray-50 transition-all active:scale-95"
//           >
//             <Image src="/images/arrow-left1.svg" alt="prev" width={18} height={18} />
//           </button>

//           <div className="flex items-center gap-1.5 mx-2">
//             {Array.from({ length: totalPages })
//               .map((_, i) => i)
//               .filter((pageNum) => pageNum === 0 || pageNum === totalPages - 1 || Math.abs(pageNum - currentPage) <= 2)
//               .map((pageNum, idx, arr) => {
//                 const showEllipsis = idx > 0 && pageNum - arr[idx - 1] > 1;
//                 return (
//                   <div key={pageNum} className="flex items-center gap-1.5">
//                     {showEllipsis && <span className="text-gray-400 px-1 text-sm">...</span>}
//                     <button
//                       onClick={() => setCurrentPage(pageNum)}
//                       className={`w-10 h-10 rounded-xl text-[13px] font-semibold transition-all ${
//                         currentPage === pageNum
//                           ? "bg-[#034EA2] text-white shadow-md shadow-[#034EA2]/20"
//                           : "text-gray-500 hover:bg-gray-50"
//                       }`}
//                     >
//                       {pageNum + 1}
//                     </button>
//                   </div>
//                 );
//               })}
//           </div>

//           <button
//             onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
//             disabled={currentPage === totalPages - 1}
//             className="p-2 rounded-xl border border-gray-100 disabled:opacity-30 hover:bg-gray-50 transition-all active:scale-95"
//           >
//             <Image src="/images/arrow-left1.svg" alt="next" width={18} height={18} className="rotate-180" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";
// import { useMemo, useState, useEffect } from "react";
// import Image from "next/image";
// import { AccountCard } from "../cards/AccountCard";
// import AccountsService, { AccountResponseItem } from "@/app/service/accounts.service";

// export default function WalletsList({
//   currencyCode,
//   search,
//   onSearchChange,
//   onSelectWallet,
// }: {
//   currencyCode: string;
//   search: string;
//   onSearchChange: (search: string) => void;
//   onSelectWallet: (wallet: AccountResponseItem) => void;
// }) {
//   const [allWallets, setAllWallets] = useState<AccountResponseItem[]>([]);
//   const [loading, setLoading] = useState(true);
  
//   const [currentPage, setCurrentPage] = useState(0); 
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalItems, setTotalItems] = useState(0);
  
//   const pageSize = 25;
//   const accountsService = useMemo(() => new AccountsService(), []);

//   useEffect(() => {
//     const fetchWallets = async () => {
//       setLoading(true);
//       try {
//         // Pass "wallet" type filter explicitly to backend query params
//         const res = await accountsService.getAllAccounts(currentPage, pageSize, "wallet");
//         const data = res.data?.data || [];
//         const paginationMeta = res.data?.pagination;

//         setAllWallets(Array.isArray(data) ? data : []);
        
//         if (paginationMeta) {
//           setTotalPages(paginationMeta.pages || 1);
//           setTotalItems(paginationMeta.total || 0);
//         }
//       } catch (error) {
//         console.error("Failed to fetch wallets from API:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchWallets();
//   }, [accountsService, currentPage]);

//   useEffect(() => {
//     setCurrentPage(0);
//   }, [search, currencyCode]);

//   const filteredWallets = useMemo(() => {
//     return allWallets.filter((wallet) => {
//       if (wallet.type !== "wallet") return false;

//       const matchesCurrency =
//         currencyCode === "All" || wallet.currency === currencyCode;

//       const searchLower = search.toLowerCase();
//       const title = wallet.accountName || "";
//       const accountType = wallet.accountType || "";
      
//       return (
//         matchesCurrency &&
//         (title.toLowerCase().includes(searchLower) ||
//           accountType.toLowerCase().includes(searchLower))
//       );
//     });
//   }, [allWallets, currencyCode, search]);

//   const startRange = totalItems === 0 ? 0 : currentPage * pageSize + 1;
//   const endRange = Math.min((currentPage + 1) * pageSize, totalItems);

//   // Calculates pagination range for dynamic dot compression
//   const renderPaginationRange = useMemo(() => {
//     return Array.from({ length: totalPages })
//       .map((_, i) => i)
//       .filter((pageNum) => pageNum === 0 || pageNum === totalPages - 1 || Math.abs(pageNum - currentPage) <= 2);
//   }, [totalPages, currentPage]);

//   return (
//     <div className="space-y-4">
//       <div className="flex justify-between items-end mb-6">
//         <div>
//           <h2 className="font-bold text-[#1D2939] text-sm mb-2">Wallets</h2>
//           <span className="text-[12px] text-gray-400 block">
//             Showing {startRange} - {endRange} of {totalItems} Wallets
//           </span>
//         </div>

//         <div className="relative">
//           <input
//             type="text"
//             placeholder="name, email, type"
//             className="pl-4 pr-10 py-2.5 bg-gray-50/50 border border-gray-100 rounded-xl text-[13px] outline-none focus:border-[#034EA2] w-72"
//             value={search}
//             onChange={(e) => onSearchChange(e.target.value)}
//           />
//           <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
//             <Image src="/images/search.svg" alt="search" width={14} height={14} />
//           </div>
//         </div>
//       </div>

//       {loading ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="h-32 bg-gray-50 animate-pulse rounded-2xl border border-gray-100" />
//           ))}
//         </div>
//       ) : filteredWallets.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {filteredWallets.map((wallet, index) => (
//             <AccountCard
//               key={wallet._id || index}
//               title={wallet.accountName}
//               subTitle={wallet.currency}
//               balance={wallet.currentBalance.toString()}
//               currency={wallet.currency}
//               type={wallet.accountType}
//               onClick={() => onSelectWallet(wallet)}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-20 text-gray-400 text-sm">
//           No wallets found matching your filters.
//         </div>
//       )}

//       {/* Integrated Requested Pagination Component Blocks */}
//       {totalItems > 0 && totalPages > 1 && (
//         <div className="flex items-center justify-end gap-6 mt-12 py-8 border-t border-gray-100">
          
//           {/* PREVIOUS ACTION CONTROLLER */}
//           <button
//             onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
//             disabled={currentPage === 0}
//             className="p-2 transition-all disabled:opacity-20 text-gray-400 hover:text-[#034EA2] disabled:cursor-not-allowed"
//           >
//             <Image src="/images/arrow-left1.svg" alt="prev" width={20} height={20} className="opacity-70 group-hover:opacity-100" />
//           </button>

//           {/* PAGES SELECTION BLOCKS */}
//           <div className="flex items-center gap-3">
//             {renderPaginationRange.map((pageIdx, idx, arr) => {
//               const isSelected = currentPage === pageIdx;
//               const showEllipsis = idx > 0 && pageIdx - arr[idx - 1] > 1;

//               return (
//                 <div key={pageIdx} className="flex items-center gap-3">
//                   {showEllipsis && <span className="text-gray-400 text-[13px] px-1 select-none">...</span>}
//                   <button
//                     onClick={() => setCurrentPage(pageIdx)}
//                     className={`w-8 h-8 text-[13px] font-bold rounded-full transition-all duration-200 ${
//                       isSelected
//                         ? "bg-[#0A1120] text-white shadow-sm scale-105"
//                         : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
//                     }`}
//                   >
//                     {pageIdx + 1}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>

//           {/* NEXT ACTION CONTROLLER */}
//           <button
//             onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
//             disabled={currentPage === totalPages - 1}
//             className="p-2 transition-all disabled:opacity-20 text-[#4F46E5] hover:text-[#034EA2] disabled:cursor-not-allowed"
//           >
//             <Image src="/images/arrow-left1.svg" alt="next" width={20} height={20} className="rotate-180 opacity-70 group-hover:opacity-100" />
//           </button>
          
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { AccountCard } from "../cards/AccountCard";
import AccountsService, { AccountResponseItem } from "@/app/service/accounts.service";

export default function WalletsList({
  currencyCode,
  search,
  onSearchChange,
  onSelectWallet,
}: {
  currencyCode: string;
  search: string;
  onSearchChange: (search: string) => void;
  onSelectWallet: (wallet: AccountResponseItem) => void;
}) {
  const [allWallets, setAllWallets] = useState<AccountResponseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const pageSize = 25;
  const accountsService = useMemo(() => new AccountsService(), []);

  // Debounce search — waits 400ms after user stops typing before hitting API
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(0);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const fetchWallets = async () => {
      setLoading(true);
      try {
        const res = await accountsService.getAllAccounts(
          currentPage,
          pageSize,
          "wallet",
          debouncedSearch || ''
        );
        const data = res.data?.data || [];
        const paginationMeta = res.data?.pagination;

        setAllWallets(Array.isArray(data) ? data : []);

        if (paginationMeta) {
          setTotalPages(paginationMeta.pages || 1);
          setTotalItems(paginationMeta.total || 0);
        }
      } catch (error) {
        console.error("Failed to fetch wallets from API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWallets();
  }, [accountsService, currentPage, debouncedSearch]);

  // Reset pagination on currency filter change
  useEffect(() => {
    setCurrentPage(0);
  }, [currencyCode]);

  const filteredWallets = useMemo(() => {
    return allWallets.filter((wallet) => {
      if (wallet.type !== "wallet") return false;
      const matchesCurrency =
        currencyCode === "All" || wallet.currency === currencyCode;
      return matchesCurrency;
    });
  }, [allWallets, currencyCode]);

  const startRange = totalItems === 0 ? 0 : currentPage * pageSize + 1;
  const endRange = Math.min((currentPage + 1) * pageSize, totalItems);

  const renderPaginationRange = useMemo(() => {
    return Array.from({ length: totalPages })
      .map((_, i) => i)
      .filter(
        (pageNum) =>
          pageNum === 0 ||
          pageNum === totalPages - 1 ||
          Math.abs(pageNum - currentPage) <= 2
      );
  }, [totalPages, currentPage]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="font-bold text-[#1D2939] text-sm mb-2">Wallets</h2>
          <span className="text-[12px] text-gray-400 block">
            Showing {startRange} - {endRange} of {totalItems} Wallets
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="name, email, type"
            className="pl-4 pr-10 py-2.5 bg-gray-50/50 border border-gray-100 rounded-xl text-[13px] outline-none focus:border-[#034EA2] w-72"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
            <Image src="/images/search.svg" alt="search" width={14} height={14} />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-50 animate-pulse rounded-2xl border border-gray-100" />
          ))}
        </div>
      ) : filteredWallets.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredWallets.map((wallet, index) => (
            <AccountCard
              key={wallet._id || index}
              title={wallet.accountName}
              subTitle={wallet.currency}
              balance={wallet.currentBalance.toString()}
              currency={wallet.currency}
              type={wallet.accountType}
              onClick={() => onSelectWallet(wallet)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400 text-sm">
          No wallets found matching your filters.
        </div>
      )}

      {/* Integrated Requested Pagination Component Blocks */}
      {totalItems > 0 && totalPages > 1 && (
        <div className="flex items-center justify-end gap-6 mt-12 py-8 border-t border-gray-100">

          {/* PREVIOUS ACTION CONTROLLER */}
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="p-2 transition-all disabled:opacity-20 text-gray-400 hover:text-[#034EA2] disabled:cursor-not-allowed"
          >
            <Image src="/images/arrow-left1.svg" alt="prev" width={20} height={20} className="opacity-70 group-hover:opacity-100" />
          </button>

          {/* PAGES SELECTION BLOCKS */}
          <div className="flex items-center gap-3">
            {renderPaginationRange.map((pageIdx, idx, arr) => {
              const isSelected = currentPage === pageIdx;
              const showEllipsis = idx > 0 && pageIdx - arr[idx - 1] > 1;

              return (
                <div key={pageIdx} className="flex items-center gap-3">
                  {showEllipsis && (
                    <span className="text-gray-400 text-[13px] px-1 select-none">...</span>
                  )}
                  <button
                    onClick={() => setCurrentPage(pageIdx)}
                    className={`w-8 h-8 text-[13px] font-bold rounded-full transition-all duration-200 ${
                      isSelected
                        ? "bg-[#0A1120] text-white shadow-sm scale-105"
                        : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {pageIdx + 1}
                  </button>
                </div>
              );
            })}
          </div>

          {/* NEXT ACTION CONTROLLER */}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 transition-all disabled:opacity-20 text-[#4F46E5] hover:text-[#034EA2] disabled:cursor-not-allowed"
          >
            <Image src="/images/arrow-left1.svg" alt="next" width={20} height={20} className="rotate-180 opacity-70 group-hover:opacity-100" />
          </button>

        </div>
      )}
    </div>
  );
}