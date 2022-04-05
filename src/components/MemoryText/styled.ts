import styled from "@emotion/styled";
import { Text as ChakraText } from "@chakra-ui/react";

interface Props {
  stategame: string;
}

export const MemoryText = styled(ChakraText)<Props>(({ theme, stategame }) => ({
  fontSize: stategame === "true" ? "24px" : "32px",
  fontWeight: "700",
  color:
    stategame === "true"
      ? theme.colors.bigStone[800]
      : theme.colors.albaster[50],

  [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
    fontSize: "40px",
  },
}));
