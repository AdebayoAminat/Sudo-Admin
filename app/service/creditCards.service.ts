import api from "./api"; 

export default class CreditCardsService {
    async getAllCreditCardRequests() {
        try {
          const res = await api.get("/credit-cards/requests");
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error("Error fetching all credit card requests:", error);
          throw error;
        }
      }

      async getSingleCreditCardRequest(requestId: string) {
        try {
          const res = await api.get(`/credit-cards/requests/${requestId}`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error fetching credit card request ID ${requestId}:`, error);
          throw error;
        }
    }

    async approveCreditCardRequest(requestId: string) {
        try {
          const res = await api.post(`/credit-cards/requests/${requestId}`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error approving credit card request ID ${requestId}:`, error);
          throw error;
        }
    }

    async getCreditCardDocuments(requestId: string) {
        try {
          const res = await api.get(`/credit-cards/documents/${requestId}`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error fetching documents for credit card request ID ${requestId}:`, error);
          throw error;
        }
    }

    async createOrUpdateCreditCardDocuments(requestId: string) {
        try {
          const res = await api.post(`/credit-cards/documents/${requestId}`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error creating/updating documents for credit card request ID ${requestId}:`, error);
          throw error;
        }   
    }

    async getCreditCardReviews(requestId: string) {
        try {
          const res = await api.get(`/credit-cards/reviews/${requestId}`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error fetching reviews for credit card request ID ${requestId}:`, error);
          throw error;
        }
    }

    async ReviewCreateCardRequest(requestId: string) {
        try {
          const res = await api.post(`/credit-cards/reviews/${requestId}`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error creating review for credit card request ID ${requestId}:`, error);
          throw error;
        }
    }
}
