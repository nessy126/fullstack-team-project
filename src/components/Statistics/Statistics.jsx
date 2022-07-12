import CountdownTimer from "./CountdownTimer";

const Statistics = () => {
  const now_in_ms = new Date().getTime();
  const getFullYear = new Date().getFullYear();
  const getFullYearMs = new Date(getFullYear + "-01-01").getTime();
  const newYearCountdown = Date.now() - getFullYearMs;
  const timeEndYear = ms_of_a_year(getFullYear) - newYearCountdown;
  const dateTimeToNewYear = now_in_ms + timeEndYear;
  const goalCountdown = 3 * 24 * 60 * 60 * 1000;
  const dateTimeToGoal = now_in_ms + goalCountdown;

  function ms_of_a_year(year) {
    return isLeapYear(year)
      ? 366 * 86400000 - 3600000
      : 365 * 86400000 - 3600000;
  }

  function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  }

  return (
    <div>
      <h1>Year countdown</h1>
      <CountdownTimer targetDate={dateTimeToNewYear} />
      <h1>Goal countdown</h1>
      <CountdownTimer targetDate={dateTimeToGoal} />
    </div>
  );
};

export default Statistics;
