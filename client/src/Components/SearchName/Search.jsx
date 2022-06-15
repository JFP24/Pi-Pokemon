import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNamePokemon } from "../../Redux/Actions/action";
//import { cleanDetails } from "../../Redux/Actions/action";

export const Search = ({ setPokeCurrent }) => {
  const dispatch = useDispatch();
  const pokeFilter = useSelector((state) => state.filterPokemons);
  //console.log(pokeFilter);
  const [input, setInput] = useState({
    buscar: "",
  });
  const handleInputChange = function (e) {
    setInput({
      [e.target.name]: e.target.value,
    });
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    if (input.buscar) {
      dispatch(getNamePokemon(input.buscar.toLowerCase(), setPokeCurrent));
      setInput({
        buscar: "",
      });
    } else {
      return alert("Colocar un busqueda");
    }
  };

  useEffect(() => {
    setPokeCurrent(pokeFilter);
  }, [pokeFilter, setPokeCurrent]);

  return (
    <div>
      <input
        name="buscar"
        placeholder="Buscá tu juego...."
        onChange={handleInputChange}
        value={input.buscar}
        autoComplete="off"
      ></input>
      <button onClick={handleOnClick}>Buscar</button>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        CargarTodos
      </button>
    </div>
  );
};
