import express from "express";
import swaggerUi from "swagger-ui-express";

import { openApiSpecification } from "@lib/swagger";
import { sendSuccess } from "@lib/api-response";

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
    return sendSuccess(res, 200, { message: "Server online" });
  });

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpecification));

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
