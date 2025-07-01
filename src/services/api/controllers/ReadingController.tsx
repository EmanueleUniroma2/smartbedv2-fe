import { fetchWithTimeoutAndAuth } from "../fetchWithTimeout";
import { API_ROUTES } from "../ApiRoutes";

export const ReadingController = {
  create: async (data: any) => {
    const res = await fetchWithTimeoutAndAuth(API_ROUTES.READING, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  getAll: async () => {
    const res = await fetchWithTimeoutAndAuth(API_ROUTES.READING, {
      method: "GET",
    });
    return res.json();
  },
};
