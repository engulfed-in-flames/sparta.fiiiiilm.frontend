import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../api";
import { IMe, IUseUserProps } from "../type";
import { useOutletContext } from "react-router-dom";

export function useUser() {
  const { isLoading, data } = useQuery<IMe>(["me"], fetchMe, {
    retry: false,
  });
  return {
    isUserLoading: isLoading,
    user: data || null,
  };
}

export function useOutletContextUser() {
  return useOutletContext<IUseUserProps>();
}
