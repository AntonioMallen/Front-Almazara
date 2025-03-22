import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute.jsx'
import './Styles/css/main/index.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// IMPORT PAGES
import App from './App.jsx'
import UnautorizedPage from './pages/StatusPages/UnautorizedPage.jsx'
import PageNotFound from './pages/StatusPages/NotFoundPage.jsx'
import TestPage from './pages/TestPage/TestPage.jsx'
import Login from './pages/Login/LoginPage.jsx'
import Register from './pages/Login/RegisterPage.jsx'
import Navbar from './components/navbar/navbar.jsx'
import ContentPage from './pages/Content/ContentPage.jsx'
import ContentDetailPage from './pages/Content/ContentDetailPage.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes> 

          {/* PUBLIC ROUTES */}
          <Route path="/" element={<App />} />
          <Route path="/unauthorized" element={<UnautorizedPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/content/detail/:id" element={<ContentDetailPage />} />

          {/* PRIVATE ROUTES */}

          {/*
              ROLES
              0: Owner
              1: Admin
              2: Editor
              3: User

          */}

          <Route
            path="/content/detail/:id/edit"
            element={
              <ProtectedRoute allowedRoles={[0, 1, 2]}>
                <ContentDetailPage />
              </ProtectedRoute>
            }
          />

          {/* Catch all route - 404 */}

          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
