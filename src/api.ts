import axios from "axios";
import Cookie from "js-cookie";
import { IFollowVars } from "./type";

export interface ILoginVars {
  email: string;
  password: string;
}

// const myInstance = axios.create({
//   baseURL: "http://13.125.252.32/api/v1/",
//   withCredentials: true,
// });

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
});

// export const fetchLogin = async ({ email, password }: ILoginVars) => {
//   const response = await myInstance.post("users/token/", {
//     email,
//     password,
//   });
//   const { access, refresh } = response.data;
//   Cookie.set("access", access);
//   Cookie.set("refresh", refresh);
// };

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

// export const fetchMe = async () =>
//   myInstance
//     .get("users/1/", {
//       headers: {
//         // "X-CSRFToken": Cookie.get("csrftoken") || "",
//         Authorization: `Bearer ${Cookie.get("access")}`,
//       },
//     })
//     .then((response) => response.data);

export const fetchMe = async () =>
  axiosInstance
    .get("users/me/", {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
        Authorization: `Bearer ${Cookie.get("access")}`,
      },
    })
    .then((response) => response.data);

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
