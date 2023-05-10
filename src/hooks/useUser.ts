import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../api";

// interface IMe {
//   username: string;
//   avatar: string;
//   name: string;
//   gender: string;
//   language: string;
//   currency: string;
//   is_host: boolean;
//   last_login: string;
//   date_joined: string;
// }

export default function useUser() {
  const { isLoading, data, isError } = useQuery(["me"], fetchMe, {
    retry: false,
  });
  return {
    isUserLoading: isLoading,
    user: data,
    isLoggedIn: !isError,
  };
}
