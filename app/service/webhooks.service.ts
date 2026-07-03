import api from "./api";

export default class WebhooksService {
   async getWebhooksForABusiness(businessId: string) {
     try {
       const res = await api.get(`/webhook/business/${businessId}`);
       return {
         status: res.status,
         data: res.data,
       };
     } catch (error) {
       console.error(`Error fetching webhooks for business ${businessId}:`, error);
       throw error;
     }
   }

   async retryAWebhook(webhookId: string) {
     try {
       const res = await api.post(`/webhook/${webhookId}`);
       return {
         status: res.status,
         data: res.data,
       };
     } catch (error) {
       console.error(`Error retrying webhook ID ${webhookId}:`, error);
       throw error;
     }
   }
}