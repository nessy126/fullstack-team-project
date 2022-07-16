import AuthForm from "components/AuthForm";
import s from "./RegisterForm.module.scss";

const RegisterForm = () => {
  return (
    <div className={s.register}>
      <AuthForm type="register" />
      <div className={s.intro}>
        <h1> Books Heading</h1>
      </div>
    </div>
  );
};

export default RegisterForm;
