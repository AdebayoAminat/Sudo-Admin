// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import AccountsService from "@/app/service/accounts.service";

// const AccountCard = ({ account }: any) => (
//   <div className="bg-white rounded-2xl border border-gray-100 p-8 flex justify-between items-start shadow-sm hover:shadow-md transition-all cursor-pointer">
//     <div className="space-y-4">
//       <div>
//         <h3 className="text-[14px] font-bold text-[#1D2939]">
//           {account.accountName || account.name || "Account"}
//         </h3>
//         <p className="text-[11px] text-gray-400 mt-1 font-medium">
//           {account.currency}
//           {account.accountNumber ? `- ${account.accountNumber}` : ""}
//         </p>
//       </div>
//       <div className="pt-4">
//         {account.countryFlag ? (
//           <Image
//             src={account.countryFlag}
//             alt="flag"
//             width={24}
//             height={16}
//             className="rounded-sm"
//           />
//         ) : (
//           <div className="w-6 h-4 bg-gray-100 rounded-sm" />
//         )}
//       </div>
//     </div>
//     <div className="opacity-20">
//       <Image src="/images/chevron-right.svg" alt="" width={20} height={20} />
//     </div>
//   </div>
// );

// export default function AccountsTab({ businessId }: { businessId: string }) {
//   const [accounts, setAccounts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const accountsService = React.useMemo(() => new AccountsService(), []);

//   useEffect(() => {
//     const fetchAccounts = async () => {
//       if (!businessId) {
//         console.warn("AccountsTab: No businessId provided");
//         setLoading(false);
//         return;
//       }

//       setLoading(true);
//       try {
//         console.log(`Fetching accounts for business: ${businessId}`);
//         const res = await accountsService.getAllAccountsForABusiness(businessId);
//         console.log("Accounts API Response:", res);

//         // Handle different response formats
//         let data = [];
//         if (res.data?.data) {
//           data = res.data.data;
//         } else if (res.data?.accounts) {
//           data = res.data.accounts;
//         } else if (Array.isArray(res.data)) {
//           data = res.data;
//         } else if (res.data) {
//           data = res.data;
//         }

//         console.log("Extracted accounts data:", data);
//         setAccounts(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error("Error fetching accounts:", err);
//         setAccounts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAccounts();
//   }, [businessId, accountsService]);

//   const filteredAccounts = accounts.filter((a) =>
//     (a.accountName || a.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (a.accountNumber || "").toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-[14px] font-bold text-[#1D2939]">Accounts</h2>
//         <div className="relative w-64">
//           <input
//             type="text"
//             placeholder="name, number"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2 px-4 pl-10 text-[12px] outline-none"
//           />
//           <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30">
//             <Image
//               src="/images/search.svg"
//               alt="search"
//               width={14}
//               height={14}
//             />
//           </div>
//         </div>
//       </div>

//       {loading ? (
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {[...Array(2)].map((_, i) => (
//             <div
//               key={i}
//               className="bg-gray-50 rounded-2xl border border-gray-100 p-8 h-32 animate-pulse"
//             />
//           ))}
//         </div>
//       ) : filteredAccounts.length > 0 ? (
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {filteredAccounts.map((a) => (
//             <AccountCard key={a.id || a._id} account={a} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12">
//           <p className="text-gray-400 text-sm">
//             {searchTerm ? "No accounts match your search" : "No accounts found for this business"}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AccountsService from "@/app/service/accounts.service";

interface AccountCardProps {
  account: any;
  onAccountClick: (account: any) => void;
}

const AccountCard = ({ account, onAccountClick }: AccountCardProps) => {
  // Determine correct flag asset based on currency code
  const getLocalFlagPath = () => {
    const currency = account.currency?.toUpperCase();
    if (currency === "USD") return "/images/us-flag.svg";
    if (currency === "NGN") return "/images/ng-flag.svg";
    
    // Quick fallback checks
    const country = account.countryCode || account.country || "";
    if (country.toLowerCase().includes("us")) return "/images/us-flag.svg";
    
    return "/images/ng-flag.svg";
  };

  return (
    <div 
      onClick={() => onAccountClick(account)}
      className="bg-white rounded-2xl border border-gray-100 p-8 min-h-[180px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer group relative"
    >
      {/* TOP REGION: Text Metrics & Action Mark */}
      <div className="flex justify-between items-start w-full">
        <div className="space-y-1.5">
          <h3 className="text-[15px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors line-clamp-2 pr-6">
            {account.accountName || account.name || "Account Node"}
          </h3>
          <p className="text-[12px] text-gray-400 font-medium tracking-wide">
            {account.currency} {account.accountNumber ? `- ${account.accountNumber}` : ""}
          </p>
        </div>

        {/* Chevron Action Right indicator */}
        <div className="text-gray-300 group-hover:text-[#034EA2] transition-colors pt-1">
          <Image 
            src="/images/chevron-right.svg" 
            alt="" 
            width={16} 
            height={16} 
            className="opacity-40 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* BOTTOM REGION: Flag positioned down below the texts */}
      <div className="pt-6 flex items-center">
        <div className="relative w-8 h-5 overflow-hidden rounded-sm border border-gray-100/50 shadow-sm">
          <Image
            src={getLocalFlagPath()}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default function AccountsTab({ businessId }: { businessId: string }) {
  const router = useRouter();
  const [accounts, setAccounts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const accountsService = React.useMemo(() => new AccountsService(), []);

  useEffect(() => {
    const fetchAccounts = async () => {
      if (!businessId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const res = await accountsService.getAllAccountsForABusiness(businessId);
        
        let data = [];
        if (res.data?.data) {
          data = res.data.data;
        } else if (res.data?.accounts) {
          data = res.data.accounts;
        } else if (Array.isArray(res.data)) {
          data = res.data;
        } else if (res.data) {
          data = res.data;
        }

        setAccounts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching accounts:", err);
        setAccounts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [businessId, accountsService]);

  const handleAccountClick = (account: any) => {
    const id = account._id || account.id;
    router.push(`/dashboard/accounts/${id}`);
  };
  const filteredAccounts = accounts.filter((a) =>
    (a.accountName || a.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (a.accountNumber || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[14px] font-bold text-[#1D2939]">Accounts</h2>
          <p className="text-[11px] text-gray-400 mt-0.5">
            Showing 0 - {filteredAccounts.length} of {filteredAccounts.length} Accounts
          </p>
        </div>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="name, number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2 px-4 pl-10 text-[12px] outline-none focus:bg-white focus:ring-1 focus:ring-gray-200 transition-all"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30">
            <Image src="/images/search.svg" alt="search" width={14} height={14} />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 h-44 animate-pulse" />
          ))}
        </div>
      ) : filteredAccounts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAccounts.map((a) => (
            <AccountCard key={a.id || a._id} account={a} onAccountClick={handleAccountClick} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 space-y-4">
          <div className="bg-gray-50 p-4 rounded-full">
            <Image src="/images/file-text.svg" alt="No transaction" width={40} height={40} className="opacity-20" />
          </div>
          <div className="text-center">
            <p className="font-bold text-[#1D2939] text-[15px]">No accounts found</p>
            <p className="text-[13px] text-gray-400">You currently don't have any accounts.</p>
          </div>
        </div>
      )}
    </div>
  );
}