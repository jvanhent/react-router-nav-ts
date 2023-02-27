import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css"
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter basename="/react-router-nav-ts">
          <App />
      </BrowserRouter>

  </React.StrictMode>
);
