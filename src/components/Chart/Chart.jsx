import { useSelector } from "react-redux";

import LineChart from "../LineChart";
import Loader from "components/Loader";

import { getStatusIsTraining } from "redux/auth/authSelectors";
import { get } from "../../utils/localStorage/localStorage";
import { initialData } from "../../assets/helpers/chart";
import { STORAGE_KEY } from "assets/const";

import s from "./Chart.module.scss";

import {
  setTrainingLocStorData,
  daysCountFunc,
  amountOfPagesPlanCountFunc,
  countDaysForTraining,
  makePlanToRead,
  pagesReadInTrainingFunc,
  amountOfPagesFunc,
} from "../../assets/helpers/chart";

const Chart = () => {
  const isTraining = useSelector(getStatusIsTraining);
  const {
    auth: { training, isLoading },
  } = useSelector((state) => state);
  const trainingPlanLocalStorageData = get(STORAGE_KEY);

  const trainingPlanData = {
    booksList: trainingPlanLocalStorageData?.saveListPlainingBooks || [],
    amountOfBooks:
      trainingPlanLocalStorageData?.saveListPlainingBooks?.length || 0,
    startTraining: trainingPlanLocalStorageData?.saveValueStart,
    endTraining: trainingPlanLocalStorageData?.saveValueEnd,
  };

  const trainingData = setTrainingLocStorData(
    isTraining,
    trainingPlanLocalStorageData,
    trainingPlanData,
    initialData,
    training
  );

  const amountOfDays = daysCountFunc(
    trainingData.startTraining,
    trainingData.endTraining
  );

  const amountOfPages = amountOfPagesFunc(trainingData.booksList, isTraining);
  const amountOfPagesPlan = amountOfPagesPlanCountFunc(
    trainingData.booksList,
    amountOfDays
  );

  const daysForTraining = countDaysForTraining(amountOfDays);

  const planToRead = makePlanToRead(
    daysForTraining,
    isTraining,
    trainingData.booksList,
    amountOfDays,
    trainingData.pagesPerDay,
    amountOfPages
  );

  const pagesReadInTraining = pagesReadInTrainingFunc(
    isTraining,
    daysForTraining,
    trainingData.statistics,
    trainingData.startTraining
  );

  const chartData = {
    daysForTraining,
    planToRead,
    pagesReadInTraining,
    amountOfPagesPlan,
  };

  return (
    <div className={s.chartWrapper}>
      {!isTraining ? (
        <LineChart chartData={chartData} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <LineChart chartData={chartData} />
      )}
    </div>
  );
};

export default Chart;
