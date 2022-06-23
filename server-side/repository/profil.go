package repository

import (
	"database/sql"
	"errors"
)

type ProfilReposistory struct {
	db *sql.DB
}

func NewProfilRepository(db *sql.DB) *ProfilReposistory {
	return &ProfilReposistory{db: db}
}

func (p *ProfilReposistory) FecthProfil() ([]Profil, error) {
	var sqlStmt string
	var profils []Profil

	sqlStmt = "SELECT id, name, email, address, nohp, instansi, user_id FROM profil;"

	rows, err := p.db.Query(sqlStmt)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	var profil Profil
	for rows.Next() {
		err := rows.Scan(
			&profil.ID,
			&profil.Name,
			&profil.Email,
			&profil.Address,
			&profil.NoHp,
			&profil.Instansi,
			&profil.UserID,
		)

		if err != nil {
			return nil, errors.New("No Data")
		}

		profils = append(profils, profil)
	}

	return profils, err
}

func (p *ProfilReposistory) FetchProfilByUserID(userID int64) (Profil, error) {
	var profil Profil
	var sqlStmt string

	sqlStmt = `SELECT p.id, p.name, p.email, p.address, p.nohp, p.instansi, u.username, p.user_id
	FROM profil p
	JOIN users u ON p.user_id = u.id
	WHERE p.user_id = ?
	LIMIT 1;`

	row := p.db.QueryRow(sqlStmt, userID)
	err := row.Scan(
		&profil.ID,
		&profil.Name,
		&profil.Email,
		&profil.Address,
		&profil.NoHp,
		&profil.Instansi,
		&profil.Username,
		&profil.UserID,
	)
	if err != nil {
		return profil, err
	}

	return profil, nil
}

func (p *ProfilReposistory) InsertProfil(profil Profil) error {
	var sqlStmt string

	if profil.Name == "" || profil.Email == "" || profil.Address == "" || profil.NoHp == "" || profil.Instansi == "" {
		return errors.New("Cannot Empty")
	}

	sqlStmt = "INSERT INTO profil (name, email, address, nohp, instansi, user_id) VALUES (?, ?, ?, ?, ?, ?);"

	_, err := p.db.Exec(sqlStmt, profil.Name, profil.Email, profil.Address, profil.NoHp, profil.Instansi, profil.UserID)

	if err != nil {
		return errors.New("Data Already Exists")
	}

	return nil
}

func (p *ProfilReposistory) UpdateProfil(profil Profil) error {
	var sqlStmt string

	p.FecthProfil()

	sqlStmt = "UPDATE profil SET name = ?, email = ?, address = ?, nohp = ?, instansi = ? WHERE id = ? AND user_id = ?;"

	_, err := p.db.Exec(sqlStmt, profil.Name, profil.Email, profil.Address, profil.NoHp, profil.Instansi, profil.ID, profil.UserID)

	if err != nil {
		panic(err)
	}

	return nil
}

func (p *ProfilReposistory) FetchProfilID(userID int64) (Profil, error) {
	var sqlStmt string
	var profil Profil

	sqlStmt = "SELECT id FROM profil WHERE user_id = ?;"

	row := p.db.QueryRow(sqlStmt, userID)
	err := row.Scan(&profil.ID)

	return profil, err
}
