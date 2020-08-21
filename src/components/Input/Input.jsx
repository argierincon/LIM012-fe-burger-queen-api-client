import React from 'react';
import './Input.sass';

const Input = ({ type, placeholder, icon, alt }) => {
  return (
    <div className="custom-input">
      <input type={type} placeholder={placeholder} />
      <div className="custom-input__circle">
        <img src={icon} alt={alt} />
      </div>
    </div>
  );
};

export default Input;
