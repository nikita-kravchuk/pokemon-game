import { createSlice } from "@reduxjs/toolkit";
import FirebaseClass from "../data/database";

export const slice = createSlice({
  name: "pokemons",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
    selectedPokemons: {},
    enemyPokemon: {},
    winner: null
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
      enemyPokemon: {}
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

export const getPokemonsAsync = () => async (dispatch) => {
  dispatch(fetchPokemons());
  const data = await FirebaseClass.getPokemonsOnce();
  dispatch(fetchPokemonsResolve(data));
};

export default slice.reducer;
