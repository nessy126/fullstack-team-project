import AuthForm from "components/AuthForm";
import s from "./LoginPage.module.scss";
import data from "assets/dataBase/quote.json";
import spriteSVG from "assets/images/sprite.svg";

const LoginPage = () => {
  const { text, author } = data;
  return (
    <>
      <div className={s.login}>
        <AuthForm type="login" />
        <div className={s.quote}>
          <div className={s.quoteContent}>
            <svg className={s.iconQuote}>
              <use href={`${spriteSVG}#quote`}></use>
            </svg>
            <p className={s.quoteText}>{text}</p>
            <p className={s.quoteAuthor}>{author}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
