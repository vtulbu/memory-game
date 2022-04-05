import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
const breakpoints = createBreakpoints({
  sm: "375px",
  md: "768px",
  lg: "960px",
  xl: "1440px",
  "2xl": "1536px",
});

const theme = extendTheme({
  breakpoints,
  colors: {
    yellow: {
      50: "#fff4db",
      100: "#ffe1ae",
      200: "#ffcd7e",
      300: "#fdb94c",
      400: "#fda51b", //basic FDA214
      500: "#e48b02",
      600: "#b16c00",
      700: "#7f4d00",
      800: "#4e2d00",
      900: "#1e0e00",
    },
    jungleMist: {
      50: "#e8f4fe",
      100: "#cbdbe5",
      200: "#aec3d1", //basic BCCED9
      300: "#8facbd",
      400: "#7094aa",
      500: "#567a90",
      600: "#435f71",
      700: "#2e4451",
      800: "#192933",
      900: "#001015",
    },
    pickledBluewood: {
      50: "#e6f5fd",
      100: "#cadbe6",
      200: "#acc3d2",
      300: "#8caabf",
      400: "#6d92ad",
      500: "#537993",
      600: "#415e73",
      700: "#2d4353", //basic 304859
      800: "#182834",
      900: "#020e17",
    },
    bigStone: {
      50: "#e7f4fd",
      100: "#c7dbea",
      200: "#a5c3da",
      300: "#82abca",
      400: "#6093bb",
      500: "#4779a2",
      600: "#375f7f",
      700: "#27445b",
      800: "#152938", //basic
      900: "#020f17",
    },
    concrete: {
      50: "#f2f2f2", //basic
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#0d0d0d",
    },
    gothic: {
      50: "#e3f5fe",
      100: "#cadce6",
      200: "#aec3d0",
      300: "#91aabb",
      400: "#7392a6", //basic 7191A5
      500: "#59798c",
      600: "#435e6e",
      700: "#2e4350",
      800: "#192933",
      900: "#010e18",
    },
    hippieBlue: {
      50: "#e2f5ff",
      100: "#c5dcec",
      200: "#a4c3d9",
      300: "#82acc8",
      400: "#6194b7", //basic 6395B8
      500: "#487a9e",
      600: "#365f7c",
      700: "#24445a",
      800: "#112a39",
      900: "#00101a",
    },
    albaster: {
      50: "#f2f2f2", //basic fcfcfc
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#0d0d0d",
    },
  },
  fonts: {
    body: "Atkinson Hyperlegible, sans-serif",
    heading: "Atkinson Hyperlegible, sans-serif",
    mono: "Atkinson Hyperlegible, sans-serif",
  },
});

type Theme = typeof theme;

export type { Theme };
export { theme };
