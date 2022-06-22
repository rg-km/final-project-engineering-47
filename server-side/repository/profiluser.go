package repository

import (
	"database/sql"
	"errors"
)

type ProfilUserReposistory struct {
	db *sql.DB
}

func NewProfilUserRepository(db *sql.DB) *ProfilUserReposistory {
	return &ProfilUserReposistory{db: db}
}

func (pu *ProfilUserReposistory) FecthProfilUser() ([]ProfilUser, error) {
	var sqlStmt string
	var profilsUser []ProfilUser

	sqlStmt = "SELECT id, name, email, gender, birthdate, address, nohp, instansi, noinduk, namawali, gajiortu, user_id FROM profil_user;"

	rows, err := pu.db.Query(sqlStmt)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	var profilUser ProfilUser
	for rows.Next() {
		err := rows.Scan(
			&profilUser.ID,
			&profilUser.Name,
			&profilUser.Email,
			&profilUser.Gender,
			&profilUser.Birthdate,
			&profilUser.Address,
			&profilUser.NoHp,
			&profilUser.Instansi,
			&profilUser.NoInduk,
			&profilUser.NamaWali,
			&profilUser.GajiOrtu,
			&profilUser.UserID,
		)

		if err != nil {
			return nil, errors.New("No Data")
		}

		profilsUser = append(profilsUser, profilUser)
	}

	return profilsUser, err
}

func (pu *ProfilUserReposistory) InsertProfilUser(profilUser ProfilUser) error {
	var sqlStmt string

	sqlStmt = "INSERT INTO profil_user (name, email, gender, birthdate, address, nohp, instansi, noinduk, namawali, gajiortu, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"

	_, err := pu.db.Exec(sqlStmt, profilUser.Name, profilUser.Email, profilUser.Gender, profilUser.Birthdate, profilUser.Address, profilUser.NoHp, profilUser.Instansi, profilUser.NoInduk, profilUser.NamaWali, profilUser.GajiOrtu, profilUser.UserID)

	if err != nil {
		panic(err)
	}

	return nil
}

func (pu *ProfilUserReposistory) UpdateProfilUser(profilUser ProfilUser) error {
	var sqlStmt string

	pu.FecthProfilUser()

	sqlStmt = "UPDATE profil_user SET name = ?, email = ?, gender = ?, birthdate = ?, address = ?, nohp = ?, instansi = ?, noinduk = ?, namawali = ?, gajiortu = ? WHERE id = ?;"

	_, err := pu.db.Exec(sqlStmt, profilUser.ID, profilUser.Name, profilUser.Email, profilUser.Gender, profilUser.Birthdate, profilUser.Address, profilUser.NoHp, profilUser.Instansi, profilUser.NoInduk, profilUser.NamaWali, profilUser.GajiOrtu)

	if err != nil {
		panic(err)
	}

	return nil
}

func (pu *ProfilUserReposistory) FetchProfilUserID(userID int64) (ProfilUser, error) {
	var sqlStmt string
	var profilUser ProfilUser

	sqlStmt = "SELECT id FROM profil_user WHERE user_id = ?;"

	row := pu.db.QueryRow(sqlStmt, userID)
	err := row.Scan(&profilUser.ID)

	return profilUser, err
}
