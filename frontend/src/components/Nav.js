import { Box, Center, Heading, Icon, Text } from "@chakra-ui/react";
import { AiFillCode } from "react-icons/ai";

export default function Nav() {
  return (
    <Box
      bg="#90cdf4"
      color="black"
      marginBottom="10px"
      borderBottomRadius="20px"
    >
      <Heading size="md" fontStyle="normal">
        <Center>
          <Icon as={AiFillCode} w={8} h={8} />
          <Text fontFamily="monospace" paddingLeft="5px" as="cite">
            Run_Code
          </Text>
        </Center>
      </Heading>
    </Box>
  );
}
