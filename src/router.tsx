import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
]);

export default router;
