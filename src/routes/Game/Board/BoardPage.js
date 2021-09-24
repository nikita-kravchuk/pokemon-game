import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../../data/pokemonContext";
import PokemonCard from "../../../components/PokemonCard";
import s from "./boardPage.module.css";
import { useHistory } from "react-router";
import PlayerBoard from "./component/PlayerBoard";

const counterWin = (board, playerOne, playerTwo) => {
  let playerOneCount = playerOne.length;
  let playerTwoCount = playerTwo.length;

  board.forEach((item) => {
    if (item.card.possession === "red") {
      playerTwoCount++;
    }
    if (item.card.possession === "blue") {
      playerOneCount++;
    }
  });
  return [playerOneCount, playerTwoCount];
};

const BoardPage = () => {
  const { pokemons, pokemons2 } = useContext(PokemonContext);
  const [board, setBoard] = useState([]);
  const [playerOne, setPlayerOne] = useState(() => {
    return Object.values(pokemons).map((item) => ({
      ...item,
      possession: "blue",
    }));
  });
  const [playerTwo, setPlayerTwo] = useState([]);
  const [choiseCard, setChoiseCard] = useState(null);
  const [steps, setSteps] = useState(0);
  const history = useHistory();

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(
        "https://reactmarathon-api.netlify.app/api/board"
      );
      const boardRequest = await response.json();
  
      setBoard(boardRequest.data);
      const playerTwoResponse = await fetch(
        "https://reactmarathon-api.netlify.app/api/create-player"
      );
      const playerTwoRequest = await playerTwoResponse.json();
  
      setPlayerTwo(() => {
        return playerTwoRequest.data.map((item) => ({
          ...item,
          possession: "red",
        }));
      });
    }
    fetchData();
  }, []);

  const handleClickBoard = async (position) => {
    if (choiseCard) {
      const params = {
        position,
        card: choiseCard,
        board,
      };
      const res = await fetch(
        "https://reactmarathon-api.netlify.app/api/players-turn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );

      const request = await res.json();

      if (choiseCard.player === 1) {
        setPlayerOne((prevState) =>
          prevState.filter((item) => item.id !== choiseCard.id)
        );
      }

      if (choiseCard.player === 2) {
        setPlayerTwo((prevState) =>
          prevState.filter((item) => item.id !== choiseCard.id)
        );
      }

      setBoard(request.data);

      setSteps((prevState) => {
        const count = prevState + 1;
        return count;
      });
    }
  };

  useEffect(() => {
    if (steps === 9) {
      const [count1, count2] = counterWin(board, playerOne, playerTwo);
      if (count1 > count2) {
        alert("WIN");
      } else if (count1 < count2) {
        alert("LOSE");
      } else {
        alert("DRAW");
      }
      history.push('/game/finish')
    }
  }, [board, playerOne, playerTwo, steps, history]);

  if(Object.keys(pokemons).length === 0){
    history.replace('/game')
  }

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        <PlayerBoard
          player={1}
          cards={playerOne}
          onClickCard={(card) => setChoiseCard(card)}
        />
      </div>
      <div className={s.board}>
        {board.map((item) => (
          <div
            key={item.position}
            className={s.boardPlate}
            onClick={() => !item.card && handleClickBoard(item.position)}
          >
            {item.card && <PokemonCard {...item.card} minimize isActive />}
          </div>
        ))}
      </div>
      <div className={s.playerTwo}>
        <PlayerBoard
          player={2}
          cards={playerTwo}
          onClickCard={(card) => setChoiseCard(card)}
        />
      </div>
    </div>
  );
};

export default BoardPage;
