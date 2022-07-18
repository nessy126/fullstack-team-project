import StatisticsTabl from "components/StatisticsTabl";
import CountdownTimer from "./CountdownTimer";
import s from "./Statistics.module.scss";
import { useSelector } from "react-redux";
import trainingSelectors from "redux/training/trainingSelectors";
const Statistics = () => {
  const dateTimeToEnd = useSelector(trainingSelectors.getEndTraining);
  const now_in_ms = new Date().getTime();
  const getFullYear = new Date().getFullYear();
  const getFullYearMs = new Date(getFullYear + "-01-01").getTime();
  const newYearCountdown = Date.now() - getFullYearMs;
  const timeEndYear = ms_of_a_year(getFullYear) - newYearCountdown;
  const dateTimeToNewYear = now_in_ms + timeEndYear;
  const goalCountdown = dateTimeToEnd - now_in_ms;
  const dateTimeToGoal = now_in_ms + goalCountdown;
  console.log("dateTimeToEnd :>> ", dateTimeToEnd);

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
        <div>
          <h2 className={s.counterTitle}>Year countdown</h2>
          <CountdownTimer targetDate={dateTimeToNewYear} />
        </div>
        <div>
          <h2 className={s.counterTitle}>Goal countdown</h2>
          <CountdownTimer targetDate={dateTimeToGoal} />
        </div>
      </div>
      <StatisticsTabl />
    </>
  );
};

export default Statistics;
