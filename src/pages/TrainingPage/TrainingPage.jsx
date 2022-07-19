import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyGoals from "components/MyGoals";
import TrainingData from "components/TrainingData";
import Chart from "components/Chart";
import Statistics from "components/Statistics";
import { getAllBooks } from "redux/book/bookOperations";
import { getStatusIsTraining } from "redux/auth/authSelectors";
import s from "./TrainingPage.module.scss";
import StatisticsResults from "components/StatisticsResults";

const TrainingPage = () => {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [amountBooksTraining, setAmountBooksTraining] = useState(0);
  const [amountDaysTraining, setAmountDaysTraining] = useState(0);
  const statusIsTraining = useSelector(getStatusIsTraining);

  const getAmountBooksTraining = (e) => {
    setAmountBooksTraining(e);
  };
  const getAmountDaysTraining = (e) => {
    setAmountDaysTraining(e);
  };

  const arrayPlanTraining = [
    {
      title: "Amount of books",
      amount: amountBooksTraining,
    },
    {
      title: "Amount of days",
      amount: amountDaysTraining,
    },
  ];

  const arrayStatistic = [
    {
      title: "Amount of books",
      amount: amountBooksTraining,
    },
    {
      title: "Amount of days",
      amount: amountDaysTraining || 0,
    },
    {
      title: "Books left",
      amount: 2,
    },
  ];

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <section className={s.page__wrapper}>
      <div className={s.right__wrapper}>
        {/* {!statusIsTraining ? (
          <MyGoals data={arrayPlanTraining} />
        ) : (
          <MyGoals data={arrayStatistic} />
        )}
        {statusIsTraining ? <Statistics /> : null}
      </div>
      <div className={s.left__wrapper}>
        {!statusIsTraining ? (
          <TrainingData
            getAmountDaysTraining={getAmountDaysTraining}
            getAmountBooksTraining={getAmountBooksTraining}
          />
        ) : null} */}
        <Statistics />
        <StatisticsResults />
        {/* <Chart /> */}
      </div>
    </section>
  );
};

export default TrainingPage;
