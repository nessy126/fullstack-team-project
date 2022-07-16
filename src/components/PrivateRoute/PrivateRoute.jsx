import { getIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...routeProps }) => {
  const isAuth = useSelector(getIsLogin);
  return isAuth ? (
    <Route {...routeProps}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
