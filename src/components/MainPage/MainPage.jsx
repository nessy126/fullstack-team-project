import { NavLink } from "react-router-dom";
import { getIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";

import data from "assets/dataBase/db.json";
import s from "./HomePage.module.scss";
import List from "./List";

const HomePage = () => {
  const isAuth = useSelector(getIsLogin);

  const { helpingList, alsoList } = data;
  return (
    <div className={s.homePage}>
      <h1>Books Reading</h1>
      <h2>Will help you to </h2>
      <List list={helpingList} />

      <h2>You may also</h2>
      <List list={alsoList} />
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
