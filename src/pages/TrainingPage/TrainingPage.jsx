import MyGoals from "../../components/MyGoals";
import PlanningForm from "../../components/PlanningForm";
import TrainingData from "../../components/TrainingData";
import Chart from "../../components/Chart";
import Statistics from "../../components/Statistics";
import s from "./TrainingPage.module.scss";

const TrainingPage = () => {
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
