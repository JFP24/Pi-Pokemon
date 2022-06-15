import React, { useEffect, useState } from "react";
import { CardsHome } from "../CardsHome/CardsHome";
import { Filters } from "../Filters/Filters";
import { Search } from "../SearchName/Search";
import { TypesPokemon } from "../TypesPokemons/types";
import { Pagination } from "../Pagination/pagination";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../Redux/Actions/action";

export const Pokedex = ({ allPokemons }) => {
  const dispatch = useDispatch();
  const [pokeCurrent, setPokeCurrent] = useState(allPokemons); //lo cargo
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(15);
  //* indices de la paginación:
  const indexOfLastCard = currentPage * cardPerPage; //1 * 15 = 15
  const indexOfFirstCard = indexOfLastCard - cardPerPage; //15-15  = 0
  let currentCards; //"cards" que se deben mostrar en la pantalla
  // en caso de que al buscar un juego en particular no encuentra ninguno
  if (typeof allGames === "string") {
    currentCards = allPokemons;
  } else {
    currentCards = allPokemons.slice(indexOfFirstCard, indexOfLastCard); //uso los indices para "fraccionar que juegos muestro"
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  useEffect(() => {
    setPokeCurrent([...allPokemons].splice(0, 12)); //copia del poketotal
  }, [allPokemons]);
  // console.log(allPokemons, "desde pokedex");

  return (
    <div>
      <Search setPokeCurrent={setPokeCurrent} />
      <TypesPokemon setPokeCurrent={setPokeCurrent} />
      <Filters pokeCurrent={pokeCurrent} />
      <Pagination
        setPokeCurrent={setPokeCurrent}
        allPokemons={allPokemons}
        cardPerPage={cardPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />

      {/* <CardsHome pokeCurrent={pokeCurrent} /> */}

      {pokeCurrent.length > 0 ||
      (pokeCurrent.name !== undefined && pokeCurrent.name !== "Error") ? (
        <CardsHome pokeCurrent={pokeCurrent} />
      ) : (
        alert("No pokemon")
      )}
    </div>
  );
};

//export default Pokedex;
