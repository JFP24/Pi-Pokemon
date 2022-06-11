import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPokemons } from "../../Redux/Actions/action";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.principal}>
      <div>
        <Link to={"/Home"}>
          <button
            className="homeButton"
            type="button"
            onClick={() => dispatch(getAllPokemons())}
          >
            Pokemons
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
