package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./bigdream-app.db")

	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(150) NOT NULL,
	username VARCHAR(150) NOT NULL,
	email VARCHAR(150) NOT NULL, 
	password VARCHAR(200) NOT NULL,
	role VARCHAR(150) NOT NULL,
	created_at DATETIME NOT NULL
);

	CREATE TABLE IF NOT EXISTS profil_user (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(150) NOT NULL,
	email VARCHAR(150) NOT NULL,
	gender "enum('Laki-Laki','Perempuan')" NOT NULL,
	birthdate DATE NOT NULL,
	address VARCHAR(150) NOT NULL,
	nohp INTEGER(20) NOT NULL,
	instansi VARCHAR(150) NOT NULL,
	noinduk INTEGER(20) NOT NULL,
	namawali VARCHAR(150) NOT NULL,
	gajiortu VARCHAR(150) NOT NULL,
	user_id INTEGER NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

	CREATE TABLE IF NOT EXISTS profil (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(150) NOT NULL,
	email VARCHAR(150) NOT NULL,
	address VARCHAR(150) NOT NULL,
	nohp INTEGER(20) NOT NULL,
	instansi VARCHAR(150) NOT NULL,
	user_id INTEGER NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

	CREATE TABLE IF NOT EXISTS file (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	berkas VARCHAR(150) NOT NULL,
	essay VARCHAR(230) NOT NULL,
	profiluser_id INTEGER NOT NULL,
	FOREIGN KEY (profiluser_id) REFERENCES profil_user(id)
);

	CREATE TABLE IF NOT EXISTS article (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	judul VARCHAR(150) NOT NULL,
	isi VARCHAR(150) NOT NULL,
	category "enum('Science', 'Education', 'Culture Knowledge', 'Finance', 'Tech')" NOT NULL,
	created_at DATETIME NOT NULL,
	profil_id INTEGER NOT NULL,
	FOREIGN KEY (profil_id) REFERENCES profil(id)
);
`)

	if err != nil {
		panic(err)
	}
}
