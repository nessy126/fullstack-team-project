import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import s from "./ButtonReactIcon.module.scss";

const ButtonReactIcon = ({ onClick, name, children }) => {
  return (
    <button className={s[name]} type="button" onClick={onClick}>
      <IconContext.Provider
        value={{
          className: `${s.icon}`,
          style: {
            width: "100%",
            height: "100%",
          },
        }}
      >
        {children}
      </IconContext.Provider>
    </button>
  );
};

ButtonReactIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default ButtonReactIcon;
