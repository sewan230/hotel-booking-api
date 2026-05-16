import Home from "../../pages/public/pages/Home";
import Hotels from "../../pages/public/pages/hotel/Hotels";
import AllHotels from "../../pages/public/pages/hotel/AllHotels";
import Trips from "../../pages/public/pages/Trips";
import Guides from "../../pages/public/pages/Guides";
import MainLayout from "../../layouts/MainLayout";

export const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,   
    children: [
      { index: true, element: <Home /> },
      { path: "hotels", element: <Hotels /> },
      { path: "all-hotels", element: <AllHotels /> },
        { path: "trips", element: <Trips /> },
  { path: "guides", element: <Guides /> }
    ],
  },
];
