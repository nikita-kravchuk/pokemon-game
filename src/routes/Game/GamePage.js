import React, { useEffect, useState } from "react";


import PokemonCard from "../../components/PokemonCard";
import POKS from '../../data/pokemon.json'
import database from "../../data/database";
import s from "./gamePage.module.css";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref("pokemons").on("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  

  const handleOpenPokemon = (id, isActive, objID) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = true;
        }

        acc[item[0]] = pokemon;
        return acc;
      }, {});
    });
    database.ref('pokemons/'+ objID).set({
          ...pokemons[objID],
          active: !isActive,
    });
  };

  const handlePushNew = () => {
    const data = POKS;
    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(data[0]);
  };

  return (
    <div className={s.flex}>
      <button onClick={handlePushNew}>Add New Pokemon</button>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, active }]) => (
            <PokemonCard
              key={id}
              objID={key}
              id={id}
              name={name}
              img={img}
              type={type}
              values={values}
              isActive={active}
              onClickPokemon={handleOpenPokemon}
            />
          )
        )}
      </div>
    </div>
  );
};

export default GamePage;
