import PropTypes from "prop-types";

const Button = ({ title, className, onClick, children }) => {
  return (
    <div className="flex items-center">
      <button
        onClick={onClick}
        className={`${className} bg-amber-100 p-2 rounded-md min-w-28 shadow-md flex items-center justify-center gap-2 border text-sm`}
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
