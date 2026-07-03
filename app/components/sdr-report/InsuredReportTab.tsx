// "use client";

// import React from "react";

// const dummyInsured = [
//   { id: "POL-441", client: "Umar Yusuf", policy: "Health Insurance", premium: "₦45,000.00", expiry: "Dec 2026", status: "Active" },
//   { id: "POL-442", client: "Lyeis John", policy: "Vehicle Cover", premium: "₦120,000.00", expiry: "Jan 2027", status: "Active" },
// ];

// export const InsuredReportTab = () => {
//   return (
//     <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden animate-in fade-in duration-300">
//       <table className="w-full text-left border-collapse">
//         <thead className="bg-[#F9FAFB] border-b border-gray-100">
//           <tr>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Policy No</th>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Client Name</th>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Policy Type</th>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Premium</th>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Expiry</th>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Status</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-50">
//           {dummyInsured.map((item) => (
//             <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
//               <td className="px-6 py-4 text-[13px] font-medium text-[#1D2939]">{item.id}</td>
//               <td className="px-6 py-4 text-[13px] text-gray-500">{item.client}</td>
//               <td className="px-6 py-4 text-[13px] text-gray-500">{item.policy}</td>
//               <td className="px-6 py-4 text-[13px] font-bold text-[#1D2939]">{item.premium}</td>
//               <td className="px-6 py-4 text-[13px] text-gray-500">{item.expiry}</td>
//               <td className="px-6 py-4">
//                 <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-600">
//                   {item.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


"use client";

import React, { useEffect, useMemo } from "react";

// Dummy data for Insured Reports
const insuredReports = [
  { 
    id: "INS-4401", 
    business: "Airtel Ltd", 
    type: "Funding", 
    amount: "₦1,200,000.00", 
    date: "May 03, 2026", 
    status: "Successful" 
  },
  { 
    id: "INS-4402", 
    business: "Glo World", 
    type: "Withdraw", 
    amount: "₦50,000.00", 
    date: "May 02, 2026", 
    status: "Successful" 
  },
  { 
    id: "INS-4403", 
    business: "MTN Nigeria", 
    type: "Funding", 
    amount: "₦340,000.00", 
    date: "May 01, 2026", 
    status: "Failed" 
  },
];

interface Props {
  searchTerm: string;
  businessFilter: string;
  typeFilter: string;
  onCountChange: (count: number) => void;
}

export const InsuredReportTab = ({ 
  searchTerm, 
  businessFilter, 
  typeFilter, 
  onCountChange 
}: Props) => {
  
  // FILTER LOGIC: Search + Business + Type
  const filtered = useMemo(() => {
    return insuredReports.filter((report) => {
      const matchesSearch = 
        report.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
        report.business.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesBusiness = businessFilter === "All" || report.business === businessFilter;
      const matchesType = typeFilter === "All" || report.type === typeFilter;

      return matchesSearch && matchesBusiness && matchesType;
    });
  }, [searchTerm, businessFilter, typeFilter]);

  // Sync count with parent page
  useEffect(() => {
    onCountChange(filtered.length);
  }, [filtered.length, onCountChange]);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden animate-in fade-in duration-300">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#F9FAFB] border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase tracking-wider">Transaction ID</th>
            <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase tracking-wider">Business</th>
            <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase tracking-wider">Type</th>
            <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase tracking-wider">Amount</th>
            <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase tracking-wider">Date</th>
            <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {filtered.map((report) => (
            <tr key={report.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 text-[13px] font-medium text-[#1D2939]">{report.id}</td>
              <td className="px-6 py-4 text-[13px] text-gray-500">{report.business}</td>
              <td className="px-6 py-4 text-[13px] text-gray-500">{report.type}</td>
              <td className="px-6 py-4 text-[13px] font-bold text-[#1D2939]">{report.amount}</td>
              <td className="px-6 py-4 text-[13px] text-gray-400">{report.date}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                  report.status === 'Successful' 
                    ? 'bg-green-50 text-green-600' 
                    : 'bg-red-50 text-red-600'
                }`}>
                  {report.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtered.length === 0 && (
        <div className="py-20 text-center flex flex-col items-center justify-center space-y-2">
          <p className="text-[14px] text-[#1D2939] font-bold">No Records Found</p>
          <p className="text-[12px] text-gray-400">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};