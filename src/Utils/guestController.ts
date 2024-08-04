import { axiosInstance } from "./controller";

interface GuestData {
  // Define the structure of the data object
}

export const fetchGuestData = async (data: GuestData): Promise<any> => {
  try {
    const response = await axiosInstance.post("/guests", data);
    console.log(response.data); // Log only the necessary part of the response
    return response.data;
  } catch (error) {
    console.error("Error fetching guest data:", error);
    throw error; // Rethrow the error to handle it further up the call stack
  }
};
