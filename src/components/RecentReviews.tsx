import { Grid } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import SkeletonRecentReviews from "./SkeletonRecentReviews";
import { IReview } from "../type";
import { fetchRecentReviews } from "../api";
import Review from "./Review";
import useUser from "../hooks/useUser";
import { useEffect, useState } from "react";

export default function RecentReviews() {
  const { user } = useUser();
  const { isLoading: isReviewLoading, data } = useQuery<IReview[]>(
    ["recentReviews"],
    fetchRecentReviews
  );

  const [reviews, setReviews] = useState<IReview[]>();
  useEffect(() => {
    setReviews(data!);
  }, [data]);

  return (
    <>
      {!isReviewLoading ? (
        <Grid
          w={"90%"}
          gridTemplateColumns={"1fr 1fr"}
          rowGap={8}
          columnGap={16}
          mx={"auto"}
        >
          {reviews &&
            reviews.map((review, index) => {
              const liked =
                user && review.like_user_pk.includes(user.pk) ? true : false;
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
                  liked={liked}
                />
              );
            })}
        </Grid>
      ) : (
        <SkeletonRecentReviews />
      )}
    </>
  );
}
