import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "../../app/router/ProtectedRoute";
import DashboardLayout from "../../layouts/DashboardLayout";
import { ROLES } from "../../constants/roles";

export const guideRoutes = [
  {
    path: "/guide",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.GUIDE]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
    ],
  },
];