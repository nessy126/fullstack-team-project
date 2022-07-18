import { lazy, Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";

import Container from "components/Container";
import PublicRoute from "components/PublicRoute";
import PrivateRoute from "components/PrivateRoute";

import MainNav from "./components/MainNav/MainNav";

import { useDispatch, useSelector } from "react-redux";
import { current } from "redux/auth/authActionThunk";
import { getIsLogin } from "redux/auth/authSelectors";

const HomePage = lazy(() => import("pages/HomePage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LibraryPage = lazy(() => import("pages/LibraryPage"));
const TrainingPage = lazy(() => import("pages/TrainingPage"));

function App() {
  const isLogin = useSelector(getIsLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      {isLogin && <MainNav />}
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PublicRoute exact path="/" isRestricted>
              <HomePage />
            </PublicRoute>
            <PublicRoute exact path="/login" isRestricted>
              <LoginPage />
            </PublicRoute>
            <PublicRoute exact path="/register" isRestricted>
              <RegisterPage />
            </PublicRoute>

            <PrivateRoute path="/training">
              <TrainingPage />
            </PrivateRoute>
            <PrivateRoute path="/library">
              <LibraryPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
