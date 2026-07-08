"use client";

import React, { useState } from "react";
import { toast } from "sonner";

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export default function NotificationSettingsTab() {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: "email",
      title: "Email Notification",
      description: "Enable email notifications on your email address.",
      enabled: false,
    },
    {
      id: "sms",
      title: "SMS Notification",
      description: "Get notified of all your transactions via SMS.",
      enabled: false,
    },
    {
      id: "push",
      title: "Push Notification",
      description: "Enable push notification on our products.",
      enabled: false,
    },
    {
      id: "customer_email",
      title: "Customer Email Notification",
      description: "Enable customer email notifications.",
      enabled: false,
    },
    {
      id: "customer_sms",
      title: "Customer SMS Notification",
      description: "Enable customer sms notification.",
      enabled: false,
    },
  ]);

  const handleToggle = (id: string, title: string, currentState: boolean) => {
    // 1. Locally toggle state
    setSettings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );

    // 2. Trigger notification feedback
    toast.success(`${title} has been ${!currentState ? "enabled" : "disabled"}.`);
  };

  return (
    <div className="bg-white rounded-xl divide-y divide-gray-100/70  animate-in fade-in duration-300">
      {settings.map((setting) => (
        <div
          key={setting.id}
          className="flex items-center justify-between p-6 px-8 transition-colors hover:bg-gray-50/30 text-left"
        >
          <div className="space-y-1">
            <h3 className="text-[13.5px] font-bold text-[#1D2939]">
              {setting.title}
            </h3>
            <p className="text-[12px] text-gray-400 font-medium">
              {setting.description}
            </p>
          </div>

          {/* TOGGLE SWITCH COMPONENT */}
          <button
            type="button"
            onClick={() => handleToggle(setting.id, setting.title, setting.enabled)}
            className={`w-11 h-6 flex items-center rounded-full p-0.5 transition-colors duration-300 outline-none ${
              setting.enabled ? "bg-[#034EA2]" : "bg-gray-200"
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-sm transform transition-transform duration-300 ${
                setting.enabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
}