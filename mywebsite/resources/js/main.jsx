import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthProvider from "./context/AuthContext.jsx";
import '../css/index.css'
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
  <App />
</AuthProvider>
  </StrictMode>
);
