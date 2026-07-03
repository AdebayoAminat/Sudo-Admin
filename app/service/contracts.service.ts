// import api from "./api";

// export default class ContractsService {
//     async getAllContracts() {
//         try {
//           const res = await api.get("/contracts");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error fetching all contracts:", error);
//           throw error;
//         }
//       }

//       async createANewContract() {
//         try {
//           const res = await api.post("/contracts");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error creating a new contract:", error);
//           throw error;
//         }
//     }

//     async getContractById(contractId: string) {
//         try {
//           const res = await api.get(`/contracts/${contractId}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching contract ID ${contractId}:`, error);
//           throw error;
//         }
//     }

//      async updateContractDetails(contractId: string) {
//         try {
//           const res = await api.put(`/contracts/${contractId}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error updating contract ID ${contractId}:`, error);
//           throw error;
//         }
//     }

//     async deleteContract(contractId: string) {
//         try {
//           const res = await api.delete(`/contracts/${contractId}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error deleting contract ID ${contractId}:`, error);
//           throw error;
//         }
//     }
// }


import api from "./api";

export default class ContractsService {
  async getAllContracts(page: number = 0, limit: number = 25) {
    try {
      const res = await api.get("/contracts", {
        params: { page, limit }
      });
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error fetching all contracts:", error);
      return { error: error?.response?.data || error.message || "Failed to fetch contracts" };
    }
  }

  async createANewContract(payload: any) {
    try {
      const res = await api.post("/contracts", payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error creating a new contract:", error);
      return { error: error?.response?.data || error.message || "Failed to create contract" };
    }
  }

  async getContractById(contractId: string) {
    try {
      const res = await api.get(`/contracts/${contractId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching contract ID ${contractId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to fetch contract details" };
    }
  }

  async updateContractDetails(contractId: string, payload: any) {
    try {
      const res = await api.put(`/contracts/${contractId}`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error updating contract ID ${contractId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to update contract" };
    }
  }

  async deleteContract(contractId: string) {
    try {
      const res = await api.delete(`/contracts/${contractId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error deleting contract ID ${contractId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to delete contract" };
    }
  }
}