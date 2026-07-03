
import api from "./api";

export default class GiftCardsService {
  async getAllGiftCardRequests() {
    try {
      const res = await api.get("/gift-cards/requests");
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error fetching all gift card requests:", error);
      return { error: error?.response?.data || error.message || "Failed to fetch gift card requests" };
    }
  }
  
  async getGiftCardRequestById(requestId: string) {     
    try {
      const res = await api.get(`/gift-cards/requests/${requestId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching gift card request ID ${requestId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to fetch gift card request details" };
    }
  }

  async updateGiftCardRequestStatus(requestId: string, payload: any) {
    try {
      const res = await api.put(`/gift-cards/requests/${requestId}`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error updating status for gift card request ID ${requestId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to update gift card request status" };
    }
  }

  async getAllGiftCardUsers(page: number = 0, limit: number = 25) {
    try {
      const res = await api.get("/gift-cards/users", {
        params: { page, limit }
      });
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error fetching all gift card users:", error);
      return { error: error?.response?.data || error.message || "Failed to fetch gift card users" };
    }
  }

  async getAllGiftCardUsersById(userId: string, payload: any) {
    try {
      const res = await api.get(`/gift-cards/users/${userId}`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching gift card user ID ${userId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to fetch gift card user details" };
    }
  }


  async updateGiftCardUserStatus(userId: string, payload: any) {
    try {
      const res = await api.put(`/gift-cards/users/${userId}`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error updating status for gift card user ID ${userId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to update gift card user status" };
    }
  }

  async AttachCardToGiftCardRequest(payload: any) {
    try {
      const res = await api.post(`/gift-cards/requests/attach-card`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error attaching card to gift card request:`, error);
      return { error: error?.response?.data || error.message || "Failed to attach card to gift card request" };
    }
  }
}