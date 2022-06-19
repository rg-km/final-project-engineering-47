package api

import (
	"fmt"
	"net/http"
	"server-side/repository"
)

type API struct {
	usersRepo repository.UserRepository
	mux       *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository) API {
	mux := http.NewServeMux()
	api := API{usersRepo, mux}

	mux.Handle("/api/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/register", api.POST(http.HandlerFunc(api.register)))
	mux.Handle("/api/registercamp", api.POST(http.HandlerFunc(api.registerCamp)))
	mux.Handle("/api/logout", api.POST(http.HandlerFunc(api.logout)))

	//Admin

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", api.Handler())
}
