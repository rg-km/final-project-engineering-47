package main

import (
	"database/sql"

	"server-side/api"
	"server-side/repository"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./bigdream-app.db")

	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)
	articlesRepo := repository.NewArticleRepository(db)
	profilRepo := repository.NewProfilRepository(db)
	profilUserRepo := repository.NewProfilUserRepository(db)
	fileRepo := repository.NewFileRepository(db)

	mainAPI := api.NewAPI(*usersRepo, *articlesRepo, *profilRepo, *profilUserRepo, *fileRepo)
	mainAPI.Start()
}
