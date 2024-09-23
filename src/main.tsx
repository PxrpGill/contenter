import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./config/styles/reset.css";

import { App } from "@/app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
