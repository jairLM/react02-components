import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';  
import CssBaseline from "@mui/material/CssBaseline";

/**
 * React.strictMode: componente de react que se utiliza en el desarollo
 * para detectar y advertir sobre posibles problemas en una aplicación
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline/>
    <App/>  
  </React.StrictMode>
);

