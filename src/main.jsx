import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './index.css'
import App from './App.jsx'
import TestPage from './pages/TestPage/TestPage.jsx'
import Login from './pages/Login/LoginPage.jsx'
import Register from './pages/Login/RegisterPage.jsx'
import ContentPage from './pages/Content/ContentPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/content" element={<ContentPage />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
