import AuthForm from "components/AuthForm";
import s from "./RegisterPage.module.scss";
import Media from "react-media";
import MobileHomePage from "pages/MobileHomePage";

const RegisterPage = () => {
  return (
    <Media
      queries={{
        medium: "(min-width:768px)",
      }}
    >
      {(matches) => (
        <>
          <div className={s.register}>
            <AuthForm type="register" />
            {matches.medium && <MobileHomePage />}
          </div>
        </>
      )}
    </Media>
  );
};

export default RegisterPage;
