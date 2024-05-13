import { CgMenu } from "react-icons/cg";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentRoute = location.pathname.split("/");
  return (
    <div className="bg-amber-200 p-4 flex gap-2 items-center h-14">
      <CgMenu size={23} className="hover:cursor-pointer" />
      {location && <p className="text-lg">{currentRoute}</p>}
    </div>
  );
};

export default Navbar;
