import { AxiosInstance } from "axios";
import { axiosInstance } from "./controller";

interface DataType {
  // Define the structure of your data here
  id: number;
  name: string;
  // Add other properties as needed
}

export const createUser = async (data: DataType) => {
  try {
    const response = axiosInstance.post("/users", data);
    console.log((await response).data);
  } catch (error) {
    console.error(error);
  }
};
export const login = async (data: any) => {
  try {
    const response = await axiosInstance.post("/login", data);

    // const { token } = response.data;
    // return token;
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const userInfo = async () => {
  try {
    const response = await axiosInstance.get("users/data", {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const inputCardData = async (data: any) => {
  try {
    const response = await axiosInstance.post("/cards", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchQRCode = async (data: any) => {
  try {
    const response = await axiosInstance.get(
      `/qr?data=${encodeURIComponent(JSON.stringify(data))}`
    );

    return response;
  } catch (error) {
    console.error("Error fetching QR code:", error);
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post("/logout");

    // const { token } = response.data;
    // return token;
    
    return response;
  } catch (error) {
    console.error(error);
  }
};
