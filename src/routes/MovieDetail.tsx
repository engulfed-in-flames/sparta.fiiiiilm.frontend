import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import {
  UseQueryResult,
  useQueries,
  useQueryClient,
} from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Movie from "../components/Movie";
import Review from "../components/Review";
import { fetchMovie, fetchMovieReviews, postReview } from "../api";
import { IMovieDetail, IReview } from "../type";
import SkeletonMovie from "../components/SkeletonMovie";
import SkeletonReview from "../components/SkeletonReview";
import { useOutletContextUser } from "../hooks/useUser";

interface IForm {
  title: string;
  content: string;
}

export default function MovieDetail() {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm<IForm>();
  const { isUserLoading, user } = useOutletContextUser();
  const [searchParams] = useSearchParams();
  const movieCode = searchParams.get("movieCode");
  const rank = Number(searchParams.get("rank"));

  const [
    { isLoading: isMovieLoading, data: movie },
    { isLoading: isReviewsLoading, data: reviews },
  ] = useQueries({
    queries: [
      {
        queryKey: ["movieDetal", movieCode],
        queryFn: () => fetchMovie(movieCode!),
      },
      {
        queryKey: ["reviews", movieCode],
        queryFn: () => fetchMovieReviews(movieCode!),
      },
    ],
  }) as [
    UseQueryResult<IMovieDetail, unknown>,
    UseQueryResult<IReview[], unknown>
  ];

  const onSubmit = async (data: IForm) => {
    if (movieCode && movie) {
      const reviewData = {
        movie_title: movie.title,
        movie_code: movieCode,
        title: data.title,
        content: data.content,
      };
      try {
        await postReview(reviewData);
        queryClient.refetchQueries(["reviews"]);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Box w={"90%"} mx={"auto"}>
      <Box maxW={"1600px"} minW={"880px"} mx={"auto"}>
        {!isMovieLoading && movie ? (
          <Movie
            title={movie.title}
            genre={movie.genre}
            overview={movie.overview}
            releaseDate={movie.releaseDate}
            runtime={movie.runtime}
            rating={movie.rating}
            posterPath={movie.posterPath}
            rank={rank}
          />
        ) : (
          <SkeletonMovie />
        )}
        <>
          <Divider mb={12} />
          <Box w={"60%"} mx={"auto"} mb={12}>
            <FormControl
              id="myForm"
              isRequired
              as="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormLabel>제목</FormLabel>
              <InputGroup mb={4}>
                <Input
                  {...register("title", { required: true })}
                  type="text"
                  placeholder="제목"
                />
              </InputGroup>
              <FormLabel>관람평</FormLabel>
              <Textarea
                {...register("content", { required: true, maxLength: 1000 })}
                placeholder="관람평"
                rows={4}
                mb={4}
              />
              <Flex justifyContent={"flex-end"}>
                <Button type="submit">게시하기</Button>
              </Flex>
            </FormControl>
          </Box>

          <Box w={"80%"} mx={"auto"} mb={12}>
            <Heading>관람평</Heading>
          </Box>
          {!isReviewsLoading && !isUserLoading ? (
            <VStack spacing={8} w={"80%"} minW={"760px"} mx={"auto"}>
              {reviews?.map((review) => {
                return (
                  <Review
                    key={review.id}
                    id={review.id}
                    title={review.title}
                    content={review.content}
                    comment_count={review.comment_count}
                    like_count={review.like_count}
                    user={review.user}
                    avatar={review.avatar}
                    created_at={review.created_at}
                    isLiked={
                      user && review.like_user_pk.includes(user?.pk)
                        ? true
                        : false
                    }
                  />
                );
              })}
            </VStack>
          ) : (
            <SkeletonReview />
          )}
        </>
      </Box>
    </Box>
  );
}
