import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../api";

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
