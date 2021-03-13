import Class from '../assets/login.module.css';
import { useState, useEffect } from 'react';
import './styles/Login.css';

function Login(props) {
  const {email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    argumentError
  } = props;
  
  return (
    <div className={Class.login_page}>
      <div className="form">

        <div className={Class.form}>
          <input autoFocus required type="email" value={email} onChange={e => setEmail(e.target.value)}  placeholder="Correo" />
          <p className="errorMsg">{emailError}</p>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
          <p className="errorMsg">{passwordError}</p>
          <p className="errorMsg">{argumentError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button onClick={handleLogin}>Sign In</button>
                <p className={Class.message}>¿No registrado? <a onClick={()=> setHasAccount(!hasAccount)} href="#">Crear una cuenta</a></p>
              </>
            ): (
              <>
                <button onClick={handleSignUp}>Sign Up</button>
                <p className={Class.message}>¿Está registrado? <a onClick={()=> setHasAccount(!hasAccount)} href="#">Inicia Sesión</a></p>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
export default Login;
