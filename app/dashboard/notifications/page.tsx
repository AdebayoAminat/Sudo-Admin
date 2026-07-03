

// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { ChevronDown, X, Send } from "lucide-react";

// const mockNotifications = [
//   {
//     id: "6656f1bd413ca6f32efdeab3",
//     dateTime: "May 29, 2024, 10:13:33 AM",
//     initiator: "Super Admin",
//     subtitle: "Big News: Sudo Credit Card Now Available!",
//     message: "Take control of your finances with the new Sudo credit card. Order now on your Root by Sudo app for up to N500,000 credit line!",
//     channel: "INSURED",
//     status: "SUBMITTED",
//   },
//   {
//     id: "6655c9550afe4c97da1ef8ff",
//     dateTime: "May 28, 2024, 1:08:53 PM",
//     initiator: "Super Admin",
//     subtitle: "Big News: Sudo Credit Card Now Available!",
//     message: "Take control of your finances with the new Sudo credit card. Order now on your Root by Sudo app for up to N500,000 credit line!",
//     channel: "SUDO",
//     status: "APPROVED",
//   },
//   {
//     id: "3",
//     dateTime: "May 27, 2024, 09:15:02 AM",
//     initiator: "System",
//     subtitle: "System Maintenance Alert",
//     message: "Planned maintenance scheduled for tonight at 12 AM. Services may be briefly interrupted.",
//     channel: "SUDO",
//     status: "REJECTED",
//   },
// ];

// const NotificationsPage = () => {
//   const router = useRouter();
//   const [filter, setFilter] = useState("All");
//   const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
//   const [isSendModalOpen, setIsSendModalOpen] = useState(false);

//   const statuses = ["All", "SUBMITTED", "APPROVED", "REJECTED"];

//   const filteredNotifications = mockNotifications.filter(
//     (n) => filter === "All" || n.status === filter
//   );

//   return (
//     <div className="p-3 space-y-6 animate-in fade-in duration-500">
//       {/* HEADER & UTILITY BAR */}
//       <div className="flex justify-between items-center px-2">
//         <p className="text-[14px] text-gray-400 font-medium">
//           Showing <span className="text-[#1D2939] font-bold">{filteredNotifications.length} Notifications</span>
//         </p>

//         <div className="flex items-center gap-4">
//           {/* FILTER DROPDOWN */}
//           <div className="relative">
//             <button
//               onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
//               className="flex items-center gap-2 px-4 h-[44px] bg-white border border-gray-100 rounded-lg text-[13px] font-medium text-gray-500"
//             >
//               Filter: <span className="text-[#1D2939] font-bold">{filter}</span>
//               <ChevronDown className="w-4 h-4 text-gray-400" />
//             </button>
//             {isFilterDropdownOpen && (
//               <>
//                 <div className="fixed inset-0 z-10" onClick={() => setIsFilterDropdownOpen(false)} />
//                 <div className="absolute right-0 top-12 w-[160px] bg-white border border-gray-100 rounded-lg shadow-xl z-20 py-2 animate-in slide-in-from-top-1">
//                   {statuses.map((status) => (
//                     <button
//                       key={status}
//                       onClick={() => {
//                         setFilter(status);
//                         setIsFilterDropdownOpen(false);
//                       }}
//                       className="w-full text-left px-5 py-2.5 text-[13px] hover:bg-gray-50"
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>

//           {/* SEND NOTIFICATION BUTTON */}
//           <button
//             onClick={() => setIsSendModalOpen(true)}
//             className="flex items-center gap-2 px-6 h-[44px] bg-[#0A1629] text-white text-[13px] font-bold rounded-lg hover:bg-[#1D2939] transition-colors"
//           >
//             <Send className="w-4 h-4" /> Send Notification
//           </button>
//         </div>
//       </div>

//       {/* TABLE - REMOVED OUTER BORDER AND ROUNDED RADIUS FOR A CLEANER LOOK */}
//       <div className="bg-transparent overflow-hidden">
//         <table className="w-full text-left border-collapse">
//           <thead className="bg-[#F9FAFB] border-b border-gray-100">
//             <tr>
//               {["DATETIME", "INITIATOR", "SUBTITLE", "MESSAGE", "CHANNEL", "STATUS"].map((header) => (
//                 <th key={header} className="px-6 py-4 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider">{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50 bg-white">
//             {filteredNotifications.map((n) => (
//               <tr
//                 key={n.id}
//                 onClick={() => router.push(`/dashboard/notifications/${n.id}`)}
//                 className="hover:bg-gray-50/50 cursor-pointer transition-colors"
//               >
//                 <td className="px-6 py-6 text-[12px] text-gray-400 whitespace-nowrap align-top">{n.dateTime}</td>
//                 <td className="px-6 py-6 text-[13px] text-gray-500 align-top">{n.initiator}</td>
//                 {/* SUBTITLE - FULL DISPLAY */}
//                 <td className="px-6 py-6 text-[13px] font-medium text-[#1D2939] max-w-[200px] align-top leading-relaxed">
//                   {n.subtitle}
//                 </td>
//                 {/* MESSAGE - FULL DISPLAY */}
//                 <td className="px-6 py-6 text-[13px] text-gray-400 max-w-[400px] align-top leading-relaxed">
//                   {n.message}
//                 </td>
//                 <td className="px-6 py-6 text-[11px] font-bold text-gray-500 align-top uppercase">{n.channel}</td>
//                 <td className="px-6 py-6 align-top">
//                   <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
//                     n.status === 'APPROVED' ? 'bg-green-50 text-green-600' :
//                     n.status === 'SUBMITTED' ? 'bg-amber-50 text-amber-600' :
//                     'bg-red-50 text-red-600'
//                   }`}>
//                     {n.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* SEND NOTIFICATION MODAL */}
//       {isSendModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div className="fixed inset-0 bg-[#0A1629]/40 backdrop-blur-[1px]" onClick={() => setIsSendModalOpen(false)} />
//           <div className="bg-white rounded-2xl w-full max-w-[500px] p-8 space-y-6 z-10 relative animate-in zoom-in-95">
//             <div className="flex justify-between items-start">
//               <h2 className="text-[18px] font-bold text-[#1D2939]">Send Notifications</h2>
//               <button onClick={() => setIsSendModalOpen(false)}><X className="w-5 h-5 text-gray-400" /></button>
//             </div>
            
//             <div className="space-y-5">
//               <div className="space-y-2">
//                 <label className="text-[12px] font-medium text-[#344054]">Channel</label>
//                 <div className="relative">
//                   <select className="w-full h-[48px] border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] text-gray-400 px-4 appearance-none outline-none">
//                     <option>Choose Channel</option>
//                     <option>SUDO</option>
//                     <option>INSURED</option>
//                   </select>
//                   <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-[12px] font-medium text-[#344054]">Subtitle</label>
//                 <input type="text" placeholder="message subtitle" className="w-full h-[48px] border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] px-4 outline-none" />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-[12px] font-medium text-[#344054]">Message</label>
//                 <textarea placeholder="Notification message..." className="w-full h-[100px] border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] p-4 outline-none resize-none"></textarea>
//               </div>
//             </div>
            
//             <button className="w-full h-[52px] bg-[#0A1629] text-white rounded-lg text-[14px] font-bold">Send Message</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NotificationsPage;


"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, X, Send } from "lucide-react";
import NotificationsService from "@/app/service/notifications.service";

export interface NotificationItem {
  id: string;
  _id?: string; // fallback matching standard database shapes
  dateTime?: string;
  createdAt?: string;
  initiator?: string;
  subtitle: string;
  message: string;
  channel: string;
  status: "APPROVED" | "SUBMITTED" | "REJECTED";
}

const NotificationsPage = () => {
  const router = useRouter();
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Send Notification Form States
  const [formChannel, setFormChannel] = useState("");
  const [formSubtitle, setFormSubtitle] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const statuses = ["All", "SUBMITTED", "APPROVED", "REJECTED"];

  // Fetch notifications from the backend on mount
  const fetchNotifications = async () => {
    setLoading(true);
    const service = new NotificationsService();
    try {
      const response = await service.getAllNotifications();
      if (response && !("error" in response)) {
        const payload = response.data?.data || response.data;
        if (Array.isArray(payload)) {
          setNotifications(payload);
        }
      }
    } catch (error) {
      console.error("Could not populate notification table list:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Form submission dispatcher calling service endpoint
  const handleSendNotification = async () => {
    if (!formChannel || formChannel === "Choose Channel") {
      alert("Please choose a valid communications channel");
      return;
    }
    if (!formSubtitle.trim() || !formMessage.trim()) {
      alert("Please fill in both the notification subtitle and main message payload");
      return;
    }

    setSubmitting(true);
    const service = new NotificationsService();
    try {
      const payload = {
        channel: formChannel,
        subtitle: formSubtitle,
        message: formMessage,
      };

      const response = await service.sendPushNotification();
      if (response && !("error" in response)) {
        setIsSendModalOpen(false);
        // Clear input tracking states safely
        setFormChannel("");
        setFormSubtitle("");
        setFormMessage("");
        // Re-fetch listing records to display the new entry
        await fetchNotifications();
      }
    } catch (error) {
      alert("Failed to deliver outbound push notification payload");
    }
    setSubmitting(false);
  };

  const filteredNotifications = notifications.filter(
    (n) => filter === "All" || n.status === filter
  );

  if (loading) {
    return <div className="p-8 text-[12px] text-gray-400">Loading notification history logs...</div>;
  }

  return (
    <div className="p-3 space-y-6 animate-in fade-in duration-500">
      {/* HEADER & UTILITY BAR */}
      <div className="flex justify-between items-center px-2">
        <p className="text-[14px] text-gray-400 font-medium">
          Showing <span className="text-[#1D2939] font-bold">{filteredNotifications.length} Notifications</span>
        </p>

        <div className="flex items-center gap-4">
          {/* FILTER DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
              className="flex items-center gap-2 px-4 h-[44px] bg-white border border-gray-100 rounded-lg text-[13px] font-medium text-gray-500"
            >
              Filter: <span className="text-[#1D2939] font-bold">{filter}</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            {isFilterDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsFilterDropdownOpen(false)} />
                <div className="absolute right-0 top-12 w-[160px] bg-white border border-gray-100 rounded-lg shadow-xl z-20 py-2 animate-in slide-in-from-top-1">
                  {statuses.map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setFilter(status);
                        setIsFilterDropdownOpen(false);
                      }}
                      className="w-full text-left px-5 py-2.5 text-[13px] hover:bg-gray-50"
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* SEND NOTIFICATION BUTTON */}
          <button
            onClick={() => setIsSendModalOpen(true)}
            className="flex items-center gap-2 px-6 h-[44px] bg-[#0A1629] text-white text-[13px] font-bold rounded-lg hover:bg-[#1D2939] transition-colors"
          >
            <Send className="w-4 h-4" /> Send Notification
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-transparent overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#F9FAFB] border-b border-gray-100">
            <tr>
              {["DATETIME", "INITIATOR", "SUBTITLE", "MESSAGE", "CHANNEL", "STATUS"].map((header) => (
                <th key={header} className="px-6 py-4 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 bg-white">
            {filteredNotifications.map((n) => {
              const rowId = n.id || n._id || "";
              const timestamp = n.dateTime || n.createdAt || "";
              const displayTime = timestamp ? new Date(timestamp).toLocaleString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true
              }) : "N/A";

              return (
                <tr
                  key={rowId}
                 onClick={() => rowId && router.push(`/dashboard/actions/${rowId}`)}
                  className="hover:bg-gray-50/50 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-6 text-[12px] text-gray-400 whitespace-nowrap align-top">{displayTime}</td>
                  <td className="px-6 py-6 text-[13px] text-gray-500 align-top">{n.initiator || "System"}</td>
                  <td className="px-6 py-6 text-[13px] font-medium text-[#1D2939] max-w-[200px] align-top leading-relaxed">{n.data.body.subtitle}</td>
                  <td className="px-6 py-6 text-[13px] text-gray-400 max-w-[400px] align-top leading-relaxed">{n.data.body.message}</td>
                  <td className="px-6 py-6 text-[11px] font-bold text-gray-500 align-top uppercase">{n.data.body.channel}</td>
                  <td className="px-6 py-6 align-top">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                      n.status === 'APPROVED' ? 'bg-green-50 text-green-600' :
                      n.status === 'SUBMITTED' ? 'bg-amber-50 text-amber-600' :
                      'bg-red-50 text-red-600'
                    }`}>
                      {n.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* SEND NOTIFICATION MODAL */}
      {isSendModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-[#0A1629]/40 backdrop-blur-[1px]" onClick={() => setIsSendModalOpen(false)} />
          <div className="bg-white rounded-2xl w-full max-w-[500px] p-8 space-y-6 z-10 relative animate-in zoom-in-95">
            <div className="flex justify-between items-start">
              <h2 className="text-[18px] font-bold text-[#1D2939]">Send Notifications</h2>
              <button onClick={() => setIsSendModalOpen(false)}><X className="w-5 h-5 text-gray-400" /></button>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[12px] font-medium text-[#344054]">Channel</label>
                <div className="relative">
                  <select 
                    value={formChannel}
                    onChange={(e) => setFormChannel(e.target.value)}
                    className="w-full h-[48px] border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] text-gray-700 px-4 appearance-none outline-none focus:border-gray-300"
                  >
                    <option value="">Choose Channel</option>
                    <option value="SUDO">SUDO</option>
                    <option value="INSURED">INSURED</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-medium text-[#344054]">Subtitle</label>
                <input 
                  type="text" 
                  placeholder="message subtitle" 
                  value={formSubtitle}
                  onChange={(e) => setFormSubtitle(e.target.value)}
                  className="w-full h-[48px] border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] px-4 outline-none focus:border-gray-300" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-medium text-[#344054]">Message</label>
                <textarea 
                  placeholder="Notification message..." 
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full h-[100px] border border-gray-100 bg-[#F9FAFB] rounded-lg text-[13px] p-4 outline-none resize-none focus:border-gray-300"
                ></textarea>
              </div>
            </div>
            
            <button 
              onClick={handleSendNotification}
              disabled={submitting}
              className="w-full h-[52px] bg-[#0A1629] text-white rounded-lg text-[14px] font-bold hover:bg-[#1D2939] transition-colors disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;