import Container from "./components/Container/Container";
import TrainingPage from './pages/TrainingPage/TrainingPage';

import MainNav from "./components/MainNav/MainNav";
import Statistics from "./components/Statistics/Statistics";


function App() {
  return (
    <Container>
      <TrainingPage />
      <MainNav />
      <Statistics />
    </Container>
  );
}

export default App;
