import { useSelector } from "react-redux";
import Media from "react-media";

import AuthForm from "components/AuthForm";
import MobileHomePage from "pages/MobileHomePage";
import CheckEmailModal from "components/CheckEmailModal";

import s from "./RegisterPage.module.scss";

const RegisterPage = () => {
  const { registerPass } = useSelector((state) => state.auth);

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
            {registerPass && <CheckEmailModal isRegister />}
          </div>
        </>
      )}
    </Media>
  );
};

export default RegisterPage;
