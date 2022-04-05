import { FC } from "react";

import MemoryText from "../MemoryText";

import { ModalMenu } from "../ModalMenu";
import * as S from "./styled";

const HeadGameBoard: FC = () => {
  return (
    <S.Container>
      <MemoryText />
      <ModalMenu />
    </S.Container>
  );
};

export default HeadGameBoard;
