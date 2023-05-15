import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import SkeletonRecentReviews from "./SkeletonRecentReviews";
import { IReview } from "../type";
import { fetchRecentReviews } from "../api";
import Review from "./Review";
import { useOutletContextUser } from "../hooks/useUser";

export default function RecentReviews() {
  // useQuery는 비동기 메소드이기 때문에, 두 개 이상의 useQuery를 사용할 때는 uerQueries를 사용하자.

  const { user } = useOutletContextUser();
  const { isLoading: isReviewsLoading, data: reviews } = useQuery<IReview[]>(
    ["recentReviews"],
    fetchRecentReviews
  );

  if (isReviewsLoading) {
    return <SkeletonRecentReviews />;
  } else {
    return (
      <Grid
        w={"90%"}
        gridTemplateColumns={"1fr 1fr"}
        rowGap={8}
        columnGap={16}
        mx={"auto"}
      >
        {reviews?.map((review, index) => {
          return (
            <Review
              key={index}
              id={review.id}
              user={review.user}
              avatar={review.avatar}
              title={review.title}
              content={review.content}
              like_count={review.like_count}
              comment_count={review.comment_count}
              created_at={review.created_at}
              isLiked={
                user && review.like_user_pk.includes(user?.pk) ? true : false
              }
            />
          );
        })}
      </Grid>
    );
  }
}
