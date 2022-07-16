import MyGoals from "../../components/MyGoals";

import TrainingData from "../../components/TrainingData";
import Chart from "../../components/Chart";
import Statistics from "../../components/Statistics";
import s from "./TrainingPage.module.scss";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import bookSelectors from "../../redux/book/bookSelectors";
import { addBook, getAllBooks } from "../../redux/book/bookOperations";


const TrainingPage = () => {
  const dispatch=useDispatch();
  const allBooksList=useSelector(bookSelectors.getAllBooks);
  const listGoingToRead = useSelector(bookSelectors.getListGoingToRead);
  const listInReading=useSelector(bookSelectors.getListInReading);
console.log(allBooksList);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const array=[
    {
        "title": "Amount of books",
        "amount": 4
    },
    {
        "title": "Amount of days",
        "amount": 30
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
