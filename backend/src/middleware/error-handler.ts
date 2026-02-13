import type { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("Error:", err);

  res.status(500).json({
    error: "Internal server error",
  });
};

export default errorHandler;
