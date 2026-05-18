// this file is for the authentcation like regestring and stuff route (react front)
import Login from "../../pages/auth/pages/Login";
import Register from "../../pages/auth/pages/Register";
import ForgotPassword from "../../pages/auth/pages/ForgotPassword";
// import ResetPassword from "../../pages/auth/ResetPassword";

export const authRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  // // add it this for the forgetpassword
  //  {path: "/reset-password/:token",element: <ResetPassword />},

];