// import axios from "axios";
// import api from "./api";

// interface LoginPayload {
//   emailAddress: string;
//   password: string;
//   dashboardType: string;
//   pin?: string;
//   twoFactorAuthType?: string;
// }

// const loginApi = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOGIN,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export class AuthService {
//   async login(payload: LoginPayload) {
//     try {
//       const res = await loginApi.post("/login", payload);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error("Error logging in:", error);
//       throw error;
//     }
//   }

//   async login2FA(payload: LoginPayload) {
//     try {
//       const res = await loginApi.post("/login/2fa", payload);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error("Error logging in 2FA:", error);
//       throw error;
//     }
//   }

//   async sendOTP(payload: { emailAddress: string }) {
//     try {
//       const res = await api.post("/otp/send", payload);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       throw error;
//     }
//   }

//   async reSendOTP(payload: { emailAddress: string }) {
//     try {
//       const res = await api.post("/otp/resend", payload);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error("Error resending OTP:", error);
//       throw error;
//     }
//   }

//   async resetPassword(payload: { emailAddress: string }) {
//     try {
//       const res = await api.post("/reset/password", payload);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error("Error resetting password:", error);
//       throw error;
//     }
//   }

//   async logout(payload: { emailAddress: string }) {
//     try {
//       const res = await loginApi.post("/logout", payload);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error("Error logging out:", error);
//       throw error;
//     }
//   }

//   async getAuthenticatedUser(payload: { emailAddress: string }) {
//     try {
//       const res = await loginApi.get("authenticated/user");
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error("Error fetching authenticated user:", error);
//       throw error;
//     }
//   }

// }


import axios from "axios";
import api from "./api";

interface LoginPayload {
  emailAddress: string;
  password: string;
  dashboardType: string;
  pin?: string;
  twoFactorAuthType?: string;
}

// 1. Declare loginApi
export const loginApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOGIN,
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Add Request Interceptor to attach the Bearer Token dynamically
loginApi.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // Look for your token in localStorage. 
      // Note: If you saved the token under a different key like "user-token" or "authToken", change 'token' to that key name.
      const token = localStorage.getItem("jwtToken");
      if (token) {
        config.headers.Authorization = token;  //`Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export class AuthService {
  async login(payload: LoginPayload) {
    try {
      const res = await loginApi.post("/login", payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  async login2FA(payload: LoginPayload) {
    try {
      const res = await loginApi.post("/login/2fa", payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error("Error logging in 2FA:", error);
      throw error;
    }
  }

  async sendOTP(payload: { emailAddress: string }) {
    try {
      const res = await api.post("/otp/send", payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error("Error sending OTP:", error);
      throw error;
    }
  }

  async reSendOTP(payload: { emailAddress: string }) {
    try {
      const res = await api.post("/otp/resend", payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error("Error resending OTP:", error);
      throw error;
    }
  }

  async resetPassword(payload: { emailAddress: string }) {
    try {
      const res = await api.post("/reset/password", payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error("Error resetting password:", error);
      throw error;
    }
  }

  async logout(payload: { emailAddress: string }) {
    try {
      const res = await loginApi.post("/logout", payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  }

  // Changed to GET to match server expectations and bypass 404/405 issues
  async getAuthenticatedUser() {
    try {
      const res = await loginApi.get("authenticated/user");
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error("Error fetching authenticated user:", error);
      throw error;
    }
  }
}
