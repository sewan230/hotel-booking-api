import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";
// import Home from "../features/public/pages/Home";
function MainLayout() {
      return (
        <div className="h-screen flex flex-col">
        <Navbar>
        </Navbar>
        <main className="grow">
    <Outlet/>
        </main>

        <Footer/>
        </div>
  );
}

export default MainLayout;