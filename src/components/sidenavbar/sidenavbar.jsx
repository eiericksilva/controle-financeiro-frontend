import { CiUser, CiWallet } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { SlTag } from "react-icons/sl";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="p-4">
      <nav className="w-60">
        <ul>
          <li className="flex items-center gap-3 p-2 hover:bg-slate-100 cursor-pointer">
            <CiWallet size={22} />
            <Link className="w-full" to={`/account`}>
              Account
            </Link>
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-slate-100 cursor-pointer">
            <TbCategory size={22} />
            <Link className="w-full" to={`/category`}>
              Category
            </Link>
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-slate-100 cursor-pointer">
            <SlTag size={18} />
            <Link className="w-full" to={`/tag`}>
              Tag
            </Link>
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-slate-100 cursor-pointer">
            <GrTransaction size={20} />
            <Link className="w-full" to={`/transaction`}>
              Transaction
            </Link>
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-slate-100 cursor-pointer">
            <CiUser size={20} />
            <Link className="w-full" to={`/user`}>
              User
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
