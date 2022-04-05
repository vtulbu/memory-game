import { useEffect, FC } from "react";

import { GameParameters } from "@/utils/gameContext";

import * as S from "./styled";

export const Stopwatch: FC = ({}) => {
  const { stateGame, time, setTime, pauseGame } = GameParameters();

  useEffect(() => {
    let interval: any;
    if (stateGame && !pauseGame) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!stateGame) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [setTime, stateGame, pauseGame]);

  return (
    <>
      <S.Paragraphe>Time</S.Paragraphe>
      <S.Counter>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </S.Counter>
    </>
  );
};
