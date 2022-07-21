import { useDispatch } from "react-redux";
import { finishTraiining, getProgressTraining } from "redux/training/trainingOperations";

const StatisticsResults = () => {
  const dispatch = useDispatch()

  
    return (
        <>
            <div>StatisticsRes</div>
            <button 
            type="button"
            onClick={() => {
              dispatch(finishTraiining({
                factEndTraining: "2222222222",
                trainingID: "62d85c62237735ce5d7fd5a7"
            }))
            }}
            >Training will be finished</button>
            <button 
            type="button"
            onClick={() => {
              dispatch(getProgressTraining())
            }}
            >Get Progress</button>
        </>
    );
}

export default StatisticsResults;