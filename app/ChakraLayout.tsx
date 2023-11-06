"use client";

import { Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const ChakraLayout = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};
