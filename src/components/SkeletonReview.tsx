import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";

export default function SkeletonReview() {
  return (
    <Box userSelect={"none"} w={"full"} h={"280px"} minH={"200px"}>
      <HStack h={"100%"}>
        <Flex w={24} h={"full"} alignItems={"flex-start"} mr={4}>
          <SkeletonCircle size={"16"}>
            <Avatar size={"md"} />
          </SkeletonCircle>
        </Flex>
        <VStack
          spacing={4}
          w={"full"}
          h={"full"}
          alignItems={"flex-start"}
          py={4}
        >
          <Skeleton w={"40%"}>
            <Box h={8}></Box>
          </Skeleton>
          <Skeleton w={"60%"} my={4}>
            <Box h={6}></Box>
          </Skeleton>
          <SkeletonText spacing={2} w={"full"} skeletonHeight={6}>
            <Box h={40}></Box>
          </SkeletonText>
        </VStack>
      </HStack>
      <Divider />
    </Box>
  );
}
