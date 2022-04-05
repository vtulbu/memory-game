import { FC } from "react";

import { GameParameters } from "@/utils/gameContext";
import Button from "@/components/Button";

import { RadioButtons } from "./RadioButton";
import BoxTitle from "./BoxTitle";
import * as S from "./styled";

const Menu: FC = () => {
  const {
    setStateGame,
    theme,
    setGameTheme,
    numberOfPlayers,
    setNumberOfPlayers,
    grid,
    setGrid,
  } = GameParameters();

  return (
    <S.Container maxWidth="container.md">
      <S.OptionBox>
        <BoxTitle text="Select Theme" />
        <RadioButtons
          options={["Numbers", "Icons"]}
          name="theme"
          defaultValue={theme}
          onChange={(e) => setGameTheme(e)}
        />
      </S.OptionBox>
      <S.OptionBox>
        <BoxTitle text="Numbers of Players" />
        <RadioButtons
          options={["1", "2", "3", "4"]}
          name="players"
          defaultValue={numberOfPlayers}
          onChange={(e) => setNumberOfPlayers(e)}
        />
      </S.OptionBox>
      <S.OptionBox>
        <BoxTitle text="Grid Size" />
        <RadioButtons
          options={["4x4", "6x6"]}
          name="grid"
          defaultValue={grid}
          onChange={(e) => setGrid(e)}
        />
      </S.OptionBox>
      <Button colored onClick={() => setStateGame(true)}>
        Start Game
      </Button>
    </S.Container>
  );
};

export default Menu;
