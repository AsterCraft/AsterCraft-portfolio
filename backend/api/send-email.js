import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("=== API Contact Email Handler Started ===");
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    console.log("OPTIONS request handled");
    return res.status(200).end();
  }

  if (req.method === "POST") {
    console.log("Body received:", req.body);
    const { name, phone, message, telegram, email } = req.body;
    console.log("Extracted data:", { name, phone, message, telegram });

    const emailContent = `
Користувача звати: ${name}
Повідомлення: ${message}
Номер телефону: ${phone}
Телеграм:  ${telegram ? telegram : "не вказано"}
Емейл: ${email ? email : "не вказано"}
    `;

    try {
      console.log("=== Starting email sending process ===");
      console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Set" : "NOT SET");
      console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Set" : "NOT SET");

      // Налаштування транспортеру для роботи з Gmail
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      console.log("Transporter created successfully");

      // Опції листа
      let mailOptions = {
        from: process.env.EMAIL_USER,
        to: "astercraft.dev@gmail.com",
        subject: "Нове повідомлення з сайту",
        text: emailContent,
      };

      console.log("Mail options:", mailOptions);

      // Відправка листа
      console.log("Attempting to send email...");
      let info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.response);
      res.status(200).json({ message: "Лист успішно відправлено!" });
    } catch (error) {
      console.error("=== ERROR DETAILS ===");
      console.error("Error message:", error.message);
      console.error("Error code:", error.code);
      console.error("Full error:", error);
      res.status(500).json({
        message: "Сталася помилка при відправленні листа.",
        error: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
