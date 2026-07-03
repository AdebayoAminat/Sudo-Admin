"use client";
import React from "react";
import Image from "next/image";

interface CardItemProps {
  card: {
    last4: string;
    expiry: string;
    holder: string;
    brand: string;
    type: string;
    status: string;
  };
  onClick: () => void;
}

export default function CardItem({ card, onClick }: CardItemProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-300 rounded-xl p-6 relative h-[220px] flex flex-col justify-between group transition-shadow cursor-pointer hover:shadow-md"
    >
      {/* Top row */}
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-bold text-gray-400  tracking-widest">
          {card.type}
        </span>
        <span className="text-[10px] font-bold text-[#10B981]  px-2 py-0.5 rounded tracking-widest">
          {card.status}
        </span>
      </div>

      {/* Chip image */}
      <div className="relative mb-3 pt-4">
        <Image
          src="/images/chip.svg"
          alt="EMV Chip"
          width={40}
          height={32}
          className="opacity-70"
        />
      </div>

      {/* Middle Section: Card Number and Expiry */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-1">
        <p className="text-[17px] font-medium text-[#1D2939] card-number-font w-full">
          5063 21** **** {card.last4}
        </p>
      </div>

      {/* Bottom row: Holder Name and Brand Logo */}
      <div className="flex justify-between items-center mt-auto">
        <div className="truncate max-w-[160px]">
          <p className="text-[12px] font-bold text-[#1D2939] truncate uppercase">
            {card.holder}
          </p>
        </div>

        <div className="relative w-14 h-9">
          <Image
            src={`/images/${card.brand.toLowerCase()}.svg`}
            alt="Card Brand"
            fill
            className="opacity-90 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
