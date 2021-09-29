import { useRouteMatch, Switch, Route } from "react-router-dom";
import StartPage from "./Start/StartPage";
import BoardPage from "./Board/BoardPage";
import FinishPage from "./Finish/FinishPage";

const GamePage = () => {
  const match = useRouteMatch();

  return (
    // <PokemonContext.Provider
    //   value={{
    //     pokemons: selectedPokemons,
    //     PlayerTwoContext: { playerTwoPokemons, setPlayerTwoPokemons },
    //     onSelectedPokemons: handleSelectedPokemons,
    //     clean: clearContext,
    //     // win: win,
    //     // setWin: setWin;
    //   }}
    // >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
  );
};

export default GamePage;
