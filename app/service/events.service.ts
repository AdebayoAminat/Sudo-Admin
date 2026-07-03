// import api from "./api";

// export default class EventsService {
//     async getAllRequestLogs() {
//         try {
//           const res = await api.get("/events/requests-logs");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error fetching all request logs:", error);
//           throw error;
//         }
//       }

//       async getRequestLogById(requestLogId: string) {
//         try {
//           const res = await api.get(`/events/requests-logs/${requestLogId}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching request log ID ${requestLogId}:`, error);
//           throw error;
//         }
//     }

//     async getAllAuditLogs() {
//         try {
//           const res = await api.get("/events/audit-logs");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error fetching all audit logs:", error);
//           throw error;
//         }
//       }

//       async getAuditLogById(auditLogId: string) {
//         try {
//           const res = await api.get(`/events/audit-logs/${auditLogId}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error(`Error fetching audit log ID ${auditLogId}:`, error);
//           throw error;
//         }
//     }
// }

import api from "./api";

export default class EventsService {
  async getAllRequestLogs(page: number = 0, limit: number = 25) {
    try {
      // Pass page and limit as query parameters to your backend API
      const res = await api.get("/events/request-logs", {
        params: { page, limit }
      });
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error fetching all request logs:", error);
      return { error: error?.response?.data || error.message || "Failed to fetch request logs" };
    }
  }
  async getRequestLogById(requestLogId: string) {
    try {
      const res = await api.get(`/events/request-logs/${requestLogId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching request log ID ${requestLogId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to fetch detailed log payload" };
    }
  }

  // async getAllAuditLogs() {
  //   try {
  //     const res = await api.get("/events/audit-logs");
  //     return {
  //       status: res.status,
  //       data: res.data,
  //     };
  //   } catch (error: any) {
  //     console.error("Error fetching all audit logs:", error);
  //     return { error: error?.response?.data || error.message || "Failed to fetch audit logs" };
  //   }
  // }
async getAllAuditLogs(page: number = 0, limit: number = 25) {
    try {
      const res = await api.get("/events/audit-logs", {
        params: { page, limit }
      });
      return { status: res.status, data: res.data };
    } catch (error: any) {
      console.error("Error fetching all audit logs:", error);
      return { error: error?.response?.data || error.message || "Failed to fetch audit logs" };
    }
  }
  
  async getAuditLogById(auditLogId: string) {
    try {
      const res = await api.get(`/events/audit-logs/${auditLogId}`);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error(`Error fetching audit log ID ${auditLogId}:`, error);
      return { error: error?.response?.data || error.message || "Failed to fetch detailed audit log" };
    }
  }
}