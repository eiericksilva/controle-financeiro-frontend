import PropTypes from "prop-types";
import { AiOutlinePlus } from "react-icons/ai";

const Button = ({ title, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-amber-100 p-2 rounded-md min-w-28 ${className} shadow-md flex items-center gap-2 border`}
    >
      <AiOutlinePlus size={22} />
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.object,
};

export default Button;
