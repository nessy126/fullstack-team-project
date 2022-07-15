import { getIsLogin } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ children, path, isRestricted }) => {
  const isAuth = useSelector(getIsLogin);

  return isAuth && isRestricted ? (
    <Redirect to="/" />
  ) : (
    <Route path={path}>{children}</Route>
  );
};

export default PublicRoute;