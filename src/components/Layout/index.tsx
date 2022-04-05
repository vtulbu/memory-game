import { ReactNode } from "react";

import * as S from "./styled";

interface Props {
  stategame: boolean;
  children: ReactNode;
}

const Layout = ({ children, stategame }: Props) => {
  return (
    <S.CenterLayout stategame={stategame.toString()}>{children}</S.CenterLayout>
  );
};

export default Layout;
