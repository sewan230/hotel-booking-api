import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "../../router/ProtectedRoute";
import DashboardLayout from "../../layouts/DashboardLayout";
import { ROLES } from "../../constants/roles";

export const restaurantRoutes = [
  {
    path: "/restaurant",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.RESTAURANT]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
    ],
  },
];