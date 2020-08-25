import React from 'react';
import './UsersTableRow.sass';

import imgDefault from '../../assets/img/image 149.png';
import adminIcon from '../../assets/img/bq-admin-icon.png';
import editIcon from '../../assets/img/edit-icon.png';
import deleteIcon from '../../assets/img/delete-icon.png';

const UsersTableRow = () => {
  return (
    <div className="info-users">
      <div className="img-item">
        <img className="width100" src={imgDefault} alt="bq-api-logo" />
      </div>
      <div className="cod-trab-item">
        <p className="width100">1</p>
      </div>
      <div className="email-item">
        <p className="width100">admin@localhost</p>
      </div>
      <div className="admin-icon">
        <img className="width100" src={adminIcon} alt="BQ Admin icon" />
      </div>
      <div className="table-body-icons">
        <img className="width100" src={editIcon} alt="Edit icon" />
      </div>
      <div className="table-body-icons">
        <img className="width80" src={deleteIcon} alt="Edit icon" />
      </div>
    </div>
  );
};

export default UsersTableRow;
