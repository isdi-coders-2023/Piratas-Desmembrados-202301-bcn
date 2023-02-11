import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/source-code-pro/700.css";
import "@fontsource/source-code-pro/600.css";
import "@fontsource/source-code-pro/400.css";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import CharacterContextProvider from "./store/contexts/characters/CharacterContextProvider";
import UiContextProvider from "./store/contexts/UiContext/UiContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UiContextProvider>
      <CharacterContextProvider>
        <GlobalStyles />
        <App />
      </CharacterContextProvider>
    </UiContextProvider>
  </React.StrictMode>
);
