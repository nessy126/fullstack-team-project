import { getIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const isAuth = useSelector(getIsLogin);
  
  return isAuth ? <Navigate to="/training" replace /> : <Outlet />;
};

export default PublicRoute;