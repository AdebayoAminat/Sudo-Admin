

// "use client";

// import React, { Suspense, useState, useMemo } from "react";
// import Image from "next/image";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import UserDetails from "../../components/users/UserDetails";

// /* --- USERS MOCK DATA --- */
// const usersData = [
//   { id: "usr_1", name: "Mohammed Mohammed", initials: "MM", status: "Active", email: "mohammed@gmail.com" },
//   { id: "usr_2", name: "Mohamed Abdellahi", initials: "ma", status: "Active", email: "abdellahi@example.com" },
//   { id: "usr_3", name: "Abdul Rahman Sani", initials: "AS", status: "Active", email: "sani@sudo.africa" },
//   { id: "usr_4", name: "Florent Domingo", initials: "FD", status: "Active", email: "domingo@example.com" },
//   { id: "usr_5", name: "Mohammad Boubak", initials: "Mb", status: "Active", email: "boubak@gmail.com" },
//   { id: "usr_6", name: "Godsstar Ezeamuzie", initials: "GE", status: "Active", email: "ezeamuzie@sudo.africa" },
// ];

// export default function UsersPage() {
//   return (
//     <Suspense fallback={<div className="p-8 text-[12px] text-gray-400">Loading Users...</div>}>
//       <UsersContent />
//     </Suspense>
//   );
// }

// function UsersContent() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
  
//   // Search State
//   const [searchTerm, setSearchTerm] = useState("");

//   const view = searchParams.get("view");
//   const selectedId = searchParams.get("id");

//   // Filtering Logic: Search by Name or Email
//   const filteredUsers = useMemo(() => {
//     return usersData.filter((user) => 
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//       user.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [searchTerm]);

//   const handleUserClick = (id: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("view", "detail");
//     params.set("id", id);
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   if (view === "detail" && selectedId) {
//     return <UserDetails id={selectedId} />;
//   }

//   return (
//     <div className="p-3 space-y-7 animate-in fade-in duration-500">
//       {/* HEADER */}
//       <div className="flex justify-between items-center">
//         <p className="text-[12px] text-gray-400 font-medium">
//           Showing <span className="text-[#1D2939]">0 - {filteredUsers.length}</span> of <span className="text-[#1D2939]">{usersData.length}</span> Users
//         </p>
        
//         {/* FUNCTIONAL SEARCH INPUT */}
//         <div className="relative">
//           <input 
//             type="text" 
//             placeholder="name, email, ..." 
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] w-64 outline-none focus:border-gray-200 transition-all" 
//           />
//           <Image src="/images/search.svg" alt="Search" width={20} height={20} className="absolute right-3.5 top-2.5 opacity-40" />
//         </div>
//       </div>

//       {/* USER GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user) => (
//             <div 
//               key={user.id}
//               onClick={() => handleUserClick(user.id)}
//               className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center space-y-6 cursor-pointer hover:shadow-md transition-all group"
//             >
//               <div className="w-full flex justify-between items-center">
//                  <span className="text-[10px] font-bold text-[#1D2939] px-2 py-0.5 border border-gray-100 rounded-md">
//                    {user.status}
//                  </span>
//                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
//               </div>
              
//               <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center text-[24px] font-bold text-[#1D2939] bg-gray-50 group-hover:border-[#034EA2] transition-colors">
//                 {user.initials}
//               </div>

//               <div className="text-center">
//                 <p className="text-[14px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">{user.name}</p>
                
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full py-20 text-center text-gray-400 text-[13px]">
//             No users found matching "{searchTerm}"
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { Suspense, useState, useMemo, useEffect } from "react";
// import Image from "next/image";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import UserDetails from "../../components/users/UserDetails";
// import UsersService from "@/app/service/users.service"; // Ensure this import path is correct

// export default function UsersPage() {
//   return (
//     <Suspense fallback={<div className="p-8 text-[12px] text-gray-400">Loading Users...</div>}>
//       <UsersContent />
//     </Suspense>
//   );
// }

// function UsersContent() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const usersService = useMemo(() => new UsersService(), []);
  
//   const [users, setUsers] = useState<any[]>([]);
//   const [pagination, setPagination] = useState({ total: 0, page: 0, limit: 20 });
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const view = searchParams.get("view");
//   const selectedId = searchParams.get("id");
//   const currentPage = parseInt(searchParams.get("page") || "0");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         // Assuming your getAllUsers service accepts page/limit parameters
//         const response = await usersService.getAllUsers(currentPage, pagination.limit);
//         setUsers(response.data.data);
//         setPagination(response.data.pagination);
//       } catch (error) {
//         console.error("Failed to fetch users", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, [currentPage, usersService]);

//   const handleUserClick = (id: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("view", "detail");
//     params.set("id", id);
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   const handlePageChange = (newPage: number) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", newPage.toString());
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   if (view === "detail" && selectedId) {
//     return <UserDetails id={selectedId} />;
//   }

//   return (
//     <div className="p-3 space-y-7 animate-in fade-in duration-500">
//       {/* HEADER */}
//       <div className="flex justify-between items-center">
//         <p className="text-[12px] text-gray-400 font-medium">
//           Showing <span className="text-[#1D2939]">{pagination.page * pagination.limit} - {Math.min((pagination.page + 1) * pagination.limit, pagination.total)}</span> of <span className="text-[#1D2939]">{pagination.total}</span> Users
//         </p>
        
//         {/* SEARCH INPUT */}
//         <div className="relative">
//           <input 
//             type="text" 
//             placeholder="name, email, ..." 
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] w-64 outline-none focus:border-gray-200 transition-all" 
//           />
//           <Image src="/images/search.svg" alt="Search" width={20} height={20} className="absolute right-3.5 top-2.5 opacity-40" />
//         </div>
//       </div>

//       {/* USER GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {loading ? (
//           <div className="col-span-full py-20 text-center text-gray-400 text-[13px]">Loading...</div>
//         ) : users.length > 0 ? (
//           users.map((user) => (
//             <div 
//               key={user.id}
//               onClick={() => handleUserClick(user.id)}
//               className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center space-y-6 cursor-pointer hover:shadow-md transition-all group"
//             >
//               <div className="w-full flex justify-between items-center">
//                  <span className="text-[10px] font-bold text-[#1D2939] px-2 py-0.5 border border-gray-100 rounded-md">
//                    {user.status}
//                  </span>
//                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
//               </div>
              
//               <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center text-[24px] font-bold text-[#1D2939] bg-gray-50 group-hover:border-[#034EA2] transition-colors">
//                 {user.firstName.charAt(0)}{user.lastName.charAt(0)}
//               </div>

//               <div className="text-center">
//                 <p className="text-[14px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">{user.firstName} {user.lastName}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full py-20 text-center text-gray-400 text-[13px]">
//             No users found.
//           </div>
//         )}
//       </div>

//       {/* PAGINATION CONTROLS */}
//       <div className="flex justify-center gap-4 mt-8">
//         <button 
//           disabled={currentPage === 0}
//           onClick={() => handlePageChange(currentPage - 1)}
//           className="px-4 py-2 text-[12px] font-bold text-[#5925DC] disabled:opacity-30"
//         >
//           Previous
//         </button>
//         <button 
//           disabled={(currentPage + 1) * pagination.limit >= pagination.total}
//           onClick={() => handlePageChange(currentPage + 1)}
//           className="px-4 py-2 text-[12px] font-bold text-[#5925DC] disabled:opacity-30"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { Suspense, useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import UserDetails from "../../components/users/UserDetails";
import UsersService from "@/app/service/users.service"; // Ensure this import path is correct

export default function UsersPage() {
  return (
    <Suspense fallback={<div className="p-8 text-[12px] text-gray-400">Loading Users...</div>}>
      <UsersContent />
    </Suspense>
  );
}

function UsersContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const usersService = useMemo(() => new UsersService(), []);
  
  const [users, setUsers] = useState<any[]>([]);
  const [pagination, setPagination] = useState({ total: 0, page: 0, limit: 20, pages: 1 });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const view = searchParams.get("view");
  const selectedId = searchParams.get("id");
  const currentPage = parseInt(searchParams.get("page") || "0", 10);

  useEffect(() => {
    let isMounted = true;
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await usersService.getAllUsers(currentPage, pagination.limit);
        if (!isMounted) return;

        const responseBody = response?.data;
        const dataPayload = responseBody?.data || [];
        const paginationPayload = responseBody?.pagination || { 
          total: dataPayload.length, 
          page: "0", 
          limit: "20",
          pages: 1 
        };

        setUsers(dataPayload);
        setPagination({
          total: Number(paginationPayload.total || 0),
          page: Number(paginationPayload.page || 0),
          limit: Number(paginationPayload.limit || 20),
          pages: Number(paginationPayload.pages || Math.ceil(Number(paginationPayload.total) / Number(paginationPayload.limit)) || 1)
        });
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, [currentPage, usersService, pagination.limit]);

  // Search Logic: Filter loaded users by first name, last name, or email match
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const fName = user?.firstName?.toLowerCase() || "";
      const lName = user?.lastName?.toLowerCase() || "";
      const email = user?.email?.toLowerCase() || "";
      const query = searchTerm.toLowerCase();

      return fName.includes(query) || lName.includes(query) || email.includes(query);
    });
  }, [users, searchTerm]);

  const handleUserClick = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", "detail");
    params.set("id", id);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 0 || newPage >= pagination.pages) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  // Helper to build out the precise pagination layout from your design image
  const renderPageNumbers = () => {
    const totalPages = pagination.pages;
    const pagesArray = [];
    
    let startPage = Math.max(0, currentPage - 2);
    let endPage = Math.min(totalPages - 1, startPage + 4);
    
    if (endPage - startPage < 4) {
      startPage = Math.max(0, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesArray.push(i);
    }

    return pagesArray.map((pageIdx) => (
      <button
        key={pageIdx}
        onClick={() => handlePageChange(pageIdx)}
        className={`w-9 h-9 flex items-center justify-center text-[13px] font-bold rounded-full transition-all ${
          currentPage === pageIdx
            ? "bg-[#111827] text-white"
            : "text-[#4B5563] hover:bg-gray-50"
        }`}
      >
        {pageIdx + 1}
      </button>
    ));
  };

  if (view === "detail" && selectedId) {
    return <UserDetails id={selectedId} />;
  }

  return (
    <div className="p-3 space-y-7 animate-in fade-in duration-500">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <p className="text-[12px] text-gray-400 font-medium">
          Showing <span className="text-[#1D2939]">{pagination.page * pagination.limit} - {Math.min((pagination.page + 1) * pagination.limit, pagination.total)}</span> of <span className="text-[#1D2939]">{pagination.total}</span> Users
        </p>
        
        {/* SEARCH INPUT */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="name, email, ..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] w-64 outline-none focus:border-gray-200 transition-all" 
          />
          <Image src="/images/search.svg" alt="Search" width={20} height={20} className="absolute right-3.5 top-2.5 opacity-40" />
        </div>
      </div>

      {/* USER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <div className="col-span-full py-20 text-center text-gray-400 text-[13px]">Loading...</div>
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div 
              key={user._id}
              onClick={() => handleUserClick(user._id)}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center space-y-6 cursor-pointer hover:shadow-md transition-all group"
            >
              <div className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-50">
  {/* Active Status on the far left */}
  <span className="text-[12px] font-bold text-[#1D2939] capitalize">
    {user.status}
  </span>

  {/* Dot and Type grouped together on the extreme right */}
  <div className="flex items-center gap-1.5">
    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
    {user.type && (
      <span className="text-[12px] text-[#667085] font-medium capitalize">
        {user.type}
      </span>
    )}
  </div>
</div>
              
              {/* UNTOUCHED: INITIALS LOGIC */}
              <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center text-[24px] font-bold text-[#1D2939] bg-gray-50 group-hover:border-[#034EA2] transition-colors">
                {user.firstName.charAt(0)}{user.lastName.charAt(0)}
              </div>

              {/* UNTOUCHED: NAME LOGIC */}
              <div className="text-center">
                <p className="text-[14px] font-bold text-[#1D2939] group-hover:text-[#034EA2] transition-colors">{user.firstName} {user.lastName}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-400 text-[13px]">
            No users found matching "{searchTerm}"
          </div>
        )}
      </div>

      {/* PAGINATION CONTROLS MATCHED TO GRAPHIC */}
      {pagination.pages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button 
            disabled={currentPage === 0}
            onClick={() => handlePageChange(currentPage - 1)}
            className="w-9 h-9 flex items-center justify-center disabled:opacity-20 group transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={currentPage === 0 ? "#9CA3AF" : "#4B5563"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-0.5 transition-transform">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div className="flex items-center gap-1.5">
            {renderPageNumbers()}
          </div>

          <button 
            disabled={currentPage >= pagination.pages - 1}
            onClick={() => handlePageChange(currentPage + 1)}
            className="w-9 h-9 flex items-center justify-center disabled:opacity-20 group transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={currentPage >= pagination.pages - 1 ? "#9CA3AF" : "#4B5563"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 transition-transform">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}