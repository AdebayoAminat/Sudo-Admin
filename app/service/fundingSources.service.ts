import api from "./api";

export default class fundingSourcesService {
   async getAllFundingSources() {
     try {
       const res = await api.get("/funding-sources");
       return {
         status: res.status,
         data: res.data,
       };
     } catch (error) {
       console.error("Error fetching all funding sources:", error);
       throw error;
     }
   }

   async getFundingSourceById(fundingSourceId: string) {
     try {
       const res = await api.get(`/fundingSources/${fundingSourceId}`);
       return {
         status: res.status,
         data: res.data,
       };
     } catch (error) {
       console.error(`Error fetching funding source ID ${fundingSourceId}:`, error);
       throw error;
     }
   }
}