import { FC } from "react";

import { GameParameters } from "@/utils/gameContext";

import { Stopwatch } from "./StopWatch";
import * as S from "./styled";

const FooterGameBoard: FC = () => {
  const { numberOfPlayers, numOfMoves, scoreArr } = GameParameters();

  return (
    <S.Containaer>
      {numberOfPlayers === "1" ? (
        <>
          <S.Box>
            <Stopwatch />
          </S.Box>
          <S.Box>
            <S.Paragraphe>Moves</S.Paragraphe>
            <S.Counter>{numOfMoves}</S.Counter>
          </S.Box>
        </>
      ) : (
        <>
          {scoreArr!.map((e) => {
            return (
              <S.Box key={e.id} turn={e.turn} flexColumn>
                <S.MobilePlayer turn={e.turn}>
                  {"P" + e.player.split("").slice(-1)}
                </S.MobilePlayer>
                <S.DesktopPlayer turn={e.turn}>{e.player}</S.DesktopPlayer>
                <S.Counter turn={e.turn}>{e.score}</S.Counter>
              </S.Box>
            );
          })}
        </>
      )}
    </S.Containaer>
  );
};

export default FooterGameBoard;
