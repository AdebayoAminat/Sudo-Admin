
// "use client";
// import React, { useEffect, useState, useMemo } from "react";
// import Image from "next/image";
// import CardsService from "@/app/service/cards.service";
// import AccountsService from "@/app/service/accounts.service";

// interface CardDetailsProps {
//   cardId: string;
//   onBackToList?: () => void;
// }

// export default function CardDetails({ cardId: propsCardId, onBackToList }: CardDetailsProps) {
//   const cardsService = useMemo(() => new CardsService(), []);
//   const accountsService = useMemo(() => new AccountsService(), []);


//   // UI State Controls
//   const [activeSubTab, setActiveSubTab] = useState<"details" | "transactions">("details");
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [showActions, setShowActions] = useState(false);
//   const [showMetadata, setShowMetadata] = useState(false);

//   // Core Data Fetching States
//   const [card, setCard] = useState<any>(null);
//   const [accountBalance, setAccountBalance] = useState<number | null>(null);
//   const [transactions, setTransactions] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [txLoading, setTxLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [actionProcessing, setActionProcessing] = useState<boolean>(false);

//   // Interactive State for Channels Toggle Controls initialized dynamically from backend response
//   const [channels, setChannels] = useState<{ [key: string]: boolean }>({});

//   // Fallback ID Extraction
//   const cardId = useMemo(() => {
//     if (propsCardId) return propsCardId;
//     if (typeof window !== "undefined") {
//       const searchParams = new URLSearchParams(window.location.search);
//       const queryId = searchParams.get("id");
//       if (queryId) return queryId;
//       const pathSegments = window.location.pathname.split("/");
//       const lastSegment = pathSegments[pathSegments.length - 1];
//       if (lastSegment && lastSegment !== "cards") return lastSegment;
//     }
//     return "";
//   }, [propsCardId]);

//   // Form Mutation States
//   const [spendingControlType, setSpendingControlType] = useState<"allowed" | "blocked">("allowed");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Handler for Channel Selection Toggling
//   const handleToggleChannel = (channel: string) => {
//     setChannels((prev) => ({
//       ...prev,
//       [channel]: !prev[channel]
//     }));
//   };

//   /**
//    * Helper to dynamically manage brand image routes mapping 
//    * exactly to your project's workspace assets directory strings.
//    */
//   const getCardImage = (brand: string, side: "front" | "back") => {
//     const normalizedBrand = brand?.toLowerCase().trim();
//     let brandKey = "mastercard"; // Default fallback

//     if (normalizedBrand?.includes("verve")) {
//       brandKey = "verve";
//     } else if (normalizedBrand?.includes("visa")) {
//       brandKey = "visa";
//     } else if (normalizedBrand?.includes("master")) {
//       brandKey = "mastercard";
//     }

//     // Appends '-back' if flipped, otherwise points directly to base front asset path
//     return side === "back" 
//       ? `/images/card-designs/sudo-black-${brandKey}-back.svg`
//       : `/images/card-designs/sudo-black-${brandKey}.svg`;
//   };

//   // 1. Fetch Card Details & Target Live Balances
//   useEffect(() => {
//     if (!cardId) {
//       setError("Missing Card Identifier Parameter.");
//       setLoading(false);
//       return;
//     }

//     let isMounted = true;
//     async function getCardData() {
//       try {
//         setLoading(true);
//         setError(null);
//         const response = await cardsService.getCardByID(cardId);
//         if (!isMounted) return;

//         const payload = response?.data?.data || response?.data;
//         if (payload) {
//           setCard(payload);

//           // Populate initial allowed channels state configuration if provided by data layer structure
//           const backendChannels = payload.spendingControls?.channels || payload.channels;
//           if (backendChannels) {
//             setChannels({
//               ATM: !!backendChannels.atm,
//               POS: !!backendChannels.pos,
//               WEB: !!backendChannels.web,
//               MOBILE: !!backendChannels.mobile
//             });
//           }

//           // Fetch dynamic live balance using the targeted embedded account identifier row
//           try {
//             const targetAccountId = payload.account?._id || payload.accountId || payload.account?.id;
            
//             if (targetAccountId) {
//               const balanceResponse = await accountsService.getAccountBalance(targetAccountId);
//               const balancePayload = balanceResponse?.data?.data || balanceResponse?.data;
              
//               if (balancePayload && typeof balancePayload.availableBalance !== "undefined") {
//                 setAccountBalance(balancePayload.availableBalance);
//               } else if (balancePayload && typeof balancePayload.currentBalance !== "undefined") {
//                 setAccountBalance(balancePayload.currentBalance);
//               }
//             } else {
//               console.warn("No relational Account ID link found on this card payload document.");
//             }
//           } catch (balanceErr) {
//             console.error("Failed to query target account balance endpoint: ", balanceErr);
//           }
//         } else {
//           setError("No matching card configurations found.");
//         }
//       } catch (err: any) {
//         if (isMounted) setError(err?.message || "Failed to link backend connection.");
//       } finally {
//         if (isMounted) setLoading(false);
//       }
//     }

//     getCardData();
//     return () => { isMounted = false; };
//   }, [cardId, cardsService, accountsService]);

//   // 2. Fetch Card Transaction History
//   useEffect(() => {
//     if (!cardId || activeSubTab !== "transactions") return;
//     let isMounted = true;

//     async function getTransactionLedger() {
//       try {
//         setTxLoading(true);
//         const response = await cardsService.getAllTransactionsForACard(cardId);
//         if (isMounted) {
//           setTransactions(response?.data?.data || response?.data || []);
//         }
//       } catch (err) {
//         console.error("Ledger Fetch Error: ", err);
//       } finally {
//         if (isMounted) setTxLoading(false);
//       }
//     }

//     getTransactionLedger();
//     return () => { isMounted = false; };
//   }, [cardId, activeSubTab, cardsService]);

//   // Action Menu API Handlers
//   const handleReconcileCard = async () => {
//     try {
//       setActionProcessing(true);
//       alert("Card reconciled successfully!");
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setActionProcessing(false);
//       setShowActions(false);
//     }
//   };

//   const handleDownloadStatement = async () => {
//     try {
//       setActionProcessing(true);
//       alert("Statement downloading initiated.");
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setActionProcessing(false);
//       setShowActions(false);
//     }
//   };

//   const handleResendWebhook = async () => {
//     try {
//       setActionProcessing(true);
//       alert("Webhook sync transaction triggered.");
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setActionProcessing(false);
//       setShowActions(false);
//     }
//   };

//   const filteredTransactions = useMemo(() => {
//     if (!Array.isArray(transactions)) return [];
//     return transactions.filter((tx) => {
//       const merchantName = tx?.merchant?.name || tx?.merchant || "";
//       return merchantName.toLowerCase().includes(searchQuery.toLowerCase());
//     });
//   }, [transactions, searchQuery]);

//   if (loading) {
//     return (
//       <div className="w-full h-[60vh] flex flex-col items-center justify-center space-y-4">
//         <div className="w-10 h-10 border-[3px] border-[#034EA2] border-t-transparent rounded-full animate-spin" />
//         <p className="text-[13px] text-gray-500 font-medium">Loading card sdetails...</p>
//       </div>
//     );
//   }

//   if (error || !card) {
//     return (
//       <div className="w-full p-12 text-center bg-white border border-gray-100 rounded-xl space-y-4">
//         <p className="text-red-500 text-[12px] font-mono">{error || "Could not resolve details configurations."}</p>
//         {onBackToList && (
//           <button onClick={onBackToList} className="px-4 py-2 bg-[#001533] text-white rounded-lg text-[12px] font-bold">
//             Return to Cards Directory
//           </button>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6 pb-24 text-[#1D2939]">
// {/* Main Tabs Selection Navigation */}
//       <div className="flex justify-between items-center border-b border-gray-200">
//         <div className="flex gap-8">
//           <button
//             onClick={() => setActiveSubTab("details")}
//             className={`pb-4 text-[14px] font-semibold transition ${activeSubTab === "details" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400 hover:text-gray-600"}`}
//           >
//             Card Details
//           </button>
//           <button
//             onClick={() => setActiveSubTab("transactions")}
//             className={`pb-4 text-[14px] font-semibold transition ${activeSubTab === "transactions" ? "text-[#034EA2] border-b-2 border-[#034EA2]" : "text-gray-400 hover:text-gray-600"}`}
//           >
//             Transactions
//           </button>
//         </div>
//       </div>

//       {activeSubTab === "details" ? (
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
//           {/* LEFT SIDE BLOCK */}
//           <div className="lg:col-span-7 space-y-8">
//             <div className="flex justify-between items-start">
//               <div className="space-y-1">
//                 <div className="flex items-center gap-3">
//                   <h1 className="text-[28px] font-bold text-gray-900 tracking-tight">{card.customer?.name || card.holder}</h1>
//                   <span className="bg-green-100 text-green-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase">
//                     {card.status || "Active"}
//                   </span>
//                 </div>
//                 <p className="text-[26px] font-black text-gray-900">
//                   {card.currency === "NGN" ? "₦" : "$"}
//                   {Number(accountBalance !== null ? accountBalance : (card.balance || 0)).toLocaleString(undefined, { minimumFractionDigits: 2 })}
//                 </p>
//                 <p className="text-[12px] text-gray-400">Created at: {card.createdAt}</p>
//               </div>

//               {/* Action Dropdown Menu Button */}
//               <div className="relative">
//                 <button 
//                   onClick={() => setShowActions(!showActions)} 
//                   disabled={actionProcessing}
//                   className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 text-gray-600 transition text-lg pb-2 focus:outline-none"
//                 >
//                   ...
//                 </button>
//                 {showActions && (
//                   <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2 text-left">
//                     <button onClick={handleReconcileCard} className="w-full px-4 py-2.5 text-[13px] text-gray-700 hover:bg-gray-50 flex items-center gap-2.5 font-medium transition">
//                       <span className="w-2 h-2 rounded-full bg-green-500" /> Reconcile Card
//                     </button>
//                     <button onClick={handleDownloadStatement} className="w-full px-4 py-2.5 text-[13px] text-gray-700 hover:bg-gray-50 flex items-center gap-2.5 font-medium transition">
//                       <span className="w-2 h-2 rounded-full bg-green-500" /> Download Statement
//                     </button>
//                     <button onClick={handleResendWebhook} className="w-full px-4 py-2.5 text-[13px] text-gray-700 hover:bg-gray-50 flex items-center gap-2.5 font-medium transition">
//                       <span className="w-2 h-2 rounded-full bg-green-500" /> Resend Webhook
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Core Card Info Grid */}
//             <div className="space-y-4">
//               <h3 className="text-[15px] font-bold text-gray-900 border-b border-gray-100 pb-2">Card Details</h3>
//               <div className="space-y-3 text-[13px]">
//                 <div className="flex justify-between"><span className="text-gray-400">Account</span><span className="font-semibold text-gray-900">SUDO / {(card.account.accountName ).toUpperCase()}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Business</span><span className="font-semibold text-[#034EA2] underline cursor-pointer">{card.account.business } →</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Card Holder</span><span className="font-semibold text-gray-900">{card.customer?.name || card.holder }</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Currency</span><span className="font-semibold text-gray-990">{card.currency}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Brand</span><span className="font-semibold text-gray-900">{card.brand}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Type</span><span className="font-semibold text-gray-900">{card.type}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">PAN</span><span className="font-semibold text-gray-900 font-mono">{card.maskedPan}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Expiry</span><span className="font-semibold text-gray-900 font-mono">{card.expiryMonth && card.expiryYear ? `${card.expiryMonth}/${card.expiryYear}` : ""}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">CVV</span><span className="font-semibold text-gray-900">{card.cvv || "***" }</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Default PIN</span><span className="font-semibold text-gray-900">{card.defaultPin || "****"}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Two Factor Enrolled</span><span className="font-semibold text-gray-900">{card.is2FAEnrolled ? "Yes" : "No"}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Status</span><span className="font-semibold text-gray-900">{card.status}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Provider Status</span><span className="font-semibold text-gray-900">{card.providerStatus}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Date Created</span><span className="font-semibold text-gray-900">{card.createdAt }</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400">Date Updated</span><span className="font-semibold text-gray-900">{card.updatedAt}</span></div>
//               </div>
//             </div>

//             {/* Inputs & Form Config lists */}
//             <div className="space-y-6 pt-2">
//               <div className="space-y-2">
//                 <h3 className="text-[14px] font-bold text-gray-900">Funding Source</h3>
//                 <p className="text-[12px] text-gray-400">The funding source of this card:</p>
//                 <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-[13px] text-gray-700 focus:outline-none">
//                   <option>Main Corporate Balance Account ({card.currency || "NGN"})</option>
//                 </select>
//               </div>

//               <div className="space-y-3">
//                 <h3 className="text-[14px] font-bold text-gray-900">Spending Controls</h3>
//                 <p className="text-[12px] text-gray-400">Allow or block specific merchant categories for this card:</p>
//                 <div className="flex gap-6 text-[13px] font-medium">
//                   <label className="flex items-center gap-2"><input type="radio" checked={spendingControlType === "allowed"} onChange={() => setSpendingControlType("allowed")} className="accent-[#034EA2]" /> Allowed Categories</label>
//                   <label className="flex items-center gap-2"><input type="radio" checked={spendingControlType === "blocked"} onChange={() => setSpendingControlType("blocked")} className="accent-[#034EA2]" /> Blocked Categories</label>
//                 </div>
//                 <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-[13px] text-gray-400"><option>Select one or more categories</option></select>
//               </div>

//               <div className="space-y-2">
//                 <h3 className="text-[14px] font-bold text-gray-900">Spending Limits</h3>
//                 <p className="text-[12px] text-gray-400">Spending limits for all or specific categories for this card:</p>
//                 <div className="border border-gray-200 rounded-lg overflow-hidden bg-white text-[12px]">
//                   <div className="grid grid-cols-3 bg-gray-50 px-4 py-2 font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
//                     <div>Amount</div><div>Interval</div><div>Category</div>
//                   </div>
//                   <div className="py-8 text-center text-gray-400 italic">You currently have no spending limit...</div>
//                 </div>
//               </div>

//               {/* Dynamic Interactive Allowed Channels State Toggle Loop */}
//               <div className="space-y-4">
//                 <h3 className="text-[14px] font-bold text-gray-900">Allowed Channels</h3>
//                 <p className="text-[12px] text-gray-400">The channels this card should work for:</p>
//                 {["ATM", "POS", "WEB", "MOBILE"].map((channel) => (
//                   <div key={channel} className="flex justify-between items-center py-1">
//                     <div>
//                       <p className="text-[12px] font-bold text-gray-900">{channel}</p>
//                       <p className="text-[11px] text-gray-400 font-medium">Enable this to allow this card work on {channel} channels</p>
//                     </div>
//                     <button 
//                       onClick={() => handleToggleChannel(channel)}
//                       className={`w-11 h-6 flex items-center rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${channels[channel] ? "bg-[#034EA2]" : "bg-gray-300"}`}
//                     >
//                       <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ${channels[channel] ? "translate-x-5" : "translate-x-0"}`} />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Custom Metadata Container Enhanced with Top & Bottom Border Lines */}
//             <div className="pt-4 border-t border-b border-gray-200 pb-4">
//               <button 
//                 onClick={() => setShowMetadata(!showMetadata)}
//                 className="flex items-center gap-2 text-[12px] font-bold text-[#1D2939] focus:outline-none"
//               >
//                 <span className={`text-gray-300 text-[10px] transform transition-transform ${showMetadata ? "" : "-rotate-90"}`}>▼</span> Metadata
//               </button>
//               {showMetadata && (
//                 <div className="mt-3 p-4 bg-gray-50 border border-gray-100 rounded-xl font-mono text-[11px] text-gray-500 overflow-x-auto">
//                   {JSON.stringify(card?.metadata || { environment: "sandbox", cardId }, null, 2)}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* RIGHT SIDE SIDEBAR (3D Card View Layout) */}
//           <div className="lg:col-span-5 space-y-6">
//             <div className="flex justify-end">
//               <button onClick={() => setIsFlipped(!isFlipped)} className="text-[12px] font-semibold text-gray-400 hover:text-[#034EA2] flex items-center gap-1 focus:outline-none">
//                 🔄 Flip Card
//               </button>
//             </div>

//             {/* 3D Flip Mechanics Execution Wrapper */}
//             <div className="w-full aspect-[1.58/1]" style={{ perspective: "1000px" }}>
//               <div 
//                 className="w-full h-full relative transition-transform duration-500"
//                 style={{ 
//                   transformStyle: "preserve-3d",
//                   transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
//                 }}
//               >
                
//                 {/* FRONT SIDE */}
//                 <div 
//                   className="absolute inset-0 rounded-2xl overflow-hidden"
//                   style={{ backfaceVisibility: "hidden" }}
//                 >
//                   <Image
//                     src={getCardImage(card.brand || "verve", "front")}
//                     alt={`${card.brand} Front`}
//                     fill
//                     className="object-contain"
//                   />

//                   {/* 1. Dynamic PAN Overlay */}
//                   <div className="absolute bottom-[28%] left-[7%]">
//                     <p className="text-[14px] font-mono tracking-[0.25em] font-medium text-white/90">
//                      {card.maskedPan}
//                     </p>
//                   </div>

//                   {/* 2. Dynamic Expiry Overlay */}
//                   <div className="absolute bottom-[18%] left-[45%]">
//                     <p className="text-[9px] font-mono font-bold text-white/70">
//                       {card.expiryMonth && card.expiryYear ? `${card.expiryMonth}/${card.expiryYear}` : ""}
//                     </p>
//                   </div>

//                   {/* 3. Dynamic Card Holder Name */}
//                   <div className="absolute bottom-[10%] left-[7%] max-w-[150px]">
//                     <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80 truncate">
//                       {card.account?.accountName}
//                     </p>
//                   </div>
//                 </div>

//                 {/* BACK SIDE */}
//                 <div 
//                   className="absolute inset-0 rounded-2xl overflow-hidden"
//                   style={{ 
//                     backfaceVisibility: "hidden",
//                     transform: "rotateY(180deg)"
//                   }}
//                 >
//                   <Image
//                     src={getCardImage(card.brand || "verve", "back")}
//                     alt={`${card.brand} Back`}
//                     fill
//                     className="object-contain"
//                   />
//                   {/* Dynamic CVV Overlay */}
//                   <div className="absolute top-[38%] left-[58%] flex items-center gap-3">
//                     <span className="text-black font-mono text-[11px] font-bold italic">
//                       {(card.cvv || "***")
//                         .split("")
//                         .map((char: string, index: number) => (
//                           <span key={index} className="mx-0.5">
//                             {char}
//                           </span>
//                         ))}
//                     </span>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* Dummy Account Metadata Display */}
//             <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-4">
//               <h4 className="text-[13px] font-bold text-gray-900 border-b border-gray-200 pb-2">Dummy Account</h4>
//               <div className="space-y-3 text-[12px]">
//                 <div className="flex justify-between"><span className="text-gray-400 font-medium">Currency</span><span className="font-bold text-gray-800">{card.dummyAccount.currency}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400 font-medium">Bank Code</span><span className="font-bold text-gray-800">{card.dummyAccount.bankCode}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400 font-medium">Account Type</span><span className="font-bold text-gray-800">{card.dummyAccount.accountType }</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400 font-medium">Account Number</span><span className="font-bold text-gray-800 font-mono">{card.dummyAccount.accountNumber}</span></div>
//               </div>
//             </div>

//             {/* Billing Frame Info Display */}
//             <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-4">
//               <h4 className="text-[13px] font-bold text-gray-900 border-b border-gray-200 pb-2">Billing Details</h4>
//               <div className="flex gap-3 items-center">
//                 <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold text-[13px] flex items-center justify-center uppercase">
//                   {(card.customer?.name || card.holder || "ZS").split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
//                 </div>
//                 <div className="overflow-hidden">
//                   <p className="text-[13px] font-bold text-gray-900 truncate">{card.customer?.name || card.holder}</p>
//                   <p className="text-[11px] text-gray-400 truncate">{card.customer?.emailAddress}</p>
//                 </div>
//               </div>

//               <div className="space-y-3 text-[12px] border-t border-gray-200 pt-3">
//                 <div className="flex justify-between gap-4"><span className="text-gray-400 font-medium shrink-0">Street</span><span className="font-bold text-gray-800 text-right max-w-[200px] truncate">{card.customer?.billingAddress?.line1 }</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400 font-medium">City</span><span className="font-bold text-gray-800">{card.customer?.billingAddress?.city}</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400 font-medium">Postal Code</span><span className="font-bold text-gray-800 font-mono">{card.customer?.billingAddress?.postalCode }</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400 font-medium">State</span><span className="font-bold text-gray-800">{card.customer?.billingAddress?.state }</span></div>
//                 <div className="flex justify-between"><span className="text-gray-400 font-medium">Country</span><span className="font-bold text-gray-800">{card.customer?.billingAddress?.country}</span></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         /* TRANSACTIONS HISTORICAL TABLE TAB WITH TARGET CUSTOM HEADERS */
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <p className="text-[13px] text-gray-500 font-medium">
//               Showing <span className="font-bold text-gray-900">{filteredTransactions.length}</span> recorded operations
//             </p>
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search merchant name..."
//               className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[13px] w-56 focus:outline-none focus:bg-white transition"
//             />
//           </div>

//           <div className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
//                   <th className="px-6 py-3.5">MERCHANT</th>
//                   <th className="px-6 py-3.5">CHANNEL</th>
//                   <th className="px-6 py-3.5">RRN</th>
//                   <th className="px-6 py-3.5">AMOUNT</th>
//                   <th className="px-6 py-3.5">CUSTOMER</th>
//                   <th className="px-6 py-3.5">CARD</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100 text-[13px]">
//                 {txLoading ? (
//                   <tr><td colSpan={6} className="py-12 text-center text-gray-400">Loading operations ledger...</td></tr>
//                 ) : filteredTransactions.length > 0 ? (
//                   filteredTransactions.map((tx: any, i) => (
//                     <tr key={tx.id || i} className="hover:bg-gray-50/50">
//                       <td className="px-6 py-3.5 font-bold text-gray-800">{tx.merchant?.name || tx.merchant || "POS Terminal"}</td>
//                       <td className="px-6 py-3.5 uppercase text-[12px] font-bold text-gray-600">{tx.channel || "Web"}</td>
//                       <td className="px-6 py-3.5 font-mono text-[12px] text-gray-500">{tx.rrn || tx.reference || "N/A"}</td>
//                       <td className="px-6 py-3.5 font-bold text-gray-900">{card.currency || "NGN"} {Number(tx.amount || 0).toLocaleString()}</td>
//                       <td className="px-6 py-3.5 text-gray-700">{tx.customerName || card.customer?.name || "Customer Account"}</td>
//                       <td className="px-6 py-3.5 font-mono text-[12px] text-gray-600">*{card.last4 || "2722"}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr><td colSpan={6} className="py-20 text-center text-gray-400 font-medium">No matching transactions found.</td></tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }