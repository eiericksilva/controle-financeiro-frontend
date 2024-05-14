import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import SideNavbar from "../components/sidenavbar/sidenavbar";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <SideNavbar />
        <div className="p-4 flex-1 overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
