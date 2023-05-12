import { Box, Grid, HStack, Skeleton } from "@chakra-ui/react";
import React, { useState } from "react";
import SkeletonRecentReviews from "./SkeletonRecentReviews";
import { IReview } from "../type";
import { fetchRecentReviews } from "../api";
import { useQuery } from "@tanstack/react-query";
import Review from "./Review";

export default function RecentReviews() {
  const { isLoading: isReviewLoading, data: reviews } = useQuery<IReview[]>(
    ["recentReviews"],
    fetchRecentReviews
  );
  const [isLoading] = useState(true);
  return (
    <>
      {isLoading ? (
        <Grid
          w={"90%"}
          gridTemplateColumns={"1fr 1fr"}
          rowGap={8}
          columnGap={16}
          mx={"auto"}
        >
          {reviews &&
            reviews.map((review, index) => (
              <Review
                key={index}
                pk={review.pk}
                user={review.user}
                avatar={review.avatar}
                title={review.title}
                content={review.content}
                like_count={review.like_count}
                comment_count={review.comment_count}
                created_at={review.created_at}
              />
            ))}
        </Grid>
      ) : (
        <SkeletonRecentReviews />
      )}
    </>
  );
}
