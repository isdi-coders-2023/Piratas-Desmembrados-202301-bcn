import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail";
import HomePage from "../HomePage/HomePage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <CharacterDetail />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
