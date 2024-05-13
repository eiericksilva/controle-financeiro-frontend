import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./pages/error-page";
import User from "./routes/user";
import Transaction from "./routes/transaction";
import Tag from "./routes/tag";
import Category from "./routes/category";
import Account from "./routes/account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/tag",
        element: <Tag />,
      },
      {
        path: "/transaction",
        element: <Transaction />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
