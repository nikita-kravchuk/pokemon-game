import { useContext, useState } from "react";
import { useHistory } from "react-router";
import PokemonCard from "../../../components/PokemonCard";
import { FireBaseContext } from "../../../data/firebaseContext";
import { PokemonContext } from "../../../data/pokemonContext";
import s from "./finish.module.css";

const FinishPage = () => {
  const { pokemons, PlayerTwoContext, clean } = useContext(PokemonContext);
  const firebase = useContext(FireBaseContext);
  const {selectPokemon, setSelectedPokemon} = useState({})
  const history = useHistory();

  const handleClickRestart = () => {
    clean();
    firebase.addPokemon(selectPokemon)
    history.push("/game");
  };

  const handleSelectedClick = () => {
    
  }


  return (
    <>
      <div className={s.flex}>
        {Object.values(pokemons).map((item) => {
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
        {PlayerTwoContext.playerTwoPokemons.map((item) => {
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
              handleSelectedClick={handleSelectedClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default FinishPage;
