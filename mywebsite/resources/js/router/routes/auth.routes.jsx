import Login from "../../pages/auth/pages/Login";
import Register from "../../pages/auth/pages/Register";
import ForgotPassword from "../../pages/auth/pages/ForgotPassword";

export const authRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot-password", element: <ForgotPassword /> },

];