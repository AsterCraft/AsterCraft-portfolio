import { Ratelimit } from "@upstash/ratelimit";

import redis from "@lib/redis";

const apiRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "15m"),
  analytics: true,
  prefix: "rl:api",
});

const emailRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1m"),
  analytics: true,
  prefix: "rl:email",
});

const projectRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(20, "6h"),
  analytics: true,
  prefix: "rl:project",
});

export { apiRateLimiter, emailRateLimiter, projectRateLimiter };
