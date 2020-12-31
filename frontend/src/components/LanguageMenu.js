import { Box, Grid, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import React from "react";


export default function LanguageMenu() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} marginBottom="10px">
      <Box w="100%" h="10" />
      <Box w="100%" h="10">
        <Menu closeOnSelect={false}>
          <MenuButton
            w="100%"
            as={Button}
            colorScheme="blue"
            onClick={() => setWarn(!Warn)}
          >
            {Language.charAt(0).toUpperCase() + Language.slice(1)}
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue={Language} type="radio">
              {languages.map((language, index) => (
                <MenuItemOption
                  key={language}
                  value={language}
                  onClick={() => {
                    setWarn(false);
                    if (language === "c" || language === "c++") {
                      setMode("c_cpp");
                    } else setMode(language);
                    setLanguage(language);
                    setChoice(choice[index]);
                    setPro(templateCode[index]);
                    setCArgs(compilerArgs[index]);
                  }}
                >
                  {language.charAt(0).toUpperCase() + language.slice(1)}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
      <Box w="100%" h="10" />
    </Grid>
  );
}
