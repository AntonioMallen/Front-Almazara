import React, { useEffect, useState } from 'react';
import { TextField, Checkbox, FormControlLabel } from '@mui/material';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../../Styles/css/login/register.min.css';
import Navbar from'../../components/navbar/navbar';


function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === "" || email === "" || password === ""){
      setError(true)
      return
    }

    setError(false)
  }

    
  return (
    <>
      <div className='register-main-container'>
          <form 
            className='register-form'
            onSubmit={handleSubmit}
          >
            <h1>Registro</h1>
            <div className="register-textFields">
              <div className='register-input'>
                <MdEmail />
                <TextField 
                  required
                  id="standard-required" 
                  label="Introduce tu email" 
                  type="email"
                  variant="standard" 
                  onChange={ e => setEmail(e.target.value)}
                />
              </div>
              <div className='register-input'>
                <FaUser />
                <TextField 
                  required
                  id="standard-required" 
                  label="Introduce tu usuario" 
                  variant="standard" 
                  onChange={ e => setName(e.target.value)}
                />
              </div>
              <div className='register-input'>
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

            <button>Crear cuenta</button>

            <div className="login-link">
              <p>
                ¿Ya tienes cuenta? <a href='/login'>Iniciar sesion</a>
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

export default Register;
