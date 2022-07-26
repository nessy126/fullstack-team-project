import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LoginOptions from "./LoginOptions";

import s from "./RegLogButtons.module.scss";

const RegLogButtons = ({ isRegister }) => {
  return (
    <div className={s.buttons}>
      <button className={s.login} type="submit">
        {isRegister ? "Register" : "Login"}
      </button>
      {isRegister ? (
        <p className={s.alreadyReg}>
          Already have an account?
          <Link to="/login" className={s.changePage}>
            Log in
          </Link>
        </p>
      ) : (
        <LoginOptions />
      )}
    </div>
  );
};

export default RegLogButtons;

RegLogButtons.propTypes = {
  isRegister: PropTypes.bool,
};
