import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../api";
import { IMe } from "../type";

export default function useUser() {
  const { isLoading, data, isError } = useQuery<IMe>(["me"], fetchMe, {
    retry: false,
  });
  return {
    isUserLoading: isLoading,
    user: data,
    isLoggedIn: !isError,
  };
}
