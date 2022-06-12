import React from "react";
import { Card } from "../Card/Cards";

export const CardsHome = ({ pokeCurrent }) => {
  console.log(pokeCurrent, " desce cardHome");

  return (
    <div className="cardList">
      {Array.isArray(pokeCurrent) ? (
        pokeCurrent.map((poke) => (
          <Card
            key={poke.id}
            id={poke.id}
            name={poke.name}
            sprite={poke.sprite}
            type={poke.type}
          />
        ))
      ) : (
        <Card
          key={pokeCurrent.id}
          id={pokeCurrent.id}
          name={pokeCurrent.name}
          sprite={pokeCurrent.sprite}
          type={pokeCurrent.type}
        />
      )}
    </div>
  );
};
