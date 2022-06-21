package api

import (
	"encoding/json"
	"net/http"
)

type ArticleListErrorResponse struct {
	Error string `json:"error"`
}

type Article struct {
	Judul    string `json:"judul"`
	Isi      string `json:"isi"`
	Category string `json:"category"`
}

type ArticleListSuccessResponse struct {
	Article []Article `json:"article"`
}

func (api *API) articleList(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := ArticleListSuccessResponse{}
	response.Article = make([]Article, 0)

	articles, err := api.articlesRepo.FecthArticle()
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

	for _, article := range articles {
		response.Article = append(response.Article, Article{
			Judul:    article.Judul,
			Isi:      article.Isi,
			Category: article.Category,
		})
	}

	encoder.Encode(response)
}

func (api *API) articleListByID(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	var requestBody ArticleRequestResponse

	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	articles, err := api.articlesRepo.QueryArticle(requestBody.ID)
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

	encoder.Encode(articles)
}
