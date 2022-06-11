import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_NAME,
  GET_TYPE,
  FILTER_BY,
  ORDER_BY,
} from "../Actions/types.js";

const initialState = {
  allPokemons: [],
  detailsPokemons: {},
  typesPokemons: [],
  filterPokemons: [],
  filtered: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        filtered: action.payload,
        filterPokemons: action.payload,
      };

    case GET_POKEMON_DETAIL:
      return {
        ...state,
        detailsPokemons: action.payload,
      };

    case GET_POKEMON_NAME:
      return {
        ...state,
        filterPokemons: action.payload,
      };

    case GET_TYPE:
      return {
        ...state,
        typesPokemons: action.payload,
      };

    case FILTER_BY:
      if (action.payload === "default") {
        return { ...state, filtered: state.filterPokemons };
      }

      if (action.payload === "DB") {
        return {
          ...state,
          filtered: state.filterPokemons.filter(
            (pokemon) => typeof pokemon.id === "string"
          ),
        };
      }
      if (action.payload === "API") {
        return {
          ...state,
          filtered: state.filterPokemons.filter(
            (pokemon) => typeof pokemon.id === "number"
          ),
        };
      } else {
        return {
          ...state,
          filtered: state.filterPokemons.filter((pokemon) => {
            return pokemon.types.find((types) => {
              return types === action.payload;
            });
          }),
        };
      }
    case ORDER_BY:
      if (action.payload === "A-Z") {
        return {
          ...state,
          filtered: [...state.filtered].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        };
      }

      if (action.payload === "Z-A") {
        return {
          ...state,
          filtered: [...state.filtered].sort((prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name < next.name) return 1;
            return 0;
          }),
        };
      }

      if (action.payload === "desc") {
        return {
          ...state,
          filtered: [...state.filtered].sort(
            (prev, next) => prev.attack - next.attack
          ),
        };
      }

      if (action.payload === "asc") {
        return {
          ...state,
          filtered: [...state.filtered].sort(
            (prev, next) => next.attack - prev.attack
          ),
        };
      } else {
        return { ...state, filtered: state.filterPokemons };
      }

    default:
      return state;
  }
};

export default rootReducer;
