import { fetchWithTimeoutAndAuth } from "../fetchWithTimeout";
import { API_ROUTES } from "../ApiRoutes";

export const SensorController = {
  create: async (sensor: any) => {
    const res = await fetchWithTimeoutAndAuth(API_ROUTES.SENSOR, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sensor),
    });
    return res.json();
  },

  getAll: async () => {
    const res = await fetchWithTimeoutAndAuth(API_ROUTES.SENSOR, {
      method: "GET",
    });
    return res.json();
  },

  update: async (sensorId: string, data: any) => {
    const res = await fetchWithTimeoutAndAuth(
      `${API_ROUTES.SENSOR}/${sensorId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    return res.json();
  },

  delete: async (sensorId: string) => {
    const res = await fetchWithTimeoutAndAuth(
      `${API_ROUTES.SENSOR}/${sensorId}`,
      {
        method: "DELETE",
      }
    );
    return res.json();
  },
};
