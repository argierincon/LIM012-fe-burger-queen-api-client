import React from 'react';
import OpcBtn from '../../components/opcBtn/OpcBtn';
import MainBtn from '../../components/mainBtn/MainBtn';

import './AdminOpc.sass';

import allUsersIcon from '../../assets/img/all-users-icon.png';
import menuIcon from '../../assets/img/menu-icon.png';
import ordersIcon from '../../assets/img/orders-icon.png';
import waitersAreaIcon from '../../assets/img/waiters-area-icon.png';
import kitchenAreaIcon from '../../assets/img/kitchen-area-icon.png';

const UserOpc = ({ admin }) => {
  return (
    <>
      <section className="btn-user-opc-container">
        <section className="btn-user-opc__first-btn">
          <OpcBtn
            text="Gestionar Usuarios"
            src={allUsersIcon}
            alt="All users icon"
          />
          <OpcBtn text="Gestionar Menu" src={menuIcon} alt="Menu icon" />
          <OpcBtn text="Gestionar Órdenes" src={ordersIcon} alt="Orders icon" />
        </section>
        <section className="btn-user-opc__last-btn">
          <OpcBtn
            text="Área de mesas"
            src={waitersAreaIcon}
            alt="Waiters area icon"
          />
          <OpcBtn
            text="Área de cocina"
            src={kitchenAreaIcon}
            alt="Kitchen area icon"
          />
        </section>
      </section>
      <MainBtn type="button" value="Salir" />
    </>
  );
};

export default UserOpc;
