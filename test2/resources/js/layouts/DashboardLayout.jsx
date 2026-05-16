import { Outlet } from "../../node_modules/react-router-dom";

function DashboardLayout() {
      return (
        <>
    <div style={{ background: "red", height: "100vh", width: "200px" }}>
      Dashboard LAYOUT WORKS
    <Outlet/>
    </div>
        </>
  );
}

export default DashboardLayout;