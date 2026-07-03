// import api from "./api";

// export default class notificationsService {
//     async getAllNotifications() {
//         try {
//           const res = await api.get("/notifications");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error fetching all notifications:", error);
//           throw error;
//         }
//       }

//       async sendPushNotification() {
//         try {
//           const res = await api.post("/notifications");
//           return {
//             status: res.status,
//             data: res.data,
//           };
//         } catch (error) {
//           console.error("Error sending push notification:", error);
//           throw error;
//         }
//       }
    
// }


import api from "./api";

export default class NotificationsService {
  async getAllNotifications() {
    try {
      const res = await api.get("/notifications");
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error fetching all notifications:", error);
      return { error: error?.response?.data || error.message || "Failed to fetch notifications" };
    }
  }

  async sendPushNotification() {
    try {
      const res = await api.post("/notifications");
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      console.error("Error sending push notification:", error);
      return { error: error?.response?.data || error.message || "Failed to send notification" };
    }
  }
}


