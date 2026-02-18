import type { NextFunction, Request, Response } from "express";

import { emailRateLimiter, projectRateLimiter } from "@lib/rate-limits";
import type { SendEmailRequest } from "./types";

const emailRateLimiterMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const identifierIp = req.ip;
  if (!identifierIp)
    return res
      .status(418)
      .json("Client disconnected (req.socket was destroyed)");
  const resultIp = await emailRateLimiter.limit(identifierIp);

  if (!resultIp.success) {
    return res.status(429).json({
      message: "That ip sent too much emails",
      reason: resultIp.reason,
      reset: resultIp.reset,
    });
  }

  const identifierProject = (req.body as SendEmailRequest).project;
  const resultProject = await projectRateLimiter.limit(identifierProject);

  if (!resultProject.success) {
    return res.status(429).json({
      message: "That project sent too much emails",
      reason: resultProject.reason,
      reset: resultProject.reset,
    });
  }

  next();
};

export default emailRateLimiterMiddleware;
