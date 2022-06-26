import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';

axios.default.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
);


