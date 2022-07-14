import { lazy, Suspense } from "react";
import Container from "./components/Container/Container";
import TrainingPage from './pages/TrainingPage/TrainingPage';

import MainNav from "./components/MainNav/MainNav";
import Statistics from "./components/Statistics/Statistics";
import { useSelector } from "react-redux";
// import { getIsAuth } from "./redux/auth/authSelector";


function App() {
  const isAuth = useSelector((state) => state.auth.token)

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>


      <TrainingPage />
      <MainNav />
      <Statistics />
      </Suspense>
    </Container>
  );
}

export default App;
