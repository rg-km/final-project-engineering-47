package api

import (
	"fmt"
	"net/http"
	"server-side/repository"
)

type API struct {
	usersRepo      repository.UserRepository
	articlesRepo   repository.ArticleRepository
	profilRepo     repository.ProfilReposistory
	profilUserRepo repository.ProfilUserReposistory
	fileRepo       repository.FileRepository
	mux            *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, articlesRepo repository.ArticleRepository, profilRepo repository.ProfilReposistory, profilUserRepo repository.ProfilUserReposistory, fileRepo repository.FileRepository) API {
	mux := http.NewServeMux()
	api := API{usersRepo, articlesRepo, profilRepo, profilUserRepo, fileRepo, mux}

	//Auth
	mux.Handle("/api/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/register", api.POST(http.HandlerFunc(api.register)))
	mux.Handle("/api/registercamp", api.POST(http.HandlerFunc(api.registerCamp)))
	mux.Handle("/api/logout", api.POST(http.HandlerFunc(api.logout)))

	//Content Not Login
	mux.Handle("/api/article", api.GET(http.HandlerFunc(api.articleList)))

	//Content User
	mux.Handle("/api/user/dashboard", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.articleList))))
	mux.Handle("/api/user/profil", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.addProfilUser))))
	mux.Handle("/api/user/profil/edit", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.editProfilUser))))
	mux.Handle("/api/user/apply", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.addFile))))
	mux.Handle("/api/article/full", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.articleListByID))))

	//Content Pengelola
	mux.Handle("/api/camp/profil", api.POST(api.AuthMiddleWare(api.CampMiddleware(http.HandlerFunc(api.addProfil)))))
	mux.Handle("/api/camp/profil/edit", api.POST(api.AuthMiddleWare(api.CampMiddleware(http.HandlerFunc(api.editProfil)))))
	mux.Handle("/api/camp/dashboard", api.GET(api.AuthMiddleWare(api.CampMiddleware(http.HandlerFunc(api.articleByProfilID)))))
	mux.Handle("/api/camp/dashboard/input", api.POST(api.AuthMiddleWare(api.CampMiddleware(http.HandlerFunc(api.addArticle)))))
	mux.Handle("/api/camp/article/update", api.POST(api.AuthMiddleWare(api.CampMiddleware(http.HandlerFunc(api.editArticle)))))
	mux.Handle("/api/camp/dashboard/beasiswa", api.GET(api.AuthMiddleWare(api.CampMiddleware(http.HandlerFunc(api.listBeasiswa)))))

	//Admin
	mux.Handle("/api/admin/dashboard", api.GET(api.AuthMiddleWare(api.AdminMiddleware(http.HandlerFunc(api.getAdminDashboard)))))
	mux.Handle("/api/admin/listUser", api.GET(api.AuthMiddleWare(api.AdminMiddleware(http.HandlerFunc(api.getAdminListUser)))))
	mux.Handle("/api/admin/listCamp", api.GET(api.AuthMiddleWare(api.AdminMiddleware(http.HandlerFunc(api.getAdminListCamp)))))
	mux.Handle("/api/admin/list", api.GET(api.AuthMiddleWare(api.AdminMiddleware(http.HandlerFunc(api.getAdminList)))))

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", api.Handler())
}
