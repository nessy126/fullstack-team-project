import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Media from "react-media";
import MyGoals from "components/MyGoals";
import TrainingData from "components/TrainingData";
import Chart from "components/Chart";
import StatisticsTabl from "components/StatisticsTabl/StatisticsTabl";
import Statistics from "components/Statistics";
import { getAllBooks } from "redux/book/bookOperations";
import { getStatusIsTraining } from "redux/auth/authSelectors";
// import vector2 from "assets/svg/vector2"
import { HiOutlinePlus, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IconContext } from "react-icons";

import s from "./TrainingPage.module.scss";
import StatisticsResults from "components/StatisticsResults";

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
    endTraining: dataEndTraining,
  };

  const toglMobileTraining = (e) => {
    setHideRightPart(!hideRightPart);
  };

  useEffect(() => {
    dispatch(getAllBooks(auth));
  }, [dispatch, auth]);

  return (
    <>
      <Statistics />
    </>
  );
};

export default TrainingPage;
