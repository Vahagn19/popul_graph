import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./app/styles/theme/ThemeProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider attribute="class">
    <App />
  </ThemeProvider>
);

reportWebVitals();
