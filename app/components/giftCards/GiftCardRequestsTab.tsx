

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";

// // Added extra mock fields to support the detailed layout
// const MOCK_REQUESTS = [
//   { 
//     id: "6a293c9b4053736258b31414",
//     scheme: "AfriGo", 
//     date: "3/17/26", 
//     time: "9:48 AM", 
//     color: "white", 
//     value: "NGN100,000.00", 
//     status: "Canceled", 
//     shipping: "awaiting_payment", 
//     deliveryDate: "3/20/26", 
//     attached: "false", 
//     linked: "false", 
//     address: "Ademola Adetokunbo Wuse 2, Abuja, Federal Capital Territory",
//     cardFee: "₦20.00",
//     shippingFee: "₦4.00",
//     totalAmount: "₦100,024.00",
//     bankName: "Safe Haven MFB",
//     accountNumber: "6028505238",
//     accountName: "SUDO Checkout",
//     externalReference: "gift_req_1781087386810",
//     accountId: "6a293c9b48815b0024db2612",
//     accountReference: "gift_req_1781087386810",
//     fulfillmentType: "Home Delivery",
//     receiverName: "Michael Ojo",
//     receiverEmail: "trillzglobal@gmail.com",
//     receiverPhoneNumber: "+234 903 287 8128"
//   },
//   { 
//     id: "6a293c9b4053736258b31415",
//     scheme: "Verve", 
//     date: "3/14/26", 
//     time: "7:12 PM", 
//     color: "black", 
//     value: "NGN25,000.00", 
//     status: "Completed", 
//     shipping: "shipped", 
//     deliveryDate: "3/28/26", 
//     attached: "true", 
//     linked: "false", 
//     address: "Stanley Iwu cresent, Dawaki, Aba, Abia",
//     cardFee: "₦20.00",
//     shippingFee: "₦4.00",
//     totalAmount: "₦25,024.00",
//     bankName: "Safe Haven MFB",
//     accountNumber: "6028505239",
//     accountName: "SUDO Checkout",
//     externalReference: "gift_req_1781087386811",
//     accountId: "6a293c9b48815b0024db2613",
//     accountReference: "gift_req_1781087386811",
//     fulfillmentType: "Home Delivery",
//     receiverName: "Jane Doe",
//     receiverEmail: "jane@example.com",
//     receiverPhoneNumber: "+234 803 000 0001"
//   },
// ];

// const STATUS_OPTIONS = ["Completed", "Canceled", "Pending"];

// const GiftCardRequestsTab = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [searchQuery, setSearchQuery] = useState("");

//   // URL parsing strategy
//   const rawTab = searchParams.get("tab") || "giftCardRequest";
//   const tabParts = rawTab.split("/");
//   const currentTabBase = tabParts[0]; // will be "giftCardRequest"
//   const selectedId = tabParts[1] || null;

//   // Modals view states
//   const [showAttachModal, setShowAttachModal] = useState(false);
//   const [showStatusModal, setShowStatusModal] = useState(false);
//   const [cardPanInput, setCardPanInput] = useState("");
//   const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

//   // Active view selectors
//   const activeRequest = MOCK_REQUESTS.find((req) => req.id === selectedId);

//   const headers = ["SCHEME", "COLOR", "CARD VALUE", "STATUS", "SHIPPING STATUS", "DELIVERY DATE", "ATTACHED", "LINKED", "DELIVERY ADDRESS"];

//   const filteredRequests = MOCK_REQUESTS.filter((req) => {
//     const searchLower = searchQuery.toLowerCase();
//     return (
//       req.scheme.toLowerCase().includes(searchLower) ||
//       req.status.toLowerCase().includes(searchLower) ||
//       req.address.toLowerCase().includes(searchLower)
//     );
//   });

//   const handleRowClick = (id: string) => {
//     router.push(`/dashboard/giftCard?tab=${currentTabBase}/${id}`);
//   };

//   const handleBack = () => {
//     router.push(`/dashboard/giftCard?tab=${currentTabBase}`);
//   };

//   // --- DETAILS VIEW LAYOUT ---
//   if (activeRequest) {
//     return (
//       <div className="space-y-6 animate-in fade-in duration-300 text-left">


//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
//           {/* LEFT COLUMN: REQUEST & ACCOUNT METADATA */}
//           <div className="lg:col-span-7 space-y-8 bg-white border border-gray-100/80 p-8 rounded-xl shadow-xs">
//             {/* Request Details Section */}
//             <div>
//               <h3 className="text-[14px] font-bold text-[#1D2939] mb-5">Request Details</h3>
//               <div className="space-y-3.5 text-[12.5px]">
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Request Date</span><span className="font-medium text-[#1D2939]">{activeRequest.date} at {activeRequest.time}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Scheme</span><span className="font-medium text-[#1D2939]">{activeRequest.scheme}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Color</span><span className="font-medium text-[#1D2939] capitalize">{activeRequest.color}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Request status</span><span className="font-bold text-[#1D2939] lowercase">{activeRequest.status}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Value</span><span className="font-bold text-[#1D2939]">{activeRequest.value}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Fee</span><span className="font-bold text-[#1D2939]">{activeRequest.cardFee}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Shipping Fee</span><span className="font-bold text-[#1D2939]">{activeRequest.shippingFee}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Total Amount</span><span className="font-bold text-[#1D2939]">{activeRequest.totalAmount}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Attached</span><span className="font-medium text-[#1D2939]">{activeRequest.attached}</span></div>
//                 <div className="flex justify-between pb-1"><span className="text-gray-400">Card Linked</span><span className="font-medium text-[#1D2939]">{activeRequest.linked}</span></div>
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
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Shipping Status</span><span className="font-bold text-[#1D2939]">{activeRequest.shipping}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Receiver Name</span><span className="font-medium text-[#1D2939]">{activeRequest.receiverName}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Receiver Email</span><span className="font-medium text-[#1D2939]">{activeRequest.receiverEmail}</span></div>
//                 <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Receiver phoneNumber</span><span className="font-medium text-[#1D2939]">{activeRequest.receiverPhoneNumber}</span></div>
//                 <div className="flex flex-col gap-1.5 pt-1">
//                   <span className="text-gray-400">Delivery Address</span>
//                   <span className="font-medium text-[#1D2939] leading-relaxed text-left">{activeRequest.address}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* POPUP MODAL: ATTACH CARD */}
//         {showAttachModal && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
//             <div className="bg-white rounded-xl shadow-2xl max-w-[440px] w-full p-8 relative">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-[15px] font-bold text-[#1D2939]">Attach Card to Request</h2>
//                 <button onClick={() => setShowAttachModal(false)} className="text-gray-400 hover:text-black text-lg">✕</button>
//               </div>
//               <div className="space-y-5">
//                 <div>
//                   <label className="block text-[11px] font-bold text-[#475467] uppercase tracking-wider mb-2">Card PAN</label>
//                   <input 
//                     type="text" 
//                     placeholder="Card PAN" 
//                     value={cardPanInput}
//                     onChange={(e) => setCardPanInput(e.target.value)}
//                     className="w-full bg-[#F4F5F7]/60 border border-gray-100 rounded-lg px-4 py-3.5 text-[13px]"
//                   />
//                 </div>
//                 <button onClick={() => setShowAttachModal(false)} className="w-full bg-[#0B192C] text-white text-[13px] font-bold py-3.5 rounded-lg">
//                   Attach Card
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* POPUP MODAL: UPDATE STATUS */}
//         {showStatusModal && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
//             <div className="bg-white rounded-xl shadow-2xl max-w-[440px] w-full p-8 relative">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-[15px] font-bold text-[#1D2939]">Update Request Status</h2>
//                 <button onClick={() => setShowStatusModal(false)} className="text-gray-400 hover:text-black text-lg">✕</button>
//               </div>
//               <div className="space-y-6 relative">
//                 <div className="relative">
//                   <label className="block text-[11px] font-bold text-[#475467] uppercase tracking-wider mb-2">Status</label>
//                   <button
//                     type="button"
//                     onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
//                     className="w-full bg-[#F4F5F7]/60 border border-transparent rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] font-medium flex justify-between items-center outline-none"
//                   >
//                     <span className="capitalize">{activeRequest.status}</span>
//                     <span>▼</span>
//                   </button>

//                   {statusDropdownOpen && (
//                     <div className="absolute left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-lg shadow-xl z-20 divide-y divide-gray-50">
//                       {STATUS_OPTIONS.map((status) => (
//                         <button
//                           key={status}
//                           type="button"
//                           onClick={() => setStatusDropdownOpen(false)}
//                           className="w-full text-left px-4 py-3 text-[13px] text-[#344054] hover:bg-[#F9FAFB]"
//                         >
//                           {status}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 <button onClick={() => setShowStatusModal(false)} className="w-full bg-[#0B192C] text-white text-[13px] font-bold py-3.5 rounded-lg">
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
//           Showing <span className="text-[#1D2939]">0 - {filteredRequests.length}</span> of <span className="text-[#1D2939]">{MOCK_REQUESTS.length}</span> Requests
//         </p>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <input 
//               type="text" 
//               placeholder="Search scheme, status, or address..." 
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-4 pr-11 py-2 bg-white border border-gray-100 rounded-lg text-[12px] w-72 outline-none focus:border-[#1D2939] transition-all" 
//             />
//             <div className="absolute right-3.5 top-2.5 opacity-30">
//                <Image src="/images/search.svg" alt="Search" width={16} height={16} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* DATA TABLE */}
//       <div className="w-full bg-white border border-gray-50 rounded-xl overflow-x-auto shadow-sm">
//         <table className="w-full text-left border-collapse">
//           <thead className="bg-gray-50 border-b border-gray-100">
//             <tr>
//               {headers.map((header) => (
//                 <th key={header} className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase whitespace-nowrap text-center first:text-left">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {filteredRequests.length > 0 ? (
//               filteredRequests.map((req, i) => (
//                 <tr 
//                   key={i} 
//                   onClick={() => handleRowClick(req.id)}
//                   className="hover:bg-gray-50/50 transition-colors cursor-pointer group text-[12px] text-gray-500"
//                 >
//                   <td className="px-6 py-8">
//                     <p className="font-bold text-[#1D2939] whitespace-nowrap">{req.scheme}</p>
//                     <p className="text-[10px] text-gray-400 whitespace-nowrap mt-1">{req.date}, {req.time}</p>
//                   </td>
//                   <td className="px-6 py-8 text-center">
//                     <span className="px-4 py-1.5 rounded-lg text-[#1D2939] text-[11px] font-medium bg-blue-100 uppercase">
//                       {req.color}
//                     </span>
//                   </td>
//                   <td className="px-6 py-8 font-bold text-[#1D2939] text-center whitespace-nowrap">{req.value}</td>
//                   <td className="px-6 py-8 text-center">
//                     <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold ${
//                       req.status === 'Completed' ? 'bg-[#10B981] text-white' : 'bg-red-500 text-white'
//                     }`}>
//                       {req.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-8 text-gray-400 font-medium text-center italic whitespace-nowrap">{req.shipping}</td>
//                   <td className="px-6 py-8 text-center whitespace-nowrap">{req.deliveryDate}</td>
//                   <td className="px-6 py-8 text-center">{req.attached}</td>
//                   <td className="px-6 py-8 text-center">{req.linked}</td>
//                   <td className="px-6 py-8 text-left min-w-[280px] leading-relaxed text-[#1D2939]">
//                     {req.address}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={headers.length} className="px-6 py-20 text-center text-gray-400 italic">
//                   No requests found matching "{searchQuery}"
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GiftCardRequestsTab;


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import GiftCardsService from "@/app/service/giftCards.service";


const giftCardService = new GiftCardsService();
const STATUS_OPTIONS = ["Completed", "Canceled", "Pending"];

const GiftCardRequestsTab = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const rawTab = searchParams.get("tab") || "giftCardRequest";
  const tabParts = rawTab.split("/");
  const currentTabBase = tabParts[0];
  const selectedId = tabParts[1] || null;

  const [requests, setRequests] = useState<any[]>([]);
  const [activeRequest, setActiveRequest] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [showAttachModal, setShowAttachModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [cardPanInput, setCardPanInput] = useState("");
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const headers = ["SCHEME", "COLOR", "CARD VALUE", "STATUS", "SHIPPING STATUS", "DELIVERY DATE", "ATTACHED", "LINKED", "DELIVERY ADDRESS"];

  // Fetch all requests on mount
  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      try {
        const res = await giftCardService.getAllGiftCardRequests();
        if (res?.data) {
          setRequests(Array.isArray(res.data?.data) ? res.data.data : []);
        }
      } catch (err) {
        console.error("Failed to fetch gift card requests:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  // Fetch request by ID when selectedId changes
  useEffect(() => {
    if (!selectedId) {
      setActiveRequest(null);
      return;
    }

    const fetchById = async () => {
      setLoadingDetail(true);
      try {
        const res = await giftCardService.getGiftCardRequestById(selectedId);
        if (res?.data) {
          setActiveRequest(res.data?.data || null);
        }
      } catch (err) {
        console.error("Failed to fetch gift card request detail:", err);
      } finally {
        setLoadingDetail(false);
      }
    };

    fetchById();
  }, [selectedId]);

  const filteredRequests = requests.filter((req) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      (req.scheme || "").toLowerCase().includes(searchLower) ||
      (req.status || "").toLowerCase().includes(searchLower) ||
      (req.receiver?.deliveryAddress?.street || "").toLowerCase().includes(searchLower)
    );
  });

  const handleRowClick = (id: string) => {
    router.push(`/dashboard/giftCard?tab=${currentTabBase}/${id}`);
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

  // Attach card
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

  // Update request status
  const handleUpdateRequestStatus = async (newStatus: string) => {
    if (!selectedId) return;
    setSubmitting(true);
    try {
      const res = await giftCardService.updateGiftCardRequestStatus(selectedId, { status: newStatus });
      if (res?.data) {
        setActiveRequest((prev: any) => prev ? { ...prev, status: newStatus } : prev);
        setShowStatusModal(false);
        setStatusDropdownOpen(false);
      }
    } catch (err) {
      console.error("Failed to update request status:", err);
    } finally {
      setSubmitting(false);
    }
  };

  // --- LOADING SKELETON (detail) ---
  if (loadingDetail && selectedId) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 h-96 bg-gray-100 rounded-xl" />
          <div className="lg:col-span-5 h-96 bg-gray-100 rounded-xl" />
        </div>
      </div>
    );
  }

  // --- DETAIL VIEW ---
  if (activeRequest && selectedId) {
    const receiver = activeRequest.receiver || {};
    const address = receiver.deliveryAddress || {};
    const va = activeRequest.virtualAccount || {};
    const breakdown = activeRequest.paymentBreakdown || {};

    return (
      <div className="space-y-6 animate-in fade-in duration-300 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-gray-100/80 p-8 rounded-xl shadow-xs">
            <div>
              <h3 className="text-[14px] font-bold text-[#1D2939] mb-5">Request Details</h3>
              <div className="space-y-3.5 text-[12.5px]">
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Request Date</span><span className="font-medium text-[#1D2939]">{formatDate(activeRequest.createdAt)}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Scheme</span><span className="font-medium text-[#1D2939]">{activeRequest.scheme}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Card Color</span><span className="font-medium text-[#1D2939] capitalize">{activeRequest.brand}</span></div>
                <div className="flex justify-between border-b border-gray-50 pb-2"><span className="text-gray-400">Request Status</span><span className="font-bold text-[#1D2939] lowercase">{activeRequest.status}</span></div>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-[440px] w-full p-8 relative">
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
                    className="w-full bg-[#F4F5F7]/60 border border-gray-100 rounded-lg px-4 py-3.5 text-[13px]"
                  />
                </div>
                <button
                  onClick={handleAttachCardSubmit}
                  disabled={submitting}
                  className="w-full bg-[#0B192C] text-white text-[13px] font-bold py-3.5 rounded-lg disabled:opacity-60"
                >
                  {submitting ? "Attaching..." : "Attach Card"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* UPDATE STATUS MODAL */}
        {showStatusModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-[440px] w-full p-8 relative">
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
                    className="w-full bg-[#F4F5F7]/60 border border-transparent rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] font-medium flex justify-between items-center outline-none"
                  >
                    <span className="capitalize">{activeRequest.status}</span>
                    <span>▼</span>
                  </button>
                  {statusDropdownOpen && (
                    <div className="absolute left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-lg shadow-xl z-20 divide-y divide-gray-50">
                      {STATUS_OPTIONS.map((status) => (
                        <button
                          key={status}
                          type="button"
                          onClick={() => {
                            handleUpdateRequestStatus(status);
                            setStatusDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-[13px] text-[#344054] hover:bg-[#F9FAFB]"
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
                  className="w-full bg-[#0B192C] text-white text-[13px] font-bold py-3.5 rounded-lg disabled:opacity-60"
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
          Showing <span className="text-[#1D2939]">0 - {filteredRequests.length}</span> of{" "}
          <span className="text-[#1D2939]">{requests.length}</span> Requests
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search scheme, status, or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-4 pr-11 py-2 bg-white border border-gray-100 rounded-lg text-[12px] w-72 outline-none focus:border-[#1D2939] transition-all"
          />
          <div className="absolute right-3.5 top-2.5 opacity-30">
            <Image src="/images/search.svg" alt="Search" width={16} height={16} />
          </div>
        </div>
      </div>

      <div className="w-full bg-white border border-gray-50 rounded-xl overflow-x-auto shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-6 py-4 text-[10px] font-bold text-[#1D2939] tracking-wider uppercase whitespace-nowrap text-center first:text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              [...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td colSpan={headers.length} className="px-6 py-4">
                    <div className="h-8 bg-gray-100 rounded animate-pulse" />
                  </td>
                </tr>
              ))
            ) : filteredRequests.length > 0 ? (
              filteredRequests.map((req) => {
                const deliveryAddr = req.receiver?.deliveryAddress;
                const fullAddress = deliveryAddr
                  ? `${deliveryAddr.street}, ${deliveryAddr.city}, ${deliveryAddr.state}`
                  : "—";
                return (
                  <tr
                    key={req._id}
                    onClick={() => handleRowClick(req._id)}
                    className="hover:bg-gray-50/50 transition-colors cursor-pointer group text-[12px] text-gray-500"
                  >
                    <td className="px-6 py-8">
                      <p className="font-bold text-[#1D2939] whitespace-nowrap">{req.scheme}</p>
                      <p className="text-[10px] text-gray-400 whitespace-nowrap mt-1">{formatDate(req.createdAt)}</p>
                    </td>
                    <td className="px-6 py-8 text-center">
                      <span className="px-4 py-1.5 rounded-lg text-[#1D2939] text-[11px] font-medium bg-blue-100 uppercase">
                        {req.brand || "—"}
                      </span>
                    </td>
                    <td className="px-6 py-8 font-bold text-[#1D2939] text-center whitespace-nowrap">
                      {formatAmount(req.cardValue)}
                    </td>
                    <td className="px-6 py-8 text-center">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold ${
                        req.status === "completed" ? "bg-[#10B981] text-white" : "bg-red-500 text-white"
                      }`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-8 text-gray-400 font-medium text-center italic whitespace-nowrap">{req.shippingStatus}</td>
                    <td className="px-6 py-8 text-center whitespace-nowrap">{formatDate(req.deliveryDate)}</td>
                    <td className="px-6 py-8 text-center">{String(req.cardAttached)}</td>
                    <td className="px-6 py-8 text-center">{String(req.cardLinked)}</td>
                    <td className="px-6 py-8 text-left min-w-[280px] leading-relaxed text-[#1D2939]">
                      {fullAddress}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={headers.length} className="px-6 py-20 text-center text-gray-400 italic">
                  No requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GiftCardRequestsTab;