import PropTypes from "prop-types";

const Button = ({ title, className }) => {
  return (
    <button className={`bg-amber-200 p-2 rounded-full w-28 ${className}`}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.object,
};

export default Button;
