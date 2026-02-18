import express from "express";

import validateRequest from "@middleware/validate-request";
import errorHandler from "@middleware/error-handler";
import corsMiddleware from "@middleware/cors";
import apiRateLimitMiddleware from "@middleware/api-rate-limit";

import sendEmailHandler, {
  emailRateLimiterMiddleware,
  sendEmailRequestSchema,
} from "@features/send-email";

const createApp = () => {
  const app = express();

  app.set("trust proxy", true);

  app.use(corsMiddleware);
  app.use(express.json());

  app.get("/health", (_, res) => {
    res.status(200).json({ message: "Server online" });
  });

  app.use(apiRateLimitMiddleware);

  app.post(
    "/api/send-email",
    emailRateLimiterMiddleware,
    validateRequest(sendEmailRequestSchema),
    sendEmailHandler,
  );

  app.use(errorHandler);

  return app;
};

export default createApp;
