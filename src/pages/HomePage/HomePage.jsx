import Media from "react-media";
import MainPage from "components/MainPage";
import LoginPage from "../LoginPage";
import { useSelector } from "react-redux";
import { getIsLogin } from "redux/auth/authSelectors";
import { Redirect } from "react-router-dom";

const HomePage = () => {
  const isAuth = useSelector(getIsLogin);
  console.log(isAuth);
  return (
    <Media
      queries={{
        small: "(max-width: 767px)",
        medium: "(min-width: 768px)",
      }}
    >
      {(matches) => (
        <>
          {matches.small && <MainPage />}
          {matches.medium && <LoginPage />}
        </>
      )}
    </Media>
  );
};

export default HomePage;
