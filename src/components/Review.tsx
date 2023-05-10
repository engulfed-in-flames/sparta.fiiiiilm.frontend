import React, { useState } from "react";
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
  chakra,
} from "@chakra-ui/react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { motion } from "framer-motion";

const LikeButton = chakra(motion.button, {});

export default function Review() {
  const [like, setLike] = useState(false);
  const onLikeClick = () => {
    setLike((prev) => !prev);
  };
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
          <LikeButton
            onClick={onLikeClick}
            _hover={{ bg: "rgba(0,0,0,0)" }}
            bg={"rgba(0,0,0,0)"}
          >
            {like ? (
              <HiHeart size={36} color="red" />
            ) : (
              <HiOutlineHeart size={36} color="red" />
            )}
          </LikeButton>
        </VStack>
      </HStack>
      <Divider />
    </Box>
  );
}
