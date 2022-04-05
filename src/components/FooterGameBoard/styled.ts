import styled from "@emotion/styled";

interface Props {
  turn?: boolean;
  flexColumn?: boolean;
}

export const Containaer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  max-width: 400px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 700px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: fit-content;
    justify-content: space-between;
    gap: 40px;
  }
`;

export const Box = styled.div<Props>`
  position: relative;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: ${({ theme, turn }) =>
    turn ? theme.colors.yellow[400] : "#dfe7ec"};
  border-radius: 5px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.49, 1);
  transform: ${({ turn }) => (turn ? "scale(1.2)" : "scale(1)")};

  &::after {
    content: "";
    width: 16px;
    height: 16px;
    background-color: ${({ theme, turn }) =>
      turn ? theme.colors.yellow[400] : "transparent"};
    transform: rotate(45deg);
    position: absolute;
    top: ${({ turn }) => (turn ? "-8px" : "2px")};
    transition: background-color 200ms cubic-bezier(0.4, 0, 0.49, 1),
      top 400ms cubic-bezier(0.4, 0, 0.49, 1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: ${({ flexColumn }) => (flexColumn ? "column" : "row")};
    align-items: center;
    column-gap: 110px;
    padding: ${({ flexColumn }) => (flexColumn ? "15px 40px" : "15px 24px")};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: row;
    padding: 20px 30px;
    transform: ${({ turn }) => (turn ? "scale(1.1)" : "scale(1)")};

    &::before {
      content: "CURRENT TURN";
      text-transform: capitalize;
      font-size: 13px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 5px;
      position: absolute;
      bottom: ${({ turn }) => (turn ? "-25px" : "-15px")};
      transition: all 400ms cubic-bezier(0.4, 0, 0.49, 1);
      color: ${({ theme, turn }) =>
        turn ? theme.colors.bigStone[800] : "transparent"};
    }
  }
`;

export const Paragraphe = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.gothic[400]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

export const MobilePlayer = styled.p<Props>`
  font-size: 15px;
  font-weight: 700;
  line-height: 19px;
  color: ${({ turn, theme }) => (turn ? "#fff" : theme.colors.gothic[400])};
  transition: all 300ms cubic-bezier(0.4, 0, 0.49, 1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const DesktopPlayer = styled.p<Props>`
  font-size: 15px;
  font-weight: 700;
  line-height: 19px;
  color: ${({ turn, theme }) => (turn ? "#fff" : theme.colors.gothic[400])};
  transition: all 300ms cubic-bezier(0.4, 0, 0.49, 1);
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-block;
    font-size: 18px;
  }
`;

export const Counter = styled.p<Props>`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  color: ${({ turn, theme }) =>
    turn ? "#fff" : theme.colors.pickledBluewood[700]};
  transition: all 300ms cubic-bezier(0.4, 0, 0.49, 1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
  }
`;
