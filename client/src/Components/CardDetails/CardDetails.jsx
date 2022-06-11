import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPokemonId } from "../../Redux/Actions/action";
import { Link } from "react-router-dom";
export const CardDetails = () => {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.detailsPokemons);
  const { id } = useParams();
  console.log(pokemonDetail, "desde detalles");

  useEffect(() => {
    dispatch(getPokemonId(id));
    console.log("este es el espacio");
  }, [dispatch]);

  const { sprite, life, type, name, height, attack, defense, speed, weight } =
    pokemonDetail;

  const truncateString = (str, num) => {
    if (str.length <= num) return str;
    return str.slice(0, num) + "...";
  };

  return (
    <>
      {name ? (
        <div>
          <div>{name}</div>

          <div>
            <img
              src={
                sprite ||
                "https://ceinaseg.com/wp-content/uploads/2021/09/videogames-controller-1920x1080-1.jpg"
              }
              width={300}
              height={200}
              alt={name}
            />
          </div>
          <div>{type}</div>

          <span>
            <h5>#{truncateString(id.toString(), 4)}</h5>
          </span>
          <Link to={"/Home"}>
            <button>Regresar</button>
          </Link>
        </div>
      ) : (
        <h1>Este es el loader</h1>
      )}
    </>
  );
};
