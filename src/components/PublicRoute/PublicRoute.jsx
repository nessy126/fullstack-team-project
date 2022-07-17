import { getIsLogin } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, isRestricted = false }) => {
  const isAuth = useSelector(getIsLogin);

  return (
    <>
      {isAuth && isRestricted ? <Navigate to="/training" replace /> : children}
    </>
  );
};

export default PublicRoute;
