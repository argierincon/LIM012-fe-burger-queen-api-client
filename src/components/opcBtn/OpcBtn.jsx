import React from 'react';
import './OpcBtn.sass';

const OpcBtn = ({ text, src, alt }) => {
  return (
    <button className="btn-user-opc">
      <p>{text}</p>
      <img src={src} alt={alt} />
    </button>
  );
};

export default OpcBtn;
