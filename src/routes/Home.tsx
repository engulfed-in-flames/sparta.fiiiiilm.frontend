import { Box, Divider, Heading } from "@chakra-ui/react";
import RecentReviews from "../components/RecentReviews";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Box minH={"200vh"} mt={12} mx={12}>
      <Box mb={12}>
        <Heading>주간 박스오피스</Heading>
      </Box>
      <Slider />
      <Divider my={12} />
      <Box mb={12}>
        <Heading>최신 관람평</Heading>
      </Box>
      <RecentReviews />
    </Box>
  );
}
