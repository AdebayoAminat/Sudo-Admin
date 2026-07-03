

// "use client";

// import React, { useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import Image from "next/image";
// import { ChevronDown, ChevronUp, X, Search } from "lucide-react";

// import { TeamTab } from "@/app/components/sdr-report/TeamTab";
// import { SudoReportTab } from "@/app/components/sdr-report/SudoReportTab";
// import { InsuredReportTab } from "@/app/components/sdr-report/InsuredReportTab";

// const SDRReportPage = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const activeTab = searchParams.get("tab") || "team";

//   // SHARED STATES
//   const [searchTerm, setSearchTerm] = useState("");
//   const [itemCount, setItemCount] = useState(0);

//   // FILTER MODAL STATES
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [bizAccordionOpen, setBizAccordionOpen] = useState(false);
//   const [typeAccordionOpen, setTypeAccordionOpen] = useState(false);

//   // FILTER VALUE STATES
//   const [selectedBusiness, setSelectedBusiness] = useState("");
//   const [selectedType, setSelectedType] = useState("");
//   const [appliedCount, setAppliedCount] = useState(0);

//   // Count active selections currently inside the modal
//   const currentModalFilterCount = [
//     selectedBusiness,
//     selectedType,
//   ].filter(Boolean).length;

//   // UI STATES FOR MEMBER ACTIONS
//   const [actionDropdownOpen, setActionDropdownOpen] = useState(false);
//   const [addMemberModalOpen, setAddMemberModalOpen] = useState(false);
//   const [addClientModalOpen, setAddClientModalOpen] = useState(false);

//   const handleClearAll = () => {
//     setSelectedBusiness("");
//     setSelectedType("");
//     setAppliedCount(0);
//     setBizAccordionOpen(false);
//     setTypeAccordionOpen(false);
//   };

//   const handleApply = () => {
//     setAppliedCount(currentModalFilterCount);
//     setIsFilterOpen(false);
//   };

//   const tabs = [
//     { name: "SDR Team", value: "team" },
//     { name: "Sudo Report", value: "sudo" },
//     { name: "Insured Report", value: "insured" },
//   ];

//   return (
//     <div className="relative min-h-screen p-6 animate-in fade-in duration-500">
//       {/* 1. TABS NAVIGATION */}
//       <div className="flex gap-10 border-b border-gray-100 pb-1 mb-10">
//         {tabs.map((tab) => (
//           <button
//             key={tab.value}
//             onClick={() => {
//               router.push(`/dashboard/sdr-report?tab=${tab.value}`);
//               setSearchTerm("");
//               handleClearAll();
//             }}
//             className={`pb-3 text-[14px] transition-colors ${
//               activeTab === tab.value
//                 ? "border-b-2 border-[#1D2939] font-bold text-[#1D2939]"
//                 : "text-gray-500 hover:text-[#1D2939] font-medium"
//             }`}
//           >
//             {tab.name}
//           </button>
//         ))}
//       </div>

//       {/* 2. UTILITY BAR */}
//       <div className="flex justify-between items-center mb-10">
//         <p className="text-[14px] text-gray-400 font-medium">
//           Showing{" "}
//           <span className="text-[#1D2939] font-bold">
//             {itemCount} {activeTab === "team" ? "Member" : "Report"}
//             {itemCount !== 1 ? "s" : ""}
//           </span>
//         </p>

//         <div className="flex gap-4 items-center">
//           {/* SEARCH INPUT */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-[280px] h-[44px] pl-4 pr-10 border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] outline-none"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2">
//               <Image src="/images/search.svg" alt="Search" width={16} height={16} />
//             </div>
//           </div>

//           {activeTab === "team" ? (
//             <div className="relative">
//               <button
//                 onClick={() => setActionDropdownOpen(!actionDropdownOpen)}
//                 className="flex items-center gap-2 px-6 h-[44px] bg-[#0A1629] text-white text-[13px] font-medium rounded-lg"
//               >
//                 Member Actions <ChevronDown className="w-4 h-4" />
//               </button>
//               {actionDropdownOpen && (
//                 <>
//                   <div
//                     className="fixed inset-0 z-10"
//                     onClick={() => setActionDropdownOpen(false)}
//                   />
//                   <div className="absolute right-0 top-12 w-[200px] bg-white border border-gray-100 rounded-lg shadow-xl z-20 py-2">
//                     <button
//                       onClick={() => {
//                         setAddMemberModalOpen(true);
//                         setActionDropdownOpen(false);
//                       }}
//                       className="w-full text-left px-5 py-2.5 text-[13px] hover:bg-gray-50"
//                     >
//                       Add Member
//                     </button>
//                     <button
//                       onClick={() => {
//                         setAddClientModalOpen(true);
//                         setActionDropdownOpen(false);
//                       }}
//                       className="w-full text-left px-5 py-2.5 text-[13px] hover:bg-gray-50"
//                     >
//                       Add Member's Client
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           ) : (
//             <>
//               {/* FILTER BUTTON WITH ICON AND BADGE */}
//               <button
//                 onClick={() => setIsFilterOpen(!isFilterOpen)}
//                 className="flex items-center gap-2 px-4 h-[44px] text-[13px] font-bold text-[#1D2939] hover:bg-gray-50 rounded-lg transition-all"
//               >
//                 <div className="relative">
//                   <Image src="/images/filter.svg" alt="Filter" width={18} height={18} />
//                   {appliedCount > 0 && (
//                     <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#1D2939] text-white text-[8px] rounded-full flex items-center justify-center font-bold">
//                       {appliedCount}
//                     </span>
//                   )}
//                 </div>
//                 Filter(s)
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* FILTER MODAL (ACCORDION STYLE) */}
//       {isFilterOpen && (activeTab === "sudo" || activeTab === "insured") && (
//         <>
//           <div className="fixed inset-0 z-20" onClick={() => setIsFilterOpen(false)} />
//           <div className="absolute right-40 top-40 w-[380px] bg-white rounded-xl shadow-2xl z-30 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
//             <div className="p-5 border-b border-gray-50 flex justify-between items-center">
//               <h3 className="text-[14px] font-bold text-[#1D2939]">Filters</h3>
//               <button onClick={() => setIsFilterOpen(false)}>
//                 <X className="w-4 h-4 text-gray-400" />
//               </button>
//             </div>

//             <div className="p-5 space-y-6">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2 bg-[#EEF2FF] text-[#4F46E5] px-3 py-1.5 rounded-md text-[11px] font-bold">
//                   {currentModalFilterCount} filter(s) applied <ChevronDown className="w-3 h-3" />
//                 </div>
//                 <button
//                   onClick={handleClearAll}
//                   className="text-[11px] font-bold text-[#1D2939] underline"
//                 >
//                   Clear All
//                 </button>
//               </div>

//               {/* BUSINESS ACCORDION */}
//               <div className="space-y-3">
//                 <button
//                   onClick={() => setBizAccordionOpen(!bizAccordionOpen)}
//                   className="w-full flex justify-between items-center text-[12px] font-bold text-[#1D2939]"
//                 >
//                   <span>Business</span>
//                   {bizAccordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//                 </button>
//                 {bizAccordionOpen && (
//                   <div className="relative border border-gray-100 rounded-lg p-3 bg-[#F9FAFB] animate-in slide-in-from-top-1">
//                     <select
//                       value={selectedBusiness}
//                       onChange={(e) => setSelectedBusiness(e.target.value)}
//                       className="bg-transparent outline-none text-[11px] w-full text-gray-500 appearance-none cursor-pointer"
//                     >
//                       <option value="">Select Business</option>
//                       <option value="Glo World">Glo World</option>
//                       <option value="MTN Nigeria">MTN Nigeria</option>
//                     </select>
//                     <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//                   </div>
//                 )}
//               </div>

//               {/* TYPE ACCORDION */}
//               <div className="space-y-3">
//                 <button
//                   onClick={() => setTypeAccordionOpen(!typeAccordionOpen)}
//                   className="w-full flex justify-between items-center text-[12px] font-bold text-[#1D2939]"
//                 >
//                   <span>Type</span>
//                   {typeAccordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//                 </button>
//                 {typeAccordionOpen && (
//                   <div className="relative border border-gray-100 rounded-lg p-3 bg-[#F9FAFB] animate-in slide-in-from-top-1">
//                     <select
//                       value={selectedType}
//                       onChange={(e) => setSelectedType(e.target.value)}
//                       className="bg-transparent outline-none text-[11px] w-full text-gray-500 appearance-none cursor-pointer"
//                     >
//                       <option value="">Select Type</option>
//                       <option value="Funding">Funding</option>
//                       <option value="Withdraw">Withdraw</option>
//                     </select>
//                     <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
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

//       {/* 3. CONTENT AREA */}
//       <div>
//         {activeTab === "team" && (
//           <TeamTab searchTerm={searchTerm} onCountChange={setItemCount} />
//         )}
//         {activeTab === "sudo" && (
//           <SudoReportTab
//             searchTerm={searchTerm}
//             businessFilter={selectedBusiness || "All"}
//             typeFilter={selectedType || "All"}
//             onCountChange={setItemCount}
//           />
//         )}
//         {activeTab === "insured" && (
//           <InsuredReportTab
//             searchTerm={searchTerm}
//             businessFilter={selectedBusiness || "All"}
//             typeFilter={selectedType || "All"}
//             onCountChange={setItemCount}
//           />
//         )}
//       </div>

//       {/* 4. MODALS FOR SDR TEAM MEMBERS */}
//       {(addMemberModalOpen || addClientModalOpen) && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div
//             className="fixed inset-0 bg-[#0A1629]/40 backdrop-blur-[1px]"
//             onClick={() => {
//               setAddMemberModalOpen(false);
//               setAddClientModalOpen(false);
//             }}
//           />

//           <div className="bg-white rounded-2xl w-full max-w-[500px] p-8 space-y-6 z-10 relative animate-in zoom-in-95">
//             <div className="flex justify-between items-start">
//               <div className="space-y-1">
//                 <h2 className="text-[18px] font-bold text-[#1D2939]">
//                   {addMemberModalOpen ? "Add SDR Team Member" : "Add Client to SDR Team Member"}
//                 </h2>
//                 <p className="text-[13px] text-gray-400">
//                   {addMemberModalOpen
//                     ? "Fill the form to create a new team member."
//                     : "Fill the form to add client to a member."}
//                 </p>
//               </div>
//               <button
//                 onClick={() => {
//                   setAddMemberModalOpen(false);
//                   setAddClientModalOpen(false);
//                 }}
//               >
//                 <X className="w-5 h-5 text-gray-400" />
//               </button>
//             </div>

//             <div className="space-y-5">
//               <div className="space-y-2">
//                 <label className="text-[12px] font-medium text-[#344054]">
//                   Select Existing Employee
//                 </label>
//                 <div className="relative">
//                   <select className="w-full h-[48px] border border-blue-200 bg-blue-50/20 rounded-lg text-[13px] px-4 outline-none appearance-none">
//                     <option>Choose Employee</option>
//                   </select>
//                   <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//                 </div>
//               </div>

//               {addClientModalOpen && (
//                 <>
//                   <div className="space-y-2">
//                     <label className="text-[12px] font-medium text-[#344054]">
//                       Choose Channel
//                     </label>
//                     <div className="relative">
//                       <select className="w-full h-[48px] border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] px-4 outline-none appearance-none">
//                         <option>SUDO</option>
//                       </select>
//                       <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-[12px] font-medium text-[#344054]">
//                       Business
//                     </label>
//                     <div className="relative">
//                       <select className="w-full h-[48px] border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] px-4 outline-none appearance-none text-gray-400">
//                         <option>Select Business</option>
//                         <option>Madi Studio Online</option>
//                         <option>CEEHUB</option>
//                         <option>Kori Inc</option>
//                       </select>
//                       <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>

//             <button className="w-full h-[48px] bg-[#0A1629] text-white rounded-lg text-[14px] font-bold">
//               {addMemberModalOpen ? "Add Member" : "Submit"}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SDRReportPage;


"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown, ChevronUp, X } from "lucide-react";

import { TeamTab } from "@/app/components/sdr-report/TeamTab";
import { SudoReportTab } from "@/app/components/sdr-report/SudoReportTab";
import { InsuredReportTab } from "@/app/components/sdr-report/InsuredReportTab";
import sdrReportService from "@/app/service/sdr-report.service";

export const SDRReportPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("tab") || "team";

  // SHARED STATES
  const [searchTerm, setSearchTerm] = useState("");
  const [itemCount, setItemCount] = useState(0);

  // FILTER MODAL STATES
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [bizAccordionOpen, setBizAccordionOpen] = useState(false);
  const [typeAccordionOpen, setTypeAccordionOpen] = useState(false);

  // FILTER VALUE STATES
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [appliedCount, setAppliedCount] = useState(0);

  // Count active selections currently inside the modal
  const currentModalFilterCount = [
    selectedBusiness,
    selectedType,
  ].filter(Boolean).length;

  // UI STATES FOR MEMBER ACTIONS
  const [actionDropdownOpen, setActionDropdownOpen] = useState(false);
  const [addMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const [addClientModalOpen, setAddClientModalOpen] = useState(false);

  // FORM INPUT STATES
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [selectedChannel, setSelectedChannel] = useState("SUDO");
  const [selectedFormBusiness, setSelectedFormBusiness] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // LOCAL EMPLOYEES PLACEHOLDER (Populate this from an API call if needed later)
  const availableEmployees = [
    { id: "6644a993c84652243c71bb92", name: "Amina Frontend Dev" },
    { id: "6644a993c84652243c71bb95", name: "John Staff Admin" }
  ];

  const handleClearAll = () => {
    setSelectedBusiness("");
    setSelectedType("");
    setAppliedCount(0);
    setBizAccordionOpen(false);
    setTypeAccordionOpen(false);
  };

  const handleApply = () => {
    setAppliedCount(currentModalFilterCount);
    setIsFilterOpen(false);
  };

  // HANDLER FOR ADDING SDR MEMBER / CLIENT SUBMISSIONS
  const handleFormSubmit = async () => {
    if (!selectedEmployeeId || selectedEmployeeId === "Choose Employee") {
      alert("Please select a valid employee first.");
      return;
    }

    setIsSubmitting(true);
    const service = new sdrReportService();

    // Construct request body context values depending on modal path toggle state
    const payload = addMemberModalOpen
      ? { memberId: selectedEmployeeId }
      : {
          memberId: selectedEmployeeId,
          channel: selectedChannel,
          businessName: selectedFormBusiness,
        };

    const response = await service.addANewSdrMember(payload);

    setIsSubmitting(false);

    if (response && "error" in response) {
      alert(`Submission Error: ${response.error || "Failed to process request."}`);
    } else {
      // Clear forms and dismiss overlays on absolute success paths
      setSelectedEmployeeId("");
      setSelectedFormBusiness("");
      setAddMemberModalOpen(false);
      setAddClientModalOpen(false);
      
      // Forces Next.js context layout trees to sync data cache arrays
      router.refresh();
    }
  };

  const tabs = [
    { name: "SDR Team", value: "team" },
    { name: "Sudo Report", value: "sudo" },
    { name: "Insured Report", value: "insured" },
  ];

  return (
    <div className="relative min-h-screen p-6 animate-in fade-in duration-500">
      {/* 1. TABS NAVIGATION */}
      <div className="flex gap-10 border-b border-gray-100 pb-1 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => {
              router.push(`/dashboard/sdr-report?tab=${tab.value}`);
              setSearchTerm("");
              handleClearAll();
            }}
            className={`pb-3 text-[14px] transition-colors ${
              activeTab === tab.value
                ? "border-b-2 border-[#1D2939] font-bold text-[#1D2939]"
                : "text-gray-500 hover:text-[#1D2939] font-medium"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* 2. UTILITY BAR */}
      <div className="flex justify-between items-center mb-10">
        <p className="text-[14px] text-gray-400 font-medium">
          Showing{" "}
          <span className="text-[#1D2939] font-bold">
            {itemCount} {activeTab === "team" ? "Member" : "Report"}
            {itemCount !== 1 ? "s" : ""}
          </span>
        </p>

        <div className="flex gap-4 items-center">
          {/* SEARCH INPUT */}
          <div className="relative">
            <input
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[280px] h-[44px] pl-4 pr-10 border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image src="/images/search.svg" alt="Search" width={16} height={16} />
            </div>
          </div>

          {activeTab === "team" ? (
            <div className="relative">
              <button
                onClick={() => setActionDropdownOpen(!actionDropdownOpen)}
                className="flex items-center gap-2 px-6 h-[44px] bg-[#0A1629] text-white text-[13px] font-medium rounded-lg"
              >
                Member Actions <ChevronDown className="w-4 h-4" />
              </button>
              {actionDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setActionDropdownOpen(false)}
                  />
                  <div className="absolute right-0 top-12 w-[200px] bg-white border border-gray-100 rounded-lg shadow-xl z-20 py-2">
                    <button
                      onClick={() => {
                        setAddMemberModalOpen(true);
                        setActionDropdownOpen(false);
                      }}
                      className="w-full text-left px-5 py-2.5 text-[13px] hover:bg-gray-50"
                    >
                      Add Member
                    </button>
                    <button
                      onClick={() => {
                        setAddClientModalOpen(true);
                        setActionDropdownOpen(false);
                      }}
                      className="w-full text-left px-5 py-2.5 text-[13px] hover:bg-gray-50"
                    >
                      Add Member's Client
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              {/* FILTER BUTTON */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 h-[44px] text-[13px] font-bold text-[#1D2939] hover:bg-gray-50 rounded-lg transition-all"
              >
                <div className="relative">
                  <Image src="/images/filter.svg" alt="Filter" width={18} height={18} />
                  {appliedCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#1D2939] text-white text-[8px] rounded-full flex items-center justify-center font-bold">
                      {appliedCount}
                    </span>
                  )}
                </div>
                Filter(s)
              </button>
            </>
          )}
        </div>
      </div>

      {/* FILTER MODAL */}
      {isFilterOpen && (activeTab === "sudo" || activeTab === "insured") && (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute right-40 top-40 w-[380px] bg-white rounded-xl shadow-2xl z-30 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="p-5 border-b border-gray-50 flex justify-between items-center">
              <h3 className="text-[14px] font-bold text-[#1D2939]">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            <div className="p-5 space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 bg-[#EEF2FF] text-[#4F46E5] px-3 py-1.5 rounded-md text-[11px] font-bold">
                  {currentModalFilterCount} filter(s) applied <ChevronDown className="w-3 h-3" />
                </div>
                <button
                  onClick={handleClearAll}
                  className="text-[11px] font-bold text-[#1D2939] underline"
                >
                  Clear All
                </button>
              </div>

              {/* BUSINESS ACCORDION */}
              <div className="space-y-3">
                <button
                  onClick={() => setBizAccordionOpen(!bizAccordionOpen)}
                  className="w-full flex justify-between items-center text-[12px] font-bold text-[#1D2939]"
                >
                  <span>Business</span>
                  {bizAccordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {bizAccordionOpen && (
                  <div className="relative border border-gray-100 rounded-lg p-3 bg-[#F9FAFB] animate-in slide-in-from-top-1">
                    <select
                      value={selectedBusiness}
                      onChange={(e) => setSelectedBusiness(e.target.value)}
                      className="bg-transparent outline-none text-[11px] w-full text-gray-500 appearance-none cursor-pointer"
                    >
                      <option value="">Select Business</option>
                      <option value="Glo World">Glo World</option>
                      <option value="MTN Nigeria">MTN Nigeria</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                )}
              </div>

              {/* TYPE ACCORDION */}
              <div className="space-y-3">
                <button
                  onClick={() => setTypeAccordionOpen(!typeAccordionOpen)}
                  className="w-full flex justify-between items-center text-[12px] font-bold text-[#1D2939]"
                >
                  <span>Type</span>
                  {typeAccordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {typeAccordionOpen && (
                  <div className="relative border border-gray-100 rounded-lg p-3 bg-[#F9FAFB] animate-in slide-in-from-top-1">
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="bg-transparent outline-none text-[11px] w-full text-gray-500 appearance-none cursor-pointer"
                    >
                      <option value="">Select Type</option>
                      <option value="Funding">Funding</option>
                      <option value="Withdraw">Withdraw</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
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

      {/* 3. CONTENT AREA */}
      <div>
        {activeTab === "team" && (
          <TeamTab searchTerm={searchTerm} onCountChange={setItemCount} />
        )}
        {activeTab === "sudo" && (
          <SudoReportTab
            searchTerm={searchTerm}
            businessFilter={selectedBusiness || "All"}
            typeFilter={selectedType || "All"}
            onCountChange={setItemCount}
          />
        )}
        {activeTab === "insured" && (
          <InsuredReportTab
            searchTerm={searchTerm}
            businessFilter={selectedBusiness || "All"}
            typeFilter={selectedType || "All"}
            onCountChange={setItemCount}
          />
        )}
      </div>

      {/* 4. MODALS FOR SDR TEAM MEMBERS */}
      {(addMemberModalOpen || addClientModalOpen) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#0A1629]/40 backdrop-blur-[1px]"
            onClick={() => {
              setAddMemberModalOpen(false);
              setAddClientModalOpen(false);
            }}
          />

          <div className="bg-white rounded-2xl w-full max-w-[500px] p-8 space-y-6 z-10 relative animate-in zoom-in-95">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h2 className="text-[18px] font-bold text-[#1D2939]">
                  {addMemberModalOpen ? "Add SDR Team Member" : "Add Client to SDR Team Member"}
                </h2>
                <p className="text-[13px] text-gray-400">
                  {addMemberModalOpen
                    ? "Fill the form to create a new team member."
                    : "Fill the form to add client to a member."}
                </p>
              </div>
              <button
                onClick={() => {
                  setAddMemberModalOpen(false);
                  setAddClientModalOpen(false);
                }}
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[12px] font-medium text-[#344054]">
                  Select Existing Employee
                </label>
                <div className="relative">
                  <select
                    value={selectedEmployeeId}
                    onChange={(e) => setSelectedEmployeeId(e.target.value)}
                    className="w-full h-[48px] border border-blue-200 bg-blue-50/20 rounded-lg text-[13px] px-4 outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Choose Employee</option>
                    {availableEmployees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {addClientModalOpen && (
                <>
                  <div className="space-y-2">
                    <label className="text-[12px] font-medium text-[#344054]">
                      Choose Channel
                    </label>
                    <div className="relative">
                      <select
                        value={selectedChannel}
                        onChange={(e) => setSelectedChannel(e.target.value)}
                        className="w-full h-[48px] border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] px-4 outline-none appearance-none cursor-pointer"
                      >
                        <option value="SUDO">SUDO</option>
                        <option value="INSURED">INSURED</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-medium text-[#344054]">
                      Business
                    </label>
                    <div className="relative">
                      <select
                        value={selectedFormBusiness}
                        onChange={(e) => setSelectedFormBusiness(e.target.value)}
                        className="w-full h-[48px] border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] px-4 outline-none appearance-none text-[#1D2939] cursor-pointer"
                      >
                        <option value="">Select Business</option>
                        <option value="Madi Studio Online">Madi Studio Online</option>
                        <option value="CEEHUB">CEEHUB</option>
                        <option value="Kori Inc">Kori Inc</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={handleFormSubmit}
              disabled={isSubmitting}
              className="w-full h-[48px] bg-[#0A1629] text-white rounded-lg text-[14px] font-bold shadow-md hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? "Processing..." : addMemberModalOpen ? "Add Member" : "Submit"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SDRReportPage;