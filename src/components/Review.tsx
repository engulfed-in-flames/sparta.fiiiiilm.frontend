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
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { TfiCommentAlt } from "react-icons/tfi";
import { IReviewProps } from "../type";
import { postReviewLike } from "../api";
import { useOutletContextUser } from "../hooks/useUser";

const LikeButton = chakra(motion.button, {});

export default function Review({
  id,
  user: nickname,
  avatar,
  title,
  content,
  like_count,
  comment_count,
  created_at,
  isLiked,
}: IReviewProps) {
  const queryClient = useQueryClient();
  const { user } = useOutletContextUser();

  const [likeCount, setLikeCount] = useState(like_count);

  const createdAt = new Date(created_at).toLocaleString();
  const [date, time] = createdAt.split(",");
  const dateTime = time.includes("PM")
    ? `${date} 오후 ${time.trim().replace("PM", "")}`
    : `${date} 오전 ${time.trim().replace("AM", "")}`;

  const onLikeClick = () => {
    if (user) {
      isLiked
        ? setLikeCount((prev) => prev - 1)
        : setLikeCount((prev) => prev + 1);
      // setIsLiked((prev) => !prev);
      postReviewLike(id);
      queryClient.refetchQueries(["me"]);
    }
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
          <Text color={"blackAlpha.600"}>{nickname}</Text>
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
                  {isLiked ? (
                    <HiHeart size={20} color="red" />
                  ) : (
                    <HiOutlineHeart size={20} color="red" />
                  )}
                </LikeButton>
                <Text>{likeCount}</Text>
              </HStack>
              <HStack>
                <TfiCommentAlt />
                <Text>{comment_count}</Text>
              </HStack>
            </HStack>

            <Text>{dateTime}</Text>
          </Flex>
        </VStack>
      </Flex>
      <Divider />
    </Box>
  );
}
