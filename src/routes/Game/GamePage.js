import { useRouteMatch, Switch, Route } from "react-router-dom";
import StartPage from "./Start/StartPage";
import BoardPage from "./Board/BoardPage";
import FinishPage from "./Finish/FinishPage";
import { PokemonContext } from "../../data/pokemonContext";
import { useState } from "react";

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [selectedPokemons2, setSelectedPokemons2] = useState([]);
  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons(prevState => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];

        return copyState;
      }
      return {
        ...prevState,
        [key]: pokemon,
      };
    });
  };

  const cleanPokemons = () => {
    setSelectedPokemons({});
    setSelectedPokemons2([]);
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons: selectedPokemons,
        pokemons2: selectedPokemons2,
        onSelectedPokemons: handleSelectedPokemons,
        clean: cleanPokemons,
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
