import Container from "./components/Container/Container";
import LoginForm from "./components/LoginForm";
import MainNav from "./components/MainNav/MainNav";
// import Statistics from "./components/Statistics/Statistics";
// import MyGoals from "./components/MyGoals/MyGoals";

function App() {
  return (
    <Container>
      <MainNav />
      <LoginForm />
      {/* <Statistics /> */}
      {/* <MyGoals /> */}
    </Container>
  );
}

export default App;
