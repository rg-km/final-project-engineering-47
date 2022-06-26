package api

import (
	"encoding/json"
	"net/http"
	"strconv"
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

type ListByIDSuccessRespone struct {
	Judul    string `json:"judul"`
	Isi      string `json:"isi"`
	Category string `json:"category"`
}

func (api *API) articleList(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	encoder := json.NewEncoder(w)

	response := ArticleListSuccessResponse{}
	response.Article = make([]Article, 0)

	articles, err := api.articlesRepo.FecthArticle()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(DashboardErrorResponse{Error: err.Error()})
		return
	}

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

	id, _ := strconv.ParseInt(r.URL.Query().Get("id"), 0, 64)
	article, err := api.articlesRepo.QueryArticle(id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(DashboardErrorResponse{Error: err.Error()})
		return
	}
	if err != nil {
		return
	}

	response := ListByIDSuccessRespone{}
	response.Judul = article.Judul
	response.Isi = article.Isi
	response.Category = article.Category

	encoder.Encode(response)

}
