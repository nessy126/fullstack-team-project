import { NavLink } from "react-router-dom";
import { getIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import s from "./HomePage.module.scss";

const HomePage = () => {
  const isAuth = useSelector(getIsLogin);
  return (
    <div className={s.homePage}>
      <h1>Hello</h1>
      {!isAuth && (
        <div className={s.pages}>
          <NavLink to="/login" className={s.page}>
            Login
          </NavLink>
          <NavLink to="/register" className={s.page}>
            Register
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default HomePage;
