import React from 'react';
import './MainBtn.sass';

const MainBtn = ({ type, value }) => {
  return <input className="main-btn" type={type} value={value} />;
};

export default MainBtn;
