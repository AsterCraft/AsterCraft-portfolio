let apiBaseUrl = import.meta.env.VITE_API_URL;

if (!apiBaseUrl) {
  console.warn("Failed to get VITE_API_URL env, using localhost");
  apiBaseUrl = "http://localhost:7979";
}

console.log(`Using ${apiBaseUrl} as api url`);

export const API_ENDPOINTS = {
  sendEmail: `${apiBaseUrl}/api/send-email`,
} as const;
