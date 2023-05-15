import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";
import { useEffect } from "react";

export default function useUserOnly() {
  const { isUserLoading, user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (isUserLoading || user) navigate("/");
  }, [isUserLoading, user, navigate]);
}
