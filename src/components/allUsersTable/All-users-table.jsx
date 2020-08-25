import React from 'react';
import UsersTableRow from '../usersTableRow/UsersTableRow';
import MainBtn from '../mainBtn/MainBtn';
import './all-users-table.sass';

import iconAddUser from '../../assets/img/add-user-icon-bg.png';

const AllUsersTable = () => {
  return (
    <>
      <section className="container-all-users-table">
        <div className="items-table-head">
          <p>Img</p>
          <p>Cod. Trab.</p>
          <p>Correo</p>
          <p>Rol</p>
          <img
            className="add-users-icon"
            src={iconAddUser}
            alt="Add user icon"
          />
        </div>
        <div className="table-body">
          <UsersTableRow />
          <UsersTableRow />
          <UsersTableRow />
          <UsersTableRow />
          <UsersTableRow />
          <UsersTableRow />
          <UsersTableRow />
          <UsersTableRow />
          <UsersTableRow />
          <UsersTableRow />
          <div className="container-btn"></div>
        </div>
      </section>
      <MainBtn type="button" value="Volver" />
    </>
  );
};

export default AllUsersTable;
