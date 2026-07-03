// "use client";

// import React from "react";

// const EmployeesAttendance = () => {
//   const data = [
//     { name: "Stephen Chris", checkin: "Apr 20, 2026, 8:00:08 AM", office: "WUSE II ABUJA", logs: "2" },
//     { name: "Ayodeji Adewemi", checkin: "Apr 20, 2026, 8:05:30 AM", office: "WUSE II ABUJA", logs: "1" },
//   ];

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <p className="text-[12px] text-gray-400 font-medium">
//           Showing <span className="text-[#1D2939] font-bold">15 Employees</span>
//         </p>
//       </div>
      
//       <div className="bg-white border border-gray-50 rounded-xl overflow-hidden shadow-sm">
//         <table className="w-full text-left">
//           <thead className="bg-gray-50/30">
//             <tr className="text-[10px] font-bold text-[#1D2939] tracking-wider uppercase">
//               <th className="px-6 py-4">PHOTO</th>
//               <th className="px-6 py-4">EMPLOYEE NAME</th>
//               <th className="px-6 py-4 text-center">CHECKIN AT</th>
//               <th className="px-6 py-4">OFFICE</th>
//               <th className="px-6 py-4 text-right">LOGS</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {data.map((row, i) => (
//               <tr key={i} className="text-[12px] hover:bg-gray-50 transition-colors">
//                 <td className="px-6 py-5">
//                    <div className="w-8 h-8 rounded-full bg-gray-100" />
//                 </td>
//                 <td className="px-6 py-5 font-bold text-[#1D2939]">{row.name}</td>
//                 <td className="px-6 py-5 text-gray-400 text-center">{row.checkin}</td>
//                 <td className="px-6 py-5">
//                   <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold">
//                     {row.office}
//                   </span>
//                 </td>
//                 <td className="px-6 py-5 text-right font-bold text-[#1D2939]">{row.logs}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmployeesAttendance;


// "use client";

// import React, { useState } from "react";
// import { Search, Download, Filter } from "lucide-react";

// const EmployeesAttendance = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   // Updated dummy data with Checkout information
//   const data = [
//     { 
//       name: "Stephen Chris", 
//       checkinAt: "Apr 20, 2026, 8:00:08 AM", 
//       office: "WUSE II ABUJA", 
//       checkoutAt: "Apr 20, 2026, 5:10:22 PM", 
//       checkoutStatus: "DONE",
//       logs: "2" 
//     },
//     { 
//       name: "Ayodeji Adewemi", 
//       checkinAt: "Apr 20, 2026, 8:05:30 AM", 
//       office: "WUSE II ABUJA", 
//       checkoutAt: "Apr 20, 2026, 5:02:11 PM", 
//       checkoutStatus: "DONE",
//       logs: "1" 
//     },
//     { 
//       name: "Morenikeji Olakunle", 
//       checkinAt: "Apr 20, 2026, 8:10:31 AM", 
//       office: "WUSE II ABUJA", 
//       checkoutAt: "", 
//       checkoutStatus: "PENDING",
//       logs: "1" 
//     },
//     { 
//       name: "Queen Sunday Jatto", 
//       checkinAt: "Apr 20, 2026, 8:16:30 AM", 
//       office: "WUSE II ABUJA", 
//       checkoutAt: "Apr 20, 2026, 4:55:00 PM", 
//       checkoutStatus: "DONE",
//       logs: "1" 
//     },
//     { 
//       name: "Chizaram Ugorji", 
//       checkinAt: "Apr 20, 2026, 8:24:04 AM", 
//       office: "WUSE II ABUJA", 
//       checkoutAt: "Apr 20, 2026, 5:30:15 PM", 
//       checkoutStatus: "DONE",
//       logs: "1" 
//     },
//     { 
//       name: "Blessing Monday", 
//       checkinAt: "Apr 20, 2026, 8:24:19 AM", 
//       office: "WUSE II ABUJA", 
//       checkoutAt: "", 
//       checkoutStatus: "PENDING",
//       logs: "1" 
//     },
//   ];

//   const filteredData = data.filter((emp) =>
//     emp.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="space-y-8 animate-in fade-in duration-500">
//       {/* UTILITY BAR */}
//       <div className="flex justify-between items-end">
//         <p className="text-[12px] text-gray-400 font-medium pb-2">
//           Showing <span className="text-[#1D2939] font-bold">{filteredData.length} Employees</span>
//         </p>

//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Emp name, email, phone"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-[280px] h-[44px] pl-4 pr-10 bg-[#F9FAFB] border border-gray-100 rounded-lg text-[12px] outline-none focus:border-gray-300 transition-all"
//             />
//             <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//           </div>

//           <button className="flex items-center gap-2 px-4 h-[44px] text-[12px] font-bold text-[#1D2939] hover:bg-gray-50 rounded-lg transition-colors">
//             <div className="relative">
//               <Filter className="w-4 h-4 text-gray-400" />
//               <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#1D2939] text-white text-[8px] rounded-full flex items-center justify-center">0</span>
//             </div>
//             Filter(s)
//           </button>

//           <button className="flex items-center justify-center gap-2 px-6 h-[44px] bg-[#0A1629] text-white text-[12px] font-bold rounded-lg hover:bg-opacity-90 shadow-sm transition-all">
//             <Download className="w-4 h-4" />
//             Download
//           </button>
//         </div>
//       </div>

//       {/* TABLE */}
//       <div className="w-full">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="text-[10px] font-bold tracking-wider uppercase text-left border-b border-gray-50">
//               <th className="pb-4 text-[#1D2939]">CHECKIN</th>
//               <th className="pb-4 text-[#1D2939]">EMPLOYEE NAME</th>
//               <th className="pb-4 text-[#1D2939]">CHECKIN AT</th>
//               <th className="pb-4 text-[#1D2939]">OFFICE</th>
//               <th className="pb-4 text-[#1D2939]">CHECKOUT AT</th>
//               <th className="pb-4 text-[#1D2939]">CHECKOUT</th>
//               <th className="pb-4 text-right text-[#1D2939]">LOGS</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {filteredData.map((row, i) => (
//               <tr key={i} className="group hover:bg-gray-50/40 transition-all">
//                 <td className="py-5">
//                   <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-[10px] font-bold">
//                     {row.name.charAt(0)}
//                   </div>
//                 </td>
//                 <td className="py-5 text-[13px] font-bold text-[#1D2939]">{row.name}</td>
//                 <td className="py-5 text-[11px] text-gray-400">{row.checkinAt}</td>
//                 <td className="py-5">
//                   <span className="bg-[#EFF6FF] text-[#1D4ED8] px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap">
//                     {row.office}
//                   </span>
//                 </td>
//                 <td className="py-5 text-[11px] text-gray-400">{row.checkoutAt || "-"}</td>
//                 <td className="py-5">
//                   {row.checkoutStatus === "DONE" ? (
//                     <span className="bg-green-50 text-green-600 px-3 py-1 rounded text-[10px] font-bold">DONE</span>
//                   ) : (
//                     <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded text-[10px] font-bold">PENDING</span>
//                   )}
//                 </td>
//                 <td className="py-5 text-right">
//                   <span className="inline-flex items-center justify-center w-6 h-6 bg-[#EFF6FF] text-[#1D4ED8] rounded-full text-[10px] font-bold">
//                     {row.logs}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmployeesAttendance;



"use client";

import React, { useState } from "react";
import Image from "next/image"; 

import { Download, ChevronDown, ChevronUp, X } from "lucide-react";

const EmployeesAttendance = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Accordion States
  const [dateAccordionOpen, setDateAccordionOpen] = useState(false);
  const [empAccordionOpen, setEmpAccordionOpen] = useState(false);

  // Filter Input States
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [appliedCount, setAppliedCount] = useState(0);

  const data = [
    { name: "Stephen Chris", checkinAt: "Apr 20, 2026, 8:00:08 AM", office: "WUSE II ABUJA", checkoutAt: "Apr 20, 2026, 5:10:22 PM", checkoutStatus: "DONE", logs: "2" },
    { name: "Ayodeji Adewemi", checkinAt: "Apr 20, 2026, 8:05:30 AM", office: "WUSE II ABUJA", checkoutAt: "Apr 20, 2026, 5:02:11 PM", checkoutStatus: "DONE", logs: "1" },
    { name: "Morenikeji Olakunle", checkinAt: "Apr 20, 2026, 8:10:31 AM", office: "WUSE II ABUJA", checkoutAt: "", checkoutStatus: "PENDING", logs: "1" },
    { name: "Queen Sunday Jatto", checkinAt: "Apr 20, 2026, 8:16:30 AM", office: "WUSE II ABUJA", checkoutAt: "Apr 20, 2026, 4:55:00 PM", checkoutStatus: "DONE", logs: "1" },
  ];

  const currentFilterCount = [startDate, endDate, selectedEmployee].filter(Boolean).length;

  const handleClearAll = () => {
    setStartDate("");
    setEndDate("");
    setSelectedEmployee("");
    setAppliedCount(0);
    setDateAccordionOpen(false);
    setEmpAccordionOpen(false);
  };

  const handleApply = () => {
    setAppliedCount(currentFilterCount);
    setIsFilterOpen(false);
  };

  const filteredData = data.filter((emp) =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative space-y-8 animate-in fade-in duration-500">
      {/* UTILITY BAR */}
      <div className="flex justify-between items-end">
        <p className="text-[12px] text-gray-400 font-medium pb-2">
          Showing <span className="text-[#1D2939] font-bold">{filteredData.length} Employees</span>
        </p>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Emp name, email, phone"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[280px] h-[44px] pl-4 pr-10 bg-[#F9FAFB] border border-gray-100 rounded-lg text-[12px] outline-none"
            />
            {/* SEARCH ICON FROM IMAGE */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image src="/images/search.svg" alt="Search" width={16} height={16} />
            </div>
          </div>

          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 h-[44px] text-[12px] font-bold text-[#1D2939] hover:bg-gray-50 rounded-lg transition-all"
          >
            <div className="relative">
              {/* FILTER ICON FROM IMAGE */}
              <Image src="/images/filter.svg" alt="Filter" width={16} height={16} />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#1D2939] text-white text-[8px] rounded-full flex items-center justify-center">
                {appliedCount}
              </span>
            </div>
            Filter(s)
          </button>

          <button className="flex items-center justify-center gap-2 px-6 h-[44px] bg-[#0A1629] text-white text-[12px] font-bold rounded-lg shadow-sm">
            <Download className="w-4 h-4" /> Download
          </button>
        </div>
      </div>

      {/* FILTER MODAL */}
      {isFilterOpen && (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute right-32 top-14 w-[380px] bg-white rounded-xl shadow-2xl z-30 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="p-5 border-b border-gray-50 flex justify-between items-center">
              <h3 className="text-[14px] font-bold text-[#1D2939]">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)}><X className="w-4 h-4 text-gray-400" /></button>
            </div>

            <div className="p-5 space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 bg-[#EEF2FF] text-[#4F46E5] px-3 py-1.5 rounded-md text-[11px] font-bold">
                  {currentFilterCount} filter(s) applied <ChevronDown className="w-3 h-3" />
                </div>
                <button 
                  onClick={handleClearAll}
                  className="text-[11px] font-bold text-[#1D2939] underline"
                >
                  Clear All
                </button>
              </div>

              {/* DATE RANGE ACCORDION */}
              <div className="space-y-3">
                <button 
                  onClick={() => setDateAccordionOpen(!dateAccordionOpen)}
                  className="w-full flex justify-between items-center text-[12px] font-bold text-[#1D2939]"
                >
                  <span>Date Range</span>
                  {dateAccordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                
                {dateAccordionOpen && (
                  <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-3 bg-[#F9FAFB] animate-in slide-in-from-top-1 duration-200">
                    <input 
                      type="date" 
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="bg-transparent outline-none text-[11px] w-full text-gray-500 cursor-pointer" 
                    />
                    <span className="text-gray-300">-</span>
                    <input 
                      type="date" 
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="bg-transparent outline-none text-[11px] w-full text-gray-500 cursor-pointer" 
                    />
                    {/* CALENDAR ICON FROM IMAGE */}
                    <Image src="/images/calendar.svg" alt="Calendar" width={16} height={16} className="flex-shrink-0" />
                  </div>
                )}
              </div>

              {/* EMPLOYEE ACCORDION */}
              <div className="space-y-3">
                <button 
                  onClick={() => setEmpAccordionOpen(!empAccordionOpen)}
                  className="w-full flex justify-between items-center text-[12px] font-bold text-[#1D2939]"
                >
                  <span>Employee</span>
                  {empAccordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                
                {empAccordionOpen && (
                  <div className="relative border border-gray-100 rounded-lg p-3 bg-[#F9FAFB] flex justify-between items-center animate-in slide-in-from-top-1 duration-200">
                    <select 
                      value={selectedEmployee}
                      onChange={(e) => setSelectedEmployee(e.target.value)}
                      className="bg-transparent outline-none text-[11px] w-full text-gray-400 appearance-none cursor-pointer"
                    >
                      <option value="">Select Employee</option>
                      {data.map((emp, i) => <option key={i} value={emp.name}>{emp.name}</option>)}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                )}
              </div>

              <button 
                onClick={handleApply}
                className="w-full bg-[#0A1629] text-white py-3.5 rounded-lg text-[12px] font-bold shadow-lg mt-4"
              >
                Apply
              </button>
            </div>
          </div>
        </>
      )}

      {/* TABLE */}
      <div className="w-full overflow-hidden border border-gray-50 rounded-xl shadow-sm">
        <table className="w-full border-collapse bg-white text-[12px]">
          <thead className="bg-gray-50/50">
            <tr className="text-[10px] font-bold tracking-wider uppercase text-left border-b border-gray-100">
              <th className="px-6 py-4 text-[#1D2939]">CHECKIN</th>
              <th className="px-6 py-4 text-[#1D2939]">EMPLOYEE NAME</th>
              <th className="px-6 py-4 text-[#1D2939]">CHECKIN AT</th>
              <th className="px-6 py-4 text-[#1D2939]">OFFICE</th>
              <th className="px-6 py-4 text-[#1D2939]">CHECKOUT AT</th>
              <th className="px-6 py-4 text-[#1D2939]">CHECKOUT</th>
              <th className="px-6 py-4 text-right text-[#1D2939]">LOGS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredData.map((row, i) => (
              <tr key={i} className="group hover:bg-gray-50/40 transition-all">
                <td className="px-6 py-5">
                   <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 font-bold text-[10px]">
                    {row.name.charAt(0)}
                  </div>
                </td>
                <td className="px-6 py-5 font-bold text-[#1D2939]">{row.name}</td>
                <td className="px-6 py-5 text-gray-400">{row.checkinAt}</td>
                <td className="px-6 py-5 text-blue-700">
                  <span className="bg-[#EFF6FF] px-4 py-1.5 rounded-full text-[10px] font-bold">{row.office}</span>
                </td>
                <td className="px-6 py-5 text-gray-400">{row.checkoutAt || "-"}</td>

                <td className="px-6 py-5">
                   <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 font-bold text-[10px]">
                    {row.name.charAt(0)}
                  </div>
                </td>

                <td className="px-6 py-5 text-right font-bold text-[#1D2939]">{row.logs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesAttendance;


// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import Image from "next/image"; 
// import { Download, ChevronDown, ChevronUp, X } from "lucide-react";
// import FrontDeskService from "@/app/service/frontdesk.service";

// interface AttendanceRecord {
//   name: string;
//   checkinAt: string;
//   office: string;
//   checkoutAt: string;
//   checkoutStatus: string;
//   logs: string;
//   rawDate?: Date; // Kept internally for date range filtering
// }

// const EmployeesAttendance = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
//   const [loading, setLoading] = useState(true);
  
//   // Accordion States
//   const [dateAccordionOpen, setDateAccordionOpen] = useState(false);
//   const [empAccordionOpen, setEmpAccordionOpen] = useState(false);

//   // Filter Input States
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [selectedEmployee, setSelectedEmployee] = useState("");
//   const [appliedCount, setAppliedCount] = useState(0);

//   // 1. Fetch live attendance data from service layer
//   useEffect(() => {
//     const fetchAttendance = async () => {
//       setLoading(true);
//       const service = new FrontDeskService();
//       const response = await service.getEmployeesAttendance();

//       if (response && !("error" in response)) {
//         // Extract array depending on if it's wrapped under response.data.data or directly in response.data
//         const payloadList = response.data?.data || response.data;

//         if (Array.isArray(payloadList)) {
//           const formattedRecords: AttendanceRecord[] = payloadList.map((record: any) => {
//             // Format checkin timestamp
//             let displayCheckin = "-";
//             let rawCheckinDate: Date | undefined;
//             if (record.checkinAt) {
//               const dateObj = new Date(record.checkinAt);
//               if (!isNaN(dateObj.getTime())) {
//                 rawCheckinDate = dateObj;
//                 displayCheckin = dateObj.toLocaleDateString("en-US", {
//                   month: "short",
//                   day: "numeric",
//                   year: "numeric",
//                   hour: "numeric",
//                   minute: "2-digit",
//                   second: "2-digit",
//                   hour12: true,
//                 });
//               }
//             }

//             // Format checkout timestamp
//             let displayCheckout = "-";
//             if (record.checkoutAt) {
//               const dateObj = new Date(record.checkoutAt);
//               if (!isNaN(dateObj.getTime())) {
//                 displayCheckout = dateObj.toLocaleDateString("en-US", {
//                   month: "short",
//                   day: "numeric",
//                   year: "numeric",
//                   hour: "numeric",
//                   minute: "2-digit",
//                   second: "2-digit",
//                   hour12: true,
//                 });
//               }
//             }

//             // Compute dynamic fallback name keys safely
//             const empName = record.employeeName || 
//                             (record.employee ? `${record.employee.firstName || ""} ${record.employee.lastName || ""}`.trim() : "") || 
//                             record.name || 
//                             "Unknown Employee";

//             return {
//               name: empName,
//               checkinAt: displayCheckin,
//               office: record.office || record.location || "MAIN OFFICE",
//               checkoutAt: record.checkoutAt ? displayCheckout : "",
//               checkoutStatus: record.checkoutStatus || (record.checkoutAt ? "DONE" : "PENDING"),
//               logs: String(record.logs || 1),
//               rawDate: rawCheckinDate
//             };
//           });

//           setAttendance(formattedRecords);
//         }
//       }
//       setLoading(false);
//     };

//     fetchAttendance();
//   }, []);

//   const currentFilterCount = [startDate, endDate, selectedEmployee].filter(Boolean).length;

//   const handleClearAll = () => {
//     setStartDate("");
//     setEndDate("");
//     setSelectedEmployee("");
//     setAppliedCount(0);
//     setDateAccordionOpen(false);
//     setEmpAccordionOpen(false);
//   };

//   const handleApply = () => {
//     setAppliedCount(currentFilterCount);
//     setIsFilterOpen(false);
//   };

//   // 2. Client-side Search and Filter evaluation
//   const filteredData = useMemo(() => {
//     return attendance.filter((emp) => {
//       // Search matching logic
//       const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase());
      
//       // Employee selection matching logic
//       const matchesEmpFilter = selectedEmployee ? emp.name === selectedEmployee : true;
      
//       // Date range matching logic
//       let matchesDateRange = true;
//       if (emp.rawDate) {
//         const checkinTime = emp.rawDate.getTime();
//         if (startDate) {
//           const start = new Date(startDate).setHours(0, 0, 0, 0);
//           if (checkinTime < start) matchesDateRange = false;
//         }
//         if (endDate) {
//           const end = new Date(endDate).setHours(23, 59, 59, 999);
//           if (checkinTime > end) matchesDateRange = false;
//         }
//       } else if (startDate || endDate) {
//         matchesDateRange = false; // No valid date object to compare against
//       }

//       return matchesSearch && matchesEmpFilter && matchesDateRange;
//     });
//   }, [attendance, searchQuery, selectedEmployee, startDate, endDate]);

//   // Unique list of employee names for the dropdown filter menu selection options
//   const uniqueEmployees = useMemo(() => {
//     const names = attendance.map((emp) => emp.name);
//     return Array.from(new Set(names)).sort();
//   }, [attendance]);

//   if (loading) {
//     return <div className="p-8 text-[12px] text-gray-400">Loading employees attendance data...</div>;
//   }

//   return (
//     <div className="relative space-y-8 animate-in fade-in duration-500">
//       {/* UTILITY BAR */}
//       <div className="flex justify-between items-end">
//         <p className="text-[12px] text-gray-400 font-medium pb-2">
//           Showing <span className="text-[#1D2939] font-bold">{filteredData.length} Employees</span>
//         </p>

//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Emp name, email, phone"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-[280px] h-[44px] pl-4 pr-10 bg-[#F9FAFB] border border-gray-100 rounded-lg text-[12px] outline-none text-[#1D2939]"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2">
//               <Image src="/images/search.svg" alt="Search" width={16} height={16} />
//             </div>
//           </div>

//           <button 
//             onClick={() => setIsFilterOpen(!isFilterOpen)}
//             className="flex items-center gap-2 px-4 h-[44px] text-[12px] font-bold text-[#1D2939] hover:bg-gray-50 rounded-lg transition-all"
//           >
//             <div className="relative">
//               <Image src="/images/filter.svg" alt="Filter" width={16} height={16} />
//               {appliedCount > 0 && (
//                 <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#1D2939] text-white text-[8px] rounded-full flex items-center justify-center font-bold">
//                   {appliedCount}
//                 </span>
//               )}
//             </div>
//             Filter(s)
//           </button>

//           <button className="flex items-center justify-center gap-2 px-6 h-[44px] bg-[#0A1629] text-white text-[12px] font-bold rounded-lg shadow-sm">
//             <Download className="w-4 h-4" /> Download
//           </button>
//         </div>
//       </div>

//       {/* FILTER MODAL */}
//       {isFilterOpen && (
//         <>
//           <div className="fixed inset-0 z-20" onClick={() => setIsFilterOpen(false)} />
//           <div className="absolute right-32 top-14 w-[380px] bg-white rounded-xl shadow-2xl z-30 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
//             <div className="p-5 border-b border-gray-50 flex justify-between items-center">
//               <h3 className="text-[14px] font-bold text-[#1D2939]">Filters</h3>
//               <button onClick={() => setIsFilterOpen(false)}><X className="w-4 h-4 text-gray-400" /></button>
//             </div>

//             <div className="p-5 space-y-6">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2 bg-[#EEF2FF] text-[#4F46E5] px-3 py-1.5 rounded-md text-[11px] font-bold">
//                   {currentFilterCount} filter(s) applied <ChevronDown className="w-3 h-3" />
//                 </div>
//                 <button 
//                   onClick={handleClearAll}
//                   className="text-[11px] font-bold text-[#1D2939] underline"
//                 >
//                   Clear All
//                 </button>
//               </div>

//               {/* DATE RANGE ACCORDION */}
//               <div className="space-y-3">
//                 <button 
//                   onClick={() => setDateAccordionOpen(!dateAccordionOpen)}
//                   className="w-full flex justify-between items-center text-[12px] font-bold text-[#1D2939]"
//                 >
//                   <span>Date Range</span>
//                   {dateAccordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//                 </button>
                
//                 {dateAccordionOpen && (
//                   <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-3 bg-[#F9FAFB] animate-in slide-in-from-top-1 duration-200">
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       className="bg-transparent outline-none text-[11px] w-full text-gray-500 cursor-pointer" 
//                     />
//                     <span className="text-gray-300">-</span>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       className="bg-transparent outline-none text-[11px] w-full text-gray-500 cursor-pointer" 
//                     />
//                     <Image src="/images/calendar.svg" alt="Calendar" width={16} height={16} className="flex-shrink-0" />
//                   </div>
//                 )}
//               </div>

//               {/* EMPLOYEE ACCORDION */}
//               <div className="space-y-3">
//                 <button 
//                   onClick={() => setEmpAccordionOpen(!empAccordionOpen)}
//                   className="w-full flex justify-between items-center text-[12px] font-bold text-[#1D2939]"
//                 >
//                   <span>Employee</span>
//                   {empAccordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//                 </button>
                
//                 {empAccordionOpen && (
//                   <div className="relative border border-gray-100 rounded-lg p-3 bg-[#F9FAFB] flex justify-between items-center animate-in slide-in-from-top-1 duration-200">
//                     <select 
//                       value={selectedEmployee}
//                       onChange={(e) => setSelectedEmployee(e.target.value)}
//                       className="bg-transparent outline-none text-[11px] w-full text-[#1D2939] appearance-none cursor-pointer"
//                     >
//                       <option value="">Select Employee</option>
//                       {uniqueEmployees.map((name, i) => <option key={i} value={name}>{name}</option>)}
//                     </select>
//                     <ChevronDown className="w-4 h-4 text-gray-400 pointer-events-none" />
//                   </div>
//                 )}
//               </div>

//               <button 
//                 onClick={handleApply}
//                 className="w-full bg-[#0A1629] text-white py-3.5 rounded-lg text-[12px] font-bold shadow-lg mt-4"
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         </>
//       )}

//       {/* TABLE DATA AREA */}
//       <div className="w-full overflow-hidden border border-gray-50 rounded-xl shadow-sm">
//         <table className="w-full border-collapse bg-white text-[12px]">
//           <thead className="bg-gray-50/50">
//             <tr className="text-[10px] font-bold tracking-wider uppercase text-left border-b border-gray-100">
//               <th className="px-6 py-4 text-[#1D2939]">CHECKIN</th>
//               <th className="px-6 py-4 text-[#1D2939]">EMPLOYEE NAME</th>
//               <th className="px-6 py-4 text-[#1D2939]">CHECKIN AT</th>
//               <th className="px-6 py-4 text-[#1D2939]">OFFICE</th>
//               <th className="px-6 py-4 text-[#1D2939]">CHECKOUT AT</th>
//               <th className="px-6 py-4 text-[#1D2939]">CHECKOUT</th>
//               <th className="px-6 py-4 text-right text-[#1D2939]">LOGS</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {filteredData.length > 0 ? (
//               filteredData.map((row, i) => (
//                 <tr key={i} className="group hover:bg-gray-50/40 transition-all">
//                   <td className="px-6 py-5">
//                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-bold text-[10px]">
//                       {row.name.charAt(0).toUpperCase()}
//                     </div>
//                   </td>
//                   <td className="px-6 py-5 font-bold text-[#1D2939]">{row.name}</td>
//                   <td className="px-6 py-5 text-gray-400">{row.checkinAt}</td>
//                   <td className="px-6 py-5 text-blue-700">
//                     <span className="bg-[#EFF6FF] px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap">
//                       {row.office}
//                     </span>
//                   </td>
//                   <td className="px-6 py-5 text-gray-400">{row.checkoutAt || "-"}</td>
//                   <td className="px-6 py-5">
//                     <span className={`px-3 py-1 rounded text-[10px] font-bold ${row.checkoutStatus === 'DONE' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>
//                       {row.checkoutStatus}
//                     </span>
//                   </td>
//                   <td className="px-6 py-5 text-right font-bold text-[#1D2939]">{row.logs}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={7} className="text-center py-16 text-gray-400 text-[12px] italic">
//                   No attendance found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmployeesAttendance;