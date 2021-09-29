import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import PokemonCard from "../../../components/PokemonCard";
import FirebaseClass from "../../../data/database";

import { selectSecPokemonsData } from "../../../store/player2pokemon";
import { clearPokemons, selectPokemonsData } from "../../../store/pokemon";
import s from "./finish.module.css";

const FinishPage = () => {
  const player1Poks = useSelector(selectPokemonsData);
  const player2Poks = useSelector(selectSecPokemonsData);
  const dispatch = useDispatch();
  const { selectPokemon, setSelectedPokemon } = useState({});
  const history = useHistory();

  if (Object.keys(player1Poks).length === 0 && Object.keys(player2Poks).length === 0  ) {
    history.replace("/game");
  }

  const handleClickRestart = () => {
    dispatch(clearPokemons());
    FirebaseClass.addPokemon(selectPokemon);
    history.push("/game");
  };

  const handleSelectedClick = (key) => {
    setSelectedPokemon(prevState => {
      return prevState.reduce((acc, item) => {
        item.isSelected = false;
        if(item.id === key){
          setSelectedPokemon(item);
          item.isSelected = true;
        }
        acc.push(item);
        return acc;
      }, [])
    })
  };

  return (
    <>
      <div className={s.flex}>
        {Object.values(player1Poks).map((item) => {
          return (
            <PokemonCard
              key={item.key}
              className={s.card}
              id={item.id}
              name={item.name}
              img={item.img}
              type={item.type}
              values={item.values}
              isActive
              minimize
            />
          );
        })}
      </div>
      <div className={s.buttonWrap}>
        <button onClick={handleClickRestart}>End Game</button>
      </div>
      <div className={s.flex}>
        {Object.values(player2Poks.data).map((item) => {
          return (
            <PokemonCard
              key={item.key}
              className={s.card}
              id={item.id}
              name={item.name}
              img={item.img}
              type={item.type}
              values={item.values}
              isActive
              minimize
              isSelected={item.selected}
              onClickPokemon={handleSelectedClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default FinishPage;
