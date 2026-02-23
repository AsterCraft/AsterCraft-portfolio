package infrastructure

import (
	"backend/domain"
	"fmt"
	"net/smtp"
	"time"
)

type GmailSender struct {
	senderEmail    string
	senderPassword string
}

func NewGmailSender(email, password string) (sender *GmailSender, err error) {
	if email == "" || password == "" {
		err = fmt.Errorf("failed to authenticate gmail: email or password is empty")
		return
	}

	sender = &GmailSender{
		senderEmail:    email,
		senderPassword: password,
	}

	return
}

func (sender *GmailSender) Send(request domain.ContactRequest) error {
	auth := smtp.PlainAuth("", sender.senderEmail, sender.senderPassword, "smtp.gmail.com")

	messageBody := fmt.Sprintf(`
		User's name: %s
		Email: %s
		Telegram: %s
		Phone number: %s
		Message: %s
		`,
		request.Name, request.Email, request.Telegram, request.Phone, request.Message)

	from := sender.senderEmail
	to := "astercraft.dev@gmail.com"
	subject := "Message from AsterCraft contact form"

	// can be fuckin done with multiline string???
	messageBytes := []byte(
		"From: " + from + "\r\n" +
			"To: " + to + "\r\n" +
			"Subject: " + subject + "\r\n" +
			"Date: " + time.Now().Format("Mon, 02 Jan 2006 15:04:05 -0700") + "\r\n" +
			"MIME-Version: 1.0\r\n" +
			"Content-Type: text/plain; charset=\"UTF-8\"\r\n" +
			"\r\n" +
			messageBody + "\r\n")

	err := smtp.SendMail(
		"smtp.gmail.com:587",
		auth,
		sender.senderEmail,
		[]string{"astercraft.dev@gmail.com"},
		messageBytes)
	if err != nil {
		return fmt.Errorf("failed to send an email: %w", err)
	}

	return nil
}
