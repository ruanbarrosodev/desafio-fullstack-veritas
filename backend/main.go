package main

import (
	"fmt"
	"net/http"
)

func main() {

	loadTasks()

	http.HandleFunc("GET /tasks", getTasks)
	http.HandleFunc("POST /tasks", createTask)
	http.HandleFunc("PUT /tasks/{id}", updateTask)
	http.HandleFunc("DELETE /tasks/{id}", deleteTask)

	fmt.Println("Servidor rodando na porta 8080")

	http.ListenAndServe(":8080", enableCORS(http.DefaultServeMux))
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}