import * as S from "./styled";

interface Props {
  text: string;
}

const BoxTitle = ({ text }: Props) => {
  return <S.BoxTitle>{text}</S.BoxTitle>;
};

export default BoxTitle;
