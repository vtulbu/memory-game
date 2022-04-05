import styled from "@emotion/styled";
import { Flex } from "@chakra-ui/react";

export const Container = styled(Flex)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));
