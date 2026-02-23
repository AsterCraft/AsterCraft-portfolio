import z from "zod";

export * from "./helpers.ts";

export type ApiResponse<T> =
  | { success: true; data?: T; meta?: unknown }
  | { success: false; error: string; details?: unknown };

export type ValidationErrorDetails<T extends z.ZodType> = {
  formErrors: string[];
  fieldErrors: { [P in keyof z.output<T>]?: string[] | undefined };
};

export type RateLimitErrorDetails = {
  limit: number;
  remaining: number;
  reset: number;
  retryAfter: number;
};
