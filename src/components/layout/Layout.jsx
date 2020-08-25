import React from 'react';
import './Layout.sass';

import topShape from './../../assets/img/top-shape.svg';

import Logo from '../logo/Logo';
import UserLogged from '../userLogged/UserLogged';
import UserSettings from '../userSettings/UserSettings';
import TitleView from '../titleView/TitleView';

/* Componente stateless: (Componente funcional) No depende de tener un estado ni un ciclo de vida, solo presenta la lógica. Son un poco más utilizados hoy día porque trabajan con la parte funcional, es decir, son funciones y nos permiten enfocarnos unicamente en lo que necesitamos.*/

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Logo />
      <UserLogged userCod="Admin" />
      <TitleView title="Usuarios" />
      <img className="layout__top-shape" src={topShape} alt="top shape" />
      {children}
      {/* <UserSettings /> */}
    </section>
  );
};

export default Layout;
