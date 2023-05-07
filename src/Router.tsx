import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";

const myRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
      errorElement: <h1>404 Not Found</h1>,
    },
  ],
  { basename: "" }
);

export default myRouter;
