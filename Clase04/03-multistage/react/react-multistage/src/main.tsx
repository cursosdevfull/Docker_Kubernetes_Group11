import React from "react";
import ReactDOM from "react-dom/client";

import { ListProducts } from "./products";

function App() {
  return (
    <div>
      <ListProducts />
    </div>
  );
}

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
