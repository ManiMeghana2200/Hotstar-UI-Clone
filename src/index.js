import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeModeProvider } from "./theme";   // ← import the provider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeModeProvider>
    <App />
  </ThemeModeProvider>
);
