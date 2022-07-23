import s from "./NotFoundPage.module.scss";

import spriteSVG from "assets/images/sprite.svg";

const NotFoundPage = () => {
  return (
    <div className={s.notfound}>
      <svg className={s.iconVector}>
        <use href={`${spriteSVG}#icon-sad`}></use>
      </svg>
      <p className={s.badReq}>404</p>

      <h1 className={s.text}>Page not found</h1>
    </div>
  );
};

export default NotFoundPage;
