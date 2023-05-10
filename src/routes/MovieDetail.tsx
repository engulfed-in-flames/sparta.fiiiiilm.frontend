import React, { useState } from "react";
import { Box, Divider, Heading, VStack } from "@chakra-ui/react";
import Movie from "../components/Movie";
import Review from "../components/Review";

export default function MovieDetail() {
  const [isLoading] = useState(true);
  const arr = [1, 1, 1];
  return (
    <Box w={"90%"} mx={"auto"}>
      {isLoading ? (
        <Box maxW={"1600px"} minW={"880px"} mx={"auto"}>
          <Movie />
          <Divider mb={12} />
          <Box w={"80%"} mx={"auto"} mb={12}>
            <Heading>관람평</Heading>
          </Box>
          <VStack spacing={8} w={"80%"} minW={"760px"} mx={"auto"}>
            {arr.map((_, index) => (
              <Review key={index} />
            ))}
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
}
