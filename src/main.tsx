import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

//BrowserRouter
import { BrowserRouter } from "react-router-dom";
// Auto Scroll to top
import ScrollToTop from "@components/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
