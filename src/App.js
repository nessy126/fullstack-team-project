import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Container from "components/Container";
import Header from "components/Header";
import PublicRoute from "components/PublicRoute";
import PrivateRoute from "components/PrivateRoute";
import { current } from "redux/auth/authOperations";
import NotFoundPage from "pages/NotFoundPage";

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
          <Route element={<PublicRoute />}>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/register" exact element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/library" element={<LibraryPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
