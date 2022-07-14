import Container from "components/Container";
import TrainingPage from "pages/TrainingPage";

import MainNav from "components/MainNav";
import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
// import Statistics from "./components/Statistics";
// import MyGoals from "./components/MyGoals";

function App() {
  return (
    <Container>
      <TrainingPage />
      <MainNav />
      <LoginForm />
      <RegisterForm />
      {/* <Statistics /> */}
      {/* <MyGoals /> */}
    </Container>
  );
}

export default App;
