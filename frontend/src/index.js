import React from 'react';
import GlobalStyle from "./styles/global";
import ReactDOM from 'react-dom/client';
import App from './App';
/* import { BrowserRouter } from 'react-router-dom'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  );
