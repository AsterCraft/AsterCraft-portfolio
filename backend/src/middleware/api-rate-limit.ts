import type { NextFunction, Request, Response } from "express";

import { apiRateLimiter } from "@lib/rate-limits";
import { sendRateLimitError, sendError } from "@lib/api-response";

const apiRateLimitMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const identifierIp = req.ip;
  if (!identifierIp) {
    return sendError(res, 500, "Unable to identify client IP address");
  }

  const result = await apiRateLimiter.limit(identifierIp);
  if (!result.success) {
    return sendRateLimitError(
      res,
      "Too many API requests",
      result.limit,
      result.remaining,
      result.reset,
    );
  }

  next();
};

export default apiRateLimitMiddleware;
