import { FC } from "react";

import Button from "../Button";
import * as S from "./styled";

interface Props {
  closeModal: () => void;
  restartBtn: () => void;
  setNewGame: () => void;
}

export const ModalMenuContent: FC<Props> = ({
  closeModal,
  restartBtn,
  setNewGame,
}) => {
  return (
    <S.FlexContainer>
      <Button colored onClick={restartBtn}>
        Restart
      </Button>
      <Button onClick={setNewGame}>New Game</Button>
      <Button onClick={closeModal} autofocus>
        Resume Game
      </Button>
    </S.FlexContainer>
  );
};
