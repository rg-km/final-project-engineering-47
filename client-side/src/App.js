import './App.css';
import Signup from './Pages/Signup';
import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './Components/header';
import LandingPage from './Pages/Landing/LandingPage'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard'
import DaftarProgram from './Pages/DaftarPorgram'
import Berkas from './Pages/Berkas'
import FormBeasiswa from './Pages/FormBeasiswa';
import RegisterCamp from './Pages/RegisterCamp';
import BerandaPage from './Pages/Beranda/BerandaPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}>
      </Route>
      <Route path="/register" element={<Signup />}>
      </Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/daftar-program" element={<DaftarProgram/>}></Route>
      {/* <Route path="/" element={<Login />}>
      </Route> */}
      <Route path="/berkas" element={<Berkas/>}></Route>
      <Route path="/form-beasiswa" element={<FormBeasiswa/>}></Route>
      <Route path="/register-camp" element={<RegisterCamp />}></Route>
      <Route path="/beranda" element={<BerandaPage />}></Route>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
