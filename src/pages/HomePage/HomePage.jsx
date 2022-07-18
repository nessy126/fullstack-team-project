import Media from "react-media";
import MobileHomePage from "pages/MobileHomePage";
import LoginPage from "pages/LoginPage";

const HomePage = () => {
  return (
    <Media
      queries={{
        small: "(max-width: 767px)",
        medium: "(min-width: 768px)",
      }}
    >
      {(matches) => (
        <>
          {matches.small && <MobileHomePage />}
          {matches.medium && <LoginPage />}
        </>
      )}
    </Media>
  );
};

export default HomePage;