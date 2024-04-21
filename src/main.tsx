import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import CurrentPage from "./components/CurrentPage.tsx";
import StorePage from "./components/StorePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/CurrentPage" replace /> },
      {
        path: "CurrentPage",
        element: <CurrentPage />,
      },
      {
        path: "StorePage",
        element: <StorePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
