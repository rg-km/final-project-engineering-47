package repository

import (
	"database/sql"
	"errors"
	"time"
)

type ArticleRepository struct {
	db *sql.DB
}

func NewArticleRepository(db *sql.DB) *ArticleRepository {
	return &ArticleRepository{db: db}
}

func (a *ArticleRepository) FecthArticle() ([]Article, error) {
	var sqlStmt string
	var articles []Article

	// query untuk mengambil data article
	sqlStmt = `SELECT id, judul, isi, category, profil_id FROM article;`

	rows, err := a.db.Query(sqlStmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var article Article
	for rows.Next() {
		err := rows.Scan(
			&article.ID,
			&article.Judul,
			&article.Isi,
			&article.Category,
			&article.ProfilID,
		)

		if err != nil {
			return nil, errors.New("No Available Article")
		}

		articles = append(articles, article)
	}

	return articles, err
}

func (a *ArticleRepository) QueryArticle(id int64) (Article, error) {
	var sqlStmt string
	var article Article

	sqlStmt = "SELECT judul, isi, category, created_at, profil_id FROM article WHERE id = ?;"

	row := a.db.QueryRow(sqlStmt, id)
	article.ID = id
	err := row.Scan(&article.Judul, &article.Isi, &article.Category, &article.CreatedAt, &article.ProfilID)

	if err != nil {
		panic(err)
	}

	return article, nil
}

func (a *ArticleRepository) FecthArticleByJudul(judul string) (Article, error) {
	var sqlStmt string
	var article Article

	sqlStmt = "SELECT id, isi, category, profil_id FROM article WHERE judul = ?;"

	row := a.db.QueryRow(sqlStmt, judul)
	article.Judul = judul
	err := row.Scan(&article.ID, &article.Isi, &article.Category, &article.ProfilID)

	if err != nil {
		panic(err)
	}

	return article, nil
}

func (a *ArticleRepository) FecthArticleByProfilID(profilID int64) ([]Article, error) {
	var sqlStmt string
	var articles []Article

	sqlStmt = "SELECT id, judul, isi, category, created_at, profil_id FROM article WHERE profil_id = ?;"

	rows, err := a.db.Query(sqlStmt, profilID)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	var article Article
	for rows.Next() {
		err = rows.Scan(&article.ID, &article.Judul, &article.Isi, &article.Category, &article.CreatedAt, &article.ProfilID)
		if err != nil {
			panic(err)
		}

		articles = append(articles, article)
	}

	return articles, nil
}

func (a *ArticleRepository) InsertArticle(article Article) error {
	var sqlStmt string

	sqlStmt = "INSERT INTO article (judul, isi, category, created_at ,profil_id) VALUES (?, ?, ?, ?, ?);"

	_, err := a.db.Exec(sqlStmt, article.Judul, article.Isi, article.Category, time.Now(), article.ProfilID)

	if err != nil {
		panic(err)
	}

	return nil
}

func (a *ArticleRepository) UpdateArticle(article Article) error {
	var sqlStmt string

	a.QueryArticle(article.ID)

	sqlStmt = "UPDATE article SET judul = ?, isi = ? WHERE id = ?;"

	_, err := a.db.Exec(sqlStmt, article.ID)

	if err != nil {
		panic(err)
	}

	return nil
}

func (a *ArticleRepository) DeleteArticle() error {
	var sqlStmt string

	sqlStmt = "DELETE FROM article WHERE id = ?"

	_, err := a.db.Exec(sqlStmt)

	if err != nil {
		panic(err)
	}

	return nil
}
