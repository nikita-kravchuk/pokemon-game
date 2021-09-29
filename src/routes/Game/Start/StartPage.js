import React, { useEffect, useState } from "react";
import PokemonCard from "../../../components/PokemonCard";

import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAsync,
  selectPokemonsData,
  selectPokemonsForBattle,
  handleSelectedPokemons,
} from "../../../store/pokemon";

import s from "./startPage.module.css";

const StartPage = () => {
  const pokemonsRedux = useSelector(selectPokemonsData);
  const pokemonsForBattle = useSelector(selectPokemonsForBattle);
  const dispatch = useDispatch();
  const history = useHistory();
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    dispatch(getPokemonsAsync());
  }, []);

  useEffect(() => {
    setPokemons(pokemonsRedux);
  }, [pokemonsRedux]);

  const handleOpenSelected = (key) => {
    if (!pokemons[key]?.selected && Object.keys(pokemonsForBattle).length >= 5)
      return;
    const pokemon = { ...pokemons[key] };
    dispatch(handleSelectedPokemons({ key, pokemon }));
    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }));
  };

  const handleStartGame = () => {
    history.push("/game/board");
  };

  return (
    <div className={s.buttonWrap}>
      <button
        onClick={handleStartGame}
        disabled={Object.keys(pokemonsForBattle).length < 5}
      >
        Start Game
      </button>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, selected }]) => (
            <PokemonCard
              key={key}
              className={s.card}
              id={id}
              name={name}
              img={img}
              type={type}
              values={values}
              isActive={true}
              isSelected={selected}
              onClickPokemon={() => handleOpenSelected(key)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default StartPage;
