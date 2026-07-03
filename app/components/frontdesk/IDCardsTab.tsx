// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { MoreVertical, Ban, Eye } from "lucide-react";

// const MOCK_CARDS = [
//   { id: "1", name: "Abigail Effiong", no: "022", status: "ACTIVE", uuid: "224863a5-8ee6-4f23-bdff-fe01aafdf95f" },
//   { id: "2", name: "Abiola Fajingbesi", no: "003", status: "ACTIVE", uuid: "3531961e-9c82-4265-8eea-9c59a7e5b3ca" },
//   { id: "3", name: "Abubakar Umar", no: "010", status: "ACTIVE", uuid: "UUID" },
// ];

// const IDCardsTab = () => {
//   const [menuId, setMenuId] = useState<string | null>(null);

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <p className="text-[12px] text-gray-400">Showing <span className="text-[#1D2939] font-bold">43 Employees</span></p>
//       </div>

//       <div className="bg-white border border-gray-50 rounded-xl overflow-visible">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="text-[10px] font-bold text-[#1D2939] border-b border-gray-50 bg-gray-50/30">
//               <th className="px-6 py-4">PHOTO</th>
//               <th className="px-6 py-4">EMPLOYEE NAME</th>
//               <th className="px-6 py-4">EMPLOYEE NO</th>
//               <th className="px-6 py-4">STATUS</th>
//               <th className="px-6 py-4">UUID</th>
//               <th className="px-6 py-4 text-right">ACTION</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {MOCK_CARDS.map((item) => (
//               <tr key={item.id} className="text-[12px] group hover:bg-gray-50/50 transition-all">
//                 <td className="px-6 py-4">
//                   <div className="w-8 h-8 rounded-full bg-[#F2F4F7] flex items-center justify-center">
//                     <Image src="/images/user-icon.svg" alt="User" width={14} height={14} />
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 font-medium text-[#1D2939]">{item.name}</td>
//                 <td className="px-6 py-4 text-gray-500">{item.no}</td>
//                 <td className="px-6 py-4">
//                   <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-bold">{item.status}</span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="px-2 py-1 bg-[#F9FAFB] text-gray-400 font-mono rounded border border-gray-100">{item.uuid}</span>
//                 </td>
//                 <td className="px-6 py-4 text-right relative">
//                   <button onClick={() => setMenuId(menuId === item.id ? null : item.id)} className="p-1 hover:bg-gray-100 rounded">
//                     <MoreVertical className="w-4 h-4 text-gray-400" />
//                   </button>
                  
//                   {/* Menu Implementation */}
//                   {menuId === item.id && (
//                     <div className="absolute right-8 top-10 w-36 bg-white border border-gray-100 rounded-lg shadow-xl z-50 py-1">
//                       <button className="w-full flex items-center gap-2 px-4 py-2 text-[11px] text-red-500 hover:bg-red-50">
//                         <Ban className="w-3 h-3" /> Block
//                       </button>
//                       <button className="w-full flex items-center gap-2 px-4 py-2 text-[11px] text-[#1D2939] hover:bg-gray-50">
//                         <Eye className="w-3 h-3" /> View ID Card
//                       </button>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default IDCardsTab;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoreVertical, Ban, Eye } from "lucide-react";

const IDCardsTab = () => {
  const [menuId, setMenuId] = useState<string | null>(null);

  const mockCards = [
    { id: "1", name: "Abigail Effiong", no: "022", status: "ACTIVE", uuid: "224863a5-8ee6-4f23-bdff-fe01aafdf95f" },
    { id: "2", name: "Abiola Fajingbesi", no: "003", status: "ACTIVE", uuid: "3531961e-9c82-4265-8eea-9c59a7e5b3ca" },
    { id: "3", name: "Abubakar Umar", no: "010", status: "ACTIVE", uuid: "UUID" },
    { id: "4", name: "Aminat Adebayo", no: "039", status: "ACTIVE", uuid: "25e4d98e-f16b-425c-a36e-82f205e2c257" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        {/* Dynamic Count: Shows length of the current list */}
        <p className="text-[12px] text-gray-400 font-medium">
          Showing <span className="text-[#1D2939] font-bold">{mockCards.length} Employees</span>
        </p>
      </div>

      <div className="bg-white border border-gray-50 rounded-xl overflow-visible shadow-sm">
        <table className="w-full text-left table-fixed">
          <thead className="bg-gray-50/30">
            <tr className="text-[10px] font-bold text-[#1D2939] tracking-wider uppercase border-b border-gray-50">
              <th className="px-6 py-4 w-[80px]">PHOTO</th>
              <th className="px-6 py-4 w-[25%]">EMPLOYEE NAME</th>
              <th className="px-6 py-4 w-[15%]">EMPLOYEE NO</th>
              <th className="px-6 py-4 text-center w-[15%]">STATUS</th>
              <th className="px-6 py-4 w-[35%]">UUID</th>
              <th className="px-6 py-4 text-right w-[100px]">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {mockCards.map((item) => (
              <tr key={item.id} className="text-[12px] group hover:bg-gray-50/50 transition-all">
                <td className="px-6 py-5">
                  <div className="w-8 h-8 rounded-full bg-[#F2F4F7] flex items-center justify-center">
                <Image src="/images/dashboard-customer.svg" alt="User" width={30} height={30} />
               </div>
                </td>
                <td className="px-6 py-5 font-bold text-[#1D2939]">{item.name}</td>
                <td className="px-6 py-5 text-gray-500">{item.no}</td>
                <td className="px-6 py-5 text-center">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold uppercase">
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="px-3 py-3 bg-[#F9FAFB] text-gray-400 font-mono rounded  block truncate">
                    {item.uuid}
                  </span>
                </td>
                <td className="px-6 py-5 text-right relative">
                  <button 
                    onClick={() => setMenuId(menuId === item.id ? null : item.id)} 
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                  
                  {/* Action Menu */}
                  {menuId === item.id && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setMenuId(null)} />
                      <div className="absolute right-8 top-12 w-40 bg-white border border-gray-100 rounded-lg shadow-xl z-20 py-1 animate-in fade-in zoom-in-95 duration-200">
                        <button className="w-full flex items-center gap-2 px-4 py-2.5 text-[11px] text-red-500 font-medium hover:bg-red-50">
                          <Ban className="w-3.5 h-3.5" /> Block
                        </button>
                        <button className="w-full flex items-center gap-2 px-4 py-2.5 text-[11px] text-[#1D2939] font-medium hover:bg-gray-50">
                          <Eye className="w-3.5 h-3.5" /> View ID Card
                        </button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IDCardsTab;