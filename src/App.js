import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Container from "components/Container";
import Header from "components/Header";
import PublicRoute from "components/PublicRoute";
import PrivateRoute from "components/PrivateRoute";
import { current } from "redux/auth/authActionThunk";

const HomePage = lazy(() => import("pages/HomePage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LibraryPage = lazy(() => import("pages/LibraryPage"));
const TrainingPage = lazy(() => import("pages/TrainingPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute isRestricted>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute isRestricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute isRestricted>
                <RegisterPage />
              </PublicRoute>
            }
          />

          <Route
            path="training"
            element={
              <PrivateRoute>
                <TrainingPage />
              </PrivateRoute>
            }
          />
          <Route
            path="library"
            element={
              <PrivateRoute>
                <LibraryPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
