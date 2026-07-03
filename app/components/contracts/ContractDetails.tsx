
// "use client";

// import React, { useState } from "react";

// const feeData = [
//   { name: "PHYSICAL_VERVE_CREDIT_CARD_ISSUANCE_FEE", description: "Physical Verve Credit Card Issuance Fee", currency: "NGN", flatAmount: 3000, percentAmount: 0, minCap: 2000, maxCap: 2000 },
//   { name: "PHYSICAL_AFRIGO_CREDIT_CARD_ISSUANCE_FEE", description: "Physical Afrigo Credit Card Issuance Fee", currency: "NGN", flatAmount: 3000, percentAmount: 0, minCap: 3000, maxCap: 3000 },
//   { name: "PHYSICAL_AFRIGO_CARD_ISSUANCE_FEE", description: "Physical Afrigo Card Issuance Fee", currency: "NGN", flatAmount: 2000, percentAmount: 0, minCap: 2000, maxCap: 2000 },
//   { name: "VIRTUAL_AFRIGO_CARD_ISSUANCE_FEE", description: "Virtual Afrigo Card Issuance Fee", currency: "NGN", flatAmount: 50, percentAmount: 0, minCap: 50, maxCap: 50 },
//   { name: "AFRIGO_CARD_AUTHORIZATION_FEE", description: "Afrigo Card Authorization Fee", currency: "NGN", flatAmount: 5, percentAmount: 0, minCap: 5, maxCap: 5 },
// ];

// const tableConfig = [
//   { label: "NAME", key: "name" },
//   { label: "DESCRIPTION", key: "description" },
//   { label: "CURRENCY", key: "currency" },
//   { label: "FLAT AMOUNT", key: "flatAmount" },
//   { label: "% AMOUNT", key: "percentAmount" },
//   { label: "MIN CAP", key: "minCap" },
//   { label: "MAX CAP", key: "maxCap" },
// ];

// export function ContractDetails({ contract, onBack }: { contract: any, onBack: () => void }) {
//   const [activeCell, setActiveCell] = useState<{ row: number; colLabel: string } | null>(null);

//   return (
//     <div className="bg-white min-h-screen font-sans">
    

//       {/* Header Section */}
//       <div className="px-8 mt-10 mb-10 flex justify-between items-end">
//         <div>
//           <h1 className="text-[28px] font-bold text-[#1D2939] leading-tight mb-2">
//             {contract?.name || "Bitnob Default"}
//           </h1>
//           <span className="bg-[#EFF6FF] text-[#3B82F6] px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
//             NIGERIA
//           </span>
//         </div>
//         <div className="text-right">
//           <p className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.15em] mb-1">CURRENCY</p>
//           <p className="text-[32px] font-bold text-[#1D2939] leading-none">
//             {contract?.currency || "NGN"}
//           </p>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="px-8">
//         <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
//           <table className="w-full text-left border-collapse bg-white">
//             <thead className="bg-[#F2F4F7]">
//               <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
//                 <th className="px-6 py-5 border-r border-gray-200 w-16 text-center">#</th>
//                 {tableConfig.map((col) => (
//                   <th 
//                     key={col.label} 
//                     className={`px-6 py-5 border-r border-gray-200 transition-colors duration-200 ${
//                       activeCell?.colLabel === col.label ? "bg-[#E5E7EB] text-[#1D2939]" : ""
//                     }`}
//                   >
//                     {col.label}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="text-[11px] text-[#1D2939]">
//               {feeData.map((fee, rowIndex) => (
//                 <tr key={rowIndex} className="border-t border-gray-100 group">
//                   {/* Index Column */}
//                   <td className={`px-6 py-5 border-r border-gray-200 text-center font-semibold transition-colors duration-200 ${
//                     activeCell?.row === rowIndex ? "bg-[#E5E7EB]" : "bg-[#F9FAFB]"
//                   }`}>
//                     {rowIndex + 1}
//                   </td>

//                   {/* Data Columns */}
//                   {tableConfig.map((col) => {
//                     const isActive = activeCell?.row === rowIndex && activeCell?.colLabel === col.label;
//                     return (
//                       <td 
//                         key={col.label}
//                         onClick={() => setActiveCell({ row: rowIndex, colLabel: col.label })}
//                         className={`px-6 py-5 border-r border-gray-200 cursor-pointer relative transition-all min-w-[120px] ${
//                           isActive ? "z-10" : "hover:bg-gray-50/80"
//                         }`}
//                       >
//                         {/* Blue Selection Border */}
//                         {isActive && (
//                           <div className="absolute inset-0 border-[1.5px] border-[#3B82F6] pointer-events-none shadow-[0_0_0_1px_rgba(59,130,246,0.1)]" />
//                         )}
                        
//                         <span className={`block truncate ${
//                           col.key === "description" ? "text-gray-400 font-medium" : "font-semibold"
//                         }`}>
//                           {fee[col.key as keyof typeof fee]}
//                         </span>
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContractDetails;
"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import ContractsService from "@/app/service/contracts.service";

const tableConfig = [
  { label: "NAME", key: "name" },
  { label: "DESCRIPTION", key: "description" },
  { label: "CURRENCY", key: "currency" },
  { label: "FLAT AMOUNT", key: "flatAmount" },
  { label: "% AMOUNT", key: "percentageAmount" }, 
  { label: "MIN CAP", key: "minCap" },
  { label: "MAX CAP", key: "maxCap" },
];

interface ContractDetailsProps {
  contract: any;
  onBack: () => void;
}

export default function ContractDetails({ contract, onBack }: ContractDetailsProps) {
  const [activeCell, setActiveCell] = useState<{ row: number; colLabel: string } | null>(null);
  const [fullContractData, setFullContractData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContractDetails = async () => {
      if (!contract) return;
      setLoading(true);
      
      const contractId = contract.id || contract._id;
      const service = new ContractsService();
      const response = await service.getContractById(String(contractId));

      if (response && !("error" in response)) {
        // Handle your nested response path securely
        setFullContractData(response.data?.data || response.data);
      } else {
        setFullContractData(contract);
      }
      setLoading(false);
    };

    fetchContractDetails();
  }, [contract]);

  // Maps directly to your live 'charges' array from your response context
  const feeData = fullContractData?.charges || [];

  if (loading) {
    return <div className="p-8 text-[13px] text-gray-400">Loading contract configuration...</div>;
  }

  const displayName = fullContractData?.name ;
  const displayCurrency = fullContractData?.defaultCurrency || fullContractData?.currency ;
  const displayCountry = fullContractData?.country ;

  return (
    <div className="bg-white min-h-screen font-sans">
    
      {/* Header Section */}
      <div className="px-8 mt-6 mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-[28px] font-bold text-[#1D2939] leading-tight mb-2">
            {displayName}
          </h1>
          <span className="bg-[#EFF6FF] text-[#3B82F6] px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
            {displayCountry}
          </span>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.15em] mb-1">CURRENCY</p>
          <p className="text-[32px] font-bold text-[#1D2939] leading-none">
            {displayCurrency}
          </p>
        </div>
      </div>

      {/* Borderless Table Section */}
      <div className="px-8 overflow-x-auto">
        <table className="w-full text-left border-collapse bg-white">
          <thead>
            <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
              <th className="px-4 py-5 w-16 text-center">#</th>
              {tableConfig.map((col) => (
                <th 
                  key={col.label} 
                  className={`px-4 py-5 transition-colors duration-200 ${
                    activeCell?.colLabel === col.label ? "text-[#1D2939]" : ""
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[11px] text-[#1D2939]">
            {feeData.length === 0 ? (
              <tr>
                <td colSpan={tableConfig.length + 1} className="px-4 py-10 text-center text-gray-400 text-[13px]">
                  No fee distributions configured for this contract.
                </td>
              </tr>
            ) : (
              feeData.map((fee: any, rowIndex: number) => (
                <tr key={rowIndex} className="border-b border-gray-50 hover:bg-gray-50/40 transition-colors group">
                  {/* Index Column */}
                  <td className="px-4 py-5 text-center font-semibold text-gray-400">
                    {rowIndex + 1}
                  </td>

                  {/* Data Columns */}
                  {tableConfig.map((col) => {
                    const isActive = activeCell?.row === rowIndex && activeCell?.colLabel === col.label;
                    const cellValue = fee[col.key];

                    return (
                      <td 
                        key={col.label}
                        onClick={() => setActiveCell({ row: rowIndex, colLabel: col.label })}
                        className="px-4 py-5 cursor-pointer relative min-w-[120px]"
                      >
                        {/* Cell Focus Border */}
                        {isActive && (
                          <div className="absolute inset-0 border-[1.5px] border-[#3B82F6] pointer-events-none rounded-md" />
                        )}
                        
                        <span className={`block truncate ${
                          col.key === "description" ? "text-gray-400 font-medium" : "font-semibold"
                        }`}>
                          {cellValue !== undefined && cellValue !== null ? String(cellValue) : "—"}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}