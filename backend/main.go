package main

import (
	"backend/application"
	"backend/infrastructure"
	"backend/presentation"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Printf("Failed to load .env: %v\n", err)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "7979"
	}

	emailUser := os.Getenv("EMAIL_USER")
	emailPass := os.Getenv("EMAIL_PASS")

	if emailPass == "" || emailUser == "" {
		log.Fatalf("Failed to load email credentials\n")
	}

	gmailSender, err := infrastructure.NewGmailSender(emailUser, emailPass)
	if err != nil {
		log.Fatalf("Failed to create new gmailSender: %v\n", err)
	}

	submitContactUseCase := application.NewSubmitContactUseCase(gmailSender)
	contactHandler := presentation.MakeContactHandler(submitContactUseCase)

	http.HandleFunc("/api/send-email", contactHandler)

	log.Printf("Server starting on port :%s\n", port)
	err = http.ListenAndServe(":"+port, nil)
	if err != nil {
		panic(err)
	}
}
