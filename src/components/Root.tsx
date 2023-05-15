import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useUser } from "../hooks/useUser";

function Root() {
  const { isUserLoading, user } = useUser();
  return (
    <>
      <Header isUserLoading={isUserLoading} user={user} />
      <Outlet context={{ isUserLoading, user }} />
      <Footer />
    </>
  );
}

export default Root;
