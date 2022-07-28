import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Media from "react-media";
import MyGoals from "components/MyGoals";
import StatisticsResults from "components/StatisticsResults/StatisticsResults";
import StatisticsTabl from "components/StatisticsTabl/StatisticsTabl";
import Statistics from "components/CountdownTimer";
import Chart from "components/Chart";
import EndTrainingModal from "components/EndTrainingModal";
import { finishTraining } from "redux/training/trainingOperations";
import s from "./StatisticsData.module.scss";
import { getAllBooks, getAmountOfDays } from "redux/auth/authSelectors";

const StatisticsData = () => {
  const allBooks = useSelector(getAllBooks);
  const amountOfDays = useSelector(getAmountOfDays);
  let readBooks = allBooks?.filter((book) => book?.status === "inReading");
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const { auth } = useSelector((state) => state);

  const openModal = (modalType) => {
    setModalType(modalType);
    setModal(true);
  };

  const closeModal = () => {
    dispatch(finishTraining(auth.training.trainingID));
    setModal(false);
    setModalType(null);
  };

  const arrayStatistic = [
    {
      title: "Amount of books",
      amount: allBooks?.length || 0,
    },
    {
      title: "Amount of days",
      amount: amountOfDays || 0,
    },
    {
      title: "Books left",
      amount: readBooks?.length || 0,
    },
  ];

  return (
    <>
      <section className={s.page__wrapperStat}>
        <Media
          queries={{
            small: "(max-width: 1279px)",
            large: "(min-width: 1280px)",
          }}
        >
          {(matches) => (
            <>
              {matches.small && (
                <>
                  <Statistics setModal={openModal} />
                  <MyGoals data={arrayStatistic} />
                  <StatisticsTabl />
                  <Chart />
                  <StatisticsResults setModal={openModal} />
                </>
              )}
              {matches.large && (
                <>
                  <div className={s.right__wrapper}>
                    <MyGoals data={arrayStatistic} />
                    <StatisticsResults setModal={openModal} />
                  </div>
                  <div className={s.left__wrapper}>
                    <Statistics setModal={openModal} />
                    <StatisticsTabl />
                    <Chart />
                  </div>
                </>
              )}
            </>
          )}
        </Media>
      </section>
      {modal && (
        <EndTrainingModal closeModal={closeModal} modalType={modalType} />
      )}
    </>
  );
};

export default StatisticsData;
