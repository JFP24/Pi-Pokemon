import React, { useEffect, useState } from "react";
import { CardsHome } from "../CardsHome/CardsHome";

export const Pokedex = ({ allPokemons }) => {
  const [pokeCurrent, setPokeCurrent] = useState(allPokemons); //lo cargo

  useEffect(() => {
    setPokeCurrent([...allPokemons].splice(0, 12)); //copia del poketotal
  }, [allPokemons]);
  console.log(allPokemons, "desde pokedex");

  return (
    <div>
      <CardsHome pokeCurrent={pokeCurrent} />
    </div>
  );
};

//export default Pokedex;
