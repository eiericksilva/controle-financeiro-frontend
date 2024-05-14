import { CiSearch } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
const SearchInput = ({ placeholder }) => {
  return (
    <div className="relative">
      <input
        className="border outline-none rounded-full w-96 p-2"
        placeholder={placeholder}
      />
      <button className="absolute top-[25%] right-4">
        <CiSearch size={20} />
      </button>
    </div>
  );
};

export default SearchInput;
