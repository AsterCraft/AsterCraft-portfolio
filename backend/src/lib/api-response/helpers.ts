import type { Response } from "express";
import z from "zod";

import type {
  ApiResponse,
  RateLimitErrorDetails,
  ValidationErrorDetails,
} from "./index.ts";

const sendSuccess = <T>(
  res: Response,
  status: number,
  data: T,
  meta?: unknown,
) => {
  return res.status(status).json({
    success: true,
    data,
    meta,
  } satisfies ApiResponse<T>);
};

const sendError = (
  res: Response,
  status: number,
  error: string,
  details?: unknown,
) => {
  return res.status(status).json({
    success: false,
    error,
    details,
  } satisfies ApiResponse<never>);
};

const sendValidateError = <T extends z.ZodType>(
  res: Response,
  details: ValidationErrorDetails<T>,
) => {
  return sendError(res, 400, "Validation failed", details);
};

const sendRateLimitError = (
  res: Response,
  message: string,
  limit: number,
  remaining: number,
  reset: number,
) => {
  const retryAfter = Math.ceil((reset - Date.now()) / 1000);
  return sendError(res, 429, message, {
    limit,
    remaining,
    reset,
    retryAfter,
  } satisfies RateLimitErrorDetails);
};

export { sendSuccess, sendError, sendValidateError, sendRateLimitError };
