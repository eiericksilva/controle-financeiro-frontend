import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import SideNavbar from "../components/sidenavbar/sidenavbar";
import { useState } from "react";

export default function Root() {
  const [sidenavbarIsOpen, setSidenavbarIsOpen] = useState(true);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        sidenavbarIsOpen={sidenavbarIsOpen}
        setSidenavbarIsOpen={setSidenavbarIsOpen}
      />
      <div className="flex flex-1">
        <SideNavbar
          sidenavbarIsOpen={sidenavbarIsOpen}
          setSidenavbarIsOpen={setSidenavbarIsOpen}
        />
        <div className="p-4 flex-1 overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
