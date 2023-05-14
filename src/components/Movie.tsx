import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { IMovieDetail } from "../type";

export default function Movie({
  title,
  genre,
  overview,
  releaseDate,
  runtime,
  rating,
  posterPath,
  rank,
}: IMovieDetail) {
  return (
    <Flex px={12} py={12} mx={"auto"}>
      <Box
        userSelect={"none"}
        minW={"280px"}
        aspectRatio={"calc(3/4)"}
        bgImage={posterPath}
        bgPosition={"center"}
        bgSize={"contain"}
        mr={12}
        borderRadius={"md"}
      ></Box>
      <Flex
        flexDirection={"column"}
        w={"full"}
        minW={"640px"}
        justifyContent={"space-between"}
      >
        <VStack justifyContent={"flex-start"} alignItems={"flex-start"}>
          <Text fontSize={32} as="b">
            {title}
          </Text>
          <Flex w={"full"}>
            <Text mr={4}>
              <b>장르</b> : {genre}
            </Text>
            <Text>
              <b>상영시간</b> : {runtime.replace("min", "분")}
            </Text>
          </Flex>
          <Text>
            <b>개봉일</b> : {releaseDate}
          </Text>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={"bold"}>줄거리</Text>
            <Text textOverflow={"ellipsis"}>{overview}</Text>
          </VStack>
        </VStack>
        <Box w={"full"}>
          <Grid
            w={"full"}
            gridTemplateColumns={"repeat(3, 1fr)"}
            gridTemplateRows={"1fr"}
            columnGap={2}
            mt={4}
          >
            <VStack>
              <Text fontSize={20} fontWeight={"bold"}>
                박스 오피스
              </Text>
              <Text fontSize={20}>{`${rank}위`}</Text>
            </VStack>
            <VStack>
              <Text fontSize={20} fontWeight={"bold"}>
                관람객 평점
              </Text>
              <HStack>
                <Text fontSize={20}>{rating.toFixed(2)}</Text>
                <FaStar size={20} color={"red"} />
              </HStack>
            </VStack>
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
}
