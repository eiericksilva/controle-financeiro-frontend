import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import SideNavbar from "../components/sidenavbar/sidenavbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideNavbar />
        <div className="p-4 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
