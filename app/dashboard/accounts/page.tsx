
// "use client";
// import React, { useState, Suspense } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import AccountsList from "@/app/components/accounts/AccountsList";
// import WalletsList from "@/app/components/accounts/WalletsList";
// import AccountDetails from "@/app/components/accounts/AccountDetails";

// function AccountsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [activeTab, setActiveTab] = useState<"accounts" | "wallets">(
//     "accounts",
//   );
//   const [currencyFilter, setCurrencyFilter] = useState("All Currencies");
//   const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedItem, setSelectedItem] = useState<any>(null);

//   const currencies = [
//     { label: "All Currencies", icon: null, value: "All" },
//     { label: "Nigerian Naira", icon: "/images/ng-flag.svg", value: "NGN" },
//     { label: "US Dollars", icon: "/images/us-flag.svg", value: "USD" },
//   ];

//   const activeCurrency = currencies.find((c) => c.label === currencyFilter);

//   // Check URL for ?view=detail
//   const isDetailsPage = searchParams.get("view") === "detail" && selectedItem;

//   const handleSelectItem = (item: any) => {
//     setSelectedItem(item);
//     router.push("/dashboard/accounts?view=detail");
//   };

//   if (isDetailsPage) {
//     return <AccountDetails data={selectedItem} />;
//   }

//   return (
//     <div className="space-y-6 min-h-screen">
//       {/* Currency Filter Dropdown */}
//       <div className="relative inline-block">
//         <button
//           onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
//           className="text-[13px] text-gray-500 flex items-center gap-2 hover:text-black transition-colors"
//         >
//           Showing accounts in
//           <span className="font-bold text-[#1D2939] underline decoration-gray-200 underline-offset-4 flex items-center gap-2">
//             {activeCurrency?.icon && (
//               <Image
//                 src={activeCurrency.icon}
//                 alt=""
//                 width={16}
//                 height={12}
//                 className="object-contain"
//               />
//             )}
//             {currencyFilter}
//           </span>
//         </button>
//         {showCurrencyDropdown && (
//           <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2">
//             {currencies.map((curr) => (
//               <button
//                 key={curr.label}
//                 onClick={() => {
//                   setCurrencyFilter(curr.label);
//                   setShowCurrencyDropdown(false);
//                 }}
//                 className="w-full text-left px-4 py-2 text-[13px] hover:bg-gray-50 flex items-center gap-3"
//               >
//                 <span
//                   className={
//                     currencyFilter === curr.label
//                       ? "font-bold text-[#034EA2]"
//                       : "text-gray-600"
//                   }
//                 >
//                   {curr.label}
//                 </span>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-8 border-b border-gray-50">
//         <button
//           onClick={() => setActiveTab("accounts")}
//           className={`pb-4 text-[13px] font-bold ${activeTab === "accounts" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400"}`}
//         >
//           Accounts
//         </button>
//         <button
//           onClick={() => setActiveTab("wallets")}
//           className={`pb-4 text-[13px] font-bold ${activeTab === "wallets" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400"}`}
//         >
//           Wallets
//         </button>
//       </div>

//       <div className="pt-2">
//         {activeTab === "accounts" ? (
//           <AccountsList
//             currencyCode={activeCurrency?.value || "All"} // Fix: Added required prop
//             onSelectAccount={handleSelectItem}
//             search={searchTerm}
//             onSearchChange={setSearchTerm}
//           />
//         ) : (
//           <WalletsList
//             currencyCode={activeCurrency?.value || "All"} // Fix: Added required prop
//             onSelectWallet={handleSelectItem}
//             search={searchTerm}
//             onSearchChange={setSearchTerm}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default function AccountsPage() {
//   return (
//     <Suspense fallback={<div className="p-8">Loading accounts...</div>}>
//       <AccountsPageContent />
//     </Suspense>
//   );
// }


// "use client";
// import React, { useState, Suspense } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import AccountsList from "@/app/components/accounts/AccountsList";
// import WalletsList from "@/app/components/accounts/WalletsList";
// import AccountDetails from "@/app/components/accounts/AccountDetails";

// function AccountsPageContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [activeTab, setActiveTab] = useState<"accounts" | "wallets">(
//     "accounts",
//   );
//   const [currencyFilter, setCurrencyFilter] = useState("All Currencies");
//   const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedItem, setSelectedItem] = useState<any>(null);

//   const currencies = [
//     { label: "All Currencies", icon: null, value: "All" },
//     { label: "Nigerian Naira", icon: "/images/ng-flag.svg", value: "NGN" },
//     { label: "US Dollars", icon: "/images/us-flag.svg", value: "USD" },
//   ];

//   const activeCurrency = currencies.find((c) => c.label === currencyFilter);
//   const isDetailsPage = searchParams.get("view") === "detail" && selectedItem;

//   const handleSelectItem = (item: any) => {
//     setSelectedItem(item);
//     router.push("/dashboard/accounts?view=detail");
//   };

//   if (isDetailsPage) {
//     return <AccountDetails data={selectedItem} />;
//   }

//   return (
//     <div className="space-y-6 min-h-screen">
//       <div className="relative inline-block">
//         <button
//           onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
//           className="text-[13px] text-gray-500 flex items-center gap-2 hover:text-black transition-colors"
//         >
//           Showing accounts in
//           <span className="font-bold text-[#1D2939] underline decoration-gray-200 underline-offset-4 flex items-center gap-2">
//             {activeCurrency?.icon && (
//               <Image
//                 src={activeCurrency.icon}
//                 alt=""
//                 width={16}
//                 height={12}
//                 className="object-contain"
//               />
//             )}
//             {currencyFilter}
//           </span>
//         </button>
//         {showCurrencyDropdown && (
//           <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2">
//             {currencies.map((curr) => (
//               <button
//                 key={curr.label}
//                 onClick={() => {
//                   setCurrencyFilter(curr.label);
//                   setShowCurrencyDropdown(false);
//                 }}
//                 className="w-full text-left px-4 py-2 text-[13px] hover:bg-gray-50 flex items-center gap-3"
//               >
//                 <span
//                   className={
//                     currencyFilter === curr.label
//                       ? "font-bold text-[#034EA2]"
//                       : "text-gray-600"
//                   }
//                 >
//                   {curr.label}
//                 </span>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="flex gap-8 border-b border-gray-50">
//         <button
//           onClick={() => setActiveTab("accounts")}
//           className={`pb-4 text-[13px] font-bold ${activeTab === "accounts" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400"}`}
//         >
//           Accounts
//         </button>
//         <button
//           onClick={() => setActiveTab("wallets")}
//           className={`pb-4 text-[13px] font-bold ${activeTab === "wallets" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400"}`}
//         >
//           Wallets
//         </button>
//       </div>

//       <div className="pt-2">
//         {activeTab === "accounts" ? (
//           <AccountsList
//             currencyCode={activeCurrency?.value || "All"}
//             onSelectAccount={handleSelectItem}
//             search={searchTerm}
//             onSearchChange={setSearchTerm}
//           />
//         ) : (
//           <WalletsList
//             currencyCode={activeCurrency?.value || "All"}
//             onSelectWallet={handleSelectItem}
//             search={searchTerm}
//             onSearchChange={setSearchTerm}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default function AccountsPage() {
//   return (
//     <Suspense fallback={<div className="p-8">Loading accounts...</div>}>
//       <AccountsPageContent />
//     </Suspense>
//   );
// }

// "use client";

// import React, { useState, Suspense } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import AccountsList from "@/app/components/accounts/AccountsList";
// import WalletsList from "@/app/components/accounts/WalletsList";

// function AccountsPageContent() {
//   const router = useRouter();

//   const [activeTab, setActiveTab] = useState<"accounts" | "wallets">("accounts");
//   const [currencyFilter, setCurrencyFilter] = useState("All Currencies");
//   const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const currencies = [
//     { label: "All Currencies", icon: null, value: "All" },
//     { label: "Nigerian Naira", icon: "/images/ng-flag.svg", value: "NGN" },
//     { label: "US Dollars", icon: "/images/us-flag.svg", value: "USD" },
//   ];

//   const activeCurrency = currencies.find((c) => c.label === currencyFilter);

//   // Navigates straight to the clean dynamic path parameter
//   const handleSelectItem = (item: any) => {
//     const accountId = item._id || item.id;
//     if (accountId) {
//       router.push(`/dashboard/accounts/${accountId}`);
//     }
//   };

//   return (
//     <div className="space-y-6 min-h-screen">
//       {/* Top Bar Filter Selection Dropdown */}
//       <div className="relative inline-block">
//         <button
//           onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
//           className="text-[13px] text-gray-500 flex items-center gap-2 hover:text-black transition-colors"
//         >
//           Showing accounts in
//           <span className="font-bold text-[#1D2939] underline decoration-gray-200 underline-offset-4 flex items-center gap-2">
//             {activeCurrency?.icon && (
//               <Image
//                 src={activeCurrency.icon}
//                 alt=""
//                 width={16}
//                 height={12}
//                 className="object-contain"
//               />
//             )}
//             {currencyFilter}
//           </span>
//         </button>
//         {showCurrencyDropdown && (
//           <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2">
//             {currencies.map((curr) => (
//               <button
//                 key={curr.label}
//                 onClick={() => {
//                   setCurrencyFilter(curr.label);
//                   setShowCurrencyDropdown(false);
//                 }}
//                 className="w-full text-left px-4 py-2 text-[13px] hover:bg-gray-50 flex items-center gap-3"
//               >
//                 <span
//                   className={
//                     currencyFilter === curr.label
//                       ? "font-bold text-[#034EA2]"
//                       : "text-gray-600"
//                   }
//                 >
//                   {curr.label}
//                 </span>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Main Tab Controls Switching Layout Viewboards */}
//       <div className="flex gap-8 border-b border-gray-50">
//         <button
//           onClick={() => setActiveTab("accounts")}
//           className={`pb-4 text-[13px] font-bold transition-all ${
//             activeTab === "accounts"
//               ? "text-[#034EA2] border-b-2 border-[#034EA2]"
//               : "text-gray-400 hover:text-gray-600"
//           }`}
//         >
//           Accounts
//         </button>
//         <button
//           onClick={() => setActiveTab("wallets")}
//           className={`pb-4 text-[13px] font-bold transition-all ${
//             activeTab === "wallets"
//               ? "text-[#034EA2] border-b-2 border-[#034EA2]"
//               : "text-gray-400 hover:text-gray-600"
//           }`}
//         >
//           Wallets
//         </button>
//       </div>

//       {/* Embedded Component List Views */}
//       <div className="pt-2">
//         {activeTab === "accounts" ? (
//           <AccountsList
//             currencyCode={activeCurrency?.value || "All"}
//             onSelectAccount={handleSelectItem}
//             search={searchTerm}
//             onSearchChange={setSearchTerm}
//           />
//         ) : (
//           <WalletsList
//             currencyCode={activeCurrency?.value || "All"}
//             onSelectWallet={handleSelectItem}
//             search={searchTerm}
//             onSearchChange={setSearchTerm}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default function AccountsPage() {
//   return (
//     <Suspense fallback={<div className="p-8 text-sm text-gray-400">Loading component assets...</div>}>
//       <AccountsPageContent />
//     </Suspense>
//   );
// }

"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AccountsList from "@/app/components/accounts/AccountsList";
import WalletsList from "@/app/components/accounts/WalletsList";

function AccountsPageContent() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"accounts" | "wallets">("accounts");
  const [currencyFilter, setCurrencyFilter] = useState("All Currencies");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const currencies = [
    { label: "All Currencies", icon: null, value: "All" },
    { label: "Nigerian Naira", icon: "/images/ng-flag.svg", value: "NGN" },
    { label: "US Dollars", icon: "/images/us-flag.svg", value: "USD" },
  ];

  const activeCurrency = currencies.find((c) => c.label === currencyFilter);

  // Navigates beautifully to your clean dynamic sub-page [id] route
  const handleSelectItem = (item: any) => {
    const accountId = item._id || item.id;
    if (accountId) {
      router.push(`/dashboard/accounts/${accountId}`);
    }
  };

  return (
    <div className="space-y-6 min-h-screen">
      {/* Top Bar Filter Selection Dropdown */}
      <div className="relative inline-block">
        <button
          onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
          className="text-[13px] text-gray-500 flex items-center gap-2 hover:text-black transition-colors"
        >
          Showing accounts in
          <span className="font-bold text-[#1D2939] underline decoration-gray-200 underline-offset-4 flex items-center gap-2">
            {activeCurrency?.icon && (
              <Image
                src={activeCurrency.icon}
                alt=""
                width={16}
                height={12}
                className="object-contain"
              />
            )}
            {currencyFilter}
          </span>
        </button>
        {showCurrencyDropdown && (
          <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2">
            {currencies.map((curr) => (
              <button
                key={curr.label}
                onClick={() => {
                  setCurrencyFilter(curr.label);
                  setShowCurrencyDropdown(false);
                }}
                className="w-full text-left px-4 py-2 text-[13px] hover:bg-gray-50 flex items-center gap-3"
              >
                <span
                  className={
                    currencyFilter === curr.label
                      ? "font-bold text-[#034EA2]"
                      : "text-gray-600"
                  }
                >
                  {curr.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Tab Controls Switching Layout Viewboards */}
      <div className="flex gap-8 border-b border-gray-50">
        <button
          onClick={() => setActiveTab("accounts")}
          className={`pb-4 text-[13px] font-bold transition-all ${
            activeTab === "accounts"
              ? "text-[#034EA2] border-b-2 border-[#034EA2]"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Accounts
        </button>
        <button
          onClick={() => setActiveTab("wallets")}
          className={`pb-4 text-[13px] font-bold transition-all ${
            activeTab === "wallets"
              ? "text-[#034EA2] border-b-2 border-[#034EA2]"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Wallets
        </button>
      </div>

      {/* Embedded Component List Views */}
      <div className="pt-2">
        {activeTab === "accounts" ? (
          <AccountsList
            currencyCode={activeCurrency?.value || "All"}
            onSelectAccount={handleSelectItem}
            search={searchTerm}
            onSearchChange={setSearchTerm}
          />
        ) : (
          <WalletsList
            currencyCode={activeCurrency?.value || "All"}
            onSelectWallet={handleSelectItem}
            search={searchTerm}
            onSearchChange={setSearchTerm}
          />
        )}
      </div>
    </div>
  );
}

export default function AccountsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-sm text-gray-400">Loading component assets...</div>}>
      <AccountsPageContent />
    </Suspense>
  );
}