import { getIsLogin, getTraining } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, isRestricted = false }) => {
  const isAuth = useSelector(getIsLogin);

  const training = useSelector(getTraining);

  return (
    <>
      {isAuth && isRestricted ? (
        <Navigate to={training ? "/training" : "/library"} replace />
      ) : (
        children
      )}
    </>
  );
};

export default PublicRoute;
