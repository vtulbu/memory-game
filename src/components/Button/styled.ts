import styled from "@emotion/styled";
import { Button as ChakraButton } from "@chakra-ui/react";

interface Props {
  colorbtn: string;
  child: string;
}

export const Button = styled(ChakraButton)<Props>(
  ({ theme, colorbtn, child }) => ({
    background: colorbtn ? theme.colors.yellow[400] : theme.colors.concrete[50],
    borderRadius: "26px",
    color: colorbtn
      ? theme.colors.albaster[50]
      : theme.colors.pickledBluewood[700],
    fontSize: "18px",
    fontWeight: "700",
    padding: "25px 0",
    transition: "background-color 200ms cubic-bezier(0.4, 0, 0.49, 1)",

    ":hover": {
      backgroundColor: colorbtn
        ? theme.colors.yellow[300]
        : theme.colors.concrete[50],
      opacity: colorbtn ? "1" : "0.8",
    },

    ":active": {
      backgroundColor: `${
        colorbtn ? theme.colors.yellow[500] : theme.colors.hippieBlue[400]
      }`,
    },

    [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
      fontSize: `${child.toLowerCase() === "start game" ? "32px" : "20px"}`,
      borderRadius: "36px",
      padding: `${child.toLowerCase() === "start game" ? "18px" : "26px 40px"}`,
      flex: "1",
    },
  })
);
