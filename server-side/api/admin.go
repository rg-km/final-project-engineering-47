package api

import (
	"encoding/json"
	"net/http"
	"server-side/repository"
)

type AdminErrorResponse struct {
	Error string `json:"error"`
}

type AdminResponse struct {
	Article    []repository.Article    `json:"article"`
	Profil     []repository.Profil     `json:"profil"`
	ProfilUser []repository.ProfilUser `json:"profil_user"`
	User       []repository.User       `json:"user"`
}

func (api *API) getAdminDashboard(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)

	encoder := json.NewEncoder(w)
	articles, err := api.articlesRepo.FecthArticle()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(AdminErrorResponse{Error: err.Error()})
		return
	}

	encoder.Encode(articles)

	return
}

func (api *API) getAdminListUser(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)

	encoder := json.NewEncoder(w)
	user, err := api.profilUserRepo.FecthProfilUser()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(AdminErrorResponse{Error: err.Error()})
		return
	}

	encoder.Encode(user)

	return
}

func (api *API) getAdminListCamp(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)

	encoder := json.NewEncoder(w)
	camp, err := api.profilRepo.FecthProfil()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(AdminErrorResponse{Error: err.Error()})
		return
	}

	encoder.Encode(camp)

	return
}

func (api *API) getAdminList(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)

	encoder := json.NewEncoder(w)
	users, err := api.usersRepo.FecthUser()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(AdminErrorResponse{Error: err.Error()})
		return
	}

	encoder.Encode(users)

	return
}
