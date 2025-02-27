import React, { useEffect, useState } from 'react';
import { TextField, Checkbox, FormControlLabel } from '@mui/material';
import { FaUser, FaLock } from "react-icons/fa";
import Navbar from'../../components/navbar/navbar';
import '../../Styles/css/login/login.min.css';


function Login() {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === "" || password === ""){
      setError(true)
      return
    }

    setError(false)
  }

    
  return (
      <>
        <Navbar/>
        <div className='login-main-container'>
          <form 
            className='login-form'
            onSubmit={handleSubmit}
          >
            <h1>Bienvenido</h1>
            <div className="login-textFields">
              <div className='login-input'>
                <FaUser />
                <TextField 
                  required
                  id="standard-required" 
                  label="Introduce tu usuario" 
                  variant="standard" 
                  onChange={ e => setName(e.target.value)}
                />
              </div>
              <div className='login-input'>
                <FaLock />
              
                <TextField
                  required
                  id="standard-password-input"
                  label="Introduce tu contraseña"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  onChange={ e => setPassword(e.target.value)}
              />
              </div>
            </div>
            <div className='forgot-link'>
              <FormControlLabel  control={<Checkbox size="small"/>} label="Recuerdame" />
              <a href='#'>Recuperar contraseña</a>
            </div>

            <button>Iniciar sesion</button>

            <div className="register-link">
              <p>
                ¿No tienes cuenta? <a href='/register'>Crear cuenta</a>
              </p>
            </div>
          </form>

          {
            error && <p>tODOS LOS CAMPOS SON OBLIGATORIOS</p>
          }
        </div>
    </>
  );
}

export default Login;
