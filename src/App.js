import { lazy, Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import { getIsAuth } from "./redux/auth/authSelector";
import { useSelector } from "react-redux";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LibraryPage = lazy(() => import("./pages/LibraryPage"));
const TrainingPage = lazy(() => import("./pages/TrainingPage"));

function App() {
  const isAuth = useSelector(getIsAuth);

  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
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

          {isAuth ? (
            <PublicRoute path="/">
              <TrainingPage />
            </PublicRoute>
          ) : (
            <PublicRoute path="/">
              <LoginPage />
            </PublicRoute>
          )}

          <TrainingPage />
          <Statistics />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
