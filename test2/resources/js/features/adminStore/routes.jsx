import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "../../app/router/ProtectedRoute";
import DashboardLayout from "../../layouts/DashboardLayout";
import { ROLES } from "../../constants/roles";

export const storeRoutes = [
  {
    path: "/store",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.STORE]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
    ],
  },
];