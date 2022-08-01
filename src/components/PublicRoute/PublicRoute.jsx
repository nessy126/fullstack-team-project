import { getIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getStatusIsTraining } from "redux/auth/authSelectors";
import ContainerPublic from "components/ContainerPublic";

const PublicRoute = () => {
  const isAuth = useSelector(getIsLogin);
  const training = useSelector(getStatusIsTraining);

  return isAuth ? (
    <Navigate to={training ? "/training" : "/library"} replace />
  ) : (
    <ContainerPublic>
      <Outlet />
    </ContainerPublic>
  );
};

export default PublicRoute;
