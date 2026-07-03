import axios from "axios";
import api from "./api";

interface LoginPayload {
  emailAddress: string;
  password: string;
  dashboardType: string;
  pin?: string;
  twoFactorAuthType?: string;
}

const loginApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOGIN,
  headers: {
    "Content-Type": "application/json",
  },
});

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
}
