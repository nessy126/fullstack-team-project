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

const StatisticsData = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { auth } = useSelector((state) => state);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    dispatch(finishTraining(auth.training.trainingID));
    setModal(false);
  };

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
                  <Statistics setModal={openModal} />
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
      {modal && <EndTrainingModal closeModal={closeModal} />}
    </>
  );
};

export default StatisticsData;
