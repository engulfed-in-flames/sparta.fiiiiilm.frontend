import React from "react";
import {
  Box,
  Grid,
  HStack,
  Skeleton,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";

export default function Movie() {
  return (
    <HStack px={24} mx={"auto"} minH={"480px"}>
      <Skeleton minW={"320px"} aspectRatio={"calc(3/4)"}>
        <Box h={"full"}></Box>
      </Skeleton>
      <VStack
        spacing={2}
        w={"full"}
        minW={"640px"}
        h={"full"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <Skeleton w={"60%"}>
          <Box h={14}></Box>
        </Skeleton>
        <HStack w={"full"}>
          <Skeleton w={"10%"}>
            <Box h={10}></Box>
          </Skeleton>
          <Skeleton w={"10%"}>
            <Box h={10}></Box>
          </Skeleton>
          <Skeleton w={"10%"}>
            <Box h={10}></Box>
          </Skeleton>
        </HStack>
        <Skeleton w={"40%"}>
          <Box h={10}></Box>
        </Skeleton>
        <SkeletonText w={"full"} spacing={4} skeletonHeight={8} noOfLines={3}>
          <Box h={40}></Box>
        </SkeletonText>
        <Grid
          w={"full"}
          gridTemplateColumns={"repeat(3, 1fr)"}
          gridTemplateRows={"1fr"}
          columnGap={2}
          mt={4}
        >
          <Skeleton h={24} />
          <Skeleton h={24} />
          <Skeleton h={24} />
        </Grid>
      </VStack>
    </HStack>
  );
}
