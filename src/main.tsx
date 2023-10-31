import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeContextProvider } from "./features/appTheme/index";
import { BrowserRouter } from "react-router-dom";
import { LanguageContextProvider } from "./features/languageText/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LanguageContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
