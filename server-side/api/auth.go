package api

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

type User struct {
	Name     string `json:"name"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type LoginSuccessResponse struct {
	Token string `json:"token"`
}

type RegisterSuccessResponse struct {
	Message  string `json:"message"`
	Name     string `json:"name"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

type AuthErrorResponse struct {
	Error string `json:"error"`
}

// Jwt key yang akan dipakai untuk membuat signature
var jwtKey = []byte("secret")

// Struct claim digunakan sebagai object yang akan di encode oleh jwt
// jwt.StandardClaims ditambahkan sebagai embedded type untuk provide standart claim yang biasanya ada pada JWT
type Claims struct {
	Username string
	Role     string
	ID       int64
	jwt.StandardClaims
}

//Function Login
func (api *API) login(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	res, err := api.usersRepo.Login(user.Username, user.Password)

	w.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(w)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	userRole, _ := api.usersRepo.FetchUserRole(*res)
	userID, _ := api.usersRepo.FetchUserID(*res)

	// Deklarasi expiry time untuk token jwt
	expirationTime := time.Now().Add(5 * time.Minute)

	// Buat claim menggunakan variable yang sudah didefinisikan diatas
	claims := &Claims{
		Username: *res,
		Role:     *userRole,
		ID:       *userID,
		StandardClaims: jwt.StandardClaims{
			// expiry time menggunakan time millisecond
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Buat jwt string dari token yang sudah dibuat menggunakan JWT key yang telah dideklarasikan
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		// return internal error ketika ada kesalahan ketika pembuatan JWT string
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	// Set token string kedalam cookie response
	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expirationTime,
		Path:    "/",
	})

	//Response Success Login
	json.NewEncoder(w).Encode(LoginSuccessResponse{Token: tokenString})
}

//Function Register User
func (api *API) register(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	encoder := json.NewEncoder(w)

	//Exec User Input
	err = api.usersRepo.RegisterUser(user.Name, user.Username, user.Email, user.Password)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	//Response Register Success
	w.WriteHeader(http.StatusOK)
	encoder.Encode(RegisterSuccessResponse{
		Message:  "Register Success",
		Name:     user.Name,
		Username: user.Username,
		Email:    user.Email,
	})
}

//Function Register Camp
func (api *API) registerCamp(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	encoder := json.NewEncoder(w)

	//Exec User Input
	err = api.usersRepo.RegisterCamp(user.Name, user.Username, user.Email, user.Password)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	//Response Register Success
	w.WriteHeader(http.StatusOK)
	encoder.Encode(RegisterSuccessResponse{
		Message:  "Register Success",
		Name:     user.Name,
		Username: user.Username,
		Email:    user.Email,
	})
}

//Function Logout
func (api *API) logout(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)

	token, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			//Return Unauthorized Ketika Token Kosong
			w.WriteHeader(http.StatusUnauthorized)
			return
		}

		//Return Bad Request Ketika Field Token Tidak Ada
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	//Chek Token Value Kosong
	if token.Value == "" {
		//Maka Retrun Unauthorized
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	c := http.Cookie{
		Name:   "token",
		MaxAge: -1,
	}

	http.SetCookie(w, &c)

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Logout Success"))
}
