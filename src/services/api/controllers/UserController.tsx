import { fetchWithTimeoutAndAuth } from "../fetchWithTimeout";
import { API_ROUTES } from "../ApiRoutes";

export const UserController = {
  create: async (user: any) => {
    const res = await fetchWithTimeoutAndAuth(API_ROUTES.USER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return res.json();
  },

  getAll: async () => {
    const res = await fetchWithTimeoutAndAuth(API_ROUTES.USER, {
      method: "GET",
    });
    return res.json();
  },

  update: async (userId: string, data: any) => {
    const res = await fetchWithTimeoutAndAuth(`${API_ROUTES.USER}/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  delete: async (userId: string) => {
    const res = await fetchWithTimeoutAndAuth(`${API_ROUTES.USER}/${userId}`, {
      method: "DELETE",
    });
    return res.json();
  },
};
