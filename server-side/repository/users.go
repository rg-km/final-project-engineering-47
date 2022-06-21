package repository

import (
	"database/sql"
	"errors"
	"strings"
	"time"

	"golang.org/x/crypto/bcrypt"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) FecthUser() ([]User, error) {
	var sqlStmt string
	var users []User

	sqlStmt = "SELECT id, name, username, email, password, role, created_at FROM users;"

	rows, err := u.db.Query(sqlStmt)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	var user User
	for rows.Next() {
		err := rows.Scan(
			&user.ID,
			&user.Name,
			&user.Username,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.CreatedAt,
		)

		if err != nil {
			//panic(err)
			return nil, errors.New("No Data")
		}

		users = append(users, user)
	}

	return users, err
}

//Function Cek User Berdasarkan Username
func (u *UserRepository) QueryUser(username string) User {
	var sqlStmt string
	var user User

	sqlStmt = `SELECT id, name, username, email, password, role FROM users WHERE username = ?;`

	row := u.db.QueryRow(sqlStmt, username)
	_ = row.Scan(&user.ID, &user.Name, &user.Username, &user.Email, &user.Password, &user.Role)

	return user
}

func (u *UserRepository) FetchEmail(email string) (User, error) {
	var sqlStmt string
	var user User

	// query untuk mengambil data email user berdasarkan email
	sqlStmt = `SELECT email FROM users WHERE email = ?`

	row := u.db.QueryRow(sqlStmt, email)
	err := row.Scan(&user.Email)

	return user, err
}

//Function Register For User
func (u *UserRepository) RegisterUser(name string, username string, email string, password string) error {
	var sqlStmt string
	var user User

	//Check User
	users := u.QueryUser(username)
	emails, _ := u.FetchEmail(email)

	//Return Error Jika Panjang Username dan Password Tidak Sesuai Ketentuan
	if len(username) < 6 || len(username) > 12 {
		return errors.New("Username must be 6-12 characters")
	} else if len(password) < 6 || len(password) > 12 {
		return errors.New("Password must be 6-12 characters")
	}

	//Check password Cannot input Space
	checkPassword := strings.Contains(password, " ")

	//Check Jika Username Sudah ada di database Return Error
	if users.Username != "" || emails.Email != "" {
		return errors.New("Username or Email already exists")
	} else if checkPassword {
		return errors.New("Cannot Input Space in Password")
	} else {
		//Hashing Password dan Input Ke database
		hashedPass, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

		if len(hashedPass) != 0 {
			sqlStmt = "INSERT INTO users (name, username, email, password, role, created_at) VALUES (?, ?, ?, ?, ?, ?);"
			user.Name = name
			user.Role = "user"
			user.Username = username
			user.Email = email
			user.CreatedAt = time.Now()
			_, err := u.db.Exec(sqlStmt, user.Name, user.Username, user.Email, string(hashedPass), user.Role, user.CreatedAt)

			if err != nil {
				panic(err)
			}
		}
	}

	return nil
}

//Function Register For Camp/Pengelola Beasiswa
func (u *UserRepository) RegisterCamp(name string, username string, email string, password string) error {
	var sqlStmt string
	var user User

	//Check User
	users := u.QueryUser(username)
	emails, _ := u.FetchEmail(email)

	//Return Error Jika Panjang Username dan Password Tidak Sesuai Ketentuan
	if len(username) < 6 || len(username) > 12 {
		return errors.New("Username must be 6-12 characters")
	} else if len(password) < 6 || len(password) > 12 {
		return errors.New("Password must be 6-12 characters")
	}

	//Check password Cannot input Space
	checkPassword := strings.Contains(password, " ")

	//Check Jika Username Sudah ada di database Return Error
	if users.Username != "" || emails.Email != "" {
		return errors.New("Username or Email already exists")
	} else if checkPassword {
		return errors.New("Cannot Input Space in Password")
	} else {
		//Hashing Password dan Input Ke database
		hashedPass, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

		if len(hashedPass) != 0 {
			sqlStmt = "INSERT INTO users (name, username, email, password, role, created_at) VALUES (?, ?, ?, ?, ?, ?);"
			user.Name = name
			user.Role = "camp"
			user.Username = username
			user.Email = email
			user.CreatedAt = time.Now()
			_, err := u.db.Exec(sqlStmt, user.Name, user.Username, user.Email, string(hashedPass), user.Role, user.CreatedAt)

			if err != nil {
				return err
			}
		}
	}

	return nil
}

//Function Login For User and Camp
func (u *UserRepository) Login(username string, password string) (*string, error) {
	var sqlStmt string

	sqlStmt = "SELECT id, name, username, email, password, role FROM users WHERE username = ?;"

	row := u.db.QueryRow(sqlStmt, username)

	var user User
	err := row.Scan(&user.ID, &user.Name, &user.Username, &user.Email, &user.Password, &user.Role)

	if err != nil {
		return nil, errors.New("Incorrect")
	}

	//Compare Hash Password Database
	hashPassword := []byte(user.Password)
	pass := []byte(password)
	passHash := bcrypt.CompareHashAndPassword(hashPassword, pass)

	if passHash != nil {
		return nil, errors.New("Invalid Username and Password")
	} else {
		return &user.Username, nil
	}
}

//Function For Get User Role
func (u *UserRepository) FetchUserRole(username string) (*string, error) {
	var sqlStmt string
	var role string

	sqlStmt = "SELECT role FROM users WHERE username = ?;"

	row := u.db.QueryRow(sqlStmt, username)
	err := row.Scan(&role)

	return &role, err
}

//Function For Get User ID
func (u *UserRepository) FetchUserID(username string) (*int64, error) {
	var sqlStmt string
	var id int64

	sqlStmt = "SELECT id FROM users WHERE username = ?;"

	row := u.db.QueryRow(sqlStmt, username)
	err := row.Scan(&id)

	return &id, err
}
