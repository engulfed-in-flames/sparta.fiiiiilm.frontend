import axios from "axios";
import Cookie from "js-cookie";
import { IFollowVars, IPostReviewVars } from "./type";

export interface ILoginVars {
  email: string;
  password: string;
}

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
});

export const fetchMovies = async () =>
  axiosInstance
    .get("movie/", {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export const fetchRecentReviews = async () =>
  axiosInstance
    .get("reviews/recent/", {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export const fetchMovie = async (movieCode: string) =>
  axiosInstance
    .get(`movie/${movieCode}/`, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export const fetchMovieReviews = async (movieCode: string) =>
  axiosInstance
    .get(`movie/${movieCode}/reviews/`, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export const postReview = async ({
  movie_code,
  movie_title,
  title,
  content,
}: IPostReviewVars) =>
  axiosInstance.post(
    `movie/${movie_code}/reviews/`,
    { movie_title: movie_title, title: title, content: content },
    {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
        Authorization: `Bearer ${Cookie.get("access")}`,
      },
    }
  );

export const fetchMe = async () => {
  if (Cookie.get("access")) {
    const response = await axiosInstance.get("users/me/", {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
        Authorization: `Bearer ${Cookie.get("access")}`,
      },
    });
    return response.data;
  }
};

export const fetchLogin = async ({ email, password }: ILoginVars) => {
  const response = await axiosInstance.post(
    "users/token/",
    {
      email,
      password,
    },
    {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    }
  );
  const { access, refresh } = response.data;
  Cookie.set("access", access);
  Cookie.set("refresh", refresh);
};

export const kakaoLogin = async (code: string) => {
  const response = await axiosInstance.post(
    "users/kakao-login/",
    {
      code,
    },
    {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    }
  );
  if (response.data) {
    const { access, refresh } = response.data;
    Cookie.set("access", access);
    Cookie.set("refresh", refresh);
    return true;
  } else {
    return false;
  }
};

export const githubLogin = async (code: string) => {
  const response = await axiosInstance.post(
    "users/github-login/",
    {
      code,
    },
    {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    }
  );
  if (response.data) {
    const { access, refresh } = response.data;
    Cookie.set("access", access);
    Cookie.set("refresh", refresh);
    return true;
  } else {
    return false;
  }
};

export const toggleFollowing = async ({ userId, isFollow }: IFollowVars) =>
  axiosInstance
    .post(
      `users/${userId}/follow/`,
      {
        is_follow: isFollow,
      },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
          Authorization: `Bearer ${Cookie.get("access")}`,
        },
      }
    )
    .then((response) => response.data);
