import React from "react";
import './formulario.css';

interface FormularioProps {
  labelCity: string;
  labelCountry: string;
}

export const Formulario = ({
  labelCity,
  labelCountry
  }: FormularioProps) => {
  return (
    <form>
      <div>
        <label htmlFor="ciudad">{labelCity}:</label>
        <input type="text" name="ciudad" id="ciudad" />
      </div>

      <div>
        <label htmlFor="pais">{labelCountry}:</label>
        <select name="pais" id="pais">
          <option value="">--Seleccione un país--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
      </div>
    </form>
  );
};
