

"use client";

import React from "react";
import { X } from "lucide-react";

interface UpdateStatusModalProps {
  user: {
    name: string;
    status: string;
  };
  onClose: () => void;
}

const UpdateStatusModal = ({ user, onClose }: UpdateStatusModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[1px] animate-in fade-in duration-300">
      <div className="w-full max-w-[480px] bg-white rounded-xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* HEADER - Border Removed */}
        <div className="flex items-center justify-between px-8 pt-8 pb-2">
          <h2 className="text-[18px] font-bold text-[#1D2939]">
            Update User Status
          </h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* BODY - Increased spacing between label and input */}
        <div className="px-8 py-4 ">
          <div className="flex flex-col space-y-4">
            <label className="text-[14px] font-medium text-gray-500">
              Status
            </label>
            <div className="relative">
              <select 
                className="w-full h-[52px] px-4 bg-white border border-blue-100 rounded-lg text-[13px] text-gray-400 appearance-none outline-none focus:border-blue-300 transition-all cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Choose Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Blocked">Blocked</option>
              </select>
              
              {/* Custom Dropdown Arrow */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="#1D2939" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-8 pt-6 pb-10">
          <button 
            className="w-full h-[52px] bg-[#1D2939] text-white text-[14px] font-bold rounded-lg hover:bg-[#1D2939]/90 transition-all shadow-sm"
            onClick={onClose}
          >
            Update Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatusModal;