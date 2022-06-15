import React from "react";
//import { Card } from "../Card/Cards";
import { orderBy, filterType } from "../../Redux/Actions/action";
import { useDispatch } from "react-redux";

export const Filters = ({ pokeCurrent }) => {
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    dispatch(orderBy(e.target.value, pokeCurrent));
  };
  const handleSelect2 = (e) => {
    dispatch(filterType(e.target.value, pokeCurrent));
  };

  return (
    <div>
      <select onChange={handleSelect2}>
        <option value="default">TODOS...</option>
        <optgroup label="DataBase">
          <option className="option" value="DB">
            CREADOS
          </option>
        </optgroup>
        <optgroup label="API">
          <option value="API">API</option>
        </optgroup>
      </select>
      <select onChange={handleSelect}>
        <option value="default">ORDEN...</option>
        <optgroup label="Rating">
          <option value="asc">Mayor a Menor</option>
          <option value="desc">Menor a Mayor</option>
        </optgroup>
        <optgroup label="Alphabetic">
          <option value="A-Z">A - Z</option>
          <option value="Z-A">Z - A</option>
        </optgroup>
      </select>
    </div>
  );
};
