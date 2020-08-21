import React from 'react';
import './Layout.sass';

import topShape from './../../assets/img/top-shape.svg'

/* Componente stateless: (Componente funcional) No depende de tener un estado ni un ciclo de vida, solo presenta la lógica. Son un poco más utilizados hoy día porque trabajan con la parte funcional, es decir, son funciones y nos permiten enfocarnos unicamente en lo que necesitamos.*/

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <img className="layout__top-shape" src={topShape} alt="top shape"/>
      {children}
    </section>
  );
};

export default Layout;
