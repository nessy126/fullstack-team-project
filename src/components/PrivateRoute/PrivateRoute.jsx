import { getIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Container from "components/Container";

const PrivateRoute = () => {
  const isAuth = useSelector(getIsLogin);

  return isAuth ? (
    <Container>
      <Outlet />
    </Container>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
