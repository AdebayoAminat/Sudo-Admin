// "use client";
// import React, { useState, useRef } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { AuthService } from "@/app/service/auth.service";



// export default function TwoFAPage() {
//   const router = useRouter();
//   const [step, setStep] = useState("selection");
//   const [pin, setPin] = useState(["", "", "", ""]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

//   const handlePinChange = (value: string, index: number) => {
//     if (!/^\d*$/.test(value)) return;
//     const newPin = [...pin];
//     newPin[index] = value.slice(-1);
//     setPin(newPin);

//     if (value && index < 3) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (
//     e: React.KeyboardEvent<HTMLInputElement>,
//     index: number,
//   ) => {
//     if (e.key === "Backspace" && !pin[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handleVerify = async () => {
//     setErrorMessage("");
//     const code = pin.join("");

//     if (code.length !== 4) {
//       const msg = "Please enter your complete 4-digit PIN.";
//       setErrorMessage(msg);
//       toast.error(msg);
//       return;
//     }

//     const tempLogin = localStorage.getItem("tempLogin");
//     if (!tempLogin) {
//       const msg = "Unable to verify. Please sign in again.";
//       setErrorMessage(msg);
//       toast.error(msg);
//       router.push("/signin");
//       return;
//     }

//     const parsedLogin = JSON.parse(tempLogin);
//     setLoading(true);

//     try {
//       const authService = new AuthService();
//       const payload = {
//         ...parsedLogin,
//         pin: code,
//         twoFactorAuthType: "PIN",
//       };
//       const request = await authService.login2FA(payload);
//       const statusCode = request?.data?.statusCode;
//       const responseData = request?.data?.data;


//       if (statusCode === 200 || statusCode === 202) {
//         const token = responseData?.token || request?.data?.data?.jwtToken;
        
//         if (token) {
//           localStorage.setItem("jwtToken", token);
//         } else {
//           console.error("Token not found in response payload", request.data);
//         }

//         localStorage.setItem("userData", JSON.stringify(responseData));
//         setLoading(false);
//         toast.success("Two-factor authentication successful! Redirecting...");
//         router.push("/dashboard");
//       } else {
//         setLoading(false);
//         const msg =
//           request?.data?.message ||
//           "PIN verification failed. Please try again.";
//         setErrorMessage(msg);
//         toast.error(msg);
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error("2FA verification error:", error);
//       const msg = "PIN verification failed. Please try again.";
//       setErrorMessage(msg);
//       toast.error(msg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen w-full bg-white flex items-center justify-center font-sans overflow-hidden">
//       <div className="absolute top-10 left-12 z-50">
//         <img
//           src="/images/_$udo.svg"
//           alt="Sudo Logo"
//           className="h-7 w-auto object-contain"
//         />
//       </div>

//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
//         <div className="relative w-full max-w-[550px] h-[550px] -translate-x-32">
//           <Image
//             src="/images/background.svg"
//             alt=""
//             fill
//             className="object-contain opacity-70"
//             priority
//           />
//         </div>
//       </div>

//       <div className="bg-white p-10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 w-full max-w-[480px] z-10 mx-6">
//         {step === "selection" ? (
//           <div className="flex flex-col animate-in fade-in duration-300">
//             <button
//               className="self-end text-gray-400 hover:text-gray-600 text-[13px] mb-6 transition-colors"
//               onClick={() => router.push("/signin")}
//             >
//               ← Back
//             </button>

//             <h1 className="text-[19px] font-bold text-[#1D2939] mb-1">
//               Account Verification
//             </h1>
//             <p className="text-[13px] text-gray-500 mb-8 leading-snug">
//               Select a method you would like to use to verify your account:
//             </p>

//             <div className="space-y-3">
//               <div
//                 onClick={() => setStep("pin")}
//                 className="group border border-blue-500 rounded-xl p-5 flex items-center justify-between cursor-pointer bg-blue-50/20 transition-all"
//               >
//                 <div className="text-left">
//                   <h3 className="font-bold text-[#1D2939] text-[15px]">PIN</h3>
//                   <p className="text-[12px] text-gray-400 mt-0.5">
//                     Enter your 4-digit security PIN.
//                   </p>
//                 </div>
//                 <div className="text-blue-500 text-lg opacity-40 group-hover:opacity-100 transition-all">
//                   ›
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col animate-in slide-in-from-right-4 duration-300">
//             <button
//               className="self-end text-[13px] font-semibold text-[#0A1F44] hover:underline mb-10"
//               onClick={() => setStep("selection")}
//             >
//               Select another auth method
//             </button>

//             <div className="w-full text-left mb-6">
//               <h2 className="text-[19px] font-bold text-[#1D2939] mb-1">PIN</h2>
//               <p className="text-[13px] text-gray-500">
//                 Enter your 4-digit security PIN:
//               </p>
//             </div>

//             {errorMessage && (
//               <div className="mb-4 text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-100">
//                 {errorMessage}
//               </div>
//             )}

//             <div className="flex gap-3 mb-10 w-full justify-between">
//               {pin.map((digit, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   inputMode="numeric"
//                   maxLength={1}
//                   value={digit}
//                   ref={(el) => {
//                     inputRefs.current[index] = el;
//                   }}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                   onChange={(e) => handlePinChange(e.target.value, index)}
//                   className="w-[22%] h-14 border border-gray-200 rounded-xl text-center text-2xl font-bold text-[#0a1435] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
//                 />
//               ))}
//             </div>

//             <button
//               type="button"
//               onClick={handleVerify}
//               disabled={loading}
//               className="w-full bg-[#0a1435] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[#121d46] disabled:opacity-70 transition-all"
//             >
//               {loading ? "Verifying..." : "Verify"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AuthService } from "@/app/service/auth.service";

export default function TwoFAPage() {
  const router = useRouter();
  
  // 1. Force the initial state to load the PIN view directly instead of "selection"
  const [step, setStep] = useState("pin");
  const [pin, setPin] = useState(["", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handlePinChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newPin = [...pin];
    newPin[index] = value.slice(-1);
    setPin(newPin);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    setErrorMessage("");
    const code = pin.join("");

    if (code.length !== 4) {
      const msg = "Please enter your complete 4-digit PIN.";
      setErrorMessage(msg);
      toast.error(msg);
      return;
    }

    const tempLogin = localStorage.getItem("tempLogin");
    if (!tempLogin) {
      const msg = "Unable to verify. Please sign in again.";
      setErrorMessage(msg);
      toast.error(msg);
      router.push("/signin");
      return;
    }

    const parsedLogin = JSON.parse(tempLogin);
    setLoading(true);

    try {
      const authService = new AuthService();
      const payload = {
        ...parsedLogin,
        pin: code,
        twoFactorAuthType: "PIN",
      };
      const request = await authService.login2FA(payload);
      const statusCode = request?.data?.statusCode;
      const responseData = request?.data?.data;

      if (statusCode === 200 || statusCode === 202) {
        const token = responseData?.token || request?.data?.data?.jwtToken;
        
        if (token) {
          localStorage.setItem("jwtToken", token);
        } else {
          console.error("Token not found in response payload", request.data);
        }

        localStorage.setItem("userData", JSON.stringify(responseData));
        setLoading(false);
        toast.success("Two-factor authentication successful! Redirecting...");
        router.push("/dashboard");
      } else {
        setLoading(false);
        const msg = request?.data?.message || "PIN verification failed. Please try again.";
        setErrorMessage(msg);
        toast.error(msg);
      }
    } catch (error) {
      setLoading(false);
      console.error("2FA verification error:", error);
      const msg = "PIN verification failed. Please try again.";
      setErrorMessage(msg);
      toast.error(msg);
    }
  };

  // Automatically trigger verification when all 4 digits are typed out
  useEffect(() => {
    if (pin.length === 4 && pin.every((digit) => /^\d$/.test(digit)) && !loading && step === "pin") {
      const triggerVerification = setTimeout(() => {
        handleVerify();
      }, 300);
      return () => clearTimeout(triggerVerification);
    }
  }, [pin, loading, step]);

  // Handle global "Enter" key code submission
  useEffect(() => {
    const handleGlobalSubmitKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" && step === "pin" && !loading) {
        handleVerify();
      }
    };
    window.addEventListener("keydown", handleGlobalSubmitKey);
    return () => window.removeEventListener("keydown", handleGlobalSubmitKey);
  }, [pin, step, loading]);

  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center font-sans overflow-hidden">
      <div className="absolute top-10 left-12 z-50">
        <img
          src="/images/_$udo.svg"
          alt="Sudo Logo"
          className="h-7 w-auto object-contain"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-full max-w-[550px] h-[550px] -translate-x-32">
          <Image
            src="/images/background.svg"
            alt=""
            fill
            className="object-contain opacity-70"
            priority
          />
        </div>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 w-full max-w-[480px] z-10 mx-6">
        {step === "selection" ? (
          <div className="flex flex-col animate-in fade-in duration-300">
            <button
              className="self-end text-gray-400 hover:text-gray-600 text-[13px] mb-6 transition-colors"
              onClick={() => router.push("/signin")}
            >
              ← Back
            </button>

            <h1 className="text-[19px] font-bold text-[#1D2939] mb-1">
              Account Verification
            </h1>
            <p className="text-[13px] text-gray-500 mb-8 leading-snug">
              Select a method you would like to use to verify your account:
            </p>

            <div className="space-y-3">
              <div
                onClick={() => setStep("pin")}
                className="group border border-blue-500 rounded-xl p-5 flex items-center justify-between cursor-pointer bg-blue-50/20 transition-all"
              >
                <div className="text-left">
                  <h3 className="font-bold text-[#1D2939] text-[15px]">PIN</h3>
                  <p className="text-[12px] text-gray-400 mt-0.5">
                    Enter your 4-digit security PIN.
                  </p>
                </div>
                <div className="text-blue-500 text-lg opacity-40 group-hover:opacity-100 transition-all">
                  ›
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col animate-in slide-in-from-right-4 duration-300">
            <button
              className="self-end text-[13px] font-semibold text-[#0A1F44] hover:underline mb-10"
              onClick={() => setStep("selection")}
            >
              Select another auth method
            </button>

            <div className="w-full text-left mb-6">
              <h2 className="text-[19px] font-bold text-[#1D2939] mb-1">PIN</h2>
              <p className="text-[13px] text-gray-500">
                Enter your 4-digit security PIN:
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-100">
                {errorMessage}
              </div>
            )}

            <div className="flex gap-3 mb-10 w-full justify-between">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={1}
                  value={digit}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onChange={(e) => handlePinChange(e.target.value, index)}
                  // 2. CSS-based text masking to guarantee characters look like "●" securely
                  style={{
                    WebkitTextSecurity: "disc",
                    MozTextSecurity: "disc",
                  } as React.CSSProperties}
                  className="w-[20%] h-14 border border-gray-200 rounded-xl text-center text-2xl font-bold text-[#0a1435] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all shadow-sm"
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleVerify}
              disabled={loading}
              className="w-full bg-[#0a1435] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[#121d46] disabled:opacity-70 transition-all flex items-center justify-center gap-2"
            >
              {loading ? "Verifying..." : "Verify"}
              {loading && (
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}