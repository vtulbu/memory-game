import { FC, MouseEvent } from "react";

import { GameParameters } from "@/src/utils/gameContext";

import * as S from "./styled";

interface Props {
  handleChoice: (
    value: number | JSX.Element,
    id: number,
    flippedMatch: boolean
  ) => void;
  value: number | JSX.Element;
  flippedMatch: boolean;
  clicked: boolean;
  id: string;
}

const PuzzleButton: FC<Props> = ({
  value,
  handleChoice,
  flippedMatch,
  id,
  clicked,
}) => {
  const { grid } = GameParameters();

  const handleClick = (e: MouseEvent) => {
    handleChoice(value, Number(e.currentTarget.id), flippedMatch);
  };

  const handleClass = (flipped: boolean, clckd: boolean) => {
    if (flipped) {
      return "flippedMatch";
    } else if (clckd) {
      return "clicked";
    }
    return "";
  };

  return (
    <S.PuzzleButton
      onClick={(e) => handleClick(e)}
      className={handleClass(flippedMatch, clicked)}
      id={id}
      smallButton={grid === "6x6"}
    >
      <S.PuzzleContent
        className={clicked ? "clicked" : ""}
        id={id}
        smallButton={grid === "6x6"}
      >
        {clicked ? value : ""}
      </S.PuzzleContent>
    </S.PuzzleButton>
  );
};

export default PuzzleButton;
