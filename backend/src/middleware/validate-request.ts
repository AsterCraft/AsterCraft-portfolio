import { z, type ZodType } from "zod";
import type { NextFunction, Request, Response } from "express";

import { sendValidateError } from "@lib/api-response";

const validateRequest = <T extends ZodType>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      console.error("Validation failed:", z.prettifyError(result.error));

      const flattened = z.flattenError(result.error);
      return sendValidateError(res, flattened);
    }

    req.body = result.data;
    next();
  };
};

export default validateRequest;
