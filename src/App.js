import Container from "./components/Container/Container";
import MainNav from "./components/MainNav/MainNav";
import Statistics from "./components/Statistics/Statistics";
import LibraryPage from "./pages/LibraryPage/LibraryPage.jsx";
// import MyGoals from "./components/MyGoals/MyGoals";

function App() {
  const isLogin = true;
  return (
    <>
      {isLogin && <MainNav />}
      <Container>
        <Statistics />
        <LibraryPage />
        {/* <MyGoals /> */}
      </Container>
    </>
  );
}

export default App;
