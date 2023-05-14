import { useNavigate } from "react-router-dom";
import useUser from "./useUser";
import { useEffect } from "react";

export default function useUserOnly() {
  const { isUserLoading, isLoggedIn } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (isUserLoading || !isLoggedIn) navigate("/");
  }, [isUserLoading, isLoggedIn, navigate]);
}
