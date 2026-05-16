import { useRoutes } from "react-router-dom";
import { authRoutes } from "./routes/auth.routes";
import { publicRoutes } from "./routes/public.routes";
import { hotelRoutes } from "../pages/hotel/routes";
import { companyRoutes } from "../pages/company/routes";
import { guideRoutes } from "../pages/guide/routes";
import { adminRoutes } from "../pages/admin/routes";
import { storeRoutes } from "../pages/adminStore/routes";
import { restaurantRoutes } from "../pages/restaurant/routes";


export default function AppRouter() {
  const routes = [
  ...publicRoutes,
  ...authRoutes,
  ...companyRoutes,
  ...hotelRoutes,
  ...guideRoutes,
  ...adminRoutes,
  ...storeRoutes,
  ...restaurantRoutes
];
  return useRoutes(routes);
}