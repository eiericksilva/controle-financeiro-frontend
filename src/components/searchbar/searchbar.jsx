import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
    <div className="relative">
      <input
        className="border outline-none rounded-full w-96 p-2"
        placeholder="Search user"
      />
      <button className="absolute top-[25%] right-4">
        <CiSearch size={20} />
      </button>
    </div>
  );
};
/* top: '50%',
          right: '10px',
          transform: 'translateY(-50%)', */
export default Searchbar;
