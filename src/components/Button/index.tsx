import { FC, ReactNode } from "react";

import * as S from "./styled";

interface Props {
  onClick: () => void;
  autofocus?: boolean;
  colored?: boolean;
  children: ReactNode;
}

const Button: FC<Props> = ({
  onClick,
  autofocus,
  colored,
  children,
}: Props) => {
  return (
    <S.Button
      onClick={onClick}
      autoFocus={autofocus}
      colorbtn={colored ? colored.toString() : ""}
      child={children!.toString()}
    >
      {children}
    </S.Button>
  );
};

export default Button;
