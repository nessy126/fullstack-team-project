import CountdownTimer from "./CountdownTimer";

const Statistics = () => {
  const NOW_IN_MS = new Date().getTime();
  const getFullYear = new Date().getFullYear();
  const getFullYearMs = new Date(getFullYear + "-01-01").getTime();
  const NewYearCountdown = Date.now() - getFullYearMs;
  const timeEndYear = ms_of_a_year(getFullYear) - NewYearCountdown;
  const dateTimeToNewYear = NOW_IN_MS + timeEndYear;

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
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeToNewYear} />
    </div>
  );
};

export default Statistics;
