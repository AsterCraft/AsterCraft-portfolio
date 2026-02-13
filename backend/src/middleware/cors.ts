import cors from "cors";

import env from "@lib/env";

const allowedOrigins = [
  "https://www.astercraft.com.ua",
  "https://dev.astercraft.com.ua",
  "https://consulting-rozinskaya.vercel.app",
];

if (env.NODE_ENV === "development") {
  allowedOrigins.push("http://localhost:9999", "http://localhost:5173");
}

const corsMiddleware = cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "OPTIONS"],
});

export default corsMiddleware;
