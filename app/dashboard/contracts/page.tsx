// "use client";

// import React, { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import ContractGrid from "@/app/components/contracts/ContractGrid";
// import ContractDetails from "@/app/components/contracts/ContractDetails";

// export default function ContractsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [contracts] = useState<any[]>([
//     { id: "1", name: "Default", initials: "D", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//     { id: "2", name: "Vella Default", initials: "VD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//     { id: "3", name: "Bitmama Default", initials: "BD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//     { id: "4", name: "Bitnob Default", initials: "BD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//     { id: "5", name: "Mono Default", initials: "MD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//     { id: "6", name: "Rootdefault", initials: "R", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//   ]);

//   const selectedContractId = searchParams.get("id");
//   const isDetailView = searchParams.get("view") === "detail" && selectedContractId;
  
//   const selectedContract = contracts.find(c => c.id === selectedContractId) || null;

//   const handleSelect = (contract: any) => {
//     router.push(`/dashboard/contracts?view=detail&id=${contract.id}`);
//   };

//   const handleBack = () => {
//     router.push("/dashboard/contracts");
//   };

//   return (
//     <div className="w-full bg-[#F9FAFB] min-h-screen">
//       {!isDetailView || !selectedContract ? (
//         <ContractGrid onSelect={handleSelect} />
//       ) : (
//         <ContractDetails 
//           contract={selectedContract} 
//           onBack={handleBack} 
//         />
//       )}
//     </div>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Search, ChevronLeft, ChevronRight } from "lucide-react";
// import ContractDetails from "@/app/components/contracts/ContractDetails";
// // import ContractsService from "@/app/service/contracts.service"; // Ready for backend link later

// export default function ContractsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // State Management
//   const [contracts, setContracts] = useState<any[]>([
//     { id: "1", name: "Default", initials: "D", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//     { id: "2", name: "Vella Default", initials: "VD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//     { id: "3", name: "Bitmama Default", initials: "BD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//     { id: "4", name: "Bitnob Default", initials: "BD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//     { id: "5", name: "Mono Default", initials: "MD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//     { id: "6", name: "Rootdefault", initials: "R", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//   ]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Pagination States
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const [totalPages, setTotalPages] = useState<number>(1);
//   const [totalRecords, setTotalRecords] = useState<number>(6);
//   const limitPerPage = 25;

//   // View-switching breakdown parameters derived from URL state
//   const selectedContractId = searchParams.get("id");
//   const isDetailView = searchParams.get("view") === "detail" && selectedContractId;
//   const selectedContract = contracts.find((c) => c.id === selectedContractId) || null;

//   // Navigation Controllers
//   const handleSelectContract = (id: string) => {
//     router.push(`/dashboard/contracts?view=detail&id=${id}`);
//   };

//   const handleBackToGrid = () => {
//     router.push("/dashboard/contracts");
//   };

//   // Filter calculations based on local query state
//   const filteredContracts = contracts.filter((contract) =>
//     contract.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Math sliding window configuration to display exactly 5 numbers contextually
//   const renderPageNumbers = () => {
//     const pages = [];
//     const maxVisible = 5;

//     let startPage = Math.max(0, currentPage - Math.floor(maxVisible / 2));
//     let endPage = startPage + maxVisible - 1;

//     if (endPage >= totalPages) {
//       endPage = totalPages - 1;
//       startPage = Math.max(0, endPage - maxVisible + 1);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       pages.push(
//         <button
//           key={i}
//           onClick={() => setCurrentPage(i)}
//           className={`w-9 h-9 flex items-center justify-center rounded-full text-[14px] font-medium transition-all ${
//             currentPage === i
//               ? "bg-[#101828] text-white font-bold shadow-sm"
//               : "text-gray-500 hover:text-gray-900"
//           }`}
//         >
//           {i + 1}
//         </button>
//       );
//     }
//     return pages;
//   };

//   if (isDetailView && selectedContract) {
//     return (
//       <div className="w-full bg-[#F9FAFB] min-h-screen">
//         <ContractDetails contract={selectedContract} onBack={handleBackToGrid} />
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-white min-h-screen p-8">
//       {/* Search Header and Action Controller view */}
//       <div className="flex justify-between items-center mb-10">
//         <p className="text-gray-400 text-[13px] font-medium">
//           Showing{" "}
//           <span className="text-[#1D2939] font-bold">
//             {filteredContracts.length}
//           </span>{" "}
//           Contracts
//         </p>

//         <div className="flex gap-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search contracts..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-10 pr-4 py-2 border border-gray-100 rounded-lg text-[13px] w-64 bg-white focus:outline-none focus:ring-1 focus:ring-gray-200 text-[#1D2939]"
//             />
//           </div>
//           <button className="bg-[#0A1629] text-white px-8 py-2 rounded-lg text-[13px] font-bold hover:bg-[#1D2939] transition-colors">
//             Create
//           </button>
//         </div>
//       </div>

//       {/* Grid Dashboard Layout View */}
//       {filteredContracts.length === 0 ? (
//         <div className="text-center py-20 text-gray-400 text-[14px]">
//           No matching contracts found.
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredContracts.map((contract) => (
//             <div
//               key={contract.id}
//               onClick={() => handleSelectContract(contract.id)}
//               className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-all relative group"
//             >
//               <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full" />
//               <div className="w-12 h-12 bg-[#F9FAFB] flex items-center justify-center rounded-lg mb-6 border border-gray-50">
//                 <span className="text-[#1D2939] font-bold text-lg">
//                   {contract.initials}
//                 </span>
//               </div>
//               <h3 className="font-bold text-[#1D2939] text-[15px] mb-2">
//                 {contract.name}
//               </h3>
//               <span className="text-[11px] text-gray-500 font-medium tracking-wider">
//                 {contract.currency}
//               </span>
//               <div className="mt-6 flex items-center gap-2 text-gray-400 text-[11px]">
//                 <span>🕒 Created on: {contract.date}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* COMPACT SLIDING WINDOW PAGINATION */}
//       {filteredContracts.length > 0 && (
//         <div className="flex items-center justify-end bg-white pt-10">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
//               disabled={currentPage === 0}
//               className="text-gray-400 hover:text-gray-700 disabled:opacity-20 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>

//             <div className="flex items-center gap-2">{renderPageNumbers()}</div>

//             <button
//               onClick={() =>
//                 currentPage < totalPages - 1 && setCurrentPage(currentPage + 1)
//               }
//               disabled={currentPage === totalPages - 1}
//               className="text-blue-600 hover:text-blue-800 disabled:opacity-20 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5 stroke-[2.5px]" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import ContractDetails from "@/app/components/contracts/ContractDetails";
import ContractsService from "@/app/service/contracts.service";

export default function ContractsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State Management
  const [contracts, setContracts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Pagination States
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const limitPerPage = 25;

  // View-switching breakdown parameters derived from URL state
  const selectedContractId = searchParams.get("id");
  const isDetailView = searchParams.get("view") === "detail" && selectedContractId;
  const selectedContract = contracts.find((c) => String(c.id || c._id) === selectedContractId) || null;

  // Live Data Fetch Integration
  const fetchContractsList = async (pageToFetch: number) => {
    setLoading(true);
    const service = new ContractsService();
    const response = await service.getAllContracts(pageToFetch, limitPerPage);

    if (response && !("error" in response)) {
      const serverPayload = response.data?.data || response.data;
      setContracts(Array.isArray(serverPayload) ? serverPayload : []);

      const meta = response.data?.meta || response.data?.pagination;
      if (meta) {
        setCurrentPage(Number(meta.page) || 0);
        setTotalPages(Number(meta.pages) || 1);
        setTotalRecords(Number(meta.total) || 0);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContractsList(currentPage);
  }, [currentPage]);

  // Navigation Controllers
  const handleSelectContract = (id: string) => {
    router.push(`/dashboard/contracts?view=detail&id=${id}`);
  };

  const handleBackToGrid = () => {
    router.push("/dashboard/contracts");
  };

  // Filter calculations based on query string matching fallback keys
  const filteredContracts = contracts.filter((contract) => {
    const contractName = contract.name || contract.contractName || "";
    return contractName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Math sliding window configuration to display exactly 5 numbers contextually
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    let startPage = Math.max(0, currentPage - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;

    if (endPage >= totalPages) {
      endPage = totalPages - 1;
      startPage = Math.max(0, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-9 h-9 flex items-center justify-center rounded-full text-[14px] font-medium transition-all ${
            currentPage === i
              ? "bg-[#101828] text-white font-bold shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          {i + 1}
        </button>
      );
    }
    return pages;
  };

  if (isDetailView && selectedContract) {
    return (
      <div className="w-full bg-[#F9FAFB] min-h-screen">
        <ContractDetails contract={selectedContract} onBack={handleBackToGrid} />
      </div>
    );
  }

  if (loading) {
    return <div className="p-8 text-[13px] text-gray-400">Loading contracts...</div>;
  }

  return (
    <div className="w-full bg-white min-h-screen p-8">
      {/* Search Header and Action Controller view */}
      <div className="flex justify-between items-center mb-10">
        <p className="text-gray-400 text-[13px] font-medium">
          Showing{" "}
          <span className="text-[#1D2939] font-bold">
            {filteredContracts.length}
          </span>{" "}
          Contracts
        </p>

        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search contracts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-100 rounded-lg text-[13px] w-64 bg-white focus:outline-none focus:ring-1 focus:ring-gray-200 text-[#1D2939]"
            />
          </div>
          <button className="bg-[#0A1629] text-white px-8 py-2 rounded-lg text-[13px] font-bold hover:bg-[#1D2939] transition-colors">
            Create
          </button>
        </div>
      </div>

      {/* Grid Dashboard Layout View */}
      {filteredContracts.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-[14px]">
          No contracts found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContracts.map((contract) => {
            const contractId = contract.id || contract._id ;
            const displayName = contract.name || contract.contractName ;
            
            // Build initials dynamically from name field context
            const nameParts = displayName.split(" ");
            const initialsDisplay = nameParts.length > 1 
              ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
              : `${displayName.slice(0, 2)}`.toUpperCase();

            const currency = contract.currency || "NGN";
            const timestamp = contract.createdAt || contract.date || "";
            const displayTime = timestamp ? new Date(timestamp).toLocaleString('en-US', {
              month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true
            }) : "N/A";

            return (
              <div
                key={contractId}
                onClick={() => handleSelectContract(String(contractId))}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-all relative group"
              >
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full" />
                <div className="w-12 h-12 bg-[#F9FAFB] flex items-center justify-center rounded-lg mb-6 border border-gray-50">
                  <span className="text-[#1D2939] font-bold text-lg">
                    {initialsDisplay}
                  </span>
                </div>
                <h3 className="font-bold text-[#1D2939] text-[15px] mb-2">
                  {displayName}
                </h3>
                <span className="text-[11px] text-gray-500 font-medium tracking-wider">
                  {currency}
                </span>
                <div className="mt-6 flex items-center gap-2 text-gray-400 text-[11px]">
                  <span>🕒 Created on: {displayTime}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* COMPACT SLIDING WINDOW PAGINATION */}
      {filteredContracts.length > 0 && totalPages > 1 && (
        <div className="flex items-center justify-end bg-white pt-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="text-gray-400 hover:text-gray-700 disabled:opacity-20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">{renderPageNumbers()}</div>

            <button
              onClick={() =>
                currentPage < totalPages - 1 && setCurrentPage(currentPage + 1)
              }
              disabled={currentPage === totalPages - 1}
              className="text-blue-600 hover:text-blue-800 disabled:opacity-20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5px]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}