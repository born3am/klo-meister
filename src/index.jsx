/* eslint-disable no-unused-vars */
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
