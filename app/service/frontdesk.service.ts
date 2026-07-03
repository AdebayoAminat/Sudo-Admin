// import api from "./api";

// export default class FrontDeskService {
//     async getEmployeesAttendance() {
//         try {
//           const res = await api.get("/frontdesk/employees");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error fetching employees attendance:", error);
//           throw error;
//         }
//     }

//     async getVisitorsAttendance() {
//         try {
//           const res = await api.get("/frontdesk/visitors");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error fetching visitors attendance:", error);
//           throw error;
//         }
//     }

//     async getAllEmployeesData() {
//         try {
//           const res = await api.get("/frontdesk/employees-data");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error fetching all employees data:", error);
//           throw error;
//         }
//     }

//     async getSingleEmployeeData(employeeId: string) {
//         try {
//           const res = await api.get(`/frontdesk/employees/${employeeId}`);
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error fetching single employee data:", error);
//           throw error;
//         }
//     }
//     async addEmployeeToId() {
//         try {
//           const res = await api.post("/frontdesk/staff-id");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error adding employee to ID:", error);
//           throw error;
//         }
//     }

//     async updateEmployeeIdStatus() {
//         try {
//           const res = await api.patch("/frontdesk/staff-id");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error updating employee ID status:", error);
//           throw error;
//         }   
//     }
// }


import api from "./api";

export default class FrontDeskService {
    async getEmployeesAttendance() {
        try {
          const res = await api.get("/frontdesk/employees");
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error: any) {
          console.error("Error fetching employees attendance:", error);
          return {
            status: error?.response?.status || 500,
            data: null,
            error: error?.response?.data || error.message || error,
          };
        }
    }

    async getVisitorsAttendance() {
        try {
          const res = await api.get("/frontdesk/vistors");
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error: any) {
          console.error("Error fetching visitors attendance:", error);
          return {
            status: error?.response?.status || 500,
            data: null,
            error: error?.response?.data || error.message || error,
          };
        }
    }

    async getAllEmployeesData() {
        try {
          const res = await api.get("/frontdesk/employees-data");
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error: any) {
          console.error("Error fetching all employees data:", error);
          return {
            status: error?.response?.status || 500,
            data: null,
            error: error?.response?.data || error.message || error,
          };
        }
    }

    async getSingleEmployeeData(employeeId: string) {
        try {
          const res = await api.get(`/frontdesk/employees/${employeeId}`);
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error: any) {
          console.error("Error fetching single employee data:", error);
          return {
            status: error?.response?.status || 500,
            data: null,
            error: error?.response?.data || error.message || error,
          };
        }
    }

    async addEmployeeToId() {
        try {
          const res = await api.post("/frontdesk/staff-id");
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error: any) {
          console.error("Error adding employee to ID:", error);
          return {
            status: error?.response?.status || 500,
            data: null,
            error: error?.response?.data || error.message || error,
          };
        }
    }

    async updateEmployeeIdStatus() {
        try {
          const res = await api.patch("/frontdesk/staff-id");
          return {
            status: res.status,
            data: res.data,
          };
        } catch (error: any) {
          console.error("Error updating employee ID status:", error);
          return {
            status: error?.response?.status || 500,
            data: null,
            error: error?.response?.data || error.message || error,
          };
        }   
    }
}