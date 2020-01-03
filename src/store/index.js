import { configureStore } from "@reduxjs/toolkit";

import pokemonsReducer from "./modules/pokemons";

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer
  }
});

export default store;
