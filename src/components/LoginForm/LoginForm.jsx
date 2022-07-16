import AuthForm from "components/AuthForm";
import s from "./LoginForm.module.scss";

import spriteSVG from "assets/images/sprite.svg";

const LoginForm = () => {
  return (
    <div className={s.login}>
      <AuthForm type="login" />
      <div className={s.quote}>
        <div className={s.quoteContent}>
          <svg className={s.iconQuote}>
            <use href={`${spriteSVG}#quote`}></use>
          </svg>
          <p className={s.quoteText}>
            Some books should be tasted, some devoured, but only a few should be
            chewed and digested thoroughly.
          </p>
          <div className={s.author}>
            <p className={s.quoteAuthor}>Bacon F.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;