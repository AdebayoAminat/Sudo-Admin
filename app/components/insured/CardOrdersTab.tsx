// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// const MOCK_ORDERS = [
//   {
//     id: "ORD-001",
//     customer: "Merit Benard",
//     nameOnCard: "Seth Merit",
//     phone: "+2349010469041",
//     cardType: "Verve",
//     status: "Initiated",
//     address: "Busa Plaza by madam Calab...",
//     createdAt: "Jan 31, 2026, 11:32:28 AM"
//   },
//   {
//     id: "ORD-002",
//     customer: "Hakeem Lawal",
//     nameOnCard: "Hakeem Lawal",
//     phone: "+2348034272941",
//     cardType: "Verve",
//     status: "Delivered",
//     address: "UNILAG campus shuttle par...",
//     createdAt: "Jul 19, 2024, 1:16:59 PM"
//   }
// ];

// const STATUS_OPTIONS = ["Initiated", "Processing", "Dispatched", "Delivered", "Cancelled"];

// export default function CardOrdersTab() {
//   const [orders, setOrders] = useState(MOCK_ORDERS);
//   const [selectedOrder, setSelectedOrder] = useState<typeof MOCK_ORDERS[0] | null>(null);
//   const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
//   const [chosenStatus, setChosenStatus] = useState("");

//   const headers = ["CUSTOMER", "NAME ON CARD", "PHONE", "CARD TYPE", "STATUS", "ADDRESS", "CREATED AT"];

//   const openUpdateModal = (order: typeof MOCK_ORDERS[0]) => {
//     setSelectedOrder(order);
//     setChosenStatus(order.status);
//     setStatusDropdownOpen(false);
//   };

//   const handleUpdateStatus = () => {
//     if (!selectedOrder) return;
//     setOrders(prev =>
//       prev.map(o => (o.id === selectedOrder.id ? { ...o, status: chosenStatus } : o))
//     );
//     setSelectedOrder(null);
//   };

//   return (
//     <div className="space-y-6 animate-in fade-in duration-300">
      
//       {/* UTILITY COUNT HEADER */}
//       <div className="flex justify-between items-center">
//         <p className="text-[13px] text-[#848D9A] font-medium">
//           Showing <span className="text-[#1D2939] font-bold">{orders.length}</span> Requests
//         </p>
//       </div>

//       {/* DATA MATRIX TABLE */}
//       <div className="w-full bg-white border border-gray-100/70 rounded-xl overflow-hidden shadow-xs">
//         <table className="w-full text-left border-collapse">
//           <thead className="bg-[#FCFCFD] border-b border-gray-100">
//             <tr>
//               {headers.map((header) => (
//                 <th key={header} className="px-6 py-4 text-[11px] font-bold text-[#475467] tracking-wider uppercase">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {orders.map((order) => (
//               <tr 
//                 key={order.id} 
//                 onClick={() => openUpdateModal(order)}
//                 className="hover:bg-[#F9FAFB]/60 transition-colors cursor-pointer group"
//               >
//                 <td className="px-6 py-4 text-[13px] font-medium text-[#1D2939]">{order.customer}</td>
//                 <td className="px-6 py-4 text-[13px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">
//                   {order.nameOnCard}
//                 </td>
//                 <td className="px-6 py-4 text-[12.5px] text-[#475467] font-medium">{order.phone}</td>
//                 <td className="px-6 py-4 text-[12.5px] text-[#475467] font-medium">{order.cardType}</td>
//                 <td className="px-6 py-4">
//                   <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide ${
//                     order.status === "Delivered" 
//                       ? "bg-blue-50 text-blue-700" 
//                       : "bg-[#EFF6FF] text-[#1E40AF]"
//                   }`}>
//                     {order.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 text-[12.5px] text-[#475467] max-w-[200px] truncate">{order.address}</td>
//                 <td className="px-6 py-4 text-[11px] text-[#98A2B3] font-medium">{order.createdAt}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* PAGINATION CONTROL FOOTHOLD */}
//       <div className="flex justify-end items-center gap-2 mt-4">
//         <button className="p-1.5 rounded-md border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-40" disabled>
//           ‹
//         </button>
//         <span className="w-6 h-6 rounded-full bg-[#1D2939] text-white flex items-center justify-center text-[11px] font-bold">
//           1
//         </span>
//         <button className="p-1.5 rounded-md border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-40" disabled>
//           ›
//         </button>
//       </div>

//       {/* INTERACTIVE POPUP MODAL (image_f1c24d.png) */}
//       {selectedOrder && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
//           <div className="bg-white rounded-xl shadow-2xl max-w-[450px] w-full p-8 animate-in zoom-in-95 duration-200 relative">
            
//             {/* Modal Heading Section */}
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-[14px] font-black uppercase tracking-wider text-[#1D2939]">
//                 UPDATE CARD ORDER
//               </h2>
//               <button 
//                 onClick={() => setSelectedOrder(null)}
//                 className="text-gray-400 hover:text-black font-normal text-lg transition-colors outline-none"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Inputs Body Matrix */}
//             <div className="space-y-5">
              
//               {/* Name On Card Read-Only Layout */}
//               <div>
//                 <label className="block text-[12px] font-bold text-[#475467] mb-2">
//                   Name On Card
//                 </label>
//                 <div className="w-full bg-[#F4F5F7] border border-transparent rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] font-medium">
//                   {selectedOrder.nameOnCard}
//                 </div>
//               </div>

//               {/* Status Update Dynamic Input */}
//               <div className="relative">
//                 <label className="block text-[12px] font-bold text-[#475467] mb-2">
//                   Order Status
//                 </label>
                
//                 <button
//                   type="button"
//                   onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
//                   className="w-full bg-white border border-[#034EA2] rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] font-medium flex justify-between items-center focus:outline-none"
//                 >
//                   <span>{chosenStatus || "Choose Status"}</span>
//                   <Image 
//                     src={"/images/caret-down.svg"} 
//                     alt="toggle drop-down" 
//                     width={11} 
//                     height={11} 
//                     className="opacity-40"
//                   />
//                 </button>

//                 {/* Status Dropdown Options Menu */}
//                 {statusDropdownOpen && (
//                   <div className="absolute left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-lg shadow-lg z-10 max-h-[200px] overflow-y-auto divide-y divide-gray-50">
//                     {STATUS_OPTIONS.map((status) => (
//                       <button
//                         key={status}
//                         type="button"
//                         onClick={() => {
//                           setChosenStatus(status);
//                           setStatusDropdownOpen(false);
//                         }}
//                         className="w-full text-left px-4 py-3 text-[13px] text-[#344054] hover:bg-[#F9FAFB] transition-colors"
//                       >
//                         {status}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//             </div>

//             {/* Action Interaction Row */}
//             <div className="flex justify-end mt-8">
//               <button
//                 onClick={handleUpdateStatus}
//                 className="bg-[#0B192C] text-white text-[12.5px] font-bold px-6 py-3 rounded-lg hover:bg-black transition-all shadow-xs"
//               >
//                 Update Order Status
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
import InsuredService from "@/app/service/insured.service";

const insuredService = new InsuredService();
const STATUS_OPTIONS = ["Initiated", "Processing", "Dispatched", "Delivered", "Cancelled"];

export default function CardOrdersTab() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [chosenStatus, setChosenStatus] = useState("");
  const [currentPage] = useState(0);
  const pageSize = 25;

  const headers = ["CUSTOMER", "NAME ON CARD", "PHONE", "CARD TYPE", "STATUS", "ADDRESS", "CREATED AT"];

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await insuredService.getCardOrders(currentPage, pageSize);
        if ((res as any)?.data) {
          setOrders(Array.isArray((res as any).data?.data) ? (res as any).data.data : []);
        }
      } catch (err) {
        console.error("Failed to fetch card orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currentPage]);

  const openUpdateModal = (order: any) => {
    setSelectedOrder(order);
    setChosenStatus(order.status || "Initiated");
    setStatusDropdownOpen(false);
  };

  const handleUpdateStatus = async () => {
    if (!selectedOrder) return;
    setUpdating(true);
    try {
      const res = await insuredService.updateCardOrder({
        orderId: selectedOrder._id,
        status: chosenStatus,
      });
      if ((res as any)?.status === 200 || (res as any)?.data) {
        // Update locally so UI reflects change immediately
        setOrders((prev) =>
          prev.map((o) => (o._id === selectedOrder._id ? { ...o, status: chosenStatus } : o))
        );
        setSelectedOrder(null);
      }
    } catch (err) {
      console.error("Failed to update card order:", err);
    } finally {
      setUpdating(false);
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true,
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* UTILITY COUNT HEADER */}
      <div className="flex justify-between items-center">
        <p className="text-[13px] text-[#848D9A] font-medium">
          Showing <span className="text-[#1D2939] font-bold">{orders.length}</span> Requests
        </p>
      </div>

      {/* DATA MATRIX TABLE */}
      {loading ? (
        <div className="w-full bg-white border border-gray-100 rounded-xl overflow-hidden animate-pulse">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-4 px-6 py-4 border-b border-gray-50">
              <div className="flex-1 h-4 bg-gray-100 rounded" />
              <div className="flex-1 h-4 bg-gray-100 rounded" />
              <div className="flex-1 h-4 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full bg-white border border-gray-100/70 rounded-xl overflow-hidden shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#FCFCFD] border-b border-gray-100">
              <tr>
                {headers.map((header) => (
                  <th key={header} className="px-6 py-4 text-[11px] font-bold text-[#475467] tracking-wider uppercase">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">
                    No card orders found
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    onClick={() => openUpdateModal(order)}
                    className="hover:bg-[#F9FAFB]/60 transition-colors cursor-pointer group"
                  >
                    <td className="px-6 py-4 text-[13px] font-medium text-[#1D2939]">
                      {order.user?.first_name} {order.user?.last_name || order.user?.company_name}
                    </td>
                    <td className="px-6 py-4 text-[13px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">
                      {order.nameOnCard || order.name_on_card || "—"}
                    </td>
                    <td className="px-6 py-4 text-[12.5px] text-[#475467] font-medium">
                      {order.user?.phone_number || "—"}
                    </td>
                    <td className="px-6 py-4 text-[12.5px] text-[#475467] font-medium">
                      {order.cardType || order.card_type || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide ${
                        order.status === "Delivered"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-[#EFF6FF] text-[#1E40AF]"
                      }`}>
                        {order.status || "Initiated"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[12.5px] text-[#475467] max-w-[200px] truncate">
                      {order.user?.address || "—"}
                    </td>
                    <td className="px-6 py-4 text-[11px] text-[#98A2B3] font-medium">
                      {formatDate(order.createdAt)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* PAGINATION */}
      <div className="flex justify-end items-center gap-2 mt-4">
        <button className="p-1.5 rounded-md border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-40" disabled>
          ‹
        </button>
        <span className="w-6 h-6 rounded-full bg-[#1D2939] text-white flex items-center justify-center text-[11px] font-bold">
          1
        </span>
        <button className="p-1.5 rounded-md border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-40" disabled>
          ›
        </button>
      </div>

      {/* UPDATE MODAL */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-xl shadow-2xl max-w-[450px] w-full p-8 animate-in zoom-in-95 duration-200 relative">

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[14px] font-black uppercase tracking-wider text-[#1D2939]">
                UPDATE CARD ORDER
              </h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-black font-normal text-lg transition-colors outline-none"
              >
                ✕
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-[12px] font-bold text-[#475467] mb-2">
                  Name On Card
                </label>
                <div className="w-full bg-[#F4F5F7] border border-transparent rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] font-medium">
                  {selectedOrder.nameOnCard || selectedOrder.name_on_card || "—"}
                </div>
              </div>

              <div className="relative">
                <label className="block text-[12px] font-bold text-[#475467] mb-2">
                  Order Status
                </label>
                <button
                  type="button"
                  onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                  className="w-full bg-white border border-[#034EA2] rounded-lg px-4 py-3.5 text-[13px] text-[#1D2939] font-medium flex justify-between items-center focus:outline-none"
                >
                  <span>{chosenStatus || "Choose Status"}</span>
                  <Image src="/images/caret-down.svg" alt="toggle" width={11} height={11} className="opacity-40" />
                </button>

                {statusDropdownOpen && (
                  <div className="absolute left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-lg shadow-lg z-10 max-h-[200px] overflow-y-auto divide-y divide-gray-50">
                    {STATUS_OPTIONS.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => { setChosenStatus(status); setStatusDropdownOpen(false); }}
                        className="w-full text-left px-4 py-3 text-[13px] text-[#344054] hover:bg-[#F9FAFB] transition-colors"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={handleUpdateStatus}
                disabled={updating}
                className="bg-[#0B192C] text-white text-[12.5px] font-bold px-6 py-3 rounded-lg hover:bg-black transition-all shadow-xs disabled:opacity-60"
              >
                {updating ? "Updating..." : "Update Order Status"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
