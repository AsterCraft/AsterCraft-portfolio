import type { NextFunction, Request, Response } from "express";

import env from "@lib/env";
import { sendSuccess } from "@lib/api-response";

import { getRecipientEmail } from "./config";
import type { SendEmailRequest } from "./types";
import sendEmail from "./gmail-sender";

const sendEmailHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const data = req.body as SendEmailRequest;

  const recipientEmail = getRecipientEmail(data.project);

  const emailBody = Object.entries(data.body)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const fullBody = `
From: ${data.sender.name} <${data.sender.email}>

---

${emailBody}
`;

  try {
    if (env.NODE_ENV === "production")
      await sendEmail(recipientEmail, data.subject, fullBody);
    return sendSuccess(res, 200, { message: "Email sent successfully" });
  } catch (err) {
    next(err);
  }
};

export default sendEmailHandler;
