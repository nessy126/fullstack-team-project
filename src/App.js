import Container from "./components/Container/Container";
import LoginForm from "./components/LoginForm";
import MainNav from "./components/MainNav/MainNav";

function App() {
  return (
    <Container>
      <MainNav />
      <LoginForm />
    </Container>
  );
}

export default App;
