import { Box, HStack, Skeleton, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

export default function RecentReviews() {
  const [isLoading] = useState(true);
  const arr = [1, 1, 1, 1, 1, 1];
  return (
    <Box
      w={"95%"}
      display={"grid"}
      gridTemplateColumns={"1fr 1fr"}
      rowGap={8}
      columnGap={16}
      mx={"auto"}
    >
      {arr.map((_, index) =>
        isLoading ? (
          <Box
            key={index}
            aspectRatio={"calc(16/9)"}
            px={4}
            py={2}
            borderRadius={"lg"}
            overflow={"hidden"}
          >
            <HStack w={"full"} h={"full"} overflow={"hidden"}>
              <Skeleton h={"full"} aspectRatio={"calc(3/4)"}></Skeleton>
              <VStack
                w={"full"}
                h={"full"}
                display={"grid"}
                gridTemplateRows={"1fr 1fr 1fr 4fr"}
                rowGap={2}
                alignItems={"flex-start"}
              >
                <Skeleton w={"full"} h={"full"}></Skeleton>
                <Skeleton w={"60%"} h={"full"}></Skeleton>
                <Skeleton w={"30%"} h={"full"}></Skeleton>
                <Skeleton w={"full"} h={"full"}></Skeleton>
              </VStack>
            </HStack>
          </Box>
        ) : (
          <Box key={index}></Box>
        )
      )}
    </Box>
  );
}
