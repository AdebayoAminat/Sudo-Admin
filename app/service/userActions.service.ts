// import api from "./api";

// export default class UserActionsService {
//     async getAllUserActions() {
//         try {
//           const res = await api.get("/user-actions");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error fetching all user actions:", error);
//           throw error;
//         }
//       }

//       async getUserActionById(actionId: string) {
//         try {
//           const res = await api.get(`/user-actions/${actionId}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching user action ID ${actionId}:`, error);
//           throw error;
//         }
//     }

//     async updateUserAction(actionId: string) {
//         try {
//           const res = await api.put(`/user-actions/${actionId}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error updating user action ID ${actionId}:`, error);
//           throw error;
//         }
//     }  
    
//     async approveUserAction(actionId: string) {
//         try {
//           const res = await api.post(`/user-actions/${actionId}/approve`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error approving user action ID ${actionId}:`, error);
//           throw error;
//         }
//     }

//     async rejectUserAction(actionId: string) {
//         try {
//           const res = await api.post(`/user-actions/${actionId}/reject`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error rejecting user action ID ${actionId}:`, error);
//           throw error;
//         }
//     }

// }


import api from "./api";

export default class UserActionsService {
  async getAllUserActions(page: number = 0, limit: number = 25) {
    try {
      // Passes page query parameters directly to backend
      const res = await api.get(`/user-actions?page=${page}&limit=${limit}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error fetching all user actions:", error);
      return { error: error?.response?.data || error.message || "Failed to fetch user actions" };
    }
  }

  async getUserActionById(actionId: string) {
    try {
      const res = await api.get(`/user-actions/${actionId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching user action ID ${actionId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to fetch user action" };
    }
  }

  async updateUserAction(actionId: string) {
    try {
      const res = await api.put(`/user-actions/${actionId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error updating user action ID ${actionId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to update user action" };
    }
  }  
    
  async approveUserAction(actionId: string) {
    try {
      const res = await api.post(`/user-actions/${actionId}/approve`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error approving user action ID ${actionId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to approve user action" };
    }
  }

  async rejectUserAction(actionId: string) {
    try {
      const res = await api.post(`/user-actions/${actionId}/reject`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error rejecting user action ID ${actionId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to reject user action" };
    }
  }
}