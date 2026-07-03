
import api from "./api";

export interface AccountResponseItem {
  _id: string;
  business: string;
  type: string;
  currency: "USD" | "NGN";
  accountName: string;
  bankCode: string;
  accountType: string;
  accountNumber: string;
  currentBalance: number;
  availableBalance: number;
  provider: string;
  providerReference: string;
  referenceCode: string;
  isDefault: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  charges: any[];
}

export interface TransactionResponseItem {
  _id: string;
  type: string;
  amount: number;
  currency: "USD" | "NGN";
  reference: string;
  narration?: string;
  createdAt: string;
}

export default class AccountsService {
  async getAllAccounts(page: number = 0, limit: number = 25, type?: string) {
    try {
      // Added type into the params object sent to the backend
      const res = await api.get("/accounts", { params: { page, limit, type } });
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error fetching all accounts:", error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }
  
  async getAccountById(accountId: string) {
    try {
      const res = await api.get(`/accounts/${accountId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching account ID ${accountId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getAllAccountsForABusiness(businessId: string, page: number = 0, limit: number = 25) {
    try {
      const res = await api.get(`/accounts/business/${businessId}`, { params: { page, limit } });
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching accounts for business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getAccountBalance(accountId: string) {
    try {
      const res = await api.get(`/accounts/${accountId}/balance`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching balance for account ID ${accountId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getAccountTransactions(accountId: string, page: number = 0, limit: number = 25) {
    try {
      const res = await api.get(`/accounts/${accountId}/transactions`, { params: { page, limit } });
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching transactions for account ID ${accountId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async exportAccountTransactions(accountId: string) {
    try {
      const res = await api.get(`/accounts/${accountId}/transactions/export`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error exporting transactions for account ID ${accountId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getTransferRate(currencyPair: string) {
    try {
      const res = await api.get(`/accounts/transfer/rate/${currencyPair}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching transfer rate for currency pair ${currencyPair}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }
}