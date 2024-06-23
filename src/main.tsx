import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootRoute } from "./routes/root";
import { AboutRoute } from "./routes/about";
import { ContactRoute } from "./routes/contact";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
  },
  {
    path: "/about",
    element: <AboutRoute />,
  },
  {
    path: "/contact",
    element: <ContactRoute />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
