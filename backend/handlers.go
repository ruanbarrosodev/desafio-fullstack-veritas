package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strconv"
)

var tasks = []Task{}
var nextID = 1

func loadTasks() {
	data, err := os.ReadFile("tasks.json")

	if err != nil {
		if os.IsNotExist(err) {
			tasks = []Task{}
			nextID = 1
			return
		}

		fmt.Println("Erro ao ler tasks.json:", err)
		return
	}

	err = json.Unmarshal(data, &tasks)

	if err != nil {
		fmt.Println("Erro ao interpretar tasks.json:", err)
		return
	}

	nextID = 1

	for _, task := range tasks {
		if task.ID >= nextID {
			nextID = task.ID + 1
		}
	}
}
func saveTasks() {
	data, err := json.MarshalIndent(tasks, "", "  ")

	if err != nil {
		fmt.Println("Erro ao transformar tasks em JSON:", err)
		return
	}

	err = os.WriteFile("tasks.json", data, 0644)

	if err != nil {
		fmt.Println("Erro ao salvar tasks.json:", err)
	}
}

// GET /tasks
func getTasks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tasks)

}

// GET /tasks/{id}
func getTask(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))

	if err != nil {
		http.Error(w, "ID inválido", http.StatusBadRequest)
		return
	}

	for _, task := range tasks {
		if task.ID == id {
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(task)
			return
		}
	}

	http.Error(w, "Tarefa não encontrada", http.StatusNotFound)
}

// POST /tasks
func createTask(w http.ResponseWriter, r *http.Request) {
	var task Task

	err := json.NewDecoder(r.Body).Decode(&task)

	if err != nil {
		http.Error(w, "JSON inválido", http.StatusBadRequest)
		return
	}

	if task.Title == "" {
		http.Error(w, "Título é obrigatório", http.StatusBadRequest)
		return
	}

	if task.Status != "todo" &&
		task.Status != "progress" &&
		task.Status != "done" {
		http.Error(w, "Status inválido", http.StatusBadRequest)
		return
	}

	task.ID = nextID
	nextID++

	tasks = append(tasks, task)
	saveTasks()
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(task)
}

// PUT /tasks/{id}
func updateTask(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))

	if err != nil {
		http.Error(w, "ID inválido", http.StatusBadRequest)
		return
	}

	var updatedTask Task

	err = json.NewDecoder(r.Body).Decode(&updatedTask)

	if err != nil {
		http.Error(w, "JSON inválido", http.StatusBadRequest)
		return
	}

	if updatedTask.Title == "" {
		http.Error(w, "Título é obrigatório", http.StatusBadRequest)
		return
	}

	if updatedTask.Status != "todo" &&
		updatedTask.Status != "progress" &&
		updatedTask.Status != "done" {
		http.Error(w, "Status inválido", http.StatusBadRequest)
		return
	}

	for i, task := range tasks {
		if task.ID == id {
			updatedTask.ID = id
			tasks[i] = updatedTask
			saveTasks()

			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(updatedTask)

			return
		}
	}

	http.Error(w, "Tarefa não encontrada", http.StatusNotFound)
}

// DELETE /tasks/{id}
func deleteTask(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))

	if err != nil {
		http.Error(w, "ID inválido", http.StatusBadRequest)
		return
	}

	for i, task := range tasks {
		if task.ID == id {
			tasks = append(tasks[:i], tasks[i+1:]...)
			saveTasks()
			w.WriteHeader(http.StatusNoContent)

			return
		}
	}
	
	http.Error(w, "Tarefa não encontrada", http.StatusNotFound)
}