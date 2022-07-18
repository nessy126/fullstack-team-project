import { getIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = useSelector(getIsLogin);
  const location = useLocation();
  console.log("Privet");
  // state={{ from: location }}

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
