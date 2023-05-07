import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Root() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default Root;
