//import { Link } from "react-router-dom";
//import styles from "./landingPage.module.css";
import React, { useEffect } from "react";
import NavBar from "../NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../Redux/Actions/action";
import { Pokedex } from "../Pokedex/Pokedes";
//import { Search } from "../SearchName/Search";
//import { Filters } from "../Filters/Filters";

export const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);
  //console.log(allPokemons);

  return (
    <div>
      <NavBar />

      <div>
        {allPokemons.length > 0 ? (
          <Pokedex allPokemons={allPokemons} />
        ) : (
          "No Found aca va el loader"
        )}
      </div>
    </div>
  );
};
