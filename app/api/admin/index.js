import { api } from "..";

export async function getAllAdmins() {
  try {
    const response = await api.get("/admin");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
