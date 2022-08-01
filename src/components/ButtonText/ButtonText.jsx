import PropTypes from "prop-types";
import s from "./ButtonText.module.scss";

const ButtonText = ({
  type = "button",
  onClick,
  disabled = true,
  name,
  text,
}) => {
  return (
    <button
      type={type}
      disabled={!disabled}
      onClick={onClick}
      className={s[name]}
    >
      {text}
    </button>
  );
};
ButtonText.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
export default ButtonText;
