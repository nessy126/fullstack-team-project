import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Media from "react-media";
import MyGoals from "components/MyGoals";
import TrainingData from "components/TrainingData";
import Chart from "components/Chart";
import Statistics from "components/Statistics";
import { getAllBooks } from "redux/book/bookOperations";
import { getStatusIsTraining } from "redux/auth/authSelectors";
import s from "./TrainingPage.module.scss";

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
    dispatch(getAllBooks(auth));
  }, [dispatch]);

  return (
    <Media queries={{
      medium: "(max-width: 1199px)",
      large: "(min-width: 1200px)"
    }}>
      {(matches) => (
        <>
          {matches.medium && (!statusIsTraining ?
            (<section className={s.page__wrapper}>
              <div className={s.right__wrapper}>
                  <MyGoals data={arrayPlanTraining} />
              </div>
              <div className={s.left__wrapper}>
                <TrainingData
                  getAmountDaysTraining={getAmountDaysTraining}
                  getAmountBooksTraining={getAmountBooksTraining}
                />
                <Chart />
              </div>  
            </section>) :
            (<section className={s.page__wrapper}>
              <div className={s.left__wrapper}>
                <Statistics />
                <MyGoals data={arrayStatistic} />
              </div>
              <div className={s.right__wrapper}>
                <div>StatisticsTabl</div>
                <Chart />
                <div>StatisticsRes</div>
              </div>
            </section>))}
        </>

      )}
    <section className={s.page__wrapper}>
      <div className={s.right__wrapper}>
        {statusIsTraining ? (
          <>
            <Statistics />
            <MyGoals data={arrayStatistic} />
          </>) :
          (<>
          <div className={s.left__wrapper}>
            <MyGoals data={arrayPlanTraining} />
            <TrainingData
              getAmountDaysTraining={getAmountDaysTraining}
              getAmountBooksTraining={getAmountBooksTraining}
            />
              <Chart />
              </div>
          </>)}
        </div>
      </section>
      </Media>
  );
};

export default TrainingPage;
