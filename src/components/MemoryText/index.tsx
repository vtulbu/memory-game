import { FC } from "react";

import { GameParameters } from "@/utils/gameContext";

import * as S from "./styled";

const MemoryText: FC = () => {
  const { stateGame } = GameParameters();

  return <S.MemoryText stategame={stateGame.toString()}>memory</S.MemoryText>;
};

export default MemoryText;
