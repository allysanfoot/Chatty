import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthenticationContextProvider } from './context/AuthenticationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthenticationContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthenticationContextProvider>
);