import api from "./api";

export default class CustomersService {
    async getAllCustomers() {
        try {
          const res = await api.get("/customers");
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error("Error fetching all customers:", error);
          throw error;
        }
      }

      async getCustomerById(customerId: string) {
        try {
          const res = await api.get(`/customers/${customerId}`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error fetching customer ID ${customerId}:`, error);
          throw error;
        }
    }

    async getAllCustomersForABusiness(businessId: string) {
        try {
          const res = await api.get(`/customers/business/${businessId}`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error fetching customers for business ${businessId}:`, error);
          throw error;
        }
    }
}