// import api from "./api";

// export default class insuredService {
//     async getBusinessPOSOrLocationUserByRole(role: string) {
//         try {
//           const res = await api.get(`/insured/users/{role}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching ${role} users for business`, error);
//           throw error;
//         }
//       }

//       async blockOrUnblockUser(role: string) {
//         try {
//          const res = await api.put(`/insured/users/{role}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error blocking/unblocking ${role} users for business`, error);
//           throw error;
//         }
//       }

//       async getOrganizationBusiness(businessId: string) {
//         try {
//           const res = await api.get(`/insured/businesses/${businessId}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching business ID ${businessId}:`, error);
//           throw error;
//         }
//       }

//       async getUserById(userId: string) {
//         try {
//           const res = await api.get(`/insured/user/${userId}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching user ID ${userId}:`, error);
//           throw error;
//         }
//       }

//       async getbusinessLocationOrPOSMembership(businessId: string, role: string) {
//         try {
//           const res = await api.get(`/insured/membership/${businessId}/role/${role}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching ${role} membership for business ID ${businessId}:`, error);
//           throw error;
//         }
//     }       
    
//     async getInsuredTransactions() {
//         try {
//           const res = await api.get(`/insured/transactions`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching insured transactions:`, error);
//           throw error;
//         }
//     }

//     async  getSingleInsuredTransaction(transactionId: string) {
//         try {
//           const res = await api.get(`/insured/transactions/${transactionId}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching insured transaction ID ${transactionId}:`, error);
//           throw error;
//         }       
//     }

//     async getInsuredTerminals() {
//         try {
//           const res = await api.get(`/insured/terminals`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching insured terminals:`, error);
//           throw error;
//         }
//     }

//     async getInsuredSettlements() {
//         try {
//           const res = await api.get(`/insured/settlements`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching insured settlements:`, error);
//           throw error;
//         }
//     }

//     async getInsuredSettigs() {
//         try {
//           const res = await api.get(`/insured/settings`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching insured settings:`, error);
//           throw error;
//         }
//     }

//     async getInsuredBanks() {
//         try {
//           const res = await api.get(`/insured/banks`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching insured banks:`, error);
//           throw error;
//         }
//     }

//     async updateInsuredBankStatus() {
//         try {
//           const res = await api.put(`/insured/banks`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error updating insured bank status:`, error);
//           throw error;
//         }
// }

// async getInsuredSummary() {
//         try {
//           const res = await api.get(`/insured/summary`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching insured summary:`, error);
//           throw error;
//         }
//     }

//     async getMonthGraph() {
//         try {
//           const res = await api.get(`/insured/daily/graph`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching insured summary graph:`, error);
//           throw error;
//         }
//     }

//     async getLoyaltyCards() {
//         try {
//           const res = await api.get(`/insured/loyalty-cards`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching insured loyalty cards:`, error);
//           throw error;
//         }
//     }  
    
//     async addComplianceReferenceToInsuredBusiness(businessId: string) {
//         try {
//           const res = await api.put(`/insured/${businessId}/compliance`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error adding compliance reference to business ID ${businessId}:`, error);
//           throw error;
//          }
//             }

//     async getSingleInsuredUser(userId: string) {
//                 try {
//                   const res = await api.get(`/insured/user/${userId}`);
//                   return {
//                     status: res.status,
//                     data: res.data,
//                   };
//                 } catch (error) {
//                   console.error(`Error fetching insured user ID ${userId}:`, error);
//                   throw error;
//                 }
//             } 
            
//             async getLocationsForAMembership(membershipId: string) {
//                 try {
//                   const res = await api.get(`/insured/locations/${membershipId}`);
//                   return {
//                     status: res.status,
//                     data: res.data,
//                   };
//                 } catch (error) {
//                   console.error(`Error fetching locations for membership ID ${membershipId}:`, error);
//                   throw error;
//                 }   
//             }

//             async getPOSForALocation(locationId: string) {
//                 try {
//                   const res = await api.get(`/insured/pos/${locationId}`);
//                   return {
//                     status: res.status,
//                     data: res.data,
//                   };
//                 } catch (error) {
//                   console.error(`Error fetching POS for location ID ${locationId}:`, error);
//                   throw error;
//                 }   
//             }  
            
//     async getInsuredCardOrders() {
//         try {
//           const res = await api.get(`/insured/card-orders`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching insured card orders:`, error);
//           throw error;
//         }   
//     }

//     async updateInsuredCardOrder() {
//         try {
//           const res = await api.put(`/insured/update-card-orders`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error updating insured card order:`, error);
//           throw error;
//         }   
//     }
// }


import api from "./api";

 export default class insuredService {

  async getBusinessPOSorLocations(page: any, limit: any, role: string, searchTerm: string = "") {
    try {
      const res = await api.get(`insured/users/${role}?page=${page}&limit=${limit}&searchTerm=${searchTerm}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error(`Error fetching business POS or locations for role ${role}:`, error);
      return error;
    }
  }

  async getUser(userId: string) {
    try {
      const res = await api.get(`insured/users/${userId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error(`Error fetching user ID ${userId}:`, error);
      return error;
    }
  }

  async getOrganizationBusinesses(businessId: string) {
    try {
      const res =  await api.get(`insured/businesses/${businessId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error(`Error fetching organization business ID ${businessId}:`, error);
      return error;
    }
  }

  async getBusinessLocationOrPos(businessId: string, role: any) {
    try {
      const res = await api.get(`insured/membership/${businessId}/role/${role}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error(`Error fetching business location or POS for business ${businessId} and role ${role}:`, error);
      return error;
    }
  }

  async getInsuredTransactions(page: any, limit: any, fromDate: any, toDate: any, type: string = '', status: string = '', membershipId: string = '') {
    try {
      const res = await api.get(`insured/transactions?page=${page}&limit=${limit}&fromDate=${fromDate}&toDate=${toDate}&transactionType=${type}&status=${status}&membershipId=${membershipId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error('Error fetching transactions:', error);
      return error;
    }
  }

  async getSingleTransaction(transactionId: any) {
    try {
      const res = await api.get(`insured/transaction/${transactionId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error(`Error fetching transaction ID ${transactionId}:`, error);
      return error;
    }
  }

  async getAllTerminals(page: any, limit: any, userId: string = "") {
    try {
      const res = await api.get(`insured/terminals?page=${page}&limit=${limit}&userId=${userId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error('Error fetching all terminals:', error);
      return error;
    }
  }

  async getAllBanks() {
    try {
      const res = await api.get(`insured/banks`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error('Error fetching all banks:', error);
      return error;
    }
  }

  async getAllSettlements(page: any, limit: any) {
    try {
      const res = await api.get(`insured/settlements?page=${page}&limit=${limit}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error('Error fetching all settlements:', error);
      return error;
    }
  }

  async getDailyGraph() {
    try {
      const res = await api.get(`insured/daily/graph`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error('Error fetching daily graph:', error);
      return error;
    }
  }

  async getSummary() {
    try {
      const res = await api.get(`insured/summary`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error('Error fetching summary:', error);
      return error;
    }
  }

  async blockUnblockUser(role: any, data: any) {
    try {
      const res =await api.put(`insured/users/${role}`, data);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error(`Error updating blocking state for role ${role}:`, error);
      return error;
    }
  }

  async updateBankStatus(data: any) {
    try {
      const res = await api.put(`insured/banks`, data);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error('Error updating bank status:', error);
      return error;
    }
  }

  async getSettings() {
    try {
      const res = await api.get(`insured/settings`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error('Error fetching settings:', error);
      return error;
    }
  }

  async getLoyaltyCards(page: any, limit: any) {
    try {
      const res = await api.get(`insured/loyalty-cards?page=${page}&limit=${limit}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error('Error fetching loyalty cards:', error);
      return error;
    }
  }

  async addComplianceReference(businessId: string, payload: any) {
    try {
      const res = await api.put(`insured/${businessId}/compliance`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error(`Error adding compliance reference for business ID ${businessId}:`, error);
      return error;
    }
  }

  async getLocations(membershipId: string, page: any, limit: any) {
    try {
      const res = await api.get(`insured/locations/${membershipId}?page=${page}&limit=${limit}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error(`Error fetching locations for membership ID ${membershipId}:`, error);
      return error;
    }
  }

  async getPOS(locationId: string, page: any, limit: any) {
    try {
      const res = await api.get(`insured/pos/${locationId}?page=${page}&limit=${limit}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error(`Error fetching POS for location ID ${locationId}:`, error);
      return error;
    }
  }

  async getCardOrders(page: any, limit: any) {
    try {
      const res = await api.get(`insured/card-orders?page=${page}&limit=${limit}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error('Error fetching card orders:', error);
      return error;
    }
  }

  async updateCardOrder(payload: any) {
    try {
      const res = await api.put(`insured/update-card-order`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      console.error('Error updating card order status:', error);
      return error;
    }
  }
}