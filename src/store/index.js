import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemon";
import player2pokemon from "./player2pokemon";
import userReducer from "./user";

export default configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    player2: player2pokemon,
    user: userReducer,
  },
});
