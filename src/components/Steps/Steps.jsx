import { BotRightArrow } from "assets/images/icons/botRightArrow";
import { FirstBook } from "assets/images/icons/FirstBook";
import { Flag } from "assets/images/icons/flag";
import s from "./Steps.module.scss";

const Steps = ({ type }) => {
  return (
    <>
      {type === "step-1" ? (
        <>
          <h2 className={s.titlesMargin}>
            <strong className={s.titles}>STEP 1.</strong>
          </h2>
          <div>
            <div className={s.textBlock}>
              <FirstBook />
              <h3 className={s.underTitle}>Create your own library</h3>
            </div>
            <div className={s.textBl}>
              <BotRightArrow />
              <p className={s.text}>
                Add there books which you are going to read.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className={s.titlesMargin}>
            <strong className={s.titles}>STEP 2.</strong>
          </h2>
          <div className={s.textBlock}>
            <Flag />
            <h3 className={s.underTitle}>Create your first training</h3>
          </div>
          <div className={s.textBl}>
            <BotRightArrow />
            <p className={s.text}>Set a goal, choose period, start training.</p>
          </div>
        </>
      )}
    </>
  );
};

export default Steps;
