import { CiUser, CiWallet, CiHome } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { SlTag } from "react-icons/sl";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";

const SideNavbar = ({ sidenavbarIsOpen }) => {
  return (
    <div className={`p-4 border-r-2 ${sidenavbarIsOpen ? "" : "hidden"}`}>
      <nav className="w-60">
        <ul>
          <Link className="w-full :cursor-pointer  z-10 " to={`/home`}>
            <li className="flex items-center gap-3 py-2  hover:text-red-950">
              <CiHome size={22} />
              Início
            </li>
          </Link>
          <Link className="w-full :cursor-pointer  z-10 " to={`/account`}>
            <li className="flex items-center gap-3 py-2  hover:text-red-950">
              <CiWallet size={22} />
              Carteiras
            </li>
          </Link>
          <Link className="w-full  cursor-pointer z-10" to={`/category`}>
            <li className="flex items-center gap-3 py-2  hover:text-red-950">
              <TbCategory size={22} />
              Categorias
            </li>
          </Link>
          <Link className="w-full  cursor-pointer z-10" to={`/tag`}>
            <li className="flex items-center gap-3 py-2 hover:text-red-950">
              <SlTag size={18} />
              Tags
            </li>
          </Link>
          <Link className="w-full  cursor-pointer z-10" to={`/transaction`}>
            <li className="flex items-center gap-3 py-2  hover:text-red-950">
              <GrTransaction size={20} />
              Transações
            </li>
          </Link>
          <Link className="w-full  cursor-pointer z-10" to={`/user`}>
            <li className="flex items-center gap-3 py-2  hover:text-red-950">
              <CiUser size={20} />
              Usuários
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
