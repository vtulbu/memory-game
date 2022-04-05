import { createContext, Dispatch, SetStateAction, useContext } from "react";

import { arrayType } from "@/src/utils/types";

interface PropsGameParameters {
  array: arrayType[] | undefined;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  numOfMoves: number;
  setNumOfMoves: Dispatch<SetStateAction<number>>;
  stateGame: boolean;
  setStateGame: Dispatch<SetStateAction<boolean>>;
  pauseGame: boolean;
  setPauseGame: Dispatch<SetStateAction<boolean>>;
  finalGame: boolean;
  setFinalGame: Dispatch<SetStateAction<boolean>>;
  restartGame: boolean;
  setRestartGame: Dispatch<SetStateAction<boolean>>;
  scoreArr:
    | { id: number; player: string; score: number; turn: boolean }[]
    | undefined;
  setScoreArr: Dispatch<
    SetStateAction<
      { id: number; player: string; score: number; turn: boolean }[] | undefined
    >
  >;
  theme: string;
  setGameTheme: (e: string) => void;
  numberOfPlayers: string;
  setNumberOfPlayers: (e: string) => void;
  grid: string;
  setGrid: (e: string) => void;
}

export const GameParametersContext = createContext<PropsGameParameters>({
  array: [],
  time: 0,
  setTime: () => {},
  numOfMoves: 0,
  setNumOfMoves: () => {},
  stateGame: false,
  setStateGame: () => {},
  pauseGame: false,
  setPauseGame: () => {},
  finalGame: false,
  setFinalGame: () => {},
  restartGame: false,
  setRestartGame: () => {},
  scoreArr: [],
  setScoreArr: () => {},
  theme: "Numbers",
  setGameTheme: () => {},
  numberOfPlayers: "1",
  setNumberOfPlayers: () => {},
  grid: "4x4",
  setGrid: () => {},
});

export const GameParameters = () => useContext(GameParametersContext);
