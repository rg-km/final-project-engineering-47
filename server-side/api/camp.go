package api

import (
	"encoding/json"
	"net/http"
	"server-side/repository"
)

type ProfilErrorResponse struct {
	Error string `json:"error"`
}

type Profil struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Address  string `json:"address"`
	NoHp     string `json:"nohp"`
	Instansi string `json:"instansi"`
}

type AddProfilSuccessResponse struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Address  string `json:"address"`
	NoHp     string `json:"nohp"`
	Instansi string `json:"instansi"`
}

func (api *API) addProfil(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var profil Profil
	encoder := json.NewEncoder(w)

	err := json.NewDecoder(r.Body).Decode(&profil)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	userID := r.Context().Value("id").(int64)

	err = api.profilRepo.InsertProfil(repository.Profil{
		Name:     profil.Name,
		Email:    profil.Email,
		Address:  profil.Address,
		NoHp:     profil.NoHp,
		Instansi: profil.Instansi,
		UserID:   userID,
	})
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(ProfilErrorResponse{Error: err.Error()})
		return
	}

	w.WriteHeader(http.StatusOK)
	encoder.Encode(AddProfilSuccessResponse{
		Name:     profil.Name,
		Email:    profil.Email,
		Address:  profil.Address,
		NoHp:     profil.NoHp,
		Instansi: profil.Instansi,
	})

}
