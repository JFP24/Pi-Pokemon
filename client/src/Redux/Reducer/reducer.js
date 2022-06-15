import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_NAME,
  GET_TYPE,
  FILTER_BY,
  ORDER_BY,
  CLEAN_DETAILS,
} from "../Actions/types.js";

const initialState = {
  allPokemons: [],
  detailsPokemons: {},
  typesPokemons: [],
  filterPokemons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
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
    case CLEAN_DETAILS:
      return {
        ...state,
        allPokemons: action.payload,
        detailsPokemons: action.payload,
      };

    case FILTER_BY:
      if (action.payload === "default") {
        return { ...state, allPokemons: state.filterPokemons };
      }

      if (action.payload === "DB") {
        return {
          ...state,
          allPokemons: state.filterPokemons.filter(
            (pokemon) => typeof pokemon.id === "string"
          ),
        };
      }
      if (action.payload === "API") {
        return {
          ...state,
          allPokemons: state.filterPokemons.filter(
            (pokemon) => typeof pokemon.id === "number"
          ),
        };
      } else {
        return {
          ...state,
          allPokemons: state.filterPokemons.filter(
            (poke) =>
              poke.types.map((type) => type.name)[0] === action.payload ||
              poke.types.map((type) => type.name)[1] === action.payload
          ),
        };
      }
    case ORDER_BY:
      if (action.payload === "A-Z") {
        return {
          ...state,
          allPokemons: [...state.allPokemons].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        };
      }

      if (action.payload === "Z-A") {
        return {
          ...state,
          allPokemons: [...state.allPokemons].sort((prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name < next.name) return 1;
            return 0;
          }),
        };
      }

      if (action.payload === "desc") {
        return {
          ...state,
          allPokemons: [...state.allPokemons].sort(
            (prev, next) => prev.attack - next.attack
          ),
        };
      }

      if (action.payload === "asc") {
        return {
          ...state,
          allPokemons: [...state.allPokemons].sort(
            (prev, next) => next.attack - prev.attack
          ),
        };
      } else {
        return { ...state, allPokemons: state.filterPokemons };
      }

    default:
      return state;
  }
};

export default rootReducer;
