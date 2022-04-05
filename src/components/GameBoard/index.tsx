import { FC, useEffect, useState } from "react";

import { GameParameters } from "@/utils/gameContext";

import PuzzleButton from "../PuzzleButton";
import * as S from "./styled";

const GameBoard: FC = () => {
  const {
    array,
    numOfMoves,
    setNumOfMoves,
    setFinalGame,
    setScoreArr,
    numberOfPlayers,
    grid,
  } = GameParameters();

  const [valuesArray, setValuesArray] = useState<
    {
      id: number;
      element: number | JSX.Element;
      matched: boolean;
      clicked: boolean;
    }[]
  >(array!);
  const [firstChoice, setFirstChoice] = useState<{
    value: number | JSX.Element;
    id: number;
  } | null>(null);
  const [secondChoice, setSecondChoice] = useState<{
    value: number | JSX.Element;
    id: number;
  } | null>(null);

  useEffect(() => {
    setValuesArray(array!);
  }, [array]);

  const controlChoice = (
    value: number | JSX.Element,
    id: number,
    flippedMatch: boolean
  ) => {
    if (!flippedMatch) {
      if (firstChoice) {
        id !== firstChoice.id && setSecondChoice({ value, id });
      } else {
        setFirstChoice({ value, id });
      }
    }
  };

  const handleChoice = (
    value: number | JSX.Element,
    id: number,
    flippedMatch: boolean
  ) => {
    controlChoice(value, id, flippedMatch);

    setValuesArray((prevValue) => {
      return prevValue!.map((e) => {
        if (id === e.id) {
          return { ...e, clicked: true };
        } else {
          return e;
        }
      });
    });
  };

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setNumOfMoves((prev: number) => prev + 1);
  };

  useEffect(() => {
    valuesArray.every((e) => e.matched === true) && setFinalGame(true);
    if (firstChoice && secondChoice) {
      if (firstChoice.value === secondChoice.value) {
        setValuesArray((prevArray) => {
          return prevArray!.map((e) => {
            if (e.element === firstChoice.value) {
              return { ...e, matched: true };
            } else {
              return e;
            }
          });
        });

        setScoreArr((prevValue) => {
          return prevValue!.map((e) => {
            if (e.turn) {
              return { ...e, score: e.score + 1 };
            } else {
              return e;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(
          () =>
            setValuesArray((prevArray) => {
              return prevArray!.map((e) => {
                if (e.id === firstChoice.id || e.id === secondChoice.id) {
                  return { ...e, clicked: false };
                } else {
                  return e;
                }
              });
            }),
          500
        );
        setTimeout(() => resetTurn(), 200);

        numOfMoves >= 1 &&
          setScoreArr((prevValue) => {
            return prevValue!.map((e, i) => {
              let indexOfTurn =
                prevValue!.findIndex((e) => e.turn === true) + 1;
              if (e.turn) {
                return { ...e, turn: false };
              } else if (indexOfTurn === i) {
                return { ...e, turn: true };
              } else if (indexOfTurn === Number(numberOfPlayers) && i === 0) {
                return { ...e, turn: true };
              } else {
                return e;
              }
            });
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstChoice, secondChoice]);

  return (
    <S.Container largeboard={(grid === "6x6").toString()}>
      {valuesArray!.map(({ id, element, matched, clicked }) => {
        return (
          <PuzzleButton
            key={id}
            handleChoice={handleChoice}
            value={element}
            flippedMatch={matched}
            clicked={clicked}
            id={id.toString()}
          />
        );
      })}
    </S.Container>
  );
};

export default GameBoard;
