import React from 'react';
import './Logo.sass';

import logo from '../../assets/img/bq-api-logo.svg';

const Logo = () => {
  return <img className="layout__logo" src={logo} alt="bq logo" />;
};

export default Logo;
