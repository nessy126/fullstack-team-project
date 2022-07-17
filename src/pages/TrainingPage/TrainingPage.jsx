import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MyGoals from "components/MyGoals";
import TrainingData from "components/TrainingData";
import Chart from "components/Chart";
import Statistics from "components/Statistics";
import bookSelectors from "redux/book/bookSelectors";
import trainingSelectors from 'redux/training/trainingSelectors';
import { addBook, getAllBooks } from "redux/book/bookOperations";
import { addTraining, getProgress } from 'redux/training/trainingOperations';
import {getStatusTraining} from "redux/auth/authSelectors";
import s from "./TrainingPage.module.scss";

const TrainingPage = () => {
  const dispatch=useDispatch();
  const allBooksList=useSelector(bookSelectors.getAllBooks);
  const listGoingToRead = useSelector(bookSelectors.getListGoingToRead);
  const listInReading=useSelector(bookSelectors.getListInReading);
  const amountBooksTraining=useSelector(trainingSelectors.getAmountBooksTraining);
  const amountDaysTraining=useSelector(trainingSelectors.getAmountDaysTraining);
  const statusTraining= useSelector(getStatusTraining);


  useEffect(() => {
    dispatch(getAllBooks());
    console.log("dispatch(getAllBooks())");
  }, [dispatch]);


  useEffect(() => {
    if(statusTraining){
      dispatch(getProgress());
      console.log("dispatch(getProgress())");
    }
  }, [dispatch, statusTraining]);

  const array=[
    {
        "title": "Amount of books",
        "amount": amountBooksTraining
    },
    {
        "title": "Amount of days",
        "amount": amountDaysTraining ||0
    },
    {
        "title": "Books left",
        "amount": 2
    }
  ]

  return (
    <section className={s.page__wrapper}>
      <div className={s.right__wrapper}>
        <MyGoals data={array}/>
      </div>
      <div className={s.left__wrapper}>
        <TrainingData />
        <Chart />
        <Statistics />
      </div>
    </section>
  );
};

export default TrainingPage;
