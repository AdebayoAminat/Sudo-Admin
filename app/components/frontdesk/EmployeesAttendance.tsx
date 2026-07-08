
  // "use client";

  // import React, { useState } from "react";
  // import Image from "next/image"; 

  // import { Download, ChevronDown, ChevronUp, X } from "lucide-react";

  // const EmployeesAttendance = () => {
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [isFilterOpen, setIsFilterOpen] = useState(false);
    
  //   // Accordion States
  //   const [dateAccordionOpen, setDateAccordionOpen] = useState(false);
  //   const [empAccordionOpen, setEmpAccordionOpen] = useState(false);

  //   // Filter Input States
  //   const [startDate, setStartDate] = useState("");
  //   const [endDate, setEndDate] = useState("");
  //   const [selectedEmployee, setSelectedEmployee] = useState("");
  //   const [appliedCount, setAppliedCount] = useState(0);

  //   const data = [
  //     { name: "Stephen Chris", checkinAt: "Apr 20, 2026, 8:00:08 AM", office: "WUSE II ABUJA", checkoutAt: "Apr 20, 2026, 5:10:22 PM", checkoutStatus: "DONE", logs: "2" },
  //     { name: "Ayodeji Adewemi", checkinAt: "Apr 20, 2026, 8:05:30 AM", office: "WUSE II ABUJA", checkoutAt: "Apr 20, 2026, 5:02:11 PM", checkoutStatus: "DONE", logs: "1" },
  //     { name: "Morenikeji Olakunle", checkinAt: "Apr 20, 2026, 8:10:31 AM", office: "WUSE II ABUJA", checkoutAt: "", checkoutStatus: "PENDING", logs: "1" },
  //     { name: "Queen Sunday Jatto", checkinAt: "Apr 20, 2026, 8:16:30 AM", office: "WUSE II ABUJA", checkoutAt: "Apr 20, 2026, 4:55:00 PM", checkoutStatus: "DONE", logs: "1" },
  //   ];

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

  //   const filteredData = data.filter((emp) =>
  //     emp.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

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
  //                     {/* CALENDAR ICON FROM IMAGE */}
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
  //                       className="bg-transparent outline-none text-[11px] w-full text-gray-400 appearance-none cursor-pointer"
  //                     >
  //                       <option value="">Select Employee</option>
  //                       {data.map((emp, i) => <option key={i} value={emp.name}>{emp.name}</option>)}
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

  //       {/* TABLE */}
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
  //             {filteredData.map((row, i) => (
  //               <tr key={i} className="group hover:bg-gray-50/40 transition-all">
  //                 <td className="px-6 py-5">
  //                   <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 font-bold text-[10px]">
  //                     {row.name.charAt(0)}
  //                   </div>
  //                 </td>
  //                 <td className="px-6 py-5 font-bold text-[#1D2939]">{row.name}</td>
  //                 <td className="px-6 py-5 text-gray-400">{row.checkinAt}</td>
  //                 <td className="px-6 py-5 text-blue-700">
  //                   <span className="bg-[#EFF6FF] px-4 py-1.5 rounded-full text-[10px] font-bold">{row.office}</span>
  //                 </td>
  //                 <td className="px-6 py-5 text-gray-400">{row.checkoutAt || "-"}</td>

  //                 <td className="px-6 py-5">
  //                   <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 font-bold text-[10px]">
  //                     {row.name.charAt(0)}
  //                   </div>
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

  "use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import FrontDeskService from "@/app/service/frontdesk.service";
import employeesData from "@/assets/employees.json";

const frontDeskService = new FrontDeskService();

const EmployeesAttendance = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [dateAccordionOpen, setDateAccordionOpen] = useState(false);
  const [employeeAccordionOpen, setEmployeeAccordionOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [appliedStart, setAppliedStart] = useState("");
  const [appliedEnd, setAppliedEnd] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [appliedEmployee, setAppliedEmployee] = useState<any>(null);
  const [employeeSearch, setEmployeeSearch] = useState("");
  const [appliedCount, setAppliedCount] = useState(0);
  const [attendance, setAttendance] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const fetchAttendance = async () => {
      setLoading(true);
      try {
        const res = await frontDeskService.getEmployeesAttendance();
        if (res?.data) {
          setAttendance(Array.isArray(res.data?.data) ? res.data.data : []);
        }
      } catch (err) {
        console.error("Failed to fetch employees attendance:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAttendance();
  }, []);

  // Employees from JSON for the filter dropdown
  const employeesList: any[] = Array.isArray(employeesData) ? employeesData : [];

  const filteredEmployeeOptions = employeesList.filter((emp: any) =>
    (emp.name || emp.employeeName || "")
      .toLowerCase()
      .includes(employeeSearch.toLowerCase())
  );

  const currentFilterCount = useMemo(() => {
    let count = 0;
    if (startDate || endDate) count++;
    if (selectedEmployee) count++;
    return count;
  }, [startDate, endDate, selectedEmployee]);

  const handleClearAll = () => {
    setStartDate("");
    setEndDate("");
    setAppliedStart("");
    setAppliedEnd("");
    setSelectedEmployee(null);
    setAppliedEmployee(null);
    setEmployeeSearch("");
    setAppliedCount(0);
    setDateAccordionOpen(false);
    setEmployeeAccordionOpen(false);
  };

  const handleApply = () => {
    setAppliedStart(startDate);
    setAppliedEnd(endDate);
    setAppliedEmployee(selectedEmployee);
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

  const formatDateShort = (dateStr: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit", month: "2-digit", year: "numeric",
    });
  };

  // Filter attendance by date range + employee
  const filteredData = useMemo(() => {
    return attendance.filter((row) => {
      const matchesSearch = searchQuery
        ? (row.employeeName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
          (row.employeeNo || "").toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      let matchesDate = true;
      if (appliedStart || appliedEnd) {
        const checkInTime = row.checkIn ? new Date(row.checkIn).getTime() : null;
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

      const matchesEmployee = appliedEmployee
        ? (row.employeeNo || "").toLowerCase() === (appliedEmployee.employeeNo || appliedEmployee.id || "").toLowerCase() ||
          (row.employeeName || "").toLowerCase().includes(
            (appliedEmployee.name || appliedEmployee.employeeName || "").toLowerCase()
          )
        : true;

      return matchesSearch && matchesDate && matchesEmployee;
    });
  }, [attendance, searchQuery, appliedStart, appliedEnd, appliedEmployee]);

  // Download handler
  const handleDownload = async () => {
    setDownloading(true);
    try {
      let data: any[] = [];

      if (appliedEmployee) {
        // Single employee — call getSingleEmployeeData
        const empId = appliedEmployee.employeeNo || appliedEmployee.id;
        const res = await frontDeskService.getSingleEmployeeData(empId);
        data = Array.isArray(res?.data?.data) ? res.data.data : [];
      } else {
        // All employees — call getAllEmployeesData
        const res = await frontDeskService.getAllEmployeesData();
        data = Array.isArray(res?.data?.data) ? res.data.data : [];
      }

      if (!data.length) return;

      // Build HTML sheet styled like the image
      const rows = data.map((row: any) => `
        <tr>
          <td>${formatDateShort(row.date || row.checkIn)}</td>
          <td>${formatDate(row.checkIn)}</td>
          <td>${row.employeeNo || "—"}</td>
          <td>${row.employeeName || "—"}</td>
          <td>${row.employeePhoneNumber || "—"}</td>
          <td>${row.checkInOffice || row.office || "—"}</td>
          <td>${row.checkOut ? formatDate(row.checkOut) : ""}</td>
          <td>${row.logs || ""}</td>
        </tr>
      `).join("");

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Attendance Report</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 24px; background: #fff; color: #000; }
              h2 { font-size: 14px; font-weight: bold; margin-bottom: 16px; }
              table { width: 100%; border-collapse: collapse; font-size: 11px; }
              th { background: #f5f5f5; font-weight: bold; text-align: left; padding: 8px 10px; border: 1px solid #e0e0e0; }
              td { padding: 7px 10px; border: 1px solid #e0e0e0; }
              tr:nth-child(even) { background: #fafafa; }
            </style>
          </head>
          <body>
            <h2>Attendance Report${appliedEmployee ? ` — ${appliedEmployee.name || appliedEmployee.employeeName}` : ""}</h2>
            <table>
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>CHECKIN AT</th>
                  <th>EMPLOYEE ID</th>
                  <th>EMPLOYEE NAME</th>
                  <th>PHONE NO</th>
                  <th>OFFICE</th>
                  <th>CHECKOUT AT</th>
                  <th>LOGS</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </body>
        </html>
      `;

      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `attendance_${appliedEmployee ? (appliedEmployee.name || "employee").replace(/\s+/g, "_") : "all"}_${new Date().toISOString().split("T")[0]}.html`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to download attendance:", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="relative space-y-6 animate-in fade-in duration-500">

      {/* UTILITY BAR */}
      <div className="flex justify-between items-end">
        <p className="text-[12px] text-gray-400 font-medium pb-2">
          Showing{" "}
          <span className="text-[#1D2939] font-bold">
            {filteredData.length} Record{filteredData.length !== 1 ? "s" : ""}
          </span>
        </p>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Employee name or ID..."
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

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-2 px-4 h-[44px] bg-[#0A1629] text-white text-[12px] font-bold rounded-lg hover:bg-black transition-all disabled:opacity-60"
          >
           
            {downloading ? "Downloading..." : "Download"}
          </button>
        </div>
      </div>

      {/* FILTER DROPDOWN */}
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

            <div className="p-5 space-y-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 bg-[#EEF2FF] text-[#4F46E5] px-3 py-1.5 rounded-md text-[11px] font-bold">
                  {currentFilterCount} filter(s) selected
                </div>
                <button onClick={handleClearAll} className="text-[11px] font-bold text-[#1D2939] underline hover:text-blue-600">
                  Clear All
                </button>
              </div>

              {/* DATE RANGE ACCORDION */}
              <div className="space-y-2 border-b border-gray-50 pb-4">
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
                  <div className="space-y-2 animate-in slide-in-from-top-1 duration-200 pt-1">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">From</label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border border-gray-100 rounded-lg p-2.5 bg-[#F9FAFB] outline-none text-[12px] text-gray-600 w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">To</label>
                      <input
                        type="date"
                        value={endDate}
                        min={startDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border border-gray-100 rounded-lg p-2.5 bg-[#F9FAFB] outline-none text-[12px] text-gray-600 w-full"
                      />
                    </div>
                    {startDate && endDate && (
                      <p className="text-[10px] text-[#4F46E5] font-medium pt-1">
                        {new Date(startDate).toDateString()} → {new Date(endDate).toDateString()}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* EMPLOYEE ACCORDION */}
              <div className="space-y-2 pb-2">
                <button
                  onClick={() => setEmployeeAccordionOpen(!employeeAccordionOpen)}
                  className="w-full flex justify-between items-center text-[12px] font-bold text-[#1D2939]"
                >
                  <span>Employee {selectedEmployee ? `— ${selectedEmployee.name || selectedEmployee.employeeName}` : ""}</span>
                  {employeeAccordionOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>

                {employeeAccordionOpen && (
                  <div className="animate-in slide-in-from-top-1 duration-200 space-y-2 pt-1">
                    <input
                      type="text"
                      placeholder="Search employee..."
                      value={employeeSearch}
                      onChange={(e) => setEmployeeSearch(e.target.value)}
                      className="w-full border border-gray-100 rounded-lg px-3 py-2 bg-[#F9FAFB] outline-none text-[12px] text-gray-600"
                    />
                    <div className="max-h-[180px] overflow-y-auto divide-y divide-gray-50 border border-gray-100 rounded-lg">
                      {filteredEmployeeOptions.map((emp: any, i: number) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedEmployee(emp);
                            setEmployeeSearch("");
                          }}
                          className={`w-full text-left px-3 py-2.5 text-[12px] transition-colors ${
                            selectedEmployee?._id === emp._id
                              ? "bg-[#EEF2FF] text-[#4F46E5] font-bold"
                              : "hover:bg-gray-50 text-[#1D2939]"
                          }`}
                        >
                          <span className="font-medium">{emp.name || emp.employeeName}</span>
                          {(emp.employeeNo || emp.id) && (
                            <span className="text-gray-400 ml-2 text-[10px]">#{emp.employeeNo || emp.id}</span>
                          )}
                        </button>
                      ))}
                      {filteredEmployeeOptions.length === 0 && (
                        <p className="text-center py-4 text-[11px] text-gray-400">No employees found</p>
                      )}
                    </div>
                    {selectedEmployee && (
                      <button
                        onClick={() => setSelectedEmployee(null)}
                        className="text-[10px] text-red-400 hover:text-red-600 font-medium"
                      >
                        Clear employee selection
                      </button>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={handleApply}
                className="w-full bg-[#0A1629] text-white py-3.5 rounded-lg text-[12px] font-bold shadow-lg active:scale-[0.98] transition-all"
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
              <th className="px-6 py-4">EMPLOYEE NAME</th>
              <th className="px-6 py-4 text-center">CHECKIN AT</th>
              <th className="px-6 py-4">OFFICE</th>
              <th className="px-6 py-4 text-center">CHECKOUT AT</th>
              <th className="px-6 py-4 text-center">CHECKOUT</th>
              <th className="px-6 py-4 text-right">LOGS</th>
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
            ) : filteredData.length > 0 ? (
              filteredData.map((row, i) => (
                <tr key={row._id || i} className="text-[12px] hover:bg-gray-50 transition-colors">

                  {/* CHECKIN PHOTO */}
                  <td className="px-6 py-5">
                    {row.photo ? (
                      <img
                        src={row.photo}
                        alt={row.employeeName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 font-bold text-[10px]">
                        {(row.employeeName || "").charAt(0)}
                      </div>
                    )}
                  </td>

                  <td className="px-6 py-5">
                    <p className="font-bold text-[#1D2939]">{row.employeeName}</p>
                    <p className="text-[10px] text-gray-400">{row.employeeNo}</p>
                  </td>

                  <td className="px-6 py-5 text-gray-400 text-center whitespace-nowrap">
                    {formatDate(row.checkIn)}
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase whitespace-nowrap">
                      {row.checkInOffice || row.office}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-gray-400 text-center whitespace-nowrap">
                    {row.checkOut ? formatDate(row.checkOut) : "—"}
                  </td>

                  {/* CHECKOUT PHOTO */}
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      {row.checkOut && row.checkOutPhoto ? (
                        <img
                          src={row.checkOutPhoto}
                          alt={row.employeeName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : row.checkOut ? (
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 font-bold text-[10px]">
                          {(row.employeeName || "").charAt(0)}
                        </div>
                      ) : (
                        <span className="text-gray-300 text-[11px]">—</span>
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-5 text-right font-bold text-[#1D2939]">
                    {row.logs}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-16 text-gray-400 text-[12px] italic">
                  No records found{appliedCount > 0 ? " for the selected filters" : ""}.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesAttendance;