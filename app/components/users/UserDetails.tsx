
// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";

// export default function UserDetails({ id }: { id: string }) {
//   const router = useRouter();

//   // Mock data based on the UI screenshot
//   const userData = {
//     firstName: "Mohammed",
//     lastName: "Mohammed",
//     fullName: "Mohammed Mohammed",
//     createdAt: "Apr 20, 2026, 1:15:18 AM",
//     phone: "+218 915088566",
//     email: "mohammed@gmail.com",
//     initials: "MA"
//   };

//   return (
//     <div className="p-8 space-y-8 animate-in fade-in duration-500 bg-white h-full">
//       {/* HEADER SECTION */}
//       <div className="flex justify-between items-start">
//         <div className="flex items-center gap-4">
//           <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-[20px] font-bold text-[#1D2939] bg-gray-50">
//             {userData.initials}
//           </div>
//           <div>
//             <h2 className="text-[18px] font-bold text-[#1D2939]">{userData.fullName}</h2>
//             <p className="text-[12px] text-gray-400 mt-1">Created {userData.createdAt}</p>
//           </div>
//         </div>
        
//         {/* ACTIVE TOGGLE */}
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer">
//             <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all" />
//           </div>
//           <span className="text-[12px] font-medium text-gray-400">Active</span>
//         </div>
//       </div>

//       {/* TABS */}
//       <div className="border-b border-gray-100">
//         <button className="pb-4 px-2 text-[13px] font-bold text-[#1D2939] border-b-2 border-[#1D2939]">
//           User Details
//         </button>
//       </div>

//       {/* FORM FIELDS */}
//       <div className="max-w-[1000px] space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="space-y-2">
//             <label className="text-[12px] font-medium text-gray-400">First Name</label>
//             <div className="px-4 py-3 bg-gray-50 rounded-lg text-[13px] text-[#1D2939] border border-gray-50">
//               {userData.fullName}
//             </div>
//           </div>
//           <div className="space-y-2">
//             <label className="text-[12px] font-medium text-gray-400">Phone Number</label>
//             <div className="px-4 py-3 bg-gray-50 rounded-lg text-[13px] text-[#1D2939] border border-gray-50">
//               {userData.phone}
//             </div>
//           </div>
//           <div className="space-y-2">
//             <label className="text-[12px] font-medium text-gray-400">Phone Number</label>
//             <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg text-[13px] text-[#1D2939] border border-gray-50">
//               <span className="text-lg">🇱🇾</span>
//               <span>{userData.phone}</span>
//             </div>
//           </div>
//         </div>

//         <div className="space-y-2 max-w-[660px]">
//           <label className="text-[12px] font-medium text-gray-400">Email Address</label>
//           <div className="px-4 py-3 bg-gray-50 rounded-lg text-[13px] text-[#1D2939] border border-gray-50">
//             {userData.email}
//           </div>
//         </div>

//         {/* METADATA TOGGLE */}
//         <button className="flex items-center gap-2 text-[13px] font-bold text-[#5925DC] pt-4">
//           <span className="text-[10px]">▼</span> Metadata
//         </button>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import UsersService from "@/app/service/users.service";

// const COUNTRIES = [
//   { name: "Nigeria", code: "+234", flag: "🇳🇬" },
//   { name: "South Africa", code: "+277", flag: "🇿🇦" },
//   { name: "Libya", code: "+218", flag: "🇱🇾" },
//   { name: "Niger", code: "+227", flag: "🇳🇪" },
//   { name: "Mali", code: "+223", flag: "🇲🇱" },
//   { name: "Ghana", code: "+233", flag: "🇬🇭" },
//   { name: "Kenya", code: "+254", flag: "🇰🇪" }
// ];

// export default function UserDetails({ id }: { id: string }) {
//   const router = useRouter();
//   const [userPayload, setUserPayload] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
  
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!id || id === "undefined") return;
//       setLoading(true);
//       try {
//         const usersService = new UsersService();
//         const response = await usersService.getUserById(id);
        
//         const data = response?.data?.data || response?.data;
//         setUserPayload(data);
        
//         const nestedUser = data?.user;
//         if (nestedUser?.phone) {
//           const matched = COUNTRIES.find(c => nestedUser.phone.startsWith(c.code));
//           if (matched) setSelectedCountry(matched);
//         }
//       } catch (error) {
//         console.error("Error loading user profile details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [id]);

//   if (loading) {
//     return <div className="p-8 text-[12px] text-gray-400">Loading profile records...</div>;
//   }

//   if (!userPayload) {
//     return (
//       <div className="p-8 text-[12px] text-gray-400 space-y-4">
//         <p>User account info not found.</p>
//         <button onClick={() => router.back()} className="text-[#5925DC] font-bold">Go Back</button>
//       </div>
//     );
//   }

//   // Pure mapping from your specific API response hierarchy
//   const nestedUser = userPayload?.user;
  
//   const displayFirstName = nestedUser?.firstName || "";
//   const displayLastName = nestedUser?.lastName || "";
//   const displayFullName = `${displayFirstName} ${displayLastName}`.trim();
//   const displayInitials = `${displayFirstName.charAt(0) || ""}${displayLastName.charAt(0) || ""}`.toUpperCase();
  
//   const formattedDate = nestedUser?.createdAt 
//     ? new Date(nestedUser.createdAt).toLocaleDateString('en-US', {
//         month: 'short', day: 'numeric', year: 'numeric'
//       }) 
//     : "";
  
//   // Directly targets user.status from your payload
//   const currentStatus = nestedUser?.status || userPayload?.status || "";
//   const isBlocked = nestedUser?.isBlocked || false;
  
//   const rawPhoneNumber = nestedUser?.phone ? nestedUser.phone.replace(selectedCountry.code, "").trim() : "";

//   return (
//     <div className="p-8 space-y-8 animate-in fade-in duration-500 bg-white h-full relative">
//       {/* HEADER SECTION */}
//       <div className="flex justify-between items-start">
//         <div className="flex items-center gap-4">
//           <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-[20px] font-bold text-[#1D2939] bg-gray-50">
//             {displayInitials}
//           </div>
//           <div>
//             <h2 className="text-[18px] font-bold text-[#1D2939] capitalize">{displayFullName}</h2>
//             <p className="text-[12px] text-gray-400 mt-1">Created {formattedDate}</p>
//           </div>
//         </div>
        
//         {/* STATUS TOGGLE */}
//         <div className="flex items-center gap-3">
//           <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${isBlocked || currentStatus === "blocked" ? "bg-gray-200" : "bg-[#4ade80]"}`}>
//             <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isBlocked || currentStatus === "blocked" ? "left-1" : "right-1"}`} />
//           </div>
//           <span className="text-[12px] font-medium text-gray-700 capitalize">{currentStatus}</span>
//         </div>
//       </div>

//       {/* TABS */}
//       <div className="border-b border-gray-100">
//         <button type="button" className="pb-4 px-2 text-[13px] font-bold text-[#1D2939] border-b-2 border-[#1D2939]">
//           User Details
//         </button>
//       </div>

//       {/* FORM FIELDS */}
//       <div className="max-w-[1000px] space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="space-y-2">
//             <label className="text-[12px] font-medium text-gray-400">First Name</label>
//             <div className="px-4 py-3 bg-gray-50 rounded-lg text-[13px] text-[#1D2939] border border-gray-50 capitalize">
//               {displayFirstName}
//             </div>
//           </div>
//           <div className="space-y-2">
//             <label className="text-[12px] font-medium text-gray-400">Last Name</label>
//             <div className="px-4 py-3 bg-gray-50 rounded-lg text-[13px] text-[#1D2939] border border-gray-50 capitalize">
//               {displayLastName}
//             </div>
//           </div>

//           {/* PHONE PICKER CONTAINER */}
//           <div className="space-y-2" ref={dropdownRef}>
//             <label className="text-[12px] font-medium text-gray-400">Phone Number</label>
//             <div className="flex items-center bg-gray-50 border border-gray-100 rounded-lg focus-within:border-gray-200 relative">
//               <button 
//                 type="button"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="flex items-center gap-1.5 px-3 py-3 border-r border-gray-200 hover:bg-gray-100 rounded-l-lg transition-all"
//               >
//                 <span className="text-base">{selectedCountry.flag}</span>
//                 <span className="text-[10px] text-gray-400">▼</span>
//               </button>

//               <div className="px-4 py-3 text-[13px] text-[#1D2939] flex-1 font-mono">
//                 <span className="text-gray-400 mr-1">{selectedCountry.code}</span> {rawPhoneNumber}
//               </div>

//               {isOpen && (
//                 <div className="absolute top-[105%] left-0 w-64 max-h-60 bg-white border border-gray-200 rounded-xl shadow-lg overflow-y-auto z-50 py-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
//                   <div className="text-[11px] font-bold text-gray-400 px-3 py-1 uppercase tracking-wider bg-gray-50">Select Country</div>
//                   {COUNTRIES.map((country) => (
//                     <button
//                       key={country.name}
//                       type="button"
//                       onClick={() => {
//                         setSelectedCountry(country);
//                         setIsOpen(false);
//                       }}
//                       className={`w-full flex items-center justify-between px-4 py-2.5 text-[13px] text-left transition-colors hover:bg-gray-50 ${
//                         selectedCountry.name === country.name ? "bg-purple-50/50 font-medium text-[#5925DC]" : "text-[#1D2939]"
//                       }`}
//                     >
//                       <div className="flex items-center gap-2.5">
//                         <span className="text-base">{country.flag}</span>
//                         <span>{country.name}</span>
//                       </div>
//                       <span className="text-gray-400 font-mono text-[12px]">{country.code}</span>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* EMAIL ADDRESS */}
//         <div className="space-y-2 max-w-[660px]">
//           <label className="text-[12px] font-medium text-gray-400">Email Address</label>
//           <div className="px-4 py-3 bg-gray-50 rounded-lg text-[13px] text-[#1D2939] border border-gray-50">
//             {nestedUser?.emailAddress || ""}
//           </div>
//         </div>

//         {/* METADATA BOUNDARY */}
//         <div className="border-t border-b border-gray-100 py-4 mt-12">
//           <button type="button" className="flex items-center gap-2 text-[13px] font-bold text-[#5925DC]">
//             <span className="text-[10px]">▼</span> Metadata
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import UsersService from "@/app/service/users.service";
// Import your custom JSON structure directly from your assets folder
import rawCountriesData  from "@/assets/countries.json";

// Process the raw REST countries array into your component's required structure
const COUNTRIES = rawCountriesData
  .filter((c: any) => c.idd?.root)
  .map((c: any) => {
    const root = c.idd.root || "";
    const suffix = c.idd.suffixes?.[0] || "";
    const fullCode = `${root}${suffix}`.startsWith("+") ? `${root}${suffix}` : `+${root}${suffix}`;
    
    // Automatically convert 2-letter country code into flag emoji
    const flagEmoji = c.cca2
      ? String.fromCodePoint(...[...c.cca2.toUpperCase()].map(char => 127397 + char.charCodeAt(0)))
      : "🏳️";

    return {
      name: c.name.common,
      code: fullCode,
      flag: flagEmoji
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// Safe fallback default to use if the parsed list is empty
const DEFAULT_COUNTRY = COUNTRIES.find(c => c.name === "Nigeria") || COUNTRIES[0] || { name: "Nigeria", code: "+234", flag: "🇳🇬" };

export default function UserDetails({ id }: { id: string }) {
  const router = useRouter();
  const [userPayload, setUserPayload] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!id || id === "undefined") return;
      setLoading(true);
      try {
        const usersService = new UsersService();
        const response = await usersService.getUserById(id);
        
        const data = response?.data?.data || response?.data;
        setUserPayload(data);
        
        const nestedUser = data?.user;
        if (nestedUser?.phone) {
          const matched = COUNTRIES.find(c => nestedUser.phone.startsWith(c.code));
          if (matched) setSelectedCountry(matched);
        }
      } catch (error) {
        console.error("Error loading user profile details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) {
    return <div className="p-8 text-[12px] text-gray-400">Loading profile records...</div>;
  }

  if (!userPayload) {
    return (
      <div className="p-8 text-[12px] text-gray-400 space-y-4">
        <p>User account info not found.</p>
        <button onClick={() => router.back()} className="text-[#5925DC] font-bold">Go Back</button>
      </div>
    );
  }

  // Pure mapping from your specific API response hierarchy
  const nestedUser = userPayload?.user;
  
  const displayFirstName = nestedUser?.firstName || "";
  const displayLastName = nestedUser?.lastName || "";
  const displayFullName = `${displayFirstName} ${displayLastName}`.trim();
  const displayInitials = `${displayFirstName.charAt(0) || ""}${displayLastName.charAt(0) || ""}`.toUpperCase();
  
  const formattedDate = nestedUser?.createdAt 
    ? new Date(nestedUser.createdAt).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
      }) 
    : "";
  
  // Directly targets user.status from your payload
  const currentStatus = nestedUser?.status || userPayload?.status || "";
  const isBlocked = nestedUser?.isBlocked || false;
  
  const rawPhoneNumber = nestedUser?.phoneNumber ? nestedUser.phoneNumber.replace(selectedCountry.code, "").trim() : "";

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500 bg-white h-full relative">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-[20px] font-bold text-[#1D2939] bg-gray-50">
            {displayInitials}
          </div>
          <div>
            <h2 className="text-[18px] font-bold text-[#1D2939] capitalize">{displayFullName}</h2>
            <p className="text-[12px] text-gray-400 mt-1">Created {formattedDate}</p>
          </div>
        </div>
        
        {/* STATUS TOGGLE */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${isBlocked || currentStatus === "blocked" ? "bg-gray-200" : "bg-[#4ade80]"}`}>
            <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isBlocked || currentStatus === "blocked" ? "left-1" : "right-1"}`} />
          </div>
          <span className="text-[12px] font-medium text-gray-700 capitalize">{currentStatus}</span>
        </div>
      </div>

      {/* TABS */}
      <div className="border-b border-gray-100">
        <button type="button" className="pb-4 px-2 text-[13px] font-bold text-[#1D2939] border-b-2 border-[#1D2939]">
          User Details
        </button>
      </div>

      {/* FORM FIELDS */}
      <div className="max-w-[1000px] space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-[12px] font-medium text-gray-400">First Name</label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-[13px] text-[#1D2939] border border-gray-50 capitalize">
              {displayFirstName}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[12px] font-medium text-gray-400">Last Name</label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg text-[13px] text-[#1D2939] border border-gray-50 capitalize">
              {displayLastName}
            </div>
          </div>

          {/* PHONE PICKER CONTAINER */}
          <div className="space-y-2" ref={dropdownRef}>
            <label className="text-[12px] font-medium text-gray-400">Phone Number</label>
            <div className="flex items-center bg-gray-50 border border-gray-100 rounded-lg focus-within:border-gray-200 relative">
              <button 
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 px-3 py-3 border-r border-gray-200 hover:bg-gray-100 rounded-l-lg transition-all"
              >
                <span className="text-base">{selectedCountry.flag}</span>
                <span className="text-[10px] text-gray-400">▼</span>
              </button>

              <div className="px-4 py-3 text-[13px] text-[#1D2939] flex-1 font-mono">
                <span className="text-gray-400 mr-1">{selectedCountry.code}</span> {rawPhoneNumber}
              </div>

              {isOpen && (
                <div className="absolute top-[105%] left-0 w-64 max-h-60 bg-white border border-gray-200 rounded-xl shadow-lg overflow-y-auto z-50 py-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-bold text-gray-400 px-3 py-1 uppercase tracking-wider bg-gray-50">Select Country</div>
                  {COUNTRIES.map((country) => (
                    <button
                      key={`${country.name}-${country.code}`}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-[13px] text-left transition-colors hover:bg-gray-50 ${
                        selectedCountry.name === country.name ? "bg-purple-50/50 font-medium text-[#5925DC]" : "text-[#1D2939]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{country.flag}</span>
                        <span>{country.name}</span>
                      </div>
                      <span className="text-gray-400 font-mono text-[12px]">{country.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* EMAIL ADDRESS */}
        <div className="space-y-2 max-w-[660px]">
          <label className="text-[12px] font-medium text-gray-400">Email Address</label>
          <div className="px-4 py-3 bg-gray-50 rounded-lg text-[13px] text-[#1D2939] border border-gray-50">
            {nestedUser?.emailAddress || ""}
          </div>
        </div>

        {/* METADATA BOUNDARY */}
        <div className="border-t border-b border-gray-100 py-4 mt-12">
          <button type="button" className="flex items-center gap-2 text-[13px] font-bold text-[#5925DC]">
            <span className="text-[10px]">▼</span> Metadata
          </button>
        </div>
      </div>
    </div>
  );
}