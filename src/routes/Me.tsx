import React from "react";
import { Box, Button, Collapse, Grid, useDisclosure } from "@chakra-ui/react";

export default function Me() {
  const { isOpen: isFollowingOpen, onToggle: onFollowingToggle } =
    useDisclosure();
  const { isOpen: isFollowerOpen, onToggle: onFollowerToggle } =
    useDisclosure();
  return (
    <Box w={"90%"} mt={12} mx={"auto"}>
      <Grid gridTemplateColumns={"1fr 4fr"} columnGap={8}>
        <Box
          w={"240px"}
          aspectRatio={"calc(3/4)"}
          boxShadow={"xl"}
          borderRadius={"md"}
        ></Box>
        <Box w={"full"} boxShadow={"xl"} px={8} py={4}>
          <Box mb={8}>
            <Button
              onClick={onFollowingToggle}
              w={24}
              bg={"gray.600"}
              color={"white"}
            >
              팔로잉
            </Button>
            <Collapse in={isFollowingOpen} animateOpacity>
              <Box
                p="40px"
                color="white"
                mt="4"
                bg="gray.400"
                rounded="md"
                shadow="md"
              ></Box>
            </Collapse>
          </Box>
          <Box mb={8}>
            <Button
              onClick={onFollowerToggle}
              w={24}
              bg={"gray.600"}
              color={"white"}
            >
              팔로워
            </Button>
            <Collapse in={isFollowerOpen} animateOpacity>
              <Box
                p="40px"
                color="white"
                mt="4"
                bg="gray.400"
                rounded="md"
                shadow="md"
              ></Box>
            </Collapse>
          </Box>
          <Box h={"80vh"} bg={"tomato"}></Box>
        </Box>
      </Grid>
    </Box>
  );
}
