import React from "react";
//import { Card } from "../Card/Cards";
import { orderBy, filterType } from "../../Redux/Actions/action";
import { useDispatch } from "react-redux";

export const Filters = () => {
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    dispatch(orderBy(e.target.value));
  };

  return (
    <div>
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
