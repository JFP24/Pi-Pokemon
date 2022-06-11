import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_NAME,
  GET_TYPE,
  FILTER_BY,
  ORDER_BY,
} from "./types.js";

//conexion con el back

//Get All the pokemons
export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const allPokemos = await axios.get(`http://localhost:3001/pokemon`);
      return dispatch({
        type: GET_POKEMONS,
        payload: allPokemos.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//Get details for id
export const getPokemonId = (id) => {
  return async (dispatch) => {
    try {
      const pokemonId = await axios(`http://localhost:3001/pokemon/${id}`);
      return dispatch({
        type: GET_POKEMON_DETAIL,
        payload: pokemonId.data,
      });
    } catch (error) {
      console.log(error);
      return alert("No Existe el pokemon");
    }
  };
};

// Pokemon for name
export const getNamePokemon = (name) => {
  return async (dispatch) => {
    try {
      const namePokemon = await axios(
        `http://localhost:3001/pokemons?name=${name}`
      );
      return dispatch({
        type: GET_POKEMON_NAME,
        payload: namePokemon.data,
      });
    } catch (error) {
      console.log(error);
      return alert("No Existe el pokemon");
    }
  };
};

//Types of pokemons
export const getPokemonsTypes = () => {
  return async (dispatch) => {
    try {
      const typePokemons = await axios.get("http://localhost:3001/types");
      return dispatch({
        type: GET_TYPE,
        payload: typePokemons.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//Filter For Types
export const filterType = (type) => {
  return async (dispatch) =>
    dispatch({
      type: FILTER_BY,
      payload: type,
    });
};

export function orderBy(order) {
  return function (dispatch) {
    dispatch({
      type: ORDER_BY,
      payload: order,
    });
  };
}
