import { axiosInstance } from "./controller";
export const addPlans = async (data:any) => {
    try {
      const response = axiosInstance.post("/prices", data);
      console.log((await response).data);
    } catch (error) {
      console.error(error);
    }
  };