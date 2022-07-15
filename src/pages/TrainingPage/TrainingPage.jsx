import MyGoals from "../../components/MyGoals";
import PlanningForm from "../../components/PlanningForm";
import TrainingData from "../../components/TrainingData";
import Chart from "../../components/Chart";
import Statistics from "../../components/Statistics";
import s from "./TrainingPage.module.scss";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import bookSelectors from "../../redux/book/bookSelectors";


const TrainingPage = () => {
  const dispatch=useDispatch();
  const allBooks=useSelector(bookSelectors.getAllBooks);
  const listGoingToRead = useSelector(bookSelectors.getListGoingToRead);
  const listInReading=useSelector(bookSelectors.getListInReading);
console.log(allBooks);

  // useEffect(() => {
  //   dispatch(allBooks);
  // }, [dispatch]);

  return (
    <section className={s.page__wrapper}>
      <div className={s.right__wrapper}>
        <MyGoals />
      </div>
      <div className={s.left__wrapper}>
        <PlanningForm />
        <TrainingData />
        <Chart />
        <Statistics />
      </div>
    </section>
  );
};

export default TrainingPage;
