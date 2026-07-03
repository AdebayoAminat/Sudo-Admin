"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomersService from "@/app/service/customers.service";



const CustomerCard = ({ customer }: { customer: any }) => {
  const initials = customer.name
    ? customer.name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : customer.initials || "??";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full flex justify-between items-center mb-6">
        <span className="text-[10px] font-bold text-[#1D2939] uppercase">
          {customer.status || "Active"}
        </span>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          <span className="text-[10px] font-bold text-gray-400 uppercase">
            {customer.type || "Individual"}
          </span>
        </div>
      </div>
      <div className="w-20 h-20 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center text-[#1D2939] font-bold text-xl mb-4 uppercase">
        {initials}
      </div>
      <h3 className="text-[13px] font-bold text-[#1D2939] text-center mb-2">
        {customer.name || "Unknown"}
      </h3>
    </div>
  );
};

export default function CustomersTab({ businessId }: { businessId: string }) {
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const customersService = React.useMemo(() => new CustomersService(), []);

  useEffect(() => {
    const fetchCustomers = async () => {
      if (!businessId) {
        console.warn("CustomersTab: No businessId provided");
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        console.log(`Fetching customers for business: ${businessId}`);
        const res = await customersService.getAllCustomersForABusiness(businessId);
        console.log("API Response:", res);
        
        // Handle different response formats
        let data = [];
        if (res.data?.data) {
          data = res.data.data;
        } else if (res.data?.customers) {
          data = res.data.customers;
        } else if (Array.isArray(res.data)) {
          data = res.data;
        } else if (res.data) {
          data = res.data;
        }
        
        console.log("Extracted customer data:", data);
        setCustomers(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching customers:", err);
        setCustomers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [businessId, customersService]);

  const filteredCustomers = customers.filter((c) =>
    (c.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (c.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (c.phone || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-[12px] text-gray-400 font-medium">
          Showing{" "}
          <span className="text-[#1D2939] font-bold">
            0 - {filteredCustomers.length}
          </span>{" "}
          of{" "}
          <span className="text-[#1D2939] font-bold">
            {customers.length}
          </span>{" "}
          Customers
        </p>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="name, email, phone"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2 px-4 pl-10 text-[12px] outline-none"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30">
            <Image
              src="/images/search.svg"
              alt="search"
              width={14}
              height={14}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl border border-gray-100 p-6 h-40 animate-pulse"
            />
          ))}
        </div>
      ) : filteredCustomers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCustomers.map((c) => (
            <CustomerCard key={c.id || c._id} customer={c} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <div className="bg-gray-50 p-4 rounded-full">
                        <Image src="/images/file-text.svg" alt="No transaction" width={40} height={40} className="opacity-20" />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-[#1D2939] text-[15px]">No customers found</p>
                        <p className="text-[13px] text-gray-400">You currently don't have any customers.</p>
                      </div>
                    </div>
      )}
    </div>
  );
}
