import { NavLink } from "react-router-dom";
import { getIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import Media from "react-media";

import data from "assets/dataBase/descriptionLists.json";
import ListDescription from "components/ListDescription";

import s from "./MobileHomePage.module.scss";

const MobileHomePage = () => {
  const isAuth = useSelector(getIsLogin);

  const { helpingList, alsoList } = data;
  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: " (max-width: 767px)",
        large: "(max-width: 1279px)",
      }}
    >
      {(matches) => (
        <div className={s.homePage}>
          <h1>Books Reading</h1>
          <h2>Will help you to </h2>
          <ListDescription list={helpingList} />

          <h2>You may also</h2>
          <ListDescription list={alsoList} />
          {!isAuth && matches.medium && (
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
      )}
    </Media>
  );
};

export default MobileHomePage;
