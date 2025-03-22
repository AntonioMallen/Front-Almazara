import React, { createContext, useContext, useEffect, useState } from 'react';
import LoadingPage from "../pages/StatusPages/LoadingPage"


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [storageType, setStorageType] = useState('local');
  const [loading, setLoading] = useState(true); // Estado de carga

  const getStorage = () => {
    return storageType === 'local' ? localStorage : sessionStorage;
  };

  useEffect(() => {
    const checkStorage = () => {
      const localToken = localStorage.getItem('token');
      const sessionToken = sessionStorage.getItem('token');
      
      if (localToken) {
        setStorageType('local');
        setToken(localToken);
        setUser(JSON.parse(localStorage.getItem('user')));
      } else if (sessionToken) {
        setStorageType('session');
        setToken(sessionToken);
        setUser(JSON.parse(sessionStorage.getItem('user')));
      }
      setLoading(false); // Finaliza la carga
    };
    
    checkStorage();
  }, []);

  const login = (newToken, userData, rememberMe = false) => {
    const storage = rememberMe ? localStorage : sessionStorage;
    setStorageType(rememberMe ? 'local' : 'session');
    
    storage.setItem('token', newToken);
    storage.setItem('user', JSON.stringify(userData));
    
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    
    setToken(null);
    setUser(null);
    setStorageType('local');
  };

  // Esperar a que termine la carga inicial
  if (loading) {
    return <LoadingPage />; 
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, storageType }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);