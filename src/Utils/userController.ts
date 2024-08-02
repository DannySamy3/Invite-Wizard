import { AxiosInstance } from "axios";
import { axiosInstance } from "./controller";

export const createUser = async (data) => {
  try {
    const response = axiosInstance.post("/users", data);
    console.log((await response).data);
  } catch (error) {
    console.error(error);
  }
};
export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/login", data);

    // const { token } = response.data;
    // return token;
    return response;
  } catch (error) {
    console.error(error);
  }
};
