import AuthForm from "components/AuthForm";
import s from "./RegisterForm.module.scss";
import Media from "react-media";
import MobileHomePage from "components/MobileHomePage";

const RegisterForm = () => {
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
            {/* <div className={s.intro}>
          <h1> Books Heading</h1>
        </div> */}
          </div>
        </>
      )}
    </Media>
  );
};

export default RegisterForm;
