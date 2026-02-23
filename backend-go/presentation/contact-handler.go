package presentation

import (
	"backend/application"
	"encoding/json"
	"log"
	"net/http"
)

type ContactRequestBody struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Telegram string `json:"telegram"`
	Phone    string `json:"phone"`
	Message  string `json:"message"`
}

type ContactResponse struct {
	Message string `json:"message"`
	Error   string `json:"error,omitempty"`
}

func MakeContactHandler(useCase *application.SubmitContactUseCase) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		if r.Method != "POST" {
			http.Error(w, "Unsupported request method", http.StatusMethodNotAllowed)
			return
		}

		var body ContactRequestBody
		err := json.NewDecoder(r.Body).Decode(&body)
		if err != nil {
			log.Printf("Failed to decode json: %v\n", err)
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		err = useCase.Execute(body.Name, body.Email, body.Telegram, body.Phone, body.Message)
		if err != nil {
			log.Printf("Failed to submit contact: %v\n", err)
			http.Error(w, "Failed to submit contact", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)

		json.NewEncoder(w).Encode(ContactResponse{Message: "Contact submitted successfully"})
	}
}
