import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Media from "react-media";
import MyGoals from "components/MyGoals";
import TrainingData from "components/TrainingData";
import Chart from "components/Chart";
import StatisticsResults from "components/StatisticsResults/StatisticsResults";
import StatisticsTabl from "components/StatisticsTabl/StatisticsTabl";
import Statistics from "components/Statistics";
import { getAllBooks } from "redux/book/bookOperations";
import { getStatusIsTraining } from "redux/auth/authSelectors";
// import vector2 from "assets/svg/vector2"
import { HiOutlinePlus, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IconContext } from "react-icons";

import s from "./TrainingPage.module.scss";



const TrainingPage = () => {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [amountBooksTraining, setAmountBooksTraining] = useState(0);
  const [amountDaysTraining, setAmountDaysTraining] = useState(0);
  const [dataStartTraining, setDataStartTraining] = useState(0);
  const [dataEndTraining, setDataEndTraining] = useState(0);
  const [hideRightPart, setHideRightPart] = useState(false);
  const [bookListPlaining, setBookListPlaining] = useState([]);
  const statusIsTraining = useSelector(getStatusIsTraining);

  const getAmountBooksTraining = (e) => {
    setAmountBooksTraining(e);
  };
  const getAmountDaysTraining = (e) => {
    setAmountDaysTraining(e);
  };
  const getDataStartTraining = (e) => {
    setDataStartTraining(e);
  };
  const getDataEndTraining = (e) => {
    setDataEndTraining(e);
  };
  const getBookListPlaining = (e) => {
    setBookListPlaining(e);
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

  const dataForChartPlaining = {
    bookList: bookListPlaining,
    amountOfBooks: amountBooksTraining,
    startTraining: dataStartTraining,
    endTraining: dataEndTraining
  };

  const toglMobileTraining = (e) => {
    setHideRightPart(!hideRightPart)
    }

  useEffect(() => {
    dispatch(getAllBooks(auth));
  }, [dispatch, auth]);

  return (
    <Media queries={{
      small: "(max-width: 767px)",
      medium: "(min-width: 768px) and (max-width: 1199px)",
      large: "(min-width: 1200px)"
    }}>
      {(matches) => (
        <>
          {matches.small && (!statusIsTraining ?
            (<section className={s.page__wrapper}>
              {hideRightPart ? (
                <button className={s.button__arrow} type='button' onClick={toglMobileTraining}>
                  <IconContext.Provider
                    value={{
                    className: `${s.icon__arrow}`,
                    style: {
                    width: "24px",
                    height: "12px",
                        },
                    }}>
                    <HiOutlineArrowNarrowLeft />
                  </IconContext.Provider>
            </button>): null}
              {!hideRightPart ?(<div className={s.right__wrapper}>
                  <MyGoals data={arrayPlanTraining} />
              </div>): null}
              <div className={s.left__wrapper}>
                <TrainingData
                  getAmountDaysTraining={getAmountDaysTraining}
                  getAmountBooksTraining={getAmountBooksTraining}
                  getDataStartTraining={getDataStartTraining}
                  getDataEndTraining={getDataEndTraining}
                  getBookListPlaining={getBookListPlaining}
                  showRight={hideRightPart}
                />
                {!hideRightPart ? (<>
                  <Chart
                    data={dataForChartPlaining}
                    statusIsTraining={statusIsTraining} />
                  <button className={s.button__plus} type='button' onClick={toglMobileTraining}>
                  <IconContext.Provider
                    value={{
                    className: `${s.react__icon}`,
                    style: {
                    width: "16px",
                    height: "16px",
                        },
                    }}>
                    <HiOutlinePlus />
                  </IconContext.Provider>
                  </button></>): null}
              </div>  
            </section>) :
            (<section className={s.page__wrapper}>
              <div className={s.left__wrapper}>
                <Statistics />
                <MyGoals data={arrayStatistic} />
              </div>
              <div className={s.right__wrapper}>
                <StatisticsTabl/>
                <Chart
                  data={arrayPlanTraining}
                  statusIsTraining={statusIsTraining} />
                <StatisticsResults/>
              </div>
            </section>))}
          {matches.medium && (!statusIsTraining ?
            (<section className={s.page__wrapper}>
              <div className={s.right__wrapper}>
                  <MyGoals data={arrayPlanTraining} />
              </div>
              <div className={s.left__wrapper}>
                <TrainingData
                  getAmountDaysTraining={getAmountDaysTraining}
                  getAmountBooksTraining={getAmountBooksTraining}
                  getDataStartTraining={getDataStartTraining}
                  getDataEndTraining={getDataEndTraining}
                  getBookListPlaining={getBookListPlaining}
                />
                <Chart
                  data={dataForChartPlaining}
                  statusIsTraining={statusIsTraining}/>
              </div>  
            </section>) :
            (<section className={s.page__wrapper}>
              <div className={s.left__wrapper}>
                <Statistics />
                <MyGoals data={arrayStatistic} />
              </div>
              <div className={s.right__wrapper}>
                <StatisticsTabl/>
                <Chart />
                <StatisticsResults/>
              </div>
            </section>))}
          {matches.large && (!statusIsTraining ?
            (<section className={s.page__wrapper}>
              <div className={s.right__wrapper}>
                  <MyGoals data={arrayPlanTraining} />
              </div>
              <div className={s.left__wrapper}>
                <TrainingData
                  getAmountDaysTraining={getAmountDaysTraining}
                  getAmountBooksTraining={getAmountBooksTraining}
                  getDataStartTraining={getDataStartTraining}
                  getDataEndTraining={getDataEndTraining}
                  getBookListPlaining={getBookListPlaining}
                />
                <Chart
                  data={dataForChartPlaining}
                  statusIsTraining={statusIsTraining} />
              </div>  
            </section>) :
            (<section className={s.page__wrapper}>
              <div className={s.left__wrapper}>
                <MyGoals data={arrayStatistic} />
                <StatisticsResults/>
              </div>
              <div className={s.right__wrapper}>
                <Statistics />
                <StatisticsTabl/>
                <Chart />
              </div>
            </section>))}
        </>
      )}
    </Media>
  );
};

export default TrainingPage;
