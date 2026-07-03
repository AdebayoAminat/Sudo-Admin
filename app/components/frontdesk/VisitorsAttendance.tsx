


// "use client";

// import React, { useState } from "react";
// import Image from "next/image"; 
// import { X, ChevronUp, ChevronDown } from "lucide-react";

// const VisitorsAttendance = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [dateAccordionOpen, setDateAccordionOpen] = useState(false);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [appliedCount, setAppliedCount] = useState(0);

//   const visitorsData = [
//     { name: "John Maxwell", purpose: "Business Meeting", checkin: "Apr 28, 2026, 10:15:22 AM", office: "WUSE II ABUJA", checkoutAt: "Apr 28, 2026, 11:30:10 AM", host: "Admin" },
//     { name: "Sarah Jenkins", purpose: "Interview", checkin: "Apr 28, 2026, 11:30:05 AM", office: "WUSE II ABUJA", checkoutAt: "", host: "HR Department" },
//     { name: "Michael Chen", purpose: "Delivery", checkin: "Apr 29, 2026, 09:45:12 AM", office: "WUSE II ABUJA", checkoutAt: "Apr 29, 2026, 10:15:00 AM", host: "Reception" },
//   ];

//   const currentFilterCount = [startDate, endDate].filter(Boolean).length > 0 ? 1 : 0;

//   const handleClearAll = () => {
//     setStartDate("");
//     setEndDate("");
//     setAppliedCount(0);
//     setDateAccordionOpen(false);
//   };

//   const handleApply = () => {
//     setAppliedCount(currentFilterCount);
//     setIsFilterOpen(false);
//   };

//   const filteredVisitors = visitorsData.filter((v) =>
//     v.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="relative space-y-6 animate-in fade-in duration-500">
      
//       {/* UTILITY BAR */}
//       <div className="flex justify-between items-end">
//         <p className="text-[12px] text-gray-400 font-medium pb-2">
//           Showing <span className="text-[#1D2939] font-bold">{filteredVisitors.length} Visitor</span>
//         </p>

//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Visitor name, email, ..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-[280px] h-[44px] pl-4 pr-10 bg-[#F9FAFB] border border-gray-100 rounded-lg text-[12px] outline-none"
//             />
//             {/* SEARCH ICON FROM IMAGE */}
//             <div className="absolute right-3 top-1/2 -translate-y-1/2">
//               <Image src="/images/search.svg" alt="Search" width={16} height={16} />
//             </div>
//           </div>

//           <button 
//             onClick={() => setIsFilterOpen(!isFilterOpen)}
//             className="flex items-center gap-2 px-4 h-[44px] text-[12px] font-bold text-[#1D2939] hover:bg-gray-50 rounded-lg transition-all"
//           >
//             <div className="relative">
//               {/* FILTER ICON FROM IMAGE */}
//               <Image src="/images/filter.svg" alt="Filter" width={16} height={16} />
//               <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#1D2939] text-white text-[8px] rounded-full flex items-center justify-center">
//                 {appliedCount}
//               </span>
//             </div>
//             Filter(s)
//           </button>
//         </div>
//       </div>

//       {/* FILTER MODAL */}
//       {isFilterOpen && (
//         <>
//           <div className="fixed inset-0 z-20" onClick={() => setIsFilterOpen(false)} />
//           <div className="absolute right-0 top-14 w-[380px] bg-white rounded-xl shadow-2xl z-30 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
//             <div className="p-5 border-b border-gray-50 flex justify-between items-center">
//               <h3 className="text-[14px] font-bold text-[#1D2939]">Filters</h3>
//               <button onClick={() => setIsFilterOpen(false)}>
//                 <X className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
//               </button>
//             </div>

//             <div className="p-5 space-y-6">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2 bg-[#EEF2FF] text-[#4F46E5] px-3 py-1.5 rounded-md text-[11px] font-bold">
//                   {currentFilterCount} filter(s) applied 
//                   <ChevronDown className="w-3 h-3" />
//                 </div>
//                 <button onClick={handleClearAll} className="text-[11px] font-bold text-[#1D2939] underline hover:text-blue-600">
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
//                   {dateAccordionOpen ? (
//                     <ChevronUp className="w-4 h-4 text-gray-400" />
//                   ) : (
//                     <ChevronDown className="w-4 h-4 text-gray-400" />
//                   )}
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
//                     {/* CALENDAR ICON FROM IMAGE */}
//                     <Image src="/images/calendar-icon.svg" alt="Calendar" width={16} height={16} />
//                   </div>
//                 )}
//               </div>

//               <button 
//                 onClick={handleApply}
//                 className="w-full bg-[#0A1629] text-white py-3.5 rounded-lg text-[12px] font-bold shadow-lg mt-4 active:scale-[0.98] transition-all"
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         </>
//       )}
      
//       {/* TABLE */}
//       <div className="bg-white border border-gray-50 rounded-xl overflow-hidden shadow-sm">
//         <table className="w-full text-left">
//           <thead className="bg-gray-50/30">
//             <tr className="text-[10px] font-bold text-[#1D2939] tracking-wider uppercase border-b border-gray-50">
//               <th className="px-6 py-4">CHECKIN</th>
//               <th className="px-6 py-4">VISITOR NAME</th>
//               <th className="px-6 py-4 text-center">CHECKIN AT</th>
//               <th className="px-6 py-4">OFFICE</th>
//               <th className="px-6 py-4 text-center">CHECKOUT AT</th>
//               <th className="px-6 py-4 text-center">CHECKOUT</th>
//               <th className="px-6 py-4 text-right">HOST</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {filteredVisitors.map((visitor, i) => (
//               <tr key={i} className="text-[12px] hover:bg-gray-50 transition-colors">
//                 <td className="px-6 py-5">
//                   <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 font-bold text-[10px]"> 
//                     {visitor.name.split(' ').map(n => n[0]).join('')}
//                   </div>
//                 </td>
//                 <td className="px-6 py-5 font-bold text-[#1D2939]">{visitor.name}</td>
//                 <td className="px-6 py-5 text-gray-400 text-center">{visitor.checkin}</td>
//                 <td className="px-6 py-5">
//                   <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase whitespace-nowrap">
//                     {visitor.office}
//                   </span>
//                 </td>
//                 <td className="px-6 py-5 text-gray-400 text-center">{visitor.checkoutAt || "-"}</td>

//                 <td className="px-6 py-5">
//                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 font-bold text-[10px]">
//                     {visitor.name.split(' ').map(n => n[0]).join('')}
//                   </div>
//                   </td>

//                 <td className="px-6 py-5 text-right font-medium text-[#1D2939]">
//                   {visitor.host}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default VisitorsAttendance;


"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import FrontDeskService from "@/app/service/frontdesk.service";

const frontDeskService = new FrontDeskService();

const VisitorsAttendance = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [dateAccordionOpen, setDateAccordionOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [appliedStart, setAppliedStart] = useState("");
  const [appliedEnd, setAppliedEnd] = useState("");
  const [appliedCount, setAppliedCount] = useState(0);
  const [visitors, setVisitors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      setLoading(true);
      try {
        const res = await frontDeskService.getVisitorsAttendance();
        if (res?.data) {
          setVisitors(Array.isArray(res.data?.data) ? res.data.data : []);
        }
      } catch (err) {
        console.error("Failed to fetch visitors:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchVisitors();
  }, []);

  const currentFilterCount = [startDate, endDate].filter(Boolean).length > 0 ? 1 : 0;

  const handleClearAll = () => {
    setStartDate("");
    setEndDate("");
    setAppliedStart("");
    setAppliedEnd("");
    setAppliedCount(0);
    setDateAccordionOpen(false);
  };

  const handleApply = () => {
    setAppliedStart(startDate);
    setAppliedEnd(endDate);
    setAppliedCount(currentFilterCount);
    setIsFilterOpen(false);
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true,
    });
  };

  const filteredVisitors = useMemo(() => {
    return visitors.filter((v) => {
      const matchesSearch = (v.name || "").toLowerCase().includes(searchQuery.toLowerCase());

      let matchesDate = true;
      if (appliedStart || appliedEnd) {
        const checkInTime = v.checkIn ? new Date(v.checkIn).getTime() : null;
        if (!checkInTime) return false;
        if (appliedStart) {
          const start = new Date(appliedStart).setHours(0, 0, 0, 0);
          if (checkInTime < start) matchesDate = false;
        }
        if (appliedEnd) {
          const end = new Date(appliedEnd).setHours(23, 59, 59, 999);
          if (checkInTime > end) matchesDate = false;
        }
      }

      return matchesSearch && matchesDate;
    });
  }, [visitors, searchQuery, appliedStart, appliedEnd]);

  return (
    <div className="relative space-y-6 animate-in fade-in duration-500">

      {/* UTILITY BAR */}
      <div className="flex justify-between items-end">
        <p className="text-[12px] text-gray-400 font-medium pb-2">
          Showing <span className="text-[#1D2939] font-bold">{filteredVisitors.length} Visitor</span>
        </p>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Visitor name, email, ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[280px] h-[44px] pl-4 pr-10 bg-[#F9FAFB] border border-gray-100 rounded-lg text-[12px] outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image src="/images/search.svg" alt="Search" width={16} height={16} />
            </div>
          </div>

          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 h-[44px] text-[12px] font-bold text-[#1D2939] hover:bg-gray-50 rounded-lg transition-all"
          >
            <div className="relative">
              <Image src="/images/filter.svg" alt="Filter" width={16} height={16} />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#1D2939] text-white text-[8px] rounded-full flex items-center justify-center">
                {appliedCount}
              </span>
            </div>
            Filter(s)
          </button>
        </div>
      </div>

      {/* FILTER MODAL */}
      {isFilterOpen && (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute right-0 top-14 w-[380px] bg-white rounded-xl shadow-2xl z-30 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="p-5 border-b border-gray-50 flex justify-between items-center">
              <h3 className="text-[14px] font-bold text-[#1D2939]">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
              </button>
            </div>

            <div className="p-5 space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 bg-[#EEF2FF] text-[#4F46E5] px-3 py-1.5 rounded-md text-[11px] font-bold">
                  {currentFilterCount} filter(s) applied
                  <ChevronDown className="w-3 h-3" />
                </div>
                <button onClick={handleClearAll} className="text-[11px] font-bold text-[#1D2939] underline hover:text-blue-600">
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
                  {dateAccordionOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
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
                      min={startDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="bg-transparent outline-none text-[11px] w-full text-gray-500 cursor-pointer"
                    />
                    <Image src="/images/calendar-icon.svg" alt="Calendar" width={16} height={16} />
                  </div>
                )}
              </div>

              <button
                onClick={handleApply}
                className="w-full bg-[#0A1629] text-white py-3.5 rounded-lg text-[12px] font-bold shadow-lg mt-4 active:scale-[0.98] transition-all"
              >
                Apply
              </button>
            </div>
          </div>
        </>
      )}

      {/* TABLE */}
      <div className="bg-white border border-gray-50 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50/30">
            <tr className="text-[10px] font-bold text-[#1D2939] tracking-wider uppercase border-b border-gray-50">
              <th className="px-6 py-4">CHECKIN</th>
              <th className="px-6 py-4">VISITOR NAME</th>
              <th className="px-6 py-4 text-center">CHECKIN AT</th>
              <th className="px-6 py-4">OFFICE</th>
              <th className="px-6 py-4 text-center">CHECKOUT AT</th>
              <th className="px-6 py-4 text-center">CHECKOUT</th>
              <th className="px-6 py-4 text-right">HOST</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              [...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td colSpan={7} className="px-6 py-4">
                    <div className="h-10 bg-gray-100 rounded animate-pulse" />
                  </td>
                </tr>
              ))
            ) : filteredVisitors.length > 0 ? (
              filteredVisitors.map((visitor, i) => (
                <tr key={visitor._id || i} className="text-[12px] hover:bg-gray-50 transition-colors">

                  {/* CHECKIN PHOTO */}
                  <td className="px-6 py-5">
                    {visitor.photo ? (
                      <img
                        src={visitor.photo}
                        alt={visitor.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 font-bold text-[10px]">
                        {(visitor.name || "").split(" ").map((n: string) => n[0]).join("")}
                      </div>
                    )}
                  </td>

                  <td className="px-6 py-5 font-bold text-[#1D2939]">{visitor.name}</td>
                  <td className="px-6 py-5 text-gray-400 text-center">{formatDate(visitor.checkIn)}</td>
                  <td className="px-6 py-5">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase whitespace-nowrap">
                      {visitor.checkInOffice}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-gray-400 text-center">
                    {visitor.checkOut ? formatDate(visitor.checkOut) : "-"}
                  </td>

                  {/* CHECKOUT PHOTO */}
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      {visitor.checkOut && visitor.photo ? (
                        <img
                          src={visitor.photo}
                          alt={visitor.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 font-bold text-[10px]">
                          {(visitor.name || "").split(" ").map((n: string) => n[0]).join("")}
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-5 text-right font-medium text-[#1D2939]">
                    {visitor.employeeName}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-16 text-gray-400 text-[12px] italic">
                  No visitors found{appliedCount > 0 ? " for the selected date range" : ""}.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisitorsAttendance;