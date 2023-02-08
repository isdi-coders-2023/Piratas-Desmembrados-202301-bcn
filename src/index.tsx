import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/@fontsource/source-code-pro/700.css";
import "../node_modules/@fontsource/source-code-pro/600.css";
import "../node_modules/@fontsource/source-code-pro/400.css";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import CharacterContextProvider from "./store/contexts/characters/CharacterContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CharacterContextProvider>
      <GlobalStyles />
      <App />
    </CharacterContextProvider>
  </React.StrictMode>
);
