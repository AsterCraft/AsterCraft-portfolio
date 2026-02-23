import createClient from "openapi-fetch";
import type { paths } from "./schema";

import env from "@shared/config/env";

const apiClient = createClient<paths>({
  baseUrl: env.VITE_API_URL,
});

if (env.DEV) {
  apiClient.use({
    onRequest({ request }) {
      console.log(`[API] ${request.method} ${request.url}`);
      return request;
    },
    onResponse({ response }) {
      console.log(`[API] Response ${response.status}`);
      return response;
    },
  });
}

export default apiClient;
