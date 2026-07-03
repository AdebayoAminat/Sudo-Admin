 
"use client";

import React, { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight, X } from "lucide-react";

interface NotificationDetail {
  id: string;
  type: string;
  time: string;
  status: "SUBMITTED" | "APPROVED" | "REJECTED";
  businessId: string;
  businessName: string;
  initiator: string;
  assignedTo: string;
  approvedBy?: string;
  approvedAt?: string;
  channel: string;
  subtitle: string;
  message: string;
}

const NotificationDetailView = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const resolvedParams = use(params);
  const notificationId = resolvedParams.id;
  
  const [notification, setNotification] = useState<NotificationDetail | null>(null);
  const [loading, setLoading] = useState(true);

  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isJsonModalOpen, setIsJsonModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  useEffect(() => {
    const fetchNotification = async () => {
      setLoading(true);
      const mockDatabase: { [key: string]: NotificationDetail } = {
        "6656f1bd413ca6f32efdeab3": {
          id: "6656f1bd413ca6f32efdeab3",
          type: "send_push_notification",
          time: "May 29, 2024, 10:13:33 AM",
          status: "SUBMITTED",
          businessId: "645a166ec8608e69aa801a59",
          businessName: "Sudo Africa Limited",
          initiator: "Super Admin",
          assignedTo: "Add email",
          channel: "INSURED",
          subtitle: "Big News: Sudo Credit Card Now Available!",
          message: "Take control of your finances with the new Sudo credit card. Order now on your Root by Sudo app for up to N500,000 credit line!",
        },
        "6655c9550afe4c97da1ef8ff": {
          id: "6655c9550afe4c97da1ef8ff",
          type: "send_push_notification",
          time: "May 28, 2024, 1:08:53 PM",
          status: "APPROVED",
          businessId: "645a166ec8608e69aa801a59",
          businessName: "Sudo Africa Limited",
          initiator: "Super Admin",
          assignedTo: "Add email",
          approvedBy: "Super Admin",
          approvedAt: "May 29, 2024, 10:54:12 AM",
          channel: "SUDO",
          subtitle: "Big News: Sudo Credit Card Now Available!",
          message: "Take control of your finances with the new Sudo credit card. Order now on your Root by Sudo app for up to N500,000 credit line!",
        },
      };
      setNotification(mockDatabase[notificationId] || null);
      setLoading(false);
    };
    fetchNotification();
  }, [notificationId]);

  if (loading) return <div className="p-20 text-center text-gray-400 animate-pulse">Loading Details...</div>;
  if (!notification) return <div className="p-20 text-center text-gray-400">Notification Not Found</div>;

  return (
    <div className="p-3 space-y-8 animate-in fade-in duration-500 relative">
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
        {/* Detail Header Section */}
        <div className="p-10 text-center space-y-2 border-b border-gray-50 bg-gray-50/10">
          <h2 className="text-[20px] font-bold text-[#1D2939]">{notification.type}</h2>
          <p className="text-[12px] text-gray-400">{notification.time}</p>
          <div className="flex justify-center pt-2">
            <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase ${
              notification.status === 'APPROVED' ? 'bg-green-50 text-green-600' :
              notification.status === 'SUBMITTED' ? 'bg-amber-50 text-amber-600' :
              'bg-red-50 text-red-600'
            }`}>
              {notification.status}
            </span>
          </div>
        </div>

        <div className="p-10 space-y-10">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-y-6 text-[12px]">
            <div className="text-gray-400 font-medium">Business ID</div>
            <div className="text-[#1D2939] font-medium truncate">{notification.businessId}</div>
            
            <div className="text-gray-400 font-medium">Business Name</div>
            <div className="flex items-center gap-2">
              <span className="text-[#1D2939] font-medium">{notification.businessName}</span>
              <button 
                onClick={() => router.push(`/dashboard/businesses/${notification.businessId}`)}
                className="text-blue-600 text-[11px] font-bold flex items-center hover:underline"
              >
                Goto Profile <ChevronRight className="w-3 h-3 ml-0.5" />
              </button>
            </div>
            
            <div className="text-gray-400 font-medium">Initiator</div>
            <div className="text-[#1D2939] font-medium">{notification.initiator}</div>
            
            <div className="text-gray-400 font-medium">Assigned To</div>
            <button 
              onClick={() => setIsEmailModalOpen(true)}
              className="text-blue-600 font-bold text-[11px] text-left hover:underline"
            >
              {notification.assignedTo}
            </button>
            
            {notification.status === "APPROVED" && (
              <>
                <div className="text-gray-400 font-medium">Approved By</div>
                <div className="text-[#1D2939] font-medium">{notification.approvedBy}</div>
                <div className="text-gray-400 font-medium">Approved At</div>
                <div className="text-[#1D2939] font-medium">{notification.approvedAt}</div>
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

          {/* Notification Information Section */}
          <div className="space-y-4">
            <h3 className="bg-[#F9FAFB] p-3 text-[11px] font-bold text-[#1D2939] uppercase tracking-wider rounded">Notification Information</h3>
            
            <div className="text-[12px]">
              {/* Channel Row */}
              <div className="flex justify-between items-center py-4 border-b border-gray-100 px-3">
                <span className="text-gray-400 font-medium">Channel</span>
                <span className="text-[11px] font-bold text-gray-500 uppercase">{notification.channel}</span>
              </div>
              
              {/* Subtitle Row */}
              <div className="flex justify-between items-center py-4 border-b border-gray-100 px-3">
                <span className="text-gray-400 font-medium">Sub Title</span>
                <span className="text-[#1D2939] font-medium">{notification.subtitle}</span>
              </div>
              
              {/* Message Row */}
              <div className="flex justify-between items-start py-4 px-3">
                <span className="text-gray-400 font-medium mt-1">Message</span>
                <span className="text-[#1D2939] font-medium leading-relaxed max-w-[500px] text-right">
                  {notification.message}
                </span>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS - Only One Separator Line Before */}
          {notification.status === "SUBMITTED" && (
            <div className="flex justify-end gap-3 pt-8 border-t border-gray-100">
              <button className="px-8 h-[44px] border border-gray-200 rounded-lg text-[13px] font-bold text-[#1D2939] hover:bg-gray-50 transition-colors">
                Reject
              </button>
              <button className="px-8 h-[44px] bg-[#0A1629] text-white rounded-lg text-[13px] font-bold hover:bg-[#1D2939] transition-colors">
                Approve
              </button>
            </div>
          )}
        </div>
      </div>

      {/* --- MODALS --- */}

      {/* Email Assignment Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-lg w-full max-w-[400px] shadow-xl overflow-hidden">
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
                  className="w-full h-12 border border-blue-200 rounded-lg px-4 text-[13px] outline-none focus:border-blue-500"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </div>
              <button onClick={() => setIsEmailModalOpen(false)} className="w-full h-12 bg-[#032345] text-white rounded-lg font-bold text-[13px]">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* JSON Viewer Modal */}
      {isJsonModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-lg w-full max-w-[600px] shadow-xl max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-5 border-b border-gray-50">
              <span className="text-[11px] font-bold text-gray-400 uppercase">Request Data</span>
              <button onClick={() => setIsJsonModalOpen(false)}><X className="w-4 h-4 text-gray-400" /></button>
            </div>
            <div className="p-6 overflow-y-auto">
              <pre className="text-[12px] text-green-600 font-mono leading-relaxed bg-[#F9FAFB] p-4 rounded-lg border border-gray-100">
                {JSON.stringify(notification, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationDetailView;