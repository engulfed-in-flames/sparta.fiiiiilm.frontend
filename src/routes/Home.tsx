import { Box, Divider, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import RecentReviews from "../components/RecentReviews";
import Slider from "../components/Slider";
import { IMovie } from "../type";
import { fetchMovies } from "../api";

export default function Home() {
  const { data: movies } = useQuery<IMovie[]>(["movies"], fetchMovies);

  return (
    <Box minH={"200vh"} mt={12} mx={12}>
      <Box mb={12}>
        <Heading>주간 박스오피스</Heading>
      </Box>
      {movies && <Slider movies={movies} />}

      <Divider my={12} />
      <Box mb={12}>
        <Heading>최신 관람평</Heading>
      </Box>
      <RecentReviews />
    </Box>
  );
}
