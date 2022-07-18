import { getIsLogin } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ children, isRestricted = false, ...routeProps }) => {
  const isAuth = useSelector(getIsLogin);

  return (
    <Route {...routeProps}>
      {isAuth && isRestricted ? <Redirect to="/training" /> : children}
    </Route>
  );
};

export default PublicRoute;
