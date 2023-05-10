import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";
import Me from "./routes/Me";
import KakaoConfirm from "./routes/KakaoConfirm";
import GithubConfirm from "./routes/GithubConfirm";
import NotFound from "./routes/NotFound";

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
        { path: "me", element: <Me /> },
        {
          path: "/detail",
          element: <MovieDetail />,
        },
        {
          path: "social",
          children: [
            {
              path: "kakao",
              element: <KakaoConfirm />,
            },
            {
              path: "github",
              element: <GithubConfirm />,
            },
          ],
        },
      ],
      errorElement: <NotFound />,
    },
  ],
  { basename: "" }
);

export default myRouter;
