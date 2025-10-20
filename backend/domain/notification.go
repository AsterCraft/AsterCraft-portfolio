package domain

type NotificationService interface {
	Send(request ContactRequest) error
}
