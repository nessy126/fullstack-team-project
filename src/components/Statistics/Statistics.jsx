import { useSelector } from "react-redux";
import { getEndTraining } from "redux/auth/authSelectors";
import PropTypes from "prop-types";

import CountdownTimer from "../CountdownTimer/CountdownTimer";
import Loader from "components/Loader";

import s from "./Statistics.module.scss";

const Statistics = ({ setModal }) => {
  const timeEndGoal = useSelector(getEndTraining);
  const now_in_ms = new Date().getTime();
  const getFullYear = new Date().getFullYear();
  const getFullYearMs = new Date(getFullYear + "-01-01").getTime();
  const newYearCountdown = Date.now() - getFullYearMs;
  const timeEndYear = ms_of_a_year(getFullYear) - newYearCountdown;
  const correctTime = timeEndGoal - Date.now();
  const dateTimeToNewYear = now_in_ms + timeEndYear;
  const dateTimeToGoal = now_in_ms + correctTime;

  const {
    auth: { isLoading },
  } = useSelector((state) => state);

  function ms_of_a_year(year) {
    return isLeapYear(year)
      ? 366 * 86400000 - 7200000
      : 365 * 86400000 - 7200000;
  }

  function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  }

  return (
    <>
      <div className={s.counterDiv}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div>
              <h2 className={s.counterTitle}>Year countdown</h2>
              <CountdownTimer targetDate={dateTimeToNewYear} />
            </div>
          </>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div>
              <h2 className={s.counterTitle}>Goal countdown</h2>
              <CountdownTimer
                targetDate={dateTimeToGoal}
                timerType="targetData"
                setModal={setModal}
                timeEndGoal={timeEndGoal}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

Statistics.propTypes = {
  setModal: PropTypes.func.isRequired,
};

export default Statistics;
