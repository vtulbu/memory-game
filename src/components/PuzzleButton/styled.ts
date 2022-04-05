import styled from "@emotion/styled";

interface Props {
  smallButton: boolean;
}

export const PuzzleButton = styled("div")<Props>(({ theme, smallButton }) => ({
  backgroundColor: theme.colors.pickledBluewood[700],
  borderRadius: "50%",
  width: `${smallButton ? "50px" : "72px"}`,
  height: `${smallButton ? "50px" : "72px"}`,
  transition: "all 400ms cubic-bezier(0.4, 0, 0.49, 1)",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",

  ":hover": {
    backgroundColor: theme.colors.pickledBluewood[600],
  },

  "&.clicked": {
    backgroundColor: theme.colors.yellow[400],
    transform: "rotateY(180deg)",

    "&:hover": {
      backgroundColor: theme.colors.yellow[300],
    },
  },

  "&.flippedMatch": {
    backgroundColor: theme.colors.jungleMist[200],
    transform: "rotateY(180deg)",
  },

  [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
    width: `${smallButton ? "82px" : "118px"}`,
    height: `${smallButton ? "82px" : "118px"}`,
  },
}));

export const PuzzleContent = styled("div")<Props>(({ theme, smallButton }) => ({
  position: "relative",
  zIndex: "-1",
  display: "flex",
  alignItems: "center",
  transform: "rotateY(180deg)",
  opacity: "0",
  transition: "all 400ms cubic-bezier(1,-0.04,.41,.5)",
  fontSize: `${smallButton ? "24px" : "40px"}`,
  fontWeight: "700",
  color: theme.colors.albaster[50],

  "&.clicked": {
    opacity: 1,
  },

  [`@media only screen and (min-width: ${theme.breakpoints.md})`]: {
    fontSize: `${smallButton ? "44px" : "56px"}`,
  },
}));
