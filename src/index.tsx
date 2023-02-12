import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/source-code-pro/700.css";
import "@fontsource/source-code-pro/600.css";
import "@fontsource/source-code-pro/400.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import CharacterContextProvider from "./store/contexts/characters/CharacterContextProvider";
import { RouterProvider } from "react-router-dom";
import UiContextProvider from "./store/contexts/UiContext/UiContextProvider";
import { router } from "./pages/router/router";

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
