import { HiOutlineDotsVertical } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
const Tag = ({ name }) => {
  return (
    <div className="bg-yellow-300 w-max font-thin text-xs rounded-lg text-center lowercase m-1 flex items-center justify-between px-1">
      <div>{name}</div>
      <HiOutlineDotsVertical className="hover:cursor-pointer" />
    </div>
  );
};

export default Tag;
