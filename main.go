package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("public/")))

	log.Println("ve a la url http://localhost:8080/")
	http.ListenAndServe(":8000", nil)
}
