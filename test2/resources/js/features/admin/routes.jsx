import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import ProtectedRoute from "../../app/router/ProtectedRoute";
import DashboardLayout from "../../layouts/DashboardLayout";
import { ROLES } from "../../constants/roles";

export const adminRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <Users /> },
    ],
  },
];