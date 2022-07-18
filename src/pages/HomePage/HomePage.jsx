import Media from "react-media";
import RegisterPage from "pages/RegisterPage";
import MobileHomePage from "pages/MobileHomePage";

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
          {matches.medium && <RegisterPage />}
        </>
      )}
    </Media>
  );
};

export default HomePage;
