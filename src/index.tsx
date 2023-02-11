import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/source-code-pro/700.css";
import "@fontsource/source-code-pro/600.css";
import "@fontsource/source-code-pro/400.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import CharacterContextProvider from "./store/contexts/characters/CharacterContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import MyCharacters from "./pages/MyCharacters/MyCharacters";
import UiContextProvider from "./store/contexts/UiContext/UiContextProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "mycharacters",
        element: <MyCharacters />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UiContextProvider>
      <CharacterContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </CharacterContextProvider>
    </UiContextProvider>
  </React.StrictMode>
);
