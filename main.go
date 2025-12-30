package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

type Settings struct {
	Address string `json:"address"`
}

func main() {
	settings := Settings{
		Address: ":5201",
	}

	const SETTINGS_FILE_NAME = "settings.static_file_server.json"
	content, err := os.ReadFile(SETTINGS_FILE_NAME)
	if err != nil {
		log.Println("Cannot read '"+SETTINGS_FILE_NAME+"':", err)

		content, err = json.Marshal(settings)
		if err != nil {
			log.Println("Cannot serialize default settings:", err)
		} else {
			err = os.WriteFile(SETTINGS_FILE_NAME, content, 0644)
			if err != nil {
				log.Println("Cannot write default settings to '"+SETTINGS_FILE_NAME, "':", err)
			}
		}
	} else {
		err = json.Unmarshal(content, &settings)
		if err != nil {
			log.Println("Cannot deseriaize settings:", err)
		} else {
			log.Println("Settings successfully deserialized.")
		}
	}

	file_server := http.FileServer(http.Dir("./dist"))
	http.Handle("/", http.StripPrefix("/", file_server))

	log.Println("Starting static file server on", settings.Address)
	err = http.ListenAndServe(settings.Address, nil)
	if err != nil {
		log.Fatal("Cannot start server:", err)
	}
}
