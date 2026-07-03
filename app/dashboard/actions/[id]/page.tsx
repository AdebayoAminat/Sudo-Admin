

// "use client";

// import React, { use, useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { X, ChevronRight } from "lucide-react";
// import UserActionsService from "@/app/service/userActions.service";

// export default function ActionDetailView({ params }: { params: Promise<{ id: string }> }) {
//   const router = useRouter();
//   const resolvedParams = use(params);
//   const actionId = resolvedParams.id;

//   const [action, setAction] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);

//   // Modal States
//   const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
//   const [isJsonModalOpen, setIsJsonModalOpen] = useState(false);
//   const [emailInput, setEmailInput] = useState("");

//   const fetchActionDetails = async () => {
//     setLoading(true);
//     const service = new UserActionsService();
//     const response = await service.getUserActionById(actionId);
    
//     if (response && !response.error) {
//       const payload = response.data?.data || response.data;
//       setAction(payload);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchActionDetails();
//   }, [actionId]);

//   const handleApprove = async () => {
//     if (!window.confirm("Are you sure you want to approve this action?")) return;
//     setSubmitting(true);
//     const service = new UserActionsService();
    
//     const response = await service.approveUserAction(actionId);
//     if (response && !response.error) {
//       await fetchActionDetails();
//     } else {
//       alert(response?.error?.message || "Failed to approve action");
//     }
//     setSubmitting(false);
//   };

//   const handleReject = async () => {
//     if (!window.confirm("Are you sure you want to reject this action?")) return;
//     setSubmitting(true);
//     const service = new UserActionsService();
    
//     const response = await service.rejectUserAction(actionId);
//     if (response && !response.error) {
//       await fetchActionDetails();
//     } else {
//       alert(response?.error?.message || "Failed to reject action");
//     }
//     setSubmitting(false);
//   };

//   if (loading) return <div className="p-20 text-center text-gray-400 text-[12px]">Loading detail records...</div>;
//   if (!action) return <div className="p-20 text-center text-gray-400 text-[12px]">Action Not Found</div>;

//   const displayActionName = action.type || "Action Detail";
//   const displayTime = action.createdAt ? new Date(action.createdAt).toLocaleString('en-US', {
//     month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true
//   }) : "N/A";

//   const businessId = action.business?.id || "";
//   const businessName = action.business?.name || "N/A";
  
//   const customerDetails = action.oldData?.customer || {};
//   const customerId = customerDetails._id || "N/A";
//   const customerName = customerDetails.name || "N/A";
//   const customerEmail = customerDetails.emailAddress || "N/A";
//   const customerPhone = customerDetails.phoneNumber || "N/A";
//   const customerBvn = customerDetails.individual?.identity?.number || "N/A";

//   const monthlyIncome = action.oldData?.monthlyNetIncome 
//     ? `NGN ${Number(action.oldData.monthlyNetIncome).toLocaleString(undefined, { minimumFractionDigits: 2 })}` 
//     : "NGN 0.00";
//   const requestedAmount = action.oldData?.amountRequested 
//     ? `NGN ${Number(action.oldData.amountRequested).toLocaleString(undefined, { minimumFractionDigits: 2 })}` 
//     : "NGN 0.00";
//   const approvedAmount = action.data?.body?.approvedAmount 
//     ? `NGN ${Number(action.data.body.approvedAmount).toLocaleString(undefined, { minimumFractionDigits: 2 })}` 
//     : "NGN 0.00";

//   const isSubmitted = action.status === "SUBMITTED";

//   return (
//     <div className="space-y-6 animate-in fade-in duration-500 relative">

//       <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
//         {/* Header Section */}
//         <div className="p-8 text-center space-y-2 border-b border-gray-50 bg-gray-50/10">
//           <h2 className="text-[20px] font-bold text-[#1D2939] lowercase first-letter:uppercase replace-underscore">{displayActionName.replace(/_/g, ' ')}</h2>
//           <p className="text-[12px] text-gray-400">{displayTime}</p>
//           <div className="flex justify-center pt-1">
//             <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase ${
//               action.status === 'APPROVED' 
//                 ? 'bg-[#ECFDF3] text-[#027A48]' 
//                 : isSubmitted
//                 ? 'bg-[#FFFAEB] text-[#B54708]'
//                 : 'bg-[#FEF3F2] text-[#B42318]'
//             }`}>
//               {action.status || "PENDING"}
//             </span>
//           </div>
//         </div>

//         <div className="p-8 space-y-8">
//           {/* Metadata Grid */}
//           <div className="grid grid-cols-2 gap-y-6 text-[12px]">
//             <div className="text-gray-400 font-medium">Business ID</div>
//             <div className="text-[#1D2939] font-medium">{businessId}</div>
            
//             <div className="text-gray-400 font-medium">Business Name</div>
//             <div className="flex items-center gap-2">
//               <span className="text-[#1D2939] font-medium capitalize">{businessName}</span>
//               {businessId && (
//                 <button 
//                   onClick={() => router.push(`/dashboard/businesses/${businessId}`)}
//                   className="text-blue-600 text-[11px] font-bold flex items-center hover:underline"
//                 >
//                   Goto Profile <ChevronRight className="w-3 h-3 ml-0.5" />
//                 </button>
//               )}
//             </div>
            
//             <div className="text-gray-400 font-medium">Initiator</div>
//             <div className="text-[#1D2939] font-medium">{action.initiatorName || "N/A"}</div>
            
//             <div className="text-gray-400 font-medium">Assigned To</div>
//             <button 
//               onClick={() => setIsEmailModalOpen(true)}
//               className="text-blue-600 font-bold text-[11px] text-left hover:underline"
//             >
//               {emailInput || "Add email"}
//             </button>
            
//             {/* Approved By and Approved At rows conditional check */}
//             {!isSubmitted && (
//               <>
//                 <div className="text-gray-400 font-medium">Approved By</div>
//                 <div className="text-[#1D2939] font-medium">{action.approverName || "N/A"}</div>
                
//                 <div className="text-gray-400 font-medium">Approved At</div>
//                 <div className="text-[#1D2939] font-medium">
//                   {action.approvedAt ? new Date(action.approvedAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true }) : "N/A"}
//                 </div>
//               </>
//             )}
            
//             <div className="text-gray-400 font-medium">Raw Data</div>
//             <button 
//               onClick={() => setIsJsonModalOpen(true)}
//               className="text-blue-600 font-bold text-[11px] underline text-left"
//             >
//               View json
//             </button>
//           </div>

//           {/* Customer Information Section */}
//           <div className="space-y-4">
//             <h3 className="bg-[#F9FAFB] p-3 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider rounded">Customer Information</h3>
//             <div className="grid grid-cols-2 gap-y-5 px-3 text-[12px] border-b border-gray-50 pb-6">
//               <div className="text-gray-400 font-medium">Customer ID</div>
//               <div className="text-[#1D2939] font-medium">{customerId}</div>
//               <div className="text-gray-400 font-medium">Customer Name</div>
//               <div className="text-[#1D2939] font-medium capitalize">{customerName}</div>
//               <div className="text-gray-400 font-medium">Email Address</div>
//               <div className="text-[#1D2939] font-medium">{customerEmail}</div>
//               <div className="text-gray-400 font-medium">Phone Number</div>
//               <div className="text-[#1D2939] font-medium">{customerPhone}</div>
//               <div className="text-gray-400 font-medium">BVN Number</div>
//               <div className="text-[#1D2939] font-medium">{customerBvn}</div>
//             </div>
//           </div>

//           {/* Card Request Information Section */}
//           <div className="space-y-4">
//             <h3 className="bg-[#F9FAFB] p-3 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider rounded">Card Request Information</h3>
//             <div className="space-y-1.5 px-3">
//               <div className="flex justify-between py-3 text-[12px] border-b border-gray-50">
//                 <span className="text-gray-400 font-medium">Monthly Net Income</span>
//                 <span className="font-medium text-[#1D2939]">{monthlyIncome}</span>
//               </div>
//               <div className="flex justify-between p-4 bg-[#FFFCF5] text-[12px] rounded-lg mt-2">
//                 <span className="text-[#B54708] font-bold">Requested Amount</span>
//                 <span className="font-bold text-[#1D2939]">{requestedAmount}</span>
//               </div>
//               <div className="flex justify-between p-4 bg-[#F6FEF9] text-[12px] rounded-lg">
//                 <span className="text-[#027A48] font-bold">Approved Amount</span>
//                 <span className="font-bold text-[#1D2939]">{approvedAmount}</span>
//               </div>
//             </div>
//           </div>

//           {/* Action Footer Buttons */}
//           {isSubmitted && (
//             <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-50">
//               <button
//                 onClick={handleReject}
//                 disabled={submitting}
//                 className="w-[140px] h-[44px] border border-[#D0D5DD] rounded-lg text-[14px] font-bold text-[#344054] bg-white hover:bg-gray-50 transition-all disabled:opacity-50"
//               >
//                 Reject
//               </button>
//               <button
//                 onClick={handleApprove}
//                 disabled={submitting}
//                 className="w-[140px] h-[44px] bg-[#0A192F] rounded-lg text-[14px] font-bold text-white hover:bg-opacity-90 transition-all disabled:opacity-50 shadow-sm"
//               >
//                 Approve
//               </button>
//             </div>
//           )}

//         </div>
//       </div>

//       {/* --- MODALS --- */}

//       {/* Email Assignment Modal */}
//       {isEmailModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
//           <div className="bg-white rounded-lg w-full max-w-[400px] shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
//             <div className="flex justify-between items-center p-6 border-b border-gray-50">
//               <h4 className="font-bold text-[#1D2939] text-[14px]">Assign action to</h4>
//               <button onClick={() => setIsEmailModalOpen(false)}><X className="w-4 h-4 text-gray-400" /></button>
//             </div>
//             <div className="p-6 space-y-4">
//               <div className="space-y-2">
//                 <label className="text-[11px] text-gray-400 font-bold uppercase">Email Address</label>
//                 <input 
//                   type="email" 
//                   placeholder="user@sudo.africa"
//                   className="w-full h-12 border border-blue-200 rounded-lg px-4 text-[13px] outline-none focus:border-blue-500 transition-all"
//                   value={emailInput}
//                   onChange={(e) => setEmailInput(e.target.value)}
//                 />
//               </div>
//               <button 
//                 onClick={() => setIsEmailModalOpen(false)}
//                 className="w-full h-12 bg-[#032345] text-white rounded-lg font-bold text-[13px] hover:bg-opacity-90 transition-all shadow-md"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* JSON Viewer Modal */}
//       {isJsonModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
//           <div className="bg-white rounded-lg w-full max-w-[600px] shadow-xl animate-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col">
//             <div className="flex justify-between items-center p-5 border-b border-gray-50">
//               <span className="text-[11px] font-bold text-gray-400 uppercase">Request Data</span>
//               <button onClick={() => setIsJsonModalOpen(false)}><X className="w-4 h-4 text-gray-400" /></button>
//             </div>
//             <div className="p-6 overflow-y-auto bg-white">
//               <pre className="text-[12px] text-green-600 font-mono leading-relaxed bg-[#F9FAFB] p-4 rounded-lg border border-gray-100">
//                 {JSON.stringify(action, null, 2)}
//               </pre>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import React, { use, useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { X, ChevronRight } from "lucide-react";
// import UserActionsService from "@/app/service/userActions.service";

// export default function ActionDetailView({ params }: { params: Promise<{ id: string }> }) {
//   const router = useRouter();
//   const resolvedParams = use(params);
//   const actionId = resolvedParams.id;

//   const [action, setAction] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);

//   // Modal States
//   const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
//   const [isJsonModalOpen, setIsJsonModalOpen] = useState(false);
//   const [emailInput, setEmailInput] = useState("");

//   const fetchActionDetails = async () => {
//     setLoading(true);
//     const service = new UserActionsService();
//     const response = await service.getUserActionById(actionId);
    
//     if (response && !response.error) {
//       const payload = response.data?.data || response.data;
//       setAction(payload);
//       // Pre-populate input field with existing assignment data if it exists
//       if (payload?.assignedToEmail) {
//         setEmailInput(payload.assignedToEmail);
//       }
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchActionDetails();
//   }, [actionId]);

//   // Handle email assignment update via API call
//   const handleAssignEmail = async () => {
//     if (!emailInput.trim()) {
//       alert("Please enter a valid email address");
//       return;
//     }

//     setSubmitting(true);
//     const service = new UserActionsService();
    
//     // Call updateUserAction with the action payload parameters
//     const response = await service.updateUserAction(actionId);
    
//     if (response && !response.error) {
//       setIsEmailModalOpen(false);
//       await fetchActionDetails(); // Re-fetch data to reflect assignment updates on the UI
//     } else {
//       alert(response?.error?.message || "Failed to assign email to action");
//     }
//     setSubmitting(false);
//   };

//   const handleApprove = async () => {
//     if (!window.confirm("Are you sure you want to approve this action?")) return;
//     setSubmitting(true);
//     const service = new UserActionsService();
    
//     const response = await service.approveUserAction(actionId);
//     if (response && !response.error) {
//       await fetchActionDetails();
//     } else {
//       alert(response?.error?.message || "Failed to approve action");
//     }
//     setSubmitting(false);
//   };

//   const handleReject = async () => {
//     if (!window.confirm("Are you sure you want to reject this action?")) return;
//     setSubmitting(true);
//     const service = new UserActionsService();
    
//     const response = await service.rejectUserAction(actionId);
//     if (response && !response.error) {
//       await fetchActionDetails();
//     } else {
//       alert(response?.error?.message || "Failed to reject action");
//     }
//     setSubmitting(false);
//   };

//   if (loading) return <div className="p-20 text-center text-gray-400 text-[12px]">Loading detail records...</div>;
//   if (!action) return <div className="p-20 text-center text-gray-400 text-[12px]">Action Not Found</div>;

//   const displayActionName = action.type || "Action Detail";
//   const displayTime = action.createdAt ? new Date(action.createdAt).toLocaleString('en-US', {
//     month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true
//   }) : "N/A";

//   const businessId = action.business?.id || "";
//   const businessName = action.business?.name || "N/A";
  
//   const customerDetails = action.oldData?.customer || {};
//   const customerId = customerDetails._id || "N/A";
//   const customerName = customerDetails.name || "N/A";
//   const customerEmail = customerDetails.emailAddress || "N/A";
//   const customerPhone = customerDetails.phoneNumber || "N/A";
//   const customerBvn = customerDetails.individual?.identity?.number || "N/A";

//   const monthlyIncome = action.oldData?.monthlyNetIncome 
//     ? `NGN ${Number(action.oldData.monthlyNetIncome).toLocaleString(undefined, { minimumFractionDigits: 2 })}` 
//     : "NGN 0.00";
//   const requestedAmount = action.oldData?.amountRequested 
//     ? `NGN ${Number(action.oldData.amountRequested).toLocaleString(undefined, { minimumFractionDigits: 2 })}` 
//     : "NGN 0.00";
//   const approvedAmount = action.data?.body?.approvedAmount 
//     ? `NGN ${Number(action.data.body.approvedAmount).toLocaleString(undefined, { minimumFractionDigits: 2 })}` 
//     : "NGN 0.00";

//   const isSubmitted = action.status === "SUBMITTED";

//   return (
//     <div className="space-y-6 animate-in fade-in duration-500 relative">

//       <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
//         {/* Header Section */}
//         <div className="p-8 text-center space-y-2 border-b border-gray-50 bg-gray-50/10">
//           <h2 className="text-[20px] font-bold text-[#1D2939] lowercase first-letter:uppercase replace-underscore">{displayActionName.replace(/_/g, ' ')}</h2>
//           <p className="text-[12px] text-gray-400">{displayTime}</p>
//           <div className="flex justify-center pt-1">
//             <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase ${
//               action.status === 'APPROVED' 
//                 ? 'bg-[#ECFDF3] text-[#027A48]' 
//                 : isSubmitted
//                 ? 'bg-[#FFFAEB] text-[#B54708]'
//                 : 'bg-[#FEF3F2] text-[#B42318]'
//             }`}>
//               {action.status || "PENDING"}
//             </span>
//           </div>
//         </div>

//         <div className="p-8 space-y-8">
//           {/* Metadata Grid */}
//           <div className="grid grid-cols-2 gap-y-6 text-[12px]">
//             <div className="text-gray-400 font-medium">Business ID</div>
//             <div className="text-[#1D2939] font-medium">{businessId}</div>
            
//             <div className="text-gray-400 font-medium">Business Name</div>
//             <div className="flex items-center gap-2">
//               <span className="text-[#1D2939] font-medium capitalize">{businessName}</span>
//               {businessId && (
//                 <button 
//                   onClick={() => router.push(`/dashboard/businesses/${businessId}`)}
//                   className="text-blue-600 text-[11px] font-bold flex items-center hover:underline"
//                 >
//                   Goto Profile <ChevronRight className="w-3 h-3 ml-0.5" />
//                 </button>
//               )}
//             </div>
            
//             <div className="text-gray-400 font-medium">Initiator</div>
//             <div className="text-[#1D2939] font-medium">{action.initiatorName || "N/A"}</div>
            
//             <div className="text-gray-400 font-medium">Assigned To</div>
//             <button 
//               onClick={() => setIsEmailModalOpen(true)}
//               className="text-blue-600 font-bold text-[11px] text-left hover:underline"
//             >
//               {action.assignedToEmail || "Add email"}
//             </button>
            
//             {!isSubmitted && (
//               <>
//                 <div className="text-gray-400 font-medium">Approved By</div>
//                 <div className="text-[#1D2939] font-medium">{action.approverName || "N/A"}</div>
                
//                 <div className="text-gray-400 font-medium">Approved At</div>
//                 <div className="text-[#1D2939] font-medium">
//                   {action.approvedAt ? new Date(action.approvedAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true }) : "N/A"}
//                 </div>
//               </>
//             )}
            
//             <div className="text-gray-400 font-medium">Raw Data</div>
//             <button 
//               onClick={() => setIsJsonModalOpen(true)}
//               className="text-blue-600 font-bold text-[11px] underline text-left"
//             >
//               View json
//             </button>
//           </div>

//           {/* Customer Information Section */}
//           <div className="space-y-4">
//             <h3 className="bg-[#F9FAFB] p-3 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider rounded">Customer Information</h3>
//             <div className="grid grid-cols-2 gap-y-5 px-3 text-[12px] border-b border-gray-50 pb-6">
//               <div className="text-gray-400 font-medium">Customer ID</div>
//               <div className="text-[#1D2939] font-medium">{customerId}</div>
//               <div className="text-gray-400 font-medium">Customer Name</div>
//               <div className="text-[#1D2939] font-medium capitalize">{customerName}</div>
//               <div className="text-gray-400 font-medium">Email Address</div>
//               <div className="text-[#1D2939] font-medium">{customerEmail}</div>
//               <div className="text-gray-400 font-medium">Phone Number</div>
//               <div className="text-[#1D2939] font-medium">{customerPhone}</div>
//               <div className="text-gray-400 font-medium">BVN Number</div>
//               <div className="text-[#1D2939] font-medium">{customerBvn}</div>
//             </div>
//           </div>

//           {/* Card Request Information Section */}
//           <div className="space-y-4">
//             <h3 className="bg-[#F9FAFB] p-3 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider rounded">Card Request Information</h3>
//             <div className="space-y-1.5 px-3">
//               <div className="flex justify-between py-3 text-[12px] border-b border-gray-50">
//                 <span className="text-gray-400 font-medium">Monthly Net Income</span>
//                 <span className="font-medium text-[#1D2939]">{monthlyIncome}</span>
//               </div>
//               <div className="flex justify-between p-4 bg-[#FFFCF5] text-[12px] rounded-lg mt-2">
//                 <span className="text-[#B54708] font-bold">Requested Amount</span>
//                 <span className="font-bold text-[#1D2939]">{requestedAmount}</span>
//               </div>
//               <div className="flex justify-between p-4 bg-[#F6FEF9] text-[12px] rounded-lg">
//                 <span className="text-[#027A48] font-bold">Approved Amount</span>
//                 <span className="font-bold text-[#1D2939]">{approvedAmount}</span>
//               </div>
//             </div>
//           </div>

//           {/* Action Footer Buttons */}
//           {isSubmitted && (
//             <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-50">
//               <button
//                 onClick={handleReject}
//                 disabled={submitting}
//                 className="w-[140px] h-[44px] border border-[#D0D5DD] rounded-lg text-[14px] font-bold text-[#344054] bg-white hover:bg-gray-50 transition-all disabled:opacity-50"
//               >
//                 Reject
//               </button>
//               <button
//                 onClick={handleApprove}
//                 disabled={submitting}
//                 className="w-[140px] h-[44px] bg-[#0A192F] rounded-lg text-[14px] font-bold text-white hover:bg-opacity-90 transition-all disabled:opacity-50 shadow-sm"
//               >
//                 Approve
//               </button>
//             </div>
//           )}

//         </div>
//       </div>

//       {/* --- MODALS --- */}

//       {/* Email Assignment Modal */}
//       {isEmailModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
//           <div className="bg-white rounded-lg w-full max-w-[400px] shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
//             <div className="flex justify-between items-center p-6 border-b border-gray-50">
//               <h4 className="font-bold text-[#1D2939] text-[14px]">Assign action to</h4>
//               <button onClick={() => setIsEmailModalOpen(false)}><X className="w-4 h-4 text-gray-400" /></button>
//             </div>
//             <div className="p-6 space-y-4">
//               <div className="space-y-2">
//                 <label className="text-[11px] text-gray-400 font-bold uppercase">Email Address</label>
//                 <input 
//                   type="email" 
//                   placeholder="user@sudo.africa"
//                   className="w-full h-12 border border-blue-200 rounded-lg px-4 text-[13px] outline-none focus:border-blue-500 transition-all"
//                   value={emailInput}
//                   onChange={(e) => setEmailInput(e.target.value)}
//                   disabled={submitting}
//                 />
//               </div>
//               <button 
//                 onClick={handleAssignEmail}
//                 disabled={submitting}
//                 className="w-full h-12 bg-[#032345] text-white rounded-lg font-bold text-[13px] hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center disabled:opacity-50"
//               >
//                 {submitting ? "Saving..." : "Save"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* JSON Viewer Modal */}
//       {isJsonModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
//           <div className="bg-white rounded-lg w-full max-w-[600px] shadow-xl animate-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col">
//             <div className="flex justify-between items-center p-5 border-b border-gray-50">
//               <span className="text-[11px] font-bold text-gray-400 uppercase">Request Data</span>
//               <button onClick={() => setIsJsonModalOpen(false)}><X className="w-4 h-4 text-gray-400" /></button>
//             </div>
//             <div className="p-6 overflow-y-auto bg-white">
//               <pre className="text-[12px] text-green-600 font-mono leading-relaxed bg-[#F9FAFB] p-4 rounded-lg border border-gray-100">
//                 {JSON.stringify(action, null, 2)}
//               </pre>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import React, { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, ChevronRight } from "lucide-react";
import UserActionsService from "@/app/service/userActions.service";

export default function ActionDetailView({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const actionId = resolvedParams.id;

  const [action, setAction] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Modal States
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isJsonModalOpen, setIsJsonModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const fetchActionDetails = async () => {
    setLoading(true);
    const service = new UserActionsService();
    const response = await service.getUserActionById(actionId);
    
    if (response && !response.error) {
      const payload = response.data?.data || response.data;
      setAction(payload);
      if (payload?.assignedToEmail) {
        setEmailInput(payload.assignedToEmail);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchActionDetails();
  }, [actionId]);

  const handleAssignEmail = async () => {
    if (!emailInput.trim()) {
      alert("Please enter a valid email address");
      return;
    }
    setSubmitting(true);
    const service = new UserActionsService();
    const response = await service.updateUserAction(actionId,);
    if (response && !response.error) {
      setIsEmailModalOpen(false);
      await fetchActionDetails();
    } else {
      alert(response?.error?.message || "Failed to assign email to action");
    }
    setSubmitting(false);
  };

  const handleApprove = async () => {
    if (!window.confirm("Are you sure you want to approve this action?")) return;
    setSubmitting(true);
    const service = new UserActionsService();
    const response = await service.approveUserAction(actionId);
    if (response && !response.error) {
      await fetchActionDetails();
    } else {
      alert(response?.error?.message || "Failed to approve action");
    }
    setSubmitting(false);
  };

  const handleReject = async () => {
    if (!window.confirm("Are you sure you want to reject this action?")) return;
    setSubmitting(true);
    const service = new UserActionsService();
    const response = await service.rejectUserAction(actionId);
    if (response && !response.error) {
      await fetchActionDetails();
    } else {
      alert(response?.error?.message || "Failed to reject action");
    }
    setSubmitting(false);
  };

  if (loading) return <div className="p-20 text-center text-gray-400 text-[12px]">Loading detail records...</div>;
  if (!action) return <div className="p-20 text-center text-gray-400 text-[12px]">Action Not Found</div>;

  const displayActionName = action.type || "Action Detail";
  const displayTime = action.createdAt ? new Date(action.createdAt).toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true
  }) : "N/A";

  const businessId = action.business?.id || action.business || "";
  const businessName = action.business?.name || "Sudo Africa Limited";
  const isSubmitted = action.status === "SUBMITTED";

  // Check action type to determine layout structure
  const isPushNotificationAction = action.type === "SEND_PUSH_NOTIFICATION" || action.type === "send_push_notification";

  // Setup Notification Parsing Fallbacks
  const notificationChannel = action.data?.body?.channel || action.oldData?.channel || "N/A";
  const notificationSubtitle = action.data?.body?.subtitle || action.oldData?.subtitle || "N/A";
  const notificationMessage = action.data?.body?.message || action.oldData?.message || "N/A";

  // Setup Card/Customer Parsing Fallbacks
  const customerDetails = action.oldData?.customer || {};
  const customerId = customerDetails._id || "N/A";
  const customerName = customerDetails.name || "N/A";
  const customerEmail = customerDetails.emailAddress || "N/A";
  const customerPhone = customerDetails.phoneNumber || "N/A";
  const customerBvn = customerDetails.individual?.identity?.number || "N/A";

  const monthlyIncome = action.oldData?.monthlyNetIncome 
    ? `NGN ${Number(action.oldData.monthlyNetIncome).toLocaleString(undefined, { minimumFractionDigits: 2 })}` 
    : "NGN 0.00";
  const requestedAmount = action.oldData?.amountRequested 
    ? `NGN ${Number(action.oldData.amountRequested).toLocaleString(undefined, { minimumFractionDigits: 2 })}` 
    : "NGN 0.00";
  const approvedAmount = action.data?.body?.approvedAmount 
    ? `NGN ${Number(action.data.body.approvedAmount).toLocaleString(undefined, { minimumFractionDigits: 2 })}` 
    : "NGN 0.00";

  return (
    <div className="space-y-6 animate-in fade-in duration-500 relative">
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
        
        {/* Header Section */}
        <div className="p-8 text-center space-y-2 border-b border-gray-50 bg-gray-50/10">
          <h2 className="text-[20px] font-bold text-[#1D2939] lowercase first-letter:uppercase">
            {displayActionName.replace(/_/g, ' ')}
          </h2>
          <p className="text-[12px] text-gray-400">{displayTime}</p>
          <div className="flex justify-center pt-1">
            <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase ${
              action.status === 'APPROVED' 
                ? 'bg-[#ECFDF3] text-[#027A48]' 
                : isSubmitted
                ? 'bg-[#FFFAEB] text-[#B54708]'
                : 'bg-[#FEF3F2] text-[#B42318]'
            }`}>
              {action.status || "PENDING"}
            </span>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-y-6 text-[12px]">
            <div className="text-gray-400 font-medium">Business ID</div>
            <div className="text-[#1D2939] font-medium select-all">{businessId}</div>
            
            <div className="text-gray-400 font-medium">Business Name</div>
            <div className="flex items-center gap-2">
              <span className="text-[#1D2939] font-medium capitalize">{businessName}</span>
              {businessId && (
                <button 
                  onClick={() => router.push(`/dashboard/businesses/${businessId}`)}
                  className="text-blue-600 text-[11px] font-bold flex items-center hover:underline"
                >
                  Goto Profile <ChevronRight className="w-3 h-3 ml-0.5" />
                </button>
              )}
            </div>
            
            <div className="text-gray-400 font-medium">Initiator</div>
            <div className="text-[#1D2939] font-medium">{action.initiatorName || action.initiator || "System"}</div>
            
            <div className="text-gray-400 font-medium">Assigned To</div>
            <button 
              onClick={() => setIsEmailModalOpen(true)}
              className="text-blue-600 font-bold text-[11px] text-left hover:underline"
            >
              {action.assignedToEmail || "Add email"}
            </button>
            
            {!isSubmitted && (
              <>
                <div className="text-gray-400 font-medium">Approved By</div>
                <div className="text-[#1D2939] font-medium">{action.approverName || "N/A"}</div>
                
                <div className="text-gray-400 font-medium">Approved At</div>
                <div className="text-[#1D2939] font-medium">
                  {action.approvedAt ? new Date(action.approvedAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true }) : "N/A"}
                </div>
              </>
            )}
            
            <div className="text-gray-400 font-medium">Raw Data</div>
            <button 
              onClick={() => setIsJsonModalOpen(true)}
              className="text-blue-600 font-bold text-[11px] underline text-left"
            >
              View json
            </button>
          </div>

          {/* --- CONDITIONAL SWITCH RENDERING --- */}
          {isPushNotificationAction ? (
            /* TYPE A: PUSH NOTIFICATION VIEWS */
            <div className="space-y-4">
              <h3 className="bg-[#F9FAFB] p-3 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider rounded">
                Notification Information
              </h3>
              <div className="grid grid-cols-2 gap-y-6 px-3 text-[12px]">
                <div className="text-gray-400 font-medium">Channel</div>
                <div className="text-[#1D2939] font-bold uppercase">{notificationChannel}</div>
                
                <div className="text-gray-400 font-medium">Sub Title</div>
                <div className="text-[#1D2939] font-medium leading-relaxed">{notificationSubtitle}</div>
                
                <div className="text-gray-400 font-medium align-top">Message</div>
                <div className="text-gray-500 font-normal leading-relaxed text-[13px]">{notificationMessage}</div>
              </div>
            </div>
          ) : (
            /* TYPE B: STANDARD CREDIT CARD REQUEST VIEWS */
            <>
              {/* Customer Information Section */}
              <div className="space-y-4">
                <h3 className="bg-[#F9FAFB] p-3 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider rounded">Customer Information</h3>
                <div className="grid grid-cols-2 gap-y-5 px-3 text-[12px] border-b border-gray-50 pb-6">
                  <div className="text-gray-400 font-medium">Customer ID</div>
                  <div className="text-[#1D2939] font-medium">{customerId}</div>
                  <div className="text-gray-400 font-medium">Customer Name</div>
                  <div className="text-[#1D2939] font-medium capitalize">{customerName}</div>
                  <div className="text-gray-400 font-medium">Email Address</div>
                  <div className="text-[#1D2939] font-medium">{customerEmail}</div>
                  <div className="text-gray-400 font-medium">Phone Number</div>
                  <div className="text-[#1D2939] font-medium">{customerPhone}</div>
                  <div className="text-gray-400 font-medium">BVN Number</div>
                  <div className="text-[#1D2939] font-medium">{customerBvn}</div>
                </div>
              </div>

              {/* Card Request Information Section */}
              <div className="space-y-4">
                <h3 className="bg-[#F9FAFB] p-3 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider rounded">Card Request Information</h3>
                <div className="space-y-1.5 px-3">
                  <div className="flex justify-between py-3 text-[12px] border-b border-gray-50">
                    <span className="text-gray-400 font-medium">Monthly Net Income</span>
                    <span className="font-medium text-[#1D2939]">{monthlyIncome}</span>
                  </div>
                  <div className="flex justify-between p-4 bg-[#FFFCF5] text-[12px] rounded-lg mt-2">
                    <span className="text-[#B54708] font-bold">Requested Amount</span>
                    <span className="font-bold text-[#1D2939]">{requestedAmount}</span>
                  </div>
                  <div className="flex justify-between p-4 bg-[#F6FEF9] text-[12px] rounded-lg">
                    <span className="text-[#027A48] font-bold">Approved Amount</span>
                    <span className="font-bold text-[#1D2939]">{approvedAmount}</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Action Footer Buttons */}
          {isSubmitted && (
            <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-50">
              <button
                onClick={handleReject}
                disabled={submitting}
                className="w-[140px] h-[44px] border border-[#D0D5DD] rounded-lg text-[14px] font-bold text-[#344054] bg-white hover:bg-gray-50 transition-all disabled:opacity-50"
              >
                Reject
              </button>
              <button
                onClick={handleApprove}
                disabled={submitting}
                className="w-[140px] h-[44px] bg-[#0A192F] rounded-lg text-[14px] font-bold text-white hover:bg-opacity-90 transition-all disabled:opacity-50 shadow-sm"
              >
                Approve
              </button>
            </div>
          )}

        </div>
      </div>

      {/* --- MODALS --- */}

      {/* Email Assignment Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-lg w-full max-w-[400px] shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-50">
              <h4 className="font-bold text-[#1D2939] text-[14px]">Assign action to</h4>
              <button onClick={() => setIsEmailModalOpen(false)}><X className="w-4 h-4 text-gray-400" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-[11px] text-gray-400 font-bold uppercase">Email Address</label>
                <input 
                  type="email" 
                  placeholder="user@sudo.africa"
                  className="w-full h-12 border border-blue-200 rounded-lg px-4 text-[13px] outline-none focus:border-blue-500 transition-all"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  disabled={submitting}
                />
              </div>
              <button 
                onClick={handleAssignEmail}
                disabled={submitting}
                className="w-full h-12 bg-[#032345] text-white rounded-lg font-bold text-[13px] hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center disabled:opacity-50"
              >
                {submitting ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* JSON Viewer Modal */}
      {isJsonModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-lg w-full max-w-[600px] shadow-xl animate-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-5 border-b border-gray-50">
              <span className="text-[11px] font-bold text-gray-400 uppercase">Request Data</span>
              <button onClick={() => setIsJsonModalOpen(false)}><X className="w-4 h-4 text-gray-400" /></button>
            </div>
            <div className="p-6 overflow-y-auto bg-white">
              <pre className="text-[12px] text-green-600 font-mono leading-relaxed bg-[#F9FAFB] p-4 rounded-lg border border-gray-100">
                {JSON.stringify(action, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}