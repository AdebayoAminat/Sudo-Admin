// import api from "./api";

// export default class sdrReportService {
//     async getAllSdrUsers() {
//         try {
//             const res = await api.get("/sdr-report/users");
//             return {
//                 status: res.status,
//                 data: res.data,
//             };
//         } catch (error) {
//             console.error("Error fetching all SDR users:", error);
//             throw error;
//         }
//     }

//     async addANewSdrMember() {
//         try {
//             const res = await api.post("/sdr-report/members");
//             return {
//                 status: res.status,
//                 data: res.data,
//             };
//         } catch (error) {
//             console.error("Error adding a new SDR member:", error);
//             throw error;
//         }
//     }

//     async getAllSdrMembers() {
//         try {
//             const res = await api.get("/sdr-report/members");
//             return {
//                 status: res.status,
//                 data: res.data,
//             };
//         } catch (error) {
//             console.error("Error fetching all SDR members:", error);
//             throw error;
//         }
//     }

//     async getSdrMemberById(memberId: string) {
//         try {
//             const res = await api.get(`/sdr-report/members/${memberId}`);
//             return {
//                 status: res.status,
//                 data: res.data,
//             };
//         } catch (error) {
//             console.error(`Error fetching SDR member ID ${memberId}:`, error);
//             throw error;
//         }
//     }
// }


import api from "./api";

export default class sdrReportService {
    async getAllSdrUsers() {
        try {
            const res = await api.get("/sdr-report/users");
            return {
                status: res.status,
                data: res.data,
            };
        } catch (error: any) {
            console.error("Error fetching all SDR users:", error);
            return { error: error?.response?.data || error.message || "Failed to fetch SDR users" };
        }
    }

    async addANewSdrMember(payload: any) {
        try {
            const res = await api.post("/sdr-report/members", payload);
            return {
                status: res.status,
                data: res.data,
            };
        } catch (error: any) {
            console.error("Error adding a new SDR member:", error);
            return { error: error?.response?.data || error.message || "Failed to add SDR member" };
        }
    }

    async getAllSdrMembers() {
        try {
            const res = await api.get("/sdr-report/members");
            return {
                status: res.status,
                data: res.data,
            };
        } catch (error: any) {
            console.error("Error fetching all SDR members:", error);
            return { error: error?.response?.data || error.message || "Failed to fetch SDR members" };
        }
    }

    async getSdrMemberById(memberId: string) {
        try {
            const res = await api.get(`/sdr-report/members/${memberId}`);
            return {
                status: res.status,
                data: res.data,
            };
        } catch (error: any) {
            console.error(`Error fetching SDR member ID ${memberId}:`, error);
            return { error: error?.response?.data || error.message || `Failed to fetch member context for ${memberId}` };
        }
    }
}