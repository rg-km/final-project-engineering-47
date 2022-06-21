package api

import (
	"encoding/json"
	"net/http"
	"server-side/repository"
)

type FileErrorResponse struct {
	Error string `json:"error"`
}

type File struct {
	Berkas string `json:"berkas"`
	Essay  string `json:"essay"`
}

type FileSuccessResponse struct {
	File []repository.File `json:"file"`
}

type AddFileSuccessResponse struct {
	Berkas string `json:"berkas"`
	Essay  string `json:"essay"`
}

func (api *API) addFile(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var file File
	encoder := json.NewEncoder(w)
	err := json.NewDecoder(r.Body).Decode(&file)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	userID := r.Context().Value("id").(int64)

	profilUser, err := api.profilUserRepo.FetchProfilUserID(userID)

	err = api.fileRepo.InsertData(repository.File{
		Berkas:       file.Berkas,
		Essay:        file.Essay,
		ProfilUserID: profilUser.ID,
	})
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(FileErrorResponse{Error: err.Error()})
		return
	}

	w.WriteHeader(http.StatusOK)
	encoder.Encode(AddFileSuccessResponse{
		Berkas: file.Berkas,
		Essay:  file.Essay,
	})
	return
}

func (api *API) listBeasiswa(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := FileSuccessResponse{}
	response.File = make([]repository.File, 0)

	files, err := api.fileRepo.FecthUserFile()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(DashboardErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, file := range files {
		response.File = append(response.File, file)
	}

	encoder.Encode(response)
}
