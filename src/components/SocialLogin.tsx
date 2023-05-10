import React from "react";
import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  const kakaoParams = {
    client_id: "fb88d01bde4577bb81efb4c4d55db86b",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const kakaoSearchParams = new URLSearchParams(kakaoParams).toString();
  const kakaoOauthUrl = `https://kauth.kakao.com/oauth/authorize?${kakaoSearchParams}`;

  const githubParams = {};
  const githubSearchParams = new URLSearchParams(githubParams).toString();
  const githubOauthUrl = "";

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
          <Text w={48}>Continue With Github</Text>
        </Button>
        <Button
          href={kakaoOauthUrl}
          as="a"
          leftIcon={<RiKakaoTalkFill />}
          w={"100%"}
          colorScheme={"yellow"}
          py={6}
        >
          <Text w={48}>Continue With Kakaotalk</Text>
        </Button>
        <Button as="a" leftIcon={<FcGoogle />} w={"100%"} py={6}>
          <Text w={48}>Continue With Google</Text>
        </Button>
      </VStack>
    </Box>
  );
}
