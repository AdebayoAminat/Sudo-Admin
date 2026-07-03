// "use client";

// import React from "react";

// const dummyReports = [
//   { id: "TRX-9021", business: "Glo World", type: "Funding", amount: "₦250,000.00", date: "May 02, 2026", status: "Successful" },
//   { id: "TRX-9022", business: "MTN Nigeria", type: "Withdraw", amount: "₦15,000.00", date: "May 01, 2026", status: "Pending" },
//   { id: "TRX-9023", business: "Airtel Ltd", type: "Funding", amount: "₦1,200,000.00", date: "April 28, 2026", status: "Successful" },
// ];

// export const SudoReportTab = () => {
//   return (
//     <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden animate-in fade-in duration-300">
//       <table className="w-full text-left border-collapse">
//         <thead className="bg-[#F9FAFB] border-b border-gray-100">
//           <tr>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Transaction ID</th>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Business</th>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Type</th>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Amount</th>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Date</th>
//             <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939] uppercase">Status</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-50">
//           {dummyReports.map((report) => (
//             <tr key={report.id} className="hover:bg-gray-50/50 transition-colors">
//               <td className="px-6 py-4 text-[13px] font-medium text-[#1D2939]">{report.id}</td>
//               <td className="px-6 py-4 text-[13px] text-gray-500">{report.business}</td>
//               <td className="px-6 py-4 text-[13px] text-gray-500">{report.type}</td>
//               <td className="px-6 py-4 text-[13px] font-bold text-[#1D2939]">{report.amount}</td>
//               <td className="px-6 py-4 text-[13px] text-gray-500">{report.date}</td>
//               <td className="px-6 py-4">
//                 <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
//                   report.status === 'Successful' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
//                 }`}>
//                   {report.status}
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

const reports = [
  { id: "TRX-9021", business: "Glo World", type: "Funding", amount: "₦250,000.00", status: "Successful" },
  { id: "TRX-9022", business: "MTN Nigeria", type: "Withdraw", amount: "₦15,000.00", status: "Pending" },
];

export const SudoReportTab = ({ searchTerm, businessFilter, typeFilter, onCountChange }: any) => {
  const filtered = useMemo(() => {
    return reports.filter(r => {
      const matchSearch = r.id.toLowerCase().includes(searchTerm.toLowerCase()) || r.business.toLowerCase().includes(searchTerm.toLowerCase());
      const matchBiz = businessFilter === "All" || r.business === businessFilter;
      const matchType = typeFilter === "All" || r.type === typeFilter;
      return matchSearch && matchBiz && matchType;
    });
  }, [searchTerm, businessFilter, typeFilter]);

  useEffect(() => {
    onCountChange(filtered.length);
  }, [filtered.length, onCountChange]);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-[#F9FAFB] border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">TRANSACTION ID</th>
            <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">BUSINESS</th>
            <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">TYPE</th>
            <th className="px-6 py-4 text-[12px] font-bold text-[#1D2939]">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((r) => (
            <tr key={r.id} className="border-b border-gray-50">
              <td className="px-6 py-4 text-[13px] font-medium">{r.id}</td>
              <td className="px-6 py-4 text-[13px] text-gray-500">{r.business}</td>
              <td className="px-6 py-4 text-[13px] text-gray-500">{r.type}</td>
              <td className="px-6 py-4 text-[13px] font-bold">{r.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};