// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// // Reusable Input Component for the form
// const FormInput = ({ label, value, type = "text", readonly = false }: any) => (
//   <div className="flex-1">
//     <label className="text-[12px] font-medium text-gray-400 mb-2 block">
//       {label}
//     </label>
//     <div className="relative">
//       <input
//         type={type}
//         defaultValue={value}
//         readOnly={readonly}
//         className={`w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] outline-none focus:border-[#034EA2] transition-colors ${
//           readonly ? "bg-gray-50/50 cursor-not-allowed" : "bg-white"
//         }`}
//       />
//       {label === "Registration Country" && (
//         <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
//           <Image
//             src="/images/chevron-down1.svg"
//             alt=""
//             width={12}
//             height={12}
//           />
//         </div>
//       )}
//     </div>
//   </div>
// );

// export default function BusinessInfoTab() {
//   const [activeSubTab, setActiveSubTab] = useState("Business Details");

//   // This data would eventually come from your backend/props
//   const businessData = {
//     name: "black solutions",
//     email: "info@blacksolutions.com",
//     country: "Nigeria",
//   };

//   return (
//     <div className="space-y-8">
//       {/* Sub-navigation inside the white card */}
//       <div className="flex items-center gap-8 border-b border-gray-50">
//         {["Business Details", "Business Name Update"].map((sub) => (
//           <button
//             key={sub}
//             onClick={() => setActiveSubTab(sub)}
//             className={`pb-4 text-[13px] font-bold border-b-2 transition-all ${
//               activeSubTab === sub
//                 ? "text-[#1D2939] border-[#1D2939]"
//                 : "text-gray-400 border-transparent hover:text-gray-600"
//             }`}
//           >
//             {sub}
//           </button>
//         ))}
//       </div>

//       {/* Conditional Content based on Sub-tab */}
//       {activeSubTab === "Business Details" ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl pt-4">
//           <FormInput
//             label="Registration Country"
//             value={businessData.country}
//           />
//           <FormInput
//             label="Email Address"
//             value={businessData.email}
//             readonly={true}
//           />
//         </div>
//       ) : (
//         <div className="pt-4 space-y-6 max-w-lg">
//           <FormInput label="Business Name" value={businessData.name} />
//           <button className="px-8 py-3.5 bg-[#032345] text-white rounded-xl font-bold text-[13px] hover:bg-black transition-colors shadow-sm">
//             Update Name
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";

// Reusable Input Component
const FormInput = ({
  label,
  value,
  type = "text",
  readonly = false,
  onChange,
}: any) => (
  <div className="flex-1">
    <label className="text-[12px] font-medium text-gray-400 mb-2 block">
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        value={value}
        readOnly={readonly}
        onChange={onChange}
        className={`w-full border border-gray-100 rounded-xl py-3 px-4 text-[13px] text-[#1D2939] outline-none focus:border-[#034EA2] transition-colors ${
          readonly ? "bg-gray-50/50 cursor-not-allowed" : "bg-white"
        }`}
      />
      {label === "Registration Country" && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
          <Image
            src="/images/chevron-down1.svg"
            alt=""
            width={12}
            height={12}
          />
        </div>
      )}
    </div>
  </div>
);

export default function BusinessInfoTab({ business, setBusiness }: any) {
  const [activeSubTab, setActiveSubTab] = useState("Business Details");

  return (
    <div className="space-y-8">
      {/* Sub-navigation */}
      <div className="flex items-center gap-8 border-b border-gray-50">
        {["Business Details", "Business Name Update"].map((sub) => (
          <button
            key={sub}
            onClick={() => setActiveSubTab(sub)}
            className={`pb-4 text-[13px] font-bold border-b-2 transition-all ${
              activeSubTab === sub
                ? "text-[#1D2939] border-[#1D2939]"
                : "text-gray-400 border-transparent hover:text-gray-600"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Conditional Content */}
      {activeSubTab === "Business Details" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl pt-4">
          <FormInput
            label="Registration Country"
            value={business.registrationCountry}
            readonly
          />
          <FormInput label="Email Address" value={business.emailAddress} readonly />
        </div>
      ) : (
        <div className="pt-4 max-w-2xl">
          <div className="flex items-end gap-4 w-full">
            <FormInput
              label="Business Name"
              value={business.name}
              onChange={(e: any) =>
                setBusiness({ ...business, name: e.target.value })
              }
            />
            <button className="px-8 py-3.5 bg-[#032345] text-white rounded-xl font-bold text-[13px] hover:bg-black transition-colors shadow-sm whitespace-nowrap h-[46px]">
              Update Name
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
