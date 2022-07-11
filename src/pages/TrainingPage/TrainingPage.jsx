import MyGoals from "../../components/MyGoals/MyGoals";
import PlanningForm from "../../components/PlanningForm/PlanningForm";
import TrainingData from "../../components/TrainingData/TrainingData";
import Chart from "../../components/Chart/Chart";
import Statistics from "../../components/Statistics/Statistics";

const TrainingPage = () => {
  return ( 
    <>
    <PlanningForm/>
    <MyGoals/>
    <TrainingData/>
    <Chart/>
    <Statistics/>
    </>
   );
}
 
export default TrainingPage;