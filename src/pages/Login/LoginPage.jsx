import React, { useEffect, useState } from 'react';
import { TextField, Checkbox, FormControlLabel } from '@mui/material';
import { FaUser, FaLock } from "react-icons/fa";
import '../../Styles/css/login/login.min.css';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';




function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === "" || password === ""){
      setError(true)
      return
    }

    //var { token, userData } = callLoginAPI()

    var { token, userData } = { token:'no auth', userData: '{"id":"1","name":"'+name+'","role":1,"email":"test@gmail.com"}' }

    if((token !== null && token !== '') && (userData !== null && userData !== ''))
    {
      const objetoJS = JSON.parse(userData);

      login(token, objetoJS, rememberMe); // Updating the context
      navigate('/'); //redirects to main page
      setError(false)
    }
    else{
      setError(true) // no user in bbdd OR ERROR validate

    }
  }

    const callLoginAPI= () =>{

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          user: name,
          password: password
        })
      };

      fetch('/auth/v1/login', requestOptions)
        .then(response => response.json())
        .then(data => {
          var { token, userData } = response.data;
          // launch okey
          return { token, userData }
        })
        .catch(error => {
          // Launch error
        });
    }
  return (
      <>
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
              <FormControlLabel  control={<Checkbox size="small" onChange={(e)=>setRememberMe(e.target.checked)}/>} label="Recuerdame" />
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
