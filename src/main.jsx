import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import YoutubeContext from "./context/YoutubeContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <YoutubeContext>
    <RouterProvider router={routing} />
  </YoutubeContext>
);
