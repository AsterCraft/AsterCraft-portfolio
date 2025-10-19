package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "7979"
	}

	emailUser := os.Getenv("EMAIL_USER")
	emailPass := os.Getenv("EMAIL_PASS")

	if emailPass == "" || emailUser == "" {
		log.Fatalf("Failed to load email credentials\n")
	}

	http.HandleFunc("/api/send-email", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello"))
	})

	log.Printf("Server starting on port :%s\n", port)
	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		panic(err)
	}
}
