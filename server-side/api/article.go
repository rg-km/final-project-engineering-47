package api

import (
	"encoding/json"
	"net/http"
	"server-side/repository"
)

type ArticleErrorResponse struct {
	Error string `json:"error"`
}

type Articles struct {
	Judul    string `json:"judul"`
	Isi      string `json:"isi"`
	Category string `json:"category"`
}

type ArticleSuccessResponse struct {
	Article []repository.Article `json:"article"`
}

type ArticleRequestResponse struct {
	ID       int64  `json:"id"`
	Judul    string `json:"judul"`
	Isi      string `json:"isi"`
	Category string `json:"category"`
}

type AddArticleSuccessResponse struct {
	Judul    string `json:"judul"`
	Isi      string `json:"isi"`
	Category string `json:"category"`
}

func (api *API) addArticle(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var article Articles
	encoder := json.NewEncoder(w)
	err := json.NewDecoder(r.Body).Decode(&article)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	userID := r.Context().Value("id").(int64)

	profil, err := api.profilRepo.FetchProfilID(userID)

	err = api.articlesRepo.InsertArticle(repository.Article{
		Judul:    article.Judul,
		Isi:      article.Isi,
		Category: article.Category,
		ProfilID: profil.ID,
	})
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(ArticleErrorResponse{Error: err.Error()})
		return
	}

	w.WriteHeader(http.StatusOK)
	encoder.Encode(AddArticleSuccessResponse{
		Judul:    article.Judul,
		Isi:      article.Isi,
		Category: article.Category,
	})
	return
}

func (api *API) articleByProfilID(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	userID := r.Context().Value("id").(int64)

	profil, err := api.profilRepo.FetchProfilID(userID)

	article, err := api.articlesRepo.FecthArticleByProfilID(profil.ID)
	encoder := json.NewEncoder(w)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(ArticleErrorResponse{Error: err.Error()})
		}
	}()

	encoder.Encode(ArticleSuccessResponse{Article: article})
}
