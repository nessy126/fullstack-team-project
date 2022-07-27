import { BotRightArrow } from "assets/images/icons/botRightArrow";
import { FirstBook } from "assets/images/icons/FirstBook";
import { Flag } from "assets/images/icons/flag";
import s from "./Steps.module.scss";

const Steps = ({ title, underTitle, text }) => {
  return (
    <>
      <h2 className={s.titlesMargin}>
        <strong className={s.titles}>{title}</strong>
      </h2>
      <div>
        <div className={s.textBlock}>
          {title === "STEP 1." ? <FirstBook /> : <Flag />}
          <h3 className={s.underTitle}>{underTitle}</h3>
        </div>
        <div className={s.textBl}>
          <BotRightArrow />
          <p className={s.text}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Steps;
