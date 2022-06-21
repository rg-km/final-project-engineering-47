package api

import (
	"fmt"
	"net/http"
	"server-side/repository"
)

type API struct {
	usersRepo    repository.UserRepository
	articlesRepo repository.ArticleRepository
	profilRepo   repository.ProfilReposistory
	mux          *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, articlesRepo repository.ArticleRepository, profilRepo repository.ProfilReposistory) API {
	mux := http.NewServeMux()
	api := API{usersRepo, articlesRepo, profilRepo, mux}

	//Auth
	mux.Handle("/api/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/register", api.POST(http.HandlerFunc(api.register)))
	mux.Handle("/api/registercamp", api.POST(http.HandlerFunc(api.registerCamp)))
	mux.Handle("/api/logout", api.POST(http.HandlerFunc(api.logout)))

	//Content Not Login
	mux.Handle("/api/article", api.GET(http.HandlerFunc(api.articleList)))

	//Content User
	mux.Handle("/api/user/dashboard", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.articleList))))
	mux.Handle("/api/article?{{id}}", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.articleListByID))))

	//Content Pengelola
	mux.Handle("/api/camp/profil", api.POST(api.AuthMiddleWare(api.CampMiddleware(http.HandlerFunc(api.addProfil)))))
	mux.Handle("/api/camp/dashboard", api.GET(api.AuthMiddleWare(api.CampMiddleware(http.HandlerFunc(api.articleByProfilID)))))
	mux.Handle("/api/camp/dashboard/input", api.POST(api.AuthMiddleWare(api.CampMiddleware(http.HandlerFunc(api.addArticle)))))

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
