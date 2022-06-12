import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export const Card = ({ id, name, sprite, type }) => {
  // console.log(type, " este es el types");
  return (
    <div className={styles.Card}>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        {" "}
        <h3>{type}</h3>
      </div>
      <div className="image">
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
      <Link to={`/Details/${id}`}>
        <button>Detalles</button>
      </Link>
    </div>
  );
};
