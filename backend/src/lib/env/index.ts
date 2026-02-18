import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().max(65535).default(7979),
  NODE_ENV: z.enum(["development", "production"]).default("development"),

  EMAIL_USER: z.email(),
  EMAIL_PASS: z.string().min(1),

  UPSTASH_REDIS_REST_URL: z.url(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
});

export const env = envSchema.parse(process.env);

export default env;
