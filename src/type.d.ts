interface IFollower {
  pk: number;
  nickname: string;
}

interface IReview {
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
  reviews: IReview[];
}

export interface IFollowVars {
  userId: number;
  isFollow: boolean;
}
