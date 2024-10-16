import { CgMenu } from "react-icons/cg";
import { useLocation } from "react-router-dom";

const Navbar = ({ sidenavbarIsOpen, setSidenavbarIsOpen }) => {
  const location = useLocation();
  const currentRoute = location.pathname.split("/").pop();

  return (
    <div className="bg-white p-4 flex gap-4 items-center shadow-md border-b-4 border-blue-500">
      <CgMenu
        size={28}
        className="text-blue-500 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
        onClick={() => setSidenavbarIsOpen(!sidenavbarIsOpen)}
      />
      {location && (
        <p className="text-xl text-black font-semibold capitalize">
          {currentRoute || "Home"}
        </p>
      )}
    </div>
  );
};

export default Navbar;
