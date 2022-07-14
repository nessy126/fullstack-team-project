import { lazy, Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivatRoute from "./components/PrivatRoute/PrivatRoute";
import { getIsAuth } from "./redux/auth/authSelector";
import {useSelector} from 'react-redux';

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"))
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"))
const LibraryPage = lazy(() => import("./pages/LibraryPage/LibraryPage"))
const TrainingPage = lazy(() => import("./pages/TrainingPage/TrainingPage"))


function App() {
  const isAuth = useSelector(getIsAuth)
 
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

      <PrivatRoute path="/training" >
        <TrainingPage/>
      </PrivatRoute>
      <PrivatRoute path="/library" >
        <LibraryPage/>
      </PrivatRoute>

      {isAuth ? (<PublicRoute path="/" >
        <TrainingPage/>
      </PublicRoute>) : (
        <PublicRoute path="/" >
        <LoginPage/>
     </PublicRoute>
      )
      }
      
      {/* <TrainingPage />
      <Statistics /> */}
      </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
