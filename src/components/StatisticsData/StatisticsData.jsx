import Media from "react-media";
import MyGoals from "components/MyGoals";
import StatisticsResults from "components/StatisticsResults/StatisticsResults";
import StatisticsTabl from "components/StatisticsTabl/StatisticsTabl";
import Statistics from "components/CountdownTimer";
import Chart from "components/Chart";
import s from "./StatisticsData.module.scss";
import { useSelector } from "react-redux";
import { getAllBooks, getAmountOfDays } from "redux/auth/authSelectors";

const StatisticsData = () => {
  const allBooks = useSelector(getAllBooks);
  const amountOfDays = useSelector(getAmountOfDays);
  let readBooks = allBooks?.filter((book) => book?.status === "finished");
  const arrayStatistic = [
    {
      title: "Amount of books",
      amount: allBooks.length,
    },
    {
      title: "Amount of days",
      amount: amountOfDays,
    },
    {
      title: "Books left",
      amount: readBooks.length,
    },
  ];
  return (
    <section className={s.page__wrapperStat}>
      <Media
        queries={{
          small: "(max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                <Statistics />
                <MyGoals data={arrayStatistic} />
                <StatisticsTabl />
                <Chart />
                <StatisticsResults />
              </>
            )}
            {matches.large && (
              <>
                <div className={s.right__wrapper}>
                  <MyGoals data={arrayStatistic} />
                  <StatisticsResults />
                </div>
                <div className={s.left__wrapper}>
                  <Statistics />
                  <StatisticsTabl />
                  <Chart />
                </div>
              </>
            )}
          </>
        )}
      </Media>
    </section>
  );
};

export default StatisticsData;
