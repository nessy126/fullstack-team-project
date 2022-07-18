import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import s from "./Header.module.scss";

import { logout } from "redux/auth/authActionThunk";
import { NavLink } from "react-router-dom";
import { getIsLogin } from "redux/auth/authSelectors";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsLogin);

  const logOutUser = () => {
    dispatch(logout());
  };
  return (
    <>
      <h1 className={s.title}>Header</h1>
      <NavLink to="/">HomePage</NavLink>
      {isAuth && (
        <>
          <NavLink to="/training">Training</NavLink>
          <NavLink to="/library">Library</NavLink>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
    </>
  );
};

export default Header;
