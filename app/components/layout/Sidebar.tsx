
// "use client";
// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// // Compact Navigation Item Component
// const NavItem = ({
//   icon,
//   label,
//   path,
//   isActive,
// }: {
//   icon: string;
//   label: string;
//   path: string;
//   isActive: boolean;
// }) => (
//   <Link
//     href={path}
//     className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
//       isActive
//         ? "bg-[#EBF5FF] text-[#034EA2] font-bold"
//         : "text-gray-500 hover:bg-gray-50"
//     }`}
//   >
//     <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
//       <Image
//         src={icon}
//         alt=""
//         width={18}
//         height={18}
//         className={isActive ? "opacity-100" : "opacity-60"}
//       />
//     </div>
//     {/* text-[13px] ensures all 17 items fit on standard screens */}
//     <span className="whitespace-nowrap text-[13px] tracking-tight">
//       {label}
//     </span>
//   </Link>
// );

// export default function Sidebar() {
//   const pathname = usePathname();

//   const menuItems = [
//     {
//       label: "Dashboard",
//       path: "/dashboard",
//       icon: "/images/chart-pie-active.svg",
//     },
//     {
//       label: "Businesses",
//       path: "/dashboard/businesses",
//       icon: "/images/users.svg",
//     },
//     {
//       label: "Accounts",
//       path: "/dashboard/accounts",
//       icon: "/images/dollar1.svg",
//     },
//     {
//       label: "Cards",
//       path: "/dashboard/cards",
//       icon: "/images/credit-card.svg",
//     },
//     {
//       label: "Authorizations",
//       path: "/dashboard/authorizations",
//       icon: "/images/lock-closed.svg",
//     },
//     {
//       label: "Transactions",
//       path: "/dashboard/transactions",
//       icon: "/images/switch-vertical.svg",
//     },
//     {
//       label: "Disputes",
//       path: "/dashboard/disputes",
//       icon: "/images/information-circle.svg",
//     },
//     { label: "Users", path: "/dashboard/users", icon: "/images/users.svg" },
//     {
//       label: "Insured",
//       path: "/dashboard/insured",
//       icon: "/images/insured-by-sudo.svg",
//     },
//     {
//       label: "Gift Card",
//       path: "/dashboard/giftCard",
//       icon: "/images/credit-card.svg",
//     },
//     {
//       label: "Frontdesk",
//       path: "/dashboard/frontdesk",
//       icon: "/images/_$udo.svg",
//     },
//     {
//       label: "SDR Report",
//       path: "/dashboard/sdr-report",
//       icon: "/images/documents.svg",
//     },
//     {
//       label: "Actions",
//       path: "/dashboard/actions",
//       icon: "/images/actions.svg",
//     },
//     {
//       label: "Notification",
//       path: "/dashboard/notifications",
//       icon: "/images/notification.svg",
//     },
//     { label: "Logs", path: "/dashboard/logs", icon: "/images/logs.svg" },
//     {
//       label: "Contracts",
//       path: "/dashboard/contracts",
//       icon: "/images/logs.svg",
//     },
//     { label: "Settings", path: "/dashboard/settings", icon: "/images/cog.svg" },
//   ];

//   return (
//     <aside className="w-[240px] border-r border-gray-100 flex flex-col h-screen bg-white sticky top-0 overflow-hidden z-50">
//       {/* 1. Logo Section inside the sidebar */}
//       <div className="px-6 py-7 flex items-center">
//         <Link href="/dashboard">
//           <Image
//             src="/images/_$udo.svg"
//             alt="Sudo Logo"
//             width={90}
//             height={28}
//             priority
//           />
//         </Link>
//       </div>

//       {/* 2. Navigation Area with tighter spacing */}
//       <nav className="flex-1 px-3 pb-4 space-y-0.5 overflow-y-auto no-scrollbar">
//         {menuItems.map((item) => (
//           <NavItem
//             key={item.path}
//             label={item.label}
//             path={item.path}
//             icon={item.icon}
//             isActive={
//               pathname === item.path ||
//               (item.path !== "/dashboard" && pathname.startsWith(item.path))
//             }
//           />
//         ))}
//       </nav>
//     </aside>
//   );
// }


"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/app/components/auth/AuthContext"


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
    <span className="whitespace-nowrap text-[13px] tracking-tight">
      {label}
    </span>
  </Link>
);

export default function Sidebar() {
  const pathname = usePathname();
  
  // Consume our stored roles and groups
  const { userRole, userGroups, fetchingData } = useAuth();

  const isAdminOrSuperAdmin = userRole === "SUPER_ADMIN" || userRole === "ADMIN";

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: "/images/chart-pie-active.svg",
      visible: isAdminOrSuperAdmin, // Angular equivalent: this.userRole == 'SUPER_ADMIN' || this.userRole == 'ADMIN'
    },
    {
      label: "Businesses",
      path: "/dashboard/businesses",
      icon: "/images/users.svg",
      visible: true, // Always visible unless restricted by default
    },
    {
      label: "Accounts",
      path: "/dashboard/accounts",
      icon: "/images/dollar1.svg",
      visible: isAdminOrSuperAdmin || userGroups.includes("SH_ACCOUNT_MANAGEMENT"),
    },
    {
      label: "Cards",
      path: "/dashboard/cards",
      icon: "/images/credit-card.svg",
      visible: isAdminOrSuperAdmin || userGroups.includes("SH_CARDS_MANAGEMENT"),
    },
    {
      label: "Authorizations",
      path: "/dashboard/authorizations",
      icon: "/images/lock-closed.svg",
      visible: true,
    },
    {
      label: "Transactions",
      path: "/dashboard/transactions",
      icon: "/images/switch-vertical.svg",
      visible: isAdminOrSuperAdmin || userGroups.includes("SH_TRANSACTIONS_MANAGEMENT"),
    },
    {
      label: "Disputes",
      path: "/dashboard/disputes",
      icon: "/images/information-circle.svg",
      visible: true,
    },
    { 
      label: "Users", 
      path: "/dashboard/users", 
      icon: "/images/users.svg",
      visible: isAdminOrSuperAdmin,
    },
    {
      label: "Insured",
      path: "/dashboard/insured",
      icon: "/images/insured-by-sudo.svg",
      visible: true,
    },
    {
      label: "Gift Card",
      path: "/dashboard/giftCard",
      icon: "/images/credit-card.svg",
      visible: true,
    },
    {
      label: "Frontdesk",
      path: "/dashboard/frontdesk",
      icon: "/images/_$udo.svg",
      visible: true,
    },
    {
      label: "SDR Report",
      path: "/dashboard/sdr-report",
      icon: "/images/documents.svg",
      visible: true,
    },
    {
      label: "Actions",
      path: "/dashboard/actions",
      icon: "/images/actions.svg",
      visible: isAdminOrSuperAdmin || userGroups.includes("SH_ACTIONS_MANAGEMENT"),
    },
    {
      label: "Notification",
      path: "/dashboard/notifications",
      icon: "/images/notification.svg",
      visible: true,
    },
    { 
      label: "Logs", 
      path: "/dashboard/logs", 
      icon: "/images/logs.svg",
      visible: isAdminOrSuperAdmin || userGroups.includes("SH_LOGS_MANAGEMENT"),
    },
    {
      label: "Contracts",
      path: "/dashboard/contracts",
      icon: "/images/logs.svg",
      visible: true,
    },
    { 
      label: "Settings", 
      path: "/dashboard/settings", 
      icon: "/images/cog.svg",
      visible: isAdminOrSuperAdmin || userGroups.includes("SH_SETTINGS_MANAGEMENT"),
    },
  ];

  return (
    <aside className="w-[240px] border-r border-gray-100 flex flex-col h-screen bg-white sticky top-0 overflow-hidden z-50">
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

      <nav className="flex-1 px-3 pb-4 space-y-0.5 overflow-y-auto no-scrollbar">
        {fetchingData ? (
          // Preloader skeleton state while fetching
          <div className="space-y-3 px-1 animate-pulse">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="h-[34px] w-full bg-gray-100 rounded-lg" />
            ))}
          </div>
        ) : (
          // Render only elements the current user is permitted to see
          menuItems
            .filter((item) => item.visible)
            .map((item) => (
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
            ))
        )}
      </nav>
    </aside>
  );
}