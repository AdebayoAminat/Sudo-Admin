"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "sonner";

interface WebhookNotificationsProps {
  businessId: string;
}

// Mock initial data setup (Change this array to empty [] if you want to see the empty state by default)
const INITIAL_MOCK_WEBHOOK_RECORDS = [
  {
    _id: "wh_01",
    name: "Production Stripe Sync",
    url: "https://api.middey.com/v1/webhooks/stripe",
    token: "ey2cdf...891",
    createdAt: "2026-06-25T14:40:00Z"
  },
  {
    _id: "wh_02",
    name: "Slack Alert Pipeline",
    url: "https://api.middey.com/v1/webhooks/stripe",
    token: "",
    createdAt: "2026-06-24T09:15:00Z"
  }
];

export default function WebhookNotifications({ businessId }: WebhookNotificationsProps) {
  // Page View States initialized with Mock data
  const [webhooks, setWebhooks] = useState<any[]>(INITIAL_MOCK_WEBHOOK_RECORDS);

  // Modal/Form UI States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [processLoading, setProcessLoading] = useState(false);

  // Clear form fields when modal toggles open
  useEffect(() => {
    if (isModalOpen) {
      setName("");
      setUrl("");
      setToken("");
      setErrorMessage("");
      setProcessLoading(false);
    }
  }, [isModalOpen]);

  // URL verification helper
  const validateURL = (inputUrl: string) => {
    try {
      new URL(inputUrl);
      return true;
    } catch (_) {
      return false;
    }
  };

  // Mock UI Submission Flow
  const handleCreateWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !url.trim()) {
      setErrorMessage("Please fill the required fields.");
      return;
    }

    if (!validateURL(url.trim())) {
      setErrorMessage("Please enter a valid url.");
      return;
    }

    setProcessLoading(true);

    // Simulate short UI transition delay instead of actual network call
    setTimeout(() => {
      const mockNewWebhook = {
        _id: `wh_${Date.now()}`,
        name: name.trim(),
        url: url.trim(),
        token: token.trim() || undefined,
        createdAt: new Date().toISOString()
      };

      toast.success("Webhook created successfully");
      setWebhooks((prev) => [...prev, mockNewWebhook]);
      setProcessLoading(false);
      setIsModalOpen(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Tab Control Section Actions Bar */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-sm font-bold text-[#1D2939]">Webhook Integrations</h2>
          <p className="text-xs text-gray-400">Manage real-time push payloads sent to your servers.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#034EA2] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#023e82] transition-colors shadow-sm"
        >
          Add Webhook
        </button>
      </div>

      {/* Main Records Content Area */}
      {webhooks.length === 0 ? (
        /* Empty State Layout view matches look-and-feel of image_d683ac.jpg */
        <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl flex flex-col items-center justify-center shadow-sm">
          <p className="text-gray-400 text-[13px] font-medium mb-1">
            Records for <span className="font-bold text-gray-700">Webhook Notifications</span> can not be found.
          </p>
          <p className="text-xs text-gray-300">Click button above to seed your first pipeline handler endpoint.</p>
        </div>
      ) : (
        /* List State Table Layout View */
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs text-gray-500">
            <thead className="bg-gray-50 text-gray-700 uppercase font-bold text-[10px] border-b border-gray-100">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Destination Endpoint</th>
                <th className="p-4">Created On</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {webhooks.map((wh) => (
                <tr key={wh._id} className="hover:bg-gray-50/50">
                  <td className="p-4 font-bold text-gray-800">{wh.name}</td>
                  <td className="p-4 font-mono text-gray-600 max-w-xs truncate">{wh.url}</td>
                  <td className="p-4 text-gray-400">{new Date(wh.createdAt).toLocaleDateString()}</td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded text-[10px] font-bold">
                      ACTIVE
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Controlled Popover Dialog Modal (Inline Implementation) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 transform transition-all">
            
            {/* Modal Top Bar header */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-50 mb-4">
              <h1 className="text-lg font-bold text-[#1D2939]">Create new Webhook</h1>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none transition-colors"
              >
                &times;
              </button>
            </div>

            <p className="text-[13px] text-gray-400 mb-4">
              Enter the following details to create a new webhook.
            </p>

            {/* Error messaging inline banner feedback window */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2.5 rounded-lg text-xs font-medium mb-4">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleCreateWebhook} className="space-y-4">
              {/* Webhook Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#1D2939]">Name</label>
                <input
                  type="text"
                  placeholder="Default"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-[13px] outline-none focus:ring-1 focus:ring-[#034EA2] focus:border-[#034EA2]"
                />
              </div>

              {/* Webhook URL Endpoint */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#1D2939]">Url</label>
                <input
                  type="text"
                  placeholder="https://webhook.site"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-[13px] outline-none focus:ring-1 focus:ring-[#034EA2] focus:border-[#034EA2]"
                />
              </div>

              {/* Auth Header Security Token */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#1D2939]">
                  Authorization Header (Optional)
                </label>
                <input
                  type="text"
                  placeholder="ey2cdf......"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-[13px] outline-none focus:ring-1 focus:ring-[#034EA2] focus:border-[#034EA2]"
                />
              </div>

              {/* Form Submission Actions Button Trigger */}
              <button
                type="submit"
                disabled={processLoading}
                className="w-full bg-[#034EA2] text-white py-2.5 rounded-lg text-sm font-bold transition-all hover:bg-[#023e82] disabled:opacity-50 mt-6 flex justify-center items-center gap-2"
              >
                {processLoading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Create"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}