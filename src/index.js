import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greeting from './components/greeting';//importamos una funcion que se exporto como default
/**
 * React.strictMode: componente de react que se utiliza en el desarollo
 * para detectar y advertir sobre posibles problemas en una aplicación
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>  
  </React.StrictMode>
);

