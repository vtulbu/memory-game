import { FC } from "react";

import Menu from "@/components/Menu";
import MemoryText from "@/components/MemoryText";

const MenuScreen: FC = () => {
  return (
    <>
      <MemoryText />
      <Menu />
    </>
  );
};

export default MenuScreen;
