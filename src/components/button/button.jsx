import PropTypes from "prop-types";

const Button = ({ title, className, onClick, children }) => {
  return (
    <div className="flex items-center">
      <button
        onClick={onClick}
        className={`${className} bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 text-sm py-2 px-4 rounded-lg flex items-center gap-2`}
      >
        {children}
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.object,
};

export default Button;
