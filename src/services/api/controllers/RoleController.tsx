import { fetchWithTimeoutAndAuth } from "../fetchWithTimeout";
import { API_ROUTES } from "../ApiRoutes";

export const RoleController = {
  create: async (role: any) => {
    const res = await fetchWithTimeoutAndAuth(API_ROUTES.ROLE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(role),
    });
    return res.json();
  },

  getAll: async () => {
    const res = await fetchWithTimeoutAndAuth(API_ROUTES.ROLE, {
      method: "GET",
    });
    return res.json();
  },

  update: async (roleId: string, data: any) => {
    const res = await fetchWithTimeoutAndAuth(`${API_ROUTES.ROLE}/${roleId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  delete: async (roleId: string) => {
    const res = await fetchWithTimeoutAndAuth(`${API_ROUTES.ROLE}/${roleId}`, {
      method: "DELETE",
    });
    return res.json();
  },
};
