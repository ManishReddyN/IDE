import React from "react";
import ReactDOM from "react-dom";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes";
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
const customTheme = extendTheme({ config });

ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <Routes />
  </ChakraProvider>,
  document.getElementById("root")
);
