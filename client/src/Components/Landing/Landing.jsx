/* eslint-disable no-useless-constructor */
import { Link } from "react-router-dom";
import styles from "./landingPage.module.css";
import React from "react";

export const Landing = () => {
  return (
    <div className={styles.page}>
      <div className={styles.pagesdos}>
        <h1 className={styles.titulo}>VIDEO GAMES API</h1>
        <Link to="/Home">
          <button className={styles.buton}>HOME</button>
        </Link>
      </div>
    </div>
  );
};
