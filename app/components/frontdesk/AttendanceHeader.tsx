"use client";

import React from "react";

interface AttendanceHeaderProps {
  title: string;
}

const AttendanceHeader = ({ title }: AttendanceHeaderProps) => {
  return (
    <header className="mb-6">
      {/* Title is passed as a prop to show the active page name */}
      <h1 className="text-[14px] font-bold text-[#1D2939] uppercase tracking-wider">
       {title}
      </h1>
    </header>
  );
};

export default AttendanceHeader;