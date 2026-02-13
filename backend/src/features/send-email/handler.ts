import type { NextFunction, Request, Response } from "express";

import { getRecipientEmail } from "./config";
import type { SendEmailRequest, SendEmailResponse } from "./types";
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
    await sendEmail(recipientEmail, data.subject, fullBody);
    res.json({
      success: true,
      message: "Email sent successfully",
    } as SendEmailResponse);
  } catch (err) {
    next(err);
  }
};

export default sendEmailHandler;
