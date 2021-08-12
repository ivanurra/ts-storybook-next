import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Formulario from "../components/Formulario";
import Clima from "../components/Clima";
import Error from "../components/Error";

export default function Home() {
  // STATE
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, guardarConsultar] = useState(false);

  const [resultado, guardarResultado] = useState({});

  const [error, guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  // API KEY - SIGN UP TO USE THE API: https://openweathermap.org/api
  const NEXT_PUBLIC_SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${NEXT_PUBLIC_SECRET_KEY}`;

        const respuesta = await fetch(url);

        const resultado = await respuesta.json();

        guardarResultado(resultado);
        guardarConsultar(false);

        if (resultado.cod === "404") {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    };
    consultarAPI();
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje="No se encontró la ciudad. Inténtelo de nuevo." />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <div className={styles.container}>
      <Header titulo="Weather App" />
      <Formulario
        busqueda={busqueda}
        guardarBusqueda={guardarBusqueda}
        guardarConsultar={guardarConsultar}
      />
      {componente}
    </div>
  );
}
