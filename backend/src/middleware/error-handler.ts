import type { NextFunction, Request, Response } from "express";

import { sendError } from "@lib/api-response";
import env from "@lib/env";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (env.NODE_ENV === "production") {
    console.error("Error:", err.message);
  } else {
    console.error("Error:", err);
  }

  return sendError(res, 500, "Internal server error");
};

export default errorHandler;
