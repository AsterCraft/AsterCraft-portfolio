import nodemailer from "nodemailer";

import env from "@lib/env";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },
});

const sendEmail = async (to: string, subject: string, body: string) => {
  await transporter.sendMail({
    from: env.EMAIL_USER,
    to,
    subject,
    text: body,
  });
};

export default sendEmail;
