import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TrainingData from "components/TrainingData";
import StatisticsData from "components/StatisticsData";

import { getAllBooks } from "redux/book/bookOperations";
import { getProgressTraining } from "redux/training/trainingOperations";
import { getStatusIsTraining } from "redux/auth/authSelectors";

const TrainingPage = () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);
  const statusIsTraining = useSelector(getStatusIsTraining);

  useEffect(() => {
    if (!statusIsTraining) {
      dispatch(getAllBooks(auth));
    }
  }, [dispatch, auth, statusIsTraining]);

  useEffect(() => {
    if (statusIsTraining) {
      dispatch(getProgressTraining());
    }
  }, [dispatch, statusIsTraining]);

  return (
    <>
      {!statusIsTraining && <TrainingData />}
      {statusIsTraining && <StatisticsData />}
    </>
  );
};

export default TrainingPage;
