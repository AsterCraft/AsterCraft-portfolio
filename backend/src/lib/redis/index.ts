import { Redis } from "@upstash/redis";

import env from "@lib/env";

const redis = new Redis({
  url: env.UPSTASH_REDIS_REST_URL,
  token: env.UPSTASH_REDIS_REST_TOKEN,
});

export const checkRedisConnection = async () => {
  try {
    await redis.ping();
    return true;
  } catch (err) {
    console.error("Redis connection failed", err as Error);
    return false;
  }
};

export default redis;
