// "use client";
// import React, { useEffect, useState } from "react";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown, LogOut, User } from "lucide-react";
// import { AuthService } from "@/app/service/auth.service";

// export default function Header() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [fullName, setFullName] = useState("");

//   useEffect(() => {
//     const storedUser = localStorage.getItem("userData");
//     const tempLogin = localStorage.getItem("tempLogin");

//     const parseUser = (value: string | null) => {
//       if (!value) return null;
//       try {
//         return JSON.parse(value);
//       } catch (error) {
//         console.error("Header: invalid JSON in localStorage", error);
//         return null;
//       }
//     };

//     const userData = parseUser(storedUser) || parseUser(tempLogin);
//     if (!userData) return;

//     const resolvedEmail =
//       userData.emailAddress ||
//       userData.email ||
//       userData.user?.emailAddress ||
//       userData.user?.email;

//     const resolvedFullName =
//       userData.fullName ||
//       userData.name ||
//       `${userData.firstName || userData.user?.firstName || ""} ${userData.lastName || userData.user?.lastName || ""}`.trim() ||
//       userData.user?.fullName ||
//       userData.user?.name;

//     if (resolvedEmail) setEmail(resolvedEmail);
//     if (resolvedFullName) setFullName(resolvedFullName);
//   }, []);


//   // Check for Business path OR check for ?view=detail on the accounts page
//   const isBusinessDetails =
//     pathname.startsWith("/dashboard/businesses/") &&
//     pathname.split("/").length > 3;
//   const isAccountDetails =
//     pathname === "/dashboard/accounts" && searchParams.get("view") === "detail";
//   const isCardDetails =
//     pathname === "/dashboard/cards" && searchParams.get("view") === "detail";
//   const isAuthorizationDetails =
//     pathname === "/dashboard/authorizations" &&
//     searchParams.get("view") === "detail";
//     const isTransactionDetails =
//     pathname === "/dashboard/transactions" &&
//     searchParams.get("view") === "detail";
//     const isDisputeDetails =
//     pathname === "/dashboard/disputes" &&
//     searchParams.get("view") === "detail";
//     const isUserDetails =
//     pathname === "/dashboard/users" &&
//     searchParams.get("view") === "detail";
//     const isSdrMemberDetails =
//     pathname.startsWith("/dashboard/sdr-report/") &&
//     pathname.split("/").length > 3 &&
//     searchParams.get("tab") === "details";
//     const isActionDetails =
//     pathname.startsWith("/dashboard/actions/") &&
//     pathname.split("/").length > 3;
//     const isNotificationDetails =
//     pathname.startsWith("/dashboard/notifications/") &&
//     pathname.split("/").length > 3;
//     const isContractDetails =
//     pathname === "/dashboard/contracts" &&
//     searchParams.get("view") === "detail";
//     const isAccountsDetails =
//     pathname.startsWith("/dashboard/accounts/") &&
//     pathname.split("/").length > 3;
    

//   const isDetailsPage =
//     isBusinessDetails ||
//     isAccountDetails ||
//     isCardDetails ||
//     isAuthorizationDetails ||
//     isTransactionDetails ||
//     isDisputeDetails ||
//     isUserDetails ||
//     isSdrMemberDetails ||
//     isActionDetails ||
//     isNotificationDetails ||
//     isContractDetails ||
//     isAccountsDetails;
   
  

//   const getPageTitle = () => {
//     if (pathname === "/dashboard") return "DASHBOARD";
//     const segments = pathname.split("/");
//     const title = segments[2] || segments[1];
//     return title.replace(/-/g, " ").toUpperCase();
//   };

//   const getBackHref = () => {
//     // Defines where the "Back" button should take you based on context
//     if (isBusinessDetails) return "/dashboard/businesses";
//     if (isCardDetails) return "/dashboard/cards";
//     if (isAccountDetails) return "/dashboard/accounts";
//     if (isAuthorizationDetails) return "/dashboard/authorizations";
//     if (isTransactionDetails) return "/dashboard/transactions";
//     if (isDisputeDetails) return "/dashboard/disputes";
//     if (isUserDetails) return "/dashboard/users";
//     if (isSdrMemberDetails) return "/dashboard/sdr-report";
//     if (isActionDetails) return "/dashboard/actions";
//     if (isNotificationDetails) return "/dashboard/notifications";
//     if (isContractDetails) return "/dashboard/contracts";
//     if (isAccountsDetails) return "/dashboard/accounts";
    
//   };
//   return (
//     <header className="h-[72px] w-full border-b border-gray-100 bg-white flex items-center px-8 sticky top-0 z-40">
//       <div className="flex-1 flex justify-start">
//         {isDetailsPage ? (
//           <Link
//             href={getBackHref() || "/dashboard"}
//             className="flex items-center gap-2 text-[#1D2939] hover:opacity-70 transition-all"
//           >
//             <Image
//               src="/images/arrow-right.svg"
//               alt=""
//               width={16}
//               height={16}
//               className="rotate-180"
//             />
//             <span className="text-[12px] font-bold tracking-[0.2em] uppercase">
//               Back
//             </span>
//           </Link>
//         ) : (
//           <h2 className="text-[12px] font-bold tracking-[0.2em] text-[#1D2939]">
//             {getPageTitle()}
//           </h2>
//         )}
//       </div>

//       <div className="relative">
//         <button
//           type="button"
//           onClick={() => setMenuOpen((open) => !open)}
//           className="flex items-center gap-3 bg-gray-50/50 py-1.5 px-3 rounded-full border border-gray-100"
//         >
//           <div className="w-8 h-8 rounded-full bg-[#EBF5FF] flex items-center justify-center text-[#034EA2] border border-white shadow-sm">
//             <User className="w-4 h-4" />
//           </div>
//           <div className="text-left">
//             <p className="text-[11px] font-bold text-[#1D2939] leading-none">
//               {email}
//             </p>
//             <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-tighter">
//               {fullName}
//             </p>
//           </div>
//           <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
//         </button>

//         {menuOpen ? (
//           <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-gray-100 bg-white shadow-[0_12px_30px_-12px_rgba(15,23,42,0.2)] z-50">
//             <button
//               type="button"
//               onClick={() => {
//                 setMenuOpen(false);
//                 router.push("/dashboard");
//               }}
//               className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-[#1D2939] hover:bg-gray-50"
//             >
//               <User className="w-4 h-4 text-[#034EA2]" />
//               Profile
//             </button>
//             <button
//               type="button"
//               onClick={async () => {
//                 setMenuOpen(false);
//                 try {
//                   const authService = new AuthService();
//                   await authService.logout({ emailAddress: email });
//                 } catch (error) {
//                   console.error("Logout failed:", error);
//                 }
//                 localStorage.removeItem("userData");
//                 localStorage.removeItem("tempLogin");
//                 localStorage.removeItem("jwtToken");
//                 router.push("/signin");
//               }}
//               className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-[#1D2939] hover:bg-gray-50"
//             >
//               <LogOut className="w-4 h-4 text-[#DF2F2F]" />
//               Sign out
//             </button>
//           </div>
//         ) : null}
//       </div>
//     </header>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, LogOut, User } from "lucide-react";
import { AuthService } from "@/app/service/auth.service";

export default function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const tempLogin = localStorage.getItem("tempLogin");

    const parseUser = (value: string | null) => {
      if (!value) return null;
      try {
        return JSON.parse(value);
      } catch (error) {
        console.error("Header: invalid JSON in localStorage", error);
        return null;
      }
    };

    const userData = parseUser(storedUser) || parseUser(tempLogin);
    if (!userData) return;

    const resolvedEmail =
      userData.emailAddress ||
      userData.email ||
      userData.user?.emailAddress ||
      userData.user?.email;

    const resolvedFullName =
      userData.fullName ||
      userData.name ||
      `${userData.firstName || userData.user?.firstName || ""} ${userData.lastName || userData.user?.lastName || ""}`.trim() ||
      userData.user?.fullName ||
      userData.user?.name;

    if (resolvedEmail) setEmail(resolvedEmail);
    if (resolvedFullName) setFullName(resolvedFullName);
  }, []);

  // Flags to detect if we are on any specialized detail view layout
  const isBusinessDetails =
    pathname.startsWith("/dashboard/businesses/") &&
    pathname.split("/").length > 3;
  const isAccountDetails =
    pathname === "/dashboard/accounts" && searchParams.get("view") === "detail";
   const isCardDetails =
  pathname.startsWith("/dashboard/cards/") &&
  pathname.split("/").length > 3;
  const isAuthorizationDetails =
    pathname === "/dashboard/authorizations" &&
    searchParams.get("view") === "detail";
  const isTransactionDetails =
    pathname === "/dashboard/transactions" &&
    searchParams.get("view") === "detail";
  const isDisputeDetails =
    pathname === "/dashboard/disputes" &&
    searchParams.get("view") === "detail";
  const isUserDetails =
    pathname === "/dashboard/users" &&
    searchParams.get("view") === "detail";
  const isSdrMemberDetails =
    pathname.startsWith("/dashboard/sdr-report/") &&
    pathname.split("/").length > 3 &&
    searchParams.get("tab") === "details";
  const isActionDetails =
    pathname.startsWith("/dashboard/actions/") &&
    pathname.split("/").length > 3;
  const isNotificationDetails =
    pathname.startsWith("/dashboard/notifications/") &&
    pathname.split("/").length > 3;
  const isContractDetails =
    pathname === "/dashboard/contracts" &&
    searchParams.get("view") === "detail";
  const isAccountsDetails =
    pathname.startsWith("/dashboard/accounts/") &&
    pathname.split("/").length > 3;
  const isInsuredDetails =
  pathname === "/dashboard/insured" &&
  (searchParams.get("tab") || "").startsWith("organizations/") || (searchParams.get("tab") || "").startsWith("agents/");
  const isGiftCardDetails =
  pathname.startsWith("/dashboard/giftCard") &&
  (searchParams.get("tab") || "").includes("/");
  
  const isDetailsPage =
    isBusinessDetails ||
    isAccountDetails ||
    isCardDetails ||
    isAuthorizationDetails ||
    isTransactionDetails ||
    isDisputeDetails ||
    isUserDetails ||
    isSdrMemberDetails ||
    isActionDetails ||
    isNotificationDetails ||
    isContractDetails ||
    isAccountsDetails||
    isInsuredDetails||
    isGiftCardDetails;

  const getPageTitle = () => {
    if (pathname === "/dashboard") return "DASHBOARD";
    const segments = pathname.split("/");
    const title = segments[2] || segments[1];
    return title.replace(/-/g, " ").toUpperCase();
  };

  return (
    <header className="h-[72px] w-full border-b border-gray-100 bg-white flex items-center px-8 sticky top-0 z-40">
      <div className="flex-1 flex justify-start">
        {isDetailsPage ? (
          /* Changed from hardcoded <Link> to a historical back action button */
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#1D2939] hover:opacity-70 transition-all bg-transparent border-none outline-none cursor-pointer"
          >
            <Image
              src="/images/arrow-right.svg"
              alt=""
              width={16}
              height={16}
              className="rotate-180"
            />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase">
              Back
            </span>
          </button>
        ) : (
          <h2 className="text-[12px] font-bold tracking-[0.2em] text-[#1D2939]">
            {getPageTitle()}
          </h2>
        )}
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex items-center gap-3 bg-gray-50/50 py-1.5 px-3 rounded-full border border-gray-100"
        >
          <div className="w-8 h-8 rounded-full bg-[#EBF5FF] flex items-center justify-center text-[#034EA2] border border-white shadow-sm">
            <User className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-bold text-[#1D2939] leading-none">
              {email}
            </p>
            <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-tighter">
              {fullName}
            </p>
          </div>
          <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
        </button>

        {menuOpen ? (
          <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-gray-100 bg-white shadow-[0_12px_30px_-12px_rgba(15,23,42,0.2)] z-50">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                router.push("/dashboard");
              }}
              className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-[#1D2939] hover:bg-gray-50"
            >
              <User className="w-4 h-4 text-[#034EA2]" />
              Profile
            </button>
            <button
              type="button"
              onClick={async () => {
                setMenuOpen(false);
                try {
                  const authService = new AuthService();
                  await authService.logout({ emailAddress: email });
                } catch (error) {
                  console.error("Logout failed:", error);
                }
                localStorage.removeItem("userData");
                localStorage.removeItem("tempLogin");
                localStorage.removeItem("jwtToken");
                router.push("/signin");
              }}
              className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-[#1D2939] hover:bg-gray-50"
            >
              <LogOut className="w-4 h-4 text-[#DF2F2F]" />
              Sign out
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}