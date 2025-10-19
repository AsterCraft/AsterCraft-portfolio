package domain

import (
	"fmt"
	"strings"
)

type ContactRequest struct {
	Name     string
	Email    string
	Telegram string
	Phone    string
	Message  string
}

func NewContactRequest(name, email, telegram, phone, message string) (contactRequest ContactRequest, err error) {
	if strings.TrimSpace(name) == "" {
		err = fmt.Errorf("name is empty")
		return
	}
	if strings.TrimSpace(email) == "" {
		err = fmt.Errorf("email is empty")
		return
	}
	if !strings.Contains(email, "@") && !strings.Contains(email, ".") {
		err = fmt.Errorf("invalid email format")
		return
	}

	contactRequest = ContactRequest{
		Name:     name,
		Email:    email,
		Telegram: telegram,
		Phone:    phone,
		Message:  message,
	}

	return
}
