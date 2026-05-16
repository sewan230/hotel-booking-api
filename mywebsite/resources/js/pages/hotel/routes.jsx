import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "../../router/ProtectedRoute";
import DashboardLayout from "../../layouts/DashboardLayout";
import { ROLES } from "../../constants/roles";

export const hotelRoutes = [
  {
    path: "/hotel",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.HOTEL]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
    ],
  },
];