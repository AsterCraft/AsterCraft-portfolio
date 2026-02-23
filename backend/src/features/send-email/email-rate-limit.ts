import type { NextFunction, Request, Response } from "express";

import { emailRateLimiter, projectRateLimiter } from "@lib/rate-limits";
import type { SendEmailRequest } from "./types";
import { sendRateLimitError, sendError } from "@lib/api-response";

const emailRateLimiterMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const identifierIp = req.ip;
  if (!identifierIp)
    return sendError(res, 500, "Unable to identify client IP address");

  const resultIp = await emailRateLimiter.limit(identifierIp);

  if (!resultIp.success) {
    return sendRateLimitError(
      res,
      "Too many send-email requests from this IP",
      resultIp.limit,
      resultIp.remaining,
      resultIp.reset,
    );
  }

  const identifierProject = (req.body as SendEmailRequest).project;
  const resultProject = await projectRateLimiter.limit(identifierProject);

  if (!resultProject.success) {
    return sendRateLimitError(
      res,
      "Too many send-email requests for this project",
      resultProject.limit,
      resultProject.remaining,
      resultProject.reset,
    );
  }

  next();
};

export default emailRateLimiterMiddleware;
