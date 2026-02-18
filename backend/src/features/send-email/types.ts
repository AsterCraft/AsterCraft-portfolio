import z from "zod";

import { PROJECT_RECIPIENTS, type ProjectId } from "./config";

const senderSchema = z.object({
  name: z.string().optional(),
  email: z.email(),
});

export const sendEmailRequestSchema = z.object({
  project: z.enum(Object.keys(PROJECT_RECIPIENTS) as ProjectId[]),
  sender: senderSchema,
  subject: z.string().default("New Form Submission"),
  body: z.record(z.string(), z.string()),
});

export type SendEmailRequest = z.infer<typeof sendEmailRequestSchema>;
