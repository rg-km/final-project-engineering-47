import Main from './Pages/main';
import './App.css';
import Signup from './Pages/Signup';
import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './Components/header';
import LandingPage from './Pages/Landing/LandingPage'
import BerandaPage from './Pages/Beranda/BerandaPage'
import DashboardPage from './Admin/Dashboard/DashboardPage'
import DataPostPage from './Admin/DataPost/DataPostPage'
import Registrasi from './Pages/registrasi';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}>
      </Route>
      <Route path="/register" element={<Signup />}>
      </Route>
      <Route path="/beranda" element={<BerandaPage />}>
      </Route>
      <Route path="/Dashboard" element={<DashboardPage />}>
      </Route>
      <Route path="/dataArtikel" element={<DataPostPage />}>
      </Route>
      {/* <Route path="/" element={<Login />}>
      </Route> */}
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
