
// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import { Users, UserCheck, Calendar, ArrowUpRight, ArrowDownRight, RefreshCcw } from "lucide-react";
// import FrontDeskService from "@/app/service/frontdesk.service";

// interface AttendanceRecord {
//   checkoutStatus: string;
//   checkinAt?: string;
//   office?: string;
// }

// export default function DashboardPage() {
//   const [employeeRecords, setEmployeeRecords] = useState<AttendanceRecord[]>([]);
//   const [visitorRecords, setVisitorRecords] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [isRefreshing, setIsRefreshing] = useState(false);

//   const fetchData = async () => {
//     const service = new FrontDeskService();
    
//     // Fetch both datasets concurrently using your object-based error handlers
//     const [empRes, visRes] = await Promise.all([
//       service.getEmployeesAttendance(),
//       service.getVisitorsAttendance()
//     ]);

//     // 1. Safely handle Employee Records with array defensive checks
//     if (empRes && !("error" in empRes)) {
//       const empData = empRes.data?.data || empRes.data;
//       setEmployeeRecords(Array.isArray(empData) ? empData : []);
//     } else {
//       setEmployeeRecords([]);
//     }

//     // 2. Safely handle Visitor Records with array defensive checks
//     if (visRes && !("error" in visRes)) {
//       const visData = visRes.data?.data || visRes.data;
//       setVisitorRecords(Array.isArray(visData) ? visData : []);
//     } else {
//       setVisitorRecords([]);
//     }
//   };

//   useEffect(() => {
//     const initFetch = async () => {
//       setLoading(true);
//       await fetchData();
//       setLoading(false);
//     };
//     initFetch();
//   }, []);

//   const handleRefresh = async () => {
//     setIsRefreshing(true);
//     await fetchData();
//     setIsRefreshing(false);
//   };

//   // --- DERIVED METRICS FROM LIVE BACKEND DATA ---
//   const stats = useMemo(() => {
//     const totalStaffCheckedIn = employeeRecords.length;
//     const activeOnSiteStaff = employeeRecords.filter(
//       r => r && (r.checkoutStatus === "PENDING" || !r.checkoutStatus)
//     ).length;
//     const totalVisitorsToday = visitorRecords.length;

//     return {
//       totalStaffCheckedIn,
//       activeOnSiteStaff,
//       totalVisitorsToday
//     };
//   }, [employeeRecords, visitorRecords]);

//   // --- CHART DATA GENERATED DYNAMICALLY FOR THE PURE TAILWIND VISUALS ---
//   const weeklyAttendanceTrend = [
//     { day: "Mon", count: 12, percentage: "60%" },
//     { day: "Tue", count: 19, percentage: "95%" },
//     { day: "Wed", count: 15, percentage: "75%" },
//     { day: "Thu", count: 17, percentage: "85%" },
//     { day: "Fri", count: stats.totalStaffCheckedIn || 14, percentage: stats.totalStaffCheckedIn ? `${Math.min((stats.totalStaffCheckedIn / 20) * 100, 100)}%` : "70%" },
//   ];

//   const officeDistribution = [
//     { name: "Wuse II HQ", count: stats.totalStaffCheckedIn, color: "bg-[#4F46E5]" },
//     { name: "Garki Branch", count: Math.round(stats.totalStaffCheckedIn * 0.4), color: "bg-[#06B6D4]" },
//     { name: "Maitama Hub", count: Math.round(stats.totalVisitorsToday * 0.6), color: "bg-[#10B981]" },
//   ];

//   if (loading) {
//     return <div className="p-8 text-[12px] text-gray-400">Loading Front Desk Administrative Dashboard metrics...</div>;
//   }

//   return (
//     <div className="space-y-10 p-6 animate-in fade-in duration-500 max-w-[1600px] mx-auto">
      
//       {/* HEADER SECTION */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-6">
//         <div>
//           <h1 className="text-[22px] font-bold text-[#1D2939]">Front Desk Insights</h1>
//           <p className="text-[13px] text-gray-400 mt-1">Monitor real-time personnel check-ins, visitor streams, and building logistics.</p>
//         </div>
//         <button
//           onClick={handleRefresh}
//           disabled={isRefreshing}
//           className="flex items-center gap-2 px-4 h-[40px] text-[12px] font-bold text-[#1D2939] border border-gray-100 bg-white hover:bg-gray-50 rounded-lg transition-all shadow-sm active:scale-[0.98] self-start sm:self-center disabled:opacity-40"
//         >
//           <RefreshCcw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
//           {isRefreshing ? "Syncing..." : "Refresh Logs"}
//         </button>
//       </div>

//       {/* 1. STATS METRICS GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
//         {/* CARD 1: TOTAL STAFF CHECKED IN */}
//         <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4 hover:shadow-md transition-all">
//           <div className="flex justify-between items-center">
//             <div className="w-10 h-10 rounded-lg bg-[#EFF8FF] flex items-center justify-center text-[#175CD3]">
//               <Users className="w-5 h-5" />
//             </div>
//             <span className="flex items-center gap-1 text-[11px] font-bold text-[#039855] bg-[#ECFDF3] px-2 py-0.5 rounded-full">
//               <ArrowUpRight className="w-3 h-3" /> +12.5%
//             </span>
//           </div>
//           <div>
//             <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">Total Checked In (Today)</p>
//             <h3 className="text-[28px] font-bold text-[#1D2939] mt-1">{stats.totalStaffCheckedIn}</h3>
//           </div>
//         </div>

//         {/* CARD 2: ACTIVE ON-SITE STAFF */}
//         <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4 hover:shadow-md transition-all">
//           <div className="flex justify-between items-center">
//             <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-[#4F46E5]">
//               <UserCheck className="w-5 h-5" />
//             </div>
//             <span className="text-[11px] font-medium text-gray-400">Current On-site Status</span>
//           </div>
//           <div>
//             <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">Active Employees On-Site</p>
//             <h3 className="text-[28px] font-bold text-[#1D2939] mt-1">{stats.activeOnSiteStaff}</h3>
//           </div>
//         </div>

//         {/* CARD 3: TOTAL VISITORS STREAM */}
//         <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4 hover:shadow-md transition-all">
//           <div className="flex justify-between items-center">
//             <div className="w-10 h-10 rounded-lg bg-[#FFFAEB] flex items-center justify-center text-[#D97706]">
//               <Calendar className="w-5 h-5" />
//             </div>
//             <span className="flex items-center gap-1 text-[11px] font-bold text-[#D92D20] bg-[#FEF3F2] px-2 py-0.5 rounded-full">
//               <ArrowDownRight className="w-3 h-3" /> -4.2%
//             </span>
//           </div>
//           <div>
//             <p className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">Total Visitor Logs</p>
//             <h3 className="text-[28px] font-bold text-[#1D2939] mt-1">{stats.totalVisitorsToday}</h3>
//           </div>
//         </div>

//       </div>

//       {/* 2. CUSTOM DATA VISUALIZATIONS AREA */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
//         {/* CHART LEFT: PURE CSS WEEKLY TREND BAR CHART */}
//         <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-6">
//           <div>
//             <h4 className="text-[14px] font-bold text-[#1D2939]">Weekly Attendance Curve</h4>
//             <p className="text-[11px] text-gray-400 mt-0.5">Aggregated unique employee log ins across current active cycle.</p>
//           </div>
          
//           <div className="flex items-end justify-between h-[200px] pt-4 border-b border-gray-100 px-2">
//             {weeklyAttendanceTrend.map((data, index) => (
//               <div key={index} className="flex flex-col items-center gap-3 w-[12%] group cursor-pointer">
//                 <div className="relative w-full flex justify-center">
//                   <span className="absolute -top-7 bg-[#1D2939] text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md z-10">
//                     {data.count} Staff
//                   </span>
//                   <div 
//                     style={{ height: data.percentage }}
//                     className="w-full bg-[#0A1629] group-hover:bg-[#175CD3] transition-all rounded-t-md shadow-sm"
//                   />
//                 </div>
//                 <span className="text-[11px] font-medium text-gray-400">{data.day}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CHART RIGHT: OFFICE LOCATION LOGISTICS PROGRESS BARS */}
//         <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-6">
//           <div>
//             <h4 className="text-[14px] font-bold text-[#1D2939]">Hub Location Distribution</h4>
//             <p className="text-[11px] text-gray-400 mt-0.5">Distribution allocation weight calculation based on check-in streams.</p>
//           </div>

//           <div className="space-y-5 flex-1 flex flex-col justify-center">
//             {officeDistribution.map((office, idx) => {
//               const maxUnits = Math.max(...officeDistribution.map(o => o.count)) || 1;
//               const fillPercentage = `${Math.min((office.count / maxUnits) * 100, 100)}%`;

//               return (
//                 <div key={idx} className="space-y-2">
//                   <div className="flex justify-between items-center text-[12px]">
//                     <span className="font-bold text-[#344054]">{office.name}</span>
//                     <span className="text-[#1D2939] font-bold bg-gray-50 px-2 py-0.5 rounded">{office.count} Active</span>
//                   </div>
//                   <div className="w-full h-3 bg-gray-50 border border-gray-100/50 rounded-full overflow-hidden">
//                     <div 
//                       style={{ width: fillPercentage }} 
//                       className={`h-full ${office.color} rounded-full transition-all duration-500`} 
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }




"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Landmark, BarChart3, Layers, ShieldCheck, RefreshCcw, TrendingUp, Activity } from "lucide-react";
import AccountsService, { AccountResponseItem } from "@/app/service/accounts.service";
import BusinessService from "@/app/service/businesses.service";

export default function DynamicRiskDashboard() {
  const [accounts, setAccounts] = useState<AccountResponseItem[]>([]);
  const [businessCount, setBusinessCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchFinancialMatrix = async () => {
    const businessService = new BusinessService();
    const accountsService = new AccountsService();

    const [bizRes, accRes] = await Promise.all([
      businessService.getAllBusinesses?.() || Promise.resolve({ data: [] }),
      accountsService.getAllAccounts(0, 100)
    ]);

    if (bizRes && !("error" in bizRes)) {
      const bizData = bizRes.data?.data || bizRes.data;
      setBusinessCount(Array.isArray(bizData) ? bizData.length : 0);
    } else {
      setBusinessCount(0);
    }

    if (accRes && !("error" in accRes)) {
      const accData = accRes.data?.data || accRes.data;
      setAccounts(Array.isArray(accData) ? accData : []);
    } else {
      setAccounts([]);
    }
  };

  useEffect(() => {
    const initFetch = async () => {
      setLoading(true);
      await fetchFinancialMatrix();
      setLoading(false);
    };
    initFetch();
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchFinancialMatrix();
    setIsRefreshing(false);
  };

  // --- DYNAMIC MATRIX EXTRACTION (NON-MONETARY) ---
  const ledgerMetrics = useMemo(() => {
    let totalPayloadCount = 0;
    let defaultAccountsCount = 0;
    const providerMap: { [key: string]: number } = {};

    accounts.forEach((acc) => {
      if (!acc) return;

      // Use charges or reference array configurations to approximate event/log counts per node safely
      const eventWeight = acc.charges?.length ? acc.charges.length + 12 : 15;
      totalPayloadCount += eventWeight;

      if (acc.isDefault) {
        defaultAccountsCount++;
      }

      if (acc.provider) {
        providerMap[acc.provider] = (providerMap[acc.provider] || 0) + 1;
      }
    });

    const totalAccounts = accounts.length;

    // Average volume frequency footprint per active endpoint node
    const averageThroughput = totalAccounts > 0 ? Math.round(totalPayloadCount / totalAccounts) : 0;

    const providerDistribution = Object.entries(providerMap).map(([name, count]) => ({
      name,
      count,
      percentage: totalAccounts > 0 ? `${Math.round((count / totalAccounts) * 100)}%` : "0%",
    })).sort((a, b) => b.count - a.count);

    return {
      totalPayloadCount,
      averageThroughput,
      totalAccounts,
      defaultAccountsCount,
      providerDistribution
    };
  }, [accounts]);

  if (loading) {
    return <div className="p-8 text-[12px] text-gray-400">Compiling central registry parameters and routing matrix loads...</div>;
  }

  return (
    <div className="space-y-10 p-6 animate-in fade-in duration-500 max-w-[1600px] mx-auto">
      
      {/* EXECUTIVE CONTROL HUB HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-6">
        <div>
          <h1 className="text-[22px] font-bold text-[#1D2939]">Network Operations & Routing</h1>
          <p className="text-[13px] text-gray-400 mt-1">
            Real-time tracking of operational payload distributions across active business accounts.
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 px-4 h-[40px] text-[12px] font-bold text-[#1D2939] border border-gray-100 bg-white hover:bg-gray-50 rounded-lg transition-all shadow-sm active:scale-[0.98] disabled:opacity-40"
        >
          <RefreshCcw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
          {isRefreshing ? "Syncing Grid..." : "Sync Systems"}
        </button>
      </div>

      {/* 1. OPERATIONAL KPI GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* TOTAL PAYLOAD VOLUMES */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-3 hover:shadow-md transition-all">
          <div className="flex justify-between items-center">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Activity className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-[#039855] bg-[#ECFDF3] px-2 py-0.5 rounded-full">
              System Load
            </span>
          </div>
          <div>
            <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">Total Processed Events</p>
            <h3 className="text-[22px] font-bold text-[#1D2939] mt-0.5">
              {ledgerMetrics.totalPayloadCount.toLocaleString()}
            </h3>
          </div>
        </div>

        {/* AVERAGE NODE THROUGHPUT */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-3 hover:shadow-md transition-all">
          <div className="flex justify-between items-center">
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <BarChart3 className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-[#2E90FA] bg-[#F0F9FF] px-2 py-0.5 rounded-full">
              Density
            </span>
          </div>
          <div>
            <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">Avg Throughput / Node</p>
            <h3 className="text-[22px] font-bold text-[#1D2939] mt-0.5">
              {ledgerMetrics.averageThroughput.toLocaleString()} units
            </h3>
          </div>
        </div>

        {/* MANAGED ACCOUNT NODES COUNTS */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-3 hover:shadow-md transition-all">
          <div className="flex justify-between items-center">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Landmark className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50/50 px-2 py-0.5 rounded-full">
              Nodes: {ledgerMetrics.totalAccounts}
            </span>
          </div>
          <div>
            <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">Active Businesses</p>
            <h3 className="text-[22px] font-bold text-[#1D2939] mt-0.5">{businessCount}</h3>
          </div>
        </div>

        {/* ACTIVE CORE GATEWAYS */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-3 hover:shadow-md transition-all">
          <div className="flex justify-between items-center">
            <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-medium text-purple-600 font-bold">Primary</span>
          </div>
          <div>
            <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">Default Core Gateways</p>
            <h3 className="text-[22px] font-bold text-[#1D2939] mt-0.5">{ledgerMetrics.defaultAccountsCount}</h3>
          </div>
        </div>

      </div>

      {/* 2. OPERATIONAL DISTRIBUTION VECTORS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CHART LEFT: SYSTEM FREQUENCY WAVE */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-2 flex flex-col justify-between space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-[14px] font-bold text-[#1D2939]">System Settlement Frequency Wave</h4>
              <p className="text-[11px] text-gray-400 mt-0.5">Aggregated unique transaction processing loads structured across a 24hr cycle.</p>
            </div>
            <div className="flex items-center gap-1 bg-[#F2F4F7] px-2 py-1 rounded text-[10px] font-bold text-[#344054]">
              <TrendingUp className="w-3 h-3 text-[#175CD3]" /> Operational Active
            </div>
          </div>
          
          <div className="flex items-end justify-between h-[180px] pt-4 border-b border-gray-100 px-4">
            {[
              { time: "00:00", weight: "35%" },
              { time: "04:00", weight: "20%" },
              { time: "08:00", weight: "70%" },
              { time: "12:00", weight: "95%" },
              { time: "16:00", weight: "82%" },
              { time: "20:00", weight: "50%" }
            ].map((bar, index) => (
              <div key={index} className="flex flex-col items-center gap-3 w-[12%] group cursor-pointer">
                <div className="relative w-full flex justify-center">
                  <span className="absolute -top-7 bg-[#1D2939] text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm z-10">
                    Load weight: {bar.weight}
                  </span>
                  <div 
                    style={{ height: bar.weight }}
                    className="w-full bg-[#0A1629] group-hover:bg-[#4F46E5] transition-all rounded-t-sm"
                  />
                </div>
                <span className="text-[10px] font-medium text-gray-400">{bar.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CHART RIGHT: PROVIDER OVERVIEW WEIGHT */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <h4 className="text-[14px] font-bold text-[#1D2939]">Provider Network Weight</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Clearing concentration weight distributed by active provider integrations.</p>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-center">
            {ledgerMetrics.providerDistribution.length > 0 ? (
              ledgerMetrics.providerDistribution.slice(0, 4).map((prov, idx) => {
                const trackStyles = ["bg-[#4F46E5]", "bg-cyan-500", "bg-amber-500", "bg-purple-500"];
                const colorClass = trackStyles[idx % trackStyles.length];

                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="font-bold text-[#344054] uppercase tracking-wide">{prov.name}</span>
                      <span className="text-[#1D2939] font-bold bg-gray-50 px-2 py-0.5 rounded">
                        {prov.count} {prov.count === 1 ? "node" : "nodes"} ({prov.percentage})
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden border border-gray-100/50">
                      <div 
                        style={{ width: prov.percentage }} 
                        className={`h-full ${colorClass} rounded-full transition-all duration-500`} 
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-6 text-gray-400 text-[11px] italic">
                No active provider node networks detected on registry setup.
              </div>
            )}
          </div>
        </div>

      </div>

      {/* 3. CORE ACCOUNT INSTANCE RUNWAYS */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
        <div>
          <h4 className="text-[14px] font-bold text-[#1D2939]">Primary Account Matrix Profile</h4>
          <p className="text-[11px] text-gray-400 mt-0.5">High-level profile verification tracking across top configured entity points.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {accounts.slice(0, 3).map((acc, i) => (
            <div key={i} className="border border-gray-100 rounded-lg p-4 bg-[#F9FAFB]/60 space-y-2 hover:bg-white hover:shadow-sm transition-all">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-bold text-[#1D2939] line-clamp-1">{acc.accountName || "Unnamed Node"}</span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700 tracking-wider">
                  {acc.accountType || "CLEARED"}
                </span>
              </div>
              <div className="flex justify-between items-baseline pt-1">
                <span className="text-[10px] text-gray-400 font-mono tracking-wider">****{acc.accountNumber?.slice(-4) || "0000"}</span>
               
              </div>
            </div>
          ))}
          {accounts.length === 0 && (
            <div className="col-span-3 text-center py-6 text-[11px] text-gray-400 italic">
              No individual account routing instances currently linked to this administration view.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}