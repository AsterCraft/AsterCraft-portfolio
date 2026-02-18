import type { NextFunction, Request, Response } from "express";

import { apiRateLimiter } from "@lib/rate-limits";

const apiRateLimitMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const identifierIp = req.ip;
  if (!identifierIp) {
    return res
      .status(418)
      .json("Client disconnected (req.socket was destroyed)");
  }

  const result = await apiRateLimiter.limit(identifierIp);
  if (!result.success) {
    console.log("apiRateLimitMiddleware triggered");
    return res.status(429).json({
      message: "This api received too many requests at the same time",
      reason: result.reason,
      reset: result.reset,
    });
  }

  next();
};

export default apiRateLimitMiddleware;
