import styled from "@emotion/styled";
import { Container as ChakraContainer } from "@chakra-ui/react";

interface Props {
  largeboard: string;
}

export const Container = styled(ChakraContainer)<Props>(
  ({ largeboard, theme }) => ({
    display: "grid",
    gridTemplateColumns: `${
      largeboard === "true" ? "repeat(6, 1fr)" : "repeat(4, 1fr)"
    }`,
    justifyItems: "center",
    alignItems: "center",
    padding: "0",
    gap: "10px",
    maxWidth: "400px",

    [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
      maxWidth: "700px",
    },
  })
);
