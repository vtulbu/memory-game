import { FC } from "react";

import { GameParameters } from "@/utils/gameContext";

import Button from "../Button";
import * as S from "./styled";

interface Props {
  restartBtn: () => void;
  setNewGame: () => void;
}

export const ModalResults: FC<Props> = ({ restartBtn, setNewGame }) => {
  const { time, numOfMoves, numberOfPlayers, scoreArr } = GameParameters();
  let max = scoreArr!.reduce((prev, curr) =>
    curr.score > prev.score ? curr : prev
  ).score;
  let tie = scoreArr!.filter((e) => e.score === max).length > 1;

  let leaders: {
    id: number;
    player: string;
    score: number;
    turn: boolean;
    winner: boolean;
  }[] = [...scoreArr!]
    .sort((a, b) => (a.score > b.score ? -1 : 1))
    .map((e, i, arr) => {
      if (e.score === max) {
        return { ...e, winner: true };
      } else {
        return { ...e, winner: false };
      }
    });

  return Number(numberOfPlayers) === 1 ? (
    <S.FlexContainer>
      <S.TextResults
        fontSize={{ sm: "24px", md: "48px" }}
        lineHeight="30px"
        textAlign="center"
      >
        You did it!
      </S.TextResults>
      <S.Paragraphe>Game over! Here&apos;s how you got on…</S.Paragraphe>
      <S.ResultsContainer>
        <S.Results>
          <S.Paragraphe>Time Elapsed</S.Paragraphe>
          <S.TextResults
            fontSize={{ sm: "20px", md: "32px" }}
            lineHeight="25px"
            textAlign="right"
          >
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          </S.TextResults>
        </S.Results>
        <S.Results>
          <S.Paragraphe>Moves Taken</S.Paragraphe>
          <S.TextResults
            fontSize={{ sm: "20px", md: "32px" }}
            lineHeight="25px"
            textAlign="right"
          >{`${numOfMoves} Moves`}</S.TextResults>
        </S.Results>
      </S.ResultsContainer>
      <S.ButtonContainer>
        <Button colored onClick={restartBtn} autofocus>
          Restart
        </Button>
        <Button onClick={setNewGame}>Setup New Game</Button>
      </S.ButtonContainer>
    </S.FlexContainer>
  ) : (
    <S.FlexContainer>
      <S.TextResults
        fontSize={{ sm: "24px", md: "48px" }}
        lineHeight="30px"
        textAlign="center"
      >
        {tie ? "It's a tie!" : `Player ${leaders![0].player.slice(-1)} Wins!`}
      </S.TextResults>
      <S.Paragraphe>Game over! Here are the results…</S.Paragraphe>
      <S.ResultsContainer>
        {leaders.map((e) => (
          <S.Results key={e.id} winner={e.winner}>
            <S.Paragraphe winner={e.winner}>{e.player}</S.Paragraphe>
            <S.TextResults
              winner={e.winner}
              fontSize={{ sm: "20px", md: "32px" }}
              lineHeight="25px"
              textAlign="right"
            >
              {`${e.score} Pairs`}
            </S.TextResults>
          </S.Results>
        ))}
      </S.ResultsContainer>
      <S.ButtonContainer>
        <Button colored onClick={restartBtn} autofocus>
          Restart
        </Button>
        <Button onClick={setNewGame}>Setup New Game</Button>
      </S.ButtonContainer>
    </S.FlexContainer>
  );
};
