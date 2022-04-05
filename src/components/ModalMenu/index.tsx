import { FC } from "react";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { GameParameters } from "@/utils/gameContext";

import Button from "../Button";
import { ModalResults } from "./ModalResults";
import { ModalMenuContent } from "./ModalMenu";
import * as S from "./styled";

export const ModalMenu: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    setRestartGame,
    setPauseGame,
    finalGame,
    setFinalGame,
    setStateGame,
    setNumOfMoves,
    setTime,
  } = GameParameters();

  const restartBtn = () => {
    setRestartGame(true);
    onClose();
    setPauseGame(false);
    setFinalGame(false);
  };

  const setNewGame = () => {
    onClose();
    setStateGame(false);
    setFinalGame(false);
    setNumOfMoves(0);
    setPauseGame(false);
    setTime(0);
  };

  const openModal = () => {
    onOpen();
    setPauseGame(true);
  };

  const closeModal = () => {
    onClose();
    setPauseGame(false);
  };

  const stateModal = (open: boolean, finalGame: boolean) => {
    if (open) {
      return true;
    } else if (finalGame) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <S.Button onClick={openModal}>Menu</S.Button>
      <S.DesktopButtons>
        <Button colored onClick={restartBtn}>
          Restart
        </Button>
        <Button onClick={setNewGame}>New Game</Button>
      </S.DesktopButtons>

      <Modal
        isOpen={stateModal(isOpen, finalGame)}
        onClose={closeModal}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          margin="24px"
          maxW="654px"
          minW="320px"
          borderRadius={{ sm: "10px", md: "20px" }}
        >
          {finalGame ? (
            <ModalResults restartBtn={restartBtn} setNewGame={setNewGame} />
          ) : (
            <ModalMenuContent
              closeModal={closeModal}
              restartBtn={restartBtn}
              setNewGame={setNewGame}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
