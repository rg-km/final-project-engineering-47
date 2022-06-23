package repository_test

import (
	"database/sql"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	_ "github.com/mattn/go-sqlite3"

	"server-side/repository"
)

var _ = Describe("Repository Test", func() {
	var db *sql.DB
	var err error
	var usersRepo *repository.UserRepository

	BeforeEach(func() {
		// Setup
		db, err = sql.Open("sqlite3", "./bigdream-app.db")
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
			created_at DATETIME NOT NULL,
			CONSTRAINT UC_users UNIQUE (username, email)
		);

		
		INSERT INTO users(name, username, email, password, role, created_at) VALUES
			('abc', 'aditira', 'abc@gmail.com', '$2a$10$oth77hKkP4VBHjOjZy1QteoT52G4POLvV.T0teKSI/7uSh55n6Kxi', 'admin', '2022-01-05 17:10:16'),
			('abcd','dina', 'abcd@gmail.com', '$2a$10$2Qwv5tE672Ukpu0idh0XxuT/prIoYQa3tikLo2UXcJo8GH5Aizbti', 'user', '2022-02-05 17:05:16'),
			('abce','dito', 'abce@gmail.com', '$2a$10$DQp6JNtDDP8dQS3xSjFu5ufYckFo8hDzcYHaItRcCglH8P.glco2q', 'camp', '2022-03-05 17:05:16');`)

		if err != nil {
			panic(err)
		}

		usersRepo = repository.NewUserRepository(db)
	})

	AfterEach(func() {
		// Teardown
		db, err := sql.Open("sqlite3", "./bigdream-app.db")
		if err != nil {
			panic(err)
		}

		_, err = db.Exec(`
		DROP TABLE IF EXISTS users;`)

		if err != nil {
			panic(err)
		}
	})

	Describe("Select All Users", func() {
		When("get all user list from database", func() {
			It("should return all user list", func() {
				userList, err := usersRepo.FecthUser()
				Expect(err).ToNot(HaveOccurred())

				Expect(userList[0].Username).To(Equal("aditira"))
				Expect(userList[0].Password).To(Equal("$2a$10$oth77hKkP4VBHjOjZy1QteoT52G4POLvV.T0teKSI/7uSh55n6Kxi"))
				Expect(userList[1].Username).To(Equal("dina"))
				Expect(userList[1].Password).To(Equal("$2a$10$2Qwv5tE672Ukpu0idh0XxuT/prIoYQa3tikLo2UXcJo8GH5Aizbti"))
				Expect(userList[2].Username).To(Equal("dito"))
				Expect(userList[2].Password).To(Equal("$2a$10$DQp6JNtDDP8dQS3xSjFu5ufYckFo8hDzcYHaItRcCglH8P.glco2q"))
			})
		})
	})

	Describe("Login", func() {
		When("username and password are correct", func() {
			It("accepts the login", func() {
				res, err := usersRepo.Login("aditira", "1234")
				Expect(err).ToNot(HaveOccurred())
				Expect(*res).To(Equal("aditira"))
			})
		})
		When("username is correct but password is incorrect", func() {
			It("rejects the login", func() {
				_, err := usersRepo.Login("aditira", "4567")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Invalid Username or Password"))
			})
		})
		When("both username and password is incorrect", func() {
			It("rejects the login", func() {
				_, err := usersRepo.Login("juno", "23885")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Login Failed!"))
			})
		})
	})
})
