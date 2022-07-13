import AuthForm from "../AuthForm";
import s from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <div className={s.page}>
      <AuthForm />
      <div className={s.quote}>
        <p>
          “Some books should be tasted, some devoured, but only a few should be
          chewed and digested thoroughly.”
        </p>
        <p>Bacon F.</p>
      </div>
    </div>
  );
};

export default LoginForm;
