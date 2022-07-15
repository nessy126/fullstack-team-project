import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import s from "./Header.module.scss";

import { logOut } from "../../utils/userApi";

const Header = () => {
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logOut());
  };
  return (
    <>
      <h1 className={s.title}>Header</h1>
      {/* <button onClick={logOutUser}>Logout</button> */}
    </>
  );
};

export default Header;
