import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthenticationContextProvider } from './context/AuthenticationContext';
import { ChatContextProvider } from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthenticationContextProvider>
    <ChatContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ChatContextProvider>
  </AuthenticationContextProvider>
);