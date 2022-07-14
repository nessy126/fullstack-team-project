import Container from "./components/Container/Container";
import MainNav from "./components/MainNav/MainNav";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
// import Statistics from "./components/Statistics/Statistics";
// import MyGoals from "./components/MyGoals/MyGoals";

function App() {
  return (
    <Container>
      <MainNav />
      <LoginForm />
      <RegisterForm />
      {/* <Statistics /> */}
      {/* <MyGoals /> */}
    </Container>
  );
}

export default App;
