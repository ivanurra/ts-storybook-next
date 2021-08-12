import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Formulario from "../components/Formulario";

export default function Home() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, guardarConsultar] = useState(false);

  const {ciudad, pais} = busqueda;

  // API KEY - SIGN UP TO USE THE API: https://openweathermap.org/api
  const NEXT_PUBLIC_SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;
  
  useEffect(() => {
    const consultarAPI = async () => {
      
      if(consultar) {

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${NEXT_PUBLIC_SECRET_KEY}`;

        const respuesta = await fetch(url);
  
        const resultado = await respuesta.json();
  
        console.log(resultado);
      }
    }
    consultarAPI();
  },[consultar]);

  return (
    <div className={styles.container}>
      <Header titulo="Weather App" />
      <Formulario 
        busqueda={busqueda}
        guardarBusqueda={guardarBusqueda}
        guardarConsultar={guardarConsultar}
      />
    </div>
  );
}
