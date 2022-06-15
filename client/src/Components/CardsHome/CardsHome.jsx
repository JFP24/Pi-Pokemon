import React from "react";
import { Card } from "../Card/Cards";
import styles from "./cardsHome.module.css";

export const CardsHome = ({ pokeCurrent }) => {
  console.log(pokeCurrent, " desce cardHome");

  return (
    <div className={styles.home}>
      {Array.isArray(pokeCurrent) ? (
        pokeCurrent.map((poke) => (
          <Card
            key={poke.id}
            id={poke.id}
            name={poke.name}
            sprite={poke.sprite}
            types={poke.types}
            attack={poke.attack}
          />
        ))
      ) : (
        <Card
          key={pokeCurrent.id}
          id={pokeCurrent.id}
          name={pokeCurrent.name}
          sprite={pokeCurrent.sprite}
          types={pokeCurrent.types}
          attack={pokeCurrent.attack}
        />
      )}
    </div>
  );
};
