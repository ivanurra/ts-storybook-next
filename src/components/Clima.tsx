import React from "react";

const Clima = ({ resultado }) => {

  const { name, main } = resultado;

  if (!name) return null;

  return (
    <div>
      <h3>En {name}</h3>
      <h3>la temperatura es de {(main.temp - 273.15).toFixed(2)} ºC</h3>
    </div>
  );
};

export default Clima;

// CONVERT TO CELSIUS
// 0 K − 273,15 = -273,1 °C


