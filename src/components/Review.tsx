import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { motion } from "framer-motion";
import { IReview } from "../type";
import { TfiCommentAlt } from "react-icons/tfi";

const LikeButton = chakra(motion.button, {});

export default function Review({
  pk,
  user,
  avatar,
  title,
  content,
  like_count,
  comment_count,
  created_at,
}: IReview) {
  const createdAt = new Date(created_at).toLocaleString();
  const [date, time] = createdAt.split(",");
  const [like, setLike] = useState(false);
  const onLikeClick = () => {
    setLike((prev) => !prev);
  };
  return (
    <Box w={"full"} h={"280px"} minH={"200px"}>
      <Flex justifyContent={"space-between"} alignItems={"flex-start"} mb={8}>
        <Flex userSelect={"none"} w={24} h={"full"} alignItems={"flex-start"}>
          <Avatar src={avatar} size={"md"} />
        </Flex>
        <VStack spacing={4} w={"full"} alignItems={"flex-start"}>
          <Text fontSize={18} fontWeight={"bold"}>
            {title}
          </Text>
          <Text color={"blackAlpha.600"}>{user}</Text>
          <Text whiteSpace={"normal"} wordBreak={"break-all"}>
            {content}
          </Text>

          <Flex w={"full"} justifyContent={"space-between"}>
            <HStack>
              <HStack>
                <LikeButton
                  onClick={onLikeClick}
                  _hover={{ bg: "rgba(0,0,0,0)" }}
                  bg={"rgba(0,0,0,0)"}
                >
                  {like ? (
                    <HiHeart size={20} color="red" />
                  ) : (
                    <HiOutlineHeart size={20} color="red" />
                  )}
                </LikeButton>
                <Text>{like_count}</Text>
              </HStack>
              <HStack>
                <TfiCommentAlt />
                <Text>{comment_count}</Text>
              </HStack>
            </HStack>

            <Text>
              {time.includes("PM")
                ? `오후 ${time.trim().replace("PM", "")}`
                : `오전 ${time.trim().replace("AM", "")}}`}
              {date}
            </Text>
          </Flex>
        </VStack>
      </Flex>
      <Divider />
    </Box>
  );
}
