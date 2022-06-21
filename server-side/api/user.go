package api

import (
	"encoding/json"
	"net/http"
	"server-side/repository"
)

type ProfilUserErrorResponse struct {
	Error string `json:"error"`
}

type ProfilUser struct {
	Name      string `json:"name"`
	Email     string `json:"email"`
	Gender    string `json:"gender"`
	Birthdate string `json:"birthdate"`
	Address   string `json:"address"`
	NoHp      string `json:"nohp"`
	Instansi  string `json:"instansi"`
	NoInduk   string `json:"noinduk"`
	NamaWali  string `json:"namawali"`
	GajiOrtu  string `json:"gajiortu"`
}

type AddProfilUserSuccessResponse struct {
	Name      string `json:"name"`
	Email     string `json:"email"`
	Gender    string `json:"gender"`
	Birthdate string `json:"birthdate"`
	Address   string `json:"address"`
	NoHp      string `json:"nohp"`
	Instansi  string `json:"instansi"`
	NoInduk   string `json:"noinduk"`
	NamaWali  string `json:"namawali"`
	GajiOrtu  string `json:"gajiortu"`
}

func (api *API) addProfilUser(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var profilUser ProfilUser
	encoder := json.NewEncoder(w)

	err := json.NewDecoder(r.Body).Decode(&profilUser)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	userID := r.Context().Value("id").(int64)

	err = api.profilUserRepo.InsertProfilUser(repository.ProfilUser{
		Name:      profilUser.Name,
		Email:     profilUser.Email,
		Gender:    profilUser.Gender,
		Birthdate: profilUser.Birthdate,
		Address:   profilUser.Address,
		NoHp:      profilUser.NoHp,
		Instansi:  profilUser.Instansi,
		NoInduk:   profilUser.NoInduk,
		NamaWali:  profilUser.NamaWali,
		GajiOrtu:  profilUser.GajiOrtu,
		UserID:    userID,
	})
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(ProfilUserErrorResponse{Error: err.Error()})
		return
	}

	w.WriteHeader(http.StatusOK)
	encoder.Encode(AddProfilUserSuccessResponse{
		Name:      profilUser.Name,
		Email:     profilUser.Email,
		Gender:    profilUser.Gender,
		Birthdate: profilUser.Birthdate,
		Address:   profilUser.Address,
		NoHp:      profilUser.NoHp,
		Instansi:  profilUser.Instansi,
		NoInduk:   profilUser.NoInduk,
		NamaWali:  profilUser.NamaWali,
		GajiOrtu:  profilUser.GajiOrtu,
	})

}

func (api *API) editProfilUser(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var profilUser ProfilUser
	encoder := json.NewEncoder(w)

	err := json.NewDecoder(r.Body).Decode(&profilUser)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	userID := r.Context().Value("id").(int64)

	err = api.profilUserRepo.UpdateProfilUser(repository.ProfilUser{
		Name:      profilUser.Name,
		Email:     profilUser.Email,
		Gender:    profilUser.Gender,
		Birthdate: profilUser.Birthdate,
		Address:   profilUser.Address,
		NoHp:      profilUser.NoHp,
		Instansi:  profilUser.Instansi,
		NoInduk:   profilUser.NoInduk,
		NamaWali:  profilUser.NamaWali,
		GajiOrtu:  profilUser.GajiOrtu,
		UserID:    userID,
	})

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(ProfilUserErrorResponse{Error: err.Error()})
		return
	}

	w.WriteHeader(http.StatusOK)
	encoder.Encode(AddProfilUserSuccessResponse{
		Name:      profilUser.Name,
		Email:     profilUser.Email,
		Gender:    profilUser.Gender,
		Birthdate: profilUser.Birthdate,
		Address:   profilUser.Address,
		NoHp:      profilUser.NoHp,
		Instansi:  profilUser.Instansi,
		NoInduk:   profilUser.NoInduk,
		NamaWali:  profilUser.NamaWali,
		GajiOrtu:  profilUser.GajiOrtu,
	})
}
