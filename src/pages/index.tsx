import styles from "../styles/Home.module.css";
import React from "react";
import Header from "../components/Header";
import Formulario from "../components/Formulario";

export default function Home() {

  return (
    <div className={styles.container}>
      <Header titulo="Weather App" />
      <Formulario />
    </div>
  );
}
