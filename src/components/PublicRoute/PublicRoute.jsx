import { getIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoute = () => {
  const isAuth = useSelector(getIsLogin);
  const location = useLocation();
  console.log("Public");

  // console.log(location);
  // console.log(isRestricted);
  return isAuth ? <Navigate to="/training" replace /> : <Outlet />;
};

export default PublicRoute;