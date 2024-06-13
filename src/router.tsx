import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./pages/layout";
import Books from "./pages/Books";
import AuthLayout from "./pages/AuthLayout";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "books",
        element: <Books />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
