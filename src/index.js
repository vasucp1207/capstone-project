import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from './context'

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);
