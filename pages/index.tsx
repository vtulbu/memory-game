import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

import { GameParametersContext } from "@/src/utils/gameContext";

import Layout from "@/components/Layout";
import MenuScreen from "@/components/MenuScreen";
import BoardScreen from "@/components/BoardScreen";

import { numbers, icons } from "@/src/arrayOfData";
import { arrayShuffle, setArray } from "@/utils/arrayShuffle";

const Home: NextPage = () => {
  const [time, setTime] = useState(0);
  const [numOfMoves, setNumOfMoves] = useState(0);
  const [stateGame, setStateGame] = useState(false);
  const [pauseGame, setPauseGame] = useState(false);
  const [finalGame, setFinalGame] = useState(false);
  const [restartGame, setRestartGame] = useState(false);
  const [scoreArr, setScoreArr] =
    useState<{ id: number; player: string; score: number; turn: boolean }[]>();

  const [theme, setTheme] = useState("Numbers");
  const [numberOfPlayers, setNumberOfPlayers] = useState("1");
  const [grid, setGrid] = useState("4x4");

  let gameArr = useRef<
    {
      id: number;
      element: number | JSX.Element;
      matched: boolean;
      clicked: boolean;
    }[]
  >();

  useEffect(() => {
    let playersArr = [];

    for (let i = 0; i < Number(numberOfPlayers); i++) {
      playersArr.push({
        id: i,
        player: `Player ${i + 1}`,
        score: 0,
        turn: i === 0 ? true : false,
      });
    }

    !finalGame && setScoreArr(playersArr);

    gameArr.current = arrayShuffle(setArray(theme, grid, numbers, icons)).map(
      (e, i) => {
        return {
          id: i + 1,
          element: e.element,
          matched: false,
          clicked: false,
        };
      }
    );

    restartGame && setNumOfMoves(0);
    restartGame && setTime(0);
    finalGame && setPauseGame(true);
    setRestartGame(false);
  }, [stateGame, restartGame, grid, theme, numberOfPlayers, finalGame]);

  return (
    <Layout stategame={stateGame}>
      <GameParametersContext.Provider
        value={{
          array: gameArr.current,
          time: time,
          setTime: setTime,
          numOfMoves: numOfMoves,
          setNumOfMoves: setNumOfMoves,
          stateGame: stateGame,
          setStateGame: setStateGame,
          pauseGame: pauseGame,
          setPauseGame: setPauseGame,
          finalGame: finalGame,
          setFinalGame: setFinalGame,
          restartGame: restartGame,
          setRestartGame: setRestartGame,
          scoreArr: scoreArr,
          setScoreArr: setScoreArr,
          theme,
          setGameTheme: (e) => setTheme(e),
          numberOfPlayers,
          setNumberOfPlayers: (e) => setNumberOfPlayers(e),
          grid: grid,
          setGrid: (e) => setGrid(e),
        }}
      >
        {!stateGame ? <MenuScreen /> : <BoardScreen />}
      </GameParametersContext.Provider>
    </Layout>
  );
};

export default Home;
