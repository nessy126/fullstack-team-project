import { getIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(getIsLogin);

  return <>{isAuth ? children : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
