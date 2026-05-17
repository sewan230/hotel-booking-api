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
      // index(path):(cause it is the main page called index:true)path page in the dashboard,element:page component
      { index: true , element: <Dashboard /> },
    ],
  },
];