import React from 'react';
import Input from '../../components/Input/Input';
import MainBtn from '../../components/mainBtn/MainBtn';

import './Login.sass';

import logo from '../../assets/img/bq-api-logo.svg';
import iconEmail from '../../assets/img/icon-email.svg';
import iconPassword from '../../assets/img/icon-password.svg';

const Login = () => {
  return (
    <section className="container-login">
      <div className="login">
        <img className="bq-logo" src={logo} />
        <p>Iniciar Sesión</p>
        <form action="" className="login__inputs-box">
          <Input
            type="email"
            placeholder="Correo"
            icon={iconEmail}
            alt="icon-email"
          />
          <Input
            type="password"
            placeholder="Contraseña"
            icon={iconPassword}
            alt="icon-password"
          />
          <MainBtn type="submit" value="Ingresar" />
        </form>
      </div>
    </section>
  );
};
export default Login;
