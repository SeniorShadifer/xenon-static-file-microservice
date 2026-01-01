package main

import (
	"encoding/json"
	"log"
	"mime"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

type Settings struct {
	Address string `json:"address"`
}

func isPathInDir(path, dir string) (bool, error) {
	absPath, err := filepath.Abs(path)
	if err != nil {
		return false, err
	}

	absDir, err := filepath.Abs(dir)
	if err != nil {
		return false, err
	}

	absPath = filepath.Clean(absPath)
	absDir = filepath.Clean(absDir)

	absDirWithSep := absDir + string(filepath.Separator)
	absPathWithSep := absPath + string(filepath.Separator)

	return strings.HasPrefix(absPathWithSep, absDirWithSep), nil
}

func handle(w http.ResponseWriter, r *http.Request) {
	log.Println("Received HTTP request:", r.URL.Path)

	const STATIC_FILES_PATH = "./dist"

	w.Header().Set("Content-Security-Policy", "default-src 'self'; script-src 'self'")

	if strings.HasPrefix(r.URL.Path, "/app") {
		w.Header().Set("Content-Type", "text/html")
		http.ServeFile(w, r, STATIC_FILES_PATH+"/index.html")
		log.Println("Returned index file.")
	} else {
		path := STATIC_FILES_PATH + r.URL.Path

		if pathInDir, err := isPathInDir(path, STATIC_FILES_PATH); !pathInDir {
			if err == nil {
				log.Println("Warning: attempt to request file outside", STATIC_FILES_PATH)
				http.Error(w, "Access to file denied.", http.StatusForbidden)
				return
			} else {
				log.Println("Cannot check safety of HTTP request:", err)
				http.Error(w, "Unknown server filesystem error.", http.StatusInternalServerError)
				return
			}
		}

		w.Header().Set("Content-Type", mime.TypeByExtension(filepath.Ext(path)))
		http.ServeFile(w, r, path)
	}
}

func main() {
	settings := Settings{
		Address: ":5201",
	}

	const SETTINGS_FILE_NAME = "settings.static_file_server.json"
	content, err := os.ReadFile(SETTINGS_FILE_NAME)
	if err != nil {
		log.Println("Cannot read settings file:", err)

		content, err = json.Marshal(settings)
		if err != nil {
			log.Println("Cannot serialize default settings:", err)
		} else {
			err = os.WriteFile(SETTINGS_FILE_NAME, content, 0644)
			if err != nil {
				log.Println("Cannot write default settings to settings file:", err)
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

	http.HandleFunc("/", handle)

	log.Println("Starting static file server on", settings.Address)
	err = http.ListenAndServe(settings.Address, nil)
	if err != nil {
		log.Fatal("Cannot start server:", err)
	}
}
