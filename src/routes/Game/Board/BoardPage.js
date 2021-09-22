import { useContext } from "react";
import { PokemonContext } from "../../../data/pokemonContext";
import PokemonCard from "../../../components/PokemonCard";
import s from "./boardPage.module.css";

const BoardPage = () => {
  const { pokemons } = useContext(PokemonContext);
  return (
    <div className={s.root}>
      <div className={s.playerOne}>
<<<<<<< HEAD
        {Object.values(pokemons).map(({ id, name, img, type, values }) => (
=======
        {Object.values(pokemons).map(({id, name, img, type, values}) => (
>>>>>>> 691d9708192d742d9b8a3f1ff6ca88ded5f2337e
          <PokemonCard
            className={s.card}
            key={id}
            name={name}
            img={img}
            type={type}
            values={values}
            minimize
            isActive
          />
        ))}
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  );
};

export default BoardPage;
