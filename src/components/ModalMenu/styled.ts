import styled from "@emotion/styled";
import { Button as ChakraButton, Flex as FlexChakra } from "@chakra-ui/react";

interface TextProps {
  fontSize: { sm: string; md: string };
  lineHeight: string;
  textAlign: string;
}

interface ResultProps {
  winner?: boolean;
}

export const Button = styled(ChakraButton)(({ theme }) => ({
  background: theme.colors.yellow[400],
  borderRadius: "26px",
  color: theme.colors.albaster[50],
  fontSize: "18px",
  fontWeight: "700",
  padding: "10px 19px",
  transition: "background-color 200ms cubic-bezier(0.4, 0, 0.49, 1)",

  "&:hover": {
    backgroundColor: theme.colors.yellow[300],
  },

  "&:active": {
    backgroundColor: theme.colors.yellow[500],
  },

  "&:focus": {
    boxShadow: "none",
  },

  [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
    display: "none",
  },
}));

export const FlexContainer = styled(FlexChakra)(({ theme }) => ({
  padding: "24px",
  flexDirection: "column",
  gap: "16px",

  [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
    padding: "51px 56px 70px",
  },
}));

export const TextResults = styled.h2<TextProps & ResultProps>`
  font-size: ${({ fontSize }) => fontSize.sm};
  font-weight: 700;
  color: ${({ winner, theme }) =>
    winner ? "#fff" : theme.colors.bigStone[800]};
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ fontSize }) => fontSize.md};
  }
`;

export const Paragraphe = styled.p<ResultProps>`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: ${({ winner, theme }) => (winner ? "#fff" : theme.colors.gothic[400])};
  text-align: center;

  ${({ winner }) => winner && '::after {content: " (Winner!)"}'}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 35px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 16px;
  }
`;

export const Results = styled.div<ResultProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ winner, theme }) =>
    winner ? theme.colors.bigStone[800] : "#dfe7ec"};
  border-radius: 5px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 25px 32px;
  }
`;

export const DesktopButtons = styled("div")(({ theme }) => ({
  display: "none",

  [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
    display: "flex",
    gap: "16px",
  },
}));

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 14px;
`;
