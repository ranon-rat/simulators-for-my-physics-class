package main

import (
	"log"
	"net/http"
)

func main() {
	//serve static content
	http.Handle("/", http.FileServer(http.Dir(".")))
	log.Println("ve a la url http://localhost:8080/")

	http.ListenAndServe(":8080", nil)
}
