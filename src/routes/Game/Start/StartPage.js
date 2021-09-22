import React, { useEffect, useState, useContext } from "react";
import PokemonCard from "../../../components/PokemonCard";
import s from "./startPage.module.css";
import { FireBaseContext } from "../../../data/firebaseContext";
import { PokemonContext } from "../../../data/pokemonContext";
import { useHistory } from "react-router";

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState({});
  const history = useHistory();

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
    return () => firebase.offPokemonSoket();
  }, [firebase]);

  const handleOpenSelected = (key) => {
    const pokemon = { ...pokemons[key] };
    pokemonContext.onSelectedPokemons(key, pokemon);
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
        disabled={Object.keys(pokemonContext.pokemons).length < 5}
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
              onClickPokemon={() => {
                if (
                  Object.keys(pokemonContext.pokemons).length < 5 ||
                  selected
                ) {
                  handleOpenSelected(key);
                }
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default StartPage;
