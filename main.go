package main

import (
	"log"
	"net/http"
)

func main() {
	file_server := http.FileServer(http.Dir("./dist"))
	http.Handle("/", http.StripPrefix("/", file_server))

	log.Println("Starting static file server microservice on :5201")
	err := http.ListenAndServe(":5201", nil)
	if err != nil {
		log.Fatal("Cannot start server:", err)
	}
}
