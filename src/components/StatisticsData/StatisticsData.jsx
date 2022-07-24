import Media from "react-media";
import MyGoals from "components/MyGoals";
import StatisticsResults from "components/StatisticsResults/StatisticsResults";
import StatisticsTabl from "components/StatisticsTabl/StatisticsTabl";
import Statistics from "components/CountdownTimer";
import Chart from "components/Chart";
import s from "./StatisticsData.module.scss";

const StatisticsData = () => {
  const arrayStatistic = [
    {
      title: "Amount of books",
      amount: 3,
    },
    {
      title: "Amount of days",
      amount: 2,
    },
    {
      title: "Books left",
      amount: 2,
    },
  ];
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <section className={s.page__wrapperStat}>
                <Statistics />
                <MyGoals data={arrayStatistic} />
                <StatisticsTabl />
                <Chart />
                <StatisticsResults />
              </section>
            )}
            {matches.large && (
              <section className={s.page__wrapperStat}>
                <div className={s.right__wrapper}>
                  <MyGoals data={arrayStatistic} />
                  <StatisticsResults />
                </div>
                <div className={s.left__wrapper}>
                  <Statistics />
                  <StatisticsTabl />
                  <Chart />
                </div>
              </section>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default StatisticsData;
