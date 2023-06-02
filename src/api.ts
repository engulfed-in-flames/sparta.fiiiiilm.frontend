import axios from "axios";
import Cookie from "js-cookie";
import {
  IFollowVars,
  ILoginVars,
  IPostReviewVars,
  ISingupFormValues,
} from "./type";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
});

export const fetchMovies = async () => {
  const response = await axiosInstance.get("movie/", {
    headers: {
      "X-CSRFToken": Cookie.get("csrftoken") || "",
    },
  });
  return response.data;
};

export const fetchRecentReviews = async () => {
  const response = await axiosInstance.get("reviews/recent/", {
    headers: {
      "X-CSRFToken": Cookie.get("csrftoken") || "",
    },
  });
  return response.data;
};

export const fetchMovie = async (movieCode: string) => {
  const response = await axiosInstance.get(`movie/${movieCode}/`, {
    headers: {
      "X-CSRFToken": Cookie.get("csrftoken") || "",
    },
  });
  return response.data;
};

export const fetchMovieReviews = async (movieCode: string) => {
  const response = await axiosInstance.get(`movie/${movieCode}/reviews/`, {
    headers: {
      "X-CSRFToken": Cookie.get("csrftoken") || "",
    },
  });
  return response.data;
};

export const postReview = async ({
  movie_code,
  movie_title,
  title,
  content,
}: IPostReviewVars) => {
  const response = await axiosInstance.post(
    `movie/${movie_code}/reviews/`,
    { movie_title: movie_title, title: title, content: content },
    {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
        Authorization: `Bearer ${Cookie.get("access")}`,
      },
    }
  );
  return response.status;
};

export const postReviewLike = async (id: number) => {
  const response = await axiosInstance.post(
    `reviews/${id}/like/`,
    {},
    {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
        Authorization: `Bearer ${Cookie.get("access")}`,
      },
    }
  );
  return response.status;
};

export const fetchMe = async () => {
  try {
    const response = await axiosInstance.get("users/me/", {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
        Authorization: `Bearer ${Cookie.get("access")}`,
      },
    });
    if (response.status !== 200) {
      throw new Error("Login failed");
    }
    return response.data;
  } catch (e) {
    return null;
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

export const invalidateUser = async (userPk: number) => {
  const response = await axiosInstance.delete(`users/${userPk}/`, {
    headers: {
      "X-CSRFToken": Cookie.get("csrftoken") || "",
      Authorization: `Bearer ${Cookie.get("access")}`,
    },
  });
  Cookie.remove("access");
  Cookie.remove("refresh");
  return response.status;
};

export const postSignup = async (data: ISingupFormValues) => {
  try {
    const response = await axiosInstance.post(
      `users/signup/`,
      {
        ...data,
      },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    );
    return response.status;
  } catch (error) {
    throw error;
  }
};

export const toggleFollowing = async ({ userPk, isFollow }: IFollowVars) => {
  const response = await axiosInstance.post(
    `users/${userPk}/follow/`,
    {
      is_follow: isFollow,
    },
    {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
        Authorization: `Bearer ${Cookie.get("access")}`,
      },
    }
  );
  return response.data;
};
