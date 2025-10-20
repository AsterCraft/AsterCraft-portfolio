const API_BASE_URL = import.meta.env.API_URL || "http://localhost:7979";

export const API_ENDPOINTS = {
  sendEmail: `${API_BASE_URL}/api/send-email`,
} as const;
