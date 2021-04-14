import { Box, Center, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import gif from "./resources/loading.webp";
import { API } from "./backend";
import App from "./App";

function Redirection({ match }) {
  const {
    params: { shortid },
  } = match;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const localStorageSetter = (Language, Pro, Input, Output) => {
    let code = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("code")) {
        code = JSON.parse(localStorage.getItem("code"));
        code = [];
      }
      code.push(Language);
      code.push(Pro);
      code.push(Input);
      code.push(Output);
      localStorage.setItem("code", JSON.stringify(code));
    }
  };

  useEffect(() => {
    getlink().then((k) => {
      if (k.error) {
        setError(true);
        setLoading(false);
      } else {
        localStorageSetter(k.language, k.code, k.input, k.output);
        setLoading(false);
      }
    });
    // eslint-disable-next-line
  }, [error, loading]);

  const getlink = () => {
    let sid = { shortid: shortid };
    return fetch(`${API}getCode`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sid),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  };

  return (
    (loading && !error && (
      <div>
        <Box maxH="100vh" paddingTop="20px" bg="white">
          <Grid
            h="100vh"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(4, 1fr)"
            width="100%"
          >
            <GridItem colSpan="4" rowSpan={4} bg="white" textAlign="center">
              <Center>
                <Image src={gif} alt="Loading..." objectFit="cover" />
              </Center>
              <Heading marginTop="50px">
                Please Hold While We Are Finding Your Code...
              </Heading>
            </GridItem>
          </Grid>
        </Box>
      </div>
    )) ||
    (!loading && !error && <App entry={1} />) ||
    (!loading && error && <App entry={2} />)
  );
}
export default Redirection;
