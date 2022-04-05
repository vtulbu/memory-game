import React from "react";

import GameBoard from "@/components/GameBoard";
import HeadGameBoard from "@/components/HeadGameBoard";
import FooterGameBoard from "@/components/FooterGameBoard";

const BoardScreen = () => {
  return (
    <>
      <HeadGameBoard />
      <GameBoard />
      <FooterGameBoard />
    </>
  );
};

export default BoardScreen;
