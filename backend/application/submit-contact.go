package application

import (
	"backend/domain"
	"fmt"
)

type SubmitContactUseCase struct {
	notificationService domain.NotificationService
}

func NewSubmitContactUseCase(service domain.NotificationService) *SubmitContactUseCase {
	return &SubmitContactUseCase{
		notificationService: service,
	}
}

func (useCase *SubmitContactUseCase) Execute(name, email, telegram, phone, message string) error {
	request, err := domain.NewContactRequest(name, email, telegram, phone, message)
	if err != nil {
		return fmt.Errorf("failed to create new contact request: %w", err)
	}

	err = useCase.notificationService.Send(request)
	if err != nil {
		return fmt.Errorf("failed to send email: %w", err)
	}

	return nil
}
