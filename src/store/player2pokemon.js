import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "player2",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
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
      data: [],
      error: action.payload,
    }),
  },
});

export const {
  fetchPokemons,
  fetchPokemonsResolve,
  fetchPokemonsReject,
} = slice.actions;

export const selectSecPokemonsData = (state) => state.player2.data;

export const getSecPokemons = () => async (dispatch) => {
  dispatch(fetchPokemons());
  const data = await fetch(
    "https://reactmarathon-api.netlify.app/api/create-player"
  );
  const playerTwoRequest = await data.json();
  dispatch(fetchPokemonsResolve(playerTwoRequest));
};

export default slice.reducer;
