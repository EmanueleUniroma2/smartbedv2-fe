import { fetchWithTimeoutAndAuth } from "../fetchWithTimeout";
import { API_ROUTES } from "../ApiRoutes";

export const SessionController = {
  login: async (userName: string, userPassword: string) => {
    const res = await fetchWithTimeoutAndAuth(API_ROUTES.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, userPassword }),
    });

    if (!res.ok) throw new Error("Login failed");
    return res.json();
  },

  logout: async () => {
    const res = await fetchWithTimeoutAndAuth(API_ROUTES.LOGOUT, {
      method: "POST",
    });

    if (!res.ok) throw new Error("Logout failed");
    return res.json();
  },
};
