"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";

interface FilterProps {
  onClose: () => void;
  onApply: (filters: any) => void;
}

export default function BusinessFilter({ onClose, onApply }: FilterProps) {
  // 1. Create a ref for the filter container
  const filterRef = useRef<HTMLDivElement>(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [businessType, setBusinessType] = useState("All");

  // 2. Handle clicking outside the filter
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is NOT inside the filterRef, close the filter
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const appliedCount = useMemo(() => {
    let count = 0;
    if (startDate || endDate) count += 1;
    if (businessType !== "All") count += 1;
    return count;
  }, [startDate, endDate, businessType]);

  const handleClearAll = () => {
    setStartDate("");
    setEndDate("");
    setBusinessType("All");
  };

  const handleApply = () => {
    onApply({ startDate, endDate, businessType, appliedCount });
    onClose();
  };

  return (
    <div
      ref={filterRef}
      className="absolute top-12 right-0 w-[320px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-bold text-[#1D2939] text-sm">Filters</h4>
        <button
          onClick={handleClearAll}
          className="text-[12px] font-bold text-[#1D2939] underline decoration-gray-300 hover:text-red-500"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        <div className="bg-[#F2F4F7] px-3 py-1.5 rounded-md inline-flex items-center gap-2">
          <span className="text-[11px] font-bold text-[#034EA2]">
            {appliedCount} filter(s) applied
          </span>
          <Image
            src="/images/arrow-down.svg"
            alt=""
            width={10}
            height={10}
            className="opacity-40"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-[12px] font-medium text-gray-500">
              Date Range
            </label>
            <Image
              src="/images/chevron-right.svg"
              alt=""
              width={10}
              height={10}
              className="opacity-40"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-200 rounded-lg py-2 px-3 text-[11px] focus:outline-[#034EA2]"
              />
            </div>
            <span className="text-gray-300">-</span>
            <div className="relative flex-1">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border border-gray-200 rounded-lg py-2 px-3 text-[11px] focus:outline-[#034EA2]"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-[12px] font-medium text-gray-500">
              Business Type
            </label>
            <Image
              src="/images/chevron-right.svg"
              alt=""
              width={10}
              height={10}
              className="opacity-40"
            />
          </div>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full border border-gray-200 rounded-lg py-2.5 px-3 text-[12px] text-[#1D2939] appearance-none bg-no-repeat bg-[right_12px_center]"
          >
            <option value="All">All</option>
             <option value="Business">Business</option>
            <option value="Developer">Developer</option>
            <option value="Consumer">Consumer</option>
          </select>
        </div>

        <button
          onClick={handleApply}
          className="w-full bg-[#032345] text-white font-bold py-3 rounded-lg text-[13px] hover:bg-black transition-colors mt-4"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
