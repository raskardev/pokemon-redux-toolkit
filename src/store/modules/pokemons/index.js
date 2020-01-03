import { createSlice } from "@reduxjs/toolkit";

import { baseURL } from "../../../config";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    page: 0,
    list: [],
    selected: null
  },
  reducers: {
    fetchPokemonsSuccess: (state, { payload }) => {
      state.list = payload;
    },
    fetchPokemonsFailed: (state, { payload }) => {
      state.error = payload;
    }
  }
});

export const {
  fetchPokemonsSuccess,
  fetchPokemonsFailed
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;

// Thunks
export const fetchPokemons = () => async (dispatch, getState) => {
  try {
    const {
      pokemons: { page }
    } = getState();
    console.log(page);
    const response = await fetch(
      `${baseURL}/pokemon?limit=20&offset=${20 * page}`
    );
    const pokemons = await response.json();
    dispatch(fetchPokemonsSuccess(pokemons.results));
  } catch (error) {
    dispatch(fetchPokemonsFailed(error));
  }
};
