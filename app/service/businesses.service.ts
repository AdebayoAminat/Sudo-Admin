// import api from "./api";

// export default class BusinessService {
//   async getAllBusinesses() {
//     try {
//       const res = await api.get("/businesses");
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error("Error fetching all businesses:", error);
//       throw error;
//     }
//   }
  
//   async getBusinessById(businessId: string) {
//     try {
//       const res = await api.get(`/businesses/${businessId}`);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error fetching business ID ${businessId}:`, error);
//       throw error;
//     }
//   }
 
//   async updateBusinessDetails(businessId: string, payload: any) {
//     try {
//       const res = await api.put(`/businesses/${businessId}`, payload);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error updating business ID ${businessId}:`, error);
//       throw error;
//     }
//   }

//   async getBusinessConnections(businessId: string) {
//     try {
//       const res = await api.get(`/businesses/${businessId}/connections`);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error fetching connections for business ${businessId}:`, error);
//       throw error;
//     }
//   }

  
//   async getBusinessMemberships(businessId: string) {
//     try {
//       const res = await api.get(`/businesses/${businessId}/memberships`);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error fetching memberships for business ${businessId}:`, error);
//       throw error;
//     }
//   }

//   async getBusinessWebhooks(businessId: string) {
//     try {
//       const res = await api.get(`/businesses/${businessId}/webhooks`);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error fetching webhooks for business ${businessId}:`, error);
//       throw error;
//     }
//   }

  
//   async getBusinessApiKeys(businessId: string) {
//     try {
//       const res = await api.get(`/businesses/${businessId}/apikeys`);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error fetching api keys for business ${businessId}:`, error);
//       throw error;
//     }
//   }

  
//   async getBusinessContract(businessId: string) {
//     try {
//       const res = await api.get(`/businesses/${businessId}/contract`);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error fetching contracts for business ${businessId}:`, error);
//       throw error;
//     }
//   }

//   async getBusinessCompliance(reference: string) {
//     try {
//       const res = await api.get(`/businesses/compliance/${reference}`);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error fetching compliance for reference ${reference}:`, error);
//       throw error;
//     }
//   }

//    async addActivationReferenceToBusiness(businessId: string, activationReference: string, payload: any) {
//     try {
//       const res = await api.put(`/businesses/${businessId}/reference/${activationReference}`, payload);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error updating activation reference for business ${businessId}:`, error);
//       throw error;
//     }
//   }
  
//   async blockBusiness(businessId: string) {
//     try {
//       const res = await api.put(`/businesses/${businessId}/block`);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error blocking business ${businessId}:`, error);
//       throw error;
//     }
//   }

//   async unblockBusiness(businessId: string) {
//     try {
//       const res = await api.put(`/businesses/${businessId}/unblock`);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error unblocking business ${businessId}:`, error);
//       throw error;
//     }
//   }

//   async getAllBusinessesForStaffSdr() {
//     try {
//       const res = await api.get("/businesses/staff/sdr");
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error("Error fetching staff SDR listings:", error);
//       throw error;
//     }
//   }

//   async getStaffBusinesses(staffId: string) {
//     try {
//       const res = await api.get(`/businesses/staff/${staffId}`);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error fetching businesses for staff ${staffId}:`, error);
//       throw error;
//     }
//   }

 

//   async updateBusinessName(businessId: string, payload: { name: string }) {
//     try {
//       const res = await api.put(`/businesses/${businessId}/name`, payload);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error changing name for business ${businessId}:`, error);
//       throw error;
//     }
//   }

  
//   async generateUploadUrlForBusiness(businessId: string, payload: any) {
//     try {
//       const res = await api.post(`/businesses/${businessId}/generate-upload-url`, payload);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error creating upload URL for business ${businessId}:`, error);
//       throw error;
//     }
//   }

//   async updateStaffIdForBusiness(businessId: string, payload: any) {
//     try {
//       const res = await api.put(`/businesses/${businessId}/staff`, payload);
//       return {
//         status: res.status,
//         data: res.data,
//       };
//     } catch (error) {
//       console.error(`Error updating assigned staff on business ${businessId}:`, error);
//       throw error;
//     }
//   }
// }


import api from "./api";

export default class BusinessService {
  

//   async getAllBusinesses(page: number = 0, limit: number = 25) {
//   try {
//     const res = await api.get("/businesses", { params: { page, limit } });
//     return {
//       status: res.status,
//       data: res.data,
//     };
//   } catch (error: any) {
//     console.error("Error fetching all businesses:", error);
//     return {
//       status: error?.response?.status || 500,
//       data: null,
//       error: error?.response?.data || error.message || error,
//     };
//   }
// }

async getAllBusinesses(
  page: number = 0,
  limit: number = 25,
  search: string = '',
  startDate: string = '',
  endDate: string = '',
  type: string = ''
) {
  try {
    const res = await api.get("/businesses", {
      params: {
        page,
        limit,
        ...(search && { searchTerm: search }),
        ...(startDate && { fromDate: startDate }),
        ...(endDate && { toDate: endDate }),
        ...(type && { type }),
      },
    });
    return {
      status: res.status,
      data: res.data,
    };
  } catch (error: any) {
    console.error("Error fetching all businesses:", error);
    return {
      status: error?.response?.status || 500,
      data: null,
      error: error?.response?.data || error.message || error,
    };
  }
}
  
  async getBusinessById(businessId: string) {
    try {
      const res = await api.get(`/businesses/${businessId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching business ID ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }
 
  async updateBusinessDetails(businessId: string, payload: any) {
    try {
      const res = await api.put(`/businesses/${businessId}`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error updating business ID ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getBusinessConnections(businessId: string) {
    try {
      const res = await api.get(`/businesses/${businessId}/connections`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching connections for business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getBusinessMemberships(businessId: string) {
    try {
      const res = await api.get(`/businesses/${businessId}/memberships`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching memberships for business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getBusinessWebhooks(businessId: string) {
    try {
      const res = await api.get(`/businesses/${businessId}/webhooks`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching webhooks for business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getBusinessApiKeys(businessId: string) {
    try {
      const res = await api.get(`/businesses/${businessId}/apikeys`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching api keys for business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getBusinessContract(businessId: string) {
    try {
      const res = await api.get(`/businesses/${businessId}/contract`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching contracts for business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getBusinessCompliance(reference: string) {
    try {
      const res = await api.get(`/businesses/compliance/${reference}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching compliance for reference ${reference}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async addActivationReferenceToBusiness(businessId: string, activationReference: string, payload: any) {
    try {
      const res = await api.put(`/businesses/${businessId}/reference/${activationReference}`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error updating activation reference for business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }
  
  async blockBusiness(businessId: string) {
    try {
      const res = await api.put(`/businesses/${businessId}/block`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error blocking business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async unblockBusiness(businessId: string) {
    try {
      const res = await api.put(`/businesses/${businessId}/unblock`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error unblocking business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getAllBusinessesForStaffSdr() {
    try {
      const res = await api.get("/businesses/staff/sdr");
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error fetching staff SDR listings:", error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async getStaffBusinesses(staffId: string) {
    try {
      const res = await api.get(`/businesses/staff/${staffId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching businesses for staff ${staffId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async updateBusinessName(businessId: string, payload: { name: string }) {
    try {
      const res = await api.put(`/businesses/${businessId}/name`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error changing name for business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async generateUploadUrlForBusiness(businessId: string, payload: any) {
    try {
      const res = await api.post(`/businesses/${businessId}/generate-upload-url`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error creating upload URL for business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }

  async updateStaffIdForBusiness(businessId: string, payload: any) {
    try {
      const res = await api.put(`/businesses/${businessId}/staff`, payload);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error updating assigned staff on business ${businessId}:`, error);
      return {
        status: error?.response?.status || 500,
        data: null,
        error: error?.response?.data || error.message || error,
      };
    }
  }
}