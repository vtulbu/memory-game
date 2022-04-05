import styled from "@emotion/styled";
import {
  Container as ChakraContainer,
  Box as ChakraBox,
  Text as ChakraText,
  HStack as ChakraHStack,
} from "@chakra-ui/react";

export const Container = styled(ChakraContainer)(({ theme }) => ({
  backgroundColor: theme.colors.albaster[50],
  borderRadius: "10px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  rowGap: "27px",
  minWidth: "280px",

  [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
    padding: "56px",
    rowGap: "33px",
  },
}));

export const OptionBox = styled(ChakraBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "11px",
}));

export const BoxTitle = styled(ChakraText)(({ theme }) => ({
  fontWeight: "700",
  color: theme.colors.gothic[400],
  fontSize: "15px",

  [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
    fontSize: "20px",
  },
}));

export const BoxItem = styled(ChakraBox)(({ theme }) => ({
  backgroundColor: theme.colors.jungleMist[200],
  borderRadius: "26px",
  flex: "1",
  textAlign: "center",
  transition:
    "background-color 200ms cubic-bezier(0.4, 0, 0.49, 1), transform 100ms linear",

  ":hover": {
    backgroundColor: theme.colors.hippieBlue[400],
  },

  ":active": {
    transform: "scale(0.9)",
  },

  WebkitTapHighlightColor: "transparent",
}));

export const BoxMenu = styled(ChakraBox)(({ theme }) => ({
  cursor: "pointer",
  borderRadius: "26px",
  padding: "10px 0",
  fontWeight: "700",
  color: theme.colors.albaster[50],

  [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
    fontSize: "26px",
    padding: "8px",
  },
}));

export const StyledHSTack = styled(ChakraHStack)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "4px",

  [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
    gap: "22px",
  },
}));
