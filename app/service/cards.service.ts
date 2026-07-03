
import api from "./api";

export default class CardsService {
  async getAllCardsForACustomer(customerId: string) {
    try {
      const res = await api.get(`/cards/customer/${customerId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching cards for customer ${customerId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getAllCardsTransactions() {
    try {
      const res = await api.get("/cards/transactions");
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error fetching general card transactions:", error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getAllTransactionsForACard(cardId: string) {
    try {
      const res = await api.get(`/cards/${cardId}/transactions`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching transactions for card ID ${cardId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getTransactionDetails(transactionId: string) {
    try {
      const res = await api.get(`/cards/transactions/${transactionId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching transaction detail for token ${transactionId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getCardTransactionsForABusiness(businessId: string) {
    try {
      const res = await api.get(`/cards/transactions/business/${businessId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching card transactions for business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  // async getAllCardDisputes() {
  //   try {
  //     const res = await api.get("/cards/disputes");
  //     return {
  //       status: res.status,
  //       data: res.data,
  //     };
  //   } catch (error: any) {
  //     console.error("Error fetching root disputes directory:", error);
  //     return {
  //       status: error?.response?.status || 500,
  //       data: null,
  //       error: error?.response?.data || error.message || error,
  //     };
  //   }
  // }
async getAllCardDisputes(params?: { limit?: number; offset?: number }) {
  try {
    // Pass the pagination parameters through the config object
    const res = await api.get("/cards/disputes", { params });
    return {
      status: res.status,
      data: res.data,
    };
  } catch (error: any) {
    console.error("Error fetching root disputes directory:", error);
    return {
      status: error?.response?.status || 500,
      data: null,
      error: error?.response?.data || error.message || error,
    };
  }
}

  async resendCardWebhook(cardId: string, payload?: any) {
    try {
      const res = await api.post(`/cards/webhook/${cardId}`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error resetting webhook status for card ID ${cardId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getHcTransactions(cardId: string) {
    try {
      const res = await api.get(`/cards/hc-transactions/${cardId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error processing high-compliance logs for card ${cardId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getAllDisputesForACard(cardId: string) {
    try {
      const res = await api.get(`/cards/${cardId}/disputes`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error extracting active claims for item group ${cardId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getDisputesDetails(disputeId: string) {
    try {
      const res = await api.get(`/cards/disputes/${disputeId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error extracting active claims for item group ${disputeId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

//   async getCardOrders(page: number = 0, limit: number = 25, status?: string) {
//   try {
//     let url = `/cards/orders?page=${page}&limit=${limit}`;
//     if (status) {
//       url += `&status=${status.toLowerCase()}`;
//     }
//     const res = await api.get(url);
//     return { status: res.status, data: res.data };
//   } catch (error: any) {
//     console.error("Error getting card orders", error);
//     return {
//       status: error?.response?.status || 500,
//       data: null,
//       error: error?.response?.data || error.message || error,
//     };
//   }
// }


async getCardOrders(page: number = 0, limit: number = 25, status?: string, type?: string) {
    try {
      let url = `/cards/orders?page=${page}&limit=${limit}`;
      
      if (status) {
        url += `&status=${status.toLowerCase()}`;
      }
      
      // If a type is passed (like 'credit'), append it to the API query string
      if (type) {
        url += `&type=${type.toLowerCase()}`;
      }
      
      const res = await api.get(url);
      return { status: res.status, data: res.data };
    } catch (error: any) {
      console.error("Error getting card orders", error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }


   
  async getCardOrdersForABusiness(businessId: string) {
    try {
      const res = await api.get(`/cards/orders/business/${businessId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error checking logistics profiles for organization target ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async updateCardOrder(orderId: string, payload: any) {
    try {
      const res = await api.post(`/cards/orders/${orderId}`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error updating card order ${orderId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getCardsForABusiness(businessId: string) {
    try {
      const res = await api.get(`/cards/business/${businessId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error rendering portfolio arrays belonging to group reference ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getCardSecureData(cardId: string, field: string) {
    try {
      const res = await api.get(`/cards/${cardId}/secure-data/${field}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error safely reading isolated parameter state [${field}] for record index ${cardId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getAllCardDisputesForABusiness(businessId: string) {
    try {
      const res = await api.get(`/cards/business/${businessId}/disputes`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching disputes for business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getAllAuthorizations() {
    try {
      const res = await api.get("/cards/authorizations");
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error getting authorizations:", error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getAuthorizationDetails(authorizationId: string) {
    try {
      const res = await api.get(`/cards/authorizations/${authorizationId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching authorization details for ${authorizationId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }
  
  async getAuthorizationsForABusiness(businessId: string) {
    try {
      const res = await api.get(`/cards/authorizations/business/${businessId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error getting Authorization for a business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getAllAuthorizationsForACard(cardId: string) {
    try {
      const res = await api.get(`/cards/${cardId}/authorizations`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error getting authorizations for card ${cardId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }
async getAllCards(page: number = 0, limit: number = 25, type?: string) {
    try {
      // Build query string dynamically including the type filter if provided
      let url = `/cards?page=${page}&limit=${limit}`;
      if (type) {
        url += `&type=${type}`;
      }
      
      const res = await api.get(url);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error getting all cards", error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async reconcileV2(cardId: string) {
    try {
      const res = await api.get(`/cards/${cardId}/reconcilev2`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error reconciling card V2 ${cardId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getHcCardStatus(reference: string) {
    try {
      const res = await api.get(`/cards/status/${reference}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error getting HC card status for ${reference}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getCardByID(cardId: string) {
    try {
      const res = await api.get(`/cards/${cardId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error loading card by ID ${cardId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }
}