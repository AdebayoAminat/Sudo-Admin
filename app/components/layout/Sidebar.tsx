
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Compact Navigation Item Component
const NavItem = ({
  icon,
  label,
  path,
  isActive,
}: {
  icon: string;
  label: string;
  path: string;
  isActive: boolean;
}) => (
  <Link
    href={path}
    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? "bg-[#EBF5FF] text-[#034EA2] font-bold"
        : "text-gray-500 hover:bg-gray-50"
    }`}
  >
    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
      <Image
        src={icon}
        alt=""
        width={18}
        height={18}
        className={isActive ? "opacity-100" : "opacity-60"}
      />
    </div>
    {/* text-[13px] ensures all 17 items fit on standard screens */}
    <span className="whitespace-nowrap text-[13px] tracking-tight">
      {label}
    </span>
  </Link>
);

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: "/images/chart-pie-active.svg",
    },
    {
      label: "Businesses",
      path: "/dashboard/businesses",
      icon: "/images/users.svg",
    },
    {
      label: "Accounts",
      path: "/dashboard/accounts",
      icon: "/images/dollar1.svg",
    },
    {
      label: "Cards",
      path: "/dashboard/cards",
      icon: "/images/credit-card.svg",
    },
    {
      label: "Authorizations",
      path: "/dashboard/authorizations",
      icon: "/images/lock-closed.svg",
    },
    {
      label: "Transactions",
      path: "/dashboard/transactions",
      icon: "/images/switch-vertical.svg",
    },
    {
      label: "Disputes",
      path: "/dashboard/disputes",
      icon: "/images/information-circle.svg",
    },
    { label: "Users", path: "/dashboard/users", icon: "/images/users.svg" },
    {
      label: "Insured",
      path: "/dashboard/insured",
      icon: "/images/insured-by-sudo.svg",
    },
    {
      label: "Gift Card",
      path: "/dashboard/giftCard",
      icon: "/images/credit-card.svg",
    },
    {
      label: "Frontdesk",
      path: "/dashboard/frontdesk",
      icon: "/images/_$udo.svg",
    },
    {
      label: "SDR Report",
      path: "/dashboard/sdr-report",
      icon: "/images/documents.svg",
    },
    {
      label: "Actions",
      path: "/dashboard/actions",
      icon: "/images/actions.svg",
    },
    {
      label: "Notification",
      path: "/dashboard/notifications",
      icon: "/images/notification.svg",
    },
    { label: "Logs", path: "/dashboard/logs", icon: "/images/logs.svg" },
    {
      label: "Contracts",
      path: "/dashboard/contracts",
      icon: "/images/logs.svg",
    },
    { label: "Settings", path: "/dashboard/settings", icon: "/images/cog.svg" },
  ];

  return (
    <aside className="w-[240px] border-r border-gray-100 flex flex-col h-screen bg-white sticky top-0 overflow-hidden z-50">
      {/* 1. Logo Section inside the sidebar */}
      <div className="px-6 py-7 flex items-center">
        <Link href="/dashboard">
          <Image
            src="/images/_$udo.svg"
            alt="Sudo Logo"
            width={90}
            height={28}
            priority
          />
        </Link>
      </div>

      {/* 2. Navigation Area with tighter spacing */}
      <nav className="flex-1 px-3 pb-4 space-y-0.5 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => (
          <NavItem
            key={item.path}
            label={item.label}
            path={item.path}
            icon={item.icon}
            isActive={
              pathname === item.path ||
              (item.path !== "/dashboard" && pathname.startsWith(item.path))
            }
          />
        ))}
      </nav>
    </aside>
  );
}


