import React, { useEffect } from "react";
import {} from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../store/modules/pokemons";

const PokemonsList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.pokemons);
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <ul>
      {list.map(item => (
        <li>{item.name.toUpperCase()}</li>
      ))}
    </ul>
  );
};

export default PokemonsList;
