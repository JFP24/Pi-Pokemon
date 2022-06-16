import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsTypes, filterType } from "../../Redux/Actions/action";
import styles from "./types.module.css";

export const TypesPokemon = ({ setPokeCurrent }) => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.typesPokemons);
  const pokeFilter = useSelector((state) => state.allPokemons);
  useEffect(() => {
    dispatch(getPokemonsTypes());
  }, [dispatch]);

  const handleSelect = (e) => {
    dispatch(filterType(e.target.value));
    //console.log(e.target.value, "este es el value");
  };

  useEffect(() => {
    setPokeCurrent(pokeFilter);
  }, [pokeFilter, setPokeCurrent]); //atento cambios filter

  // console.log(types);
  return (
    <div className={styles.container}>
      <select onChange={handleSelect}>
        <optgroup label="TYPES">
          {types?.map((g) => (
            <option key={g.name} value={g.name}>
              {g.name}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};
