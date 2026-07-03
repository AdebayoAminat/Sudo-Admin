
import Image from "next/image";

interface AccountCardProps {
  title: string;
  subTitle: string;
  currency: "USD" | "NGN";
  balance: string;
  onClick?: () => void; // Added for navigation
}

export const AccountCard = ({
  title,
  subTitle,
  currency,
  balance,
  onClick,
}: AccountCardProps) => {
  const flagSrc =
    currency === "NGN" ? "/images/ng-flag.svg" : "/images/us-flag.svg";
  const symbol = currency === "NGN" ? "₦" : "$";

  return (
    <div
      onClick={onClick} // Triggers the transition to the details page
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative"
    >
      <div className="flex justify-between items-start mb-10">
        <div className="space-y-1">
          <h3 className="font-bold text-[#1D2939] text-[15px]">{title}</h3>
          <p className="text-[12px] text-gray-400 font-medium uppercase">
            {subTitle}
          </p>
        </div>
        <div className="text-gray-300 group-hover:text-[#034EA2] transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex items-center">
          <Image
            src={flagSrc}
            alt={`${currency} flag`}
            width={24}
            height={18}
            className="object-contain"
          />
        </div>
        <div className="text-right">
          <span className="text-[24px] font-bold text-[#1D2939]">
            {symbol}
            {balance}
          </span>
        </div>
      </div>
    </div>
  );
};
