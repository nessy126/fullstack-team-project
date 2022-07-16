import { getIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, path }) => {
  const isAuth = useSelector(getIsLogin);
  return isAuth ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
