import api from "./api";

export default class UsersService {
    // async getAllUsers() {
    //     try {
    //       const res = await api.get("/users");
    //       return {
    //         status: res.status,
    //         data: res.data,
    //       };
    //     } catch (error) {
    //       console.error("Error fetching all users:", error);
    //       throw error;
    //     }
    //   }

    async getAllUsers(page: number = 0, limit: number = 20) {
        try {
          // Pass page and limit as query parameters to match backend expectations
          const res = await api.get("/users", {
            params: {
              page,
              limit
            }
          });
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error("Error fetching all users:", error);
          throw error;
        }
      }

      async getUserById(userId: string) {
        try {
          const res = await api.get(`/users/${userId}`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error fetching user ID ${userId}:`, error);
          throw error;
        }
      }

      async getAllUsersForABusiness(businessId: string) {
        try {
          const res = await api.get(`/users/business/${businessId}`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error fetching users for business ${businessId}:`, error);
          throw error;
        }
      }

      async blockUser(userId: string) {
        try {
          const res = await api.post(`/users/${userId}/block`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error blocking user ID ${userId}:`, error);
          throw error;
        }
      }

      async unblockUser(userId: string) {
        try {
          const res = await api.post(`/users/${userId}/unblock`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error) {
          console.error(`Error unblocking user ID ${userId}:`, error);
          throw error;
        }
      }

      
}