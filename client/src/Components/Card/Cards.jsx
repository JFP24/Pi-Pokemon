import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export const Card = ({ id, name, sprite, types, attack }) => {
  //console.log(types, " este es el types");
  return (
    <div className={styles.Card}>
      <div className={styles.name}>{name.toUpperCase()}</div>
      <div className={styles.img}>
        <img
          src={
            sprite ||
            "https://ceinaseg.com/wp-content/uploads/2021/09/videogames-controller-1920x1080-1.jpg"
          }
          width={200}
          height={130}
          alt={name}
        />
      </div>
      <div className={styles.types}>
        Types :
        {types?.map((type) => (
          <p key={type.name} value={type.name}>
            - {type.name.toUpperCase()}
          </p>
        ))}
      </div>

      <div className={styles.attack}>Attack : {attack}</div>

      <Link to={`/Details/${id}`}>
        <button className={styles.button}>Detalles</button>
      </Link>
    </div>
  );
};
