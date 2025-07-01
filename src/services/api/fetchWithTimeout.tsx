// utils/fetchWithTimeout.ts

import { BaseURL } from "./Env";

export interface FetchOptions extends RequestInit {
  timeout?: number; // Optional: override default timeout
}

const DEFAULT_TIMEOUT = 30000; // 30 seconds

export async function fetchWithTimeoutAndAuth(
  url: string,
  options: FetchOptions = {}
): Promise<Response> {
  const controller = new AbortController();
  const timeout = options.timeout ?? DEFAULT_TIMEOUT;

  const timer = setTimeout(() => controller.abort(), timeout);

  const sessionToken = localStorage.getItem("sessionToken");

  const headers = new Headers(options.headers || {});
  if (sessionToken) {
    headers.set("Authorization", `Bearer ${sessionToken}`);
  }

  try {
    const response = await fetch(BaseURL + url, {
      ...options,
      headers,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timer);
  }
}
