import { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Container from "../src/components/Container";
import Header from "../src/components/Header";
import Statistics from "../src/components/Statistics";
import PublicRoute from "../src/components/PublicRoute";
import PrivateRoute from "../src/components/PrivateRoute";
import { getIsLogin } from "redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { current } from "redux/auth/authActionThunk";

import HomePage from "components/HomePage";
// const HomePage = lazy(() => import("pages/HomePage"));
const LoginPage = lazy(() => import("../src/pages/LoginPage"));
const RegisterPage = lazy(() => import("../src/pages/RegisterPage"));
const LibraryPage = lazy(() => import("../src/pages/LibraryPage"));
const TrainingPage = lazy(() => import("../src/pages/TrainingPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {/* <PublicRoute path="/" isRestricted>
            <HomePage />
          </PublicRoute> */}
          <PublicRoute path="/login" isRestricted>
            <LoginPage />
          </PublicRoute>
          <PublicRoute path="/register" isRestricted>
            <RegisterPage />
          </PublicRoute>

        <PrivateRoute path="/training">
        <TrainingPage />
        </PrivateRoute>
        <PrivateRoute path="/library">
        <LibraryPage />
        </PrivateRoute>

          {/* {isAuth ? (
            <PublicRoute path="/">
              <TrainingPage />
            </PublicRoute>
          ) : (
            <PublicRoute path="/">
              <LoginPage />
            </PublicRoute>
          )} */}

          {/* <TrainingPage />
          <Statistics /> */}
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;