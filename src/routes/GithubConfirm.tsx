import React from "react";
import { Heading, Spinner, VStack } from "@chakra-ui/react";

export default function GithubConfirm() {
  return (
    <VStack mt={120}>
      <Heading mb={8}>깃허브 계정으로 로그인 하는 중...</Heading>
      <Spinner size="lg" />
    </VStack>
  );
}
