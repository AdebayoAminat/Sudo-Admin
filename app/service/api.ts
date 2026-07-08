
// import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from "axios";

// const api = axios.create({
//   baseURL:
//     process.env.NEXT_PUBLIC_BASE_URL 
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const setupInterceptors = (instance: AxiosInstance) => {
//   instance.interceptors.request.use(
//     (config: InternalAxiosRequestConfig) => {
//       if (typeof window !== "undefined") {
//         // Double-check your login code saves the token under this exact name
//         const token = localStorage.getItem("jwtToken");
        
//         if (token && token !== "undefined" && token !== "null" && token.trim() !== "") {
//           // Use .set() for modern Axios versions to ensure the header is applied
//           if (config.headers.set) {
//             config.headers.set("Authorization", `Bearer ${token}`);
//           } else {
//             config.headers.Authorization = `Bearer ${token}`;
//           }
//         }
//       }
//       return config;
//     },
//     (error: AxiosError) => {
//       return Promise.reject(error);
//     }
//   );
// };

// setupInterceptors(api);

// export default api;

import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const setupInterceptors = (instance: AxiosInstance) => {
  // Request Interceptor: Appends token to outgoing requests
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("jwtToken");
        
        if (token && token !== "undefined" && token !== "null" && token.trim() !== "") {
          if (config.headers.set) {
            config.headers.set("Authorization", `Bearer ${token}`);
          } else {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor: Catches errors globally (like 401 Session Timeouts)
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // Normal successful responses pass through directly
      return response;
    },
    (error: AxiosError) => {
      // Check if the server responded with an error payload
      if (error.response) {
        const { status } = error.response;

        // 401 Status means the session timed out or token is invalid
        if (status === 401) {
          console.warn("Session timed out or invalid token. Logging out...");

          if (typeof window !== "undefined") {
            // 1. Wipe out the expired token
            localStorage.removeItem("jwtToken");
            
            // 2. Safely kick them straight back to your login gate
            window.location.href = "/signin"; 
          }
        }
      }

      // Pass the error back down to the services (like your service catch blocks)
      return Promise.reject(error);
    }
  );
};

setupInterceptors(api);

export default api;