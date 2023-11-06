"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const theme = extendTheme(withDefaultColorScheme({ colorScheme: "purple" }));

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};
