import styled from "@emotion/styled";
import { Center as ChakraCenter } from "@chakra-ui/react";

interface Props {
  stategame: string;
}

export const CenterLayout = styled(ChakraCenter)<Props>(
  ({ theme, stategame }) => ({
    minWidth: "330px",
    height: "100vh",
    backgroundColor: `${
      stategame === "true" ? "transparent" : theme.colors.bigStone[800]
    }`,
    padding: "24px",
    flexDirection: "column",
    justifyContent: stategame === "true" ? "space-between" : "center",
    rowGap: "45px",
    animation: `${
      stategame
        ? "background-animate-in 400ms linear alternate"
        : "background-animate-out 400ms linear alternate"
    }`,

    "& >p , >div": {
      animation: `${
        stategame
          ? "children-animate-in 500ms linear alternate"
          : "children-animate-out 500ms linear alternate"
      }`,
    },

    "@keyframes children-animate-in": {
      "0%": {
        opacity: "0",
      },

      "100%": {
        opacity: "1",
      },
    },

    "@keyframes children-animate-out": {
      "0%": {
        opacity: "0",
      },
      "100%": {
        opacity: "1",
      },
    },

    "@keyframes background-animate-in": {
      "0%": {
        backgroundColor: theme.colors.bigStone[800],
      },

      "100%": {
        backgroundColor: theme.colors.albaster[50],
      },
    },

    "@keyframes background-animate-out": {
      "0%": {
        backgroundColor: theme.colors.albaster[50],
      },
      "100%": {
        backgroundColor: theme.colors.bigStone[800],
      },
    },

    [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
      padding: "37px 40px 50px",
    },

    [`@media only screen and (min-width: ${theme.breakpoints.xl})`]: {
      padding: "65px 165px 75px",
    },
  })
);
