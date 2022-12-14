import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import BigCard from "./Componentes/BigCard/bigCard";
import Pokedex from "./Componentes/Pokedex/pokedex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pokedex",
    element: <Pokedex />,
  },
  {
    path: "pokemons/:idPokemons",
    element: <BigCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
