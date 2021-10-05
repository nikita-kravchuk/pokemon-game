import { createSlice } from "@reduxjs/toolkit";

import { selectLocalID } from "./user";

export const slice = createSlice({
  name: "pokemons",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
    selectedPokemons: {},
    enemyPokemon: {},
    winner: null,
  },
  reducers: {
    fetchPokemons: (state) => ({
      ...state,
      isLoading: true,
    }),
    fetchPokemonsResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
    fetchPokemonsReject: (state, action) => ({
      ...state,
      isLoading: false,
      data: {},
      error: action.payload,
    }),
    handleSelectedPokemons: (state, { payload: { key, pokemon } }) => {
      const newPokemons = { ...state.selectedPokemons };
      if (newPokemons[key]) {
        delete newPokemons[key];
        return { ...state, selectedPokemons: newPokemons };
      }

      newPokemons[key] = pokemon;
      return { ...state, selectedPokemons: newPokemons };
    },

    handleSelectedPokemonEnemy: (state, action) => {
      return {
        state,
        enemyPokemon: { ...action.payload },
      };
    },

    clearPokemons: (state) => ({
      ...state,
      selectedPokemons: {},
      enemyPokemon: {},
    }),
  },
});

export const {
  fetchPokemons,
  fetchPokemonsResolve,
  fetchPokemonsReject,
  handleSelectedPokemons,
  handleSelectedPokemonEnemy,
  clearPokemons,
} = slice.actions;

export const selectPokemonsLoading = (state) => state.pokemons.isLoading;
export const selectPokemonsData = (state) => state.pokemons.data;
export const selectPokemonsForBattle = (state) =>
  state.pokemons.selectedPokemons;
export const selectEnenemyPokemon = (state) => state.pokemons.enemyPokemon;

export const getPokemonsAsync = () => async (dispatch, getState) => {
  const localId = selectLocalID(getState());
  dispatch(fetchPokemons());
  const data = await fetch(
    `https://pokemon-game-1d880-default-rtdb.europe-west1.firebasedatabase.app/${localId}/pokemons.json`
  ).then((res) => res.json());
  dispatch(fetchPokemonsResolve(data));
};

export default slice.reducer;
