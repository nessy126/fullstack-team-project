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
  const toggle = ({ isActive }) => {
    return isActive ? { color: "red" } : { color: "black" };
  };
  return (
    <>
      <h1 className={s.title}>Header</h1>
      <NavLink
        exact
        to="/"
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
      >
        HomePage
      </NavLink>
      {isAuth && (
        <>
          <NavLink
            to="/training"
            style={{ color: "black" }}
            activeStyle={{ color: "red" }}
          >
            Training
          </NavLink>
          <NavLink
            to="/library"
            style={{ color: "black" }}
            activeStyle={{ color: "red" }}
          >
            Library
          </NavLink>
        </>
      )}
      <button onClick={logOutUser}>Logout</button>
    </>
  );
};

export default Header;
