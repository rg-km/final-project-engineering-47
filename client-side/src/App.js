import Main from './Pages/main';
import './App.css';
import Signup from './Pages/Signup';
import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './Components/header';
import LandingPage from './Pages/Landing/LandingPage'
import Registrasi from './Pages/registrasi';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}>
        
      </Route>
      <Route path="/register" element={<Signup />}>
      </Route>
      {/* <Route path="/" element={<Login />}>
      </Route> */}
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
