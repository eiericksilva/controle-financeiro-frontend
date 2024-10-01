import { HiOutlineDotsVertical } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
const Tag = ({ name, color }) => {
  return (
    <div
      className={`w-max font-thin text-xs rounded-lg text-center lowercase m-1 flex items-center justify-between px-1`}
      style={{ backgroundColor: color }}
    >
      <div>{name}</div>
      <HiOutlineDotsVertical className="hover:cursor-pointer" />
    </div>
  );
};

export default Tag;
