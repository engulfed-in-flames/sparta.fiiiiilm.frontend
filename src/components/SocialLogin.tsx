import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import React from "react";

export default function SocialLogin() {
  return (
    <Box>
      <HStack>
        <Divider />
        <Text color={"gray.400"} textTransform={"uppercase"}>
          or
        </Text>
        <Divider />
      </HStack>
      <VStack spacing={2} py={8}>
        <Button
          href="#"
          as="a"
          leftIcon={<AiFillGithub />}
          w={"100%"}
          bg={"blackAlpha.900"}
          color={"white"}
          py={6}
        >
          Continue With Github
        </Button>
        <Button
          href="#"
          as="a"
          leftIcon={<RiKakaoTalkFill />}
          w={"100%"}
          colorScheme={"yellow"}
          py={6}
        >
          Continue With Kakaotalk
        </Button>
        <Button as="a" leftIcon={<FcGoogle />} w={"100%"} py={6}>
          Continue With Google
        </Button>
      </VStack>
    </Box>
  );
}
