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

  /**
   * @openapi
   * /health:
   *   get:
   *     summary: Health check
   *     description: Returns server status
   *     tags:
   *       - Health
   *     responses:
   *       200:
   *         description: Server is online
   *         content:
   *           application/json:
   *             schema:
   *               allOf:
   *                 - $ref: '#/components/schemas/SuccessResponse'
   *                 - type: object
   *                   properties:
   *                     data:
   *                       type: object
   *                       properties:
   *                         message:
   *                           type: string
   *                           example: "Server online"
   */
  app.get("/health", (_, res) => {
    return sendSuccess(res, 200, { message: "Server is online" });
  });

  /**
   * @openapi
   * /api-docs/json:
   *   get:
   *     summary: Get OpenAPI specification in JSON format
   *     description: Returns the complete OpenAPI 3.0 specification for this API
   *     tags:
   *       - Documentation
   *
   *     responses:
   *       200:
   *         description: OpenApi specification json
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 openapi:
   *                   type: string
   *                   example: "3.0.0"
   *                 info:
   *                   type: object
   *                 paths:
   *                   type: object
   *                 components:
   *                   type: object
   */
  app.get("/api-docs/json", (_, res) => {
    return res.status(200).json(openApiSpecification);
  });

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(openApiSpecification, {
      // explorer: true,
    }),
  );

  app.use(apiRateLimitMiddleware);

  /**
   * @openapi
   * /api/send-email:
   *   post:
   *     summary: Send email from contact form
   *     description: Sends an email to the project owner from a contact form submission
   *     tags:
   *       - Email
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/SendEmailRequest'
   *           example:
   *             project: "astercraft-portfolio"
   *             sender:
   *               name: "John Doe"
   *               email: "john@example.com"
   *             subject: "Contact Form Submission"
   *             body:
   *               message: "Hello, I'd like to work with you!"
   *               phone: "+1234567890"
   *     responses:
   *       200:
   *         description: Email sent successfully
   *         content:
   *           application/json:
   *             schema:
   *               allOf:
   *                 - $ref: '#/components/schemas/SuccessResponse'
   *                 - type: object
   *                   properties:
   *                     data:
   *                       type: object
   *                       properties:
   *                         message:
   *                           type: string
   *                           example: "Email sent successfully"
   *       400:
   *         description: Validation error
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ValidationErrorResponse'
   *       429:
   *         description: Rate limit exceeded
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/RateLimitErrorResponse'
   *       500:
   *         description: Internal server error
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorResponse'
   */
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
