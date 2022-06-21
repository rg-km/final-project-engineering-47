package repository

import (
	"database/sql"
	"errors"
)

type FileRepository struct {
	db *sql.DB
}

func NewFileRepository(db *sql.DB) *FileRepository {
	return &FileRepository{db: db}
}

func (f *FileRepository) QueryFile() ([]File, error) {
	var sqlStmt string
	var files []File

	// query untuk mengambil data user
	sqlStmt = `SELECT id, berkas, essay, profiluser_id FROM file;`

	rows, err := f.db.Query(sqlStmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var file File
	for rows.Next() {
		err := rows.Scan(
			&file.ID,
			&file.Berkas,
			&file.Essay,
			&file.ProfilUserID,
		)

		if err != nil {
			return nil, errors.New("No Available Data")
		}

		files = append(files, file)
	}

	return files, err
}

func (f *FileRepository) FecthUserFile() ([]File, error) {
	var sqlStmt string
	var files []File

	// query untuk mengambil data user
	sqlStmt = `SELECT 
		f.id, pu.name, pu.email, pu.gender, pu.birthdate, pu.address, pu.nohp, pu.instansi, pu.noinduk, pu.namawali, pu.gajiortu, f.berkas, f.essay, f.profiluser_id 
		FROM file f
		JOIN profil_user pu ON f.profiluser_id = pu.id;`

	rows, err := f.db.Query(sqlStmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var file File
	for rows.Next() {
		err := rows.Scan(
			&file.ID,
			&file.Name,
			&file.Email,
			&file.Gender,
			&file.Birthdate,
			&file.Address,
			&file.NoHp,
			&file.Instansi,
			&file.NoInduk,
			&file.NamaWali,
			&file.GajiOrtu,
			&file.Berkas,
			&file.Essay,
			&file.ProfilUserID,
		)

		if err != nil {
			return nil, errors.New("No Available Data")
		}

		files = append(files, file)
	}

	return files, err
}

func (f *FileRepository) InsertData(file File) error {
	var sqlStmt string

	sqlStmt = "INSERT INTO file (berkas, essay, profiluser_id) VALUES (?, ?, ?);"

	_, err := f.db.Exec(sqlStmt, file.Berkas, file.Essay, file.ProfilUserID)

	if err != nil {
		panic(err)
	}

	return nil
}
