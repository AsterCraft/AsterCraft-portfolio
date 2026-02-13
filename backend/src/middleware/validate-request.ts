import { z, type ZodType } from "zod";
import type { NextFunction, Request, Response } from "express";

const validateRequest = <T extends ZodType>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      console.error("Validation failed:", z.prettifyError(result.error));
      return res.status(400).json({ error: "Validation failed" });
    }

    req.body = result.data;
    next();
  };
};

export default validateRequest;
