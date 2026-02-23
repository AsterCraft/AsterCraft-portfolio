import sendEmailHandler from "./handler";

export { sendEmailRequestSchema } from "./types";
export { default as emailRateLimiterMiddleware } from "./email-rate-limit";

export default sendEmailHandler;
