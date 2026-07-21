"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AuthService } from "@/app/service/auth.service";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    if (!email || !password) {
      setLoading(false);
      const msg = "Please enter both email and password.";
      setErrorMessage(msg);
      toast.error(msg);
      return;
    }

    try {
      const payload = { emailAddress: email, password, dashboardType: "SUDO" };
      const authService = new AuthService();
      const request = await authService.login(payload);

      const statusCode = request?.data?.statusCode;
      const responseData = request?.data?.data;

      if (statusCode === 200 || statusCode === 202) {
        const user = responseData?.user;
        const roleTitle = user?.roleDetails?.role?.title;
        const isAdmin = roleTitle === "Admin" || roleTitle === "Super Admin";

        if (roleTitle && !isAdmin) {
          setLoading(false);
          const accessDeniedMsg =
            "You do not have access to this website. Please reach out to the Admin.";
          setErrorMessage(accessDeniedMsg);
          toast.error(accessDeniedMsg);
          return;
        }

        localStorage.setItem("tempData", JSON.stringify(responseData));
        localStorage.setItem("tempLogin", JSON.stringify(payload));

        setLoading(false);
        toast.success(
         <div>
    <p className="font-semibold">Account signin successful!</p>
    <p className="text-xs text-gray-500">2FA Options</p>
  </div>
        );
        router.push("/two-fa");
      } else {
        setLoading(false);
        const errorMsg =
          request?.data?.message || "Login failed. Please try again.";
        setErrorMessage(errorMsg);
        toast.error(errorMsg);
      }
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      const errorMsg =
        "Login failed. Please check your credentials and try again.";
      setErrorMessage(errorMsg);
      toast.error(errorMsg);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#f8faff] flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute top-8 left-8 z-20">
        <Image
          src="/images/_$udo.svg"
          alt="Logo"
          width={100}
          height={40}
          className="h-auto w-auto"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-full max-w-[550px] h-[550px] translate-x-24">
          <Image
            src="/images/background.svg"
            alt=""
            fill
            className="object-contain opacity-70"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[440px] rounded-2xl bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100">
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-slate-900">Sign In</h1>
          <p className="text-slate-500 text-sm mt-1">
            Welcome back! Login to proceed
          </p>
        </div>

        {errorMessage && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-100 text-red-500 text-sm">
            {errorMessage}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@example.com"
              className="w-full rounded-lg bg-slate-50 border border-transparent px-4 py-3.5 text-sm outline-none focus:bg-white focus:border-blue-200 transition-all shadow-sm"
            />
          </div>

          <div className="relative">
            <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              className="w-full rounded-lg bg-slate-50 border border-transparent px-4 py-3.5 text-sm outline-none focus:bg-white focus:border-blue-200 transition-all shadow-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[38px] text-slate-400 hover:text-slate-600"
            >
              {showPassword ? (
                <span className="text-xs font-semibold">Hide</span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.644C3.399 8.049 7.21 5 12 5c4.791 0 8.601 3.049 9.964 6.322.035.101.035.211 0 .312C20.601 15.951 16.791 19 12 19c-4.791 0-8.601-3.049-9.964-6.322z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#0b1f5c] py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/10 hover:bg-[#081745] disabled:opacity-70 active:scale-[0.98] transition-all"
          >
            {loading ? "Signing in..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}
