import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "../../router/ProtectedRoute";
import DashboardLayout from "../../layouts/DashboardLayout";
import { ROLES } from "../../constants/roles";

export const companyRoutes = [
  {
    path: "/company",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.COMPANY]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true , element: <Dashboard /> },
    ],
  },
];