import React from 'react';
import './userLogged.sass';

import arm from '../../assets/img/user-logged.png';

const UserLogged = ({ userCod }) => {
  return (
    <>
      <img className="layout__user-logged" src={arm} alt="user logged" />
      <span>{userCod}</span>
    </>
  );
};

export default UserLogged;
