import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const myRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [],
      errorElement: <h1>404 Not Found</h1>,
    },
  ],
  { basename: "" }
);

export default myRouter;
