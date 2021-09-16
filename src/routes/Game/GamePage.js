import React, { useState } from "react";
import { useHistory } from "react-router";
import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";
import pokemons from "../../data/pokemon.json";
import s from "./gamePage.module.css";

const POKE = pokemons;

const GamePage = () => {
  const [pokemons, setPokemons] = useState(() => ([...POKE]))

  const history = useHistory();

  const handleOpenPokemon = (id) => {
    setPokemons(
      pokemons.map((item) => {
        if (item.id === id) {
          item.active = !item.active;
        }
        return item;
      })
    );
  };

  const handleClickButton = () => {
    history.push("/");
  };
  return (
    <div>
      <Layout title="Cards" colorBg="#fff000">
        <div className={s.flex}>
          {POKE.map((item) => (
            <PokemonCard
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              type={item.type}
              values={item.values}
              isActive={item.active}
              onClickPokemon={handleOpenPokemon}
            />
          ))}
        </div>
      </Layout>
      <button onClick={handleClickButton}>Return</button>
    </div>
  );
};

export default GamePage;
