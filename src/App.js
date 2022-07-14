import { lazy, Suspense } from "react";
import Container from "./components/Container/Container";
import TrainingPage from "./pages/TrainingPage/TrainingPage";

// import Statistics from "./components/Statistics/Statistics";
// import MyGoals from "./components/MyGoals/MyGoals";
import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";
// import { useSelector } from "react-redux";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Switch } from "react-router-dom";
// import { getIsAuth } from "./redux/auth/authSelector";


function App() {
  // const isAuth = useSelector((state) => state.auth.token)

  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute path="/login" isRestricted>
        <LoginPage/>
      </PublicRoute>
      <PublicRoute path="/register" isRestricted>
        <RegisterPage/>
      </PublicRoute>

      <TrainingPage />
      <Statistics />
      </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
