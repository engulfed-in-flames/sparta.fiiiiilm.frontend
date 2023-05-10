import axios from "axios";
import Cookie from "js-cookie";

export interface ILoginVars {
  email: string;
  password: string;
}

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
});

const tokenInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials: true,
});

export const fetchLogin = async ({ email, password }: ILoginVars) => {
  const response = await tokenInstance.post(
    "api/token/",
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

export const fetchMe = async () =>
  axiosInstance
    .get("users/me/", {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
        Authorization: `Bearer ${Cookie.get("access")}`,
      },
    })
    .then((response) => response.data);
