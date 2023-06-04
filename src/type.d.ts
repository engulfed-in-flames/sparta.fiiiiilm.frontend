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

export interface IUseUserProps {
  isUserLoading: Boolean;
  user: IMe | null;
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
  id: number;
  title: string;
  content: string;
  comment_count: number;
  like_count: number;
  like_user_pk: number[];
  user: string;
  avatar: string;
  movie_title?: string;
  created_at: string;
}

export interface IReviewProps {
  id: number;
  title: string;
  content: string;
  comment_count: number;
  like_count: number;
  user: string;
  avatar: string;
  movie_title?: string;
  created_at: string;
  isLiked: boolean;
}

// Interface for Backend API
export interface ILoginVars {
  email: string;
  password: string;
}

export interface IFollowVars {
  userPk: number;
  isFollow: boolean;
}

export interface IPostReviewVars {
  movie_code: string;
  movie_title: string;
  title: string;
  content: string;
}

interface ISingupFormValues {
  email: string;
  password1: string;
  password2: string;
  nickname: string;
}
