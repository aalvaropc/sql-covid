import React from 'react';
import modeloImg from '../../assets/modelo.png';

const Modelo = () => {
  return (
    <div className="max-w-full mx-auto">
      <img
        className="w-full h-auto"
        src={modeloImg}
        alt="Covid"
      />
    </div>
  );
};

export default Modelo;

