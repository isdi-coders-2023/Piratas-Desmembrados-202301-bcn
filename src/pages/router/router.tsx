import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail";
import HomePage from "../HomePage/HomePage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/character/:id",
        element: <CharacterDetail />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
