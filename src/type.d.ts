export interface IFollower {
  pk: number;
  nickname: string;
}

export interface IMeReview {
  pk: number;
  userPk: number;
  code: number;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
}

export interface IMe {
  pk: number;
  avatar: string;
  email: string;
  nickname: string;
  intro: string;
  followings: IFollower[];
  followers: IFollower[];
  reviews: IMeReview[];
}

export interface IFollowVars {
  userId: number;
  isFollow: boolean;
}

export interface IMovie {
  rank: number;
  movieCode: string;
  title: string;
  posterPath: string;
}

export interface IMovieDetail {
  title: string;
  genre: string;
  overview: string;
  releaseDate: string;
  runtime: string;
  rating: number;
  posterPath: string;
  rank?: number;
}

export interface IReview {
  pk: number;
  title: string;
  content: string;
  comment_count: number;
  like_count: number;
  user: string;
  avatar: string;
  created_at: string;
  movie_title?: string;
}

export interface IPostReviewVars {
  movie_code: string;
  movie_title: string;
  title: string;
  content: string;
}
