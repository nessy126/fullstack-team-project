import AuthForm from "components/AuthForm";
import s from "./LoginForm.module.scss";
import data from "assets/dataBase/quote.json";
import spriteSVG from "assets/images/sprite.svg";

const LoginForm = () => {
  const { text, author } = data;
  return (
    <div className={s.login}>
      <AuthForm type="login" />
      <div className={s.quote}>
        <div className={s.quoteContent}>
          <svg className={s.iconQuote}>
            <use href={`${spriteSVG}#quote`}></use>
          </svg>
          <p className={s.quoteText}>{text}</p>
          {/* <div className={s.author}> */}
          <p className={s.quoteAuthor}>{author}</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
