
// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";

// interface GiftCardRequest {
//   id: string;
//   customerName: string;
//   initials: string;
//   color: string;
//   requestDate: string;
//   requestTime: string;
//   cardScheme: string;
//   cardColor: string;
//   requestStatus: string;
//   cardValue: string;
//   cardFee: string;
//   shippingFee: string;
//   totalAmount: string;
//   cardAttached: boolean;
//   cardLinked: boolean;
//   // Account Details
//   bankName: string;
//   accountNumber: string;
//   accountName: string;
//   externalReference: string;
//   accountId: string;
//   accountReference: string;
//   // Shipping Details
//   fulfillmentType: string;
//   deliveryDate: string;
//   shippingStatus: string;
//   receiverName: string;
//   receiverEmail: string;
//   receiverPhoneNumber: string;
//   deliveryAddress: string;
// }

// const MOCK_GIFT_CARDS: GiftCardRequest[] = [
//   {
//     id: "6a293c9b4053736258b31414",
//     customerName: "Jane Doe",
//     initials: "JD",
//     color: "bg-[#1D2939]",
//     requestDate: "3/14/26",
//     requestTime: "12:53 PM",
//     cardScheme: "Verve",
//     cardColor: "Black",
//     requestStatus: "Active",
//     cardValue: "₦250.00",
//     cardFee: "₦20.00",
//     shippingFee: "₦4.00",
//     totalAmount: "₦289.00",
//     cardAttached: false,
//     cardLinked: false,
//     bankName: "Safe Haven MFB",
//     accountNumber: "6028505238",
//     accountName: "SUDO Checkout",
//     externalReference: "gift_req_1781087386810",
//     accountId: "6a293c9b48815b0024db2612",
//     accountReference: "gift_req_1781087386810",
//     fulfillmentType: "Home Delivery",
//     deliveryDate: "Jun 10, 2026, 1:00:00 AM",
//     shippingStatus: "awaiting_payment",
//     receiverName: "Michael Ojo",
//     receiverEmail: "jane@example.com",
//     receiverPhoneNumber: "08030000001",
//     deliveryAddress: "No 81 Chike Nwosu Street, Mpape, Abuja, Abuja, Federal Capital Territory, Nigeria"
//   },
//   {
//     id: "6a293c9b4053736258b31415",
//     customerName: "Rejoice Santa",
//     initials: "RS",
//     color: "bg-[#14B8A6]",
//     requestDate: "2/22/26",
//     requestTime: "1:58 AM",
//     cardScheme: "Verve",
//     cardColor: "Black",
//     requestStatus: "Active",
//     cardValue: "₦500.00",
//     cardFee: "₦20.00",
//     shippingFee: "₦4.00",
//     totalAmount: "₦524.00",
//     cardAttached: false,
//     cardLinked: false,
//     bankName: "Safe Haven MFB",
//     accountNumber: "6028505239",
//     accountName: "SUDO Checkout",
//     externalReference: "gift_req_1781087386811",
//     accountId: "6a293c9b48815b0024db2613",
//     accountReference: "gift_req_1781087386811",
//     fulfillmentType: "Home Delivery",
//     deliveryDate: "Jun 11, 2026, 1:00:00 AM",
//     shippingStatus: "awaiting_payment",
//     receiverName: "Rejoice Santa",
//     receiverEmail: "rejoice@sudo.africa",
//     receiverPhoneNumber: "08024119545",
//     deliveryAddress: "No 12 Logistics Way, Ikeja, Lagos, Nigeria"
//   },
//   {
//     id: "6a293c9b4053736258b31416",
//     customerName: "Tokenna Tokenna",
//     initials: "TT",
//     color: "bg-[#EF4444]",
//     requestDate: "2/19/26",
//     requestTime: "10:06 AM",
//     cardScheme: "Visa",
//     cardColor: "Red",
//     requestStatus: "Active",
//     cardValue: "₦1,000.00",
//     cardFee: "₦20.00",
//     shippingFee: "₦4.00",
//     totalAmount: "₦1,024.00",
//     cardAttached: false,
//     cardLinked: false,
//     bankName: "Safe Haven MFB",
//     accountNumber: "6028505240",
//     accountName: "SUDO Checkout",
//     externalReference: "gift_req_1781087386812",
//     accountId: "6a293c9b48815b0024db2614",
//     accountReference: "gift_req_1781087386812",
//     fulfillmentType: "Home Delivery",
//     deliveryDate: "Jun 12, 2026, 1:00:00 AM",
//     shippingStatus: "awaiting_payment",
//     receiverName: "Tokenna Tokenna",
//     receiverEmail: "tokenna06@gmail.com",
//     receiverPhoneNumber: "07084404192",
//     deliveryAddress: "No 48 Chevron Drive, Lekki, Lagos, Nigeria"
//   },
//   {
//     id: "6a293c9b4053736258b31417",
//     customerName: "Jane Doe",
//     initials: "JD",
//     color: "bg-[#1D2939]",
//     requestDate: "2/16/26",
//     requestTime: "6:47 PM",
//     cardScheme: "Mastercard",
//     cardColor: "Black",
//     requestStatus: "Active",
//     cardValue: "₦200.00",
//     cardFee: "₦20.00",
//     shippingFee: "₦4.00",
//     totalAmount: "₦224.00",
//     cardAttached: false,
//     cardLinked: false,
//     bankName: "Safe Haven MFB",
//     accountNumber: "6028505241",
//     accountName: "SUDO Checkout",
//     externalReference: "gift_req_1781087386813",
//     accountId: "6a293c9b48815b0024db2615",
//     accountReference: "gift_req_1781087386813",
//     fulfillmentType: "Home Delivery",
//     deliveryDate: "Jun 13, 2026, 1:00:00 AM",
//     shippingStatus: "awaiting_payment",
//     receiverName: "Jane Doe",
//     receiverEmail: "trillzglobal@gmail.com",
//     receiverPhoneNumber: "08030000000",
//     deliveryAddress: "No 5 Main Street, Wuse II, Abuja, Nigeria"
//   }
// ];

// const STATUS_OPTIONS = ["Active", "Inactive", "Blocked", "Pending"];

// export default function GiftCardsTab() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
  
//   // Clean string processing for both encoded values ("gift%20card%20request") and raw strings
//   const rawTab = searchParams.get("tab") || "users";
//   const decodedTab = decodeURIComponent(rawTab); 
  
//   // Support both "tab=users/id" and "tab=gift card request/id" patterns safely
//   const tabParts = decodedTab.split("/");
//   const currentTab = tabParts[0]; 
//   const selectedId = tabParts[1] || null;

//   const [records, setRecords] = useState<GiftCardRequest[]>(MOCK_GIFT_CARDS);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Modal Views States
//   const [showAttachModal, setShowAttachModal] = useState(false);
//   const [showStatusModal, setShowStatusModal] = useState(false);
  
//   // Track targeted edit row locally
//   const [editingRecordId, setEditingRecordId] = useState<string | null>(null);

//   // Form Input States
//   const [cardPanInput, setCardPanInput] = useState("");
//   const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

//   const activeRequest = records.find(r => r.id === selectedId);
//   const currentEditingRecord = records.find(r => r.id === editingRecordId);

//   const filteredRecords = records.filter(item => 
//     item.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.receiverEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.receiverPhoneNumber.includes(searchQuery)
//   );

//   // Updates the URL seamlessly using the active base tab string layout
//   const handleSetSelectedId = (id: string | null) => {
//     if (id) {
//       router.push(`/dashboard/giftCard?tab=${currentTab}/${id}`);
//     } else {
//       router.push(`/dashboard/giftCard?tab=${currentTab}`);
//     }
//   };

//   // Form Submission Handlers
//   const handleAttachCardSubmit = () => {
//     if (!cardPanInput.trim()) return;
//     const targetId = selectedId || editingRecordId;
//     if (!targetId) return;

//     setRecords(prev => prev.map(r => r.id === targetId ? { ...r, cardAttached: true } : r));
//     setCardPanInput("");
//     setShowAttachModal(false);
//   };

//   const handleUpdateStatusSubmit = (newStatus: string) => {
//     const targetId = selectedId || editingRecordId;
//     if (!targetId) return;

//     setRecords(prev => prev.map(r => r.id === targetId ? { ...r, requestStatus: newStatus } : r));
//     setShowStatusModal(false);
//     setEditingRecordId(null);
//   };

//   // --- DETAILS DETAIL PAGE VIEW ---
//   if (activeRequest) {
//     return (
//       <div className="space-y-6 animate-in fade-in duration-300">
      
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
//           {/* LEFT COLUMN: REQUEST & ACCOUNT METADATA */}
//           <div className="lg:col-span-7 space-y-8 bg-white border border-gray-100/80 p-8 rounded-xl shadow-xs">
//             {/* Request Details Section */}
//             <div>
//               <h3 className="text-[14px] font-bold text-[#1D2939] mb-5">Request Details</h3>
//               <div className="space-y-3.5 text-[12.5px]">
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Request Date</span><span className="font-medium text-[#1D2939]">{activeRequest.requestDate} at {activeRequest.requestTime}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Scheme</span><span className="font-medium text-[#1D2939]">{activeRequest.cardScheme}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Color</span><span className="font-medium text-[#1D2939]">{activeRequest.cardColor}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Request status</span><span className="font-bold text-emerald-600 lowercase">{activeRequest.requestStatus}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Value</span><span className="font-bold text-[#1D2939]">{activeRequest.cardValue}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Fee</span><span className="font-bold text-[#1D2939]">{activeRequest.cardFee}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Shipping Fee</span><span className="font-bold text-[#1D2939]">{activeRequest.shippingFee}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Total Amount</span><span className="font-bold text-[#1D2939]">{activeRequest.totalAmount}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Attached</span><span className="font-medium text-[#1D2939]">{String(activeRequest.cardAttached)}</span></div>
//                 <div className="flex justify-between pb-1"><span className="text-gray-400">Card Linked</span><span className="font-medium text-[#1D2939]">{String(activeRequest.cardLinked)}</span></div>
//               </div>
//             </div>

//             {/* Account Details Section */}
//             <div className="pt-4 border-t border-gray-100">
//               <h3 className="text-[14px] font-bold text-[#1D2939] mb-5">Account Details</h3>
//               <div className="space-y-3.5 text-[12.5px]">
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Bank Name</span><span className="font-medium text-[#1D2939]">{activeRequest.bankName}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Account Number</span><span className="font-medium text-[#1D2939]">{activeRequest.accountNumber}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Account Name</span><span className="font-medium text-[#1D2939]">{activeRequest.accountName}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">External Reference</span><span className="font-medium text-[#1D2939]">{activeRequest.externalReference}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Account ID</span><span className="font-medium text-[#1D2939] text-xs font-mono">{activeRequest.accountId}</span></div>
//                 <div className="flex justify-between pb-1"><span className="text-gray-400">Account Reference</span><span className="font-medium text-[#1D2939]">{activeRequest.accountReference}</span></div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: ACTIONS & SHIPPING */}
//           <div className="lg:col-span-5 space-y-6">
//             {/* Top Triggers */}
//             <div className="flex items-center gap-4">
//               <button 
//                 onClick={() => setShowAttachModal(true)}
//                 className="flex-1 bg-white border border-[#1D2939] text-[#1D2939] py-3 rounded-lg text-[13px] font-bold hover:bg-gray-50 transition-all"
//               >
//                 Attach Card
//               </button>
//               <button 
//                 onClick={() => setShowStatusModal(true)}
//                 className="flex-1 bg-white border border-[#1D2939] text-[#1D2939] py-3 rounded-lg text-[13px] font-bold hover:bg-gray-50 transition-all"
//               >
//                 Update Status
//               </button>
//             </div>

//             {/* Shipping Details */}
//             <div className="bg-white border border-gray-100/80 p-8 rounded-xl shadow-xs">
//               <h3 className="text-[14px] font-bold text-[#1D2939] mb-5">Shipping Details</h3>
//               <div className="space-y-3.5 text-[12.5px]">
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Fulfillment Type</span><span className="font-medium text-[#1D2939]">{activeRequest.fulfillmentType}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Delivery Date</span><span className="font-medium text-[#1D2939]">{activeRequest.deliveryDate}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Shipping Status</span><span className="font-bold text-[#1D2939]">{activeRequest.shippingStatus}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Receiver Name</span><span className="font-medium text-[#1D2939]">{activeRequest.receiverName}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Receiver Email</span><span className="font-medium text-[#1D2939]">{activeRequest.receiverEmail}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Receiver phoneNumber</span><span className="font-medium text-[#1D2939]">{activeRequest.receiverPhoneNumber}</span></div>
//                 <div className="flex flex-col gap-1.5 pt-1">
//                   <span className="text-gray-400">Delivery Address</span>
//                   <span className="font-medium text-[#1D2939] leading-relaxed text-left">{activeRequest.deliveryAddress}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* POPUP MODAL: ATTACH CARD TO REQUEST */}
//         {showAttachModal && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
//             <div className="bg-white rounded-xl shadow-2xl max-w-[440px] w-full p-8 relative animate-in zoom-in-95 duration-200">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-[15px] font-bold text-[#1D2939]">Attach Card to Request</h2>
//                 <button onClick={() => setShowAttachModal(false)} className="text-gray-400 hover:text-black font-normal text-lg">✕</button>
//               </div>
//               <div className="space-y-5">
//                 <div>
//                   <label className="block text-[11px] font-bold text-[#475467] uppercase tracking-wider mb-2">Card PAN</label>
//                   <input 
//                     type="text" 
//                     placeholder="Card PAN" 
//                     value={cardPanInput}
//                     onChange={(e) => setCardPanInput(e.target.value)}
//                     className="w-full bg-[#F4F5F7]/60 border border-gray-100 rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] placeholder-gray-400 focus:outline-none focus:border-[#034EA2] transition-colors"
//                   />
//                 </div>
//                 <button 
//                   onClick={handleAttachCardSubmit}
//                   className="w-full bg-[#0B192C] text-white text-[13px] font-bold py-3.5 rounded-lg hover:bg-black transition-colors"
//                 >
//                   Attach Card
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* POPUP MODAL: UPDATE REQUEST STATUS */}
//         {showStatusModal && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
//             <div className="bg-white rounded-xl shadow-2xl max-w-[440px] w-full p-8 relative animate-in zoom-in-95 duration-200">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-[15px] font-bold text-[#1D2939]">Update Request Status</h2>
//                 <button onClick={() => setShowStatusModal(false)} className="text-gray-400 hover:text-black font-normal text-lg">✕</button>
//               </div>
              
//               <div className="space-y-6 relative">
//                 <div className="relative">
//                   <label className="block text-[11px] font-bold text-[#475467] uppercase tracking-wider mb-2">Status</label>
//                   <button
//                     type="button"
//                     onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
//                     className="w-full bg-[#F4F5F7]/60 border border-transparent rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] font-medium flex justify-between items-center focus:outline-none"
//                   >
//                     <span className="capitalize">{activeRequest.requestStatus || "Choose Status"}</span>
//                     <Image 
//                       src="/images/caret-down.svg" 
//                       alt="Toggle menu dropdown" 
//                       width={10} 
//                       height={10} 
//                       className="opacity-40"
//                     />
//                   </button>

//                   {statusDropdownOpen && (
//                     <div className="absolute left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden divide-y divide-gray-50">
//                       {STATUS_OPTIONS.map((status) => (
//                         <button
//                           key={status}
//                           type="button"
//                           onClick={() => {
//                             handleUpdateStatusSubmit(status);
//                             setStatusDropdownOpen(false);
//                           }}
//                           className="w-full text-left px-4 py-3 text-[13px] text-[#344054] hover:bg-[#F9FAFB] transition-colors capitalize"
//                         >
//                           {status}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <button 
//                   onClick={() => handleUpdateStatusSubmit(activeRequest.requestStatus)}
//                   className="w-full bg-[#0B192C] text-white text-[13px] font-bold py-3.5 rounded-lg hover:bg-black transition-colors"
//                 >
//                   Update Status
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }

//   // --- MAIN TABLE VIEW ---
//   return (
//     <div className="space-y-7 animate-in fade-in duration-500">
//       {/* UTILITY BAR */}
//       <div className="flex justify-between items-center">
//         <p className="text-[12px] text-gray-400 font-medium">
//           Showing <span className="text-[#1D2939]">0 - {filteredRecords.length}</span> of <span className="text-[#1D2939]">{records.length}</span> Users
//         </p>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <input 
//               type="text" 
//               placeholder="Search name, email, phone..." 
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-4 pr-11 py-2 bg-white border border-gray-100 rounded-lg text-[12px] w-64 outline-none focus:border-[#1D2939] transition-all" 
//             />
//             <Image src="/images/search.svg" alt="Search" width={16} height={16} className="absolute right-3.5 top-2.5 opacity-30" />
//           </div>
//         </div>
//       </div>

//       {/* DATA TABLE */}
//       <div className="w-full bg-white border border-gray-50 rounded-xl overflow-hidden shadow-sm">
//         <table className="w-full text-left">
//           <thead className="bg-gray-50 border-b border-gray-100">
//             <tr>
//               <th className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase">NAME</th>
//               <th className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase text-center">EMAIL</th>
//               <th className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase text-center">PHONE</th>
//               <th className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase text-center">STATUS</th>
//               <th className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase text-center"></th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {filteredRecords.length > 0 ? (
//               filteredRecords.map((item) => (
//                 <tr 
//                   key={item.id} 
//                   onClick={() => handleSetSelectedId(item.id)}
//                   className="hover:bg-gray-50/50 transition-colors cursor-pointer group"
//                 >
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-3">
//                       <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-[10px] text-white font-bold`}>
//                         {item.initials}
//                       </div>
//                       <div>
//                         <p className="text-[12px] font-bold text-[#1D2939]">{item.customerName}</p>
//                         <p className="text-[10px] text-gray-400">{item.requestDate}, {item.requestTime}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-[12px] text-gray-500 text-center">{item.receiverEmail}</td>
//                   <td className="px-6 py-4 text-[12px] text-gray-500 text-center">{item.receiverPhoneNumber}</td>
//                   <td className="px-6 py-4 text-center">
//                     <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#10B981] text-white capitalize">
//                       {item.requestStatus}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-right">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation(); // Prevents row redirect from firing
//                         setEditingRecordId(item.id);
//                         setShowStatusModal(true);
//                       }}
//                       className="px-4 py-1.5 border border-gray-200 rounded-lg text-[11px] font-bold text-[#1D2939] hover:bg-gray-50 transition-all"
//                     >
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={5} className="px-6 py-20 text-center text-gray-400 italic">
//                   No records found matching "{searchQuery}"
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* --- POPUP MODAL: UPDATE REQUEST STATUS FROM MAIN TABLE EDIT BUTTON --- */}
//       {showStatusModal && currentEditingRecord && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
//           <div className="bg-white rounded-xl shadow-2xl max-w-[440px] w-full p-8 relative animate-in zoom-in-95 duration-200">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-[15px] font-bold text-[#1D2939]">Update User Status</h2>
//               <button 
//                 onClick={() => {
//                   setShowStatusModal(false);
//                   setEditingRecordId(null);
//                 }} 
//                 className="text-gray-400 hover:text-black font-normal text-lg"
//               >
//                 ✕
//               </button>
//             </div>
            
//             <div className="space-y-6 relative">
//               <div className="relative">
//                 <label className="block text-[11px] font-bold text-[#475467] uppercase tracking-wider mb-2">Status</label>
//                 <button
//                   type="button"
//                   onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
//                   className="w-full bg-[#F4F5F7]/60 border border-transparent rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] font-medium flex justify-between items-center focus:outline-none"
//                 >
//                   <span className="capitalize">{currentEditingRecord.requestStatus || "Choose Status"}</span>
//                   <Image 
//                     src="/images/caret-down.svg" 
//                     alt="Toggle menu dropdown" 
//                     width={10} 
//                     height={10} 
//                     className="opacity-40"
//                   />
//                 </button>

//                 {statusDropdownOpen && (
//                   <div className="absolute left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden divide-y divide-gray-50">
//                     {STATUS_OPTIONS.map((status) => (
//                       <button
//                         key={status}
//                         type="button"
//                         onClick={() => {
//                           handleUpdateStatusSubmit(status);
//                           setStatusDropdownOpen(false);
//                         }}
//                         className="w-full text-left px-4 py-3 text-[13px] text-[#344054] hover:bg-[#F9FAFB] transition-colors capitalize"
//                       >
//                         {status}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <button 
//                 onClick={() => handleUpdateStatusSubmit(currentEditingRecord.requestStatus)}
//                 className="w-full bg-[#0B192C] text-white text-[13px] font-bold py-3.5 rounded-lg hover:bg-black transition-colors"
//               >
//                 Update Status
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import GiftCardsService from "@/app/service/giftCards.service";

const giftCardService = new GiftCardsService();

const STATUS_OPTIONS = ["Active", "Inactive", "Blocked", "Pending"];

export default function GiftCardsTab() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const rawTab = searchParams.get("tab") || "users";
  const decodedTab = decodeURIComponent(rawTab);
  const tabParts = decodedTab.split("/");
  const currentTab = tabParts[0];
  const selectedId = tabParts[1] || null;

  const [records, setRecords] = useState<any[]>([]);
  const [activeRequest, setActiveRequest] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [showAttachModal, setShowAttachModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [editingRecordId, setEditingRecordId] = useState<string | null>(null);
  const [cardPanInput, setCardPanInput] = useState("");
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Fetch all gift card users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await giftCardService.getAllGiftCardUsers(0, 25);
        if (res?.data) {
          setRecords(Array.isArray(res.data?.data) ? res.data.data : []);
        }
      } catch (err) {
        console.error("Failed to fetch gift card users:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Fetch gift card user by ID when selectedId changes
  useEffect(() => {
    if (!selectedId) {
      setActiveRequest(null);
      return;
    }

    const fetchById = async () => {
      setLoadingDetail(true);
      try {
        const res = await giftCardService.getAllGiftCardUsersById(selectedId, {});
        if (res?.data) {
          setActiveRequest(res.data?.data || null);
        }
      } catch (err) {
        console.error("Failed to fetch gift card request:", err);
      } finally {
        setLoadingDetail(false);
      }
    };

    fetchById();
  }, [selectedId]);

  const currentEditingRecord = records.find((r) => r._id === editingRecordId);

  const filteredRecords = records.filter((item) =>
    (`${item.firstName} ${item.lastName}`).toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.emailAddress || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.phoneNumber || "").includes(searchQuery)
  );

  const handleSetSelectedId = (id: string | null) => {
    if (id) {
      router.push(`/dashboard/giftCard?tab=${currentTab}/${id}`);
    } else {
      router.push(`/dashboard/giftCard?tab=${currentTab}`);
    }
  };

  // Attach card — calls AttachCardToGiftCardRequest
  const handleAttachCardSubmit = async () => {
    if (!cardPanInput.trim() || !selectedId) return;
    setSubmitting(true);
    try {
      const res = await giftCardService.AttachCardToGiftCardRequest({
        requestId: selectedId,
        cardPan: cardPanInput,
      });
      if (res?.data) {
        setActiveRequest((prev: any) => prev ? { ...prev, cardAttached: true } : prev);
        setCardPanInput("");
        setShowAttachModal(false);
      }
    } catch (err) {
      console.error("Failed to attach card:", err);
    } finally {
      setSubmitting(false);
    }
  };

  // Update status from detail page — calls updateGiftCardRequestStatus
  const handleUpdateRequestStatus = async (newStatus: string) => {
    if (!selectedId) return;
    setSubmitting(true);
    try {
      const res = await giftCardService.updateGiftCardRequestStatus(selectedId, { status: newStatus });
      if (res?.data) {
        setActiveRequest((prev: any) => prev ? { ...prev, status: newStatus } : prev);
        setShowStatusModal(false);
      }
    } catch (err) {
      console.error("Failed to update request status:", err);
    } finally {
      setSubmitting(false);
    }
  };

  // Update status from table edit button — calls updateGiftCardUserStatus
  const handleUpdateUserStatus = async (newStatus: string) => {
    if (!editingRecordId) return;
    setSubmitting(true);
    try {
      const res = await giftCardService.updateGiftCardUserStatus(editingRecordId, { status: newStatus });
      if (res?.data) {
        setRecords((prev) =>
          prev.map((r) => (r._id === editingRecordId ? { ...r, isBlocked: newStatus === "Blocked" } : r))
        );
        setShowStatusModal(false);
        setEditingRecordId(null);
      }
    } catch (err) {
      console.error("Failed to update user status:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleString("en-US", {
      month: "numeric", day: "numeric", year: "2-digit",
      hour: "numeric", minute: "2-digit", hour12: true,
    });
  };

  const formatAmount = (val: number) =>
    `₦${(val || 0).toLocaleString("en-NG", { minimumFractionDigits: 2 })}`;

  // --- LOADING SKELETON ---
  if (loadingDetail && selectedId) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-gray-100 rounded w-48" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 h-96 bg-gray-100 rounded-xl" />
          <div className="lg:col-span-5 h-96 bg-gray-100 rounded-xl" />
        </div>
      </div>
    );
  }

  // --- DETAIL PAGE VIEW ---
  if (activeRequest && selectedId) {
    const receiver = activeRequest.receiver || {};
    const address = receiver.deliveryAddress || {};
    const va = activeRequest.virtualAccount || {};
    const breakdown = activeRequest.paymentBreakdown || {};

    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-gray-100/80 p-8 rounded-xl shadow-xs">
            <div>
              <h3 className="text-[14px] font-bold text-[#1D2939] mb-5">Request Details</h3>
              <div className="space-y-3.5 text-[12.5px]">
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Request Date</span><span className="font-medium text-[#1D2939]">{formatDate(activeRequest.createdAt)}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Scheme</span><span className="font-medium text-[#1D2939]">{activeRequest.scheme}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Color</span><span className="font-medium text-[#1D2939]">{activeRequest.brand}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Request Status</span><span className="font-bold text-emerald-600 lowercase">{activeRequest.status}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Value</span><span className="font-bold text-[#1D2939]">{formatAmount(activeRequest.cardValue)}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Fee</span><span className="font-bold text-[#1D2939]">{formatAmount(breakdown.cardFee)}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Shipping Fee</span><span className="font-bold text-[#1D2939]">{formatAmount(breakdown.shippingFee)}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Total Amount</span><span className="font-bold text-[#1D2939]">{formatAmount(breakdown.totalAmount)}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Attached</span><span className="font-medium text-[#1D2939]">{String(activeRequest.cardAttached)}</span></div>
                <div className="flex justify-between pb-1"><span className="text-gray-400">Card Linked</span><span className="font-medium text-[#1D2939]">{String(activeRequest.cardLinked)}</span></div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-[14px] font-bold text-[#1D2939] mb-5">Account Details</h3>
              <div className="space-y-3.5 text-[12.5px]">
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Bank Name</span><span className="font-medium text-[#1D2939]">{va.bankName}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Account Number</span><span className="font-medium text-[#1D2939]">{va.accountNumber}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Account Name</span><span className="font-medium text-[#1D2939]">{va.accountName}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">External Reference</span><span className="font-medium text-[#1D2939]">{va.externalReference}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Account ID</span><span className="font-medium text-[#1D2939] text-xs font-mono">{va.accountId}</span></div>
                <div className="flex justify-between pb-1"><span className="text-gray-400">Account Reference</span><span className="font-medium text-[#1D2939]">{va.references?.accountReference}</span></div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowAttachModal(true)}
                className="flex-1 bg-white border border-[#1D2939] text-[#1D2939] py-3 rounded-lg text-[13px] font-bold hover:bg-gray-50 transition-all"
              >
                Attach Card
              </button>
              <button
                onClick={() => setShowStatusModal(true)}
                className="flex-1 bg-white border border-[#1D2939] text-[#1D2939] py-3 rounded-lg text-[13px] font-bold hover:bg-gray-50 transition-all"
              >
                Update Status
              </button>
            </div>

            <div className="bg-white border border-gray-100/80 p-8 rounded-xl shadow-xs">
              <h3 className="text-[14px] font-bold text-[#1D2939] mb-5">Shipping Details</h3>
              <div className="space-y-3.5 text-[12.5px]">
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Fulfillment Type</span><span className="font-medium text-[#1D2939]">{activeRequest.fulfillmentType}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Delivery Date</span><span className="font-medium text-[#1D2939]">{formatDate(activeRequest.deliveryDate)}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Shipping Status</span><span className="font-bold text-[#1D2939]">{activeRequest.shippingStatus}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Receiver Name</span><span className="font-medium text-[#1D2939]">{receiver.firstName} {receiver.otherNames}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Receiver Email</span><span className="font-medium text-[#1D2939]">{receiver.emailAddress}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Receiver Phone</span><span className="font-medium text-[#1D2939]">{receiver.phoneNumber}</span></div>
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="text-gray-400">Delivery Address</span>
                  <span className="font-medium text-[#1D2939] leading-relaxed">
                    {address.street}, {address.city}, {address.state}, {address.country}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ATTACH CARD MODAL */}
        {showAttachModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
            <div className="bg-white rounded-xl shadow-2xl max-w-[440px] w-full p-8 relative animate-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[15px] font-bold text-[#1D2939]">Attach Card to Request</h2>
                <button onClick={() => setShowAttachModal(false)} className="text-gray-400 hover:text-black text-lg">✕</button>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-[11px] font-bold text-[#475467] uppercase tracking-wider mb-2">Card PAN</label>
                  <input
                    type="text"
                    placeholder="Card PAN"
                    value={cardPanInput}
                    onChange={(e) => setCardPanInput(e.target.value)}
                    className="w-full bg-[#F4F5F7]/60 border border-gray-100 rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] placeholder-gray-400 focus:outline-none focus:border-[#034EA2] transition-colors"
                  />
                </div>
                <button
                  onClick={handleAttachCardSubmit}
                  disabled={submitting}
                  className="w-full bg-[#0B192C] text-white text-[13px] font-bold py-3.5 rounded-lg hover:bg-black transition-colors disabled:opacity-60"
                >
                  {submitting ? "Attaching..." : "Attach Card"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* UPDATE REQUEST STATUS MODAL */}
        {showStatusModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
            <div className="bg-white rounded-xl shadow-2xl max-w-[440px] w-full p-8 relative animate-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[15px] font-bold text-[#1D2939]">Update Request Status</h2>
                <button onClick={() => setShowStatusModal(false)} className="text-gray-400 hover:text-black text-lg">✕</button>
              </div>
              <div className="space-y-6 relative">
                <div className="relative">
                  <label className="block text-[11px] font-bold text-[#475467] uppercase tracking-wider mb-2">Status</label>
                  <button
                    type="button"
                    onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                    className="w-full bg-[#F4F5F7]/60 border border-transparent rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] font-medium flex justify-between items-center focus:outline-none"
                  >
                    <span className="capitalize">{activeRequest.status || "Choose Status"}</span>
                    <Image src="/images/caret-down.svg" alt="Toggle" width={10} height={10} className="opacity-40" />
                  </button>
                  {statusDropdownOpen && (
                    <div className="absolute left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden divide-y divide-gray-50">
                      {STATUS_OPTIONS.map((status) => (
                        <button
                          key={status}
                          type="button"
                          onClick={() => {
                            handleUpdateRequestStatus(status);
                            setStatusDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-[13px] text-[#344054] hover:bg-[#F9FAFB] transition-colors capitalize"
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleUpdateRequestStatus(activeRequest.status)}
                  disabled={submitting}
                  className="w-full bg-[#0B192C] text-white text-[13px] font-bold py-3.5 rounded-lg hover:bg-black transition-colors disabled:opacity-60"
                >
                  {submitting ? "Updating..." : "Update Status"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- MAIN TABLE VIEW ---
  return (
    <div className="space-y-7 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <p className="text-[12px] text-gray-400 font-medium">
          Showing <span className="text-[#1D2939]">0 - {filteredRecords.length}</span> of{" "}
          <span className="text-[#1D2939]">{records.length}</span> Users
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search name, email, phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-4 pr-11 py-2 bg-white border border-gray-100 rounded-lg text-[12px] w-64 outline-none focus:border-[#1D2939] transition-all"
          />
          <Image src="/images/search.svg" alt="Search" width={16} height={16} className="absolute right-3.5 top-2.5 opacity-30" />
        </div>
      </div>

      <div className="w-full bg-white border border-gray-50 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase">NAME</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase text-center">EMAIL</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase text-center">PHONE</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase text-center">STATUS</th>
              <th className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase text-center"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              [...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td colSpan={5} className="px-6 py-4">
                    <div className="h-8 bg-gray-100 rounded animate-pulse" />
                  </td>
                </tr>
              ))
            ) : filteredRecords.length > 0 ? (
              filteredRecords.map((item) => {
                const initials = `${item.firstName?.[0] || ""}${item.lastName?.[0] || ""}`.toUpperCase();
                return (
                  <tr
                    key={item._id}
                    onClick={() => handleSetSelectedId(item._id)}
                    className="hover:bg-gray-50/50 transition-colors cursor-pointer group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#1D2939] flex items-center justify-center text-[10px] text-white font-bold">
                          {initials}
                        </div>
                        <div>
                          <p className="text-[12px] font-bold text-[#1D2939]">{item.firstName} {item.lastName}</p>
                          <p className="text-[10px] text-gray-400">{formatDate(item.createdAt)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[12px] text-gray-500 text-center">{item.emailAddress}</td>
                    <td className="px-6 py-4 text-[12px] text-gray-500 text-center">{item.phoneNumber}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold capitalize ${
                        item.isBlocked ? "bg-red-100 text-red-600" : "bg-[#10B981] text-white"
                      }`}>
                        {item.isBlocked ? "Blocked" : "Active"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingRecordId(item._id);
                          setShowStatusModal(true);
                        }}
                        className="px-4 py-1.5 border border-gray-200 rounded-lg text-[11px] font-bold text-[#1D2939] hover:bg-gray-50 transition-all"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-20 text-center text-gray-400 italic">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* UPDATE USER STATUS MODAL */}
      {showStatusModal && currentEditingRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-xl shadow-2xl max-w-[440px] w-full p-8 relative animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[15px] font-bold text-[#1D2939]">Update User Status</h2>
              <button
                onClick={() => { setShowStatusModal(false); setEditingRecordId(null); }}
                className="text-gray-400 hover:text-black text-lg"
              >
                ✕
              </button>
            </div>
            <div className="space-y-6 relative">
              <div className="relative">
                <label className="block text-[11px] font-bold text-[#475467] uppercase tracking-wider mb-2">Status</label>
                <button
                  type="button"
                  onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                  className="w-full bg-[#F4F5F7]/60 border border-transparent rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] font-medium flex justify-between items-center focus:outline-none"
                >
                  <span className="capitalize">{currentEditingRecord.isBlocked ? "Blocked" : "Active"}</span>
                  <Image src="/images/caret-down.svg" alt="Toggle" width={10} height={10} className="opacity-40" />
                </button>
                {statusDropdownOpen && (
                  <div className="absolute left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden divide-y divide-gray-50">
                    {STATUS_OPTIONS.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => {
                          handleUpdateUserStatus(status);
                          setStatusDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[13px] text-[#344054] hover:bg-[#F9FAFB] transition-colors capitalize"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => handleUpdateUserStatus(currentEditingRecord.isBlocked ? "Blocked" : "Active")}
                disabled={submitting}
                className="w-full bg-[#0B192C] text-white text-[13px] font-bold py-3.5 rounded-lg hover:bg-black transition-colors disabled:opacity-60"
              >
                {submitting ? "Updating..." : "Update Status"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
