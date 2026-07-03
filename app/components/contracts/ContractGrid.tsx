


// "use client";

// import React from "react";
// import { Search } from "lucide-react";

// const mockContracts = [
//   { id: "1", name: "Default", initials: "D", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//   { id: "2", name: "Vella Default", initials: "VD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//   { id: "3", name: "Bitmama Default", initials: "BD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//   { id: "4", name: "Bitnob Default", initials: "BD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//   { id: "5", name: "Mono Default", initials: "MD", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
//   { id: "6", name: "Rootdefault", initials: "R", currency: "NGN", date: "Nov 27, 2021, 2:36:10 AM" },
// ];

// export function ContractGrid({ onSelect }: { onSelect: (contract: any) => void }) {
//   return (
//     <div className="p-8 bg-white min-h-screen">
//       {/* New Header Layout */}
//       <div className="flex justify-between items-center mb-10">
//         <p className="text-gray-400 text-[13px] font-medium">
//           Showing <span className="text-[#1D2939] font-bold">{mockContracts.length}</span> Contracts
//         </p>
        
//         <div className="flex gap-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//             <input 
//               type="text" 
//               placeholder="name, email, type" 
//               className="pl-10 pr-4 py-2 border border-gray-100 rounded-lg text-[13px] w-64 bg-white focus:outline-none focus:ring-1 focus:ring-gray-200"
//             />
//           </div>
//           <button className="bg-[#0A1629] text-white px-8 py-2 rounded-lg text-[13px] font-bold">
//             Create
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {mockContracts.map((contract) => (
//           <div 
//             key={contract.id}
//             onClick={() => onSelect(contract)}
//             className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-all relative group"
//           >
//             <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full" />
//             <div className="w-12 h-12 bg-[#F9FAFB] flex items-center justify-center rounded-lg mb-6 border border-gray-50">
//               <span className="text-[#1D2939] font-bold text-lg">{contract.initials}</span>
//             </div>
//             <h3 className="font-bold text-[#1D2939] text-[15px] mb-2">{contract.name}</h3>
//             <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-[10px] font-bold uppercase">
//               {contract.currency}
//             </span>
//             <div className="mt-6 flex items-center gap-2 text-gray-400 text-[11px]">
//               <span>🕒 Created on: {contract.date}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default ContractGrid;