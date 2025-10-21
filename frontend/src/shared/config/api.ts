let apiBaseUrl = import.meta.env.VITE_API_URL;

if (!apiBaseUrl) apiBaseUrl = "http://localhost:7979";

export const API_ENDPOINTS = {
  sendEmail: `${apiBaseUrl}/api/send-email`,
} as const;
