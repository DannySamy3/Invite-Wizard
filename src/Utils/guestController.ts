import { axiosInstance } from "./controller";

interface GuestData {
  // Define the structure of the data object
}

export const fetchGuestData = async (data: GuestData): Promise<any> => {
  try {
    const response = await axiosInstance.post("/guests", data);
    // Log only the necessary part of the response
    return response.data;
  } catch (error) {
    console.error("Error fetching guest data:", error);
    throw error;
  }
};

export const fetchCardAndUserData = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/cards/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching card and user data:", error);
    throw error;
  }
};
